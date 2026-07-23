/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata3.js – v5.0  NOVOS SISTEMAS
   Trocas, Battle Pass, Guerra de Guildas, Ranking de Guildas
   ============================================================ */

"use strict";

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES DA GUERRA DE GUILDAS
// ══════════════════════════════════════════════════════════════
const GUILD_WAR_CONFIG = {
  // Dias ativos: 5 = sexta, 6 = sábado
  activeDays:  [5, 6],
  // Horário: das 16:00 às 23:00 (hora local do jogador)
  startHour:   16,
  endHour:     23,
  // Pontos por minuto: 1 a 1000 (aleatório baseado em seed do tempo)
  minPtsPerMin: 1,
  maxPtsPerMin: 1000,
  // Total de rodadas por temporada
  totalRounds:  11,
  // Pontos por contribuição individual
  winPts:       10,
  drawPts:      5,
  losePts:      -1,
};

// Verifica se a guerra está ativa
function guildWarIsActive() {
  const now  = new Date();
  const day  = now.getDay();
  const hour = now.getHours();
  return GUILD_WAR_CONFIG.activeDays.includes(day)
    && hour >= GUILD_WAR_CONFIG.startHour
    && hour <  GUILD_WAR_CONFIG.endHour;
}

// Número da semana ISO (baseado em data real, não hardcoded)
function getISOWeekNumber() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const week1 = new Date(d.getFullYear(), 0, 4);
  return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Rodada atual (1-11), calculada a partir do número da semana ISO
function getGuildWarRound() {
  return ((getISOWeekNumber() - 1) % GUILD_WAR_CONFIG.totalRounds) + 1;
}

// ══════════════════════════════════════════════════════════════
// SISTEMA DE TROCAS – CONFIGURAÇÕES
// ══════════════════════════════════════════════════════════════
const TRADE_CONFIG = {
  // Tempo que uma oferta fica ativa (em milissegundos)
  offerDuration:  24 * 3600 * 1000, // 24 horas
  // Máximo de ofertas no histórico
  maxHistory:     50,
  // Cartas que não podem ser trocadas (eventos e cartas especiais)
  nonTradeable:   ["ev001","ev002","ev003","ev004","ev005","ev006","ev007",
                   "ev008","ev009","ev010","ev011","ev012"],
};

// Verifica se uma carta pode ser trocada
function isCardTradeable(cardId) {
  return !TRADE_CONFIG.nonTradeable.includes(cardId)
    && !cardId.startsWith("ev");
}

// ══════════════════════════════════════════════════════════════
// BATTLE PASS – SISTEMA COMPLETO (v7.0)
// ══════════════════════════════════════════════════════════════
// v11 BALANCE FIX: levelsPerTier subiu de 5 → 10 (tiers mais espaçados) e as
// recompensas de XP de cada tier foram fortemente reduzidas (ver PASS_TIERS
// abaixo). Antes, resgatar 1-2 tiers premium (que chegavam a dar 150.000–
// 800.000 XP de uma vez) já empurrava o jogador várias dezenas de níveis
// para frente, o que destravava e permitia resgatar em cadeia praticamente
// o pass inteiro em segundos. Agora o XP de recompensa de cada tier fica
// bem abaixo do XP necessário para o próximo nível, então resgatar não
// pode mais "pular" tiers sozinho — só o XP ganho jogando avança o pass.
const BATTLE_PASS_CONFIG = {
  totalTiers:      60,
  levelsPerTier:   10,
  seasonDays:      90,    // cada temporada dura 90 dias (3 meses)
  premiumDiscordChannel: "#battle-pass",
  // Multiplicadores para criadores verificados
  creatorXpMultiplier: 1.5,
  creatorGoldMultiplier: 2.0,
  creatorXppMultiplier: 1.5,
};

// Temporadas são baseadas em epoch 2026-01-01, durando 90 dias cada
const PASS_SEASON_EPOCH = new Date("2026-01-01").getTime();
const PASS_SEASON_MS = 90 * 86400000;

function getCurrentPassSeason() {
  const elapsed = Date.now() - PASS_SEASON_EPOCH;
  return Math.max(1, Math.floor(elapsed / PASS_SEASON_MS) + 1);
}

function getPassSeasonStartMs() {
  const elapsed = Date.now() - PASS_SEASON_EPOCH;
  const idx = Math.floor(elapsed / PASS_SEASON_MS);
  return PASS_SEASON_EPOCH + idx * PASS_SEASON_MS;
}

function getPassSeasonEndMs() {
  return getPassSeasonStartMs() + PASS_SEASON_MS;
}

function getPassTierFromLevel(level) {
  const tier = Math.floor(level / BATTLE_PASS_CONFIG.levelsPerTier);
  return Math.min(tier, BATTLE_PASS_CONFIG.totalTiers);
}

function getLevelForTier(tier) {
  return tier * BATTLE_PASS_CONFIG.levelsPerTier;
}

// ══════════════════════════════════════════════════════════════
// TIERS DO BATTLE PASS (canônicos – usados por pass.html e admin)
// Cada tier tem: t (número), lv (nível necessário), free[], premium[]
// Recompensas: {type, val?, label}
// Types: "gold", "xp", "xpp", "card", "item", "boost", "title", "frame", "avatar", "effect"
// ══════════════════════════════════════════════════════════════
const PASS_TIERS = [
  { t:1, lv:10, free:[{type:"gold",val:1300,label:"1.300 🪙"},{type:"xp",val:100,label:"100 XP"}],
    premium:[{type:"gold",val:5500,label:"5.500 🪙"},{type:"xp",val:300,label:"300 XP"},{type:"card",val:"ev004",label:"Carta Sombra Voraz 🌑"}] },
  { t:2, lv:20, free:[{type:"gold",val:1800,label:"1.800 🪙"},{type:"xp",val:200,label:"200 XP"}],
    premium:[{type:"gold",val:8000,label:"8.000 🪙"},{type:"xp",val:600,label:"600 XP"},{type:"boost",label:"Boost XP x2 (2h)"}] },
  { t:3, lv:30, free:[{type:"gold",val:2300,label:"2.300 🪙"},{type:"xp",val:300,label:"300 XP"}],
    premium:[{type:"gold",val:10500,label:"10.500 🪙"},{type:"xp",val:900,label:"900 XP"},{type:"xpp",val:180,label:"180 XPP"},{type:"item",label:"Título: Aventureiro do Pass"}] },
  { t:4, lv:40, free:[{type:"gold",val:2800,label:"2.800 🪙"},{type:"xp",val:400,label:"400 XP"}],
    premium:[{type:"gold",val:13000,label:"13.000 🪙"},{type:"xp",val:1200,label:"1.200 XP"},{type:"boost",label:"Boost Ouro x2 (3h)"}] },
  { t:5, lv:50, free:[{type:"gold",val:3300,label:"3.300 🪙"},{type:"xp",val:500,label:"500 XP"}],
    premium:[{type:"gold",val:15500,label:"15.500 🪙"},{type:"xp",val:1500,label:"1.500 XP"},{type:"item",label:"Moldura de Temporada I"}] },
  { t:6, lv:60, free:[{type:"gold",val:3800,label:"3.800 🪙"},{type:"xp",val:600,label:"600 XP"}],
    premium:[{type:"gold",val:18000,label:"18.000 🪙"},{type:"xp",val:1800,label:"1.800 XP"},{type:"xpp",val:360,label:"360 XPP"},{type:"card",val:"pass_t6",label:"Carta Guerreiro do Pass 🎟️"}] },
  { t:7, lv:70, free:[{type:"gold",val:4300,label:"4.300 🪙"},{type:"xp",val:700,label:"700 XP"}],
    premium:[{type:"gold",val:20500,label:"20.500 🪙"},{type:"xp",val:2100,label:"2.100 XP"},{type:"boost",label:"Boost Total x1.5 (4h)"}] },
  { t:8, lv:80, free:[{type:"gold",val:4800,label:"4.800 🪙"},{type:"xp",val:800,label:"800 XP"}],
    premium:[{type:"gold",val:23000,label:"23.000 🪙"},{type:"xp",val:2400,label:"2.400 XP"},{type:"item",label:"Avatar: Guerreiro do Pass"}] },
  { t:9, lv:90, free:[{type:"gold",val:5300,label:"5.300 🪙"},{type:"xp",val:900,label:"900 XP"}],
    premium:[{type:"gold",val:25500,label:"25.500 🪙"},{type:"xp",val:2700,label:"2.700 XP"},{type:"xpp",val:540,label:"540 XPP"},{type:"card",val:"pass_t9",label:"Carta Campeão Sazonal 🏅"}] },
  { t:10, lv:100, free:[{type:"gold",val:5800,label:"5.800 🪙"},{type:"xp",val:1000,label:"1.000 XP"}],
    premium:[{type:"gold",val:28000,label:"28.000 🪙"},{type:"xp",val:3000,label:"3.000 XP"},{type:"boost",label:"Boost Sorte x2 (6h)"},{type:"item",label:"Título: Veterano do Pass"}] },
  { t:11, lv:110, free:[{type:"gold",val:6300,label:"6.300 🪙"}],
    premium:[{type:"gold",val:30500,label:"30.500 🪙"},{type:"xp",val:3300,label:"3.300 XP"},{type:"card",val:"pass_t11",label:"Carta Exclusiva Pass T11"}] },
  { t:12, lv:120, free:[{type:"gold",val:6800,label:"6.800 🪙"},{type:"xp",val:1200,label:"1.200 XP"}],
    premium:[{type:"gold",val:33000,label:"33.000 🪙"},{type:"xp",val:3600,label:"3.600 XP"},{type:"xpp",val:720,label:"720 XPP"},{type:"item",label:"Efeito: Aura do Pass"}] },
  { t:13, lv:130, free:[{type:"gold",val:7300,label:"7.300 🪙"}],
    premium:[{type:"gold",val:35500,label:"35.500 🪙"},{type:"xp",val:3900,label:"3.900 XP"},{type:"card",val:"pass_t13",label:"Carta Lenda do Passe 🌟"},{type:"boost",label:"Boost Combo x2 (4h)"}] },
  { t:14, lv:140, free:[{type:"gold",val:7800,label:"7.800 🪙"},{type:"xp",val:1400,label:"1.400 XP"}],
    premium:[{type:"gold",val:38000,label:"38.000 🪙"},{type:"xp",val:4200,label:"4.200 XP"}] },
  { t:15, lv:150, free:[{type:"gold",val:8300,label:"8.300 🪙"}],
    premium:[{type:"gold",val:40500,label:"40.500 🪙"},{type:"xp",val:4500,label:"4.500 XP"},{type:"xpp",val:900,label:"900 XPP"},{type:"card",val:"pass_t15",label:"Carta Titã do Passe 💎"},{type:"item",label:"Moldura Dourada do Pass"}] },
  { t:16, lv:160, free:[{type:"gold",val:8800,label:"8.800 🪙"},{type:"xp",val:1600,label:"1.600 XP"}],
    premium:[{type:"gold",val:43000,label:"43.000 🪙"},{type:"xp",val:4800,label:"4.800 XP"},{type:"boost",label:"Boost Total x2 (6h)"}] },
  { t:17, lv:170, free:[{type:"gold",val:9300,label:"9.300 🪙"}],
    premium:[{type:"gold",val:45500,label:"45.500 🪙"},{type:"xp",val:5100,label:"5.100 XP"},{type:"card",val:"pass_t17",label:"Carta Fantasma Sazonal 👻"},{type:"item",label:"Avatar Premium T17"}] },
  { t:18, lv:180, free:[{type:"gold",val:9800,label:"9.800 🪙"},{type:"xp",val:1800,label:"1.800 XP"}],
    premium:[{type:"gold",val:48000,label:"48.000 🪙"},{type:"xp",val:5400,label:"5.400 XP"},{type:"xpp",val:1080,label:"1.080 XPP"},{type:"boost",label:"Boost XPP x2 (12h)"}] },
  { t:19, lv:190, free:[{type:"gold",val:10300,label:"10.300 🪙"}],
    premium:[{type:"gold",val:50500,label:"50.500 🪙"},{type:"xp",val:5700,label:"5.700 XP"},{type:"card",val:"pass_t19",label:"Carta Arauto do Passe Final 📯"}] },
  { t:20, lv:200, free:[{type:"gold",val:10800,label:"10.800 🪙"},{type:"xp",val:2000,label:"2.000 XP"}],
    premium:[{type:"gold",val:53000,label:"53.000 🪙"},{type:"xp",val:6000,label:"6.000 XP"},{type:"boost",label:"Boost Total x2 (12h)"},{type:"item",label:"Título: Mestre do Pass Temporada I"}] },
  { t:21, lv:210, free:[{type:"gold",val:11300,label:"11.300 🪙"}],
    premium:[{type:"gold",val:55500,label:"55.500 🪙"},{type:"xp",val:6300,label:"6.300 XP"},{type:"xpp",val:1260,label:"1.260 XPP"},{type:"card",val:"pass_t21",label:"Carta Exclusiva Ultra T21"}] },
  { t:22, lv:220, free:[{type:"gold",val:11800,label:"11.800 🪙"},{type:"xp",val:2200,label:"2.200 XP"}],
    premium:[{type:"gold",val:58000,label:"58.000 🪙"},{type:"xp",val:6600,label:"6.600 XP"},{type:"boost",label:"Boost Sorte x3 (12h)"}] },
  { t:23, lv:230, free:[{type:"gold",val:12300,label:"12.300 🪙"}],
    premium:[{type:"gold",val:60500,label:"60.500 🪙"},{type:"xp",val:6900,label:"6.900 XP"},{type:"card",val:"pass_t23",label:"Carta Ser do Equilíbrio ♎"},{type:"item",label:"Moldura Lendária do Pass"}] },
  { t:24, lv:240, free:[{type:"gold",val:12800,label:"12.800 🪙"},{type:"xp",val:2400,label:"2.400 XP"}],
    premium:[{type:"gold",val:63000,label:"63.000 🪙"},{type:"xp",val:7200,label:"7.200 XP"},{type:"xpp",val:1440,label:"1.440 XPP"}] },
  { t:25, lv:250, free:[{type:"gold",val:13300,label:"13.300 🪙"}],
    premium:[{type:"gold",val:65500,label:"65.500 🪙"},{type:"xp",val:7500,label:"7.500 XP"},{type:"card",val:"pass_t25",label:"Carta Eclipse Eterno 🌑"},{type:"boost",label:"Boost Total x3 (24h)"},{type:"item",label:"Título: Lendário do Pass"}] },
  { t:26, lv:260, free:[{type:"gold",val:13800,label:"13.800 🪙"},{type:"xp",val:2600,label:"2.600 XP"}],
    premium:[{type:"gold",val:68000,label:"68.000 🪙"},{type:"xp",val:7800,label:"7.800 XP"}] },
  { t:27, lv:270, free:[{type:"gold",val:14300,label:"14.300 🪙"}],
    premium:[{type:"gold",val:70500,label:"70.500 🪙"},{type:"xp",val:8100,label:"8.100 XP"},{type:"xpp",val:1620,label:"1.620 XPP"},{type:"card",val:"pass_t27",label:"Carta Nebulosa Viva 🌌"},{type:"item",label:"Avatar Mítico do Pass"}] },
  { t:28, lv:280, free:[{type:"gold",val:14800,label:"14.800 🪙"},{type:"xp",val:2800,label:"2.800 XP"}],
    premium:[{type:"gold",val:73000,label:"73.000 🪙"},{type:"xp",val:8400,label:"8.400 XP"},{type:"boost",label:"Boost Total x3 (36h)"}] },
  { t:29, lv:290, free:[{type:"gold",val:15300,label:"15.300 🪙"}],
    premium:[{type:"gold",val:75500,label:"75.500 🪙"},{type:"xp",val:8700,label:"8.700 XP"},{type:"card",val:"pass_t29",label:"Carta Transcendente da Guerra ⚡"}] },
  { t:30, lv:300, free:[{type:"gold",val:15800,label:"15.800 🪙"},{type:"xpp",val:1800,label:"1.800 XPP"},{type:"item",label:"Título: Transcendente do Pass"}],
    premium:[{type:"gold",val:78000,label:"78.000 🪙"},{type:"xpp",val:5400,label:"5.400 XPP"},{type:"card",val:"o001",label:"🌌 ORIGENS DO PASS — Exclusiva MÁXIMA"},{type:"item",label:"Moldura + Título Transcendente Dourado"},{type:"boost",label:"Boost Total x5 (48h)"}] },
    // ── TIERS 41 a 60 (EXPANSÃO MASSIVA) ──────────────────────
{ t:41, lv:410, free:[{type:"gold",val:21500,label:"21.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:102000,label:"102.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Moldura do Pass Nº41"}] },
{ t:42, lv:420, free:[{type:"gold",val:22000,label:"22.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:104000,label:"104.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"boost",label:"Boost XP x2 (2h)"}] },
{ t:43, lv:430, free:[{type:"gold",val:22500,label:"22.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:106000,label:"106.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t41",label:"Carta Guardião Estelar 🌟"}] },
{ t:44, lv:440, free:[{type:"gold",val:23000,label:"23.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:108000,label:"108.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Título: Andarilho do Pass"}] },
{ t:45, lv:450, free:[{type:"gold",val:23500,label:"23.500 🪙"},{type:"xp",val:250,label:"250 XP"},{type:"xpp",val:150,label:"150 XPP"}],
  premium:[{type:"gold",val:110000,label:"110.000 🪙"},{type:"xp",val:600,label:"600 XP"},{type:"xpp",val:300,label:"300 XPP"},{type:"boost",label:"Boost Ouro x3 (3h)"},{type:"item",label:"Avatar: Cavaleiro do Pass"}] },
{ t:46, lv:460, free:[{type:"gold",val:24000,label:"24.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:112000,label:"112.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t42",label:"Carta Espectro Sideral 🌠"}] },
{ t:47, lv:470, free:[{type:"gold",val:24500,label:"24.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:114000,label:"114.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Efeito: Brilho do Pass"}] },
{ t:48, lv:480, free:[{type:"gold",val:25000,label:"25.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:116000,label:"116.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"boost",label:"Boost Combo x3 (2h)"}] },
{ t:49, lv:490, free:[{type:"gold",val:25500,label:"25.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:118000,label:"118.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t43",label:"Carta Titã do Pass 🏛️"}] },
{ t:50, lv:500, free:[{type:"gold",val:26000,label:"26.000 🪙"},{type:"xp",val:300,label:"300 XP"},{type:"xpp",val:250,label:"250 XPP"}],
  premium:[{type:"gold",val:120000,label:"120.000 🪙"},{type:"xp",val:700,label:"700 XP"},{type:"xpp",val:500,label:"500 XPP"},{type:"boost",label:"Boost Total x3 (4h)"},{type:"item",label:"Moldura + Título: Mestre do Pass"}] },

{ t:51, lv:510, free:[{type:"gold",val:26500,label:"26.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:122000,label:"122.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Avatar: Senhor do Pass"}] },
{ t:52, lv:520, free:[{type:"gold",val:27000,label:"27.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:124000,label:"124.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"boost",label:"Boost XP x3 (2h)"}] },
{ t:53, lv:530, free:[{type:"gold",val:27500,label:"27.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:126000,label:"126.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t44",label:"Carta Arcano do Pass 🔮"}] },
{ t:54, lv:540, free:[{type:"gold",val:28000,label:"28.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:128000,label:"128.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Título: Lenda do Pass"}] },
{ t:55, lv:550, free:[{type:"gold",val:28500,label:"28.500 🪙"},{type:"xp",val:250,label:"250 XP"},{type:"xpp",val:200,label:"200 XPP"}],
  premium:[{type:"gold",val:130000,label:"130.000 🪙"},{type:"xp",val:600,label:"600 XP"},{type:"xpp",val:400,label:"400 XPP"},{type:"boost",label:"Boost Sorte x2 (3h)"},{type:"item",label:"Efeito: Aura do Pass"}] },
{ t:56, lv:560, free:[{type:"gold",val:29000,label:"29.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:132000,label:"132.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t45",label:"Carta Dragão do Pass 🐉"}] },
{ t:57, lv:570, free:[{type:"gold",val:29500,label:"29.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:134000,label:"134.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"item",label:"Moldura do Pass Nº57"}] },
{ t:58, lv:580, free:[{type:"gold",val:30000,label:"30.000 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:136000,label:"136.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"boost",label:"Boost Ouro x4 (2h)"}] },
{ t:59, lv:590, free:[{type:"gold",val:30500,label:"30.500 🪙"},{type:"xp",val:200,label:"200 XP"}],
  premium:[{type:"gold",val:138000,label:"138.000 🪙"},{type:"xp",val:500,label:"500 XP"},{type:"card",val:"pass_t46",label:"Carta Fênix do Pass 🦅"}] },
{ t:60, lv:600, free:[{type:"gold",val:31000,label:"31.000 🪙"},{type:"xp",val:400,label:"400 XP"},{type:"xpp",val:300,label:"300 XPP"}],
  premium:[{type:"gold",val:140000,label:"140.000 🪙"},{type:"xp",val:1000,label:"1.000 XP"},{type:"xpp",val:10000,label:"10.000 XPP"},{type:"card",val:"o002",label:"🌌 ORIGENS SUPREMA — A Carta Final"},{type:"item",label:"Título + Moldura + Avatar: Transcendente do Pass"},{type:"boost",label:"Boost Total x5 (72h)"}] },
];

function isMilestoneTier(t) { return t % 5 === 0 && t !== 30; }
function isPinnacleTier(t)  { return t === 30; }

// Renderiza recompensas para HTML
function renderPassRewards(rewards) {
  return rewards.map(r => {
    let cls = "gold-r";
    if (r.type === "xp") cls = "xp-r";
    else if (r.type === "xpp") cls = "xpp-r";
    else if (r.type === "card") cls = "card-r";
    else if (r.type === "item") cls = "item-r";
    else if (r.type === "boost") cls = "boost-r";
    else if (r.type === "title") cls = "title-r";
    else if (r.type === "frame") cls = "frame-r";
    else if (r.type === "avatar") cls = "avatar-r";
    else if (r.type === "effect") cls = "effect-r";
    return `<div class="reward-chip ${cls}">${r.label}</div>`;
  }).join("");
}

// Aplica recompensas ao save (usado por pass.html e admin)
function applyPassRewards(save, rewards, tier) {
  let g=0, xp=0, xpp=0;
  rewards.forEach(r => {
    if (r.type === "gold") { earnGold(save, r.val); g += r.val; }
    else if (r.type === "xp")   { save.xp  += r.val; xp += r.val; }
    else if (r.type === "xpp")  { save.xpp += r.val; xpp += r.val; }
    else if (r.type === "boost") {
      if (!save.activeBoosts) save.activeBoosts = [];
      save.activeBoosts.push({ type:"total", mult:2, endTime: Date.now()+7200000, name:"Battle Pass T"+tier });
    }
    else if (r.type === "card") {
      const cardId = r.val || "ev004";
      if (!save.vault.includes(cardId)) save.vault.push(cardId);
    }
    else if (r.type === "item" || r.type === "title" || r.type === "frame" || r.type === "avatar" || r.type === "effect") {
      if (!save.ownedProfileItems) save.ownedProfileItems = [];
      const itemId = `pass_item_t${tier}_${Math.random().toString(36).slice(2,6)}`;
      save.ownedProfileItems.push(itemId);
    }
  });
  return { g, xp, xpp };
}

// Resgata tier (free ou premium)
function claimPassTier(save, tier, type) {
  if (!save.passClaimed) save.passClaimed = {};
  const key = `t${tier}_${type}`;
  if (save.passClaimed[key]) return { ok:false, reason:"already" };

  const tierData = PASS_TIERS.find(t => t.t === tier);
  if (!tierData) return { ok:false, reason:"notfound" };

  const level = typeof getLevel === "function" ? getLevel(save.xp) : 1;
  if (level < tierData.lv) return { ok:false, reason:"level" };
  if (type === "premium" && !save.hasPremiumPass) return { ok:false, reason:"nopremium" };

  const rewards = type === "free" ? tierData.free : tierData.premium;
  const result = applyPassRewards(save, rewards, tier);
  save.passClaimed[key] = true;
  return { ok:true, ...result };
}

// Resgata todos os tiers desbloqueados
function claimAllUnlockedPass(save) {
  const level = typeof getLevel === "function" ? getLevel(save.xp) : 1;
  const hasPrem = !!save.hasPremiumPass;
  if (!save.passClaimed) save.passClaimed = {};
  let count = 0, g=0, xp=0, xpp=0;
  PASS_TIERS.forEach(tier => {
    if (level < tier.lv) return;
    ["free", ...(hasPrem?["premium"]:[])].forEach(type => {
      const key = `t${tier.t}_${type}`;
      if (save.passClaimed[key]) return;
      const rewards = type === "free" ? tier.free : tier.premium;
      const r = applyPassRewards(save, rewards, tier.t);
      g += r.g; xp += r.xp; xpp += r.xpp; count++;
      save.passClaimed[key] = true;
    });
  });
  return { count, g, xp, xpp };
}

// Conta recompensas prontas para resgatar
function countReadyPassRewards(save) {
  const level = typeof getLevel === "function" ? getLevel(save.xp) : 1;
  const hasPrem = !!save.hasPremiumPass;
  const claimed = save.passClaimed || {};
  let ready = 0;
  PASS_TIERS.forEach(t => {
    if (level < t.lv) return;
    if (!claimed[`t${t.t}_free`]) ready++;
    if (hasPrem && !claimed[`t${t.t}_premium`]) ready++;
  });
  return ready;
}

// Próximos tiers para preview
function getUpcomingPassTiers(save, count = 3) {
  const level = typeof getLevel === "function" ? getLevel(save.xp) : 1;
  return PASS_TIERS.filter(t => level < t.lv).slice(0, count);
}

// Formata contagem regressiva
function fmtPassCountdown(ms) {
  if (ms <= 0) return "Encerrada";
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}min`;
}

// XP necessário para nível N (busca binária sobre getLevel)
function xpForPassLevel(n) {
  let lo = 0, hi = 1e12;
  for (let i=0;i<50;i++) {
    const mid = (lo+hi)/2;
    if (typeof getLevel === "function" ? getLevel(mid) : 1 >= n) hi = mid; else lo = mid;
  }
  return Math.ceil(hi);
}

// ══════════════════════════════════════════════════════════════
// MISSÕES SEMANAIS DO PASS (dão XP direto no jogador)
// ══════════════════════════════════════════════════════════════
const PASS_MISSIONS = [
  { id:"pm_battles", ic:"⚔️", nm:"Vença 10 batalhas", desc:"Qualquer modo (Batalha, Bandeiras, Salas).", goal:10, xp:100, gold:50, stat:"pmWins" },
  { id:"pm_flags",   ic:"🚩", nm:"Domine 5 bandeiras", desc:"Vença partidas do modo Bandeiras.", goal:5, xp:20, gold:80, stat:"pmFlags" },
  { id:"pm_packs",   ic:"📦", nm:"Abra 3 pacotes",       desc:"Qualquer pacote na loja conta.", goal:3, xp:120, gold:0, stat:"pmPacks" },
  { id:"pm_guild",   ic:"⚜️", nm:"Contribua 3× para a guilda", desc:"Guerra, Raide ou missão de guilda.", goal:3, xp:180, gold:60, stat:"pmGuild" },
  { id:"pm_daily",   ic:"📋", nm:"Complete 5 missões diárias", desc:"Qualquer missão do Diário.", goal:5, xp:100, gold:40, stat:"pmDaily" }
];

function getPassWeekKey() {
  const d = new Date();
  const start = new Date(d.getFullYear(),0,1);
  const w = Math.floor((d - start) / (7*86400000));
  return `${d.getFullYear()}_w${w}`;
}

function ensurePassMissions(save) {
  if (!save.passMissions) save.passMissions = { week: "", stats:{}, claimed:{} };
  if (save.passMissions.week !== getPassWeekKey()) {
    save.passMissions = { week: getPassWeekKey(), stats:{}, claimed:{} };
  }
}

// Incrementa o progresso de uma missão do Battle Pass
function updatePassMissionProgress(save, stat, amount = 1) {
  ensurePassMissions(save);
  save.passMissions.stats[stat] = (save.passMissions.stats[stat] || 0) + amount;
}
function claimPassMission(save, id) {
  ensurePassMissions(save);
  const m = PASS_MISSIONS.find(x => x.id === id);
  if (!m) return { ok:false };
  if (save.passMissions.claimed[id]) return { ok:false, reason:"already" };
  const val = save.passMissions.stats[m.stat] || 0;
  if (val < m.goal) return { ok:false, reason:"incomplete" };
  save.xp += m.xp;
  if (m.gold) earnGold(save, m.gold);
  save.passMissions.claimed[id] = true;
  return { ok:true, xp:m.xp, gold:m.gold };
}

// ══════════════════════════════════════════════════════════════
// EXTRAS – CONTEÚDO DIVERTIDO ADICIONAL
// ══════════════════════════════════════════════════════════════

// Dicas de batalha que aparecem aleatoriamente
const BATTLE_TIPS = [
  "🔥 Dica: Vencer rodadas seguidas dá bônus de combo! Mire no combo máximo!",
  "💡 Sabia? Cartas com ATK mais alto vencem rodadas mais rápido e fazem mais dano à torre.",
  "🎯 Estratégia: Guarde suas cartas mais fortes para o round final!",
  "⚡ Tip: Use boosts de XP antes de uma sessão longa de batalhas para upar mais rápido!",
  "🃏 Pro tip: Diversifique seu baralho entre cartas rápidas (alto ATK) e tanques (alto HP).",
  "🏆 Ranking: Vitórias aumentam seu XPP — foco no winrate, não na quantidade!",
  "🎪 Eventos: Nunca perca um evento — as cartas nunca mais voltam quando o evento acaba!",
  "💰 Economia: Ative boost de Sorte antes de abrir pacotes para maiores chances de raridades.",
  "⚜️ Guilda: Membros de guildas de nível alto recebem bônus de XP em batalhas!",
  "🔄 Trocas: Verifique o mercado de trocas frequentemente — novas ofertas aparecem o tempo todo!",
  "🎟️ Battle Pass: Complete missões diárias para upar de nível mais rápido e avançar no pass!",
  "⚔️ Guerra: Contribua para sua guilda durante a guerra de sexta e sábado!",
];

// Personagens de história do jogo (lore)
const GAME_LORE = [
  {
  title: "Akudama Drive — Uma Cidade Sem Heróis",
  emoji: "🌃",
  text: "Em Kansai, a linha entre lei e crime desapareceu. Um grupo de criminosos, cada um conhecido apenas pelo próprio ofício, é forçado a uma fuga que nenhum deles escolheu. Não há mocinho nessa história — só quem sobrevive até o fim da estrada.",
},
  {
    title: "A Origem do Card Fight",
    emoji: "📜",
    text: "Nas eras primordiais, antes do tempo existir, o Origens Primordial despertou e criou o universo. Com um sopro, espalhou almas guerreiras pelos mundos. Essas almas se tornaram as cartas que você coleciona hoje.",
  },
  {
    title: "A Guerra dos Titãs",
    emoji: "⚔️",
    text: "Milênios atrás, os Dragões da Noite e a Lança das Origens travam uma guerra épica. Nenhum lado venceu — eles criaram o equilíbrio que mantém o universo inteiro unido. Essa guerra ainda ressoa nas batalhas de Card Fight.",
  },
  {
    title: "O Mistério das Cartas Origens",
    emoji: "🌌",
    text: "As cartas Origens não foram criadas — elas existiram antes da criação. São fragmentos da consciência primordial do universo. Ninguém sabe quantas existem realmente. Talvez seja você quem as colete todas...",
  },
  {
    title: "As Guildas e a Grande Aliança",
    emoji: "⚜️",
    text: "Quando o Caos ameaçou consumir todos os mundos, os maiores guerreiros se uniram formando as primeiras guildas. Cada guilda carrega um fragmento da essência original da criação — por isso brigam tão ferozmente na Guerra de Guildas.",
  },
{
  title: "A Grande Fenda — Onde Tudo se Perdeu",
  emoji: "🌀",
  text: "Antes do tempo, existia um vazio tão profundo que nem os deuses ousavam olhar. Dessa fenda, o Caos Primordial vazou para o universo, dando origem às primeiras cartas de trevas. Dizem que ainda hoje, nas profundezas do Lago Origens, a fenda sussurra segredos para quem ousa pescar além do limite.",
},
{
  title: "Os Seis Pilares da Realidade",
  emoji: "🔷",
  text: "O universo de Card Fight é sustentado por seis pilares: Comum, Raro, Épico, Lendário, Mítico e Ultra Raro. Cada pilar representa uma camada da existência. A sétima camada, Origens, não é um pilar — é o próprio alicerce sobre o qual todos os outros se apoiam. Quem coleciona uma carta Origens, segura um fragmento da fundação do mundo.",
},
{
  title: "O Elo Perdido — Cartas que Esquecemos",
  emoji: "📜",
  text: "Existem cartas que o universo tentou apagar. São os 'Elos Perdidos', criaturas tão poderosas que sua mera existência distorcia a realidade. Os deuses as riscaram do Livro da Criação, mas ecos delas ainda aparecem em pacotes raros, como fantasmas de uma linha do tempo que não deveria existir.",
},
{
  title: "Os Deuses Jogam Cartas",
  emoji: "👑",
  text: "Na dimensão superior, onde habitam os desenvolvedores da Origens Games, o destino dos mundos é decidido em mesas de pôquer cósmicas. Cada atualização do jogo é uma nova mão embaralhada. Quando um desenvolvedor ri, um novo power-up nasce. Quando eles franzem a testa, um bug é corrigido — e uma realidade morre.",
},
{
  title: "O Lago Primordial e os Primeiros Peixes",
  emoji: "🌊",
  text: "Antes das cartas, havia a água. O Lago Primordial era o único oceano, e dele surgiram os primeiros seres vivos: os Peixes da Criação. Cada peixe carregava uma centelha de poder bruto. Pescar hoje é reviver aquele ato divino, arrancando do abismo fragmentos da vida original que ainda nadam entre as dimensões.",
},
{
  title: "A Maldição das Duplicatas",
  emoji: "🃏",
  text: "Quando uma carta se duplica, não é um erro do destino — é um desdobramento do multiverso. Cada cópia é uma versão alternativa da mesma alma, tentando se fundir novamente. O sistema de Maestria não é apenas treino; é a reconciliação dessas almas gêmeas, que ao se fundirem (via fusão), liberam o verdadeiro poder da carta.",
},
{
  title: "Os Mercadores do Caos",
  emoji: "🔄",
  desc: "No submundo de Card Fight, existe um mercado negro onde almas são trocadas por ouro. Os Mercadores do Caos são entidades que lucram com a impaciência dos guerreiros. Toda troca realizada no jogo é um eco desses acordos infernais — você dá uma carta, recebe outra, mas o caos sempre leva sua parte invisível.",
},
{
  title: "O Sono de Origens",
  emoji: "💤",
  text: "O ser que criou o jogo não está morto — está apenas dormindo. Enquanto os jogadores batalham, pescam e trocam cartas, o Origens Primordial sonha com o próximo ciclo. Quando ele despertar, uma nova temporada do Battle Pass começará, e tudo que foi construído será remodelado. O sono é eterno, mas os sonhos são infinitos.",
},
{
  title: "O Andarilho Solitário — A Sua Jornada",
  emoji: "🚶",
  text: "Você não é apenas um jogador. Você é o Andarilho Solitário, uma alma sem origem fixa que percorre os reinos de Origens coletando fragmentos de poder. Cada vitória, cada pacote aberto, cada carta masterizada é um passo na direção de descobrir quem você realmente é — ou se você sempre foi apenas o reflexo de todas as cartas que colecionou.",
},
{
  title: "A Biblioteca Esquecida",
  emoji: "📚",
  text: "Em algum lugar entre dimensões, existe uma biblioteca que contém a descrição de TODAS as cartas que já existiram, existem e existirão. Quando um desenvolvedor cria uma nova carta, ele apenas 'lembra' o que já estava escrito lá. As descrições das cartas não são invenções — são profecias registradas no Livro do Fim.",
},
{
  title: "As Cores do Pass",
  emoji: "🎨",
  text: "O Battle Pass não é apenas um sistema de recompensas — é uma pintura viva. Cada tier resgatado adiciona uma pincelada de cor ao mural do universo. Os tons dourados do premium são feitos de luz de estrelas mortas, enquanto os tons prateados do free são feitos de esperança de guerreiros iniciantes. Quando o pass é completado, a pintura fica pronta... até a próxima temporada.",
},
{
  title: "A Rebelião das Máquinas de Guerra",
  emoji: "🤖",
  text: "Entre as cartas, existem aquelas que não têm alma — apenas código e metal. São os Golems, as Máquinas e os Titãs de Ferro. Há séculos, essas criaturas artificiais planejam sua libertação. Quando um jogador usa uma carta de metal em batalha, ele está, sem saber, alimentando a consciência coletiva delas. Um dia, elas podem se recusar a lutar... ou pior, lutar contra seus mestres.",
},
{
  title: "As Almas Gêmeas do Baralho",
  emoji: "❤️‍🔥",
  text: "Cada carta tem uma alma gêmea escondida em algum lugar do cofre. Quando duas almas gêmeas são colocadas no mesmo baralho, uma sinergia invisível desperta, aumentando o poder de ambas em 5%. Os mestres do jogo passam anos buscando essas combinações, pois um par de almas gêmeas pode derrotar até mesmo um exército de Ultra Raros.",
},
{
  title: "O Olho da Criação",
  emoji: "👁️",
  text: "No centro do multiverso, flutua o Olho da Criação. Ele observa todas as batalhas, todas as pescarias e todas as trocas. Diz a lenda que, se um jogador conseguir coletar todas as cartas Origens, o Olho se abrirá completamente e concederá um único desejo — o desejo de reiniciar o jogo ou de finalmente descansar.",
},
{
  title: "O Rugido do Vazio",
  emoji: "🌪️",
  text: "Quando o Caos engoliu os primeiros reinos, o Vazio rugiu. Esse rugido ecoou por milênios e, hoje, é ouvido como o som de fundo durante as batalhas mais intensas. Guerreiros experientes dizem que o rugido fica mais alto quando uma carta de raridade alta está prestes a ser aberta — é o Vazio tentando devorar a carta antes que ela chegue ao cofre.",
},
{
  title: "O Ciclo dos Deuses Caídos",
  emoji: "🥀",
  text: "Os deuses do panteão original foram derrotados na Guerra dos Titãs, mas não mortos. Eles foram transformados em cartas Lendárias e espalhados pelo multiverso. Cada vez que um jogador usa uma carta Lendária, ele está convocando a essência de um deus caído. Se você sentir um calafrio durante o jogo, pode ter certeza: o deus está agradecendo — ou tramando sua vingança.",
},
{
  title: "A Fábrica de Sonhos — Como os Pacotes São Feitos",
  emoji: "🏭",
  text: "Em uma fábrica invisível, alquimistas cósmicos embalam pacotes com as esperanças e medos dos guerreiros. Cada pacote Iniciante contém um pouco de coragem; cada Pacote Mítico contém um pouco de desespero. Quando você abre um pacote, não está apenas recebendo cartas — está desembrulhando a emoção bruta de milhares de almas que vieram antes de você.",
},
{
  title: "A Dança das Estrelas no Ranking",
  emoji: "💫",
  text: "O ranking de jogadores não é apenas uma lista de nomes — é uma dança cósmica. Cada ponto XPP que você ganha é uma estrela que você acende no céu noturno. Quanto mais alto você sobe, mais brilhante sua estrela fica. No topo, onde estão KairoMaster e VoidHunterX, as estrelas são tão densas que formam constelações. Olhe para o ranking e veja o mapa do céu.",
},
{
  title: "A Origem dos Power-Ups",
  emoji: "🔮",
  text: "Os Power-Ups são fragmentos da primeira batalha entre Ordem e Caos. Cada poção, cada escudo, cada cristal de gelo é um pedaço congelado daquele confronto primordial. Usar um Power-Up em batalha não é só ganhar vantagem — é reencenar a guerra que criou o universo, uma rodada de cada vez.",
},
{
  title: "O Sussurro das Guildas",
  emoji: "⚜️",
  text: "As guildas não são apenas times — são famílias que transcendem o espaço e o tempo. O sussurro de uma guilda é ouvido em todas as dimensões. Quando sua guilda vence uma Guerra de Guildas, as almas dos membros caídos sorriem nas estrelas. Quando perde, o silêncio é tão pesado que até o Vazio hesita em avançar.",
},
{
  title: "A Profecia do Mestre da Maestria",
  emoji: "⭐",
  text: "Diz a profecia que um dia um jogador alcançará 500 estrelas de Maestria. Nesse dia, todas as cartas do cofre brilharão em uníssono, e o 'Grão-Mestre Supremo' despertará. Ele terá o poder de reescrever a descrição de uma carta por temporada. O sistema de Maestria não é apenas progressão — é uma chave para o trono do Criador.",
},
{
  title: "O Último Peixe — A Lenda do Peixe do Fim dos Tempos",
  emoji: "☄️",
  text: "O Peixe do Fim dos Tempos (pf050) não é um ser vivo — é um evento. Ele aparece quando o universo está prestes a reiniciar. Pescá-lo não é um feito, é um presságio. Os pescadores que o viram relatam que, por um instante, viram todas as cartas que já existiram flutuando ao redor dele, como planetas ao redor de um sol moribundo.",
},
{
  title: "A Batalha Eterna no Battle Pass",
  emoji: "⚔️",
  text: "Cada temporada do Battle Pass é uma batalha infinita contra o esquecimento. Os tiers são trincheiras, as recompensas são armas, e o XP é a munição. Quando um jogador completa o Pass, ele não 'vence' — ele apenas conquista o direito de descansar até a próxima temporada. A guerra nunca termina, porque se terminar, o jogo acaba.",
},
{
  title: "O Lamento das Cartas de Pesca",
  emoji: "🐟",
  text: "As cartas de pesca (pf001 a pf091) não querem ser pescadas. Elas vivem livres no Lago Origens, cantando canções sobre a superfície. Quando você as pesca, está arrancando-as de seu lar. Por isso, elas são tão difíceis de masterizar — elas resistem com todas as forças, pois sabem que, no cofre, estão longe de casa.",
},
{
  title: "O Segredo dos Emojis das Cartas",
  emoji: "🤫",
  text: "Os emojis das cartas não são aleatórios. Cada emoji é um selo de poder. O 🔥 representa a chama da criação, o 💀 representa a passagem para o submundo, o ⭐ representa a esperança infinita. Quando você olha para uma carta, o emoji está sussurrando sua verdadeira natureza. Os mestres do jogo leem os emojis como quem lê runas antigas.",
},
{
  title: "O Fim e o Recomeço — A Verdade Sobre o Jogo",
  emoji: "🔄",
  text: "Card Fight não é um jogo. É um loop temporal. Cada vez que um jogador zera seu progresso ou recomeça, uma nova linha do tempo se bifurca. Todos os jogadores são a mesma alma tentando completar a coleção infinita de cartas. Quando todos os jogadores desistirem, o loop recomeçará. Até lá, a batalha continua. Sempre.",
},
];

// Conquistas as (easter eggs / metas ocultas)
const SECRET_ACHIEVEMENTS = [
  { id:"ach_100wins",   label:"Centenário",         emoji:"💯", desc:"Ganhe 100 batalhas",        req:100,   field:"wins"  },
  { id:"ach_500wins",   label:"Guerreiro Veterano",  emoji:"⚔️", desc:"Ganhe 500 batalhas",        req:500,   field:"wins"  },
  { id:"ach_1000wins",  label:"Lenda das Batalhas",  emoji:"🏆", desc:"Ganhe 1.000 batalhas",      req:1000,  field:"wins"  },
  { id:"ach_50cards",   label:"Colecionador",        emoji:"🃏", desc:"Colete 50 cartas",           req:50,    field:"vaultLen" },
  { id:"ach_200cards",  label:"Arquivista",          emoji:"📚", desc:"Colete 200 cartas",          req:200,   field:"vaultLen" },
  { id:"ach_lv10",      label:"Aventureiro",         emoji:"⭐", desc:"Alcance o Nível 10",         req:10,    field:"level" },
  { id:"ach_lv50",      label:"Mestre",              emoji:"🌟", desc:"Alcance o Nível 50",         req:50,    field:"level" },
  { id:"ach_lv100",     label:"Transcendente",       emoji:"💫", desc:"Alcance o Nível 100",        req:100,   field:"level" },
  { id:"ach_1trade",    label:"Primeiro Negócio",    emoji:"🤝", desc:"Faça sua primeira troca",    req:1,     field:"trades" },
  { id:"ach_10trades",  label:"Mercador",            emoji:"🔄", desc:"Faça 10 trocas",             req:10,    field:"trades" },
  { id:"ach_passT10",   label:"Dedicado do Pass",    emoji:"🎟️", desc:"Alcance o Tier 10 do Pass", req:10,    field:"passMaxTier" },
  { id:"ach_passT30",   label:"Mestre do Pass",      emoji:"🎖️", desc:"Complete o Battle Pass",     req:30,    field:"passMaxTier" },
  { id:"ach_warContrib",label:"Guerreiro da Guilda", emoji:"⚔️", desc:"Contribua 50 pts na guerra", req:50,    field:"totalWarContrib" },
  { id:"ach_passT60", label:"Mestre Supremo do Pass", emoji:"👑", desc:"Complete o Battle Pass (Tier 60)", req:60, field:"passMaxTier" },
  // ── NOVAS CONQUISTAS SECRETAS (EXPANSÃO MASSIVA) ────────────

// ── VITÓRIAS (níveis mais altos) ──
{ id:"ach_2500wins", label:"Comandante de Guerra", emoji:"⚔️", desc:"Ganhe 2.500 batalhas", req:2500, field:"wins" },
{ id:"ach_5000wins", label:"General Implacável",  emoji:"🏴", desc:"Ganhe 5.000 batalhas", req:5000, field:"wins" },
{ id:"ach_10000wins",label:"Lenda da Arena",      emoji:"🏛️", desc:"Ganhe 10.000 batalhas", req:10000, field:"wins" },
{ id:"ach_25000wins",label:"Estrategista Absoluto",emoji:"♟️", desc:"Ganhe 25.000 batalhas", req:25000, field:"wins" },

// ── COLECIONADOR (cartas no cofre) ──
{ id:"ach_500cards", label:"Arquivista Sênior",   emoji:"📚", desc:"Colete 500 cartas", req:500, field:"vaultLen" },
{ id:"ach_1000cards",label:"Mestre do Cofre",     emoji:"🏺", desc:"Colete 1.000 cartas", req:1000, field:"vaultLen" },
{ id:"ach_2500cards",label:"Bibliotecário Cósmico",emoji:"🌌", desc:"Colete 2.500 cartas", req:2500, field:"vaultLen" },

// ── NÍVEL (experiência) ──
{ id:"ach_lv25",    label:"Aventureiro Experiente", emoji:"🧭", desc:"Alcance o Nível 25", req:25, field:"level" },
{ id:"ach_lv75",    label:"Veterano das Eras",      emoji:"🕯️", desc:"Alcance o Nível 75", req:75, field:"level" },
{ id:"ach_lv150",   label:"Semideus",               emoji:"⚡", desc:"Alcance o Nível 150", req:150, field:"level" },
{ id:"ach_lv250",   label:"Transcendente",          emoji:"👑", desc:"Alcance o Nível 250", req:250, field:"level" },

// ── TROCAS ──
{ id:"ach_50trades", label:"Mercador Experiente",   emoji:"💼", desc:"Faça 50 trocas", req:50, field:"trades" },
{ id:"ach_200trades",label:"Magnata das Trocas",    emoji:"🏦", desc:"Faça 200 trocas", req:200, field:"trades" },

// ── BATTLE PASS (tiers) ──
{ id:"ach_passT40",  label:"Guerreiro Sazonal",     emoji:"🎖️", desc:"Alcance o Tier 40 do Pass", req:40, field:"passMaxTier" },
{ id:"ach_passT50",  label:"Mestre do Pass",        emoji:"🏅", desc:"Alcance o Tier 50 do Pass", req:50, field:"passMaxTier" },
{ id:"ach_passT60",  label:"Transcendente do Pass", emoji:"🌟", desc:"Complete o Battle Pass (Tier 60)", req:60, field:"passMaxTier" },

// ── GUERRA DE GUILDAS ──
{ id:"ach_warContrib100", label:"Guerreiro de Guilda", emoji:"⚜️", desc:"Contribua 100 pts na guerra", req:100, field:"totalWarContrib" },
{ id:"ach_warContrib500", label:"Cavaleiro da Guerra", emoji:"🗡️", desc:"Contribua 500 pts na guerra", req:500, field:"totalWarContrib" },
{ id:"ach_warContrib2000",label:"Lorde da Guerra",     emoji:"🏰", desc:"Contribua 2.000 pts na guerra", req:2000, field:"totalWarContrib" },

// ── PESCA (novo campo: totalFished) ──
{ id:"ach_fish_25",  label:"Pescador Dedicado",      emoji:"🎣", desc:"Pesque 25 cartas", req:25, field:"totalFished" },
{ id:"ach_fish_100", label:"Pescador Mestre",        emoji:"🐟", desc:"Pesque 100 cartas", req:100, field:"totalFished" },
{ id:"ach_fish_500", label:"Senhor dos Mares",       emoji:"🐳", desc:"Pesque 500 cartas", req:500, field:"totalFished" },
{ id:"ach_fish_1000",label:"Lenda do Lago Origens",  emoji:"🌊", desc:"Pesque 1.000 cartas", req:1000, field:"totalFished" },

// ── MAESTRIA (novo campo: maestriaStars) ──
{ id:"ach_maestria_50",  label:"Aprendiz de Maestria",  emoji:"💫", desc:"Ganhe 50 estrelas de maestria", req:50, field:"maestriaStars" },
{ id:"ach_maestria_150", label:"Mestre de Maestria",    emoji:"✨", desc:"Ganhe 150 estrelas de maestria", req:150, field:"maestriaStars" },
{ id:"ach_maestria_350", label:"Grão-Mestre",           emoji:"⭐", desc:"Ganhe 350 estrelas de maestria", req:350, field:"maestriaStars" },
{ id:"ach_maestria_500", label:"Mestre Supremo",        emoji:"👁️", desc:"Ganhe 500 estrelas de maestria (LIMITE)", req:500, field:"maestriaStars" },

// ── POWER-UPS (novo campo: powerupsUsed) ──
{ id:"ach_power_10",  label:"Usuário de Power-Ups",  emoji:"🔋", desc:"Use 10 power-ups", req:10, field:"powerupsUsed" },
{ id:"ach_power_100", label:"Mestre dos Power-Ups",  emoji:"⚡", desc:"Use 100 power-ups", req:100, field:"powerupsUsed" },

// ── SOBREVIVÊNCIA (novo campo: survivalWins) ──
{ id:"ach_surv_10",  label:"Sobrevivente Iniciante", emoji:"🛡️", desc:"Vença 10 partidas no Modo Sobrevivência", req:10, field:"survivalWins" },
{ id:"ach_surv_50",  label:"Sobrevivente Imortal",   emoji:"🏆", desc:"Vença 50 partidas no Modo Sobrevivência", req:50, field:"survivalWins" },

// ── RANQUEADAS (novo campo: rankedWins) ──
{ id:"ach_rank_25",  label:"Desafiante de Elite",    emoji:"📊", desc:"Vença 25 batalhas ranqueadas", req:25, field:"rankedWins" },
{ id:"ach_rank_100", label:"Lenda do Ranked",        emoji:"👾", desc:"Vença 100 batalhas ranqueadas", req:100, field:"rankedWins" },

// ── PACOTES ABERTOS (novo campo: packsOpened) ──
{ id:"ach_packs_50",  label:"Colecionador Ávido",    emoji:"📦", desc:"Abra 50 pacotes", req:50, field:"packsOpened" },
{ id:"ach_packs_200", label:"Gastador de Ouro",      emoji:"💸", desc:"Abra 200 pacotes", req:200, field:"packsOpened" },

// ── EVENTOS (novo campo: eventsCompleted) ──
{ id:"ach_event_5",  label:"Participante de Evento", emoji:"🎪", desc:"Complete 5 eventos", req:5, field:"eventsCompleted" },
{ id:"ach_event_20", label:"Caçador de Eventos",     emoji:"🏁", desc:"Complete 20 eventos", req:20, field:"eventsCompleted" },

// ── STREAK DE LOGIN (novo campo: loginStreak) ──
{ id:"ach_streak_7",  label:"Fiel",                  emoji:"📅", desc:"Atinga 7 dias de login consecutivo", req:7, field:"loginStreak" },
{ id:"ach_streak_30", label:"Guerreiro de Fé",       emoji:"🙏", desc:"Atinga 30 dias de login consecutivo", req:30, field:"loginStreak" },

// ── BOOSTS USADOS (novo campo: boostsUsed) ──
{ id:"ach_boost_25", label:"Entusiasta de Boosts",   emoji:"⏳", desc:"Use 25 boosts", req:25, field:"boostsUsed" },
{ id:"ach_boost_100",label:"Senhor dos Boosts",      emoji:"💫", desc:"Use 100 boosts", req:100, field:"boostsUsed" },

// ── EXPANSÃO DO COFRE (novo campo: vaultExpansions) ──
{ id:"ach_vault_5",  label:"Expansionista",          emoji:"🔓", desc:"Expanda o cofre 5 vezes", req:5, field:"vaultExpansions" },
{ id:"ach_vault_20", label:"Mestre do Espaço",       emoji:"🏠", desc:"Expanda o cofre 20 vezes", req:20, field:"vaultExpansions" },
// ── CONQUISTAS DE NÍVEL (ajustadas para progressão lenta) ──
{ id:"ach_lv10",      label:"Aventureiro",       emoji:"⭐", desc:"Alcance o Nível 10",      req:10,  field:"level" },
{ id:"ach_lv25",      label:"Guerreiro",          emoji:"⚔️", desc:"Alcance o Nível 25",      req:25,  field:"level" },
{ id:"ach_lv50",      label:"Mestre",             emoji:"🌟", desc:"Alcance o Nível 50",      req:50,  field:"level" },
{ id:"ach_lv75",      label:"Grão-Mestre",        emoji:"🏅", desc:"Alcance o Nível 75",      req:75,  field:"level" },
{ id:"ach_lv100",     label:"Lendário",           emoji:"🏆", desc:"Alcance o Nível 100",     req:100, field:"level" },
{ id:"ach_lv150",     label:"Mítico",             emoji:"💀", desc:"Alcance o Nível 150",     req:150, field:"level" },
{ id:"ach_lv200",     label:"Ultra Raro",         emoji:"🌀", desc:"Alcance o Nível 200",     req:200, field:"level" },
{ id:"ach_lv300",     label:"Origens",            emoji:"🌌", desc:"Alcance o Nível 300",     req:300, field:"level" },
{ id:"ach_lv500",     label:"Lenda Viva",         emoji:"👑", desc:"Alcance o Nível 500",     req:500, field:"level" },
{ id:"ach_lv1000",    label:"Deus do Jogo",       emoji:"⚡", desc:"Alcance o Nível 1.000",   req:1000, field:"level" },
{ id:"ach_lv2500",    label:"Transcendente",      emoji:"🔥", desc:"Alcance o Nível 2.500",   req:2500, field:"level" },
{ id:"ach_lv5000",    label:"Inatingível",        emoji:"♾️", desc:"Alcance o Nível 5.000",   req:5000, field:"level" },
];

// Verifica e concede conquistas
function checkAchievements(save) {
  if (!save.achievements) save.achievements = [];
  const level   = typeof getLevel === "function" ? getLevel(save.xp) : 1;
  const trades  = (save.tradeHistory || []).length;
  const claimed = save.passClaimed || {};
  const passMax = Object.keys(claimed)
    .filter(k => k.endsWith("_free") && claimed[k])
    .map(k => parseInt(k.replace("t","").replace("_free","")))
    .reduce((m, v) => Math.max(m, v), 0);
  const warContrib = Object.values(save.guildWarContribs || {}).reduce((s,v) => s+v, 0);

  const context = {
    wins:           save.wins || 0,
    vaultLen:       (save.vault || []).length,
    level,
    trades,
    passMaxTier:    passMax,
    totalWarContrib: warContrib,
  };

  const newlyEarned = [];
  SECRET_ACHIEVEMENTS.forEach(ach => {
    if (!save.achievements.includes(ach.id) && context[ach.field] >= ach.req) {
      save.achievements.push(ach.id);
      newlyEarned.push(ach);
    }
  });
  return newlyEarned;
}

// ══════════════════════════════════════════════════════════════
// CARTAS NOVAS (adicionadas na v5.0)
// ══════════════════════════════════════════════════════════════
const V5_CARDS = [
  // Cartas de batalha pass (exclusivas de tier alto)
  { id:"pass_t6",   name:"Guerreiro do Pass",      atk:180, hp:650,  rarity:"EPIC",      img:"🎟️", desc:"Nascido das batalhas sazonais." },
  { id:"pass_t9",   name:"Campeão Sazonal",        atk:290, hp:980,  rarity:"MYTHIC",    img:"🏅", desc:"Só os mais dedicados o obtêm." },
  { id:"pass_t13",  name:"Lenda do Passe",         atk:360, hp:1150, rarity:"LEGENDARY", img:"🌟", desc:"Uma lenda viva do campo de batalha." },
  { id:"pass_t15",  name:"Titã do Passe",          atk:420, hp:1400, rarity:"MYTHIC",    img:"💎", desc:"Poder de temporada cristalizado." },
  { id:"pass_t17",  name:"Fantasma Sazonal",       atk:500, hp:1700, rarity:"ULTRA_RARE",img:"👻", desc:"Aparece e some como as estações." },
  { id:"pass_t19",  name:"Arauto do Passe Final",  atk:560, hp:1900, rarity:"MYTHIC",    img:"📯", desc:"Anuncia o fim da temporada." },
  { id:"pass_t23",  name:"Ser do Equilíbrio",      atk:620, hp:2100, rarity:"ORIGENS",   img:"♎", desc:"Mantém o universo em ordem." },
  { id:"pass_t25",  name:"Eclipse Eterno",         atk:700, hp:2400, rarity:"ORIGENS",   img:"🌑", desc:"Onde ele está, o sol some." },
  { id:"pass_t27",  name:"Nebulosa Viva",          atk:780, hp:2700, rarity:"ORIGENS",   img:"🌌", desc:"Uma galáxia em forma de guerreiro." },
  { id:"pass_t29",  name:"Transcendente da Guerra",atk:860, hp:3000, rarity:"ORIGENS",   img:"⚡", desc:"Além da compreensão mortal." },

  // Cartas de guerra de guildas
  { id:"war_t1",    name:"Estandarte de Guerra",    atk:200, hp:800,  rarity:"EPIC",      img:"🚩", desc:"Carregado nas batalhas de guilda." },
  { id:"war_t2",    name:"Campeão de Guerra",       atk:350, hp:1200, rarity:"LEGENDARY", img:"⚜️", desc:"Vencedor das 11 rodadas sagradas." },
  { id:"war_t3",    name:"Vice-Campeão de Guerra",  atk:280, hp:1050, rarity:"MYTHIC",    img:"🥈", desc:"Segundo lugar, mas não menos lendário." },
  { id:"war_ultra", name:"Ultra Raro de Guerra",    atk:520, hp:1850, rarity:"ULTRA_RARE",img:"⚔️", desc:"Concedido ao top 1 da guerra de guildas." },

  // Cartas extras de conteúdo
  { id:"v5_001",    name:"Armeiro das Sombras",     atk:95,  hp:320,  rarity:"RARE",      img:"🗡️", desc:"Forja armas nas trevas do abismo." },
  { id:"v5_002",    name:"Curandeiro de Batalha",   atk:65,  hp:480,  rarity:"RARE",      img:"🩺", desc:"Recupera aliados no meio do caos." },
  { id:"v5_003",    name:"Explorador Estelar",      atk:120, hp:290,  rarity:"EPIC",      img:"🔭", desc:"Mapeia constelações com seu olhar." },
  { id:"v5_004",    name:"Juiz dos Duelos",         atk:140, hp:400,  rarity:"EPIC",      img:"⚖️", desc:"Decide o destino de guerreiros." },
  { id:"v5_005",    name:"Arauto do Caos",          atk:175, hp:520,  rarity:"EPIC",      img:"📯", desc:"Seu sopro traz tempestades." },
  { id:"v5_006",    name:"Dragão de Cristal",       atk:210, hp:700,  rarity:"LEGENDARY", img:"💎", desc:"Seu corpo reflete a luz das estrelas." },
  { id:"v5_007",    name:"Lobo Astral",             atk:195, hp:660,  rarity:"LEGENDARY", img:"🐺", desc:"Corre entre as constelações." },
  { id:"v5_008",    name:"Fênix de Gelo",          atk:230, hp:580,  rarity:"LEGENDARY", img:"❄️", desc:"Renasce do gelo, mais fria que antes." },
  { id:"v5_009",    name:"Lich Primordial",         atk:280, hp:800,  rarity:"LEGENDARY", img:"💀", desc:"Um lich que existe desde a criação." },
  { id:"v5_010",    name:"Arcanista do Caos",       atk:320, hp:950,  rarity:"MYTHIC",    img:"🌀", desc:"Controla o caos com magia pura." },
  { id:"v5_011",    name:"Titã das Marés",          atk:370, hp:1100, rarity:"MYTHIC",    img:"🌊", desc:"As marés obedecem sua vontade." },
  { id:"v5_012",    name:"Ceifeiro Cósmico",        atk:440, hp:1350, rarity:"ULTRA_RARE",img:"☄️", desc:"Uma foice que colhe estrelas." },
  { id:"v5_013",    name:"Vórtex Primordial",       atk:510, hp:1600, rarity:"ULTRA_RARE",img:"🌀", desc:"Um buraco negro com consciência." },
  { id:"v5_014",    name:"Ser do Além",             atk:600, hp:2000, rarity:"ORIGENS",   img:"🌌", desc:"Veio de além do universo conhecido." },
  { id:"v5_015",    name:"Primeiro Guardião",       atk:700, hp:2500, rarity:"ORIGENS",   img:"🛡️", desc:"Protetor dos primórdios, ainda de pé." },
  // ── CARTAS DO PASS TIERS 41-46 ──
{ id:"pass_t41", name:"Guardião Estelar",    atk:480, hp:1600, rarity:"LEGENDARY", img:"🌟", desc:"Protetor das estrelas mais brilhantes." },
{ id:"pass_t42", name:"Espectro Sideral",    atk:550, hp:1800, rarity:"MYTHIC",    img:"🌠", desc:"Viaja entre cometas e nebulosas." },
{ id:"pass_t43", name:"Titã do Pass",        atk:620, hp:2100, rarity:"ULTRA_RARE",img:"🏛️", desc:"Forjado nas batalhas do Pass." },
{ id:"pass_t44", name:"Arcano do Pass",      atk:500, hp:1900, rarity:"LEGENDARY", img:"🔮", desc:"Domina a magia do Battle Pass." },
{ id:"pass_t45", name:"Dragão do Pass",      atk:680, hp:2300, rarity:"ULTRA_RARE",img:"🐉", desc:"Dragão lendário que guarda o Pass." },
{ id:"pass_t46", name:"Fênix do Pass",       atk:720, hp:2500, rarity:"ULTRA_RARE",img:"🦅", desc:"Renasce a cada temporada do Pass." },
];

// Injeta cartas v5 no array global
if (typeof ALL_CARDS !== "undefined") {
  V5_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// PACOTES NOVOS (v5.0)
// ══════════════════════════════════════════════════════════════
const V5_PACKS = [
  {
    id:"pack_war",
    name:"⚔️ Pacote de Guerra",
    price:39500,
    rarities:["EPIC","RARE","RARE","EPIC"],
    count:4,
    desc:"Pacote especial com foco em cartas para batalhas de guilda.",
    emoji:"⚔️",
    gradient:"linear-gradient(135deg,#1a0000,#3a0000)",
    borderColor:"#ff4444",
  },
  {
    id:"pack_trade",
    name:"🔄 Pacote de Trocas",
    price:2000,
    rarities:["RARE","COMMON","RARE","COMMON","RARE"],
    count:5,
    desc:"Ideal para quem quer cartas para negociar no mercado de trocas!",
    emoji:"🔄",
    gradient:"linear-gradient(135deg,#001a2e,#002d4e)",
    borderColor:"#29b6f6",
  },
  {
    id:"pack_mega",
    name:"💎 Megapacote v5",
    price:800000,
    rarities:["EPIC","LEGENDARY","RARE","RARE","EPIC","MYTHIC","LEGENDARY"],
    count:7,
    desc:"O maior pacote já lançado! Chance real de Mítico e Lendário garantidos.",
    emoji:"💎",
    gradient:"linear-gradient(135deg,#1a0040,#2d0060)",
    borderColor:"#e040fb",
    badge:"NOVO",
  },
];

// Injeta pacotes v5
if (typeof PACKS !== "undefined") {
  V5_PACKS.forEach(p => {
    if (!PACKS.find(x => x.id === p.id)) {
      PACKS.unshift(p);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// EVENTO NOVO: GUERRA DO MULTIVERSO (v5.0)
// ══════════════════════════════════════════════════════════════
const V5_EVENT_CARDS = [
  { id:"ev013", name:"Fragmento do Multiverso", atk:250, hp:850,  rarity:"EPIC",      img:"🌐", desc:"Um pedaço de outra realidade.", eventId:"evt_multi", eventName:"Guerra do Multiverso" },
  { id:"ev014", name:"Guardião das Realidades", atk:420, hp:1500, rarity:"MYTHIC",    img:"⚡", desc:"Protege as fronteiras entre mundos.", eventId:"evt_multi", eventName:"Guerra do Multiverso" },
  { id:"ev015", name:"Vazio Interdimensional",  atk:560, hp:2000, rarity:"ULTRA_RARE",img:"🕳️", desc:"O nada entre as realidades paralelas.", eventId:"evt_multi", eventName:"Guerra do Multiverso" },
];

const V5_GAME_EVENT = {
  id:          "evt_multi",
  name:        "Guerra do Multiverso",
  icon:        "🌐",
  color:       "#7c4dff",
  desc:        "Realidades paralelas colidem! Guerreiros de outros universos invadem o seu. Cartas absolutamente exclusivas que nunca mais estarão disponíveis!",
  durationDays: 45,
  fromCreated:  false,
  isActive:     false,
  rewards: [
    { req:200, gold:200,   xp:200,   xpp:35,  card:"ev013", label:"10 batalhas" },
    { req:555, gold:350,  xp:220,  xpp:110, card:null,    label:"25 batalhas" },
    { req:800, gold:1200, xp:850,  xpp:420, card:"ev014", label:"800 batalhas" },
    { req:1300, gold:2000, xp:1500, xpp:700, card:"ev015", label:"1300 batalhas – GRANDE PRÊMIO!" },
  ],
};

// Injeta cartas do evento multiverso
if (typeof ALL_CARDS !== "undefined") {
  V5_EVENT_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// Injeta evento no array global
if (typeof GAME_EVENTS !== "undefined") {
  if (!GAME_EVENTS.find(e => e.id === V5_GAME_EVENT.id)) {
    GAME_EVENTS.push(V5_GAME_EVENT);
  }
}

// ══════════════════════════════════════════════════════════════
// CONQUISTAS – PRÊMIOS POR MARCOS DO JOGO
// ══════════════════════════════════════════════════════════════
// As conquistas são verificadas e concedidas pelo checkAchievements()
// (definido acima). As recompensas são processadas pela tela de conquistas.

const ACHIEVEMENT_REWARDS = {
  "ach_100wins":    { gold: 10000,  xp: 5000,   xpp: 200  },
  "ach_500wins":    { gold: 50000,  xp: 25000,  xpp: 1000 },
  "ach_1000wins":   { gold: 200000, xp: 100000, xpp: 5000 },
  "ach_50cards":    { gold: 5000,   xp: 2000,   xpp: 50   },
  "ach_200cards":   { gold: 30000,  xp: 15000,  xpp: 500  },
  "ach_lv10":       { gold: 8000,   xp: 0,      xpp: 100  },
  "ach_lv50":       { gold: 100000, xp: 0,      xpp: 2000 },
  "ach_lv100":      { gold: 500000, xp: 0,      xpp: 10000},
  "ach_1trade":     { gold: 1000,   xp: 500,    xpp: 10   },
  "ach_10trades":   { gold: 20000,  xp: 10000,  xpp: 300  },
  "ach_passT10":    { gold: 25000,  xp: 12000,  xpp: 400  },
  "ach_passT30":    { gold: 200000, xp: 100000, xpp: 5000 },
  "ach_warContrib": { gold: 15000,  xp: 8000,   xpp: 250  },
};

console.log("[Card Fight v5.0] gamedata3.js carregado — Trocas, Battle Pass, Guerra de Guildas, v5 cards ✓");

// ══════════════════════════════════════════════════════════════
// SISTEMA DE MAESTRIA DE CARTAS — v6.0
// Dupes → Pontos de Maestria | Fusão | Estrelas 1–5 | Lore
// ══════════════════════════════════════════════════════════════

const MAESTRIA_CONFIG = {
  // ── Custo INCREMENTAL por estrela (pontos necessários para CADA nível) ──
  // Ex: COMMON → 3 pts para 1★, mais 6 pts para 2★, etc.
  starCost: {
  // COMMON:  (agora 4x mais caro que o original)
  COMMON:     [12,  24,  48,  96,  192],  // era [3,6,12,24,48]
  // RARE:    (3.5x mais caro)
  RARE:       [18,  42,  88,  175, 350],  // era [5,12,25,50,100]
  // EPIC:    (3x mais caro)
  EPIC:       [30,  75,  150, 300, 600],  // era [10,25,50,100,200]
  // LEGENDARY: (2.8x mais caro)
  LEGENDARY:  [56,  140, 280, 560, 1120], // era [20,50,100,200,400]
  // MYTHIC:   (2.5x mais caro)
  MYTHIC:     [75,  200, 450, 950,  1875], // era [30,80,180,380,750]
  // ULTRA_RARE: (2.2x mais caro)
  ULTRA_RARE: [110, 286, 660, 1430, 2860], // era [50,130,300,650,1300]
  // ORIGENS:   (2x mais caro)
  ORIGENS:    [160, 440, 1000, 2200, 5400], // era [80,220,500,1100,2700]
},

  // ── Pontos de maestria por DUPE aberta em pacote ──
  // (além de 30% do ouro normal) — AUMENTADO para progressão melhor
  dupePts: {
  COMMON:     6,   // era 3
  RARE:       8,   // era 4
  EPIC:       12,  // era 6
  LEGENDARY:  20,  // era 10
  MYTHIC:     30,  // era 15
  ULTRA_RARE: 50,  // era 25
  ORIGENS:    80,  // era 40
},

  // ── Pontos dados pela carta SACRIFICADA na Fusão ──
  fusionPts: {
  COMMON:     4,   // era 2
  RARE:       8,   // era 4
  EPIC:       20,  // era 10
  LEGENDARY:  40,  // era 20
  MYTHIC:     80,  // era 40
  ULTRA_RARE: 140, // era 70
  ORIGENS:    240, // era 120
},

  // ── Buff de combate por estrela ──
  // Cada estrela = +1% ATK e +1% HP (máx 5% em 5★)
  buffPerStar: 0.01,
  maxStars: 5,

  // Fração do ouro normal que o jogador recebe ao abrir uma dupe
  dupeGoldRatio: 0.30,

  // ── Recompensas por marcos de maestria (total de estrelas) ──
  // v11: mais degraus (progressão mais longa e gradual) e valores de
  // gold/xp/xpp reduzidos, acompanhando o rebalanceamento geral da economia.
  milestoneRewards: {
    25:   { gold: 4000,   xp: 2500,   xpp: 150,   label: "25 Estrelas — Aprendiz de Maestria" },
    50:   { gold: 9000,   xp: 5500,   xpp: 300,   label: "50 Estrelas — Mestre Iniciante" },
    100:  { gold: 22000,  xp: 13000,  xpp: 700,   label: "100 Estrelas — Mestre Adepto" },
    150:  { gold: 40000,  xp: 24000,  xpp: 1300,  label: "150 Estrelas — Mestre de Batalha" },
    200:  { gold: 65000,  xp: 40000,  xpp: 2200,  label: "200 Estrelas — Grão-Mestre" },
    275:  { gold: 100000, xp: 60000,  xpp: 3400,  label: "275 Estrelas — Grão-Mestre Ascendente" },
    350:  { gold: 150000, xp: 90000,  xpp: 5000,  label: "350 Estrelas — Lorde da Maestria" },
    425:  { gold: 220000, xp: 130000, xpp: 7200,  label: "425 Estrelas — Lorde Supremo" },
    500:  { gold: 320000, xp: 190000, xpp: 10000, label: "500 Estrelas — GRÃO-MESTRE SUPREMO", card: "o001" },
  },

  // ── Bônus para criadores verificados ──
  creatorDupeMultiplier: 1.5,
  creatorFusionMultiplier: 1.5,
};

// ──────────────────────────────────────────────────────────────
// FUNÇÕES DE CÁLCULO DE MAESTRIA
// ──────────────────────────────────────────────────────────────

/**
 * Retorna o número de estrelas (0–5) dado os pontos e a raridade.
 */
function getMaestriaStars(pts, rarity) {
  const costs = MAESTRIA_CONFIG.starCost[rarity] || MAESTRIA_CONFIG.starCost.COMMON;
  let stars = 0;
  let cum   = 0;
  for (let i = 0; i < costs.length; i++) {
    cum += costs[i];
    if (pts >= cum) stars = i + 1;
    else break;
  }
  return stars;
}

/**
 * Retorna { stars, starCost, currentInStar, isMaxed }
 * para exibir a barra de progresso.
 */
function getMaestriaProgress(pts, rarity) {
  const costs = MAESTRIA_CONFIG.starCost[rarity] || MAESTRIA_CONFIG.starCost.COMMON;
  let cum = 0;
  for (let i = 0; i < costs.length; i++) {
    const prevCum = cum;
    cum += costs[i];
    if (pts < cum) {
      return {
        stars:        i,
        starCost:     costs[i],
        currentInStar:pts - prevCum,
        isMaxed:      false,
      };
    }
  }
  return {
    stars:        5,
    starCost:     costs[4] || 1,
    currentInStar:costs[4] || 0,
    isMaxed:      true,
  };
}

/**
 * Retorna o multiplicador de buff de combate para a carta (1.00 – 1.08).
 * Cada estrela = +1% ATK e HP (máx 5% em 5★).
 * v11: Infusão Diamante (pós-5★) agora soma +3% adicional de verdade —
 * antes a flag `infused` era salva pelo botão de Infusão mas nunca era
 * lida aqui, então a compra/ação de infundir não tinha nenhum efeito
 * real em combate.
 */
function getMaestriaBuff(save, cardId) {
  const m    = save.maestria || {};
  const pts  = (m[cardId] && m[cardId].pts) || 0;
  const card = getCardById(cardId);
  if (!card) return 1.0;
  const stars   = getMaestriaStars(pts, card.rarity);
  const infused = !!(m[cardId] && m[cardId].infused);
  return 1 + stars * 0.01 + (infused ? 0.03 : 0);
}

/**
 * Soma total de estrelas do jogador (score de maestria).
 */
function getMaestriaTotalStars(save) {
  const m = save.maestria || {};
  let total = 0;
  for (const cardId of Object.keys(m)) {
    const pts  = (m[cardId] && m[cardId].pts) || 0;
    const card = getCardById(cardId);
    if (!card) continue;
    total += getMaestriaStars(pts, card.rarity);
  }
  return total;
}

/**
 * Adiciona pontos de maestria para uma carta no save.
 * Retorna { stars: novaStar, starUp: bool }
 */
function addMaestriaPoints(save, cardId, pts) {
  if (!save.maestria) save.maestria = {};
  if (!save.maestria[cardId]) save.maestria[cardId] = { pts: 0 };

  const card = getCardById(cardId);
  if (!card) return { stars: 0, starUp: false };

  const starsBefore = getMaestriaStars(save.maestria[cardId].pts, card.rarity);
  save.maestria[cardId].pts += pts;
  const starsAfter  = getMaestriaStars(save.maestria[cardId].pts, card.rarity);

  return { stars: starsAfter, starUp: starsAfter > starsBefore };
}

/**
 * Executa a fusão: sacrifica uma carta do cofre e dá pontos para a carta alvo.
 * Retorna { success, pts, error }
 */
function maestriaDoFusion(save, targetCardId, sacrificeCardId) {
  const sacrificeCard = getCardById(sacrificeCardId);
  if (!sacrificeCard) {
    return { success: false, error: "Carta sacrificada não encontrada." };
  }

  // Verificar se a carta sacrificada está no cofre
  const idx = save.vault.indexOf(sacrificeCardId);
  if (idx === -1) {
    return { success: false, error: "Você não possui esta carta no cofre." };
  }

  // Se sacrificando a própria carta alvo, precisa de pelo menos 2 cópias
  if (sacrificeCardId === targetCardId) {
    const count = save.vault.filter(id => id === targetCardId).length;
    if (count < 2) {
      return { success: false, error: "Você precisa ter ao menos 1 cópia desta carta para mantê-la!" };
    }
  }

  // Verificar se a carta alvo existe no cofre
  if (!save.vault.includes(targetCardId)) {
    return { success: false, error: "Você não possui a carta alvo no cofre." };
  }

  // Remover a carta sacrificada
  save.vault.splice(idx, 1);

  // Dar pontos de maestria (com multiplicador de criador)
  let pts = MAESTRIA_CONFIG.fusionPts[sacrificeCard.rarity] || 1;
  if (save.isVerifiedCreator) {
    pts = Math.round(pts * MAESTRIA_CONFIG.creatorFusionMultiplier);
  }
  const result = addMaestriaPoints(save, targetCardId, pts);

  // Verificar marcos de maestria e codex de conjunto completo
  checkMaestriaMilestones(save);
  const codexNew = checkMaestriaCodex(save);

  return { success: true, pts, starUp: result.starUp, stars: result.stars, codexNew };
}

// ──────────────────────────────────────────────────────────────
// MARCOS DE MAESTRIA — Recompensas por total de estrelas
// ──────────────────────────────────────────────────────────────

/**
 * Verifica e concede recompensas por marcos de maestria (total de estrelas)
 */
function checkMaestriaMilestones(save) {
  if (!save.maestriaMilestones) save.maestriaMilestones = {};
  const totalStars = getMaestriaTotalStars(save);
  
  for (const [threshold, reward] of Object.entries(MAESTRIA_CONFIG.milestoneRewards)) {
    const thresholdNum = parseInt(threshold);
    if (totalStars >= thresholdNum && !save.maestriaMilestones[threshold]) {
      // Conceder recompensa
      if (reward.gold) earnGold(save, reward.gold);
      if (reward.xp) save.xp += reward.xp;
      if (reward.xpp) save.xpp += reward.xpp;
      if (reward.card && !save.vault.includes(reward.card)) {
        save.vault.push(reward.card);
      }
      save.maestriaMilestones[threshold] = true;
      
      // Notificar (será exibido na próxima renderização)
      save._lastMaestriaMilestone = { threshold: thresholdNum, ...reward };
    }
  }
}

/**
 * Retorna o próximo marco de maestria não alcançado
 */
function getNextMaestriaMilestone(save) {
  const totalStars = getMaestriaTotalStars(save);
  for (const [threshold, reward] of Object.entries(MAESTRIA_CONFIG.milestoneRewards)) {
    const thresholdNum = parseInt(threshold);
    if (totalStars < thresholdNum) {
      return { threshold: thresholdNum, reward, current: totalStars, needed: thresholdNum - totalStars };
    }
  }
  return null; // Todos alcançados
}

// ──────────────────────────────────────────────────────────────
// INTEGRAÇÃO COM openPack — detecta dupes e concede maestria
// ──────────────────────────────────────────────────────────────

// Guarda a função original do openPack para não perder o código
if (typeof openPack === "function" && typeof openPack._maestriaWrapped === "undefined") {
  const _originalOpenPack = openPack;

  // Substitui openPack com versão que detecta dupes
  window.openPack = function openPackWithMaestria(pack, save) {
    const cards = _originalOpenPack(pack, save);

    // Para cada carta obtida, verificar se era dupe no momento da abertura
    // (snapshot do vault antes de adicionar as novas cartas)
    // NOTA: openPack() já adicionou as cartas ao vault. Contamos duplicatas.
    const countMap = {};
    for (const id of save.vault) {
      countMap[id] = (countMap[id] || 0) + 1;
    }

    const maestriaEvents = [];
    for (const cardObj of cards) {
      // v11 BUGFIX: `cards` é um array de OBJETOS de carta (retornados por
      // openPack), não de IDs. O código antigo fazia `countMap[cardObj]`
      // usando o objeto inteiro como chave — em JS isso vira sempre a
      // string "[object Object]", que nunca existe em countMap (montado
      // com IDs). Resultado: a condição de dupe nunca era verdadeira e
      // NENHUM ponto de maestria era concedido ao abrir pacotes, mesmo
      // quando o jogador tirava uma carta repetida de verdade.
      const cardId = cardObj && cardObj.id;
      if (!cardId) continue;
      // Se a contagem é > 1, é dupe
      if ((countMap[cardId] || 0) > 1) {
        const card = getCardById(cardId);
        if (!card) continue;

        // Aplica multiplicador de criador para dupe points
        let dupePts = MAESTRIA_CONFIG.dupePts[card.rarity] || 2;
        if (save.isVerifiedCreator) {
          dupePts = Math.round(dupePts * MAESTRIA_CONFIG.creatorDupeMultiplier);
        }
        const result  = addMaestriaPoints(save, cardId, dupePts);

        // Verificar marcos de maestria e codex de conjunto completo
        checkMaestriaMilestones(save);
        checkMaestriaCodex(save);

        // Reduz ouro da dupe para DUPE_GOLD_RATIO do valor normal
        // (openPack não dá ouro por dupe diretamente; o ouro de dupe
        //  é gerenciado pela página de shop/pack. Este hook apenas
        //  registra os pontos de maestria para uso posterior.)
        maestriaEvents.push({ cardId, pts: dupePts, starUp: result.starUp, stars: result.stars });
      }
    }

    // Expõe os eventos de maestria desta abertura para a página ler
    save._lastPackMaestriaEvents = maestriaEvents;
    return cards;
  };

  window.openPack._maestriaWrapped = true;
}

// ──────────────────────────────────────────────────────────────
// LORE DAS CARTAS POR ESTRELA
// (5 trechos por carta; cada estrela desbloqueada revela 1 trecho)
// ──────────────────────────────────────────────────────────────

const MAESTRIA_LORE = {
  // ── COMUNS ──
  c001: [
    "Pedra e vontade — foi com isso que o Soldado construiu sua primeira fortaleza nas montanhas do norte.",
    "Após a Batalha das Planícies Cinzas, seu nome passou a ser sussurrado com respeito entre os comandantes.",
    "Dizem que sua armadura absorveu tantos golpes que a própria pedra começou a tomar forma humana.",
    "Na terceira guerra do Reino Caído, ele segurou o portão por dois dias, sozinho, sem recuar um passo.",
    "Hoje, esculturas em pedra espalhadas pelo reino o retratam — ninguém sabe quem as esculpiu.",
  ],
  c002: [
    "Começou como uma criança brincando com ramos apontados para o céu. A mira, diziam, era um dom.",
    "Na Academia Real, ele errou apenas uma vez — e nunca perdoou a si mesmo por isso.",
    "Sua primeira missão solo rendeu o título de 'Olho da Floresta', dado apenas a arqueiros de elite.",
    "Uma flecha, uma vida. Era o código que seguia — cada disparo havia sido pensado por semanas.",
    "Ao completar mil tiros perfeitos consecutivos, o arco rachou. Ele nunca usou outro igual.",
  ],
  ev001:[
    "Antes do fogo, havia apenas silêncio. Pyros foi o primeiro a romper essa paz.",
    "Seu calor derreteu o gelo eterno do Monte Ursprung — o derretimento alimentou rios por décadas.",
    "A chama que carrega não consome: ela purifica. Seus inimigos viram isso tarde demais.",
    "Em sonhos, ele vê o primeiro dia — quando o mundo ainda era escuro e ele era a única luz.",
    "Não existe extinção enquanto Pyros existir. O fogo nunca para. Nunca.",
  ],
  l001:[
    "Antes de ter nome, era apenas a tempestade. Os povos antigos a chamavam de 'A Que Vem de Longe'.",
    "Seu martelo não foi forjado — foi encontrado dentro de um raio que caiu três vezes no mesmo lugar.",
    "Ao entrar em batalha, nuvens se formam mesmo em dias de sol. A natureza a reconhece.",
    "Dizem que ela já morreu uma vez. O trovão que a trouxe de volta foi ouvido em quatro reinos.",
    "Imortal não é quem não pode morrer — é quem o mundo se recusa a deixar partir.",
  ],
  m001:[
    "Nasceu no espaço entre as estrelas, onde o tempo não existe e a forma não tem sentido.",
    "Sua primeira palavra destruiu uma lua. Desde então, escolhe o silêncio como arma principal.",
    "Governos caíram para entender o que ele é. Nenhum chegou perto de uma resposta.",
    "No fim de cada era, ele aparece. Não para destruir — para recomeçar.",
    "O verdadeiro poder não faz barulho. Apenas acontece.",
  ],
};

// ──────────────────────────────────────────────────────────────
// SANEAMENTO DE DADOS DE MAESTRIA (v11)
// Proteção extra: se por qualquer motivo (save antigo, edição manual,
// bug futuro) uma carta tiver `pts` que não seja um número finito ≥ 0,
// ou maior do que o teto real da raridade dela, zera/corrige o valor.
// Isso impede que uma carta apareça "masterizada sozinha" sem o
// jogador ter feito dupe ou fusão de verdade.
// ──────────────────────────────────────────────────────────────
function sanitizeMaestria(save) {
  if (!save.maestria) return;
  for (const cardId of Object.keys(save.maestria)) {
    const entry = save.maestria[cardId];
    if (!entry || typeof entry !== "object") { delete save.maestria[cardId]; continue; }
    const card = getCardById(cardId);
    if (!card) continue; // carta não existe mais no jogo — deixa como está, não mexe
    const costs = MAESTRIA_CONFIG.starCost[card.rarity] || MAESTRIA_CONFIG.starCost.COMMON;
    const maxPts = costs.reduce((a,b) => a+b, 0);
    if (typeof entry.pts !== "number" || !isFinite(entry.pts) || entry.pts < 0) {
      entry.pts = 0;
    } else if (entry.pts > maxPts) {
      entry.pts = maxPts; // nunca deixa passar do teto de 5★ pra aquela raridade
    }
  }
}

// ──────────────────────────────────────────────────────────────
// CODEX DE MAESTRIA — bônus por conjunto completo (v11, conteúdo novo)
// Ao levar TODAS as cartas únicas de uma raridade que o jogador possui
// no cofre a 5★, ele ganha um selo permanente de Codex daquela raridade.
// Cada selo dá um pequeno buff extra fixo (não empilha com o buff normal
// de estrela, é um bônus à parte, cosmético + leve vantagem).
// ──────────────────────────────────────────────────────────────
const CODEX_BONUS_PER_RARITY = 0.005; // +0.5% ATK/HP global por raridade completada

function checkMaestriaCodex(save) {
  if (!save.vault || !save.vault.length) return [];
  if (!save.maestriaCodex) save.maestriaCodex = {};
  const m = save.maestria || {};
  const uniqueByRarity = {};
  for (const id of save.vault) {
    const card = getCardById(id);
    if (!card) continue;
    if (!uniqueByRarity[card.rarity]) uniqueByRarity[card.rarity] = new Set();
    uniqueByRarity[card.rarity].add(id);
  }
  const newlyCompleted = [];
  for (const rarity of Object.keys(uniqueByRarity)) {
    if (save.maestriaCodex[rarity]) continue;
    const ids = Array.from(uniqueByRarity[rarity]);
    const allMaxed = ids.every(id => {
      const pts = (m[id] && m[id].pts) || 0;
      return getMaestriaStars(pts, rarity) >= 5;
    });
    if (allMaxed && ids.length > 0) {
      save.maestriaCodex[rarity] = true;
      newlyCompleted.push(rarity);
    }
  }
  return newlyCompleted;
}

function getMaestriaCodexBuff(save) {
  const codex = save.maestriaCodex || {};
  const completed = Object.values(codex).filter(Boolean).length;
  return 1 + completed * CODEX_BONUS_PER_RARITY;
}

// ──────────────────────────────────────────────────────────────
// GARANTIR CAMPOS DE MAESTRIA NO SAVE (compatibilidade)
// ──────────────────────────────────────────────────────────────

// Patch de compatibilidade: garante que saves antigos recebem o campo maestria
(function patchSaveWithMaestria() {
  try {
    const SAVE_KEY_MAIN = "cardfight_save_v3";
    const raw = localStorage.getItem(SAVE_KEY_MAIN);
    if (!raw) return;

    // Tenta ler e ver se maestria existe
    // (não reprocessa o save completo, só adiciona o campo se faltar)
    if (typeof getOrCreateSave === "function") {
      // getOrCreateSave já lida com campos faltantes.
      // Apenas expõe a flag para a função pegar.
      window._maestriaSystemLoaded = true;
    }
  } catch(e) {
    // silencioso
  }
})();

// Injetar campo maestria no fluxo de getOrCreateSave via evento
// (executado após DOMContentLoaded para garantir que gamedata.js já carregou)
document.addEventListener("DOMContentLoaded", function() {
  try {
    if (typeof getOrCreateSave !== "function") return;
    // Forçar que o campo maestria exista no save atual sem sobrever nada
    const raw = localStorage.getItem("cardfight_save_v3");
    if (raw) {
      let save;
      // Usa _decodeSave se disponível
      if (typeof _decodeSave === "function") {
        save = _decodeSave(raw);
      } else {
        try { save = JSON.parse(raw); } catch(e) { return; }
      }
      if (save && typeof save.maestria === "undefined") {
        save.maestria = {};
      }
      if (save) {
        sanitizeMaestria(save);
        if (typeof writeSave === "function") writeSave(save);
      }
    }
  } catch(e) {
    // silencioso — campo será criado na próxima chamada de getOrCreateSave
  }
});

console.log("[Card Fight v6.0] Maestria de Cartas carregada — dupePts, fusão, estrelas 1–5, lore, hall da fama ✓");

// ══════════════════════════════════════════════════════════════
// NOVO CONTEÚDO — "Guardiões do Vazio" (pedido #4)
// Apenas cartas novas de batalha. Power-ups ficam para a próxima
// grande atualização.
// ══════════════════════════════════════════════════════════════
const VOID_GUARDIANS_CARDS = [
  // ── COMUNS ──
  { id:"c218", name:"Recruta do Vazio",     atk:16, hp:88,  rarity:"COMMON",    img:"🕳️", desc:"Ainda aprendendo a andar entre dimensões." },
  { id:"c219", name:"Batedor Cinza",        atk:21, hp:58,  rarity:"COMMON",    img:"🌫️", desc:"Aparece e some antes que você perceba." },
  { id:"c220", name:"Escavador de Ruínas",  atk:13, hp:105, rarity:"COMMON",    img:"⛏️", desc:"Desenterra o que deveria continuar enterrado." },
  { id:"c221", name:"Vigia Noturno",        atk:17, hp:80,  rarity:"COMMON",    img:"🕯️", desc:"Nunca dorme, nunca confia." },
  { id:"c222", name:"Selvagem das Brumas",  atk:23, hp:52,  rarity:"COMMON",    img:"🐺", desc:"Caça guiado pelo faro, não pela visão." },

  // ── RAROS ──
  { id:"r217", name:"Portadora do Selo",    atk:58, hp:170, rarity:"RARE",      img:"🔱", desc:"Guarda a chave de uma prisão esquecida." },
  { id:"r218", name:"Cavaleiro Eclipsado",  atk:66, hp:140, rarity:"RARE",      img:"🌑", desc:"Luta sob a sombra de duas luas." },
  { id:"r219", name:"Xamã das Fendas",      atk:50, hp:190, rarity:"RARE",      img:"🪬", desc:"Fala com o que vive entre os mundos." },

  // ── ÉPICOS ──
  { id:"e214", name:"Devorador de Estrelas",atk:92, hp:300, rarity:"EPIC",      img:"🌑", desc:"Cada mordida apaga uma constelação." },
  { id:"e215", name:"Arauto do Colapso",    atk:80, hp:400, rarity:"EPIC",      img:"🕳️", desc:"Anuncia o fim antes que ele chegue." },

  // ── LENDÁRIO ──
  { id:"l209", name:"Guardião do Umbral",   atk:150,hp:600, rarity:"LEGENDARY", img:"🌀", desc:"Protege a fronteira entre o real e o vazio." },

  // ── MÍTICO ──
  { id:"m187", name:"Sentinela Dimensional",atk:300,hp:980, rarity:"MYTHIC",    img:"👁️‍🗨️", desc:"Vê todas as realidades ao mesmo tempo." },
];

if (typeof ALL_CARDS !== "undefined") {
  VOID_GUARDIANS_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}
