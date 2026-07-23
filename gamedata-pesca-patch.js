/* ═══════════════════════════════════════════════════════════════════════
   gamedata-pesca-patch.js — Card Fight v12.0 — CORRIGIDO
   • Todos os locais agora têm bonusChance e bonusUltra
   • Locais v11 convertidos para o mesmo formato dos v12
   ═══════════════════════════════════════════════════════════════════════ */

(function patchPesca() {

// ═══════════════════════════════════════════════════════════════════════
// 1. NOVAS CARTAS DE PESCA (pf062 – pf129) — mesmo conteúdo anterior
// ═══════════════════════════════════════════════════════════════════════

const PESCA_CARDS_V11 = [
  // ── v11: COMUNS (pf062–pf068) ──
  { id:"pf062", name:"Peixe Lanterna",      img:"🏮", rarity:"COMMON",     atk:18,  hp:55,  desc:"Um peixe que brilha como uma lanterna nas noites escuras dos lagos.", fishingOnly:true },
  { id:"pf063", name:"Caranguejo Ferrugem", img:"🦀", rarity:"COMMON",     atk:22,  hp:70,  desc:"Vive nas margens ferrugosas de rios antigos. Sua garra direita é maior que o corpo.", fishingOnly:true },
  { id:"pf064", name:"Lambari Dourado",     img:"🐟", rarity:"COMMON",     atk:14,  hp:48,  desc:"O mais comum dos peixes dourados. Mas todo lambari dourado é especial para quem o pesca.", fishingOnly:true },
  { id:"pf065", name:"Polvo de Rio",        img:"🐙", rarity:"COMMON",     atk:20,  hp:60,  desc:"Impossível segundo a ciência, mas presente nos lagos de Origens. Ninguém questiona mais.", fishingOnly:true },
  { id:"pf066", name:"Tartaruga Aquática",  img:"🐢", rarity:"COMMON",     atk:12,  hp:90,  desc:"Lenta, teimosa e praticamente indestrutível. Na pesca, paciência vale mais que força.", fishingOnly:true },
  { id:"pf067", name:"Peixe Névoa",         img:"💨", rarity:"COMMON",     atk:16,  hp:52,  desc:"Semitransparente, ele some quando alguém tenta olhá-lo de frente.", fishingOnly:true },
  { id:"pf068", name:"Bagre Sombrio",       img:"🐬", rarity:"COMMON",     atk:24,  hp:75,  desc:"Mora nas margens escuras dos rios. Evita a luz, mas é atraído pelo brilho das iscas.", fishingOnly:true },

  // ── v11: RAROS (pf069–pf073) ──
  { id:"pf069", name:"Dourado do Crepúsculo", img:"🌅", rarity:"RARE",    atk:62,  hp:190, desc:"Aparece apenas nos 20 minutos do pôr-do-sol. Sua escama reflete todas as cores do horizonte.", fishingOnly:true },
  { id:"pf070", name:"Peixe Espada Arcano",   img:"🗡️", rarity:"RARE",   atk:75,  hp:210, desc:"Seu focinho serve como espada mágica. Já foi visto cortando correntes subaquáticas.", fishingOnly:true },
  { id:"pf071", name:"Arraia de Cristal",      img:"💠", rarity:"RARE",   atk:58,  hp:185, desc:"Voa sob a água como uma manta ray de vidro. Extremamente frágil mas incrivelmente veloz.", fishingOnly:true },
  { id:"pf072", name:"Enguia Relâmpago",       img:"⚡", rarity:"RARE",   atk:80,  hp:200, desc:"Cada toque libera uma descarga elétrica. Pescadores experientes usam luvas de borracha.", fishingOnly:true },
  { id:"pf073", name:"Peixe Balão Toxínico",   img:"🎈", rarity:"RARE",   atk:55,  hp:230, desc:"Infla ao se sentir ameaçado. Libera toxinas na água, atordoando peixes próximos.", fishingOnly:true },

  // ── v11: ÉPICOS (pf074–pf078) ──
  { id:"pf074", name:"Sirena das Profundezas", img:"🧜", rarity:"EPIC",   atk:105, hp:340, desc:"Metade humana, metade peixe. Canta canções que hipnotizam pescadores — cuidado ao ouvir.", fishingOnly:true },
  { id:"pf075", name:"Tubarão de Obsidiana",   img:"🦷", rarity:"EPIC",   atk:120, hp:380, desc:"Feito de pedra vulcânica solidificada. Não sangra. Não para. Nunca recua.", fishingOnly:true },
  { id:"pf076", name:"Medusa Noturna",         img:"🌙", rarity:"EPIC",   atk:95,  hp:310, desc:"Seus tentáculos brilham com luz da lua. Apenas aparece quando não há estrelas no céu.", fishingOnly:true },
  { id:"pf077", name:"Calamar Dimensional",    img:"🌀", rarity:"EPIC",   atk:110, hp:360, desc:"Capaz de dobrar o espaço ao seu redor. Seus tentáculos alcançam outra dimensão.", fishingOnly:true },
  { id:"pf078", name:"Dragão de Água Doce",    img:"🐉", rarity:"EPIC",   atk:130, hp:420, desc:"Lenda de mil anos. Nunca foi capturado antes de Card Fight existir.", fishingOnly:true },

  // ── v11: LENDÁRIOS (pf079–pf082) ──
  { id:"pf079", name:"Fênix dos Mares",        img:"🔥", rarity:"LEGENDARY", atk:165, hp:580, desc:"Quando morre, renascem três cópias menores. Impossível de exterminar permanentemente.", fishingOnly:true },
  { id:"pf080", name:"Cefalópode Eterno",       img:"💫", rarity:"LEGENDARY", atk:180, hp:620, desc:"Tem dezesseis tentáculos, cada um com consciência própria. Discutem entre si qual direção nadar.", fishingOnly:true },
  { id:"pf081", name:"Baleia de Luz",           img:"🐋", rarity:"LEGENDARY", atk:155, hp:680, desc:"Tão grande que pescadores a confundem com ilhas. Em seu dorso vivem ecossistemas inteiros.", fishingOnly:true },
  { id:"pf082", name:"Coral Carmesim",          img:"🪸", rarity:"LEGENDARY", atk:145, hp:560, desc:"Não é um peixe — é um recife vivo que decidiu se aventurar pelos lagos de Origens.", fishingOnly:true },

  // ── v11: MÍTICOS (pf083–pf085) ──
  { id:"pf083", name:"Leviatã Júnior",          img:"🌊", rarity:"MYTHIC",    atk:260, hp:980, desc:"Filho do grande Leviatã. Ainda jovem, mas já capaz de criar tsunamis com um movimento da cauda.", fishingOnly:true },
  { id:"pf084", name:"Kraken Vermelho",         img:"🩸", rarity:"MYTHIC",    atk:290, hp:1100,desc:"Variante rara do Kraken. Seu toque envenena a água por quilômetros. Evitado até por outros Krakens.", fishingOnly:true },
  { id:"pf085", name:"Serpente Celestial",      img:"🌠", rarity:"MYTHIC",    atk:280, hp:1050,desc:"Diz a lenda que orbita o planeta uma vez por milênio. Desceu ao oceano numa era esquecida.", fishingOnly:true },

  // ── v11: ULTRA RAROS (pf086–pf088) ──
  { id:"pf086", name:"Oráculo das Profundezas", img:"🔮", rarity:"ULTRA_RARE", atk:420, hp:1550,desc:"Conhece o passado, presente e futuro de cada pescador. Raramente fala, mas quando fala... muda tudo.", fishingOnly:true },
  { id:"pf087", name:"Naga Primordial",          img:"🐍", rarity:"ULTRA_RARE", atk:450, hp:1680,desc:"A primeira criatura aquática do universo. Mais velha que os oceanos, mais velha que a luz.", fishingOnly:true },
  { id:"pf088", name:"Hidra Dimensional",         img:"🦎", rarity:"ULTRA_RARE", atk:480, hp:1720,desc:"Cada cabeça cortada vira duas. Mas as cabeças existem em dimensões diferentes, impossível de cortar todas.", fishingOnly:true },

  // ── v11: ORIGENS (pf089–pf091) ──
  { id:"pf089", name:"Rei Abissal Nephilim",    img:"👑", rarity:"ORIGENS",   atk:750, hp:2900,desc:"O governante absoluto de todos os oceanos de todas as dimensões. Aparece 1 vez a cada era geológica.", fishingOnly:true },
  { id:"pf090", name:"Dragão do Vazio Eterno",  img:"🌌", rarity:"ORIGENS",   atk:820, hp:3100,desc:"Não é deste universo. Atravessou a barreira do vazio para nadar nos lagos de Origens. ATK máximo registrado.", fishingOnly:true },
  { id:"pf091", name:"Entidade das Marés",      img:"⚜️", rarity:"ORIGENS",   atk:790, hp:3000,desc:"Controla o fluxo de todos os rios, lagos e oceanos com um simples pensamento. A natureza lhe obedece.", fishingOnly:true },

  // ── v11.1: CARTAS EXTRAS (pf092–pf098) ──
  { id:"pf092", name:"Peixe Ampulheta",  img:"⏳", rarity:"EPIC",       atk:145, hp:380, desc:"Nada para trás no tempo. Impossível de mirar.", fishingOnly:true },
  { id:"pf093", name:"Camarão Prisma",   img:"🦐", rarity:"RARE",       atk:88,  hp:210, desc:"Refrata a luz em sete cores. Cega quem tenta pegá-lo.", fishingOnly:true },
  { id:"pf094", name:"Peixe Meteoro",    img:"☄️", rarity:"LEGENDARY",  atk:210, hp:520, desc:"Caiu do céu e não voltou. Nada como se ainda estivesse voando.", fishingOnly:true },
  { id:"pf095", name:"Anjo Marinho",     img:"👼", rarity:"MYTHIC",     atk:275, hp:690, desc:"Nem peixe, nem anjo. Ambos. Nenhum.", fishingOnly:true },
  { id:"pf096", name:"Krill do Vazio",   img:"🦠", rarity:"COMMON",     atk:9,   hp:35,  desc:"Individualmente inútil. Em cardume, apocalipse.", fishingOnly:true },
  { id:"pf097", name:"Peixe Espelho",    img:"🪞", rarity:"EPIC",       atk:130, hp:400, desc:"Reflete o rosto do pescador. Sempre com uma lágrima.", fishingOnly:true },
  { id:"pf098", name:"Tubarão do Fim",   img:"🦈", rarity:"ULTRA_RARE", atk:340, hp:780, desc:"Se você o vê nadando na sua direção, o Fim já começou.", fishingOnly:true },

  // ── v12: NOVOS PEIXES (pf099–pf129) ──
  // Comuns
  { id:"pf099", name:"Peixe-Pedra",           atk:14, hp:92,  rarity:"COMMON", img:"🪨", desc:"Camuflado entre as rochas, difícil de ver, mas fácil de pescar.", fishingOnly:true },
  { id:"pf100", name:"Tainha Veloz",          atk:24, hp:58,  rarity:"COMMON", img:"🐟", desc:"Nada em cardumes, sua velocidade impressiona.", fishingOnly:true },
  { id:"pf101", name:"Bagre de Lama",         atk:16, hp:105, rarity:"COMMON", img:"🐚", desc:"Vive no fundo lodoso, resistente e teimoso.", fishingOnly:true },
  { id:"pf102", name:"Peixe-Lanterna Anão",   atk:20, hp:62,  rarity:"COMMON", img:"🪔", desc:"Brilho fraco, mas atrai outros peixes para perto.", fishingOnly:true },
  { id:"pf103", name:"Camarão Lutador",       atk:28, hp:42,  rarity:"COMMON", img:"🦐", desc:"Pequeno, mas golpeia com força surpreendente.", fishingOnly:true },
  { id:"pf104", name:"Carpa de Ferro",        atk:12, hp:98,  rarity:"COMMON", img:"⚙️", desc:"Escamas metálicas, praticamente indestrutível para seu tamanho.", fishingOnly:true },
  { id:"pf105", name:"Peixe-Borboleta",       atk:18, hp:70,  rarity:"COMMON", img:"🦋", desc:"Nadadeiras coloridas que confundem predadores.", fishingOnly:true },
  // Raros
  { id:"pf106", name:"Tubarão de Água Salgada", atk:65, hp:180, rarity:"RARE", img:"🦈", desc:"Mais agressivo que seu primo de água doce.", fishingOnly:true },
  { id:"pf107", name:"Peixe-Coral",            atk:58, hp:210, rarity:"RARE", img:"🪸", desc:"Vive nos recifes, suas escamas brilham em tons de rosa.", fishingOnly:true },
  { id:"pf108", name:"Moreia Elétrica",        atk:72, hp:160, rarity:"RARE", img:"⚡", desc:"Uma moreia que solta descargas elétricas ao morder.", fishingOnly:true },
  { id:"pf109", name:"Salmão Ancestral",       atk:60, hp:225, rarity:"RARE", img:"🐟", desc:"Sobreviveu a eras de mudanças climáticas.", fishingOnly:true },
  { id:"pf110", name:"Cavalo-Marinho Real",    atk:55, hp:235, rarity:"RARE", img:"🐴", desc:"Nobre e elegante, raramente visto em águas rasas.", fishingOnly:true },
  // Épicos
  { id:"pf111", name:"Kraken Filhote",         atk:100, hp:350, rarity:"EPIC", img:"🐙", desc:"Filhote de kraken, já derruba barcos pequenos.", fishingOnly:true },
  { id:"pf112", name:"Serpente Marinha Azul",  atk:110, hp:330, rarity:"EPIC", img:"🐍", desc:"Escamas azuis como o céu, veneno letal.", fishingOnly:true },
  { id:"pf113", name:"Dragão de Água Doce",    atk:120, hp:290, rarity:"EPIC", img:"🐲", desc:"Uma lenda menor, mas ainda poderosa.", fishingOnly:true },
  { id:"pf114", name:"Lula de Cristal",        atk:95, hp:420, rarity:"EPIC", img:"💠", desc:"Transparente como vidro, seus tentáculos são afiados.", fishingOnly:true },
  { id:"pf115", name:"Peixe-Fênix",            atk:115, hp:310, rarity:"EPIC", img:"🔥", desc:"Suas escamas incandescem ao ser pescado.", fishingOnly:true },
  // Lendários
  { id:"pf116", name:"Leviatã da Tundra",      atk:175, hp:700, rarity:"LEGENDARY", img:"❄️", desc:"Gigante dos mares gelados, seu rugido congela a água.", fishingOnly:true },
  { id:"pf117", name:"Deus das Profundezas",   atk:190, hp:680, rarity:"LEGENDARY", img:"🌊", desc:"Guardião das fossas abissais, raramente se move.", fishingOnly:true },
  { id:"pf118", name:"Carpa da Eternidade",    atk:155, hp:780, rarity:"LEGENDARY", img:"♾️", desc:"Nada em círculos infinitos, dizem que é imortal.", fishingOnly:true },
  { id:"pf119", name:"Orca Ancestral",         atk:200, hp:650, rarity:"LEGENDARY", img:"🐋", desc:"Mais antiga que qualquer civilização humana.", fishingOnly:true },
  { id:"pf120", name:"Peixe-Constelação",      atk:170, hp:720, rarity:"LEGENDARY", img:"⭐", desc:"Suas escamas formam padrões de estrelas.", fishingOnly:true },
  // Míticos
  { id:"pf121", name:"Behemoth Abissal",       atk:290, hp:1100, rarity:"MYTHIC", img:"🌊", desc:"Maior que qualquer leviatã, move montanhas subaquáticas.", fishingOnly:true },
  { id:"pf122", name:"Hidra de 9 Cabeças",     atk:320, hp:980, rarity:"MYTHIC", img:"🐉", desc:"Corte uma, duas nascem. Agora são nove.", fishingOnly:true },
  { id:"pf123", name:"Sereia Proibida",        atk:270, hp:1150, rarity:"MYTHIC", img:"🧜", desc:"Seu canto atrai marinheiros para o fim.", fishingOnly:true },
  { id:"pf124", name:"Cefalópode Caótico",     atk:310, hp:1020, rarity:"MYTHIC", img:"🌀", desc:"Seus tentáculos se movem em padrões imprevisíveis.", fishingOnly:true },
  // Ultra Raros
  { id:"pf125", name:"Peixe do Juízo Final",   atk:480, hp:1700, rarity:"ULTRA_RARE", img:"☄️", desc:"Aparece apenas quando o fim está próximo.", fishingOnly:true },
  { id:"pf126", name:"Serpente Cósmica Negra", atk:510, hp:1550, rarity:"ULTRA_RARE", img:"🌑", desc:"Engole estrelas mortas e as transforma em energia.", fishingOnly:true },
  { id:"pf127", name:"Aranha do Mar Profundo", atk:450, hp:1850, rarity:"ULTRA_RARE", img:"🕷️", desc:"Tece teias de energia que prendem navios.", fishingOnly:true },
  // Origens
  { id:"pf128", name:"Entidade das Profundezas", atk:780, hp:2900, rarity:"ORIGENS", img:"🌠", desc:"A primeira vida que emergiu do oceano primordial.", fishingOnly:true },
  { id:"pf129", name:"Guardião do Multiverso",   atk:850, hp:3100, rarity:"ORIGENS", img:"🌐", desc:"Protetor de todas as realidades aquáticas.", fishingOnly:true },
];

// Injeta as novas cartas no array global FISHING_CARDS
if (typeof FISHING_CARDS !== "undefined" && Array.isArray(FISHING_CARDS)) {
  const existingIds = new Set(FISHING_CARDS.map(c => c.id));
  PESCA_CARDS_V11.forEach(c => {
    if (!existingIds.has(c.id)) FISHING_CARDS.push(c);
  });
} else {
  console.warn("[Pesca v12] FISHING_CARDS não encontrado — certifique-se de carregar gamedata-pesca.js antes.");
}


// ═══════════════════════════════════════════════════════════════════════
// 2. NOVOS TIPOS DE ISCA (mesmo conteúdo anterior)
// ═══════════════════════════════════════════════════════════════════════

const NEW_BAIT_TYPES = {
  // v11 originais
  LUNAR: {
    id: "LUNAR",
    name: "Isca Lunar",
    emoji: "🌙",
    desc: "Feita de luz da lua solidificada. Atrai cartas de raridade Mítica e acima com eficiência dobrada. Funciona melhor durante eventos noturnos.",
    rarityBonus: { COMMON: -0.05, RARE: +0.01, EPIC: +0.02, LEGENDARY: +0.02, MYTHIC: +0.04, ULTRA_RARE: +0.01, ORIGENS: +0.005 },
    escapePenalty: -0.10,
    baseCount: 0,
    cost: 25000,
    craftable: false,
    lore: "Diz a lenda que a Isca Lunar foi criada por um pescador que capturou um raio de luar e o moldou com suas próprias mãos.",
  },
  CHAOS: {
    id: "CHAOS",
    name: "Isca do Caos",
    emoji: "🎲",
    desc: "Completamente imprevisível! Cada lançamento pode resultar em qualquer carta de qualquer raridade com probabilidade igual.",
    rarityBonus: { COMMON: -0.30, RARE: +0.10, EPIC: +0.08, LEGENDARY: +0.06, MYTHIC: +0.04, ULTRA_RARE: +0.02, ORIGENS: +0.02 },
    escapePenalty: +0.05,
    chaosMode: true,
    baseCount: 0,
    cost: 40000,
    craftable: false,
    lore: "Criada por um alquimista louco que misturou todas as iscas existentes numa só. O resultado foi... imprevisível.",
  },

  // ── v12: NOVAS ISCAS ──
  isca_fogo: {
    id: "isca_fogo",
    name: "Isca de Fogo",
    emoji: "🔥",
    desc: "+3% chance, cartas de fogo têm peso dobrado.",
    bonusChance: 3,
    fireBonus: 2.0,
    noEscape: false,
    price: 14000,
    realMoney: false,
    color: "#ff5722",
  },
  isca_gelo: {
    id: "isca_gelo",
    name: "Isca de Gelo",
    emoji: "❄️",
    desc: "+2.5% chance e reduz a fuga em 4%.",
    bonusChance: 2.5,
    noEscape: false,
    escapeReduction: 4,
    price: 9500,
    realMoney: false,
    color: "#00bcd4",
  },
  isca_trovoada: {
    id: "isca_trovoada",
    name: "Isca da Trovoada",
    emoji: "⛈️",
    desc: "+3.5% chance, dobra chance de cartas Épico+.",
    bonusChance: 3.5,
    epicOnlyBonus: 6,
    noEscape: false,
    price: 32000,
    realMoney: false,
    color: "#ffeb3b",
  },
  isca_sangue: {
    id: "isca_sangue",
    name: "Isca de Sangue",
    emoji: "🩸",
    desc: "+4% chance, atrai predadores de raridade alta.",
    bonusChance: 4,
    rareBonus: 1.8,
    noEscape: false,
    price: 38000,
    realMoney: false,
    color: "#d32f2f",
  },
  isca_lunar: {
    id: "isca_lunar",
    name: "Isca Lunar",
    emoji: "🌙",
    desc: "+2% chance, dobra a chance de cartas raras durante a noite.",
    bonusChance: 2,
    rareBonus: 2.0,
    noEscape: false,
    price: 24000,
    realMoney: false,
    color: "#90caf9",
  },
  isca_solar: {
    id: "isca_solar",
    name: "Isca Solar",
    emoji: "☀️",
    desc: "+2% chance, dobra a chance de cartas raras durante o dia.",
    bonusChance: 2,
    rareBonus: 2.0,
    noEscape: false,
    price: 24000,
    realMoney: false,
    color: "#ffc107",
  },
  isca_abismo: {
    id: "isca_abismo",
    name: "Isca do Abismo",
    emoji: "🕳️",
    desc: "+2% chance, triplica chance de cartas Ultra Raras.",
    bonusChance: 2,
    ultraBonus: 3.0,
    noEscape: false,
    price: 60000,
    realMoney: false,
    color: "#7c4dff",
  },
  isca_ancestral: {
    id: "isca_ancestral",
    name: "Isca Ancestral",
    emoji: "🏛️",
    desc: "+5% chance e dobra a chance de cartas Origens.",
    bonusChance: 5,
    originsBonus: 2.0,
    noEscape: false,
    price: 120000,
    realMoney: false,
    color: "#ffd700",
  },
  isca_nevoa: {
    id: "isca_nevoa",
    name: "Isca de Névoa",
    emoji: "🌫️",
    desc: "+1.5% chance e zera a fuga (mas só dura 1 pescaria).",
    bonusChance: 1.5,
    noEscape: true,
    price: 15000,
    realMoney: false,
    color: "#bdbdbd",
  },
  isca_mistica: {
    id: "isca_mistica",
    name: "Isca Mística",
    emoji: "🔮",
    desc: "+2.5% chance, sorteia raridade com viés para Lendário+.",
    bonusChance: 2.5,
    mysticBias: true,
    noEscape: false,
    price: 40000,
    realMoney: false,
    color: "#9c27b0",
  },
  isca_caos: {
    id: "isca_caos",
    name: "Isca do Caos",
    emoji: "🎲",
    desc: "Resultado totalmente aleatório: pode ser comum ou Origens!",
    bonusChance: 0,
    chaosMode: true,
    noEscape: true,
    price: 65000,
    realMoney: false,
    color: "#e040fb",
  },
};

// Injeta novas iscas no objeto global BAIT_TYPES
if (typeof BAIT_TYPES !== "undefined" && Array.isArray(BAIT_TYPES)) {
  const newBaitsArray = Object.values(NEW_BAIT_TYPES).filter(b => b.id);
  newBaitsArray.forEach(b => {
    if (!BAIT_TYPES.find(ex => ex.id === b.id)) {
      BAIT_TYPES.push(b);
    }
  });
} else {
  window.BAIT_TYPES_V12_PATCH = NEW_BAIT_TYPES;
  console.warn("[Pesca v12] BAIT_TYPES não encontrado — patch armazenado em BAIT_TYPES_V12_PATCH.");
}


// ═══════════════════════════════════════════════════════════════════════
// 3. NOVOS LOCAIS DE PESCA — CORRIGIDOS (todos com bonusChance e bonusUltra)
// ═══════════════════════════════════════════════════════════════════════

const NEW_FISHING_LOCATIONS = [
  // ── v11: 5 novos locais (agora com bonusChance e bonusUltra) ──
  {
    id: "void_lake",
    name: "Lago do Vazio",
    emoji: "🌑",
    desc: "Um lago que absorve a luz ao seu redor. As cartas que vivem aqui são de raridades extremas — mas a fuga é comum.",
    bonusChance: 3,
    bonusUltra: 0.5,
    weight: 2,
    rarityBonus: { MYTHIC: +0.03, ULTRA_RARE: +0.02, ORIGENS: +0.008 },
    escapeBonus: +0.08,
    baitBonus: { CHAOS: 1.5 },
    lore: "Ninguém sabe de onde veio o Lago do Vazio. Um dia simplesmente apareceu, onde antes havia terra seca.",
  },
  {
    id: "lunar_river",
    name: "Rio da Lua Cheia",
    emoji: "🌙",
    desc: "Um rio que flui com luz de lua em vez de água. Raridades Lendária e acima têm chance aumentada.",
    bonusChance: 4,
    bonusUltra: 0.8,
    weight: 4,
    rarityBonus: { LEGENDARY: +0.04, MYTHIC: +0.025, ULTRA_RARE: +0.01 },
    escapeBonus: -0.05,
    baitBonus: { LUNAR: 2.0 },
    lore: "O Rio da Lua Cheia só aparece quando a lua está cheia — e no universo de Card Fight, isso acontece aleatoriamente.",
  },
  {
    id: "ancient_depths",
    name: "Abismo Ancestral",
    emoji: "🏛️",
    desc: "As profundezas mais antigas de todos os oceanos de Origens. Cartas Ultra Raras têm chance aumentada significativamente.",
    bonusChance: 3.5,
    bonusUltra: 0.7,
    weight: 3,
    rarityBonus: { ULTRA_RARE: +0.025, ORIGENS: +0.005, MYTHIC: +0.02 },
    escapeBonus: +0.05,
    lore: "Formado há bilhões de anos, o Abismo Ancestral é o lar das criaturas que existiam antes que o próprio universo tivesse nome.",
  },
  {
    id: "crystal_stream",
    name: "Riacho de Cristal",
    emoji: "💠",
    desc: "A água é tão pura que você vê o fundo. Cartas Épicas e Raras têm grande bônus. Perfeito para pescadores intermediários.",
    bonusChance: 2.5,
    bonusUltra: 0.2,
    weight: 8,
    rarityBonus: { RARE: +0.05, EPIC: +0.04, LEGENDARY: +0.015 },
    escapeBonus: -0.08,
    lore: "Formado por cristais mágicos dissolvidos na água ao longo de milênios. A transparência da água torna impossível que um peixe se esconda.",
  },
  {
    id: "storm_ocean",
    name: "Oceano da Tempestade",
    emoji: "⛈️",
    desc: "Perigoso, instável, imprevisível. A raridade de cada pescaria é gerada com bônus aleatório adicional. O caos reina!",
    bonusChance: 5,
    bonusUltra: 1.0,
    weight: 5,
    rarityBonus: {},
    escapeBonus: +0.10,
    dynamicBonus: true,
    baitBonus: { CHAOS: 1.8, LUNAR: 1.2 },
    lore: "O Oceano da Tempestade nunca está no mesmo lugar duas vezes. Quando você o encontra, prepare-se para qualquer coisa.",
  },

  // ── v12: 12 NOVOS LOCAIS (já com bonusChance e bonusUltra) ──
  {
    id: "loc_deserto",
    name: "Deserto de Areia",
    emoji: "🏜️",
    desc: "Águas quentes e rasas, cartas adaptadas ao calor extremo.",
    bonusChance: 1,
    bonusUltra: 0,
    weight: 50,
  },
  {
    id: "loc_mares",
    name: "Baía das Marés",
    emoji: "🌊",
    desc: "Correntes fortes, peixes ágeis e fugidios, mas com boas recompensas.",
    bonusChance: 1.5,
    bonusUltra: 0.1,
    weight: 60,
  },
  {
    id: "loc_fumaca",
    name: "Lago de Fumaça",
    emoji: "🌫️",
    desc: "Névoa densa esconde criaturas misteriosas, mas a fuga é maior.",
    bonusChance: 2,
    bonusUltra: 0.2,
    weight: 40,
  },
  {
    id: "loc_fungos",
    name: "Floresta de Fungos",
    emoji: "🍄",
    desc: "Bioluminescência atrai cartas de raridade épica com mais frequência.",
    bonusChance: 1,
    bonusUltra: 0.3,
    weight: 45,
  },
  {
    id: "loc_relampago",
    name: "Mar dos Relâmpagos",
    emoji: "⚡",
    desc: "Tempestades elétricas constante, alto risco de fuga, mas recompensas ultra.",
    bonusChance: 2.5,
    bonusUltra: 0.6,
    weight: 30,
  },
  {
    id: "loc_espinhos",
    name: "Recife de Espinhos",
    emoji: "🌵",
    desc: "Corais afiados, cartas resistentes e com boa defesa.",
    bonusChance: 1.5,
    bonusUltra: 0,
    weight: 55,
  },
  {
    id: "loc_osso",
    name: "Cemitério de Ossos",
    emoji: "💀",
    desc: "Restos de criaturas antigas atraem cartas raras e sombrias.",
    bonusChance: 0.5,
    bonusUltra: 0.2,
    weight: 35,
  },
  {
    id: "loc_aurora",
    name: "Rio da Aurora",
    emoji: "🌈",
    desc: "Luzes coloridas no céu e na água, a sorte favorece o pescador.",
    bonusChance: 2,
    bonusUltra: 0.3,
    weight: 50,
  },
  {
    id: "loc_silencio",
    name: "Lago do Silêncio",
    emoji: "🤫",
    desc: "Águas paradas, quase sem fuga, mas a chance de peixe é menor.",
    bonusChance: -1,
    bonusUltra: 0.4,
    weight: 25,
  },
  {
    id: "loc_fenda",
    name: "Fenda Abissal",
    emoji: "🕳️",
    desc: "Rachadura no fundo do oceano, ultra raros emergem com frequência.",
    bonusChance: 3,
    bonusUltra: 0.8,
    weight: 20,
  },
  {
    id: "loc_nevoa",
    name: "Pântano da Névoa",
    emoji: "🌁",
    desc: "Bruma espessa, cartas de raridade média são mais comuns.",
    bonusChance: 1.5,
    bonusUltra: 0.1,
    weight: 60,
  },
  {
    id: "loc_estrelas",
    name: "Lago das Estrelas",
    emoji: "🌠",
    desc: "Águas que refletem o céu noturno, lendários aparecem com mais facilidade.",
    bonusChance: 2,
    bonusUltra: 0.5,
    weight: 40,
  },
];

// Injeta novos locais no array global FISHING_LOCATIONS
if (typeof FISHING_LOCATIONS !== "undefined" && Array.isArray(FISHING_LOCATIONS)) {
  const existingIds = new Set(FISHING_LOCATIONS.map(l => l.id));
  NEW_FISHING_LOCATIONS.forEach(loc => {
    if (!existingIds.has(loc.id)) FISHING_LOCATIONS.push(loc);
  });
} else {
  window.FISHING_LOCATIONS_V12_PATCH = NEW_FISHING_LOCATIONS;
  console.warn("[Pesca v12] FISHING_LOCATIONS não encontrado — patch armazenado em FISHING_LOCATIONS_V12_PATCH.");
}


// ═══════════════════════════════════════════════════════════════════════
// 4. CONQUISTAS DE PESCA (mesmo conteúdo anterior)
// ═══════════════════════════════════════════════════════════════════════

const NEW_PESCA_ACHIEVEMENTS = [
  // v11: 10 conquistas
  { id:"pesca_7",  name:"🌙 Caçador Noturno",    desc:"Pesque 3 cartas no Rio da Lua Cheia",      reward:{ gold:5000,  xpp:10 },  condition: s => (s.fishingLocationCounts?.lunar_river || 0) >= 3 },
  { id:"pesca_8",  name:"🎲 Filho do Caos",       desc:"Pesque usando Isca do Caos 10 vezes",      reward:{ gold:8000,  xpp:15 },  condition: s => (s.fishingBaitUsed?.CHAOS || 0) >= 10 },
  { id:"pesca_9",  name:"💠 Cristalino",          desc:"Pesque 20 cartas no Riacho de Cristal",    reward:{ gold:3000,  xpp:8  },  condition: s => (s.fishingLocationCounts?.crystal_stream || 0) >= 20 },
  { id:"pesca_10", name:"🔮 Oráculo Pescado",     desc:"Pesque a carta Oráculo das Profundezas",   reward:{ gold:50000, xpp:100},  condition: s => (s.fishingCards || []).includes("pf086") },
  { id:"pesca_11", name:"👑 Rei do Abismo",       desc:"Pesque o Rei Abissal Nephilim",            reward:{ gold:100000,xpp:200},  condition: s => (s.fishingCards || []).includes("pf089") },
  { id:"pesca_12", name:"🌌 Coletor do Vazio",    desc:"Pesque 5 cartas no Lago do Vazio",         reward:{ gold:15000, xpp:25 },  condition: s => (s.fishingLocationCounts?.void_lake || 0) >= 5 },
  { id:"pesca_13", name:"⛈️ Sobrevivente",        desc:"Pesque com sucesso 3 vezes no Oceano da Tempestade",  reward:{ gold:10000, xpp:20 },  condition: s => (s.fishingLocationCounts?.storm_ocean || 0) >= 3 },
  { id:"pesca_14", name:"🌙 Isca de Luar",        desc:"Use a Isca Lunar 5 vezes com sucesso",     reward:{ gold:12000, xpp:20 },  condition: s => (s.fishingBaitUsed?.LUNAR || 0) >= 5 },
  { id:"pesca_15", name:"🐉 Domador de Dragões",  desc:"Pesque o Dragão do Vazio Eterno",          reward:{ gold:200000,xpp:500},  condition: s => (s.fishingCards || []).includes("pf090") },
  { id:"pesca_16", name:"⚜️ Pescador Supremo",    desc:"Pesque todas as 3 cartas Origens v11",     reward:{ gold:500000,xpp:1000}, condition: s => ["pf089","pf090","pf091"].every(id => (s.fishingCards||[]).includes(id)) },

  // ── v12: 20 novas conquistas ──
  { id:"fish_5",   label:"Aprendiz de Pescador", emoji:"🐟", desc:"Pegue 5 cartas por pesca", req:5, field:"totalPescados" },
  { id:"fish_25",  label:"Pescador Ávido",       emoji:"🎣", desc:"Pegue 25 cartas por pesca", req:25, field:"totalPescados" },
  { id:"fish_75",  label:"Pescador Experiente",  emoji:"🦈", desc:"Pegue 75 cartas por pesca", req:75, field:"totalPescados" },
  { id:"fish_150", label:"Mestre das Águas",     emoji:"🌊", desc:"Pegue 150 cartas por pesca", req:150, field:"totalPescados" },
  { id:"fish_250", label:"Guardião dos Mares",   emoji:"🐋", desc:"Pegue 250 cartas por pesca", req:250, field:"totalPescados" },
  { id:"fish_1000",label:"Lenda da Pesca",       emoji:"🏆", desc:"Pegue 1.000 cartas por pesca", req:1000, field:"totalPescados" },
  { id:"fish_2500",label:"Deus dos Oceanos",     emoji:"👑", desc:"Pegue 2.500 cartas por pesca", req:2500, field:"totalPescados" },
  { id:"fish_5000",label:"Pescador Supremo",     emoji:"🌟", desc:"Pegue 5.000 cartas por pesca", req:5000, field:"totalPescados" },
  { id:"fish_rare_first", label:"Caçador de Raros", emoji:"🔵", desc:"Pesque sua primeira carta Rara", special:"rare_fished" },
  { id:"fish_epic_first", label:"Caçador de Épicos", emoji:"🟣", desc:"Pesque sua primeira carta Épica", special:"epic_fished" },
  { id:"fish_legendary_first", label:"Caçador de Lendários", emoji:"🟡", desc:"Pesque sua primeira carta Lendária", special:"legendary_fished" },
  { id:"fish_mythic_first", label:"Caçador de Míticos", emoji:"🔴", desc:"Pesque sua primeira carta Mítica", special:"mythic_fished" },
  { id:"fish_ultra_first", label:"Caçador de Ultra Raros", emoji:"🌀", desc:"Pesque sua primeira carta Ultra Rara", special:"ultra_fished" },
  { id:"fish_origens_first", label:"Lenda das Águas", emoji:"🌌", desc:"Pesque sua primeira carta Origens", special:"origens_fished" },
  { id:"fish_rare_10", label:"Colecionador de Raros", emoji:"💠", desc:"Pesque 10 cartas Raras", req:10, field:"rare_count" },
  { id:"fish_epic_5", label:"Colecionador de Épicos", emoji:"💎", desc:"Pesque 5 cartas Épicas", req:5, field:"epic_count" },
  { id:"fish_legendary_3", label:"Colecionador de Lendários", emoji:"🏅", desc:"Pesque 3 cartas Lendárias", req:3, field:"legendary_count" },
  { id:"fish_mythic_1", label:"Domador de Míticos", emoji:"⚡", desc:"Pesque 1 carta Mítica", req:1, field:"mythic_count" },
  { id:"fish_ultra_1", label:"Senhor do Abismo", emoji:"🌑", desc:"Pesque 1 carta Ultra Rara", req:1, field:"ultra_count" },
  { id:"fish_no_escape", label:"Mestre da Paciência", emoji:"🧘", desc:"Pesque 10 peixes sem nenhuma fuga", special:"no_escape_streak_10" },
  { id:"fish_rod_breaker", label:"Quebrador de Varas", emoji:"💔", desc:"Quebre 5 varas de pesca", special:"rods_broken_5" },
  { id:"fish_restos_100", label:"Colecionador de Restos", emoji:"🪝", desc:"Acumule 100 Restos de Isca", special:"restos_100" },
  { id:"fish_all_commons", label:"Colecionador de Comuns", emoji:"📚", desc:"Pesque todas as cartas Comuns de pesca", special:"all_commons_fished" },
  { id:"fish_all_rares", label:"Colecionador de Raros", emoji:"📖", desc:"Pesque todas as cartas Raras de pesca", special:"all_rares_fished" },
  { id:"fish_all_epics", label:"Colecionador de Épicos", emoji:"📗", desc:"Pesque todas as cartas Épicas de pesca", special:"all_epics_fished" },
  { id:"fish_all_legendaries", label:"Colecionador de Lendários", emoji:"📘", desc:"Pesque todas as cartas Lendárias de pesca", special:"all_legendaries_fished" },
  { id:"fish_all_mythics", label:"Colecionador de Míticos", emoji:"📕", desc:"Pesque todas as cartas Míticas de pesca", special:"all_mythics_fished" },
  { id:"fish_all_ultras", label:"Colecionador de Ultra Raros", emoji:"📙", desc:"Pesque todas as cartas Ultra Raras de pesca", special:"all_ultras_fished" },
  { id:"fish_all_origens", label:"Colecionador de Origens", emoji:"📜", desc:"Pesque todas as cartas Origens de pesca", special:"all_origens_fished" },
  { id:"fish_complete_collection", label:"Mestre Pescador", emoji:"🏆", desc:"Pesque TODAS as cartas de pesca", special:"complete_fishing_collection" },
];

if (typeof FISHING_ACHIEVEMENTS !== "undefined" && Array.isArray(FISHING_ACHIEVEMENTS)) {
  const existingIds = new Set(FISHING_ACHIEVEMENTS.map(a => a.id));
  NEW_PESCA_ACHIEVEMENTS.forEach(a => {
    if (!existingIds.has(a.id)) FISHING_ACHIEVEMENTS.push(a);
  });
} else {
  window.FISHING_ACHIEVEMENTS_V12 = NEW_PESCA_ACHIEVEMENTS;
}


// ═══════════════════════════════════════════════════════════════════════
// 5. RANKS DE PESCADOR
// ═══════════════════════════════════════════════════════════════════════

const FISHING_RANKS_V11 = [
  { min: 0,      name: "🪱 Iniciante",          color: "#9e9e9e" },
  { min: 50,     name: "🐟 Pescador",           color: "#9e9e9e" },
  { min: 200,    name: "🐠 Pescador Habilidoso",color: "#2196F3" },
  { min: 500,    name: "🦈 Caçador das Águas",  color: "#9c27b0" },
  { min: 1000,   name: "🐬 Domador dos Mares",  color: "#ffc107" },
  { min: 2500,   name: "🏆 Mestre da Pesca",    color: "#ff6d00" },
  { min: 5000,   name: "🌊 Lenda das Águas",    color: "#00e5ff" },
  { min: 10000,  name: "🌌 Pescador Origens",   color: "#ff4444" },
  { min: 25000,  name: "⚜️ Guardião dos Peixes",color: "#ff4444" },
];

window.FISHING_RANKS_V11 = FISHING_RANKS_V11;
window.getFishingRank = function(points) {
  for (let i = FISHING_RANKS_V11.length - 1; i >= 0; i--) {
    if (points >= FISHING_RANKS_V11[i].min) return FISHING_RANKS_V11[i];
  }
  return FISHING_RANKS_V11[0];
};

// ═══════════════════════════════════════════════════════════════════════
// 6. EVENTOS SAZONAIS
// ═══════════════════════════════════════════════════════════════════════

const FISHING_SEASONAL_EVENTS = [
  {
    id: "lua_cheia",
    name: "🌕 Festival da Lua Cheia",
    desc: "Por 48h, a Isca Lunar tem custo reduzido (50%) e o Rio da Lua Cheia tem peso triplicado na rotação!",
    duration: 48 * 3600 * 1000,
    effects: { LUNAR_COST_MULT: 0.5, LUNAR_RIVER_WEIGHT_MULT: 3 },
  },
  {
    id: "tempestade_caos",
    name: "⛈️ Grande Tempestade do Caos",
    desc: "Por 24h, a chance de cartas Ultra Raras e Origens é DOBRADA em todos os locais. O caos governa!",
    duration: 24 * 3600 * 1000,
    effects: { ULTRA_RARE_BONUS: +0.015, ORIGENS_BONUS: +0.008 },
  },
  {
    id: "festival_abissal",
    name: "🏛️ Festival Abissal",
    desc: "Por 72h, o Abismo Ancestral fica disponível com frequência MUITO maior na rotação (peso ×5).",
    duration: 72 * 3600 * 1000,
    effects: { ABISMO_WEIGHT_MULT: 5 },
  },
];
window.FISHING_SEASONAL_EVENTS = FISHING_SEASONAL_EVENTS;

// ═══════════════════════════════════════════════════════════════════════
// 7. PATCH executarPescaria
// ═══════════════════════════════════════════════════════════════════════

(function patchExecutarPescaria() {
  if (typeof executarPescaria !== "function") {
    window.addEventListener("load", patchExecutarPescaria);
    return;
  }
  const _orig = executarPescaria;
  window.executarPescaria = function(save, baitId, locationId, rodId) {
    if (!save.pesca) save.pesca = {};
    if (!save.pesca.fishingBaitUsed) save.pesca.fishingBaitUsed = {};
    if (!save.pesca.fishingLocationCounts) save.pesca.fishingLocationCounts = {};
    if (baitId) save.pesca.fishingBaitUsed[baitId] = (save.pesca.fishingBaitUsed[baitId] || 0) + 1;
    if (locationId) save.pesca.fishingLocationCounts[locationId] = (save.pesca.fishingLocationCounts[locationId] || 0) + 1;
    return _orig(save, baitId, locationId, rodId);
  };
})();

// ═══════════════════════════════════════════════════════════════════════
// 8. LORE
// ═══════════════════════════════════════════════════════════════════════

const PESCA_LORE_V11 = {
  pf062: ["Um peixe que brilha como uma lanterna nas noites escuras dos lagos.", "Os pescadores o usam como guia em noites sem lua.", "Quanto mais escuro o ambiente, mais brilhante ele fica.", "Comunica com outros através de padrões de luz.", "Nunca apaga seu brilho — mesmo depois de pescado."],
  pf070: ["Seu focinho serve como espada mágica desde o nascimento.", "Já foi visto cortando correntes de ferro subaquáticas.", "Os Cavaleiros de Origens tentaram domesticá-lo. Falharam.", "Duel-fish: desafia outros peixes em combate singular.", "O maior espécime registrado tinha 3 metros de foco."],
  pf078: ["A lenda do Dragão de Água Doce existe há mil anos.", "Nunca foi capturado antes de Card Fight existir.", "Vive em cavernas submarinas que ninguém mapeou.", "Sua escama é mais dura que aço Origens fundido.", "Dizem que sorri quando está sendo pescado — perturbador."],
  pf080: ["Tem dezesseis tentáculos, cada um com consciência própria.", "As cabeças discutem entre si qual direção nadar.", "Filosofam sobre a natureza do oceano há milênios.", "Quando decidem parar de debater, são incríveis caçadores.", "Capturam presas simplesmente por cansar o oponente de ouvir."],
  pf083: ["Filho do grande Leviatã, ainda em crescimento.", "Já cria tsunamis com um movimento simples da cauda.", "Quando crescer... que os deuses protejam os oceanos.", "Seu pai o desconhece — o Leviatã tem muitos filhos.", "É o menor ser que já foi chamado de 'ameaça planetária'."],
  pf086: ["Conhece o passado, presente e futuro de cada pescador.", "Raramente fala, mas quando fala... muda vidas.", "Quando pescado, o Oráculo sorri. Sabe que será solto.", "Nunca se deixa capturar até escolher ser capturado.", "A pergunta não é se você vai pegá-lo — é se ele quer ser pego."],
  pf089: ["O governante absoluto de todos os oceanos de todas as dimensões.", "Aparece apenas uma vez a cada era geológica.", "Pescar o Rei Abissal Nephilim é considerado impossível.", "E no entanto, aqui você está.", "O universo nunca será o mesmo após essa pesca."],
  pf090: ["Não é deste universo.", "Atravessou a barreira do vazio para nadar nos lagos de Origens.", "ATK mais alto já registrado em qualquer ser pescável.", "Não tem nome no mundo de origem — nomeamos nós.", "Se conseguiu pescar este ser, você não é humano. Ou é humano demais."],
  pf091: ["Controla o fluxo de todos os rios, lagos e oceanos com um pensamento.", "A natureza lhe obedece — marés sobem e descem ao seu comando.", "Foi convidado para ser deus dos mares. Recusou educadamente.", "Prefere nadar a governar.", "Seu único desejo é encontrar o peixe que ninguém jamais pescou."],
};
window.PESCA_LORE_V11 = PESCA_LORE_V11;

// ═══════════════════════════════════════════════════════════════════════
// 9. EXTRA: Isca da Expedição
// ═══════════════════════════════════════════════════════════════════════

window.PESCA_ISCA_EXTRA = {
  id: "isca_expedicao",
  name: "Isca da Expedição",
  emoji: "🗺️",
  cost: 1500,
  rarityBoost: { RARE: 1.5, EPIC: 1.3, LEGENDARY: 1.2 },
  desc: "Feita com fragmentos das Ruínas. Atrai peixes que só saem quando ninguém está olhando."
};

console.log("[Pesca v12] Patch CORRIGIDO carregado — todos os locais agora exibem bônus corretamente.");
})();