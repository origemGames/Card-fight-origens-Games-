/* ═══════════════════════════════════════════════════════════════
   gamedata-pesca.js — Card Fight v10.0 — SISTEMA DE PESCA
   Patch file: carrega após gamedata.js, gamedata2.js, gamedata3.js
   ═══════════════════════════════════════════════════════════════ */

"use strict";

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO GLOBAL DA PESCA
// ══════════════════════════════════════════════════════════════
const PESCA_CONFIG = {
  // Iscas diárias
  iscasDiariasBase:        10,    // jogador comum
  iscasDiariasCreator:     100,   // criador verificado
  iscasExtraMaxCompra:     30,    // máximo de iscas adicionais por dia
  iscasExtraPreco:         1250,  // ouro por isca extra (v11: +25%, acompanhando o aumento geral de preços)

  // Chance base de peixe-carta (%)
  chanceBasePeixe:         67,

  // Distribuição dentro dos 67% (soma = 100%)
  rarityWeightFishing: {
    COMMON:     80.0,
    RARE:       11.0,
    EPIC:        5.0,
    LEGENDARY:   2.5,
    MYTHIC:      1.0,
    ULTRA_RARE:  0.35,
    ORIGENS:     0.15,
  },

  // Chance de fuga do peixe-carta (%)
  chanceFugaBase:          8,

  // Restos de isca por fuga
  restosPorFuga:           2,

  // Troca: restos → Isca Origens
  restosParaIsca:          1000,

  // Local muda a cada N milissegundos
  localRotacaoMs:          3600000, // 1 hora

  // Pontos de ranking por peixe-carta pescado
  pontosPerPeixe:          5,

  // Pontos passivos: até 1 ponto a cada 5 minutos (aleatório)
  pontosPassivosInterval:  300000,  // 5 min
};

// ══════════════════════════════════════════════════════════════
// TIPOS DE ISCA
// ══════════════════════════════════════════════════════════════
const BAIT_TYPES = [
  {
    id:         "isca_comum",
    name:       "Isca Comum",
    emoji:      "🪱",
    desc:       "Chance padrão, sem bônus especial.",
    bonusChance: 0,
    noEscape:   false,
    price:      0,        // grátis (as 10 diárias)
    realMoney:  false,
    color:      "#9e9e9e",
  },
  {
    id:         "isca_prata",
    name:       "Isca de Prata",
    emoji:      "🪝",
    desc:       "Aumenta levemente a chance de vir um peixe-carta (+1.5%).",
    bonusChance: 1.5,
    noEscape:   false,
    price:      3750,
    realMoney:  false,
    color:      "#90caf9",
  },
  {
    id:         "isca_dourada",
    name:       "Isca Dourada",
    emoji:      "🌟",
    desc:       "Aumenta em 3% a chance de vir um peixe-carta.",
    bonusChance: 3,
    noEscape:   false,
    price:      10000,
    realMoney:  false,
    color:      "#ffc107",
  },
  {
    id:         "isca_origens",
    name:       "Isca Origens",
    emoji:      "💎",
    desc:       "+6% chance de peixe-carta e 0% de fuga! Só com dinheiro real.",
    bonusChance: 6,
    noEscape:   true,
    price:      0,
    realMoney:  true,
    color:      "#ff4444",
  },
  {
    id:         "isca_cosmica",
    name:       "Isca Cósmica",
    emoji:      "🌌",
    desc:       "+4% chance e dobra a chance de cartas raras+. Compra na loja.",
    bonusChance: 4,
    rareBonus:  2.0,   // multiplicador para raridades RARE+
    noEscape:   false,
    price:      18750,
    realMoney:  false,
    color:      "#7c4dff",
  },
  {
    id:         "isca_sombria",
    name:       "Isca das Sombras",
    emoji:      "🕳️",
    desc:       "+5% chance exclusiva de cartas Épico e acima. Misteriosa.",
    bonusChance: 2,
    epicOnlyBonus: 5,
    noEscape:   false,
    price:      25000,
    realMoney:  false,
    color:      "#9c27b0",
  },
];

// ══════════════════════════════════════════════════════════════
// VARAS DE PESCA
// ══════════════════════════════════════════════════════════════
// maxRarity: teto de raridade suportado pela vara
// Se sortear acima do maxRarity → vara QUEBRA e exibe mensagem
const FISHING_RODS = [
  {
    id:          "vara_madeira",
    name:        "Vara de Madeira",
    emoji:       "🪵",
    desc:        "Vara básica para iniciantes. Aguenta até cartas Raras.",
    maxRarity:   "RARE",
    durability:  30,
    price:       620,
    realMoney:   false,
    color:       "#a1887f",
    rarityLevel: 1,
  },
  {
    id:          "vara_bambu",
    name:        "Vara de Bambu",
    emoji:       "🎋",
    desc:        "Flexível e resistente. Aguenta mais usos que a de madeira.",
    maxRarity:   "RARE",
    durability:  60,
    price:       1880,
    realMoney:   false,
    color:       "#66bb6a",
    rarityLevel: 1,
  },
  {
    id:          "vara_aco",
    name:        "Vara de Aço",
    emoji:       "🔩",
    desc:        "Forjada em aço temperado. Suporta cartas Épicas.",
    maxRarity:   "EPIC",
    durability:  80,
    price:       10000,
    realMoney:   false,
    color:       "#90caf9",
    rarityLevel: 2,
  },
  {
    id:          "vara_encantada",
    name:        "Vara Encantada",
    emoji:       "✨",
    desc:        "Imbuída de magia élfica. Suporta até cartas Lendárias.",
    maxRarity:   "LEGENDARY",
    durability:  100,
    price:       31250,
    realMoney:   false,
    color:       "#ffc107",
    rarityLevel: 3,
  },
  {
    id:          "vara_lendaria",
    name:        "Vara Lendária",
    emoji:       "🌟",
    desc:        "Alta durabilidade, suporta até Mítico. Muito procurada.",
    maxRarity:   "MYTHIC",
    durability:  140,
    price:       187500,
    realMoney:   false,
    color:       "#ce93d8",
    rarityLevel: 4,
  },
  {
    id:          "vara_cristal",
    name:        "Vara de Cristal",
    emoji:       "💠",
    desc:        "Feita de cristal primordial. Suporta cartas Míticas.",
    maxRarity:   "MYTHIC",
    durability:  90,
    price:       100000,
    realMoney:   false,
    color:       "#29b6f6",
    rarityLevel: 4,
  },
  {
    id:          "vara_sombras",
    name:        "Vara das Sombras",
    emoji:       "🌑",
    desc:        "Forjada nas trevas. Suporta cartas Ultra Raras.",
    maxRarity:   "ULTRA_RARE",
    durability:  70,
    price:       250000,
    realMoney:   false,
    color:       "#7c4dff",
    rarityLevel: 5,
  },
  {
    id:          "vara_abissal",
    name:        "Vara Abissal",
    emoji:       "🕳️",
    desc:        "Vinda do abismo profundo. Alta durabilidade, suporta Ultra Raro.",
    maxRarity:   "ULTRA_RARE",
    durability:  120,
    price:       437500,
    realMoney:   false,
    color:       "#00e5ff",
    rarityLevel: 5,
  },
  {
    id:          "vara_origens",
    name:        "Vara das Origens",
    emoji:       "🎯",
    desc:        "A mais poderosa que existe. Suporta qualquer carta, até Origens. Só dinheiro real.",
    maxRarity:   "ORIGENS",
    durability:  60,
    price:       0,
    realMoney:   true,
    color:       "#ff4444",
    rarityLevel: 6,
    badge:       "PREMIUM",
  },
  {
    id:          "vara_divina",
    name:        "Vara Divina",
    emoji:       "⚡",
    desc:        "Durabilidade longa e suporte a Origens. O melhor custo-benefício premium.",
    maxRarity:   "ORIGENS",
    durability:  100,
    price:       0,
    realMoney:   true,
    color:       "#ffd700",
    rarityLevel: 6,
    badge:       "PREMIUM",
  },
  {
    id:          "vara_infinita",
    name:        "Vara Eterna",
    emoji:       "♾️",
    desc:        "Durabilidade INFINITA. Suporta Origens. O topo absoluto da pesca.",
    maxRarity:   "ORIGENS",
    durability:  Infinity,
    price:       0,
    realMoney:   true,
    color:       "#ff4444",
    rarityLevel: 6,
    badge:       "ULTRA PREMIUM",
  },
];

// ══════════════════════════════════════════════════════════════
// LOCAIS DE PESCA (20 locais + Lago Origens)
// ══════════════════════════════════════════════════════════════
const FISHING_LOCATIONS = [
  { id:"loc_pedras",      name:"Lago das Pedras",       emoji:"🪨", desc:"Tranquilo e rico em cardumes.",       bonusChance:0,   bonusUltra:0,    weight:80 },
  { id:"loc_sombras",     name:"Rio das Sombras",        emoji:"🌑", desc:"Misterioso, cardumes noturnos.",      bonusChance:0,   bonusUltra:0,    weight:75 },
  { id:"loc_praia",       name:"Praia Dourada",          emoji:"🏖️", desc:"Cardumes abundantes na areia.",       bonusChance:2,   bonusUltra:0,    weight:70 },
  { id:"loc_caverna",     name:"Caverna Aquática",        emoji:"🗿", desc:"Cartas raras se escondem aqui.",      bonusChance:1.5, bonusUltra:0.2,  weight:65 },
  { id:"loc_pantano",     name:"Pântano Sombrio",         emoji:"🐸", desc:"Isca some rápido mas vale a pena.",  bonusChance:0.5, bonusUltra:0,    weight:72 },
  { id:"loc_oceano",      name:"Oceano Profundo",         emoji:"🌊", desc:"As profundezas revelam raridades.",   bonusChance:2,   bonusUltra:0.3,  weight:60 },
  { id:"loc_fonte",       name:"Fonte Mística",           emoji:"🌀", desc:"Energia mágica potencializa o sorteio.", bonusChance:2, bonusUltra:0.5,  weight:55 },
  { id:"loc_cachoeira",   name:"Cachoeira Prateada",      emoji:"💧", desc:"As águas correntes atraem cartas.",  bonusChance:1.5, bonusUltra:0,    weight:68 },
  { id:"loc_gelo",        name:"Mar de Gelo",             emoji:"❄️", desc:"Cartas congeladas esperam por você.", bonusChance:2,  bonusUltra:0.2,  weight:58 },
  { id:"loc_delta",       name:"Delta do Rio",            emoji:"🌿", desc:"Biodiversidade extrema de cartas.",   bonusChance:1,   bonusUltra:0,    weight:74 },
  { id:"loc_lagoa",       name:"Lagoa Negra",             emoji:"🖤", desc:"Escura mas cheia de surpresas.",      bonusChance:1,   bonusUltra:0.1,  weight:62 },
  { id:"loc_cristal",     name:"Mar de Cristal",          emoji:"💎", desc:"Transparente como as cartas raras.",  bonusChance:2,   bonusUltra:0.4,  weight:50 },
  { id:"loc_porto",       name:"Porto Estelar",           emoji:"⭐", desc:"Estrelas guiam cartas ultra raras.",  bonusChance:2.5, bonusUltra:0.6,  weight:40 },
  { id:"loc_abismo",      name:"Abismo Sem Fundo",        emoji:"🕳️", desc:"O fundo revela o que ninguém viu.",  bonusChance:2,   bonusUltra:0.5,  weight:35 },
  { id:"loc_lunar",       name:"Enseada Lunar",           emoji:"🌙", desc:"A lua ilumina cartas especiais.",     bonusChance:1.5, bonusUltra:0.3,  weight:48 },
  { id:"loc_floresta",    name:"Floresta Submersa",       emoji:"🌲", desc:"Cartas únicas vivem nessa floresta.", bonusChance:2,   bonusUltra:0.2,  weight:42 },
  { id:"loc_vulcao",      name:"Vulcão Aquático",         emoji:"🌋", desc:"Calor e raridade em um só local.",    bonusChance:2.5, bonusUltra:0.3,  weight:38 },
  { id:"loc_amanhecer",   name:"Rio do Amanhecer",        emoji:"🌅", desc:"O amanhecer traz cartas frescas.",    bonusChance:1,   bonusUltra:0,    weight:65 },
  { id:"loc_perolas",     name:"Gruta das Pérolas",       emoji:"🦪", desc:"Pérolas e cartas únicas aguardam.",   bonusChance:2,   bonusUltra:0.4,  weight:44 },
  { id:"loc_estelar",     name:"Lago Estelar",            emoji:"🔭", desc:"A astronomia favorece os corajosos.",  bonusChance:3,   bonusUltra:0.8,  weight:28 },
  // Local ultra-raro: Lago Origens
  {
    id:          "loc_origens",
    name:        "🌌 Lago Origens",
    emoji:       "🌌",
    desc:        "O local mais raro e poderoso. +7% geral e +1% Ultra Raro!",
    bonusChance: 7,
    bonusUltra:  1,
    weight:      3,  // rarísssimo na rotação
    isOrigens:   true,
  },
];

// ══════════════════════════════════════════════════════════════
// CARTAS EXCLUSIVAS DE PESCA
// ══════════════════════════════════════════════════════════════
const FISHING_CARDS = [
  // ── COMUNS DE PESCA ──
  { id:"pf001", name:"Salmão de Aço",         atk:18,  hp:85,   rarity:"COMMON",    img:"🐟", desc:"Resistente como aço, mas assado fica ótimo.", fishingOnly:true },
  { id:"pf002", name:"Carpa Trovão",           atk:22,  hp:70,   rarity:"COMMON",    img:"⚡", desc:"Nada tão rápido que parece raio.", fishingOnly:true },
  { id:"pf003", name:"Peixe-Lâmina",          atk:26,  hp:55,   rarity:"COMMON",    img:"🔪", desc:"Suas escamas cortam como espadas.", fishingOnly:true },
  { id:"pf004", name:"Baiacu Guerreiro",       atk:12,  hp:105,  rarity:"COMMON",    img:"🐡", desc:"Incha e bate em tudo ao redor.", fishingOnly:true },
  { id:"pf005", name:"Truta das Pedras",       atk:16,  hp:88,   rarity:"COMMON",    img:"🪨", desc:"Sobrevive em qualquer correnteza.", fishingOnly:true },
  { id:"pf006", name:"Piranha Sonolenta",      atk:28,  hp:45,   rarity:"COMMON",    img:"😴", desc:"Quando acorda... cuidado.", fishingOnly:true },

  // ── RAROS DE PESCA ──
  { id:"pf010", name:"Tubarão de Água Doce",   atk:68,  hp:190,  rarity:"RARE",      img:"🦈", desc:"Perdido no rio, bravo como o oceano.", fishingOnly:true },
  { id:"pf011", name:"Peixe-Luz",              atk:58,  hp:220,  rarity:"RARE",      img:"💡", desc:"Ilumina o caminho e o inimigo.", fishingOnly:true },
  { id:"pf012", name:"Arraia Elétrica",         atk:75,  hp:175,  rarity:"RARE",      img:"⚡", desc:"Uma descarga de 10.000 volts.", fishingOnly:true },
  { id:"pf013", name:"Salmão Lendário",        atk:62,  hp:210,  rarity:"RARE",      img:"🌊", desc:"Nada contra a correnteza e vence.", fishingOnly:true },
  { id:"pf014", name:"Nautilus Antigo",        atk:55,  hp:240,  rarity:"RARE",      img:"🐚", desc:"Sobreviveu a extinções inteiras.", fishingOnly:true },

  // ── ÉPICOS DE PESCA ──
  { id:"pf020", name:"Kraken Pequenino",       atk:105, hp:380,  rarity:"EPIC",      img:"🐙", desc:"Pequeno, mas derruba barcos.", fishingOnly:true },
  { id:"pf021", name:"Serpente Marinha",        atk:115, hp:340,  rarity:"EPIC",      img:"🐍", desc:"Envolve o inimigo e aperta até o fim.", fishingOnly:true },
  { id:"pf022", name:"Peixe-Dragão",           atk:125, hp:295,  rarity:"EPIC",      img:"🐲", desc:"Um dragão que vive nas profundezas.", fishingOnly:true },
  { id:"pf023", name:"Polvo das Profundezas",   atk:95,  hp:430,  rarity:"EPIC",      img:"🌀", desc:"Tentáculos infindáveis.", fishingOnly:true },

  // ── LENDÁRIOS DE PESCA ──
  { id:"pf030", name:"Leviatã Adolescente",     atk:185, hp:680,  rarity:"LEGENDARY", img:"🐳", desc:"Um Leviatã jovem — e já devastador.", fishingOnly:true },
  { id:"pf031", name:"Deus das Correntes",      atk:200, hp:720,  rarity:"LEGENDARY", img:"🌊", desc:"Controla toda água do mundo.", fishingOnly:true },
  { id:"pf032", name:"Carpa das Estrelas",      atk:165, hp:800,  rarity:"LEGENDARY", img:"⭐", desc:"Nada entre constelações à noite.", fishingOnly:true },

  // ── MÍTICOS DE PESCA ──
  { id:"pf040", name:"Behemoth Aquático",       atk:310, hp:1050, rarity:"MYTHIC",    img:"🌊", desc:"A criatura que biblia cita como o maior de todos.", fishingOnly:true },
  { id:"pf041", name:"Hidra das Origens",       atk:280, hp:1200, rarity:"MYTHIC",    img:"🐉", desc:"7 cabeças, cada uma com vontade própria.", fishingOnly:true },

  // ── ULTRA RAROS DE PESCA ──
  { id:"pf050", name:"Peixe do Fim dos Tempos", atk:490, hp:1750, rarity:"ULTRA_RARE",img:"☄️", desc:"Existe desde antes do universo. Ninguém sabe como.", fishingOnly:true },
  { id:"pf051", name:"Serpente Cósmica",        atk:520, hp:1600, rarity:"ULTRA_RARE",img:"🌌", desc:"Envolve galáxias inteiras ao dormir.", fishingOnly:true },

  // ── ORIGENS DE PESCA ── (Exclusivíssimas)
  { id:"pf060", name:"O Primeiro Peixe",         atk:750, hp:2800, rarity:"ORIGENS",   img:"🌅", desc:"A primeira forma de vida que existiu. Incompreensível.", fishingOnly:true },
  { id:"pf061", name:"Guardião das Profundezas", atk:820, hp:3200, rarity:"ORIGENS",   img:"🌊", desc:"Governa todos os oceanos de todos os mundos possíveis.", fishingOnly:true },
];

// Injeta cartas de pesca no array global
if (typeof ALL_CARDS !== "undefined") {
  FISHING_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// ⚠️ CORREÇÃO CRÍTICA: as cartas fishingOnly precisam estar em ALL_CARDS para
// serem localizadas no cofre/batalha (getCardById, getHandFromVault etc.),
// mas isso fazia com que getCardsByRarity() — usada pelo openPack() para
// sortear cartas de PACOTES — também pudesse sortear cartas exclusivas de
// pesca, quebrando a promessa "cartas 🎣 nunca aparecem em pacotes!".
// Este patch filtra as cartas fishingOnly de fora apenas quando
// getCardsByRarity() é chamada (ex: abertura de pacotes), sem afetar buscas
// diretas em ALL_CARDS (que a própria pesca usa para sortear suas cartas).
if (typeof getCardsByRarity === "function" && typeof getCardsByRarity._pescaWrapped === "undefined") {
  const _originalGetCardsByRarity = getCardsByRarity;
  window.getCardsByRarity = function getCardsByRarityNoFishing(rarity) {
    return _originalGetCardsByRarity(rarity).filter(c => !c.fishingOnly);
  };
  window.getCardsByRarity._pescaWrapped = true;
}

// ══════════════════════════════════════════════════════════════
// RANKING DE PESCA — Players fictícios (seed-based)
// ══════════════════════════════════════════════════════════════
const FISHING_RANK_PLAYERS = [
  { name:"PescadorLendário",    verified:true,  basePts:185000 },
  { name:"AquaticMaster",       verified:true,  basePts:172000 },
  { name:"IscaDeDiamante",      verified:false, basePts:168000 },
  { name:"Rei das Profundezas", verified:true,  basePts:155000 },
  { name:"VoltagemMaxima",      verified:false, basePts:148000 },
  { name:"KrakenDomador",       verified:true,  basePts:141000 },
  { name:"Origenzeiro",         verified:false, basePts:134000 },
  { name:"SalmonKing",          verified:true,  basePts:129000 },
  { name:"AbismoEterno",        verified:false, basePts:121000 },
  { name:"PescaHook",           verified:false, basePts:115000 },
  { name:"TempestadeMarina",    verified:true,  basePts:109000 },
  { name:"DragonFisher",        verified:false, basePts:103000 },
  { name:"CosmicAngler",        verified:true,  basePts:98000  },
  { name:"NautilusRex",         verified:false, basePts:92000  },
  { name:"VortexFisher",        verified:false, basePts:88000  },
  { name:"PeixeDeDeus",         verified:false, basePts:83000  },
  { name:"GuardianOcean",       verified:true,  basePts:79000  },
  { name:"HidraHunter",         verified:false, basePts:74000  },
  { name:"CarpaStar",           verified:false, basePts:70000  },
  { name:"DeepSeeker",          verified:true,  basePts:66000  },
];

// Gera pontos dinâmicos com seed baseada no dia atual
function getFishingRankPoints(basePts, idx) {
  const dayKey = Math.floor(Date.now() / 86400000);
  // Pseudo-random mas determinístico para o dia
  const seed   = (dayKey * 1337 + idx * 31 + basePts) & 0x7fffffff;
  const extra  = ((seed % 8000) - 4000); // ±4000 pts de variação diária
  return Math.max(0, basePts + extra);
}

function getFishingLeaderboard(save) {
  const playerPts = save.pesca ? (save.pesca.rankPts || 0) : 0;
  const playerName = save.playerName || "Você";

  const list = FISHING_RANK_PLAYERS.map((p, i) => ({
    name:     p.name,
    verified: p.verified,
    pts:      getFishingRankPoints(p.basePts, i),
    isPlayer: false,
  }));

  list.push({ name: playerName, verified: !!save.isVerifiedCreator, pts: playerPts, isPlayer: true });
  list.sort((a, b) => b.pts - a.pts);

  return list;
}

// ══════════════════════════════════════════════════════════════
// LOCAL ATUAL — Determinístico por hora
// ══════════════════════════════════════════════════════════════
function getCurrentFishingLocation() {
  const hourKey = Math.floor(Date.now() / PESCA_CONFIG.localRotacaoMs);
  // Hash simples para selecionar local com peso
  const totalWeight = FISHING_LOCATIONS.reduce((s, l) => s + l.weight, 0);
  const hash = ((hourKey * 6271 + 0x4f3a) & 0x7fffffff) % totalWeight;

  let cum = 0;
  for (const loc of FISHING_LOCATIONS) {
    cum += loc.weight;
    if (hash < cum) return loc;
  }
  return FISHING_LOCATIONS[0];
}

// Retorna quanto tempo (ms) falta para o próximo local
function getFishingLocationTimeLeft() {
  const nowMs   = Date.now();
  const hourKey = Math.floor(nowMs / PESCA_CONFIG.localRotacaoMs);
  const nextMs  = (hourKey + 1) * PESCA_CONFIG.localRotacaoMs;
  return nextMs - nowMs;
}

// ══════════════════════════════════════════════════════════════
// RARIDADE → NÍVEL NUMÉRICO (para comparação de varas)
// ══════════════════════════════════════════════════════════════
const RARITY_LEVELS = {
  COMMON:     1,
  RARE:       2,
  EPIC:       3,
  LEGENDARY:  4,
  MYTHIC:     5,
  ULTRA_RARE: 6,
  ORIGENS:    7,
};

function getRodRarityLevel(rod) {
  return RARITY_LEVELS[rod.maxRarity] || 1;
}

function cardAboveRodLimit(card, rod) {
  const cardLvl = RARITY_LEVELS[card.rarity] || 1;
  const rodLvl  = getRodRarityLevel(rod);
  return cardLvl > rodLvl;
}

// ══════════════════════════════════════════════════════════════
// SORTEAR CARTA DA PESCA
// ══════════════════════════════════════════════════════════════
function drawFishingCard(save, baitId, location) {
  // 1. Calcula chance total de peixe-carta
  const bait     = BAIT_TYPES.find(b => b.id === baitId) || BAIT_TYPES[0];
  const locBonus = location ? location.bonusChance : 0;
  const totalChance = Math.min(97, PESCA_CONFIG.chanceBasePeixe + bait.bonusChance + locBonus);

  const roll = Math.random() * 100;
  if (roll >= totalChance) {
    return { result: "miss" }; // sem carta
  }

  // 2. Verifica fuga
  const ultraBonus  = location ? location.bonusUltra : 0;
  const escapePct   = bait.noEscape ? 0 : Math.max(0, PESCA_CONFIG.chanceFugaBase - bait.bonusChance * 0.5);
  if (!bait.noEscape && Math.random() * 100 < escapePct) {
    return { result: "escape" };
  }

  // 3. Sorteia raridade
  const weights = { ...PESCA_CONFIG.rarityWeightFishing };

  // Aplica bônus de Ultra Raro do local
  if (ultraBonus > 0) {
    weights.ULTRA_RARE += ultraBonus;
    weights.COMMON = Math.max(50, weights.COMMON - ultraBonus);
  }

  // Aplica bônus de isca cósmica (raras+)
  if (bait.rareBonus && bait.rareBonus > 1) {
    ["RARE","EPIC","LEGENDARY","MYTHIC","ULTRA_RARE","ORIGENS"].forEach(r => {
      weights[r] = (weights[r] || 0) * bait.rareBonus;
    });
  }

  // Aplica bônus de isca sombria (épico+)
  if (bait.epicOnlyBonus) {
    ["EPIC","LEGENDARY","MYTHIC","ULTRA_RARE","ORIGENS"].forEach(r => {
      weights[r] = (weights[r] || 0) + bait.epicOnlyBonus / 5;
    });
  }

  const totalW = Object.values(weights).reduce((s, v) => s + v, 0);
  let rng = Math.random() * totalW;
  let pickedRarity = "COMMON";
  for (const [rar, w] of Object.entries(weights)) {
    rng -= w;
    if (rng <= 0) { pickedRarity = rar; break; }
  }

  // 4. Pega carta correspondente (preferência por cartas de pesca exclusivas, depois qualquer carta)
  const fishCards = (typeof ALL_CARDS !== "undefined" ? ALL_CARDS : []).filter(c => c.rarity === pickedRarity);
  const exclusiveFishCards = fishCards.filter(c => c.fishingOnly);
  const pool = exclusiveFishCards.length > 0 && Math.random() < 0.45 ? exclusiveFishCards : fishCards;

  if (pool.length === 0) {
    return { result: "miss" };
  }

  const card = pool[Math.floor(Math.random() * pool.length)];
  return { result: "card", card, rarity: pickedRarity };
}

// Quebra a vara equipada de vez: perde a posse (varasCompradas) e o registro
// de durabilidade salva, forçando o jogador a comprar outra pra pescar de
// novo. Fecha o exploit de desequipar/equipar pra resetar a durabilidade.
function _quebrarVaraEquipada(pesca) {
  const rodId = pesca.varaEquipada;
  if (rodId) {
    if (pesca.varasCompradas) delete pesca.varasCompradas[rodId];
    if (pesca.varasDurabilidade) delete pesca.varasDurabilidade[rodId];
  }
  pesca.varaEquipada     = null;
  pesca.varaDurabilidade = 0;
}

// Consome 1 de durabilidade da vara equipada (varas infinitas não gastam) e
// já sincroniza o valor restante em varasDurabilidade[rodId]. Se zerar,
// quebra a vara (remove a posse — precisa comprar outra).
function _gastarDurabilidadeVara(pesca, rod) {
  if (rod.durability === Infinity) return;
  pesca.varaDurabilidade = Math.max(0, (pesca.varaDurabilidade || 0) - 1);
  if (!pesca.varasDurabilidade) pesca.varasDurabilidade = {};
  pesca.varasDurabilidade[rod.id] = pesca.varaDurabilidade;
  if (pesca.varaDurabilidade <= 0) _quebrarVaraEquipada(pesca);
}

// ══════════════════════════════════════════════════════════════
// EXECUTAR UMA PESCARIA
// ══════════════════════════════════════════════════════════════
function executarPescaria(save, baitId) {
  if (!save.pesca) initPescaSave(save);

  const pesca = save.pesca;

  // Verificar iscas disponíveis
  const baitCount = pesca.iscas[baitId] || 0;
  if (baitId !== "isca_comum" && baitCount <= 0) {
    return { ok: false, reason: "Você não tem esse tipo de isca." };
  }
  if (baitId === "isca_comum") {
    if (pesca.iscasComunsHoje <= 0) {
      return { ok: false, reason: "Suas iscas comuns do dia acabaram! Volte amanhã ou compre iscas especiais." };
    }
  }

  // Verificar vara equipada
  const rod = FISHING_RODS.find(r => r.id === pesca.varaEquipada);
  if (!rod) {
    return { ok: false, reason: "Equipe uma vara de pesca primeiro!" };
  }
  if (rod.durability !== Infinity && (pesca.varaDurabilidade || 0) <= 0) {
    return { ok: false, reason: "Sua vara está quebrada! Compre uma nova na loja." };
  }

  // Consumir isca
  if (baitId === "isca_comum") {
    pesca.iscasComunsHoje--;
  } else {
    pesca.iscas[baitId] = (pesca.iscas[baitId] || 0) - 1;
  }

  // Consumir durabilidade da vara (antes de saber o resultado)
  const location = getCurrentFishingLocation();
  const draw = drawFishingCard(save, baitId, location);

  // Processar resultado
  let rodBroke = false;
  if (draw.result === "card") {
    // Verificar se a carta supera o limite da vara
    if (cardAboveRodLimit(draw.card, rod)) {
      rodBroke = true;
      if (rod.durability !== Infinity) _quebrarVaraEquipada(pesca);
      // Ainda assim, pode não ganhar a carta (vara quebrou)
      return {
        ok:       true,
        result:   "rod_break",
        card:     draw.card,
        rodBroke: true,
        location,
      };
    }

    // Durabilidade (o peixe foi fisgado independentemente do cofre estar cheio)
    _gastarDurabilidadeVara(pesca, rod);

    // Adicionar carta ao cofre (respeitando o limite do cofre)
    if (!save.vault) save.vault = [];
    const vaultLimit = save.vaultLimit || 50;
    if (save.vault.length >= vaultLimit) {
      return {
        ok:        true,
        result:    "vault_full",
        card:      draw.card,
        location,
      };
    }
    save.vault.push(draw.card.id);

    // Pontos de ranking
    pesca.rankPts = (pesca.rankPts || 0) + PESCA_CONFIG.pontosPerPeixe;
    pesca.totalPescados = (pesca.totalPescados || 0) + 1;

    return {
      ok:       true,
      result:   "card",
      card:     draw.card,
      location,
    };

  } else if (draw.result === "escape") {
    // Peixe fugiu
    _gastarDurabilidadeVara(pesca, rod);
    pesca.restos = (pesca.restos || 0) + PESCA_CONFIG.restosPorFuga;
    return {
      ok:       true,
      result:   "escape",
      restos:   PESCA_CONFIG.restosPorFuga,
      location,
    };

  } else {
    // Sem mordida
    _gastarDurabilidadeVara(pesca, rod);
    return {
      ok:       true,
      result:   "miss",
      location,
    };
  }
}

// ══════════════════════════════════════════════════════════════
// TROCA: RESTOS → ISCA ORIGENS
// ══════════════════════════════════════════════════════════════
function trocarRestosIsca(save) {
  if (!save.pesca) initPescaSave(save);
  const pesca = save.pesca;
  if ((pesca.restos || 0) < PESCA_CONFIG.restosParaIsca) {
    return { ok: false, reason: `Você precisa de ${PESCA_CONFIG.restosParaIsca} Restos de Isca.` };
  }
  pesca.restos -= PESCA_CONFIG.restosParaIsca;
  pesca.iscas["isca_origens"] = (pesca.iscas["isca_origens"] || 0) + 1;
  return { ok: true };
}

// ══════════════════════════════════════════════════════════════
// COMPRAR ISCA EXTRA (iscas comuns adicionais no dia)
// ══════════════════════════════════════════════════════════════
function comprarIscaExtra(save, qtd) {
  if (!save.pesca) initPescaSave(save);
  const pesca = save.pesca;
  const maxExtra = PESCA_CONFIG.iscasExtraMaxCompra;
  const jaCompradas = pesca.iscasExtrasHoje || 0;

  if (jaCompradas >= maxExtra) {
    return { ok: false, reason: `Você já comprou o máximo de iscas extras hoje (${maxExtra}).` };
  }

  const disponiveis = maxExtra - jaCompradas;
  const comprar = Math.min(qtd, disponiveis);
  const custo   = comprar * PESCA_CONFIG.iscasExtraPreco;

  if (save.gold < custo) {
    return { ok: false, reason: `Ouro insuficiente. Custo: 🪙 ${custo.toLocaleString("pt-BR")}` };
  }

  spendGold(save, custo);
  pesca.iscasComunsHoje += comprar;
  pesca.iscasExtrasHoje  = jaCompradas + comprar;

  return { ok: true, compradas: comprar, custo };
}

// ══════════════════════════════════════════════════════════════
// COMPRAR ISCA ESPECIAL (por ouro)
// ══════════════════════════════════════════════════════════════
function comprarIscaEspecial(save, baitId, qtd) {
  if (!save.pesca) initPescaSave(save);
  const bait = BAIT_TYPES.find(b => b.id === baitId);
  if (!bait || bait.realMoney) return { ok: false, reason: "Isca inválida ou somente premium." };

  const custo = bait.price * qtd;
  if (save.gold < custo) {
    return { ok: false, reason: `Ouro insuficiente. Custo: 🪙 ${custo.toLocaleString("pt-BR")}` };
  }

  spendGold(save, custo);
  save.pesca.iscas[baitId] = (save.pesca.iscas[baitId] || 0) + qtd;
  return { ok: true, qtd, custo };
}

// ══════════════════════════════════════════════════════════════
// COMPRAR VARA (por ouro)
// ══════════════════════════════════════════════════════════════
function comprarVara(save, rodId) {
  if (!save.pesca) initPescaSave(save);
  const rod = FISHING_RODS.find(r => r.id === rodId);
  if (!rod || rod.realMoney) return { ok: false, reason: "Vara inválida ou somente premium." };

  if (save.gold < rod.price) {
    return { ok: false, reason: `Ouro insuficiente. Custo: 🪙 ${rod.price.toLocaleString("pt-BR")}` };
  }

  spendGold(save, rod.price);
  if (!save.pesca.varasCompradas) save.pesca.varasCompradas = {};
  save.pesca.varasCompradas[rodId] = true;
  // Vara comprada agora (seja pela primeira vez, seja repondo uma que quebrou)
  // sempre vem com durabilidade cheia.
  if (!save.pesca.varasDurabilidade) save.pesca.varasDurabilidade = {};
  save.pesca.varasDurabilidade[rodId] = rod.durability;

  return { ok: true, rod };
}

// ══════════════════════════════════════════════════════════════
// EQUIPAR VARA
// ══════════════════════════════════════════════════════════════
function equiparVara(save, rodId) {
  if (!save.pesca) initPescaSave(save);
  const rod = FISHING_RODS.find(r => r.id === rodId);
  if (!rod) return { ok: false, reason: "Vara não encontrada." };

  const owned = save.pesca.varasCompradas && save.pesca.varasCompradas[rodId];
  if (!owned) return { ok: false, reason: "Você não possui essa vara." };

  // FIX (bug "vara de pescar infinita"): antes, equipar SEMPRE resetava a
  // durabilidade pro máximo — bastava ir na aba Varas, desequipar e equipar
  // de novo pra "curar" a vara de graça. Agora a durabilidade de cada vara
  // possuída fica salva em varasDurabilidade[rodId] e é restaurada como
  // estava, não resetada. Só uma vara NUNCA equipada antes começa cheia.
  if (!save.pesca.varasDurabilidade) save.pesca.varasDurabilidade = {};
  const savedDur = save.pesca.varasDurabilidade[rodId];

  save.pesca.varaEquipada = rodId;
  if (rod.durability === Infinity) {
    save.pesca.varaDurabilidade = Infinity;
  } else if (typeof savedDur === "number") {
    if (savedDur <= 0) {
      // Segurança extra: uma vara com durabilidade salva 0 não deveria
      // mais estar em varasCompradas (é removida ao quebrar), mas caso
      // aconteça, bloqueia o equip em vez de reviver a vara de graça.
      save.pesca.varaEquipada = null;
      return { ok: false, reason: "Essa vara está quebrada! Compre uma nova." };
    }
    save.pesca.varaDurabilidade = savedDur;
  } else {
    save.pesca.varaDurabilidade = rod.durability;
    save.pesca.varasDurabilidade[rodId] = rod.durability;
  }
  return { ok: true, rod };
}

// ══════════════════════════════════════════════════════════════
// PONTOS PASSIVOS (chamado em intervalos regulares)
// ══════════════════════════════════════════════════════════════
function tickFishingPassivePoints(save) {
  if (!save.pesca) return;
  const now = Date.now();
  const last = save.pesca.lastPassiveTick || 0;

  if (now - last < PESCA_CONFIG.pontosPassivosInterval) return false;

  // Nem todo ciclo dá ponto (aleatório)
  const seed = (Math.floor(now / 60000)) & 0xfffff;
  if ((seed % 3) === 0) {  // ~33% de chance
    save.pesca.rankPts = (save.pesca.rankPts || 0) + 1;
  }
  save.pesca.lastPassiveTick = now;
  return true;
}

// ══════════════════════════════════════════════════════════════
// INICIALIZAR CAMPOS DE PESCA NO SAVE
// ══════════════════════════════════════════════════════════════
function initPescaSave(save) {
  if (save.pesca) return;

  const today   = new Date().toDateString();
  const isCreator = !!save.isVerifiedCreator;
  const iscasDiarias = isCreator
    ? PESCA_CONFIG.iscasDiariasCreator
    : PESCA_CONFIG.iscasDiariasBase;

  save.pesca = {
    // Iscas
    iscasComunsHoje:  iscasDiarias,
    iscasExtrasHoje:  0,
    ultimoDiaIsca:    today,
    iscas:            {},   // { baitId: quantidade }

    // Vara
    varaEquipada:      null,
    varaDurabilidade:  0,
    varasCompradas:    {},
    varasDurabilidade: {},  // { rodId: durabilidade restante } — sobrevive a desequipar/equipar

    // Restos de isca
    restos:            0,

    // Ranking
    rankPts:           0,
    totalPescados:     0,
    lastPassiveTick:   0,
  };
}

// Garante reset diário de iscas comuns
function ensureDailyBaitReset(save) {
  if (!save.pesca) { initPescaSave(save); return; }
  const today     = new Date().toDateString();
  const isCreator = !!save.isVerifiedCreator;
  const iscasDiarias = isCreator ? PESCA_CONFIG.iscasDiariasCreator : PESCA_CONFIG.iscasDiariasBase;

  if (save.pesca.ultimoDiaIsca !== today) {
    save.pesca.iscasComunsHoje  = iscasDiarias;
    save.pesca.iscasExtrasHoje  = 0;
    save.pesca.ultimoDiaIsca    = today;
  }
}

// ══════════════════════════════════════════════════════════════
// PATCH DO getOrCreateSave — adiciona campos de pesca
// ══════════════════════════════════════════════════════════════
(function patchGetOrCreateSaveWithPesca() {
  if (typeof getOrCreateSave !== "function") {
    window.addEventListener("load", patchGetOrCreateSaveWithPesca);
    return;
  }

  const _orig = getOrCreateSave;
  window.getOrCreateSave = function () {
    const save = _orig();

    // Garantir que os campos de pesca existem
    if (!save.pesca) {
      initPescaSave(save);
    }

    // Reset diário automático
    ensureDailyBaitReset(save);

    return save;
  };
})();

// ══════════════════════════════════════════════════════════════
// CONQUISTAS DE PESCA
// ══════════════════════════════════════════════════════════════
const FISHING_ACHIEVEMENTS = [
  { id:"fish_first",   label:"Primeiro Peixe",     emoji:"🎣", desc:"Pegue sua primeira carta por pesca",     req:1,    field:"totalPescados" },
  { id:"fish_10",      label:"Pescador Iniciante",  emoji:"🐟", desc:"Pegue 10 cartas por pesca",             req:10,   field:"totalPescados" },
  { id:"fish_50",      label:"Pescador Dedicado",   emoji:"🦈", desc:"Pegue 50 cartas por pesca",             req:50,   field:"totalPescados" },
  { id:"fish_100",     label:"Pescador Veterano",   emoji:"🏅", desc:"Pegue 100 cartas por pesca",            req:100,  field:"totalPescados" },
  { id:"fish_500",     label:"Mestre Pescador",     emoji:"🏆", desc:"Pegue 500 cartas por pesca",            req:500,  field:"totalPescados" },
  { id:"fish_origens", label:"Lenda das Águas",     emoji:"🌌", desc:"Pesque uma carta Origens pela primeira vez", special:"origens_fished" },
];

// Verifica conquistas de pesca e retorna as novas
function checkFishingAchievements(save) {
  if (!save.pesca) return [];
  if (!save.achievements) save.achievements = [];
  const newAch = [];

  FISHING_ACHIEVEMENTS.forEach(ach => {
    if (save.achievements.includes(ach.id)) return;
    if (ach.special) {
      if (save.pesca[ach.special]) {
        save.achievements.push(ach.id);
        newAch.push(ach);
      }
    } else if (ach.field && (save.pesca[ach.field] || 0) >= ach.req) {
      save.achievements.push(ach.id);
      newAch.push(ach);
    }
  });

  return newAch;
}

console.log("[Card Fight v10.0] gamedata-pesca.js — Sistema de Pesca completo carregado ✓");