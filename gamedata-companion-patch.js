/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-companion-patch.js – v1.0
   FIX: Bônus de Companheiro (companheiros.html) eram 100% decorativos.
   battle.html já chamava getCompanionAtkMult() e
   applyCompanionRewardBuffs(), mas nenhuma das duas existia em
   lugar nenhum — o typeof-check silenciosamente caía no fallback
   (multiplicador 1 / rewards sem alteração), então ouro, XP e ATK
   dos companheiros nunca eram aplicados em combate.

   Este patch recria a tabela COMPANIONS (mesma fonte de dados de
   companheiros.html) e implementa as duas funções que faltavam,
   de forma independente — não depende de companheiros.html ter
   sido aberto antes, funciona direto a partir do save.
   ============================================================ */

"use strict";

// ══════════════════════════════════════════════════════════════
// TABELA DE COMPANHEIROS (espelha companheiros.html)
// ══════════════════════════════════════════════════════════════
const COMPANION_PATCH_DATA = [
  { id:"c_slime",   buffs:["+1% ouro"] },
  { id:"c_bat",     buffs:["+1% XP"] },
  { id:"c_fox",     buffs:["+2% ouro", "+1% XP"] },
  { id:"c_owl",     buffs:["+2% XP", "+1% XPP"] },
  { id:"c_wolf",    buffs:["+3% ouro", "+2% XP"] },
  { id:"c_dragon",  buffs:["+3% ouro", "+1% ATK"] },
  { id:"c_phoenix", buffs:["+5% ouro", "+3% XP", "+2% XPP"] },
  { id:"c_unicorn", buffs:["+5% ouro", "+5% XP"] },
  { id:"c_titan",   buffs:["+10% ouro", "+5% XP", "+3% XPP", "+2% ATK"] },
  { id:"c_cosmos",  buffs:["+10% ouro", "+8% XP", "+5% XPP"] },
];

// Se companheiros.html já rodou nesta página (não roda, mas por segurança
// caso algum dia sejam mescladas), preferimos a tabela real dele.
function _companionTable() {
  return (typeof COMPANIONS !== "undefined" && Array.isArray(COMPANIONS))
    ? COMPANIONS
    : COMPANION_PATCH_DATA;
}

// Mesma fórmula de escala por nível usada em companheiros.html:
// getBuffsAtLevel — cada nível multiplica o valor-base em +40%.
function _companionParsedBuffsAtLevel(comp, level) {
  const lvl = level || 1;
  return comp.buffs.map(b => {
    const m = b.match(/([+-]?\d+(?:\.\d+)?)%\s*(ouro|xp|xpp|atk)/i);
    if (!m) return null;
    const base = parseFloat(m[1]);
    const scaled = base * (1 + (lvl - 1) * 0.4);
    return { stat: m[2].toLowerCase(), pct: scaled };
  }).filter(Boolean);
}

function _activeCompanionBuffs(save) {
  if (!save || !save.activeCompanion || !Array.isArray(save.companions)) return [];
  const comp = _companionTable().find(c => c.id === save.activeCompanion);
  const entry = save.companions.find(c => c.id === save.activeCompanion);
  if (!comp || !entry) return [];
  return _companionParsedBuffsAtLevel(comp, entry.level || 1);
}

// ══════════════════════════════════════════════════════════════
// getCompanionAtkMult — multiplicador de ATK do companheiro equipado
// (battle.html já chama isso ao montar a mão do jogador)
// ══════════════════════════════════════════════════════════════
function getCompanionAtkMult(save) {
  const buffs = _activeCompanionBuffs(save);
  const atkBuff = buffs.find(b => b.stat === "atk");
  return atkBuff ? 1 + (atkBuff.pct / 100) : 1;
}
window.getCompanionAtkMult = getCompanionAtkMult;

// ══════════════════════════════════════════════════════════════
// applyCompanionRewardBuffs — aplica +% ouro/XP/XPP do companheiro
// equipado sobre as recompensas de batalha (battle.html já chama
// isso em endBattle, depois de calcBattleRewards)
// ══════════════════════════════════════════════════════════════
function applyCompanionRewardBuffs(save, rewards) {
  const buffs = _activeCompanionBuffs(save);
  if (buffs.length === 0) return rewards;

  const bonusGold = buffs.filter(b => b.stat === "ouro").reduce((s, b) => s + b.pct, 0);
  const bonusXP   = buffs.filter(b => b.stat === "xp").reduce((s, b) => s + b.pct, 0);
  const bonusXPP  = buffs.filter(b => b.stat === "xpp").reduce((s, b) => s + b.pct, 0);

  return {
    ...rewards,
    gold: Math.round((rewards.gold || 0) * (1 + bonusGold / 100)),
    xp:   Math.round((rewards.xp   || 0) * (1 + bonusXP   / 100)),
    xpp:  Math.round((rewards.xpp  || 0) * (1 + bonusXPP  / 100)),
  };
}
window.applyCompanionRewardBuffs = applyCompanionRewardBuffs;

console.log("[Companion Patch v1.0] Carregado: buffs de companheiro agora aplicam de verdade em combate (ATK/ouro/XP/XPP).");
