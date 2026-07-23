/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-fortaleza-patch.js – v2.2  PROGRESSÃO EQUILIBRADA
   - XP por nível reduzido em ~40% em relação à v2.0
   - Recompensas de missões aumentadas para 3~8 XP
   - Custo de ouro base: 120.000 (mais acessível)
   - Bônus passivos mantidos (máximos no nível 20)
   - Integração com batalhas e missões 100% funcional
   - FIX v2.2: XP da Fortaleza por missões diárias (fortressXP) agora é
     concedido de verdade — antes a função existia mas nunca era chamada
   ============================================================ */

"use strict";

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DA FORTALEZA – PROGRESSÃO EQUILIBRADA
// ══════════════════════════════════════════════════════════════
const FORTALEZA_CONFIG = {
  maxLevel: 20,

  // ── XP necessário para cada nível (reduzido ~40% da v2.0) ──
  // Ainda é uma progressão longa, mas mais amigável para os jogadores.
  // Nível 20: 150.000 XP (vs 242.000 antes)
  xpPerLevel: [
    0,        // nível 0 (não usado)
    450,      // nível 1
    1050,     // nível 2
    1950,     // nível 3
    3200,     // nível 4
    4800,     // nível 5
    7000,     // nível 6
    9700,     // nível 7
    13000,    // nível 8
    17100,    // nível 9
    22000,    // nível 10
    28000,    // nível 11
    35200,    // nível 12
    43700,    // nível 13
    53500,    // nível 14
    64800,    // nível 15
    77500,    // nível 16
    92000,    // nível 17
    108000,   // nível 18
    125000,   // nível 19
    150000,   // nível 20 (máximo)
  ],

  // ── Custo em ouro para evoluir (base 120.000, multiplicador 2.5) ──
  // Mais acessível que a v2.0 (150k), ainda é um investimento pesado.
  goldCostBase: 120000,
  goldCostMultiplier: 2.5,

  // ── Bônus passivos (valores máximos no nível 20) ──
  bonusMax: {
    gold: 0.10,   // +10% ouro
    xpp:  0.15,   // +15% XPP
    xp:   0.15,   // +15% XP
    atk:  0.02,   // +2% ATK
    hp:   0.03,   // +3% HP
  },

  // ── Carta diária: chances (pesos) – inalteradas ──
  dailyCardChances: {
    COMMON:     70,
    RARE:       20,
    EPIC:       7,
    LEGENDARY:  2.5,
    MYTHIC:     0.4,
    ULTRA_RARE: 0.09,
    ORIGENS:    0.01,
  },
};

// ══════════════════════════════════════════════════════════════
// FUNÇÕES CENTRAIS
// ══════════════════════════════════════════════════════════════

const CF_Fortress = {
  getLevel(save) {
    if (!save.fortaleza) save.fortaleza = { level: 1, xp: 0, lastDailyCard: "" };
    return save.fortaleza.level || 1;
  },

  getXP(save) {
    if (!save.fortaleza) save.fortaleza = { level: 1, xp: 0, lastDailyCard: "" };
    return save.fortaleza.xp || 0;
  },

  getXPNeeded(level) {
    const maxLevel = FORTALEZA_CONFIG.maxLevel;
    if (level >= maxLevel) return Infinity;
    const idx = Math.min(level, FORTALEZA_CONFIG.xpPerLevel.length - 1);
    return FORTALEZA_CONFIG.xpPerLevel[idx] || 0;
  },

  getGoldCost(level) {
    const base = FORTALEZA_CONFIG.goldCostBase;
    const mult = FORTALEZA_CONFIG.goldCostMultiplier;
    return Math.floor(base * Math.pow(mult, level - 1));
  },

  getBonus(save, type) {
    const level = this.getLevel(save);
    if (level <= 0) return 0;
    const maxBonus = FORTALEZA_CONFIG.bonusMax[type];
    if (!maxBonus) return 0;
    const progress = Math.pow(level / FORTALEZA_CONFIG.maxLevel, 1.6);
    return Math.min(maxBonus, maxBonus * progress);
  },

  addXP(save, amount) {
    if (!save.fortaleza) save.fortaleza = { level: 1, xp: 0, lastDailyCard: "" };
    const f = save.fortaleza;
    let leveled = false;
    let newLevel = f.level;

    f.xp += amount;

    while (f.level < FORTALEZA_CONFIG.maxLevel) {
      const needed = this.getXPNeeded(f.level);
      if (f.xp >= needed) {
        f.xp -= needed;
        f.level++;
        newLevel = f.level;
        leveled = true;
        if (f.level >= FORTALEZA_CONFIG.maxLevel) {
          f.xp = 0;
          break;
        }
      } else {
        break;
      }
    }

    if (f.level >= FORTALEZA_CONFIG.maxLevel) {
      f.xp = 0;
    }

    return { leveled, newLevel };
  },

  evolveWithGold(save) {
    const level = this.getLevel(save);
    if (level >= FORTALEZA_CONFIG.maxLevel) {
      return { ok: false, message: "🏰 Sua fortaleza já está no nível máximo!" };
    }

    const cost = this.getGoldCost(level);
    if (save.gold < cost) {
      return { ok: false, message: `🪙 Você precisa de ${fmtNum(cost)} ouro para evoluir.` };
    }

    spendGold(save, cost);
    const xpGain = Math.floor(cost / 2);
    const result = this.addXP(save, xpGain);

    return {
      ok: true,
      message: `🏰 Fortaleza evoluída! +${fmtNum(xpGain)} XP.`,
      leveled: result.leveled,
      newLevel: result.newLevel,
    };
  },

  getDailyCard(save) {
    const today = new Date().toDateString();
    if (!save.fortaleza) save.fortaleza = { level: 1, xp: 0, lastDailyCard: "" };
    if (save.fortaleza.lastDailyCard === today) return null;
    if (this.getLevel(save) < FORTALEZA_CONFIG.maxLevel) return null;

    const chances = FORTALEZA_CONFIG.dailyCardChances;
    const rarities = Object.keys(chances);
    const weights = Object.values(chances);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    let chosenRarity = "COMMON";
    for (let i = 0; i < weights.length; i++) {
      rand -= weights[i];
      if (rand <= 0) {
        chosenRarity = rarities[i];
        break;
      }
    }

    const pool = getCardsByRarity(chosenRarity);
    if (!pool || pool.length === 0) return null;
    const card = pool[Math.floor(Math.random() * pool.length)];
    save.fortaleza.lastDailyCard = today;
    return card;
  },

  claimDailyCard(save) {
    const card = this.getDailyCard(save);
    if (!card) {
      return { ok: false, message: "📭 Nenhuma carta disponível hoje." };
    }

    const vaultLimit = save.vaultLimit || 50;
    if ((save.vault || []).length >= vaultLimit) {
      return { ok: false, message: "📦 Cofre cheio! Expanda o cofre ou venda cartas." };
    }

    if (!save.vault) save.vault = [];
    save.vault.push(card.id);
    writeSave(save);

    const r = RARITY[card.rarity] || RARITY.COMMON;
    return {
      ok: true,
      card: card,
      message: `📬 Você recebeu: ${card.img} ${card.name} (${r.name})!`,
    };
  },

  applyBonuses(save, rewards) {
    if (!save || !save.fortaleza) return rewards;
    const bonusGold = this.getBonus(save, 'gold');
    const bonusXPP  = this.getBonus(save, 'xpp');
    const bonusXP   = this.getBonus(save, 'xp');
    return {
      ...rewards,
      gold: Math.round((rewards.gold || 0) * (1 + bonusGold)),
      xp:   Math.round((rewards.xp   || 0) * (1 + bonusXP)),
      xpp:  Math.round((rewards.xpp  || 0) * (1 + bonusXPP)),
    };
  },

  applyCombatBonuses(save, card) {
    if (!save || !save.fortaleza) return card;
    const bonusATK = this.getBonus(save, 'atk');
    const bonusHP  = this.getBonus(save, 'hp');
    return {
      ...card,
      atk: Math.round((card.atk || 0) * (1 + bonusATK)),
      hp:  Math.round((card.hp  || 0) * (1 + bonusHP)),
    };
  },

  getProgress(save) {
    const level = this.getLevel(save);
    const xp    = this.getXP(save);
    const needed = this.getXPNeeded(level);
    if (level >= FORTALEZA_CONFIG.maxLevel) return { pct: 100, level, xp, needed, isMax: true };
    return { pct: Math.min(100, Math.round((xp / needed) * 100)), level, xp, needed, isMax: false };
  },

// ══ MISSÕES DA FORTALEZA – 25 missões no total ══
getMissions() {
  return [
    // ── MISSÕES BÁSICAS (fm1-fm5) ──
    { id: "fm1", name: "Defensor da Fortaleza", desc: "Vença 3 batalhas clássicas", type: "wins", target: 3, fortressXP: 5 },
    { id: "fm2", name: "Guarda Ativo",           desc: "Participe de 5 batalhas",    type: "battles", target: 5, fortressXP: 3 },
    { id: "fm3", name: "Arsenal da Fortaleza",   desc: "Abra 2 pacotes",             type: "packs", target: 2, fortressXP: 8 },
    { id: "fm4", name: "Veterano da Guarnição",  desc: "Vença 6 batalhas clássicas", type: "wins", target: 6, fortressXP: 6 },
    { id: "fm5", name: "Senhor da Fortaleza",    desc: "Participe de 8 batalhas",    type: "battles", target: 8, fortressXP: 7 },

    // ── MISSÕES INTERMEDIÁRIAS (fm6-fm10) ──
    { id: "fm6", name: "Guarda Avançado",        desc: "Vença 10 batalhas clássicas", type: "wins", target: 10, fortressXP: 10 },
    { id: "fm7", name: "Veterano de Guerra",     desc: "Participe de 15 batalhas",    type: "battles", target: 15, fortressXP: 8 },
    { id: "fm8", name: "Colecionador Ávido",     desc: "Abra 5 pacotes",              type: "packs", target: 5, fortressXP: 15 },
    { id: "fm9", name: "Estrategista",           desc: "Vença 15 batalhas clássicas", type: "wins", target: 15, fortressXP: 14 },
    { id: "fm10", name: "Maratonista",           desc: "Participe de 20 batalhas",    type: "battles", target: 20, fortressXP: 12 },

    // ── MISSÕES AVANÇADAS (fm11-fm15) ──
    { id: "fm11", name: "Apostador Frequente",   desc: "Abra 8 pacotes",              type: "packs", target: 8, fortressXP: 22 },
    { id: "fm12", name: "Comandante Implacável", desc: "Vença 20 batalhas clássicas", type: "wins", target: 20, fortressXP: 18 },
    { id: "fm13", name: "Guerra Total",          desc: "Participe de 30 batalhas",    type: "battles", target: 30, fortressXP: 16 },
    { id: "fm14", name: "Mestre dos Pacotes",    desc: "Abra 10 pacotes",             type: "packs", target: 10, fortressXP: 28 },
    { id: "fm15", name: "Lenda da Arena",        desc: "Vença 30 batalhas clássicas", type: "wins", target: 30, fortressXP: 25 },

    // ── MISSÕES ÉPICAS (fm16-fm20) ──
    { id: "fm16", name: "Exército de Um",        desc: "Participe de 40 batalhas",    type: "battles", target: 40, fortressXP: 20 },
    { id: "fm17", name: "Colecionador Lendário", desc: "Abra 12 pacotes",             type: "packs", target: 12, fortressXP: 35 },
    { id: "fm18", name: "Deus da Guerra",        desc: "Vença 40 batalhas clássicas", type: "wins", target: 40, fortressXP: 32 },
    { id: "fm19", name: "Guerra Sem Fim",        desc: "Participe de 50 batalhas",    type: "battles", target: 50, fortressXP: 28 },
    { id: "fm20", name: "Colecionador Supremo",  desc: "Abra 15 pacotes",             type: "packs", target: 15, fortressXP: 45 },

    // ── MISSÕES LENDÁRIAS (fm21-fm25) ──
    { id: "fm21", name: "Guerreiro Imortal",     desc: "Vença 50 batalhas clássicas", type: "wins", target: 50, fortressXP: 40 },
    { id: "fm22", name: "Batalhador Infinito",   desc: "Participe de 60 batalhas",    type: "battles", target: 60, fortressXP: 35 },
    { id: "fm23", name: "Mestre dos Pacotes II", desc: "Abra 20 pacotes",             type: "packs", target: 20, fortressXP: 55 },
    { id: "fm24", name: "Comandante Supremo",    desc: "Vença 60 batalhas clássicas", type: "wins", target: 60, fortressXP: 50 },
    { id: "fm25", name: "Senhor das Batalhas",   desc: "Participe de 75 batalhas",    type: "battles", target: 75, fortressXP: 45 },
  ];
},

  grantMissionReward(mission) {
    if (!mission || !mission.fortressXP) return null;
    const save = getOrCreateSave();
    const result = this.addXP(save, mission.fortressXP);
    writeSave(save);
    return result;
  },
};

// ══════════════════════════════════════════════════════════════
// INTEGRAÇÃO COM BATALHA – window (CORRIGIDO)
// ══════════════════════════════════════════════════════════════

if (typeof window !== 'undefined') {
  window.removeEventListener('cf:battle:end', window._fortalezaBattleListener);

  window._fortalezaBattleListener = function(e) {
    const detail = e.detail || {};
    if (detail.mode !== 'classic') return;
    const save = getOrCreateSave();
    let xpGain = 2; // base aumentada para 2
    if (detail.win) xpGain += 2; // vitória dá +2 (total 4)
    CF_Fortress.addXP(save, xpGain);
    writeSave(save);
  };

  window.addEventListener('cf:battle:end', window._fortalezaBattleListener);
}

// ══════════════════════════════════════════════════════════════
// INJEÇÃO DAS MISSÕES NO DAILY_MISSIONS
// ══════════════════════════════════════════════════════════════

if (typeof DAILY_MISSIONS !== 'undefined' && Array.isArray(DAILY_MISSIONS)) {
  const hasFortMissions = DAILY_MISSIONS.some(m => m.id && m.id.startsWith('fm'));
  if (!hasFortMissions) {
    const fortMissions = CF_Fortress.getMissions();
    const fullMissions = fortMissions.map(m => ({
      ...m,
      goldReward: 0,
      xpReward: 0,
      xppReward: 0,
    }));
    DAILY_MISSIONS.unshift(...fullMissions);
  }
}

// ══════════════════════════════════════════════════════════════
// BUGFIX: XP da Fortaleza por missões diárias nunca era concedido.
// A função CF_Fortress.grantMissionReward() existia, mas nada no jogo
// a chamava — o fluxo de "reivindicar missão" (fora destes arquivos)
// não sabe nada sobre o campo "fortressXP". Corrigido concedendo o XP
// automaticamente no exato momento em que uma missão com fortressXP
// vira "completed" pela primeira vez, dentro de updateMissionProgress
// (mesmo ponto onde o Battle Pass já faz sua própria integração).
// ══════════════════════════════════════════════════════════════
if (typeof updateMissionProgress === 'function') {
  const _origUpdateMissionProgress = updateMissionProgress;
  updateMissionProgress = function(save, type) {
    const fortMissionsOfType = (typeof DAILY_MISSIONS !== 'undefined')
      ? DAILY_MISSIONS.filter(m => m.type === type && m.fortressXP)
      : [];
    const wasCompletedBefore = {};
    fortMissionsOfType.forEach(m => {
      wasCompletedBefore[m.id] = !!getMissionProgress(save, m.id).completed;
    });

    _origUpdateMissionProgress(save, type);

    fortMissionsOfType.forEach(m => {
      const state = getMissionProgress(save, m.id);
      if (!wasCompletedBefore[m.id] && state.completed) {
        CF_Fortress.addXP(save, m.fortressXP);
        if (typeof writeSave === 'function') writeSave(save);
      }
    });
  };
}

// ══════════════════════════════════════════════════════════════
// SOBRESCREVE calcBattleRewards para aplicar bônus da fortaleza
// ══════════════════════════════════════════════════════════════

if (typeof calcBattleRewards === 'function') {
  const _origCalcBattleRewards = calcBattleRewards;
  calcBattleRewards = function(win, save) {
    const base = _origCalcBattleRewards(win, save);
    return CF_Fortress.applyBonuses(save, base);
  };
}

// ══════════════════════════════════════════════════════════════
// SOBRESCREVE getMaestriaBuff para incluir bônus de ATK da fortaleza
// ══════════════════════════════════════════════════════════════

if (typeof getMaestriaBuff === 'function') {
  const _origGetMaestriaBuff = getMaestriaBuff;
  getMaestriaBuff = function(save, cardId) {
    const base = _origGetMaestriaBuff(save, cardId);
    const fortBonus = 1 + CF_Fortress.getBonus(save, 'atk');
    return base * fortBonus;
  };
}

// ══════════════════════════════════════════════════════════════
// CONQUISTAS DA FORTALEZA
// ══════════════════════════════════════════════════════════════

if (typeof SECRET_ACHIEVEMENTS !== 'undefined') {
  // Remove duplicatas antes de adicionar
  const existingIds = SECRET_ACHIEVEMENTS.map(a => a.id);
  const newAchievements = [
    { id: "ach_fortaleza_5",  label: "Guarda da Fortaleza", emoji: "🏰", desc: "Fortaleza nível 5", req: 5, field: "fortalezaLevel" },
    { id: "ach_fortaleza_10", label: "Senhor da Fortaleza", emoji: "⚔️", desc: "Fortaleza nível 10", req: 10, field: "fortalezaLevel" },
    { id: "ach_fortaleza_15", label: "Lorde da Fortaleza", emoji: "👑", desc: "Fortaleza nível 15", req: 15, field: "fortalezaLevel" },
    { id: "ach_fortaleza_20", label: "Mestre Supremo da Fortaleza", emoji: "🌟", desc: "Fortaleza nível MÁXIMO (20)", req: 20, field: "fortalezaLevel" },
  ];
  newAchievements.forEach(ach => {
    if (!existingIds.includes(ach.id)) {
      SECRET_ACHIEVEMENTS.push(ach);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// GARANTE CAMPOS NO SAVE
// ══════════════════════════════════════════════════════════════

function ensureFortalezaFields(save) {
  if (!save.fortaleza) {
    save.fortaleza = { level: 1, xp: 0, lastDailyCard: "" };
  }
  if (typeof save.fortaleza.level !== 'number') save.fortaleza.level = 1;
  if (typeof save.fortaleza.xp !== 'number') save.fortaleza.xp = 0;
  if (!save.fortaleza.lastDailyCard) save.fortaleza.lastDailyCard = "";
  return save;
}

if (typeof getOrCreateSave === 'function') {
  const _origGetOrCreateSave = getOrCreateSave;
  getOrCreateSave = function() {
    const save = _origGetOrCreateSave();
    return ensureFortalezaFields(save);
  };
}

console.log("[Card Fight] Fortaleza v2.2 carregada – progressão equilibrada! 🏰");
console.log("[Fortaleza] XP por nível reduzido ~40%, missões agora dão 3-8 XP.");
console.log("[Fortaleza] FIX v2.2: XP de missões diárias (fortressXP) agora concedido corretamente.");