/* ═══════════════════════════════════════════════════════════════════════
   gamedata-maestria-patch.js — Card Fight v11.0
   Expansão massiva do sistema de Maestria:
   • Lore para 25+ cartas (c001, c002... l001... m001... ur001... ev001...)
   • Sistema de Prestige (pós-5★): Prestige I, II, III com bônus únicos
   • Conquistas de Maestria expandidas (12 novas)
   • Hall da Fama atualizado com mais títulos
   • Codex expandido com mais selos de raridade
   ═══════════════════════════════════════════════════════════════════════ */

(function patchMaestria() {

// ──────────────────────────────────────────────────────────────────
// 1. LORE EXPANDIDO — 25+ cartas com histórias completas
//    Formato: 5 fragmentos (1 por estrela, revelados progressivamente)
// ──────────────────────────────────────────────────────────────────
const MAESTRIA_LORE_V11 = {

  // ── COMUNS ──
  "c001": {
    lore: [
      "Uma lâmina forjada nos primeiros dias de Origens. Simples, mas confiável.",
      "Dizem que o ferreiro que a criou nunca aprendeu seu nome. Chamou-a apenas de 'a primeira'.",
      "Foi a primeira carta a existir no jogo. Seu número de série é 001.",
      "Todo jogador que atinge Diamante recebe uma cópia dourada desta carta — tradição antiga.",
      "No Hall da Fama, existe um painel dedicado apenas à c001. A carta que começou tudo."
    ]
  },
  "c002": {
    lore: [
      "O Escudo Primordial. Criado para proteger aquilo que nenhuma lâmina pode defender.",
      "Sua superfície absorve ataques sem trincar. Já sobreviveu a 10 batalhas no mesmo dia.",
      "A criatura gravada no centro do escudo não existe em nenhum bestiário conhecido.",
      "Dizem que o escudo reage ao humor do portador — fica quente quando o portador está com medo.",
      "Aqueles que masterizam o Escudo Primordial a 5★ recebem o título 'Guardião do Início'."
    ]
  },
  "c003": {
    lore: [
      "Uma carta comum por aparência, rara por história.",
      "Foi encontrada no bolso de um misterioso viajante que desapareceu na Batalha das Torres.",
      "O viajante nunca foi identificado. Sua carta, sim.",
      "Toda reprodução desta carta carrega um símbolo minúsculo no verso — um ponto vermelho.",
      "A lenda diz que os que encontram o ponto vermelho são escolhidos para algo maior."
    ]
  },
  "c010": {
    lore: [
      "O Guerreiro de Bronze. Treinado desde criança para lutar e nunca recuar.",
      "Perdeu 47 batalhas consecutivas antes de vencer a primeira. Isso o tornou imbatível.",
      "Seu capacete foi fundido do metal de 3 espadas enemigas que ele destruiu.",
      "Tem medo de cobras. Ninguém osa mencionar isso perto dele.",
      "No topo de sua maestria, o Guerreiro de Bronze vira Guerreiro de Ouro — visualmente diferente."
    ]
  },
  "c025": {
    lore: [
      "A Arqueira do Horizonte. Nunca errou um alvo a mais de 300 metros.",
      "Cresceu caçando no deserto de Arek, onde a água é escassa e a precisão é sobrevivência.",
      "Usa flechas feitas de osso de dragão — mais leves e mais letais que aço.",
      "Tem 12 irmãos. Todos arqueiros. Ela é a melhor.",
      "A quem pergunta o segredo de sua mira, ela responde: 'Respira. Espera. Dispara.'"
    ]
  },

  // ── RAROS ──
  "r001": {
    lore: [
      "O Mago de Fogo. Dominou a chama antes de aprender a andar.",
      "Aos 3 anos de idade, acidentalmente queimou a biblioteca real de Origens.",
      "Aos 7, reconstruiu a biblioteca usando magia — maior e mais resistente que a original.",
      "Seus olhos brilham em laranja quando ele está com raiva. Evite isso.",
      "A maestria máxima do Mago de Fogo libera a forma 'Chama Absoluta' — ATK aumenta 8% adicionalmente."
    ]
  },
  "r002": {
    lore: [
      "A Elementalista da Tempestade. Controla trovões com a precisão de um cirurgião.",
      "Formada na Academia de Artes Arcanas de Origens, turma de honra por 4 anos consecutivos.",
      "Perdeu o dedo anelar da mão esquerda num experimento que 'correu bem, no geral'.",
      "Sua habilidade favorita é fazer chover apenas sobre inimigos específicos.",
      "Com 5 estrelas de maestria, seus relâmpagos ficam azuis ao invés de amarelos — mais potentes."
    ]
  },
  "r015": {
    lore: [
      "O Ladrão das Sombras. Nunca foi visto fazendo um crime — apenas o resultado.",
      "Roubou a Coroa de Ouro de Origens três vezes. As três vezes a devolveu com um bilhete irônico.",
      "Dizem que não é malvado — apenas entediado.",
      "Seu rosto real é desconhecido. Cada testemunha descreve algo diferente.",
      "A maestria 5★ revela seu verdadeiro rosto: surpreendentemente ordinário."
    ]
  },
  "r022": {
    lore: [
      "O Cavaleiro do Norte. Serviu ao Rei Gélido por 30 anos sem jamais retirar a armadura.",
      "Sua armadura pesa 80kg. Ele corre com ela mais rápido que cavalos.",
      "Nunca perdeu um duelo. Perdeu uma batalha — e não parou de pensar nisso.",
      "Come apenas peixes do rio congelado ao norte das montanhas.",
      "Quando maxado em maestria, sua armadura exibe a bandeira do Norte em todo o brilho."
    ]
  },

  // ── ÉPICOS ──
  "e001": {
    lore: [
      "O Titã de Pedra. Mais antigo que qualquer civilização conhecida de Origens.",
      "Não fala. Não precisa. Seus movimentos dizem tudo.",
      "Cada passo dele cria um pequeno terremoto. Países construíram estradas alternativas por causa disso.",
      "Foi usado como arma por 3 impérios diferentes. Cada um achou que o 'controlava'.",
      "A maestria 5★ revela inscrições ancestrais em sua pele de pedra — ninguém as traduz há milênios."
    ]
  },
  "e002": {
    lore: [
      "A Feiticeira do Eclipse. Seus poderes são mais fortes quando sol e lua se alinham.",
      "Espera por eclipses com uma paciência sobre-humana. Quando chegam, é devastadora.",
      "Treinou por 40 anos para este momento específico. Sempre vale a pena.",
      "Tem um gato chamado Névoa que some sempre que um eclipse está próximo.",
      "Com maestria completa, ela brilha durante os eclipses com luz própria — impossível ignorar."
    ]
  },
  "e010": {
    lore: [
      "O Colosso Mecânico. Construído pela Guilda dos Engenheiros de Origens.",
      "Levou 12 anos para ser construído e 12 segundos para provar que valia a pena.",
      "Funciona a vapor — o vapor sai pelos olhos quando está em modo de combate.",
      "Tem manuais de instrução com 3.000 páginas. Ninguém leu todos.",
      "Maestria 5★: os olhos mudam de vermelho para dourado. Dano aumentado em 5%."
    ]
  },
  "e025": {
    lore: [
      "A Valquíria das Tempestades. Escolhe os guerreiros que entram no paraíso dos guerreiros.",
      "Nunca escolheu alguém que morreu covardemente.",
      "Sua lança atravessa armaduras mágicas como se fossem papel.",
      "Tem asas de trovão — cada batida produz um relâmpago.",
      "Quando masterizada a 5★, suas asas ficam visivelmente maiores na arte da carta."
    ]
  },

  // ── LENDÁRIOS ──
  "l001": {
    lore: [
      "O Dragão Ancião. Viveu antes que o nome 'Origens' existisse.",
      "Viu impérios nascerem e morrerem como se fossem estações do ano.",
      "Sua memória armazena todos os idiomas que já existiram — incluindo os extintos.",
      "Não luta por poder. Luta quando algo o entedia o suficiente.",
      "Com 5★ de maestria, o Dragão Ancião sussurra um fragmento de idioma extinto ao portador."
    ]
  },
  "l002": {
    lore: [
      "A Deusa da Guerra. Não nasceu deusa — conquistou a divindade em combate.",
      "Derrotou o deus anterior da guerra num duelo que durou 7 dias.",
      "Não gosta do título 'deusa' — prefere 'vencedora'.",
      "Seus fiéis oram antes de batalhas. Ela aparece pessoalmente para os que realmente merecem.",
      "Maestria completa: a carta vibra levemente quando segurada — como se estivesse respirando."
    ]
  },
  "l010": {
    lore: [
      "O Faraó Eterno. Morreu há 3.000 anos. Não percebeu.",
      "Continua governando seu reino com a mesma eficiência de quando era vivo.",
      "Os súditos não contaram a ele que morreu — funciona bem assim.",
      "Emite uma energia estranha que faz relógios pararem na sua presença.",
      "5★ de maestria libera o modo 'Faraó Desperto' — sua arte muda completamente, com olhos abertos."
    ]
  },
  "l015": {
    lore: [
      "O Senhor das Runas. Cada runa em seu corpo representa uma lei do universo.",
      "Escreveu runas em pedras, árvores e peles — tudo se tornou mágico.",
      "Pode reescrever realidades pequenas com a runa certa. Usa esse poder com moderação.",
      "Perdeu a memória de qual runa representa a gravidade. Por sorte, não precisou usá-la.",
      "Com maestria máxima, as runas da carta ficam levemente luminosas mesmo sem luz direta."
    ]
  },

  // ── MÍTICOS ──
  "m001": {
    lore: [
      "O Deus do Caos. Não criou o caos — ele É o caos.",
      "Tudo ao seu redor é imprevisível. Leis da física são 'sugestões'.",
      "Foi banido de 7 planos de existência por 'perturbar a ordem'. Considera isso um elogio.",
      "A única entidade que o respeita é o próprio universo — porque sabe que ele poderia desfazê-lo.",
      "Maestria 5★ máxima: a carta muda de arte aleatoriamente cada vez que você a usa. Nunca a mesma duas vezes."
    ]
  },
  "m002": {
    lore: [
      "A Imperatriz do Vazio. Governa o espaço entre as coisas.",
      "Não é vilã nem heroína — existe além dessas categorias.",
      "Já devorou 3 estrelas para saciar a fome do vazio que carrega dentro de si.",
      "Respeita apenas quem não tem medo de perder tudo.",
      "Maestria completa desbloqueia um segundo efeito passivo: +2% HP adicional em todas as cartas do deck."
    ]
  },
  "m005": {
    lore: [
      "O Campeão Eterno. Nunca perdeu. Em 10.000 anos de batalhas.",
      "Desafiado 47.891 vezes. Venceu 47.891 vezes. Alguém está contando.",
      "Raramente combate — a maioria dos desafiantes desiste ao vê-lo.",
      "Tem um livro pessoal com nomes de todos os que ousaram desafiá-lo. É uma biblioteca.",
      "5★ máximo: quando esta carta vence um combate, emite uma fanfarra em audiovisual especial."
    ]
  },

  // ── ULTRA RAROS ──
  "ur001": {
    lore: [
      "A Entidade Primordial. Anterior ao universo. Anterior ao conceito de anterioridade.",
      "Não tem forma física definida — assume a que achar mais conveniente.",
      "Já foi: um planeta, uma ideia, um sentimento e uma xícara de chá.",
      "Toda carta Ultra Rara existente é uma versão menor de um aspecto dela.",
      "Maestria 5★: a borda da carta muda para um gradiente de todas as raridades simultaneamente."
    ]
  },
  "ur002": {
    lore: [
      "O Árbitro do Destino. Decide o futuro de civilizações jogando uma moeda.",
      "Sua moeda tem cara dos dois lados. Mesmo assim consulta ela antes de cada decisão.",
      "Não é cruel — é apenas eficiente. Emoções complicam os cálculos.",
      "Às vezes erra de propósito, apenas para ver o que acontece.",
      "Maestria completa libera leitura de destino — a carta sussurra sua próxima derrota. Ou vitória."
    ]
  },

  // ── CARTAS DE EVENTO ──
  "ev001": {
    lore: [
      "A Carta do Primeiro Evento. Nunca mais poderá ser obtida por pacotes.",
      "Quem a possui é considerado um veterano fundador do Card Fight.",
      "Foi criada num dia específico que os desenvolvedores se recusam a revelar.",
      "Sua raridade aumenta a cada mês que passa — jogadores com ela valem muito mais no ranking.",
      "Maestria 5★ concede o título único 'Portador da Primeira Era' — intransferível."
    ]
  },
  "ev002": {
    lore: [
      "Carta do Segundo Evento. Tão rara quanto a primeira, mas com uma energia diferente.",
      "Representa o primeiro inverno dos servidores — período de grandes mudanças.",
      "Somente 3% dos jogadores que participaram do evento a obtiveram.",
      "Brilha levemente nos dados — mesmo sem efeitos visuais oficiais.",
      "Maestria máxima: aparece um símbolo especial no verso invisível a olho nu comum."
    ]
  },
};

// Mescla com o objeto global existente
if (typeof MAESTRIA_CONFIG !== "undefined" && MAESTRIA_CONFIG.lore) {
  Object.assign(MAESTRIA_CONFIG.lore, MAESTRIA_LORE_V11);
} else if (typeof MAESTRIA_LORE !== "undefined") {
  Object.assign(MAESTRIA_LORE, MAESTRIA_LORE_V11);
} else {
  window.MAESTRIA_LORE_V11_PATCH = MAESTRIA_LORE_V11;
  console.warn("[Maestria v11] Objeto de lore não encontrado — dados armazenados em MAESTRIA_LORE_V11_PATCH.");
}

// ──────────────────────────────────────────────────────────────────
// 2. SISTEMA DE PRESTIGE (pós-5★)
// ──────────────────────────────────────────────────────────────────
const PRESTIGE_CONFIG = {
  // Custo em pontos de Maestria para cada nível de Prestige
  costs: {
    1: { pointsRequired: 500,  goldRequired: 500000,  desc: "Prestige I — borda animada + +1% ATK/HP bônus" },
    2: { pointsRequired: 1500, goldRequired: 2000000, desc: "Prestige II — borda especial + +2% ATK/HP bônus + partículas" },
    3: { pointsRequired: 3000, goldRequired: 10000000,desc: "Prestige III — borda ULTRA exclusiva + +3% ATK/HP + efeito de entrada especial" },
  },
  // Multiplicadores por nível de Prestige (somam ao bônus de 5★)
  bonusMultipliers: {
    0: 1.05, // 5★ normal: +5%
    1: 1.06, // Prestige I: +6%
    2: 1.08, // Prestige II: +8%
    3: 1.11, // Prestige III: +11% — máximo absoluto
  },
  // Visuais de borda por nível
  borders: {
    0: "rainbow-anim",          // 5★ padrão
    1: "gold-shimmer",          // Prestige I
    2: "diamond-sparkle",       // Prestige II
    3: "void-aura",             // Prestige III — borda do vazio
  }
};

window.PRESTIGE_CONFIG = PRESTIGE_CONFIG;

// Função helper: obter bônus total incluindo Prestige
//
// BUGFIX: a versão anterior fazia `baseBuff * (prestigeMult / baseMult)`.
// Isso está errado sempre que baseBuff já contém QUALQUER outro bônus além
// do 5★ puro (ex: bônus de ATK da Fortaleza, que sobrescreve getMaestriaBuff
// e multiplica o resultado) — a razão prestigeMult/baseMult acabaria
// reaplicada sobre esses outros bônus também, inflando ou distorcendo o
// valor final. O correto é somar apenas o INCREMENTO percentual do
// Prestige sobre o buff que a carta já tem.
function getMaestriaBuffWithPrestige(save, cardId) {
  if (typeof getMaestriaBuff === "function") {
    const baseBuff = getMaestriaBuff(save, cardId);
    // Verifica se há Prestige
    const prestige = save.maestriaPrestige && save.maestriaPrestige[cardId];
    if (prestige && prestige >= 1) {
      const prestigeMult = PRESTIGE_CONFIG.bonusMultipliers[prestige] || PRESTIGE_CONFIG.bonusMultipliers[3];
      const baseMult     = PRESTIGE_CONFIG.bonusMultipliers[0];
      // Incremento adicional do Prestige (ex: Prestige III = +11% - +5% = +6 p.p.)
      const prestigeBonus = prestigeMult - baseMult;
      return baseBuff + prestigeBonus;
    }
    return baseBuff;
  }
  return 1;
}
window.getMaestriaBuffWithPrestige = getMaestriaBuffWithPrestige;

// Função para evoluir para Prestige (requer 5★ + ouro + pontos extra)
function evolveToPrestige(save, cardId) {
  const maestriaData = save.maestria || {};
  const cardData     = maestriaData[cardId];

  if (!cardData || cardData.stars < 5) {
    return { success: false, reason: "A carta precisa estar em 5★ para acionar o Prestige." };
  }

  const currentPrestige = (save.maestriaPrestige && save.maestriaPrestige[cardId]) || 0;
  if (currentPrestige >= 3) {
    return { success: false, reason: "Já está no Prestige III — o máximo absoluto." };
  }

  const nextLevel = currentPrestige + 1;
  const cost      = PRESTIGE_CONFIG.costs[nextLevel];
  // BUGFIX: o campo real de pontos de maestria no save é "pts" (ver
  // getMaestriaBuff/doInfuse em gamedata3.js), não "points". Com o nome
  // errado, curPoints era sempre 0 e a evolução de Prestige nunca passava
  // da checagem de pontos.
  const curPoints = cardData.pts || 0;

  if (curPoints < cost.pointsRequired) {
    return { success: false, reason: `Precisa de ${cost.pointsRequired} pontos de Maestria (tem ${curPoints}).` };
  }
  if ((save.gold || 0) < cost.goldRequired) {
    return { success: false, reason: `Precisa de ${fmtNum ? fmtNum(cost.goldRequired) : cost.goldRequired} ouro.` };
  }

  // Aplica o Prestige
  save.maestriaPrestige = save.maestriaPrestige || {};
  save.maestriaPrestige[cardId] = nextLevel;
  save.gold = (save.gold || 0) - cost.goldRequired;
  cardData.pts -= cost.pointsRequired; // Consome os pontos extras

  return { success: true, newLevel: nextLevel, desc: cost.desc };
}
window.evolveToPrestige = evolveToPrestige;

// ──────────────────────────────────────────────────────────────────
// 3. CONQUISTAS DE MAESTRIA EXPANDIDAS (12 novas)
// ──────────────────────────────────────────────────────────────────
const MAESTRIA_ACHIEVEMENTS_V11 = [
  { id:"ma_01", name:"⭐ Primeiro Passo",    desc:"Alcance 1★ em qualquer carta",          reward:{gold:1000,   xpp:5}   },
  { id:"ma_02", name:"⭐⭐ Intermediário",   desc:"Alcance 3★ em qualquer carta",          reward:{gold:5000,   xpp:15}  },
  { id:"ma_03", name:"🌟 Maxado!",           desc:"Alcance 5★ em qualquer carta",          reward:{gold:20000,  xpp:50}  },
  { id:"ma_04", name:"🌟×10 Colecionador",  desc:"Alcance 5★ em 10 cartas diferentes",    reward:{gold:100000, xpp:200} },
  { id:"ma_05", name:"💫 Prestige Nível I",  desc:"Alcance Prestige I em qualquer carta",  reward:{gold:500000, xpp:500} },
  { id:"ma_06", name:"💎 Prestige Nível II", desc:"Alcance Prestige II em qualquer carta", reward:{gold:2000000,xpp:1000}},
  { id:"ma_07", name:"⚜️ Prestige Supremo", desc:"Alcance Prestige III em qualquer carta", reward:{gold:5000000,xpp:2000}},
  { id:"ma_08", name:"🎖️ Mestre de Raridade",desc:"Maxe uma carta de cada raridade a 5★", reward:{gold:200000, xpp:400} },
  { id:"ma_09", name:"🏆 Hall da Fama Real", desc:"Tenha 5 cartas com 5★ e acima de 1000 pontos", reward:{gold:300000, xpp:600}},
  { id:"ma_10", name:"🔥 Fusionista",        desc:"Realize 50 fusões no total",             reward:{gold:50000,  xpp:100} },
  { id:"ma_11", name:"⭐×100 Centenário",    desc:"Tenha 100 estrelas totais de Maestria",  reward:{gold:150000, xpp:300} },
  { id:"ma_12", name:"🌌 Lenda da Maestria", desc:"Tenha 500 estrelas totais de Maestria",  reward:{gold:1000000,xpp:2000}},
];

window.MAESTRIA_ACHIEVEMENTS_V11 = MAESTRIA_ACHIEVEMENTS_V11;

// ──────────────────────────────────────────────────────────────────
// 4. CODEX EXPANDIDO — Selos de raridade por maestria
// ──────────────────────────────────────────────────────────────────
const CODEX_SEALS_V11 = {
  COMMON:     { name:"Selo Cinza",     emoji:"⬜", bonus:"+0.5% ouro por carta maxada" },
  RARE:       { name:"Selo Azul",      emoji:"🔵", bonus:"+1% XP por carta maxada"     },
  EPIC:       { name:"Selo Roxo",      emoji:"🟣", bonus:"+1.5% XPP por carta maxada"  },
  LEGENDARY:  { name:"Selo Dourado",   emoji:"🟡", bonus:"+2% ATK global por carta maxada" },
  MYTHIC:     { name:"Selo Carmesim",  emoji:"🔮", bonus:"+2.5% HP global por carta maxada" },
  ULTRA_RARE: { name:"Selo Ciano",     emoji:"🌀", bonus:"+3% a tudo por carta maxada"  },
  ORIGENS:    { name:"Selo Origens",   emoji:"🌌", bonus:"+5% a tudo — impossível de ignorar" },
};

window.CODEX_SEALS_V11 = CODEX_SEALS_V11;

// ──────────────────────────────────────────────────────────────────
// 5. MARCOS DE MAESTRIA NOVOS (além dos existentes)
// ──────────────────────────────────────────────────────────────────
const EXTRA_MAESTRIA_MILESTONES = [
  { stars: 500,   reward: { gold: 5000000,  xpp: 10000, title: "🌟 Dedicado Supremo" },    desc: "500 estrelas totais de Maestria" },
  { stars: 1000,  reward: { gold: 20000000, xpp: 50000, title: "💎 Mestre Absoluto" },      desc: "1000 estrelas — quase lendário" },
  { stars: 2500,  reward: { gold: 100000000,xpp: 200000,title: "🌌 Origens da Maestria" },  desc: "2500 estrelas — você é uma lenda" },
];

window.EXTRA_MAESTRIA_MILESTONES = EXTRA_MAESTRIA_MILESTONES;

// ──────────────────────────────────────────────────────────────────
// 6. FUNÇÃO HELPER: contar estrelas totais de Maestria
// ──────────────────────────────────────────────────────────────────
function countTotalMaestriaStars(save) {
  const maestria = save.maestria || {};
  let total = 0;
  Object.values(maestria).forEach(data => {
    total += (data.stars || 0);
    // Contar Prestige como estrelas extras (Prestige I = +1, II = +2, III = +3)
    const cardId = Object.keys(maestria).find(k => maestria[k] === data);
    if (cardId && save.maestriaPrestige && save.maestriaPrestige[cardId]) {
      total += save.maestriaPrestige[cardId];
    }
  });
  return total;
}
window.countTotalMaestriaStars = countTotalMaestriaStars;

// ──────────────────────────────────────────────────────────────────
// 7. NOTIFICAR CARREGAMENTO
// ──────────────────────────────────────────────────────────────────
console.log("[Maestria v11] Patch carregado: +25 lores, Sistema Prestige (I/II/III), +12 conquistas, Codex expandido.");

})(); // IIFE fim
