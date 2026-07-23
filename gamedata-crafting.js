/* ═══════════════════════════════════════════════════════════════════════
   gamedata-crafting.js — Card Fight v16.0 — SISTEMA DE CRAFTING
   Patch: carrega DEPOIS de gamedata.js, gamedata2.js, gamedata3.js,
   gamedata-pesca.js e gamedata-pesca-patch.js
   ═══════════════════════════════════════════════════════════════════════ */
"use strict";

const CRAFT_VERSION = "16.0.1"; // [FIX] bump de versão pelos 2 bugs corrigidos

// ────────────────────────────────────────────────────────────────────────
// CONFIG PRINCIPAL DO CRAFTING
// ────────────────────────────────────────────────────────────────────────
const CRAFT_CONFIG = {
  raridadesOrdem: ["COMMON","RARE","EPIC","LEGENDARY","MYTHIC","ULTRA_RARE","ORIGENS"],
  distReceitas:   { COMMON:80, RARE:55, EPIC:30, LEGENDARY:20, MYTHIC:10, ULTRA_RARE:4, ORIGENS:1 }, // = 200

  custoOuro: {
    COMMON:      1_000,
    RARE:        5_000,
    EPIC:        35_000,
    LEGENDARY:   100_000,
    MYTHIC:      500_000,
    ULTRA_RARE:  5_000_000,
    ORIGENS:     30_000_000,
  },
  custoGear: {
    COMMON:      10,
    RARE:        25,
    EPIC:        100,
    LEGENDARY:   200,
    MYTHIC:      500,
    ULTRA_RARE:  1_000,
    ORIGENS:     5_000,
  },
  custoGas: {
    COMMON:      5,
    RARE:        5,
    EPIC:        10,
    LEGENDARY:   30,
    MYTHIC:      30,
    ULTRA_RARE:  50,
    ORIGENS:     100,
  },
  inputCardsPorReceita: 2,

  pesquisaCustoNormal: 5_000,
  pesquisaCustoUltra:  20_000,
  pesquisaDurFast:     30 * 60 * 1000,
  pesquisaDurSlow:     90 * 60 * 1000,
  pesquisaMaxDia:      3,
  pesquisaChanceFail:  { COMMON:15, RARE:20, EPIC:30, LEGENDARY:40, MYTHIC:50, ULTRA_RARE:65, ORIGENS:75 },
  pesquisaGoldRefund:  0.5,

  craftDurMs:          60 * 60 * 1000,

  dailyFreeGas:        1,
  dailyFreeGear:       1,

  precos: {
    gasolinaUnit:      50_000,
    gasolinaMaxDia:    5,
    engrenagemUnit:    2_000,
    engrenagemMaxDia:  15,
  },

  battleDropChance:    7,
  pescaDropChance:     22,

  upgrades: [
    { level:1, name:"Máquina Otimizada", engr:100,  gas:50,  redPesq:0.10, redCraft:0.15, bonusRec:0.10 },
    { level:2, name:"Máquina Reforçada", engr:500,  gas:100, redPesq:0.20, redCraft:0.25, bonusRec:0.20 },
    { level:3, name:"Máquina Lendária",  engr:1000, gas:500, redPesq:0.30, redCraft:0.40, bonusRec:0.30 },
  ],
};

// ────────────────────────────────────────────────────────────────────────
// GERAÇÃO DE 200 RECEITAS
// ────────────────────────────────────────────────────────────────────────

// [FIX BUG #2] Antes esta função fazia:
//   const src = [].concat(ALL_CARDS, EXTRA_CARDS);
// Só que EXTRA_CARDS já é injetado dentro de ALL_CARDS no final de
// gamedata2.js (EXTRA_CARDS.forEach(c => ALL_CARDS.push(c))). Concatenar os
// dois de novo aqui fazia toda carta de EXTRA_CARDS entrar DUPLICADA na
// pool de origem das receitas, dando a ela o dobro de chance de ser
// escolhida como "carta A" ou "carta B" de uma fusão em relação a qualquer
// outra carta do jogo. Agora deduplicamos por id, então cada carta conta
// exatamente uma vez, não importa em quantos arrays ela apareça.
function _cfPoolByRarity() {
  const seen = new Set();
  const src  = [];
  const collect = (arr) => {
    if (!Array.isArray(arr)) return;
    for (const c of arr) {
      if (c && c.id && !seen.has(c.id)) {
        seen.add(c.id);
        src.push(c);
      }
    }
  };
  collect(typeof ALL_CARDS   !== "undefined" ? ALL_CARDS   : []);
  collect(typeof EXTRA_CARDS !== "undefined" ? EXTRA_CARDS : []);

  const out = { COMMON:[], RARE:[], EPIC:[], LEGENDARY:[], MYTHIC:[], ULTRA_RARE:[], ORIGENS:[] };
  for (const c of src) {
    if (c && c.rarity && out[c.rarity]) out[c.rarity].push(c);
  }
  // Fallback: se alguma raridade estiver vazia, usa COMMON
  for (const r of Object.keys(out)) {
    if (out[r].length === 0) out[r] = out.COMMON.slice(0, 3);
  }
  return out;
}

function _cfShortName(name) {
  if (!name) return "?";
  const parts = String(name).split(/\s+/);
  return parts[parts.length - 1];
}

function _cfBuildRecipes() {
  const pool = _cfPoolByRarity();
  const recipes = [];
  let seq = 0;
  for (const rar of CRAFT_CONFIG.raridadesOrdem) {
    const target = CRAFT_CONFIG.distReceitas[rar] || 0;
    const list   = pool[rar];
    if (!list || list.length === 0) continue;

    for (let i = 0; i < target; i++) {
      const a = list[i % list.length];
      const b = list[(i * 3 + 1) % list.length];
      seq++;
      const idNum = String(seq).padStart(3, "0");
      const outCard = {
        id:      "cr" + idNum,
        name:    "⚙️ " + _cfShortName(a.name) + "-" + _cfShortName(b.name),
        img:     a.img || "⚙️",
        rarity:  rar,
        atk:     Math.round(((a.atk||10) + (b.atk||10)) / 2 * 1.35),
        hp:      Math.round(((a.hp ||50) + (b.hp ||50)) / 2 * 1.35),
        desc:    "Carta exclusiva forjada na Mesa de Ferramentas. Fusão de " + a.name + " + " + b.name + ".",
        craftedOnly: true,
      };
      recipes.push({
        id:        "rc" + idNum,
        rarity:    rar,
        inputs:    [ { cardId: a.id, qty: 1 }, { cardId: b.id, qty: 1 } ],
        outCard,
      });
    }
  }
  return recipes;
}

const CRAFT_RECIPES = _cfBuildRecipes();

const CRAFT_CARDS_BY_ID = (() => {
  const m = {};
  for (const r of CRAFT_RECIPES) m[r.outCard.id] = r.outCard;
  return m;
})();

if (typeof getCardById === "function") {
  const _origGetCard = getCardById;
  window.getCardById = function(id) {
    const c = _origGetCard(id);
    if (c) return c;
    return CRAFT_CARDS_BY_ID[id] || null;
  };
}

// ────────────────────────────────────────────────────────────────────────
// CONQUISTAS
// ────────────────────────────────────────────────────────────────────────
const CRAFT_ACHIEVEMENTS = [
  { id:"ach_first_craft",   name:"Primeira Fusão",        desc:"Craft sua primeira carta.",           icon:"🔧", check:s=>((s.craftHistory||[]).length>=1),      reward:{gold:2000,gears:20} },
  { id:"ach_10_crafts",     name:"Ferreiro Iniciante",    desc:"Craft 10 cartas.",                    icon:"🛠️", check:s=>((s.craftHistory||[]).length>=10),     reward:{gold:5000,gears:50} },
  { id:"ach_50_crafts",     name:"Mestre Ferreiro",       desc:"Craft 50 cartas.",                    icon:"⚒️", check:s=>((s.craftHistory||[]).length>=50),     reward:{gold:25000,gears:200} },
  { id:"ach_100_crafts",    name:"Lenda da Forja",        desc:"Craft 100 cartas.",                   icon:"🏭", check:s=>((s.craftHistory||[]).length>=100),    reward:{gold:100000,gears:500} },
  { id:"ach_200_crafts",    name:"Fusão Perpétua",        desc:"Craft 200 cartas.",                   icon:"🌌", check:s=>((s.craftHistory||[]).length>=200),    reward:{gold:500000,gears:1000,gas:100} },
  { id:"ach_craft_epic",    name:"Épico Forjado",         desc:"Craft uma carta Épica.",              icon:"🔮", check:s=>_ach_hasCraftedRarity(s,"EPIC"),       reward:{gold:10000,gears:100} },
  { id:"ach_craft_leg",     name:"Toque Lendário",        desc:"Craft uma carta Lendária.",           icon:"👑", check:s=>_ach_hasCraftedRarity(s,"LEGENDARY"),  reward:{gold:30000,gears:200} },
  { id:"ach_craft_myth",    name:"Coração Mítico",        desc:"Craft uma carta Mítica.",             icon:"💀", check:s=>_ach_hasCraftedRarity(s,"MYTHIC"),     reward:{gold:150000,gears:500} },
  { id:"ach_craft_ultra",   name:"Além do Ultra",         desc:"Craft uma carta Ultra Rara.",         icon:"🌠", check:s=>_ach_hasCraftedRarity(s,"ULTRA_RARE"), reward:{gold:2000000,gas:200} },
  { id:"ach_craft_origens", name:"Nascido em Origens",    desc:"Craft uma carta Origens.",            icon:"🔥", check:s=>_ach_hasCraftedRarity(s,"ORIGENS"),    reward:{gold:10000000,gas:500} },
  { id:"ach_first_research",name:"Cientista Iniciante",   desc:"Complete sua 1ª pesquisa com sucesso.",icon:"🔬",check:s=>((s.researchCompleted||0)>=1),         reward:{gold:2000} },
  { id:"ach_50_research",   name:"Enciclopédia Viva",     desc:"Complete 50 pesquisas.",              icon:"📚", check:s=>((s.researchCompleted||0)>=50),        reward:{gold:50000,gears:200} },
  { id:"ach_200_research",  name:"Todos os Segredos",     desc:"Revele todas as 200 receitas.",       icon:"🎓", check:s=>_ach_allRevealed(s),                   reward:{gold:1000000,gears:2000,gas:300} },
  { id:"ach_upg1",          name:"Otimizado",             desc:"Suba a máquina ao Nível 1.",          icon:"🔩", check:s=>((s.craftMachineLevel||0)>=1),         reward:{gold:5000} },
  { id:"ach_upg2",          name:"Reforçado",             desc:"Suba a máquina ao Nível 2.",          icon:"🛡️", check:s=>((s.craftMachineLevel||0)>=2),         reward:{gold:25000,gears:100} },
  { id:"ach_upg3",          name:"Lendária",              desc:"Suba a máquina ao Nível 3.",          icon:"✨", check:s=>((s.craftMachineLevel||0)>=3),         reward:{gold:100000,gears:500,gas:100} },
  { id:"ach_1k_gears",      name:"Colecionador de Engrenagens", desc:"Acumule 1.000 engrenagens.",    icon:"⚙️", check:s=>((s.craftGears||0)>=1000),             reward:{gold:10000} },
  { id:"ach_1k_gas",        name:"Tanque Cheio",          desc:"Acumule 500 gasolinas.",              icon:"⛽", check:s=>((s.craftGas||0)>=500),                reward:{gold:20000} },
  { id:"ach_login_7",       name:"Semana na Forja",       desc:"Reivindique o brinde diário 7 vezes.",icon:"📅", check:s=>((s.craftDailyClaims||0)>=7),          reward:{gold:5000,gears:50} },
  { id:"ach_login_30",      name:"Mestre Assíduo",        desc:"Reivindique o brinde diário 30 vezes.",icon:"🏆",check:s=>((s.craftDailyClaims||0)>=30),         reward:{gold:50000,gears:300,gas:30} },
  { id:"ach_first_drop",    name:"Sorte Grande",          desc:"Ganhe seu primeiro drop em batalha ou pesca.",icon:"🎁",check:s=>((s.craftDropsTotal||0)>=1),   reward:{gold:1000} },
  { id:"ach_100_drops",     name:"Sortudo Insaciável",    desc:"Colete 100 drops de craft.",           icon:"🍀",check:s=>((s.craftDropsTotal||0)>=100),         reward:{gold:50000,gears:200,gas:20} },
  { id:"ach_ticket",        name:"Cliente VIP",           desc:"Abra 1 ticket de compra especial.",   icon:"🎫", check:s=>((s.craftTickets||[]).length>=1),      reward:{gold:5000} },
];

function _ach_hasCraftedRarity(s, rar) {
  const h = s.craftHistory || [];
  return h.some(x => {
    const c = CRAFT_CARDS_BY_ID[x.cardId];
    return c && c.rarity === rar;
  });
}
function _ach_allRevealed(s) {
  return (s.researchRevealed || []).length >= CRAFT_RECIPES.length;
}

// ────────────────────────────────────────────────────────────────────────
// EXTENSÃO DO SAVE
// ────────────────────────────────────────────────────────────────────────
function _cfEnsureFields(save) {
  if (!save) return;
  if (save.craftGears           == null) save.craftGears = 0;
  if (save.craftGas             == null) save.craftGas   = 0;
  if (save.craftMachineLevel    == null) save.craftMachineLevel = 0;
  if (!Array.isArray(save.researchRevealed))  save.researchRevealed = [];
  if (!Array.isArray(save.researchQueue))     save.researchQueue    = [];
  if (!Array.isArray(save.craftQueue))        save.craftQueue       = [];
  if (!Array.isArray(save.craftHistory))      save.craftHistory     = [];
  if (save.researchToday        == null) save.researchToday = 0;
  if (save.researchLastReset    == null) save.researchLastReset = "";
  if (save.craftDailyLast       == null) save.craftDailyLast = "";
  if (save.craftDailyClaims     == null) save.craftDailyClaims = 0;
  if (save.researchCompleted    == null) save.researchCompleted = 0;
  if (save.craftDropsTotal      == null) save.craftDropsTotal   = 0;
  if (!Array.isArray(save.craftShopBoughtToday)) save.craftShopBoughtToday = [];
  if (!Array.isArray(save.craftTickets))      save.craftTickets     = [];
  if (!Array.isArray(save.craftAchievements)) save.craftAchievements= [];
}

function _cfDailyResetIfNeeded(save) {
  const today = new Date().toDateString();
  if (save.researchLastReset !== today) {
    save.researchToday      = 0;
    save.researchLastReset  = today;
    save.craftShopBoughtToday = (save.craftShopBoughtToday||[]).filter(x => x.date === today);
  }
}

(function _cfBootstrap() {
  try {
    if (typeof getOrCreateSave === "function") {
      const s = getOrCreateSave();
      _cfEnsureFields(s);
      _cfDailyResetIfNeeded(s);
      if (typeof writeSave === "function") writeSave(s);
    }
  } catch(e) { /* pages sem gamedata carregado ainda */ }
})();

// ────────────────────────────────────────────────────────────────────────
// UPGRADES / BÔNUS DA MÁQUINA
// ────────────────────────────────────────────────────────────────────────
function cfMachineBonus(save) {
  const lvl = (save && save.craftMachineLevel) || 0;
  if (lvl <= 0) return { redPesq:0, redCraft:0, bonusRec:0, name:"Máquina Básica" };
  const up = CRAFT_CONFIG.upgrades[lvl - 1];
  return { redPesq:up.redPesq, redCraft:up.redCraft, bonusRec:up.bonusRec, name:up.name };
}

// ────────────────────────────────────────────────────────────────────────
// API PÚBLICA DO CRAFTING (usada por Crafting.html)
// ────────────────────────────────────────────────────────────────────────
window.CraftAPI = {
  CONFIG:    CRAFT_CONFIG,
  RECIPES:   CRAFT_RECIPES,
  CARDS:     CRAFT_CARDS_BY_ID,
  ACHIEVEMENTS: CRAFT_ACHIEVEMENTS,

  ensure(save) { _cfEnsureFields(save); _cfDailyResetIfNeeded(save); },

  getRecipe(id) { return CRAFT_RECIPES.find(r => r.id === id); },

  isRevealed(save, recipeId) { return (save.researchRevealed||[]).includes(recipeId); },

  canClaimDaily(save) {
    return save.craftDailyLast !== new Date().toDateString();
  },
  claimDaily(save) {
    if (!this.canClaimDaily(save)) return { ok:false, msg:"Já reivindicou hoje." };
    save.craftGas   = (save.craftGas   || 0) + CRAFT_CONFIG.dailyFreeGas;
    save.craftGears = (save.craftGears || 0) + CRAFT_CONFIG.dailyFreeGear;
    save.craftDailyLast   = new Date().toDateString();
    save.craftDailyClaims = (save.craftDailyClaims||0) + 1;
    if (typeof writeSave === "function") writeSave(save);
    return { ok:true, gas:CRAFT_CONFIG.dailyFreeGas, gears:CRAFT_CONFIG.dailyFreeGear };
  },

  // ═══ PESQUISA ═══
  startResearch(save, recipeId) {
    _cfDailyResetIfNeeded(save);
    const r = this.getRecipe(recipeId);
    if (!r) return { ok:false, msg:"Receita inexistente." };
    if (this.isRevealed(save, recipeId)) return { ok:false, msg:"Já revelada." };
    if ((save.researchQueue||[]).some(q => q.recipeId === recipeId))
      return { ok:false, msg:"Já em pesquisa." };
    if ((save.researchQueue||[]).length > 0)
      return { ok:false, msg:"Aguarde a pesquisa atual terminar." };
    if ((save.researchToday||0) >= CRAFT_CONFIG.pesquisaMaxDia)
      return { ok:false, msg:"Limite diário de pesquisas (3) atingido." };
    const isUltra = (r.rarity === "ULTRA_RARE" || r.rarity === "ORIGENS");
    const custo   = isUltra ? CRAFT_CONFIG.pesquisaCustoUltra : CRAFT_CONFIG.pesquisaCustoNormal;
    if ((save.gold||0) < custo) return { ok:false, msg:"Ouro insuficiente." };
    if (typeof spendGold === "function") { if (!spendGold(save, custo)) return { ok:false, msg:"Ouro insuficiente." }; }
    else { save.gold -= custo; }
    const isFast = ["COMMON","RARE","EPIC"].includes(r.rarity);
    let dur = isFast ? CRAFT_CONFIG.pesquisaDurFast : CRAFT_CONFIG.pesquisaDurSlow;
    const bonus = cfMachineBonus(save);
    dur = Math.round(dur * (1 - bonus.redPesq));
    save.researchQueue.push({
      recipeId, rarity:r.rarity, startTs:Date.now(),
      endTs:Date.now()+dur, goldPaid:custo,
    });
    save.researchToday = (save.researchToday||0) + 1;
    if (typeof writeSave === "function") writeSave(save);
    return { ok:true };
  },
  tickResearch(save) {
    const now = Date.now();
    const finished = [];
    const stillGoing = [];
    for (const q of (save.researchQueue||[])) {
      if (now >= q.endTs) finished.push(q);
      else stillGoing.push(q);
    }
    if (finished.length === 0) return { finished:[] };
    const results = [];
    for (const q of finished) {
      const failChance = CRAFT_CONFIG.pesquisaChanceFail[q.rarity] || 30;
      const roll       = Math.random() * 100;
      const success    = roll >= failChance;
      const bonus      = cfMachineBonus(save);
      if (success) {
        if (!save.researchRevealed.includes(q.recipeId)) save.researchRevealed.push(q.recipeId);
        save.researchCompleted = (save.researchCompleted||0) + 1;
        if (bonus.bonusRec > 0 && Math.random() < bonus.bonusRec) {
          save.craftGears = (save.craftGears||0) + 1;
        }
        results.push({ recipeId:q.recipeId, success:true });
      } else {
        const refundBase = Math.round(q.goldPaid * CRAFT_CONFIG.pesquisaGoldRefund);
        const refund     = Math.round(refundBase * (1 + bonus.bonusRec));
        if (typeof earnGold === "function") earnGold(save, refund);
        else save.gold += refund;
        results.push({ recipeId:q.recipeId, success:false, refund });
      }
    }
    save.researchQueue = stillGoing;
    if (typeof writeSave === "function") writeSave(save);
    return { finished:results };
  },

  // ═══ CRAFT ═══
  canCraftRecipe(save, recipeId) {
    const r = this.getRecipe(recipeId);
    if (!r) return { ok:false, msg:"?" };
    if (!this.isRevealed(save, recipeId)) return { ok:false, msg:"Pesquise primeiro." };
    if ((save.craftQueue||[]).some(c => c.recipeId === recipeId)) return { ok:false, msg:"Já em craft." };
    const custoOuro = CRAFT_CONFIG.custoOuro[r.rarity];
    const custoGear = CRAFT_CONFIG.custoGear[r.rarity];
    const custoGas  = CRAFT_CONFIG.custoGas [r.rarity];
    if ((save.gold||0)       < custoOuro) return { ok:false, msg:"Ouro insuficiente." };
    if ((save.craftGears||0) < custoGear) return { ok:false, msg:"Engrenagens insuficientes." };
    if ((save.craftGas||0)   < custoGas)  return { ok:false, msg:"Gasolina insuficiente." };
    const vaultIds = (save.vault||[]).slice();
    for (const inp of r.inputs) {
      const idx = vaultIds.indexOf(inp.cardId);
      if (idx < 0) {
        const card = (typeof getCardById === "function") ? getCardById(inp.cardId) : null;
        return { ok:false, msg:"Falta a carta: " + (card ? card.name : inp.cardId) };
      }
      vaultIds.splice(idx, 1);
    }
    return { ok:true };
  },
  startCraft(save, recipeId) {
    const chk = this.canCraftRecipe(save, recipeId);
    if (!chk.ok) return chk;
    const r = this.getRecipe(recipeId);
    if (typeof spendGold === "function") spendGold(save, CRAFT_CONFIG.custoOuro[r.rarity]);
    else save.gold -= CRAFT_CONFIG.custoOuro[r.rarity];
    save.craftGears -= CRAFT_CONFIG.custoGear[r.rarity];
    save.craftGas   -= CRAFT_CONFIG.custoGas [r.rarity];
    for (const inp of r.inputs) {
      const idx = save.vault.indexOf(inp.cardId);
      if (idx >= 0) save.vault.splice(idx, 1);
    }
    const bonus = cfMachineBonus(save);
    const dur   = Math.round(CRAFT_CONFIG.craftDurMs * (1 - bonus.redCraft));
    save.craftQueue.push({
      recipeId, startTs:Date.now(), endTs:Date.now()+dur,
    });
    if (typeof writeSave === "function") writeSave(save);
    return { ok:true };
  },

  // [FIX BUG #1] Antes, quando o cofre estava cheio ao terminar uma fusão,
  // o código só marcava overflow:true no histórico e a carta era descartada
  // pra sempre — o jogador perdia ouro, engrenagens, gasolina e as 2 cartas
  // de entrada sem receber NADA em troca, apesar do comentário original
  // dizer que a carta seria "devolvida como ticket no correio" (isso nunca
  // era feito de fato). Agora a carta sempre é entregue ao jogador: se o
  // cofre estiver cheio, ela ainda é adicionada (excedendo o limite só
  // nesse caso pontual) para que uma fusão paga integralmente nunca seja
  // perdida. O campo overflow continua existindo só para efeito de aviso.
  tickCraft(save) {
    const now = Date.now();
    const done = [], still = [];
    for (const c of (save.craftQueue||[])) {
      if (now >= c.endTs) done.push(c); else still.push(c);
    }
    if (done.length === 0) return { finished:[] };
    const results = [];
    for (const c of done) {
      const r = this.getRecipe(c.recipeId);
      if (!r) continue;
      const overflow = (save.vault||[]).length >= (save.vaultLimit||50);
      // Sempre entrega a carta: o jogador já pagou o custo total do craft.
      save.vault.push(r.outCard.id);
      save.craftHistory.push({ cardId:r.outCard.id, ts:Date.now(), overflow });
      results.push({ recipeId:c.recipeId, overflow, card:r.outCard });
    }
    save.craftQueue = still;
    if (typeof writeSave === "function") writeSave(save);
    this.checkAchievements(save);
    return { finished:results };
  },

  // ═══ UPGRADES ═══
  canUpgrade(save) {
    const next = (save.craftMachineLevel || 0) + 1;
    if (next > CRAFT_CONFIG.upgrades.length) return { ok:false, msg:"Nível máximo." };
    const up = CRAFT_CONFIG.upgrades[next-1];
    if ((save.craftGears||0) < up.engr) return { ok:false, msg:"Engrenagens insuficientes." };
    if ((save.craftGas||0)   < up.gas)  return { ok:false, msg:"Gasolina insuficiente." };
    return { ok:true, up };
  },
  doUpgrade(save) {
    const chk = this.canUpgrade(save);
    if (!chk.ok) return chk;
    save.craftGears -= chk.up.engr;
    save.craftGas   -= chk.up.gas;
    save.craftMachineLevel = chk.up.level;
    if (typeof writeSave === "function") writeSave(save);
    this.checkAchievements(save);
    return { ok:true, up:chk.up };
  },

  // ═══ LOJA (comprar gasolina/engrenagem com ouro) ═══
  shopBuy(save, itemId, qty) {
    _cfDailyResetIfNeeded(save);
    qty = Math.max(1, qty|0);
    const cfg = CRAFT_CONFIG.precos;
    let unit, maxDia, field;
    if (itemId === "gas")      { unit=cfg.gasolinaUnit;   maxDia=cfg.gasolinaMaxDia;   field="craftGas"; }
    else if (itemId === "gear"){ unit=cfg.engrenagemUnit; maxDia=cfg.engrenagemMaxDia; field="craftGears"; }
    else return { ok:false, msg:"Item inválido." };
    const today = new Date().toDateString();
    const boughtToday = (save.craftShopBoughtToday||[])
      .filter(x => x.itemId === itemId && x.date === today)
      .reduce((a,b) => a + (b.qty||0), 0);
    if (boughtToday + qty > maxDia) return { ok:false, msg:"Limite diário: " + maxDia + " (comprou " + boughtToday + ")" };
    const total = unit * qty;
    if ((save.gold||0) < total) return { ok:false, msg:"Ouro insuficiente." };
    if (typeof spendGold === "function") spendGold(save, total); else save.gold -= total;
    save[field] = (save[field]||0) + qty;
    save.craftShopBoughtToday.push({ itemId, qty, date:today });
    if (typeof writeSave === "function") writeSave(save);
    return { ok:true, spent:total, qty };
  },

  // ═══ CONQUISTAS ═══
  checkAchievements(save) {
    const gained = [];
    for (const a of CRAFT_ACHIEVEMENTS) {
      if (save.craftAchievements.includes(a.id)) continue;
      try {
        if (a.check(save)) {
          save.craftAchievements.push(a.id);
          const r = a.reward || {};
          if (r.gold) { if (typeof earnGold==="function") earnGold(save, r.gold); else save.gold += r.gold; }
          if (r.gears){ save.craftGears = (save.craftGears||0) + r.gears; }
          if (r.gas)  { save.craftGas   = (save.craftGas  ||0) + r.gas; }
          gained.push(a);
        }
      } catch(e) {}
    }
    if (gained.length && typeof writeSave === "function") writeSave(save);
    return gained;
  },

  // ═══ DROPS (battle.html / pesca.html chamam isto) ═══
  rollDrop(save, source /* "battle" | "pesca" */) {
    const chance = source === "pesca" ? CRAFT_CONFIG.pescaDropChance : CRAFT_CONFIG.battleDropChance;
    if (Math.random() * 100 >= chance) return null;
    const isGas = Math.random() < 0.5;
    const qty = Math.random() < 0.1 ? 2 : 1;
    if (isGas) save.craftGas   = (save.craftGas  ||0) + qty;
    else       save.craftGears = (save.craftGears||0) + qty;
    save.craftDropsTotal = (save.craftDropsTotal||0) + qty;
    if (typeof writeSave === "function") writeSave(save);
    this.checkAchievements(save);
    return { type: isGas ? "gas" : "gears", qty };
  },

  // ═══ TICKETS (compras via pagamento manual) ═══
  createTicket(save, kind, details) {
    const t = {
      id:        "T" + Date.now().toString(36).toUpperCase(),
      kind,
      details,
      playerName: save.playerName || "?",
      createdAt:  Date.now(),
      status:     "pending",
    };
    save.craftTickets.push(t);
    if (typeof writeSave === "function") writeSave(save);
    this.checkAchievements(save);
    return t;
  },

  fmtTime(ms) {
    if (ms <= 0) return "pronto";
    const s = Math.floor(ms/1000);
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), r = s%60;
    if (h > 0) return h + "h " + m + "m";
    if (m > 0) return m + "m " + r + "s";
    return r + "s";
  },
  fmtN(n) {
    if (typeof fmtNum === "function") return fmtNum(n);
    return String(n);
  },
  rarityColor(r) {
    if (typeof RARITY !== "undefined" && RARITY[r]) return RARITY[r].color;
    return "#9e9e9e";
  },
  rarityName(r) {
    if (typeof RARITY !== "undefined" && RARITY[r]) return RARITY[r].name;
    return r;
  },
};

// ────────────────────────────────────────────────────────────────────────
// HOOK NO SHOP.HTML
// ────────────────────────────────────────────────────────────────────────
(function _cfShopHook() {
  const UNIT_ITEMS = [
    { id:"gas",  emoji:"⛽", name:"Gasolina",   unit:CRAFT_CONFIG.precos.gasolinaUnit,   max:CRAFT_CONFIG.precos.gasolinaMaxDia   },
    { id:"gear", emoji:"⚙️", name:"Engrenagem", unit:CRAFT_CONFIG.precos.engrenagemUnit, max:CRAFT_CONFIG.precos.engrenagemMaxDia },
  ];

  const PACKS = [
    { tag:"pack5gas",    id:"gas",  emoji:"⛽", name:"Pacote 5x Gasolina",     qty:5,   price:240_000,  max:1 },
    { tag:"pack10gas",   id:"gas",  emoji:"⛽", name:"Pacote 10x Gasolina",    qty:10,  price:460_000,  max:1 },
    { tag:"pack20gas",   id:"gas",  emoji:"⛽", name:"Barril 20x Gasolina",    qty:20,  price:880_000,  max:1 },
    { tag:"pack10gear",  id:"gear", emoji:"⚙️", name:"Pacote 10x Engrenagem",  qty:10,  price:19_000,   max:1 },
    { tag:"pack25gear",  id:"gear", emoji:"⚙️", name:"Pacote 25x Engrenagem",  qty:25,  price:45_000,   max:1 },
    { tag:"pack50gear",  id:"gear", emoji:"⚙️", name:"Caixa 50x Engrenagem",   qty:50,  price:85_000,   max:1 },
    { tag:"pack100gear", id:"gear", emoji:"⚙️", name:"Barril 100x Engrenagem", qty:100, price:160_000,  max:1 },
    { tag:"combo1",      id:"combo",emoji:"🧰", name:"Combo do Ferreiro (10⛽ + 100⚙️)", qty:1, price:595_000, max:1,
      combo:[{id:"gas",qty:10},{id:"gear",qty:100}] },
  ];

  function inject() {
    const isShopPage = /shop\.html/i.test(location.pathname) || document.body?.dataset?.shop === "true";
    if (!isShopPage) return;

    const container = document.querySelector("[data-craft-shop-slot] #craft-shop-list")
                    || document.querySelector("#craft-shop-list");
    if (!container) return;

    let save = null;
    try { save = getOrCreateSave(); _cfEnsureFields(save); _cfDailyResetIfNeeded(save); } catch(e) { return; }

    renderCraftShop();
  }

  function renderCraftShop() {
    const el = document.querySelector("[data-craft-shop-slot] #craft-shop-list")
            || document.querySelector("#craft-shop-list");
    if (!el) return;
    const save = getOrCreateSave(); _cfEnsureFields(save); _cfDailyResetIfNeeded(save);
    const today = new Date().toDateString();
    const boughtUnit = id => (save.craftShopBoughtToday||[])
      .filter(x=>x.itemId===id && x.date===today).reduce((a,b)=>a+(b.qty||0),0);
    const boughtTag = tag => (save.craftShopBoughtToday||[])
      .filter(x=>x.itemId===tag && x.date===today).length;

    let html = `<div style="font-family:'Cinzel',serif;font-size:12px;color:#ffb74d;margin:2px 0 8px;letter-spacing:0.5px;">🔩 UNIDADES AVULSAS</div>`;
    for (const it of UNIT_ITEMS) {
      const b = boughtUnit(it.id);
      const rem = it.max - b;
      const have = it.id === "gas" ? save.craftGas : save.craftGears;
      html += `
        <div style="background:#0e0e1c;border:1px solid #1e1e30;border-radius:12px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <div style="font-size:28px;">${it.emoji}</div>
          <div style="flex:1;">
            <div style="font-weight:700;color:#fff;">${it.name}</div>
            <div style="font-size:10px;color:#888;">Você tem: <b style="color:#ffb74d">${CraftAPI.fmtN(have||0)}</b> · Hoje: ${b}/${it.max}</div>
          </div>
          <button data-craft-buy="${it.id}" data-craft-qty="1"
            style="background:linear-gradient(135deg,#b8730a,#e65100);border:none;color:#fff;padding:8px 12px;border-radius:8px;font-weight:700;cursor:pointer;${rem<=0?'opacity:0.4;pointer-events:none;':''}">
            ${CraftAPI.fmtN(it.unit)}💰
          </button>
        </div>`;
    }

    html += `<div style="font-family:'Cinzel',serif;font-size:12px;color:#ffb74d;margin:14px 0 8px;letter-spacing:0.5px;">📦 PACOTES</div>`;
    for (const p of PACKS) {
      const b = boughtTag(p.tag);
      const rem = p.max - b;
      const comboLbl = p.combo ? p.combo.map(c => c.qty + (c.id==="gas"?"⛽":"⚙️")).join(" + ") : (p.qty + (p.id==="gas"?"⛽":"⚙️"));
      html += `
        <div style="background:#0e0e1c;border:1px solid #3a2a10;border-radius:12px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px;">
          <div style="font-size:28px;">${p.emoji}</div>
          <div style="flex:1;">
            <div style="font-weight:700;color:#fff;">${p.name}</div>
            <div style="font-size:10px;color:#888;">Contém: ${comboLbl} · Hoje: ${b}/${p.max}</div>
          </div>
          <button data-craft-buy-pack="${p.tag}"
            style="background:linear-gradient(135deg,#8b0000,#c62828);border:none;color:#fff;padding:8px 12px;border-radius:8px;font-weight:700;cursor:pointer;${rem<=0?'opacity:0.4;pointer-events:none;':''}">
            ${CraftAPI.fmtN(p.price)}💰
          </button>
        </div>`;
    }

    el.innerHTML = html;

    el.querySelectorAll("[data-craft-buy]").forEach(b => {
      b.onclick = () => {
        const s = getOrCreateSave();
        const r = CraftAPI.shopBuy(s, b.dataset.craftBuy, parseInt(b.dataset.craftQty)||1);
        if (typeof showToast === "function") showToast(r.ok ? "✅ Comprado!" : ("❌ " + r.msg), r.ok?"success":"error");
        renderCraftShop();
      };
    });
    el.querySelectorAll("[data-craft-buy-pack]").forEach(b => {
      b.onclick = () => {
        const s = getOrCreateSave();
        const tag = b.dataset.craftBuyPack;
        const p = PACKS.find(x => x.tag === tag);
        if (!p) return;
        _cfDailyResetIfNeeded(s);
        const today = new Date().toDateString();
        const boughtPack = (s.craftShopBoughtToday||[]).filter(x=>x.itemId===tag && x.date===today).length;
        if (boughtPack >= p.max) { showToast && showToast("Limite diário atingido.","error"); return; }
        if ((s.gold||0) < p.price) { showToast && showToast("Ouro insuficiente.","error"); return; }
        if (typeof spendGold==="function") spendGold(s, p.price); else s.gold -= p.price;
        if (p.combo) {
          for (const c of p.combo) {
            if (c.id === "gas")  s.craftGas   = (s.craftGas  ||0) + c.qty;
            if (c.id === "gear") s.craftGears = (s.craftGears||0) + c.qty;
          }
        } else {
          if (p.id === "gas")  s.craftGas   = (s.craftGas  ||0) + p.qty;
          if (p.id === "gear") s.craftGears = (s.craftGears||0) + p.qty;
        }
        s.craftShopBoughtToday.push({ itemId:tag, qty:1, date:today });
        writeSave && writeSave(s);
        showToast && showToast("✅ Pacote comprado!","success");
        renderCraftShop();
      };
    });
  }

  window.renderCraftShop = renderCraftShop;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();

// ────────────────────────────────────────────────────────────────────────
// HOOK NO BATTLE/PESCA
// ────────────────────────────────────────────────────────────────────────
window.cfRollBattleDrop = function() {
  try {
    const s = getOrCreateSave(); _cfEnsureFields(s);
    const d = CraftAPI.rollDrop(s, "battle");
    if (d && typeof showToast === "function") {
      showToast("🎁 Drop: +" + d.qty + " " + (d.type==="gas"?"⛽ Gasolina":"⚙️ Engrenagem"), "success", 3600);
    }
    return d;
  } catch(e) { return null; }
};
window.cfRollPescaDrop = function() {
  try {
    const s = getOrCreateSave(); _cfEnsureFields(s);
    const d = CraftAPI.rollDrop(s, "pesca");
    if (d && typeof showToast === "function") {
      showToast("🎁 Drop: +" + d.qty + " " + (d.type==="gas"?"⛽ Gasolina":"⚙️ Engrenagem"), "success", 3600);
    }
    return d;
  } catch(e) { return null; }
};

console.log("[Card Fight v" + CRAFT_VERSION + "] Crafting system loaded — " + CRAFT_RECIPES.length + " receitas.");