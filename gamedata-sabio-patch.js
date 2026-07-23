/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-sabio-patch.js – v14.0
   Sistema Sábio das Trocas
   ============================================================ */
"use strict";

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES DO SÁBIO
// ══════════════════════════════════════════════════════════════
const SABIO_CONFIG = {
  maxLevel: 10,
  requestTTL: 24 * 3600 * 1000,   // pedido expira em 24h
  fastDeliveryMs: 30 * 60 * 1000, // <30min = entrega rápida (bônus felicidade)
  finalTradeCooldownMs: 7 * 24 * 3600 * 1000, // troca lendária uma vez por semana
  skipHappinessCost: 12,
  fastDeliveryHappinessGain: 8,
  normalDeliveryHappinessGain: 3,
  expireHappinessCost: 15,
  maxHappiness: 100,
  minHappiness: 0,
};

// ═══════════════════════════════════════════════════════════════════════
// AJUSTE DE BALANCEAMENTO — colar em gamedata-sabio.js, substituindo o
// array SABIO_LEVEL_XP existente lá. Não mexi em nada além dos valores
// pedidos (não tenho o arquivo original pra tocar em mais nada).
// ═══════════════════════════════════════════════════════════════════════

const SABIO_LEVEL_XP = [
  0,                 // level 1 (start)
  10_000,            // 2
  100_000,           // 3
  1_000_000,         // 4
  10_000_000,        // 5
  100_000_000,       // 6
  1_500_000_000,     // 7
  25_000_000_000,    // 8
  200_000_000_000,   // 9
  800_000_000_000,   // 10
  2_000_000_000_000, // 11 (bloqueia progresso após 10)
];

// Recompensas base por dificuldade (multiplicadas por felicidade)
const SABIO_DIFFICULTY = {
  FACIL:   { label:"Fácil",     color:"#66bb6a", weight: 55, xpBase:    500, goldMin:  200, goldMax:   3_000, rarities:["COMMON","RARE"] },
  MEDIA:   { label:"Média",     color:"#29b6f6", weight: 25, xpBase:  8_000, goldMin: 2_000, goldMax:  25_000, rarities:["RARE","EPIC"] },
  DIFICIL: { label:"Difícil",   color:"#ce93d8", weight: 12, xpBase: 120_000, goldMin: 15_000, goldMax: 250_000, rarities:["EPIC","LEGENDARY"] },
  RARA:    { label:"Rara",      color:"#ffc107", weight:  6, xpBase:2_500_000, goldMin: 80_000, goldMax:1_200_000, rarities:["LEGENDARY","MYTHIC"] },
  MITICA:  { label:"Mítica",    color:"#ff4444", weight:  2, xpBase:60_000_000, goldMin:400_000, goldMax:5_000_000, rarities:["MYTHIC","ULTRA_RARE"] },
};

// Tipos de recompensa (não abusivos)
const SABIO_REWARD_TYPES = ["gold","gold","gold","boost","card","pack"];

// ══════════════════════════════════════════════════════════════
// STATE HELPERS
// ══════════════════════════════════════════════════════════════
function _ensureSabio(save) {
  if (!save.sabio) {
    save.sabio = {
      xp: 0,
      level: 1,
      currentRequest: null,
      happiness: 55,
      totalDelivered: 0,
      totalSkipped: 0,
      lastSkipDate: "",
      fastDeliveryStreak: 0,
      finalTradeLastAt: 0,
      lastDeliveredAt: 0,
      history: [],
      totalXpEarned: 0,
    };
  }
  return save.sabio;
}

function sabioGetLevel(xp) {
  for (let lv = SABIO_CONFIG.maxLevel; lv >= 1; lv--) {
    if (xp >= SABIO_LEVEL_XP[lv - 1]) return lv;
  }
  return 1;
}

function sabioXpToNext(xp, level) {
  if (level >= SABIO_CONFIG.maxLevel) return 0;
  return Math.max(0, SABIO_LEVEL_XP[level] - xp);
}

function sabioProgressPct(xp, level) {
  if (level >= SABIO_CONFIG.maxLevel) return 100;
  const cur = SABIO_LEVEL_XP[level - 1];
  const next = SABIO_LEVEL_XP[level];
  return Math.max(0, Math.min(100, ((xp - cur) / (next - cur)) * 100));
}

function sabioHappinessTier(h) {
  if (h >= 90) return { label:"Radiante",  color:"#ffc107", mult:3.0, emoji:"🤩" };
  if (h >= 70) return { label:"Feliz",     color:"#66bb6a", mult:2.0, emoji:"😄" };
  if (h >= 45) return { label:"Contente",  color:"#29b6f6", mult:1.4, emoji:"🙂" };
  if (h >= 20) return { label:"Neutro",    color:"#9e9e9e", mult:1.0, emoji:"😐" };
  if (h >  5)  return { label:"Chateado",  color:"#ff8888", mult:0.7, emoji:"😒" };
  return         { label:"Furioso",   color:"#ff4444", mult:0.5, emoji:"😡" };
}

// ══════════════════════════════════════════════════════════════
// PEDIDO ATUAL — geração aleatória
// ══════════════════════════════════════════════════════════════
function _rollDifficulty(sabioLevel) {
  // Nível maior aumenta o peso das dificuldades mais altas
  const bias = Math.min(1, (sabioLevel - 1) / 9);
  const entries = Object.entries(SABIO_DIFFICULTY).map(([k, d], i) => {
    const boost = 1 + bias * (i * 0.35);
    return [k, d.weight * boost];
  });
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [k, w] of entries) {
    r -= w;
    if (r <= 0) return k;
  }
  return "FACIL";
}

function _allCatalog() {
  const list = [];
  if (typeof ALL_CARDS !== "undefined")    list.push(...ALL_CARDS);
  if (typeof EXTRA_CARDS !== "undefined")  list.push(...EXTRA_CARDS);
  return list;
}

function _pickCardId(rarities, excludeOrigens = true) {
  const cat = _allCatalog().filter(c =>
    rarities.includes(c.rarity) &&
    (!excludeOrigens || c.rarity !== "ORIGENS")
  );
  if (!cat.length) return null;
  return cat[Math.floor(Math.random() * cat.length)];
}

function _rollReward(diff, happinessMult) {
  const type = SABIO_REWARD_TYPES[Math.floor(Math.random() * SABIO_REWARD_TYPES.length)];
  const cfg = SABIO_DIFFICULTY[diff];
  if (type === "gold") {
    const raw = cfg.goldMin + Math.random() * (cfg.goldMax - cfg.goldMin);
    return { type:"gold", amount: Math.floor(raw * happinessMult) };
  }
  if (type === "boost" && typeof BOOSTS !== "undefined" && BOOSTS.length) {
    const b = BOOSTS[Math.floor(Math.random() * BOOSTS.length)];
    return { type:"boost", boostId: b.id, name: b.name, emoji: b.emoji };
  }
  if (type === "card") {
    // Recompensa uma carta da mesma dificuldade (não Origens)
    const card = _pickCardId(cfg.rarities, true);
    if (card) return { type:"card", cardId: card.id, name: card.name, emoji: card.img, rarity: card.rarity };
  }
  if (type === "pack" && typeof PACKS !== "undefined" && PACKS.length) {
    // Pacote: dá o pacote grátis (adiciona 1 abertura pendente)
    const eligible = PACKS.filter(p => (p.price || 0) <= cfg.goldMax * 3);
    const p = (eligible.length ? eligible : PACKS)[Math.floor(Math.random() * (eligible.length || PACKS.length))];
    return { type:"pack", packId: p.id, name: p.name, emoji: p.emoji };
  }
  // Fallback: ouro
  const raw = cfg.goldMin + Math.random() * (cfg.goldMax - cfg.goldMin);
  return { type:"gold", amount: Math.floor(raw * happinessMult) };
}

function sabioGenerateRequest(save) {
  const s = _ensureSabio(save);
  const hMult = sabioHappinessTier(s.happiness).mult;

  // Nível 10 → 10% de chance da troca lendária estar disponível (respeitando cooldown)
  if (s.level >= SABIO_CONFIG.maxLevel) {
    const cdOk = Date.now() - (s.finalTradeLastAt || 0) > SABIO_CONFIG.finalTradeCooldownMs;
    if (cdOk && Math.random() < 0.15) {
      s.currentRequest = _generateFinalTrade();
      return s.currentRequest;
    }
  }

  const diff = _rollDifficulty(s.level);
  const cfg  = SABIO_DIFFICULTY[diff];
  const card = _pickCardId(cfg.rarities, true);
  if (!card) return null;

  const reward = _rollReward(diff, hMult);
  const xp = Math.floor(cfg.xpBase * hMult);

  s.currentRequest = {
    kind: "normal",
    difficulty: diff,
    cardId: card.id,
    cardName: card.name,
    cardEmoji: card.img,
    cardRarity: card.rarity,
    reward,
    xp,
    createdAt: Date.now(),
    expiresAt: Date.now() + SABIO_CONFIG.requestTTL,
  };
  return s.currentRequest;
}

function _generateFinalTrade() {
  const origens = _allCatalog().filter(c => c.rarity === "ORIGENS");
  if (origens.length < 4) return null;
  // Pede 1 origens aleatória
  const asked = origens[Math.floor(Math.random() * origens.length)];
  // Recompensa: 3 outras origens aleatórias distintas
  const pool = origens.filter(c => c.id !== asked.id);
  const rewards = [];
  while (rewards.length < 3 && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    rewards.push(pool.splice(idx, 1)[0]);
  }
  return {
    kind: "final",
    difficulty: "ORIGENS",
    cardId: asked.id,
    cardName: asked.name,
    cardEmoji: asked.img,
    cardRarity: "ORIGENS",
    reward: { type:"originsPack", cards: rewards.map(c => ({ id:c.id, name:c.name, emoji:c.img })) },
    xp: 500_000_000_000, // 500 bi de xp (permanece marcando progresso mesmo no cap)
    createdAt: Date.now(),
    expiresAt: Date.now() + SABIO_CONFIG.requestTTL,
  };
}

// ══════════════════════════════════════════════════════════════
// AÇÕES: ENTREGAR / PULAR / EXPIRAR
// ══════════════════════════════════════════════════════════════
function sabioDeliver(save) {
  const s = _ensureSabio(save);
  const req = s.currentRequest;
  if (!req) return { ok:false, msg:"Nenhum pedido ativo." };
  if (Date.now() > req.expiresAt) {
    sabioExpireCurrent(save);
    return { ok:false, msg:"O pedido expirou!" };
  }

  const vault = save.vault || [];
  const idx = vault.indexOf(req.cardId);
  if (idx === -1) return { ok:false, msg:"Você não tem essa carta no cofre." };

  // Remove a carta
  vault.splice(idx, 1);

  // Felicidade: rápido? bônus, senão pequeno
  const elapsed = Date.now() - req.createdAt;
  if (elapsed <= SABIO_CONFIG.fastDeliveryMs) {
    s.happiness = Math.min(SABIO_CONFIG.maxHappiness, s.happiness + SABIO_CONFIG.fastDeliveryHappinessGain);
    s.fastDeliveryStreak = (s.fastDeliveryStreak || 0) + 1;
    // streak bônus extra a cada 5 entregas rápidas seguidas
    if (s.fastDeliveryStreak % 5 === 0) {
      s.happiness = Math.min(SABIO_CONFIG.maxHappiness, s.happiness + 10);
    }
  } else {
    s.happiness = Math.min(SABIO_CONFIG.maxHappiness, s.happiness + SABIO_CONFIG.normalDeliveryHappinessGain);
    s.fastDeliveryStreak = 0;
  }

  // Aplica recompensa
  const rewardMsg = _applyReward(save, req.reward);

  // XP
  if (s.level < SABIO_CONFIG.maxLevel) {
    s.xp += req.xp;
    s.totalXpEarned = (s.totalXpEarned || 0) + req.xp;
    s.level = sabioGetLevel(s.xp);
  }

  // Troca final: cooldown
  if (req.kind === "final") {
    s.finalTradeLastAt = Date.now();
  }

  // Historico
  s.history = s.history || [];
  s.history.unshift({
    at: Date.now(),
    cardName: req.cardName,
    cardEmoji: req.cardEmoji,
    difficulty: req.difficulty,
    kind: req.kind,
    rewardMsg,
    xpGained: req.xp,
    fast: elapsed <= SABIO_CONFIG.fastDeliveryMs,
  });
  if (s.history.length > 25) s.history.length = 25;

  s.totalDelivered = (s.totalDelivered || 0) + 1;
  s.lastDeliveredAt = Date.now();
  s.currentRequest = null;

  writeSave(save);
  return { ok:true, msg: `✅ Entregue! ${rewardMsg}`, rewardMsg };
}

function _applyReward(save, r) {
  if (!r) return "Nada.";
  if (r.type === "gold") {
    save.gold = (save.gold || 0) + r.amount;
    save.totalGoldEarned = (save.totalGoldEarned || 0) + r.amount;
    return `+🪙 ${fmtNum(r.amount)} ouro`;
  }
  if (r.type === "boost") {
    const b = (typeof BOOSTS !== "undefined") ? BOOSTS.find(x => x.id === r.boostId) : null;
    if (b) {
      save.activeBoosts = save.activeBoosts || [];
      save.activeBoosts.push({ id:b.id, type:b.type, mult:b.mult, name:b.name, endTime: Date.now() + b.duration });
      return `+⚡ Boost: ${b.name}`;
    }
    return "+⚡ Boost misterioso";
  }
  if (r.type === "card") {
    save.vault = save.vault || [];
    const limit = save.vaultLimit || 50;
    if (save.vault.length >= limit) return `⚠️ Cofre cheio — carta ${r.name} não coube!`;
    save.vault.push(r.cardId);
    return `+🃏 Carta ${r.emoji || ""} ${r.name}`;
  }
  if (r.type === "pack") {
    save.pendingPacks = save.pendingPacks || [];
    save.pendingPacks.push(r.packId);
    return `+📦 Pacote ${r.emoji || ""} ${r.name} (retire na loja)`;
  }
  if (r.type === "originsPack") {
    save.vault = save.vault || [];
    const limit = save.vaultLimit || 50;
    const names = [];
    for (const c of r.cards) {
      if (save.vault.length >= limit) break;
      save.vault.push(c.id);
      names.push(`${c.emoji} ${c.name}`);
    }
    return `+🔥 3 ORIGENS: ${names.join(" · ")}`;
  }
  return "Recompensa desconhecida.";
}

function sabioCanSkipToday(save) {
  const s = _ensureSabio(save);
  return s.lastSkipDate !== new Date().toDateString();
}

function sabioSkip(save) {
  const s = _ensureSabio(save);
  if (!s.currentRequest) return { ok:false, msg:"Nenhum pedido ativo." };
  if (!sabioCanSkipToday(save)) return { ok:false, msg:"Você já pulou um pedido hoje." };
  s.lastSkipDate = new Date().toDateString();
  s.totalSkipped = (s.totalSkipped || 0) + 1;
  s.happiness = Math.max(SABIO_CONFIG.minHappiness, s.happiness - SABIO_CONFIG.skipHappinessCost);
  s.fastDeliveryStreak = 0;
  s.currentRequest = null;
  sabioGenerateRequest(save);
  writeSave(save);
  return { ok:true, msg:"⏭️ Pedido pulado. Novo pedido gerado." };
}

function sabioExpireCurrent(save) {
  const s = _ensureSabio(save);
  if (!s.currentRequest) return;
  s.happiness = Math.max(SABIO_CONFIG.minHappiness, s.happiness - SABIO_CONFIG.expireHappinessCost);
  s.fastDeliveryStreak = 0;
  s.currentRequest = null;
  writeSave(save);
}

function sabioTick(save) {
  const s = _ensureSabio(save);
  if (s.currentRequest && Date.now() > s.currentRequest.expiresAt) {
    sabioExpireCurrent(save);
  }
  if (!s.currentRequest) {
    sabioGenerateRequest(save);
    writeSave(save);
  }
}

// ══════════════════════════════════════════════════════════════
// ITENS DE LOJA: "Felicidades pro Sábio" + "XPs pro Sábio"
// ══════════════════════════════════════════════════════════════
const SABIO_SHOP_ITEMS = [
  {
    id:"sabio_happy_small",
    kind:"happiness",
    name:"Felicidades pro Sábio — Pequena",
    desc:"O velho ganha um chá quentinho. +10 de felicidade.",
    emoji:"🍵", price: 25_000, amount: 10, limit: 5,
  },
  {
    id:"sabio_happy_big",
    kind:"happiness",
    name:"Felicidades pro Sábio — Grande",
    desc:"Um banquete inteiro! +30 de felicidade.",
    emoji:"🍰", price: 120_000, amount: 30, limit: 3,
  },
  {
    id:"sabio_xp_small",
    kind:"xp",
    name:"XPs pro Sábio — Frasco Comum",
    desc:"Concede 100.000 de XP ao Sábio.",
    emoji:"📗", price: 40_000, amount: 100_000, limit: 10,
  },
  {
    id:"sabio_xp_big",
    kind:"xp",
    name:"XPs pro Sábio — Frasco Épico",
    desc:"Concede 5.000.000 de XP ao Sábio.",
    emoji:"📕", price: 900_000, amount: 5_000_000, limit: 5,
  },
  {
    id:"sabio_xp_mega",
    kind:"xp",
    name:"XPs pro Sábio — Frasco Divino",
    desc:"Concede 250.000.000 de XP ao Sábio.",
    emoji:"📙", price: 25_000_000, amount: 250_000_000, limit: 2,
  },
];

// Adiciona os itens do Sábio na lista global de BOOSTS
// (o shop.html já renderiza BOOSTS automaticamente)
(function _injectSabioShopItems() {
  if (typeof BOOSTS === "undefined") return;
  SABIO_SHOP_ITEMS.forEach(item => {
    if (BOOSTS.some(b => b.id === item.id)) return;
    BOOSTS.push({
      id: item.id,
      name: item.name,
      desc: item.desc + "  (item do Sábio)",
      type: "sabio_" + item.kind,
      mult: item.amount,
      duration: 0,
      price: item.price,
      limit: item.limit,
      emoji: item.emoji,
      _sabio: true,
      _sabioKind: item.kind,
      _sabioAmount: item.amount,
    });
  });
})();

// Hook: intercepta buyBoost para itens do Sábio
// (Executado quando o Shop chamar buyBoost com um id que é sabio_*)
function sabioApplyShopItem(save, item) {
  const s = _ensureSabio(save);
  if (item._sabioKind === "happiness") {
    s.happiness = Math.min(SABIO_CONFIG.maxHappiness, s.happiness + item._sabioAmount);
    return `🤩 Sábio ganhou +${item._sabioAmount} felicidade!`;
  }
  if (item._sabioKind === "xp") {
    if (s.level >= SABIO_CONFIG.maxLevel) {
      // xp além do cap vira ouro simbólico
      save.gold += Math.floor(item._sabioAmount / 1000);
      return `Sábio já está no nível máximo. Convertido em ouro.`;
    }
    s.xp += item._sabioAmount;
    s.totalXpEarned = (s.totalXpEarned || 0) + item._sabioAmount;
    const prevLv = s.level;
    s.level = sabioGetLevel(s.xp);
    return prevLv !== s.level
      ? `📈 Sábio subiu para o nível ${s.level}!`
      : `Sábio ganhou +${fmtNum(item._sabioAmount)} XP.`;
  }
  return "";
}

// Wrapper global para o shop chamar após um "compra" bem sucedida de um item _sabio
window.SABIO_API = {
  ensure: _ensureSabio,
  tick: sabioTick,
  generate: sabioGenerateRequest,
  deliver: sabioDeliver,
  skip: sabioSkip,
  canSkipToday: sabioCanSkipToday,
  applyShopItem: sabioApplyShopItem,
  getLevel: sabioGetLevel,
  xpToNext: sabioXpToNext,
  progressPct: sabioProgressPct,
  happinessTier: sabioHappinessTier,
  CONFIG: SABIO_CONFIG,
  DIFFICULTY: SABIO_DIFFICULTY,
  LEVEL_XP: SABIO_LEVEL_XP,
  SHOP_ITEMS: SABIO_SHOP_ITEMS,
};

// Monkey-patch do buyBoost para intercepter os itens do Sábio.
// Precisa acontecer depois que a página shop.html define buyBoost.
document.addEventListener("DOMContentLoaded", function () {
  if (typeof window.buyBoost !== "function") return;
  const original = window.buyBoost;
  window.buyBoost = function (boostId) {
    const boost = (typeof BOOSTS !== "undefined") ? BOOSTS.find(b => b.id === boostId) : null;
    if (!boost || !boost._sabio) return original(boostId);

    if (!save.boostUsedToday) save.boostUsedToday = {};
    const usedCount = save.boostUsedToday[boostId] || 0;
    if (usedCount >= boost.limit) { showToast("❌ Limite diário atingido!", "error"); return; }
    if (save.gold < boost.price) { showToast("❌ Ouro insuficiente!", "error"); return; }

    spendGold(save, boost.price);
    const msg = sabioApplyShopItem(save, boost);
    save.boostUsedToday[boostId] = usedCount + 1;
    writeSave(save);
    if (typeof renderHeader === "function") renderHeader();
    if (typeof renderBoosts === "function") renderBoosts();
    showToast(`${boost.emoji} ${msg}`, "gold", 3800);
  };
});
