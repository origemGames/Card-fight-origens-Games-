/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-prime-patch.js – v1.0  SISTEMA PRIME
   Patch aditivo. Nao substitui nenhum arquivo original.
   ============================================================ */
"use strict";

/* ---------------------------------------------------------------
   Configuracao dos niveis do Prime.
   O nivel e calculado a partir de:
     save.totalGoldSpent + (save.primePurchasedPoints || 0)
   --------------------------------------------------------------- */
const PRIME_LEVELS = [
  { level: 1, threshold: 1e4,  name: "Prime I",    color: "#8bc34a", glow: "rgba(139,195,74,0.5)"  },
  { level: 2, threshold: 1e5,  name: "Prime II",   color: "#26c6da", glow: "rgba(38,198,218,0.5)"  },
  { level: 3, threshold: 1e6,  name: "Prime III",  color: "#42a5f5", glow: "rgba(66,165,245,0.55)" },
  { level: 4, threshold: 1e7,  name: "Prime IV",   color: "#ab47bc", glow: "rgba(171,71,188,0.6)"  },
  { level: 5, threshold: 1e8,  name: "Prime V",    color: "#ff7043", glow: "rgba(255,112,67,0.6)"  },
  { level: 6, threshold: 1e9,  name: "Prime VI",   color: "#ffc107", glow: "rgba(255,193,7,0.65)"  },
  { level: 7, threshold: 1e11, name: "Prime VII",  color: "#ff4444", glow: "rgba(255,68,68,0.7)"   },
  { level: 8, threshold: 1e15, name: "Prime VIII", color: "#ff00aa", glow: "rgba(255,0,170,0.85)"  },
];

/* Recompensas ao ATINGIR cada Prime (baixas ate Prime 6, pesadas em 7 e 8) */
const PRIME_REWARDS = {
  1: { gold: 50,      xp: 20,     xpp: 10,   msg: "Bonus de boas-vindas ao Prime." },
  2: { gold: 200,     xp: 80,     xpp: 40,   msg: "Voce esta aquecendo." },
  3: { gold: 800,     xp: 300,    xpp: 150,  msg: "Milionario em gastos." },
  4: { gold: 2500,    xp: 100,   xpp: 500,  msg: "Um verdadeiro colecionador." },
  5: { gold: 6000,    xp: 2500,   xpp: 1200, msg: "Cem milhoes ja passaram por aqui." },
  6: { gold: 1200,   xp: 600,   xpp: 3000, msg: "Bilionario do Card Fight." },
  7: { gold: 5000,   xp: 2000,  xpp: 1000, card: "prime_l1",
       msg: "Recompensa lendaria por chegar ao Prime VII." },
  8: { gold: 100000,   xp: 5000000, xpp: 100000, origensRandom: true, unlockBadge: true,
       msg: "PRIME VIII: voce e uma lenda do Card Fight." },
};

/* Recompensas de METADE do caminho (so ate Prime 6) */
const PRIME_HALF_REWARDS = {
  1: { gold: 20,   xp: 10,   xpp: 20  },
  2: { gold: 80,   xp: 40,   xpp: 20 },
  3: { gold: 300,  xp: 150,  xpp: 80 },
  4: { gold: 1000, xp: 500,  xpp: 250 },
  5: { gold: 1000, xp: 1200, xpp: 600 },
  6: { gold: 6000, xp: 3000, xpp: 1500 },
};

/* ---------------------------------------------------------------
   Cartas exclusivas conquistadas via Prime.
   Inseridas em ALL_CARDS se ainda nao existirem.
   --------------------------------------------------------------- */
const PRIME_CARDS = [
  { id:"prime_l1", name:"Guardiao do Prime",  atk:180, hp:720, rarity:"LEGENDARY", img:"8️⃣", desc:"Ergue-se apenas para quem gastou fortunas." },
  { id:"prime_m1", name:"Arauto do Octavo",   atk:220, hp:800, rarity:"MYTHIC",    img:"♾️", desc:"Sussurra os nomes de todos os Prime VIII." },
  { id:"prime_o1", name:"Origens: O Numero",  atk:300, hp:1200,rarity:"ORIGENS",   img:"8️⃣", desc:"O oitavo Prime tomou forma. Recompensa maxima." },
];

(function injectPrimeCards(){
  if (typeof ALL_CARDS === "undefined") return;
  PRIME_CARDS.forEach(c => {
    if (!ALL_CARDS.some(x => x.id === c.id)) ALL_CARDS.push(c);
  });
})();

/* ---------------------------------------------------------------
   Helpers publicos do sistema Prime.
   --------------------------------------------------------------- */
function primeGetTotalPoints(save) {
  if (!save) return 0;
  return (save.totalGoldSpent || 0) + (save.primePurchasedPoints || 0);
}

function primeGetLevel(save) {
  const total = primeGetTotalPoints(save);
  let lvl = 0;
  for (const p of PRIME_LEVELS) {
    if (total >= p.threshold) lvl = p.level;
  }
  return lvl;
}

function primeGetInfo(level) {
  return PRIME_LEVELS.find(p => p.level === level) || null;
}

function primeGetProgress(save) {
  const total   = primeGetTotalPoints(save);
  const current = primeGetLevel(save);
  const next    = PRIME_LEVELS.find(p => p.level === current + 1) || null;
  const base    = current === 0 ? 0 : PRIME_LEVELS[current - 1].threshold;
  const target  = next ? next.threshold : base;
  const inLvl   = Math.max(0, total - base);
  const needed  = Math.max(1, target - base);
  const pct     = next ? Math.min(100, (inLvl / needed) * 100) : 100;
  const half    = next ? base + needed / 2 : Infinity;
  return { total, current, next, base, target, inLvl, needed, pct, halfMark: half };
}

/* Ao gastar ouro, garante que os campos existam. */
function primeEnsureFields(save) {
  if (!save) return;
  if (save.primePurchasedPoints == null) save.primePurchasedPoints = 0;
  if (!Array.isArray(save.primeClaimed))    save.primeClaimed    = [];
  if (!Array.isArray(save.primeHalfClaimed)) save.primeHalfClaimed = [];
  if (save.primeShowBadge == null)   save.primeShowBadge   = false;
  if (save.primeBadgeUnlocked == null) save.primeBadgeUnlocked = false;
}

/* Concede recompensa (chamado pelo prime.html). */
function primeClaimReward(save, level, isHalf) {
  primeEnsureFields(save);
  if (isHalf) {
    if (!PRIME_HALF_REWARDS[level]) return { ok:false, reason:"Sem recompensa de meio caminho." };
    if (save.primeHalfClaimed.includes(level)) return { ok:false, reason:"Ja resgatado." };
    // So pode resgatar se ja passou da metade
    const prog = primeGetProgress(save);
    const halfThreshold = (level === 1 ? 0 : PRIME_LEVELS[level-2].threshold)
                        + (PRIME_LEVELS[level-1].threshold - (level === 1 ? 0 : PRIME_LEVELS[level-2].threshold)) / 2;
    if (prog.total < halfThreshold) return { ok:false, reason:"Voce ainda nao passou da metade." };
    const r = PRIME_HALF_REWARDS[level];
    if (typeof earnGold === "function") earnGold(save, r.gold); else save.gold = (save.gold||0) + r.gold;
    save.xp  = (save.xp  || 0) + (r.xp  || 0);
    save.xpp = (save.xpp || 0) + (r.xpp || 0);
    save.primeHalfClaimed.push(level);
    if (typeof writeSave === "function") writeSave(save);
    return { ok:true, reward:r };
  }

  if (!PRIME_REWARDS[level]) return { ok:false, reason:"Nivel invalido." };
  if (save.primeClaimed.includes(level)) return { ok:false, reason:"Ja resgatado." };
  if (primeGetLevel(save) < level) return { ok:false, reason:"Voce ainda nao alcancou esse Prime." };

  const r = PRIME_REWARDS[level];
  if (r.gold) { if (typeof earnGold === "function") earnGold(save, r.gold); else save.gold = (save.gold||0) + r.gold; }
  if (r.xp)   save.xp  = (save.xp  || 0) + r.xp;
  if (r.xpp)  save.xpp = (save.xpp || 0) + r.xpp;

  // Carta especifica
  if (r.card && typeof ALL_CARDS !== "undefined") {
    const c = ALL_CARDS.find(x => x.id === r.card);
    if (c) {
      save.cards = save.cards || [];
      save.cards.push({ id: c.id, obtainedAt: Date.now() });
    }
  }

  // Prime 8: Origens aleatoria + badge desbloqueada
  if (r.origensRandom && typeof ALL_CARDS !== "undefined") {
    const origens = ALL_CARDS.filter(c => c.rarity === "ORIGENS");
    if (origens.length) {
      const pick = origens[Math.floor(Math.random() * origens.length)];
      save.cards = save.cards || [];
      save.cards.push({ id: pick.id, obtainedAt: Date.now() });
    }
  }
  if (r.unlockBadge) {
    save.primeBadgeUnlocked = true;
    save.primeShowBadge     = true; // ja equipa por padrao
  }

  save.primeClaimed.push(level);
  if (typeof writeSave === "function") writeSave(save);
  return { ok:true, reward:r };
}

/* Adiciona pontos comprados com dinheiro real (chamado pelo comprar.html). */
function primeAddPurchasedPoints(save, points) {
  primeEnsureFields(save);
  save.primePurchasedPoints = (save.primePurchasedPoints || 0) + Math.max(0, Math.floor(points));
  if (typeof writeSave === "function") writeSave(save);
}

/* Compra o desbloqueio total do Prime VIII por dinheiro real. */
function primeBuyPrime8Complete(save) {
  primeEnsureFields(save);
  const needed = PRIME_LEVELS[7].threshold - primeGetTotalPoints(save);
  if (needed > 0) save.primePurchasedPoints = (save.primePurchasedPoints || 0) + needed;
  save.primeBadgeUnlocked = true;
  save.primeShowBadge     = true;
  if (typeof writeSave === "function") writeSave(save);
}

/* Formata numeros grandes de forma legivel em pt-BR. */
function primeFormatNumber(n) {
  n = Math.floor(n || 0);
  if (n >= 1e15) return (n/1e15).toFixed(2).replace(/\.?0+$/,"") + " quatrilhoes";
  if (n >= 1e12) return (n/1e12).toFixed(2).replace(/\.?0+$/,"") + " trilhoes";
  if (n >= 1e9)  return (n/1e9 ).toFixed(2).replace(/\.?0+$/,"") + " bilhoes";
  if (n >= 1e6)  return (n/1e6 ).toFixed(2).replace(/\.?0+$/,"") + " milhoes";
  if (n >= 1e3)  return (n/1e3 ).toFixed(1).replace(/\.?0+$/,"") + " mil";
  return n.toLocaleString("pt-BR");
}

/* ---------------------------------------------------------------
   Ranking global fake (100 jogadores) baseado em seed diario.
   Substitua por API real quando houver backend.
   --------------------------------------------------------------- */
const _PRIME_RANK_NAMES = [
  "Kaelith","Nyxara","VulcanX","AureliaSol","DarkPhoenix","ZephyrKing","MoonSlayer",
  "EmberFox","GoldenReaper","IronRuna","StellarWolf","VoidHunter","CrimsonKnight",
  "SkyBrawler","AshenMage","ThornBlade","Vega","OrionOG","LunaWisp","NovaEclipse",
  "TitanForge","RunaWyrm","AzureFang","ShadowRex","MysticJin","CobaltEye","RavenGrim",
  "SolarDrake","OblivionQ","PyroSage","GlacierArc","StormFall","EchoRift","DreadPact",
  "SableTome","VerdantX","WraithBorn","ZenithZero","ArcadiaKid","IgnisRex","NebulaSpin",
  "OnyxCore","PhantomLace","QuasarBloom","RebelHex","SilverHarrow","TempestKid",
  "UmbraSeeker","ValiantEcho","WildRune","XenithGale","YarrowStorm","ZircoBlade",
  "AstralByte","BasaltFury","CinderWisp","DuskOracle","EldenPulse","FrostbornAce",
  "GryffinRush","HallowedIce","IvoryKnave","JettSurge","KairosBlink","LumenGrave",
  "MidnightRex","NightHollow","OpalBlaze","ProwlerVi","QuiverX","RiftbladeKo",
  "SolsticeNu","TalonQuake","UltrixDawn","VesperGale","WolfsbaneQ","XyrosPeak",
  "YonderMage","ZaltyRune","AbyssalPip","BorealisJ","CobraFang","DriftKast","EmberVeil",
  "FrigidLoom","GlyphArcher","HexenTome","IroncladVo","JavelinZa","KindleGrim",
  "LotusPulse","MarauderQ","NectarWyrm","OpaqueRift","PolarisH","QuartzBlade"
];

function primeSeededRandom(seed) {
  let s = seed | 0;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function primeGetLeaderboard(save) {
  const dayKey = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const rand   = primeSeededRandom(dayKey);
  // Gera 100 jogadores com gasto decrescente
  const rows = [];
  let top    = 8e15 + Math.floor(rand() * 5e15);
  for (let i = 0; i < 100; i++) {
    const spent = Math.floor(top * (0.92 + rand() * 0.08));
    top         = Math.max(1000, spent - Math.floor(rand() * top * 0.06) - 1);
    const verified = rand() < 0.15;
    rows.push({
      name:    _PRIME_RANK_NAMES[i % _PRIME_RANK_NAMES.length] + (i > 88 ? String(i) : ""),
      avatar:  ["🐉","🦊","🦉","🐺","🦁","👹","👑","⚔️","🛡️","🔮"][Math.floor(rand()*10)],
      spent:   spent,
      verified,
    });
  }
  // Insere o jogador se houver save
  if (save && save.name) {
    const me = {
      name:    save.name,
      avatar:  save.profileAvatar ? "★" : "👤",
      spent:   primeGetTotalPoints(save),
      verified: !!save.isVerifiedCreator,
      isMe:    true,
    };
    rows.push(me);
  }
  rows.sort((a,b) => b.spent - a.spent);
  return rows.slice(0, 100).map((r, i) => ({ ...r, pos: i + 1, primeLevel: (function(){
    let l = 0;
    for (const p of PRIME_LEVELS) if (r.spent >= p.threshold) l = p.level;
    return l;
  })() }));
}

/* ---------------------------------------------------------------
   Overlay do 8️⃣ no canto inferior direito do avatar do perfil.
   O perfil.html chama primeRenderAvatarBadge() se existir.
   --------------------------------------------------------------- */
function primeRenderAvatarBadge(save) {
  if (!save || !save.primeBadgeUnlocked || !save.primeShowBadge) return "";
  return `<span class="prime-avatar-badge" title="Prime VIII">
            <span class="pab-glow"></span>
            <span class="pab-num">8️⃣</span>
          </span>`;
}
