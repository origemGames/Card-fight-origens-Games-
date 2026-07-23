// ═══════════════════════════════════════════════════════════════════════
// GAMEDATA-POWERUPS.JS — Patch reconstruído (Caralhooo perdeu o original)
// Catálogo de power-ups + uso pelo jogador + IA de uso pelo bot.
// Consumido por: battle.html, power.html, shop.html
// ═══════════════════════════════════════════════════════════════════════
"use strict";

const POWERUPS = [
  // ── COMUNS ──
  {
    id: "pu_impulso", name: "Impulso de Força", emoji: "💪", rarity: "COMMON",
    desc: "Aumenta o ATK da sua carta em +30% neste turno.",
    flavor: "Um empurrão que vem na hora certa.",
    shopCost: 1200,
    effect: { type: "atk_mult", value: 1.30 },
  },
  {
    id: "pu_cura", name: "Poção de Cura", emoji: "💊", rarity: "COMMON",
    desc: "Recupera 100HP da sua torre imediatamente.",
    flavor: "Cheira mal, mas funciona.",
    shopCost: 1000,
    effect: { type: "heal", value: 100 },
  },
  {
    id: "pu_escudo", name: "Escudo Rúnico", emoji: "🛡️", rarity: "COMMON",
    desc: "Bloqueia 35% do dano recebido neste turno, se perder o confronto.",
    flavor: "Runas antigas, proteção real.",
    shopCost: 1300,
    effect: { type: "shield_pct", value: 0.35 },
  },

  // ── RAROS ──
  {
    id: "pu_dado", name: "Dado do Caos", emoji: "🎲", rarity: "RARE",
    desc: "Efeito aleatório: +25% ATK, +100HP, -30% ATK inimigo, ou os três combinados.",
    flavor: "A sorte favoreia os ousados.",
    shopCost: 2800,
    effect: { type: "random" },
  },
  {
    id: "pu_roubo", name: "Roubo de Força", emoji: "🕶️", rarity: "RARE",
    desc: "Se o ATK do inimigo for maior, sua carta usa o ATK dele neste confronto.",
    flavor: "O que é seu, é meu.",
    shopCost: 3000,
    effect: { type: "steal_atk" },
  },
  {
    id: "pu_gelo", name: "Cristal de Gelo", emoji: "❄️", rarity: "RARE",
    desc: "Força o bot a jogar uma carta aleatória neste turno, ignorando a estratégia dele.",
    flavor: "Congela até a inteligência artificial.",
    shopCost: 2600,
    effect: { type: "freeze_bot_best" },
  },

  // ── ÉPICOS ──
  {
    id: "pu_berserker", name: "Fúria Berserker", emoji: "😡", rarity: "EPIC",
    desc: "+50% ATK e +40% de dano causado neste turno, se vencer o confronto.",
    flavor: "Não há estratégia, só fúria.",
    shopCost: 5200,
    effect: { type: "berserker", atkMult: 1.50, dmgMult: 1.40 },
  },
  {
    id: "pu_duplo", name: "Golpe Duplo", emoji: "⚔️", rarity: "EPIC",
    desc: "Causa dano bônus extra à torre inimiga igual a 40% do seu ATK, vencendo ou perdendo.",
    flavor: "Um golpe nunca é suficiente.",
    shopCost: 4800,
    effect: { type: "double_strike", value: 0.40 },
  },
];
window.POWERUPS = POWERUPS;

// ─── LOOKUP ──────────────────────────────────────────────────────────────
window.getPowerupById = function (id) {
  return POWERUPS.find((p) => p.id === id) || null;
};

// ─── USO PELO JOGADOR ────────────────────────────────────────────────────
// Consome 1 unidade do inventário do jogador e retorna o efeito para o
// battle.html aplicar no confronto atual.
window.usePowerup = function (save, puId) {
  const pu = getPowerupById(puId);
  if (!pu) return { ok: false, reason: "Power-up inválido." };

  if (!save.powerups) save.powerups = {};
  const owned = save.powerups[puId] || 0;
  if (owned < 1) return { ok: false, reason: "Você não tem esse power-up." };

  save.powerups[puId] = owned - 1;
  return { ok: true, effect: pu.effect };
};

// ─── INVENTÁRIO ALEATÓRIO DO BOT ─────────────────────────────────────────
// Dá ao bot um pequeno estoque de power-ups no início da batalha, para
// que ele possa usá-los durante o combate (chamado em battle.html).
window.makeBotPowerups = function () {
  const inv = {};
  // Sorteia entre 1 e 2 tipos diferentes de power-up para o bot ter na mão
  const poolSize = 1 + (Math.random() < 0.5 ? 1 : 0);
  const shuffled = [...POWERUPS].sort(() => Math.random() - 0.5);
  for (let i = 0; i < poolSize; i++) {
    const pu = shuffled[i];
    if (!pu) continue;
    inv[pu.id] = 1;
  }
  return inv;
};

// ─── IA DE USO DE POWER-UP DO BOT ────────────────────────────────────────
// Chamado a cada turno do bot. Decide, de forma probabilística, se o bot
// usa um power-up aleatório do estoque dele neste turno específico.
// v1.0: ~28% de chance por turno de o bot usar 1 power-up aleatório,
// desde que ainda tenha algum disponível no inventário.
window.botPickPowerup = function (botPowerups) {
  if (!botPowerups) return null;

  const available = Object.entries(botPowerups).filter(([, cnt]) => cnt > 0);
  if (available.length === 0) return null;

  // Chance do bot decidir usar um power-up neste turno (rodada aleatória)
  const USE_CHANCE = 0.28;
  if (Math.random() >= USE_CHANCE) return null;

  const [id] = available[Math.floor(Math.random() * available.length)];
  const pu = getPowerupById(id);
  if (!pu) return null;

  botPowerups[id] = (botPowerups[id] || 1) - 1;
  return pu;
};

console.log("[Patch] gamedata-powerups.js reconstruído carregado (catálogo + IA de uso pelo bot).");
