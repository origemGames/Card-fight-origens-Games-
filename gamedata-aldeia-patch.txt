/* ============================================================
   CARD FIGHT – ORIGENS GAMES
   gamedata-aldeia-patch.js  – v17.0 SISTEMA DE ALDEIA
   Loja/Mina/Fazenda/Publicidade/Qualidade/Armazém/Segurança/Decoração
   Clientes, Ladrões, VIPs, Contratos, Ranking, Informante, Minigame
   ============================================================ */
"use strict";

/* ══════════════════════════════════════════════════════════════
   CONFIG GLOBAL
   ══════════════════════════════════════════════════════════════ */
const ALDEIA_CFG = {
  version: "17.0",
  tickMs: 5000,                    // heartbeat da simulação (5s)
  itemsPerTickBase: {              // itens/produção a cada 30 min no lvl 1 = 10
    shop:  10 / (30 * 60 / 5),     // dinheiro-token/tick (não é ouro)
    mine:  10 / (30 * 60 / 5),     // carvão/tick
    farm:  10 / (30 * 60 / 5),     // trigo/tick
  },
  levelBonusPerLevel: 0.59 / 7,    // +59% do lvl1 ao lvl8 (7 saltos)
  maxLevel: 8,
  securityMax: 5,
  qualityMax: 8,
  qualityHappyToUpgrade: [0, 20, 50, 100, 200, 400, 800, 1500, 2800], // clientes felizes p/ subir cada nível (índice = nível alvo; faltava o alvo do nível 8, travando o upgrade final)
  warehouseBaseCap: 300,           // capacidade gratuita antes de construir o Armazém (nível 0)
  warehouseCapPerLevel: [0, 500, 1200, 2500, 5000, 10000, 20000, 40000, 80000],
  charmeThresholdVIP: 4,           // decoração ≥ 4 = VIPs podem aparecer

  // custos de upgrade em OURO (grandes!)
  upgradeCostGold: {
    shop:      [0, 5000, 25000, 100000, 400000, 1500000, 6000000, 25000000, 100000000],
    mine:      [0, 6000, 30000, 120000, 500000, 1800000, 7000000, 28000000, 110000000],
    farm:      [0, 4500, 22000, 90000,  380000, 1400000, 5500000, 22000000, 90000000 ],
    ads:       [0, 8000, 40000, 160000, 650000, 2500000, 10000000,40000000, 160000000],
    warehouse: [0, 5000, 20000, 80000,  320000, 1300000, 5000000, 20000000, 80000000 ],
    security:  [0, 12000,60000, 260000, 1000000,4000000                                ],
    decor:     [0, 6000, 28000, 120000, 500000, 2000000, 8000000, 32000000, 130000000],
    // quality NÃO usa ouro — sobe por clientes felizes
  },

  // publicidade: multiplica frequência de clientes
  adsClientMult:   [0, 1.0, 1.4, 1.9, 2.6, 3.5, 4.7, 6.2, 8.0],
  // qualidade: paciência (segundos) e multiplicador de pagamento
  qualityPatience: [0, 600, 900, 1200, 1500, 1900, 2400, 3000, 3600], // 10min → 60min
  qualityPayMult:  [0, 1.0, 1.15, 1.32, 1.5, 1.7, 1.95, 2.3, 2.8],
  // segurança: chance base de ladrão sucesso e velocidade de descoberta
  securityThiefSuccess: [0, 0.55, 0.42, 0.30, 0.18, 0.08],
  securityRevealBoost:  [0, 1.0, 1.25, 1.55, 1.9, 2.4],

  // frequência base de clientes (segundos entre chegadas), reduzido por ads/hora
  baseClientEverySec: 180,

  // ladrões: chance base de um cliente ser ladrão
  baseThiefChance: 0.14,

  // ranking
  rankingSize: 100,
};

/* Recursos exibidos como cor/emoji */
const ALDEIA_RES = {
  dinheiro: { name: "Dinheiro",  emoji: "💵", color: "#66bb6a" },
  carvao:   { name: "Carvão",    emoji: "🪨", color: "#9e9e9e" },
  trigo:    { name: "Trigo",     emoji: "🌾", color: "#ffc107" },
};

/* Definição das 8 construções */
const ALDEIA_BUILDINGS = [
  { id:"shop",      name:"Loja",         emoji:"🏪", desc:"Gera dinheiro (não é ouro).",         produces:"dinheiro", maxLevel:8, upgradeType:"gold" },
  { id:"mine",      name:"Minas",        emoji:"⛏️", desc:"Gera carvão para o mercado.",         produces:"carvao",   maxLevel:8, upgradeType:"gold" },
  { id:"farm",      name:"Fazenda",      emoji:"🌾", desc:"Gera trigo para os clientes.",         produces:"trigo",    maxLevel:8, upgradeType:"gold" },
  { id:"ads",       name:"Publicidade",  emoji:"📣", desc:"Atrai mais clientes por hora.",        produces:null,       maxLevel:8, upgradeType:"gold" },
  { id:"quality",   name:"Qualidade",    emoji:"⭐",  desc:"Clientes pagam melhor e esperam mais. Sobe atendendo bem.", produces:null, maxLevel:8, upgradeType:"happy" },
  { id:"warehouse", name:"Armazém",      emoji:"📦", desc:"Aumenta capacidade de estoque.",       produces:null,       maxLevel:8, upgradeType:"gold" },
  { id:"security",  name:"Guarda",       emoji:"🛡️", desc:"Reduz sucesso de ladrões e acelera descoberta.", produces:null, maxLevel:5, upgradeType:"gold" },
  { id:"decor",     name:"Decoração",    emoji:"🌸", desc:"Puramente cosmética, mas atrai VIPs raros.", produces:null, maxLevel:8, upgradeType:"gold" },
];

/* ══════════════════════════════════════════════════════════════
   NPCs — POOL BASE (expansível!)
   Cada NPC: id, name, emoji, personality, wantsPool (itens preferidos), catchphrase
   Sistema pega um NPC aleatório, gera pedido, escolhe fala do pool.
   ══════════════════════════════════════════════════════════════ */
const ALDEIA_NPCS = [
  // ── COMUNS (frases variadas) ────────────────────────────
  { id:"n01", name:"Padeiro Otávio",       emoji:"👨‍🍳", type:"COMMON", wants:["trigo"],           catchphrase:"Preciso encher o forno hoje!" },
  { id:"n02", name:"Ferreiro Bruno",       emoji:"🧔",   type:"COMMON", wants:["carvao"],          catchphrase:"O foguinho tá fraco, mestre." },
  { id:"n03", name:"Viajante Lila",        emoji:"🧕",   type:"COMMON", wants:["trigo","dinheiro"],catchphrase:"Vim de longe, tá tudo caro..." },
  { id:"n04", name:"Menino Tico",          emoji:"🧒",   type:"COMMON", wants:["trigo"],           catchphrase:"Minha mãe me mandou aqui!" },
  { id:"n05", name:"Vovó Clara",           emoji:"👵",   type:"COMMON", wants:["trigo","carvao"],  catchphrase:"No meu tempo era mais barato..." },
  { id:"n06", name:"Marinheiro Zé",        emoji:"🧑‍✈️", type:"COMMON", wants:["dinheiro","carvao"],catchphrase:"Zarpo ao amanhecer, quero fechar rápido." },
  { id:"n07", name:"Alfaiate Rui",         emoji:"🧵",   type:"COMMON", wants:["dinheiro"],        catchphrase:"Preciso pra pagar meus panos." },
  { id:"n08", name:"Camponesa Ana",        emoji:"👩‍🌾", type:"COMMON", wants:["carvao"],          catchphrase:"O inverno tá chegando." },
  { id:"n09", name:"Bardo Felipe",         emoji:"🎻",   type:"COMMON", wants:["dinheiro"],        catchphrase:"Ó, um trocado pra arte?" },
  { id:"n10", name:"Pescador Zeca",        emoji:"🎣",   type:"COMMON", wants:["trigo","dinheiro"],catchphrase:"O rio hoje deu peixe demais." },
  { id:"n11", name:"Caçadora Mira",        emoji:"🏹",   type:"COMMON", wants:["carvao"],          catchphrase:"Preciso defumar a caça." },
  { id:"n12", name:"Monge Silêncio",       emoji:"🧘",   type:"COMMON", wants:["trigo"],           catchphrase:"..." },
  { id:"n13", name:"Peão Lourival",        emoji:"👨‍🌾", type:"COMMON", wants:["trigo","carvao"],  catchphrase:"Trabalho no campo, senhor." },
  { id:"n14", name:"Menina Íris",          emoji:"👧",   type:"COMMON", wants:["dinheiro","trigo"],catchphrase:"Pai me deu moedas!" },
  { id:"n15", name:"Comerciante Nino",     emoji:"🧑‍💼", type:"COMMON", wants:["carvao","dinheiro"],catchphrase:"Revendo na próxima feira." },
  { id:"n16", name:"Curandeira Bel",       emoji:"🧙‍♀️", type:"COMMON", wants:["trigo"],           catchphrase:"Ervas e pães para meus doentes." },
  { id:"n17", name:"Estudante Léo",        emoji:"🧑‍🎓", type:"COMMON", wants:["dinheiro"],        catchphrase:"A biblioteca cobra caro..." },
  { id:"n18", name:"Barqueiro Val",        emoji:"🛶",   type:"COMMON", wants:["carvao","trigo"],  catchphrase:"Preciso pra travessia da noite." },
  { id:"n19", name:"Aprendiz Kiko",        emoji:"🧑",   type:"COMMON", wants:["dinheiro"],        catchphrase:"Meu mestre me mandou..." },
  { id:"n20", name:"Costureira Dora",      emoji:"🧶",   type:"COMMON", wants:["dinheiro","trigo"],catchphrase:"Tá tudo em falta hoje." },

  // ── VIPs (raros, pagam melhor, menos paciência) ─────────
  { id:"v01", name:"Barão Reginaldo",      emoji:"🎩",   type:"VIP", wants:["dinheiro","carvao"], catchphrase:"Não tolero espera, entendido?" },
  { id:"v02", name:"Duquesa Isolde",       emoji:"👸",   type:"VIP", wants:["trigo","dinheiro"],  catchphrase:"Espero qualidade impecável." },
  { id:"v03", name:"Embaixador Coen",      emoji:"🕴️",  type:"VIP", wants:["carvao"],            catchphrase:"Represento a coroa vizinha." },
  { id:"v04", name:"Alquimista Prisma",    emoji:"🧪",   type:"VIP", wants:["carvao","trigo"],    catchphrase:"Meus reagentes exigem pureza." },
  { id:"v05", name:"Capitã Verena",        emoji:"⚓",   type:"VIP", wants:["trigo","carvao"],    catchphrase:"Minha frota parte à noite." },
  { id:"v06", name:"Mestre Guilda Onix",   emoji:"🏛️",  type:"VIP", wants:["dinheiro"],          catchphrase:"Considere isto uma auditoria." },
  { id:"v07", name:"Princesa Solara",      emoji:"👑",   type:"VIP", wants:["trigo"],             catchphrase:"O reino observa." },
  { id:"v08", name:"Sábio Errante",        emoji:"🧙",   type:"VIP", wants:["carvao","dinheiro"], catchphrase:"Vim de mil léguas por isto." },

  // ── LADRÕES DISFARÇADOS ─────────────────────────────────
  // Wrapper: qualquer NPC pode ser ladrão; sinais são adicionados dinamicamente.
];

/* Pool de falas por tipo de item — variação enorme para não repetir */
const ALDEIA_PHRASES = {
  trigo: [
    "Preciso de {qty} sacos de trigo, urgente.",
    "Meu moinho tá parado — {qty} de trigo agora!",
    "Diga: tem {qty} de trigo bom?",
    "Trigo, {qty}, e sem rasteira!",
    "{qty} sacos, o pão do vilarejo depende disso.",
    "A colheita foi ruim... {qty} de trigo, por favor.",
    "O forno espera {qty} de trigo. Não me faça esperar.",
    "Meu filho passa fome — {qty} de trigo, imploro.",
    "Vou pagar bem por {qty} de trigo dourado.",
    "Trigo. {qty}. Agora.",
  ],
  carvao: [
    "Cadê o carvão? Quero {qty}.",
    "O fole tá frio, me traga {qty} de carvão.",
    "{qty} de carvão puro, sem pedras.",
    "Preciso de {qty} de carvão pra fundir hoje.",
    "A forja apaga sem {qty} de carvão.",
    "Carvão bom, {qty}, ou vou ao vizinho.",
    "Frio danado — {qty} de carvão pra lareira.",
    "{qty} de carvão. E não me venha com poeira.",
    "Meu ofício depende de {qty} de carvão agora.",
    "Carvão, {qty}, e rápido!",
  ],
  dinheiro: [
    "Preciso trocar por {qty} em dinheiro do vilarejo.",
    "Me dá {qty} em dinheiro, tô sem trocado.",
    "{qty} em dinheiro corrente, se puder.",
    "Vim buscar {qty} em dinheiro — meus vales expiram.",
    "Sem {qty} em dinheiro, não fecho a compra lá fora.",
    "Dinheiro, {qty}, e vou embora feliz.",
    "{qty} em dinheiro miúdo, favor.",
    "Só aceito {qty} em dinheiro do bom.",
    "Faltou {qty} em dinheiro pra fechar a semana.",
    "{qty}. Dinheiro. Sem enrolação.",
  ],
};

/* Sinais de ladrão — evolutivos (nível 1 óbvio → 5 sutil) */
const ALDEIA_THIEF_SIGNS = {
  1: ["🕶️ Está de óculos escuros à noite.", "🦹 Traja capa preta suspeita.", "😅 Suou frio quando você olhou."],
  2: ["👀 Olha demais para o cofre.", "🫥 Cobriu o rosto ao entrar.", "🗝️ Manuseava uma chave estranha."],
  3: ["💬 Gaguejou ao dizer o nome.", "🥷 Passos silenciosos demais.", "😬 Perguntou onde fica o estoque."],
  4: ["🙃 Riu quando você não estava olhando.", "👂 Escuta as outras conversas.", "🧤 Usa luvas mesmo com calor."],
  5: ["🤏 Pequeno tique no olho esquerdo.", "🫱 Cumprimento firme demais.", "🙊 Evita dizer 'obrigado'."],
};

/* Frases de negociação (minigame): quando cliente insatisfeito, escolha 1 de 3.
   Nem toda frase funciona pra todo NPC — cada NPC tem "tags" e frases têm alvos. */
const ALDEIA_NEGO_LINES = [
  { text:"“Prometo que a próxima vem no dobro da qualidade.”", worksOn:["COMMON"] },
  { text:"“Toma um trigo extra por conta da casa.”",           worksOn:["COMMON","VIP"] },
  { text:"“Meus concorrentes cobram três vezes isso.”",        worksOn:["COMMON"] },
  { text:"“Sua excelência merece o melhor de nossa aldeia.”",  worksOn:["VIP"] },
  { text:"“Deixa que eu mesmo carrego até sua carroça.”",      worksOn:["COMMON","VIP"] },
  { text:"“Vou anotar seu nome no livro de honra.”",           worksOn:["VIP"] },
  { text:"“Se não gostar, devolvo tudo em dobro.”",            worksOn:["COMMON"] },
  { text:"“Confie em mim, minha reputação é minha vida.”",     worksOn:["COMMON","VIP"] },
];

/* ══════════════════════════════════════════════════════════════
   RANKING (seed determinístico — sobe dinamicamente)
   ══════════════════════════════════════════════════════════════ */
const ALDEIA_RANK_NAMES = [
  "Aldeia do Sol","Aldeia da Névoa","Vila Ferro","Vila Doce","Porto Antigo","Alto Vento","Vale Rubro",
  "Colina Prata","Bosque Azul","Cume Dourado","Ilha Cinza","Rio Manso","Ponta Larga","Vila Cristal",
  "Aldeia Trovão","Terra Quente","Campo Verde","Baía Oculta","Passo Livre","Torre Vermelha","Aldeia Lua",
  "Vila Aurora","Portal Musgo","Vila Bronze","Aldeia Ébano","Costa Longa","Vila Fênix","Aldeia Corvo",
  "Vila Perene","Aldeia Pluma","Vila Runa","Aldeia Fenda","Vila Âmbar","Aldeia Espinho","Porto Norte",
  "Vila Coral","Aldeia Miragem","Passagem Céu","Vila Zênite","Aldeia Verão","Vila Inverno","Aldeia Verglas",
  "Vila Titã","Aldeia Cinábrio","Vila Elfa","Vila Anã","Aldeia Grim","Vila Lótus","Aldeia Chama","Vila Íris"
];
function aldeiaSeededRandom(seed) {
  let s = seed >>> 0;
  return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
// Ranking persistido no save: antes o array era recriado do zero a cada 30min
// com um jitter novo, então os pontos das aldeias oscilavam pra cima E pra baixo —
// contradizendo a própria UI ("pontos que só sobem"). Agora a lista-base nasce
// uma única vez e cada janela de 30min só SOMA um incremento, nunca resorteia.
function aldeiaBuildRanking(a) {
  const now = Date.now();
  const windowMs = 1000 * 60 * 30;
  if (!a.rankingState) {
    const rng = aldeiaSeededRandom(a.seed || 1);
    const base = [];
    for (let i = 0; i < ALDEIA_CFG.rankingSize; i++) {
      const nm = ALDEIA_RANK_NAMES[i % ALDEIA_RANK_NAMES.length] + " " + (Math.floor(i / ALDEIA_RANK_NAMES.length) + 1);
      const start = Math.floor(20000 * Math.pow(0.965, i)) + Math.floor(rng() * 250);
      base.push({ name: nm, pts: start });
    }
    a.rankingState = { base, lastWindow: Math.floor(now / windowMs) };
  }
  const state = a.rankingState;
  const curWindow = Math.floor(now / windowMs);
  if (curWindow > state.lastWindow) {
    const rng = aldeiaSeededRandom((a.seed || 1) + curWindow);
    const windowsPassed = curWindow - state.lastWindow;
    state.base.forEach(row => {
      // incremento pequeno e sempre positivo por janela — "só sobe" de verdade
      row.pts += Math.floor((20 + rng() * 60) * windowsPassed);
    });
    state.lastWindow = curWindow;
  }
  const list = state.base.map(row => ({ name: row.name, pts: row.pts }));
  list.sort((x, y) => y.pts - x.pts).forEach((r, i) => (r.pos = i + 1));
  return list;
}

/* ══════════════════════════════════════════════════════════════
   API PRINCIPAL — window.AldeiaAPI
   ══════════════════════════════════════════════════════════════ */
(function () {
  function _fmt(n) { return (typeof fmtNum === "function") ? fmtNum(n) : Math.floor(n).toString(); }

  // BUG CRÍTICO (causa de "tudo reseta sozinho"): _save() sempre lia o save
  // direto do localStorage via getOrCreateSave(). _persist() chamava
  // "saveGame()" — uma função que NUNCA existiu em gamedata.js — então o
  // try/catch engolia o erro e nada era gravado de volta no localStorage.
  // Resultado: toda ação (upgrade, atender cliente, pagar informante...)
  // alterava um objeto só em memória; na consulta seguinte (render a cada
  // 3s, tick a cada 5s, ou qualquer outro clique) getOrCreateSave() lia de
  // novo o localStorage antigo, sem a mudança — prédios voltavam de nível,
  // recursos zeravam, clientes sumiam e ouro ganho/gasto desaparecia.
  // A função real de gravação do jogo é writeSave(save) (ver gamedata.js).
  let _lastSave = null;
  function _save() {
    _lastSave = (typeof getOrCreateSave === "function")
      ? getOrCreateSave()
      : (window.__aldeiaSaveFallback = window.__aldeiaSaveFallback || { gold: 0 });
    return _lastSave;
  }
  function _persist() {
    try { if (_lastSave && typeof writeSave === "function") writeSave(_lastSave); } catch (e) {}
  }

  // Usa o ledger oficial de ouro do jogo (totalGoldEarned/totalGoldSpent)
  // quando disponível, em vez de mexer em save.gold "na unha". Sem isso, o
  // ouro ganho/gasto na Aldeia não entra no ledger que o anti-cheat de moeda
  // (_computeHash, em gamedata.js) usa — deixando o saldo dessincronizado
  // caso o hash precise ser recalculado por qualquer outro motivo.
  function _earnGold(save, amount) {
    if (typeof earnGold === "function") earnGold(save, amount);
    else save.gold = (save.gold || 0) + amount;
  }
  function _spendGold(save, amount) {
    if (typeof spendGold === "function") return spendGold(save, amount);
    if ((save.gold || 0) < amount) return false;
    save.gold = (save.gold || 0) - amount;
    return true;
  }

  function ensure(save) {
    save = save || _save();
    if (!save.aldeia) {
      save.aldeia = {
        buildings: { shop:1, mine:1, farm:1, ads:1, quality:1, warehouse:1, security:1, decor:1 },
        // apenas as 5 iniciais existem — as demais começam "não construídas" (level 0)
        // requisito: começa com 5 construções lvl1. Loja/Minas/Fazenda + Publicidade + Qualidade.
        // Armazém/Guarda/Decoração começam em 0 (precisam construir).
        resources: { dinheiro: 0, carvao: 0, trigo: 0 },
        happyClients: 0,
        totalClientsServed: 0,
        thievesCaught: 0,
        thievesFooled: 0,
        avaliacao: 1,          // 1..5 estrelas visuais
        clientes: [],          // clientes ativos aguardando
        contratos: [],         // contratos semanais ativos
        vips: {},              // {npcId: fidelidade}
        informante: { paidUntil: 0, warning: null },
        notifications: [],
        entradaFechada: false,
        lastTick: Date.now(),
        lastClientAt: 0,
        seed: Math.floor(Math.random() * 1e9),
      };
      save.aldeia.buildings.warehouse = 0;
      save.aldeia.buildings.security  = 0;
      save.aldeia.buildings.decor     = 0;
    }
    // migrations defensivas
    const a = save.aldeia;
    a.buildings = a.buildings || {};
    ["shop","mine","farm","ads","quality","warehouse","security","decor"].forEach(k=>{
      if (typeof a.buildings[k] !== "number") a.buildings[k] = (k==="warehouse"||k==="security"||k==="decor") ? 0 : 1;
    });
    a.resources = a.resources || { dinheiro:0, carvao:0, trigo:0 };
    a.clientes = a.clientes || [];
    a.contratos = a.contratos || [];
    a.vips = a.vips || {};
    a.informante = a.informante || { paidUntil:0, warning:null };
    a.notifications = a.notifications || [];
    if (typeof a.entradaFechada !== "boolean") a.entradaFechada = false;
    return a;
  }

  function capacity(a) {
    const lv = a.buildings.warehouse || 0;
    // Nível 0 (Armazém ainda não construído) usa a capacidade-base gratuita;
    // sem isso a produção ficava travada em 0 desde o início do jogo.
    return lv > 0 ? (ALDEIA_CFG.warehouseCapPerLevel[lv] || 0) : ALDEIA_CFG.warehouseBaseCap;
  }
  function totalStock(a) { return a.resources.dinheiro + a.resources.carvao + a.resources.trigo; }
  function charmeLevel(a) { return a.buildings.decor || 0; }

  function produce(a, dtSec) {
    const lvS = a.buildings.shop, lvM = a.buildings.mine, lvF = a.buildings.farm;
    const mult = (lv) => 1 + (lv - 1) * ALDEIA_CFG.levelBonusPerLevel;
    const ticks = dtSec / 5;
    const cap = capacity(a);
    const stockNow = totalStock(a);
    const room = Math.max(0, cap - stockNow);
    if (room <= 0) {
      // sem armazém suficiente: produção parada some
      a.__wastedTicks = (a.__wastedTicks || 0) + ticks;
      return;
    }
    const addS = lvS > 0 ? ALDEIA_CFG.itemsPerTickBase.shop * mult(lvS) * ticks : 0;
    const addM = lvM > 0 ? ALDEIA_CFG.itemsPerTickBase.mine * mult(lvM) * ticks : 0;
    const addF = lvF > 0 ? ALDEIA_CFG.itemsPerTickBase.farm * mult(lvF) * ticks : 0;
    const totalAdd = addS + addM + addF;
    let scale = 1;
    if (totalAdd > room) scale = room / totalAdd;
    a.resources.dinheiro += addS * scale;
    a.resources.carvao   += addM * scale;
    a.resources.trigo    += addF * scale;
  }

  /* ── clientes ────────────────────────────────────────── */
  function _dayHourMult() {
    const now = new Date();
    const d = now.getDay(); // 0..6
    const h = now.getHours();
    // fins de semana e horário comercial atraem mais
    let m = 1.0;
    if (d === 0 || d === 6) m *= 1.35;
    if (d === 5) m *= 1.15;
    if (h >= 10 && h <= 20) m *= 1.25;
    if (h >= 0 && h < 6) m *= 0.35;
    return m;
  }

  function _rollNPC(a) {
    // chance de VIP
    const charme = charmeLevel(a);
    const canVIP = charme >= ALDEIA_CFG.charmeThresholdVIP;
    let vipChance = canVIP ? Math.min(0.18, 0.03 + charme * 0.02) : 0;
    // O informante prometia "VIPs mais frequentes" no dia, mas esse aviso não
    // alterava nada na chance de VIP — o jogador pagava 8.000 de ouro por um
    // texto puramente decorativo. Agora o aviso realmente dobra a chance.
    const informanteAtivo = a.informante && a.informante.paidUntil > Date.now();
    if (canVIP && informanteAtivo && a.informante.warning === "vip") {
      vipChance = Math.min(0.4, vipChance * 2.2);
    }
    let pool = ALDEIA_NPCS.filter(n => n.type === "COMMON");
    if (canVIP && Math.random() < vipChance) pool = ALDEIA_NPCS.filter(n => n.type === "VIP");
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function _rollClient(a) {
    const npc = _rollNPC(a);
    const want = npc.wants[Math.floor(Math.random() * npc.wants.length)];
    const qty = 100 + Math.floor(Math.random() * (npc.type === "VIP" ? 900 : 400));
    const lvQ = a.buildings.quality || 1;
    let patience = ALDEIA_CFG.qualityPatience[lvQ] || 600;
    if (npc.type === "VIP") patience = Math.floor(patience * 0.55); // VIPs esperam menos

    // ladrão?
    let bonusThief = 0;
    // BUG: só o aviso "thieves" não conferia se o informante ainda estava
    // pago (paidUntil > now) antes de aplicar o efeito — diferente dos avisos
    // "vip" e "calm" logo abaixo, que fazem essa checagem corretamente. Numa
    // sessão longa sem abrir o jogo (tick processa até 30min de uma vez), o
    // aviso podia ficar "preso" ativo entre o roll de clientes e a limpeza de
    // expiração no fim do tick. Corrigido para exigir informante pago.
    const informanteAtivoAgora = a.informante && a.informante.paidUntil > Date.now();
    if (informanteAtivoAgora && a.informante.warning === "thieves") bonusThief = 0.15;
    const thief = (npc.type !== "VIP") && (Math.random() < (ALDEIA_CFG.baseThiefChance + bonusThief));
    const revealBoost = ALDEIA_CFG.securityRevealBoost[a.buildings.security] || 1;
    // nível de sutileza: quanto mais clientes atendidos, mais sutil
    const subtlety = Math.min(5, 1 + Math.floor((a.totalClientsServed || 0) / 30));
    const signLevel = Math.max(1, Math.min(5, subtlety - Math.floor((revealBoost - 1) * 2)));
    const signs = thief ? [ALDEIA_THIEF_SIGNS[signLevel][Math.floor(Math.random() * ALDEIA_THIEF_SIGNS[signLevel].length)]] : [];

    const phrase = ALDEIA_PHRASES[want][Math.floor(Math.random() * ALDEIA_PHRASES[want].length)]
      .replace("{qty}", qty);

    return {
      id: "cl_" + Date.now() + "_" + Math.floor(Math.random() * 999),
      npcId: npc.id, name: npc.name, emoji: npc.emoji, type: npc.type,
      want, qty, phrase,
      catchphrase: npc.catchphrase,
      arrivedAt: Date.now(),
      patienceSec: patience,
      thief,
      signs,
      negotiated: false,
    };
  }

  function tick() {
    const save = _save();
    const a = ensure(save);
    const now = Date.now();
    const dt = Math.min(60 * 30, Math.max(0, (now - a.lastTick) / 1000));
    a.lastTick = now;
    if (dt <= 0) return;

    produce(a, dt);

    // remover clientes que perderam paciência
    a.clientes = a.clientes.filter(c => {
      const elapsed = (now - c.arrivedAt) / 1000;
      if (elapsed > c.patienceSec) {
        _dropAvaliacao(a, 0.05);
        _notif(a, `😤 ${c.name} foi embora — perdeu paciência.`);
        return false;
      }
      return true;
    });

    // spawnar clientes
    const adsMult = ALDEIA_CFG.adsClientMult[a.buildings.ads] || 1;
    let spawnEveryMs = (ALDEIA_CFG.baseClientEverySec * 1000) / (adsMult * _dayHourMult());
    // Mesmo problema do aviso "vip": o informante prometia "dia calmo,
    // movimento leve" mas nada no código deixava o movimento mais leve.
    // Agora o aviso realmente espaça a chegada de clientes.
    if (a.informante && a.informante.warning === "calm" && a.informante.paidUntil > now) {
      spawnEveryMs *= 1.7;
    }
    if (!a.entradaFechada && now - (a.lastClientAt || 0) >= spawnEveryMs && a.clientes.length < 8) {
      a.lastClientAt = now;
      const c = _rollClient(a);
      a.clientes.push(c);
      _notif(a, `🔔 ${c.name} chegou (${_fmt(c.qty)} de ${ALDEIA_RES[c.want].name}).`);
    }

    // informante expira?
    if (a.informante.paidUntil && now > a.informante.paidUntil) {
      a.informante.paidUntil = 0;
      a.informante.warning = null;
    }

    // contratos: verificar vencimento e limpar concluídos antigos
    a.contratos = a.contratos.filter(ct => {
      if (now > ct.deadline && !ct.done) {
        _notif(a, `⏳ Contrato "${ct.title}" venceu.`);
        _dropAvaliacao(a, 0.15);
        return false;
      }
      // Concluído: fica visível por 2min (mostrando "✅ Concluído"), depois some
      // e libera a vaga de vez — antes ficava preso na lista para sempre.
      if (ct.done && ct.completedAt && now - ct.completedAt > 2 * 60 * 1000) {
        return false;
      }
      return true;
    });

    _persist();
  }

  function _notif(a, text) {
    a.notifications = a.notifications || [];
    a.notifications.unshift({ text, at: Date.now(), read: false });
    if (a.notifications.length > 40) a.notifications.length = 40;
    // dispara toast do jogo se existir
    try { if (typeof toast === "function") toast(text); } catch (e) {}
  }
  function _dropAvaliacao(a, amt) {
    a.avaliacao = Math.max(0.5, (a.avaliacao || 1) - amt);
  }
  function _boostAvaliacao(a, amt) {
    a.avaliacao = Math.min(5, (a.avaliacao || 1) + amt);
  }

  /* ── atender / expulsar ─────────────────────────────── */
  function serveClient(clientId) {
    const save = _save();
    const a = ensure(save);
    const idx = a.clientes.findIndex(c => c.id === clientId);
    if (idx < 0) return { ok: false, msg: "Cliente não está mais aqui." };
    const c = a.clientes[idx];

    if ((a.resources[c.want] || 0) < c.qty) return { ok: false, msg: "Sem estoque suficiente!" };

    if (c.thief) {
      const secLv = a.buildings.security || 0;
      const succChance = ALDEIA_CFG.securityThiefSuccess[secLv] ?? 0.55;
      const stolen = Math.random() < succChance;
      a.resources[c.want] -= c.qty;
      a.clientes.splice(idx, 1);
      if (stolen) {
        a.thievesFooled = (a.thievesFooled || 0) + 1;
        _dropAvaliacao(a, 0.2);
        _notif(a, `🦹 ${c.name} era LADRÃO! Levou ${_fmt(c.qty)} de ${ALDEIA_RES[c.want].name} e nada pagou.`);
        return { ok: true, msg: "Você foi enganado!", thief: true, stolen: true };
      } else {
        a.thievesCaught = (a.thievesCaught || 0) + 1;
        _boostAvaliacao(a, 0.05);
        _notif(a, `🛡️ Guarda pegou ${c.name} tentando roubar! Recuperou tudo.`);
        a.resources[c.want] += c.qty;
        return { ok: true, msg: "Guarda pegou o ladrão!", thief: true, stolen: false };
      }
    }

    // cliente legítimo
    a.resources[c.want] -= c.qty;
    const lvQ = a.buildings.quality || 1;
    const payMult = ALDEIA_CFG.qualityPayMult[lvQ] || 1;
    const patienceUsed = (Date.now() - c.arrivedAt) / 1000 / c.patienceSec;
    const happy = patienceUsed < 0.6;
    const finalMult = happy ? payMult : payMult * 0.55;
    const goldEarned = Math.floor(c.qty * 0.35 * finalMult * (c.type === "VIP" ? 3.2 : 1));
    _earnGold(save, goldEarned);

    a.totalClientsServed = (a.totalClientsServed || 0) + 1;
    if (happy) {
      a.happyClients = (a.happyClients || 0) + 1;
      _boostAvaliacao(a, 0.02);
      // fidelizar VIP
      if (c.type === "VIP") a.vips[c.npcId] = (a.vips[c.npcId] || 0) + 1;
    } else {
      _dropAvaliacao(a, 0.03);
    }
    // qualidade sobe por happy
    _tryUpgradeQuality(a);

    // contratos: incrementa progresso se pediu esse recurso
    a.contratos.forEach(ct => { if (!ct.done && ct.res === c.want) { ct.progress += c.qty; if (ct.progress >= ct.target) { ct.done = true; _completeContract(save, a, ct); } } });

    a.clientes.splice(idx, 1);
    _notif(a, `✅ ${c.name} atendido. +🪙${_fmt(goldEarned)}${happy ? " 😊" : " 😐"}`);
    _persist();
    return { ok: true, msg: `+🪙${_fmt(goldEarned)}`, gold: goldEarned, happy };
  }

  function expel(clientId) {
    const save = _save();
    const a = ensure(save);
    const idx = a.clientes.findIndex(c => c.id === clientId);
    if (idx < 0) return { ok: false, msg: "Cliente não está mais aqui." };
    const c = a.clientes[idx];
    a.clientes.splice(idx, 1);
    if (c.thief) {
      a.thievesCaught = (a.thievesCaught || 0) + 1;
      _boostAvaliacao(a, 0.08);
      _notif(a, `🛡️ Você expulsou ${c.name} — era ladrão! Bom faro!`);
      _persist();
      return { ok: true, msg: "Boa! Era ladrão mesmo!", correct: true };
    } else {
      _dropAvaliacao(a, 0.12);
      _notif(a, `❌ Você expulsou ${c.name} — era cliente legítimo! Avaliação caiu.`);
      _persist();
      return { ok: true, msg: "Ei! Era cliente honesto!", correct: false };
    }
  }

  // BUG CRÍTICO: a UI (Aldeia.html) sorteava e guardava c.negoPicks direto no
  // objeto "a.clientes[i]" retornado por API.ensure(), mas esse objeto vem de
  // getOrCreateSave() — que decodifica um save NOVO do localStorage a cada
  // chamada. Sem passar por _persist()/writeSave(), a mutação só existia
  // durante aquele único render(); no próximo (a cada 3s) o cliente virava
  // outro objeto sem negoPicks, e as 3 frases de negociação eram resorteadas
  // sozinhas debaixo do jogador — exatamente o bug que o comentário antigo
  // dizia ter corrigido, só que a correção morava do lado errado (UI) e
  // nunca gravava no save. Agora o sorteio mora aqui dentro, com _persist().
  function getNegoPicks(clientId) {
    const save = _save();
    const a = ensure(save);
    const c = a.clientes.find(x => x.id === clientId);
    if (!c) return [];
    if (!c.negoPicks) {
      const picks = [];
      const pool = ALDEIA_NEGO_LINES.slice();
      while (picks.length < 3 && pool.length) {
        picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      }
      c.negoPicks = picks;
      _persist();
    }
    return c.negoPicks;
  }

  function negotiate(clientId, lineIndex, lines) {
    const save = _save();
    const a = ensure(save);
    const c = a.clientes.find(x => x.id === clientId);
    if (!c) return { ok: false, msg: "Cliente saiu." };
    const line = lines[lineIndex];
    if (!line) return { ok: false, msg: "Frase inválida." };
    const works = line.worksOn.includes(c.type);
    // 20% de chance de bug mesmo se "works" — variação
    const success = works && Math.random() > 0.2;
    c.negotiated = true;
    if (success) {
      c.patienceSec += 300;
      _notif(a, `💬 Frase funcionou com ${c.name}! Paciência renovada.`);
      _persist();
      return { ok: true, msg: "Frase certeira!", success: true };
    } else {
      c.patienceSec = Math.max(30, c.patienceSec * 0.6);
      _dropAvaliacao(a, 0.04);
      _notif(a, `💬 ${c.name} não gostou da conversa...`);
      _persist();
      return { ok: true, msg: "Não colou.", success: false };
    }
  }

  /* ── upgrades ────────────────────────────────────────── */
  function upgradeCost(bid, curLv) {
    const table = ALDEIA_CFG.upgradeCostGold[bid];
    if (!table) return null;
    return table[curLv + 1] || null;
  }

  function upgrade(bid) {
    const save = _save();
    const a = ensure(save);
    const bdef = ALDEIA_BUILDINGS.find(b => b.id === bid);
    if (!bdef) return { ok: false, msg: "Construção inválida." };
    const cur = a.buildings[bid] || 0;
    if (cur >= bdef.maxLevel) return { ok: false, msg: "Nível máximo!" };
    if (bdef.upgradeType === "happy") return { ok: false, msg: "Qualidade sobe atendendo bem clientes." };
    const cost = upgradeCost(bid, cur);
    if (cost == null) return { ok: false, msg: "Sem custo definido." };
    if ((save.gold || 0) < cost) return { ok: false, msg: `Faltam 🪙${_fmt(cost - (save.gold || 0))}` };
    _spendGold(save, cost);
    a.buildings[bid] = cur + 1;
    _notif(a, `⬆️ ${bdef.emoji} ${bdef.name} agora nível ${cur + 1}!`);
    _persist();
    return { ok: true, msg: "Upgrade concluído!" };
  }

  function _tryUpgradeQuality(a) {
    const cur = a.buildings.quality;
    if (cur >= ALDEIA_CFG.qualityMax) return;
    const need = ALDEIA_CFG.qualityHappyToUpgrade[cur + 1];
    if (a.happyClients >= need) {
      a.buildings.quality = cur + 1;
      _notif(a, `⭐ Qualidade subiu para nível ${cur + 1}! Clientes esperam e pagam mais.`);
    }
  }

  function toggleEntrada() {
    const save = _save();
    const a = ensure(save);
    a.entradaFechada = !a.entradaFechada;
    _notif(a, a.entradaFechada ? "🚫 Entrada fechada — nenhum cliente novo vai chegar." : "🔓 Entrada reaberta.");
    _persist();
    return { ok: true, msg: a.entradaFechada ? "Entrada fechada." : "Entrada reaberta.", fechada: a.entradaFechada };
  }

  /* ── informante ─────────────────────────────────────── */
  function payInformante() {
    const save = _save();
    const a = ensure(save);
    const cost = 8000;
    if ((save.gold || 0) < cost) return { ok: false, msg: `Faltam 🪙${_fmt(cost - (save.gold || 0))}` };
    _spendGold(save, cost);
    a.informante.paidUntil = Date.now() + 60 * 60 * 1000;
    // sorteia um aviso
    const opts = ["thieves", "vip", "calm"];
    a.informante.warning = opts[Math.floor(Math.random() * opts.length)];
    const map = {
      thieves: "🕶️ Hoje há MAIS LADRÕES circulando — cuidado!",
      vip:     "👑 Nobres visitam a aldeia hoje — VIPs mais frequentes!",
      calm:    "🕊️ Dia calmo previsto. Movimento leve.",
    };
    _notif(a, "🗞️ Informante: " + map[a.informante.warning]);
    _persist();
    return { ok: true, msg: "Informante contratado por 1h." };
  }

  /* ── contratos semanais ─────────────────────────────── */
  function generateContract() {
    const save = _save();
    const a = ensure(save);
    // Só contratos NÃO concluídos ocupam as 3 vagas — contratos "done" ficam visíveis
    // por um tempo (ver tick()) mas não bloqueiam a geração de novos.
    const ativos = a.contratos.filter(ct => !ct.done).length;
    if (ativos >= 3) return { ok: false, msg: "Máx 3 contratos ativos." };
    const resKeys = ["dinheiro","carvao","trigo"];
    const res = resKeys[Math.floor(Math.random() * 3)];
    const target = 1000 + Math.floor(Math.random() * 4000);
    const days = 3 + Math.floor(Math.random() * 5);
    const contract = {
      id: "ct_" + Date.now(),
      title: `Entregar ${_fmt(target)} de ${ALDEIA_RES[res].name}`,
      res, target, progress: 0,
      deadline: Date.now() + days * 24 * 3600 * 1000,
      rewardGold: target * 4,
      done: false,
    };
    a.contratos.push(contract);
    _notif(a, `📜 Novo contrato: ${contract.title} · ${days}d`);
    _persist();
    return { ok: true, msg: "Contrato aceito." };
  }
  function _completeContract(save, a, ct) {
    _earnGold(save, ct.rewardGold);
    _boostAvaliacao(a, 0.25);
    ct.completedAt = Date.now();
    _notif(a, `🏆 Contrato concluído! +🪙${_fmt(ct.rewardGold)}`);
  }

  /* ── ranking ────────────────────────────────────────── */
  function getRanking() {
    const save = _save();
    const a = ensure(save);
    const list = aldeiaBuildRanking(a);
    // pontos do jogador — calculado, não igual aos NPCs
    const myPts = Math.floor(
      (a.totalClientsServed || 0) * 10 +
      (a.happyClients || 0) * 6 +
      (a.thievesCaught || 0) * 25 +
      Object.values(a.buildings).reduce((s, v) => s + v * 40, 0)
    );
    // não injeta no ranking (jogador não ganha pontos igual aos do ranking)
    _persist(); // salva o rankingState atualizado (senão o incremento se perde ao recarregar)
    return { list, myPts };
  }

  /* ── util notificações ──────────────────────────────── */
  function unreadCount() {
    const a = ensure();
    return (a.clientes || []).length + (a.notifications || []).filter(n => !n.read).length;
  }
  function markAllRead() {
    const a = ensure();
    a.notifications.forEach(n => n.read = true);
    _persist();
  }

  window.AldeiaAPI = {
    ensure, tick,
    capacity, totalStock, charmeLevel,
    serveClient, expel, negotiate, getNegoPicks,
    upgrade, upgradeCost,
    payInformante, generateContract, getRanking, toggleEntrada,
    unreadCount, markAllRead,
    CFG: ALDEIA_CFG, RES: ALDEIA_RES,
    BUILDINGS: ALDEIA_BUILDINGS, NPCS: ALDEIA_NPCS,
    PHRASES: ALDEIA_PHRASES, NEGO: ALDEIA_NEGO_LINES,
  };

  // roda tick em qualquer página que tenha o script
  try {
    ensure();
    setInterval(tick, ALDEIA_CFG.tickMs);
    tick();
  } catch (e) { /* ambiente sem save — ok */ }
})();
