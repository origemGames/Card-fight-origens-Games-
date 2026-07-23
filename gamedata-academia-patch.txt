/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-academia-patch.js — v18.3 (correção de bugs)
   ACADEMIA · SEÇÃO · EXPEDIÇÕES · XP DA ACADEMIA · CONQUISTAS
   ------------------------------------------------------------
   Depende de: gamedata.js (getOrCreateSave, writeSave, spendGold,
   earnGold, ALL_CARDS, RARITY, fmtNum). Não substitui nenhuma
   função existente — apenas adiciona window.AcademiaAPI.
   ------------------------------------------------------------
   CHANGELOG v18.3:
   - FIX CRÍTICO: em expedição dupla (2 cartas), a chance de trazer
     carta-bônus era multiplicada pelo fator de teto de recompensa
     (1.7x), fazendo a chance real de carta pular de 47% para quase
     80% — bem diferente do que o painel informa ao jogador. A
     chance de carta-bônus agora fica fixa em 47%, independente de
     enviar 1 ou 2 cartas (apenas ouro/XP/XPP escalam com o 1.7x).
   - FIX: `ensure()` só recriava o objeto `counters` inteiro quando
     ele estava totalmente ausente. Saves que já tinham `counters`
     de uma versão anterior sem os campos `insurance`/`doubles`
     ficavam com esses subcampos `undefined` — e incrementá-los
     (`undefined++`) resulta em NaN permanente. Agora cada subcampo
     do contador é garantido individualmente.
   - FIX (HTML): ao ativar "Enviar 2 cartas juntas" sem escolher a
     2ª carta, era possível enviar a expedição mesmo assim — o jogo
     silenciosamente voltava a modo de carta única (sem cobrar a
     taxa de 5.000 🪙 nem o seguro em dobro), mas a interface já
     exibia o preço do seguro em dobro antes de cobrar o valor
     correto. Agora o botão de envio fica bloqueado até a 2ª carta
     ser escolhida ou a opção de dupla ser desligada.
   - FIX (HTML): conquistas que dão apenas XP da Academia (sem
     ouro), como "Portas Abertas", mostravam um " · " solto no
     início da linha de recompensa (ex.: "🎁  · 300 XP Acad"). A
     lista de recompensas agora é montada sem separador órfão.
   ------------------------------------------------------------
   CHANGELOG v18.2:
   - FIX CRÍTICO: a penalidade de falha na Seção (7 dias) usava
     Math.min(-30, -5*diasPerdidos). Como -30 é sempre "menor"
     (mais negativo) que -5*dias para até 5 dias perdidos, isso
     fazia QUALQUER dia perdido (mesmo 1 só) aplicar direto a
     pior penalidade possível (-30% ATK/HP), em vez de escalar
     proporcionalmente como o painel explicativo promete ("até
     -30%"). Trocado para Math.max — agora 1 dia perdido = -5%,
     2 dias = -10%, ... e só chega em -30% (piso) com 6+ dias.
   - FIX: comentário desatualizado sobre o piso do buff negativo
     (negFloor) no nível máximo, dizia -0.25% mas o valor real é
     -0.50% (já corrigido no texto exibido ao jogador na v18.1).
   - Cleanup: removida constante DOUBLE_COST_MULT, que nunca era
     usada (a taxa de "enviar dupla" é um valor fixo de 5.000 🪙,
     não um multiplicador).
   ------------------------------------------------------------
   CHANGELOG v18.1:
   - FIX: ouro de recompensas (Expedição, consolação de cofre
     cheio, conquistas) agora sempre passa por earnGold() /
     totalGoldEarned. Antes, alguns pontos somavam direto em
     save.gold e quebravam o hash anti-cheat do gamedata.js,
     podendo zerar/reduzir o ouro do jogador no próximo load.
   - FIX: uma carta trancada numa Seção (7 dias) podia ser
     enviada ao mesmo tempo para Academia ou Expedição (inclusive
     como 2ª carta de uma dupla). Agora startAcademia,
     startExpedicao e startSessao validam isCardBusy() no
     servidor, não só na tela.
   - FIX: texto do painel explicativo dizia "-0.25%" no nível
     máximo; o valor real calculado por luckModifiers é -0.50%.
   ============================================================ */
"use strict";

(function () {
  if (window.AcademiaAPI) return; // idempotente

  // ── CONSTANTES ────────────────────────────────────────────
  const DURATIONS_H = [2, 4, 8, 12, 24, 42];         // horas
  const BUFF_POS   = [1, 1.5, 2, 2.5, 3];             // %
  const BUFF_NEG   = [-0.5, -1, -1.5, -2];            // %
  const SESSAO_UNLOCK_COST = 100000;                   // 100K ouro
  const SESSAO_DAYS = 7;
  const SESSAO_MAX_BOOST = 10;                         // %
  const SESSAO_MISS_PENALTY = -30;                     // % worst-case
  const INSURANCE_COST_BASE = 25000;                   // ouro (bem caro)
  const EXP_LOSE_CHANCE = 0.06;                        // 6% base
  const EXP_CARD_CHANCE = 0.47;                        // 47% recompensa carta
  const EXP_MAX_GOLD = 1500;
  const EXP_MAX_XP   = 1050;
  const EXP_MAX_XPP  = 1000;
  const XP_ACAD_TABLE = [0, 500, 1500, 3500, 7500, 15000, 30000]; // level 1..6 threshold
  const ACAD_MAX_LEVEL = 6;

  // Mensagens narrativas (grande variedade)
  const EXP_MESSAGES = [
    "encontrou uma caverna esquecida e recolheu moedas antigas",
    "fugiu de um assaltante no meio da noite",
    "ajudou um mercador ferido e recebeu uma bênção",
    "atravessou um rio congelado sem se molhar",
    "descobriu um mapa rasgado dentro de um tronco oco",
    "trocou histórias com um bardo cego",
    "salvou um filhote de dragão preso numa armadilha",
    "enfrentou uma tempestade de areia por dois dias",
    "encontrou uma fonte de água mágica e bebeu com cautela",
    "foi enganado por um duende, mas escapou com metade do saque",
    "dormiu numa hospedaria assombrada e nem percebeu",
    "resolveu um enigma antigo gravado numa pedra",
    "duelou com um espantalho vivo (e venceu por sorte)",
    "aprendeu uma técnica nova observando um monge",
    "foi convidada para um banquete secreto e comeu demais",
    "correu de uma alcateia de lobos-sombra",
    "caiu num buraco e achou tesouro no fundo",
    "protegeu uma vila de um enxame de gafanhotos gigantes",
    "trocou seu cantil por um amuleto duvidoso",
    "descobriu que o inimigo era um velho amigo disfarçado",
    "vendeu um mapa em branco por bom preço",
    "acordou coberta de flores num vale desconhecido",
    "recebeu um sussurro do vento e mudou de caminho",
    "sobreviveu a uma emboscada usando só um galho",
    "encontrou um baú vazio, mas com uma carta dentro",
    "cruzou uma ponte que só existia à meia-noite",
    "convenceu um troll de que era invisível",
    "descobriu que o tesouro era uma armadilha e correu",
    "ajudou uma bruxa a colher cogumelos raros",
    "perdeu-se, mas voltou com uma nova cicatriz e uma boa história",
    "quase virou jantar de aranha gigante",
    "encontrou ruínas cobertas de musgo dourado",
    "pescou um peixe que falava enigmas",
    "trocou insultos com um espelho falante e ganhou",
    "domou (temporariamente) um cavalo selvagem",
    "descobriu que o vilão era só um garoto perdido",
    "foi coroada rainha de uma tribo por 3 minutos",
    "encontrou uma espada quebrada com valor histórico",
    "escapou de guardas subornando com sorriso",
    "seguiu um pássaro dourado até uma clareira secreta"
  ];
  const EXP_LOST_MESSAGES = [
    "não voltou. O eco da floresta engoliu seus passos.",
    "caiu numa fenda dimensional. Ninguém sabe onde foi parar.",
    "foi capturada por bandidos e vendida em outra terra.",
    "sumiu numa tempestade mágica sem deixar rastro.",
    "foi encantada por uma sereia e jamais retornou.",
    "desapareceu no nevoeiro do vale proibido.",
    "atendeu a um chamado antigo e nunca mais foi vista.",
    "trocou de lado — hoje serve a um rei estrangeiro.",
    "foi devorada por algo que não tem nome.",
    "escolheu ficar. Diz a lenda que fundou uma cidade."
  ];
  const ACAD_MESSAGES = [
    "treinou até o sol se pôr e voltou mais forte",
    "aprendeu uma nova postura com um mestre silencioso",
    "meditou horas sobre cada golpe",
    "levou uma surra do treinador e agradeceu",
    "descobriu que respirar direito muda tudo",
    "quebrou a espada de treino duas vezes",
    "dormiu no dojo por engano — acordou renovada",
    "encontrou seu ritmo depois de mil repetições",
    "chorou treinando. Depois riu. Depois venceu.",
    "encarou o próprio reflexo e finalmente se entendeu",
    "levou um tombo épico que virou lenda",
    "treinou com os olhos vendados por um dia inteiro"
  ];

  const ACHIEVEMENTS = [
    { id: "acad_first",    name: "Primeiro Suor",        desc: "Complete 1 Academia",                icon: "🥋", reward: { gold: 500 } },
    { id: "acad_10",       name: "Aluno Dedicado",       desc: "Complete 10 treinos de Academia",     icon: "💪", reward: { gold: 3000 } },
    { id: "acad_50",       name: "Mestre do Dojo",       desc: "Complete 50 treinos",                 icon: "🥇", reward: { gold: 15000, xpAcad: 500 } },
    { id: "acad_negative", name: "Azarão",               desc: "Receba um buff negativo",             icon: "💥", reward: { gold: 200 } },
    { id: "acad_max_pos",  name: "Sorte de Ferro",       desc: "Receba +3% em Academia",              icon: "🍀", reward: { gold: 1500 } },
    { id: "sessao_unlock", name: "Portas Abertas",       desc: "Desbloqueie a Seção (100K)",          icon: "🔓", reward: { xpAcad: 300 } },
    { id: "sessao_done",   name: "7 Dias de Ferro",      desc: "Complete uma Seção de 7 dias",        icon: "⛩️", reward: { gold: 25000, xpAcad: 1000 } },
    { id: "sessao_perfect",name: "Alma Inquebrável",     desc: "Complete Seção com buff +10%",        icon: "🌟", reward: { gold: 50000 } },
    { id: "sessao_fail",   name: "Coração Quebrado",     desc: "Perca dias consecutivos na Seção",    icon: "💔", reward: { gold: 500 } },
    { id: "exp_first",     name: "Primeiro Passo",       desc: "Complete 1 Expedição",                icon: "🗺️", reward: { gold: 500 } },
    { id: "exp_10",        name: "Andarilha",            desc: "Complete 10 Expedições",              icon: "🧭", reward: { gold: 3000 } },
    { id: "exp_50",        name: "Lenda das Estradas",   desc: "Complete 50 Expedições",              icon: "🏕️", reward: { gold: 20000, xpAcad: 800 } },
    { id: "exp_lost",      name: "Adeus Guerreira",      desc: "Perca uma carta em Expedição",        icon: "⚰️", reward: { gold: 1000 } },
    { id: "exp_origens",   name: "Toque do Destino",     desc: "Traga uma carta Origens da Expedição",icon: "🌌", reward: { gold: 100000 } },
    { id: "exp_ultra",     name: "Achado Raro",          desc: "Traga uma carta Ultra Rara",          icon: "💎", reward: { gold: 25000 } },
    { id: "exp_double",    name: "Dupla Ousada",         desc: "Envie 2 cartas juntas",               icon: "👯", reward: { gold: 2000 } },
    { id: "exp_insured",   name: "Prevenida",            desc: "Use Seguro em uma missão",            icon: "🛡️", reward: { gold: 1000 } },
    { id: "acad_lvl2",     name: "Faixa Amarela",        desc: "Alcance nível 2 na Academia",         icon: "🟡", reward: { gold: 2000 } },
    { id: "acad_lvl4",     name: "Faixa Marrom",         desc: "Alcance nível 4 na Academia",         icon: "🟤", reward: { gold: 10000 } },
    { id: "acad_lvl6",     name: "Faixa Negra",          desc: "Alcance o nível MÁXIMO 6",            icon: "⚫", reward: { gold: 50000, xpAcad: 5000 } },
    { id: "focus_atk",     name: "Punho de Ferro",       desc: "Treine 5 cartas com foco ATK",        icon: "⚔️", reward: { gold: 3000 } },
    { id: "focus_hp",      name: "Muralha Viva",         desc: "Treine 5 cartas com foco HP",         icon: "🛡️", reward: { gold: 3000 } },
    { id: "focus_bal",     name: "Caminho do Meio",      desc: "Treine 5 cartas com foco equilibrado",icon: "⚖️", reward: { gold: 3000 } }
  ];

  // ── HELPERS ───────────────────────────────────────────────
  const today  = () => new Date().toDateString();
  const now    = () => Date.now();
  const rand   = arr => arr[Math.floor(Math.random() * arr.length)];
  const clamp  = (n, a, b) => Math.max(a, Math.min(b, n));

  function ensure(save) {
    if (!save) return null;
    if (!save.academia) {
      save.academia = {
        xp: 0, level: 1,
        lastAcademiaDay: "",
        lastExpDay: "",
        sessaoUnlocked: false,
        activeTraining: [],   // Academia + Expedição runs
        sessao: null,          // { cardId, startedAt, lastCheckDay, streak, missedDays, endsAt, currentBuff }
        trainedCards: {},      // { cardId: true } — has 🥋
        completedHistory: [],  // últimos 30
        achievements: {},
        counters: { acad:0, exp:0, sessao:0, focusAtk:0, focusHp:0, focusBal:0, insurance:0, doubles:0 },
        cardBuffs: {},         // { cardId: { atk: +2.5, hp: -1 } }
      };
    }
    const a = save.academia;
    a.activeTraining = a.activeTraining || [];
    a.trainedCards   = a.trainedCards   || {};
    a.completedHistory = a.completedHistory || [];
    a.achievements   = a.achievements   || {};
    // FIX v18.3: antes só criava o objeto `counters` inteiro se ele não
    // existisse. Um save antigo que já tivesse `counters` (mas sem campos
    // adicionados depois, como `insurance`/`doubles`) mantinha esses
    // subcampos `undefined` para sempre — e `undefined++` vira NaN,
    // corrompendo o contador permanentemente. Agora cada subcampo é
    // garantido individualmente.
    a.counters = a.counters || {};
    a.counters.acad     = a.counters.acad     || 0;
    a.counters.exp      = a.counters.exp      || 0;
    a.counters.sessao   = a.counters.sessao   || 0;
    a.counters.focusAtk = a.counters.focusAtk || 0;
    a.counters.focusHp  = a.counters.focusHp  || 0;
    a.counters.focusBal = a.counters.focusBal || 0;
    a.counters.insurance= a.counters.insurance|| 0;
    a.counters.doubles  = a.counters.doubles  || 0;
    a.cardBuffs      = a.cardBuffs      || {};
    return a;
  }

  function xpForNext(level) {
    if (level >= ACAD_MAX_LEVEL) return null;
    return XP_ACAD_TABLE[level] - XP_ACAD_TABLE[level - 1];
  }
  function totalXpForLevel(level) { return XP_ACAD_TABLE[level - 1] || 0; }

  function addXpAcad(save, amount) {
    const a = ensure(save);
    a.xp += amount;
    while (a.level < ACAD_MAX_LEVEL && a.xp >= totalXpForLevel(a.level + 1)) {
      a.level++;
      if (a.level === 2) unlockAch(save, "acad_lvl2");
      if (a.level === 4) unlockAch(save, "acad_lvl4");
      if (a.level === 6) unlockAch(save, "acad_lvl6");
    }
  }

  // Nível melhora faixa de sorte: reduz teto negativo, aumenta chance positiva
  function luckModifiers(save) {
    const a = ensure(save);
    const lvl = a.level;
    // negFloor: piso do buff negativo (mais próximo de 0 = melhor)
    const negFloor = clamp(-2 + (lvl - 1) * 0.35, -2, -0.5); // Nv1 -2% → Nv6 -0.50%
    const posBonus = (lvl - 1) * 0.08;                         // +0..+0.4 %
    const loseChance = clamp(EXP_LOSE_CHANCE - (lvl - 1) * 0.008, 0.01, EXP_LOSE_CHANCE);
    const posRollBias = 0.55 + (lvl - 1) * 0.04;               // chance de ser positivo
    return { negFloor, posBonus, loseChance, posRollBias };
  }

  function unlockAch(save, id) {
    const a = ensure(save);
    if (a.achievements[id]) return false;
    const ach = ACHIEVEMENTS.find(x => x.id === id);
    if (!ach) return false;
    a.achievements[id] = true;
    if (ach.reward) {
      if (ach.reward.gold) {
        // BUGFIX: aplicar o bônus de ouro dos Artefatos de "Faça Seu
        // Caminho" (Coroa do Rei Perdido, +10% em TODAS as fontes),
        // que antes não valia para conquistas de Academia/Expedição.
        const goldR = (typeof RacasAPI !== "undefined" && typeof RacasAPI.applyArtifactMults === "function")
          ? RacasAPI.applyArtifactMults("gold", ach.reward.gold) : ach.reward.gold;
        if (typeof earnGold === "function") earnGold(save, goldR);
        else { save.gold = (save.gold || 0) + goldR; save.totalGoldEarned = (save.totalGoldEarned || 0) + goldR; }
      }
      if (ach.reward.xpAcad) addXpAcad(save, ach.reward.xpAcad);
    }
    return true;
  }

  // ── VALIDAÇÕES DE DIA ─────────────────────────────────────
  function canStartAcademia(save) {
    const a = ensure(save);
    return a.lastAcademiaDay !== today();
  }
  function canStartExpedicao(save) {
    const a = ensure(save);
    return a.lastExpDay !== today();
  }

  // ── SORTEAR BUFF (Academia / Sessão) ──────────────────────
  function rollBuff(save, focus, mode) {
    const { negFloor, posBonus, posRollBias } = luckModifiers(save);
    // Sessão: só positivo, teto 10%
    if (mode === "sessao_final") {
      const val = 3 + Math.random() * (SESSAO_MAX_BOOST - 3); // 3..10
      const primary = Math.round(val * 10) / 10;
      const secondary = Math.round((val * 0.55) * 10) / 10;
      if (focus === "atk") return { atk: primary, hp: secondary };
      if (focus === "hp")  return { atk: secondary, hp: primary };
      const mid = Math.round(((primary + secondary) / 2) * 10) / 10;
      return { atk: mid, hp: mid };
    }
    const positive = Math.random() < posRollBias;
    const pickPos = () => rand(BUFF_POS) + posBonus;
    const pickNeg = () => Math.max(rand(BUFF_NEG), negFloor);
    let atk, hp;
    if (focus === "atk") {
      atk = positive ? pickPos() : pickNeg();
      hp  = positive ? (Math.random() < 0.55 ? pickPos() * 0.6 : pickNeg()) : pickNeg();
    } else if (focus === "hp") {
      hp  = positive ? pickPos() : pickNeg();
      atk = positive ? (Math.random() < 0.55 ? pickPos() * 0.6 : pickNeg()) : pickNeg();
    } else {
      atk = positive ? pickPos() * 0.85 : pickNeg() * 0.85;
      hp  = positive ? pickPos() * 0.85 : pickNeg() * 0.85;
    }
    return {
      atk: Math.round(atk * 10) / 10,
      hp : Math.round(hp  * 10) / 10
    };
  }

  // ── ESTADO DAS CARTAS ─────────────────────────────────────
  function isTrained(save, cardId) {
    const a = ensure(save);
    return !!a.trainedCards[cardId];
  }
  function markTrained(save, cardId) {
    const a = ensure(save);
    a.trainedCards[cardId] = true;
  }
  // Uma carta está "ocupada" se já está numa Seção ativa, ou em Academia/Expedição
  // em curso (como carta principal ou como segunda carta de uma dupla).
  function isCardBusy(save, cardId) {
    const a = ensure(save);
    if (a.sessao && a.sessao.cardId === cardId) return true;
    return a.activeTraining.some(r => r.cardId === cardId || r.doubleCard === cardId);
  }
  function applyBuffToCard(save, cardId, buff) {
    const a = ensure(save);
    a.cardBuffs[cardId] = a.cardBuffs[cardId] || { atk: 0, hp: 0 };
    a.cardBuffs[cardId].atk = Math.round((a.cardBuffs[cardId].atk + buff.atk) * 10) / 10;
    a.cardBuffs[cardId].hp  = Math.round((a.cardBuffs[cardId].hp  + buff.hp ) * 10) / 10;
  }
  function getCardBuff(save, cardId) {
    const a = ensure(save);
    return a.cardBuffs[cardId] || { atk: 0, hp: 0 };
  }
  function getBuffedStats(save, cardId) {
    const base = (typeof ALL_CARDS !== "undefined") ? ALL_CARDS.find(c => c.id === cardId) : null;
    if (!base) return null;
    const b = getCardBuff(save, cardId);
    let atk = Math.max(1, Math.round(base.atk * (1 + b.atk / 100)));
    let hp  = Math.max(1, Math.round(base.hp  * (1 + b.hp  / 100)));
    // BUGFIX: os bônus permanentes dos Artefatos de "Faça Seu Caminho"
    // (Núcleo de Plasma +5% ATK, Pena Sagrada +5% HP em TODAS as cartas,
    // e o Sigilo das Origens +50%/+50% na carta equipada) existiam em
    // RacasAPI.applyCardMults mas nunca eram aplicados às cartas em
    // treino de Academia/Expedição — só valiam (depois de corrigido em
    // outro lugar) em batalha clássica. Aplicando aqui também.
    if (typeof RacasAPI !== "undefined" && typeof RacasAPI.applyCardMults === "function") {
      const boosted = RacasAPI.applyCardMults({ id: cardId, atk: atk, hp: hp });
      atk = boosted.atk;
      hp  = boosted.hp;
    }
    return { ...base, atk, hp, _buff: b, _trained: isTrained(save, cardId) };
  }

  // ── ACADEMIA (envio único) ────────────────────────────────
  function insuranceCost(mode, doubleCard) {
    let c = INSURANCE_COST_BASE;
    if (mode === "expedicao") c = INSURANCE_COST_BASE * 2; // mais caro em expedição
    if (doubleCard) c *= 2;
    return c;
  }

  function startAcademia(save, cardId, focus) {
    const a = ensure(save);
    if (!canStartAcademia(save)) return { ok:false, msg:"Você já enviou uma carta para Academia hoje." };
    if (isTrained(save, cardId))  return { ok:false, msg:"Essa carta já foi treinada — o 🥋 é permanente." };
    if (!(save.vault||[]).includes(cardId)) return { ok:false, msg:"Carta não está no cofre." };
    if (isCardBusy(save, cardId)) return { ok:false, msg:"Essa carta já está ocupada (Seção, Academia ou Expedição em curso)." };
    const dur = rand(DURATIONS_H);
    const run = {
      kind: "academia",
      cardId, focus,
      startedAt: now(),
      endsAt: now() + dur * 3600 * 1000,
      durationH: dur,
      claimed: false
    };
    a.activeTraining.push(run);
    a.lastAcademiaDay = today();
    if (focus === "atk") a.counters.focusAtk++;
    else if (focus === "hp") a.counters.focusHp++;
    else a.counters.focusBal++;
    if (a.counters.focusAtk >= 5) unlockAch(save, "focus_atk");
    if (a.counters.focusHp  >= 5) unlockAch(save, "focus_hp");
    if (a.counters.focusBal >= 5) unlockAch(save, "focus_bal");
    writeSave(save);
    return { ok:true, run };
  }

  function claimAcademia(save, run) {
    const a = ensure(save);
    if (run.claimed) return { ok:false, msg:"Já coletado." };
    if (now() < run.endsAt) return { ok:false, msg:"Ainda em treinamento." };
    const buff = rollBuff(save, run.focus, "academia");
    applyBuffToCard(save, run.cardId, buff);
    markTrained(save, run.cardId);
    run.claimed = true;
    run.result = { buff, msg: rand(ACAD_MESSAGES) };
    a.counters.acad++;
    unlockAch(save, "acad_first");
    if (a.counters.acad >= 10) unlockAch(save, "acad_10");
    if (a.counters.acad >= 50) unlockAch(save, "acad_50");
    if (buff.atk < 0 || buff.hp < 0) unlockAch(save, "acad_negative");
    if (buff.atk >= 3 || buff.hp >= 3) unlockAch(save, "acad_max_pos");
    addXpAcad(save, 100 + run.durationH * 5);
    a.completedHistory.unshift({ ...run, doneAt: now() });
    a.completedHistory = a.completedHistory.slice(0, 30);
    a.activeTraining = a.activeTraining.filter(r => r !== run);
    writeSave(save);
    return { ok:true, run };
  }

  // ── SEÇÃO (Sessão) — 7 DIAS ───────────────────────────────
  function unlockSessao(save) {
    const a = ensure(save);
    if (a.sessaoUnlocked) return { ok:false, msg:"Já desbloqueada." };
    if ((save.gold||0) < SESSAO_UNLOCK_COST) return { ok:false, msg:"Precisa de 100.000 de ouro." };
    if (typeof spendGold === "function") spendGold(save, SESSAO_UNLOCK_COST);
    else { save.gold -= SESSAO_UNLOCK_COST; save.totalGoldSpent = (save.totalGoldSpent||0) + SESSAO_UNLOCK_COST; }
    a.sessaoUnlocked = true;
    unlockAch(save, "sessao_unlock");
    writeSave(save);
    return { ok:true };
  }

  function startSessao(save, cardId, focus) {
    const a = ensure(save);
    if (!a.sessaoUnlocked) return { ok:false, msg:"Seção bloqueada. Pague 100K para liberar." };
    if (a.sessao)          return { ok:false, msg:"Você já tem uma Seção ativa." };
    if (isTrained(save, cardId)) return { ok:false, msg:"Carta já treinada." };
    if (!(save.vault||[]).includes(cardId)) return { ok:false, msg:"Carta não está no cofre." };
    if (isCardBusy(save, cardId)) return { ok:false, msg:"Essa carta já está ocupada (Academia ou Expedição em curso)." };
    a.sessao = {
      cardId, focus,
      startedAt: now(),
      lastCheckDay: today(),
      streak: 1,
      missedDays: 0,
      endsAt: now() + SESSAO_DAYS * 24 * 3600 * 1000
    };
    writeSave(save);
    return { ok:true };
  }

  // Chamado ao abrir a tela — cuida de streaks
  function pingSessao(save) {
    const a = ensure(save);
    if (!a.sessao) return;
    const s = a.sessao;
    const t = today();
    if (s.lastCheckDay === t) return;
    // Diferença em dias
    const ONE_DAY = 24 * 3600 * 1000;
    const lastDate = new Date(s.lastCheckDay);
    const nowDate  = new Date(t);
    const diff = Math.round((nowDate - lastDate) / ONE_DAY);
    if (diff === 1) {
      s.streak++;
      s.lastCheckDay = t;
    } else if (diff > 1) {
      s.missedDays += (diff - 1);
      s.lastCheckDay = t;
      unlockAch(save, "sessao_fail");
    }
    writeSave(save);
  }

  function claimSessao(save) {
    const a = ensure(save);
    if (!a.sessao) return { ok:false, msg:"Nenhuma Seção ativa." };
    pingSessao(save);
    const s = a.sessao;
    if (now() < s.endsAt) return { ok:false, msg:"Ainda faltam dias." };
    // Streak sucesso: 7 dias consecutivos
    let buff;
    if (s.missedDays === 0 && s.streak >= SESSAO_DAYS) {
      buff = rollBuff(save, s.focus, "sessao_final");
      unlockAch(save, "sessao_done");
      if (buff.atk >= SESSAO_MAX_BOOST - 0.5 || buff.hp >= SESSAO_MAX_BOOST - 0.5) {
        unlockAch(save, "sessao_perfect");
      }
    } else {
      // Falhou consistência — penalidade proporcional
      // FIX: estava usando Math.min, o que fazia QUALQUER dia perdido (até
      // 1 único dia) aplicar direto o pior caso (-30%), pois -30 é sempre
      // "menor" que -5*dias para até 5 dias perdidos. Com Math.max a
      // penalidade agora escala com os dias perdidos e só chega em -30%
      // (o piso) quando 6+ dias forem perdidos.
      const pen = Math.max(SESSAO_MISS_PENALTY, -5 * s.missedDays);
      buff = { atk: pen, hp: pen };
      unlockAch(save, "sessao_fail");
    }
    applyBuffToCard(save, s.cardId, buff);
    markTrained(save, s.cardId);
    a.counters.sessao++;
    addXpAcad(save, 1200);
    a.completedHistory.unshift({ kind:"sessao", cardId:s.cardId, focus:s.focus, doneAt:now(), result:{ buff, msg:"Concluiu 7 dias de Seção." } });
    a.completedHistory = a.completedHistory.slice(0, 30);
    a.sessao = null;
    writeSave(save);
    return { ok:true, buff };
  }

  function cancelSessao(save) {
    const a = ensure(save);
    if (!a.sessao) return;
    a.sessao = null;
    writeSave(save);
  }

  // ── EXPEDIÇÕES ────────────────────────────────────────────
  function startExpedicao(save, cardId, focus, opts) {
    opts = opts || {};
    const a = ensure(save);
    if (!canStartExpedicao(save)) return { ok:false, msg:"Você já enviou cartas em Expedição hoje." };
    if (!(save.vault||[]).includes(cardId)) return { ok:false, msg:"Carta não está no cofre." };
    if (opts.doubleCard && !(save.vault||[]).includes(opts.doubleCard)) return { ok:false, msg:"Segunda carta não está no cofre." };
    if (opts.doubleCard && opts.doubleCard === cardId) return { ok:false, msg:"Escolha uma segunda carta diferente." };
    if (isCardBusy(save, cardId)) return { ok:false, msg:"Essa carta já está ocupada (Seção, Academia ou Expedição em curso)." };
    if (opts.doubleCard && isCardBusy(save, opts.doubleCard)) return { ok:false, msg:"A segunda carta já está ocupada (Seção, Academia ou Expedição em curso)." };
    let cost = 0;
    if (opts.insurance) cost += insuranceCost("expedicao", opts.doubleCard);
    if (opts.doubleCard) cost += 5000; // taxa extra por dupla
    if (cost > 0) {
      if ((save.gold||0) < cost) return { ok:false, msg:"Ouro insuficiente para os extras." };
      if (typeof spendGold === "function") spendGold(save, cost);
      else { save.gold -= cost; save.totalGoldSpent = (save.totalGoldSpent||0) + cost; }
    }
    const dur = rand(DURATIONS_H);
    const run = {
      kind: "expedicao",
      cardId, focus,
      doubleCard: opts.doubleCard || null,
      insurance:  !!opts.insurance,
      startedAt: now(),
      endsAt: now() + dur * 3600 * 1000,
      durationH: dur,
      claimed: false,
      costPaid: cost
    };
    a.activeTraining.push(run);
    a.lastExpDay = today();
    if (opts.doubleCard) { a.counters.doubles++; unlockAch(save, "exp_double"); }
    if (opts.insurance)  { a.counters.insurance++; unlockAch(save, "exp_insured"); }
    writeSave(save);
    return { ok:true, run };
  }

  function claimExpedicao(save, run) {
    const a = ensure(save);
    if (run.claimed) return { ok:false, msg:"Já coletado." };
    if (now() < run.endsAt) return { ok:false, msg:"Expedição em curso." };
    const { loseChance } = luckModifiers(save);
    const cardsInvolved = run.doubleCard ? [run.cardId, run.doubleCard] : [run.cardId];
    let lost = [];
    let chance = loseChance * (run.doubleCard ? 1.4 : 1);
    if (run.insurance) chance *= 0.35; // reduz, não zera
    cardsInvolved.forEach(cid => {
      if (Math.random() < chance) lost.push(cid);
    });
    // Recompensas
    const scale = run.durationH / 42;                       // 2h..42h
    const multi = run.doubleCard ? 1.7 : 1;
    const gold = Math.floor((100 + Math.random() * (EXP_MAX_GOLD - 100)) * scale * multi);
    const xp   = Math.floor((50  + Math.random() * (EXP_MAX_XP   - 50 )) * scale * multi);
    const xpp  = Math.floor((50  + Math.random() * (EXP_MAX_XPP  - 50 )) * scale * multi);
    let cardReward = null;
    // FIX v18.3: a chance de trazer carta-bônus era multiplicada pelo mesmo
    // fator "multi" (1.7x) usado para o TETO de ouro/XP/XPP. Isso é uma
    // probabilidade, não um valor escalável — o resultado era ~80% de chance
    // em expedições duplas, quando o painel sempre informou 47% fixo. Agora
    // a chance de carta-bônus não é mais afetada por enviar 2 cartas.
    if (Math.random() < EXP_CARD_CHANCE) {
      cardReward = rollExpCard();
    }
    // Aplica recompensas
    if (lost.length) {
      save.vault = (save.vault || []).filter(id => !lost.includes(id));
      lost.forEach(cid => { delete a.cardBuffs[cid]; });
      unlockAch(save, "exp_lost");
    }
    // BUGFIX: o Artefato "Coroa do Rei Perdido" (+10% ouro em TODAS as
    // fontes), "Presa Ancestral" (+10% XP) e "Colar Lunar" (+10% XPP)
    // nunca eram aplicados às recompensas de Expedição — só existiam em
    // RacasAPI.applyArtifactMults, que ninguém chamava aqui.
    let goldF = gold, xpF = xp, xppF = xpp;
    if (typeof RacasAPI !== "undefined" && typeof RacasAPI.applyArtifactMults === "function") {
      goldF = RacasAPI.applyArtifactMults("gold", gold);
      xpF   = RacasAPI.applyArtifactMults("xp",   xp);
      xppF  = RacasAPI.applyArtifactMults("xpp",  xpp);
    }
    if (typeof earnGold === "function") earnGold(save, goldF);
    else { save.gold = (save.gold||0) + goldF; save.totalGoldEarned = (save.totalGoldEarned||0) + goldF; }
    save.xp  = (save.xp||0)  + xpF;
    save.xpp = (save.xpp||0) + xppF;
    if (cardReward) {
      save.vault = save.vault || [];
      if ((save.vaultLimit||50) > save.vault.length) {
        save.vault.push(cardReward.id);
      } else {
        // consolação por cofre cheio — precisa passar pelo ledger (totalGoldEarned),
        // senão o hash anti-cheat diverge e o jogo zera/reduz o ouro no próximo load
        if (typeof earnGold === "function") earnGold(save, 500);
        else { save.gold = (save.gold||0) + 500; save.totalGoldEarned = (save.totalGoldEarned||0) + 500; }
      }
      if (cardReward.rarity === "ORIGENS") unlockAch(save, "exp_origens");
      if (cardReward.rarity === "ULTRA_RARE") unlockAch(save, "exp_ultra");
    }
    run.claimed = true;
    run.result = {
      lost, gold: goldF, xp: xpF, xpp: xppF, cardReward,
      msg: lost.length
        ? (cardsInvolved.length > lost.length
            ? "voltou sozinha — " + rand(EXP_LOST_MESSAGES)
            : rand(EXP_LOST_MESSAGES))
        : rand(EXP_MESSAGES)
    };
    a.counters.exp++;
    unlockAch(save, "exp_first");
    if (a.counters.exp >= 10) unlockAch(save, "exp_10");
    if (a.counters.exp >= 50) unlockAch(save, "exp_50");
    addXpAcad(save, 150 + run.durationH * 6);
    a.completedHistory.unshift({ ...run, doneAt: now() });
    a.completedHistory = a.completedHistory.slice(0, 30);
    a.activeTraining = a.activeTraining.filter(r => r !== run);
    writeSave(save);
    return { ok:true, run };
  }

  function rollExpCard() {
    if (typeof ALL_CARDS === "undefined") return null;
    const r = Math.random();
    let rarity;
    if      (r < 0.001) rarity = "ORIGENS";
    else if (r < 0.006) rarity = "ULTRA_RARE";
    else if (r < 0.03)  rarity = "MYTHIC";
    else if (r < 0.10)  rarity = "LEGENDARY";
    else if (r < 0.25)  rarity = "EPIC";
    else if (r < 0.55)  rarity = "RARE";
    else                rarity = "COMMON";
    const pool = ALL_CARDS.filter(c => c.rarity === rarity);
    if (!pool.length) return ALL_CARDS[Math.floor(Math.random()*ALL_CARDS.length)];
    return pool[Math.floor(Math.random()*pool.length)];
  }

  // ── AUTO-CLAIM VERIFICATION ───────────────────────────────
  function tickAll(save) {
    const a = ensure(save);
    a.activeTraining.forEach(r => { if (!r.claimed && now() >= r.endsAt) r._ready = true; });
  }

  // ── API pública ───────────────────────────────────────────
  window.AcademiaAPI = {
    // constantes
    DURATIONS_H, BUFF_POS, BUFF_NEG, SESSAO_UNLOCK_COST, SESSAO_DAYS,
    SESSAO_MAX_BOOST, ACAD_MAX_LEVEL, ACHIEVEMENTS,
    EXP_MAX_GOLD, EXP_MAX_XP, EXP_MAX_XPP, EXP_CARD_CHANCE,
    // core
    ensure, tickAll, luckModifiers, insuranceCost,
    canStartAcademia, canStartExpedicao,
    // academia
    startAcademia, claimAcademia,
    // sessao
    unlockSessao, startSessao, pingSessao, claimSessao, cancelSessao,
    // expedicao
    startExpedicao, claimExpedicao,
    // xp/level
    addXpAcad, xpForNext, totalXpForLevel,
    // cartas
    isTrained, markTrained, isCardBusy, getCardBuff, getBuffedStats,
    // conquistas
    unlockAch
  };
})();
