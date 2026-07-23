/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-roleta.js – v1.2  SISTEMA DE ROLETA (bugs corrigidos)
   - FIX: roleta agora sempre para na fatia correta do prêmio real
     (antes, ouro de compensação por carta duplicada fazia o ponteiro
     cair sempre na primeira fatia, mentindo sobre o prêmio ganho)
   - FIX: "maior prêmio" agora conta corretamente o ouro de compensação
     de cartas duplicadas
   ============================================================ */

"use strict";

// ─── CARTAS EXCLUSIVAS DA ROLETA ──────────────────────────────
const ROLETA_CARDS = [
  { id:"rlt_c01", name:"Mascote da Sorte",    atk:14, hp:85,  rarity:"COMMON",    img:"🍀", desc:"Traz sorte onde quer que vá." },
  { id:"rlt_c02", name:"Apostador Iniciante", atk:18, hp:72,  rarity:"COMMON",    img:"🎲", desc:"Sua primeira aposta foi na vida." },
  { id:"rlt_c03", name:"Amuleto da Sorte",    atk:11, hp:92,  rarity:"COMMON",    img:"🧿", desc:"Protege contra o azar." },
  { id:"rlt_c04", name:"Dado Viciado",        atk:22, hp:48,  rarity:"COMMON",    img:"🎲", desc:"Sempre cai no número que você precisa." },
  { id:"rlt_c05", name:"Carta da Sorte",      atk:16, hp:78,  rarity:"COMMON",    img:"🃏", desc:"Uma carta que muda o destino." },
  { id:"rlt_r01", name:"Explorador do Acaso", atk:45, hp:185, rarity:"RARE",      img:"🧭", desc:"Vive na fronteira entre a sorte e o perigo." },
  { id:"rlt_r02", name:"Senhor das Roletas",  atk:52, hp:160, rarity:"RARE",      img:"🎰", desc:"Conhece todos os segredos da roda." },
  { id:"rlt_r03", name:"Aposta Certeira",     atk:48, hp:175, rarity:"RARE",      img:"🎯", desc:"Nunca erra quando vale a pena." },
  { id:"rlt_e01", name:"Deus do Acaso",       atk:82, hp:340, rarity:"EPIC",      img:"🌀", desc:"O acaso é seu aliado." },
  { id:"rlt_e02", name:"Mestre da Roleta",    atk:75, hp:380, rarity:"EPIC",      img:"🎰", desc:"Domina a arte de girar." },
  { id:"rlt_e03", name:"Sorte Infinita",      atk:88, hp:310, rarity:"EPIC",      img:"♾️", desc:"A sorte nunca o abandona." },
  { id:"rlt_l01", name:"Avatar do Caos",      atk:150,hp:580, rarity:"LEGENDARY", img:"🔥", desc:"O caos personificado." },
  { id:"rlt_l02", name:"Roleta Infinita",     atk:140,hp:620, rarity:"LEGENDARY", img:"🔄", desc:"Gira eternamente, sempre premiando." },
  { id:"rlt_m01", name:"Senhor do Destino",   atk:280,hp:980, rarity:"MYTHIC",    img:"⚖️", desc:"Equilibra o destino com suas mãos." },
  { id:"rlt_u01", name:"Criador de Sorte",    atk:400,hp:1350,rarity:"ULTRA_RARE",img:"✨", desc:"A própria sorte em forma de carta." },
  { id:"rlt_o01", name:"Rei Das Roletas",     atk:670,hp:2000,rarity:"ORIGENS",  img:"👑", desc:"O soberano de todas as roletas. Só os mais sortudos o possuem." },
];

if (typeof ALL_CARDS !== "undefined") {
  ROLETA_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// ─── CONFIGURAÇÃO DAS ROLETAS ────────────────────────────────
const ROLETA_CONFIG = [
  {
    id: "roleta_sorte",
    name: "🍀 Sorte",
    cost: 1000,
    desc: "Pequenas apostas, grandes emoções. Ideal para começar.",
    premios: [
      { type: "gold", amount: 100, weight: 15 },
      { type: "gold", amount: 200, weight: 12 },
      { type: "gold", amount: 350, weight: 8 },
      { type: "gold", amount: 500, weight: 4 },
      { type: "xp", amount: 50, weight: 12 },
      { type: "xp", amount: 100, weight: 10 },
      { type: "xp", amount: 200, weight: 6 },
      { type: "xp", amount: 300, weight: 3 },
      { type: "xpp", amount: 5, weight: 8 },
      { type: "xpp", amount: 10, weight: 5 },
      { type: "xpp", amount: 20, weight: 2 },
      { type: "card", cardId: "rlt_c01", weight: 6 },
      { type: "card", cardId: "rlt_c02", weight: 5 },
      { type: "card", cardId: "rlt_c03", weight: 5 },
      { type: "card", cardId: "rlt_c04", weight: 4 },
      { type: "card", cardId: "rlt_c05", weight: 4 },
      { type: "card", cardId: "rlt_r01", weight: 2 },
      { type: "card", cardId: "rlt_r02", weight: 2 },
      { type: "card", cardId: "rlt_r03", weight: 1 },
    ]
  },
  {
    id: "roleta_aventureiros",
    name: "🧭 Aventureiros",
    cost: 5000,
    desc: "Riscos maiores, recompensas mais altas. Para quem ousa.",
    premios: [
      { type: "gold", amount: 500, weight: 10 },
      { type: "gold", amount: 800, weight: 8 },
      { type: "gold", amount: 1200, weight: 5 },
      { type: "gold", amount: 1500, weight: 2 },
      { type: "xp", amount: 200, weight: 8 },
      { type: "xp", amount: 400, weight: 6 },
      { type: "xp", amount: 600, weight: 4 },
      { type: "xp", amount: 800, weight: 2 },
      { type: "xpp", amount: 20, weight: 5 },
      { type: "xpp", amount: 35, weight: 3 },
      { type: "xpp", amount: 50, weight: 1 },
      { type: "card", cardId: "rlt_r01", weight: 8 },
      { type: "card", cardId: "rlt_r02", weight: 7 },
      { type: "card", cardId: "rlt_r03", weight: 6 },
      { type: "card", cardId: "rlt_e01", weight: 3 },
      { type: "card", cardId: "rlt_e02", weight: 2 },
      { type: "card", cardId: "rlt_e03", weight: 1 },
    ]
  },
  {
    id: "roleta_deuses",
    name: "⚡ Deuses",
    cost: 15000,
    desc: "Os deuses observam sua aposta. Será que você os agradará?",
    premios: [
      { type: "gold", amount: 2000, weight: 8 },
      { type: "gold", amount: 3000, weight: 6 },
      { type: "gold", amount: 4000, weight: 4 },
      { type: "gold", amount: 5000, weight: 1 },
      { type: "xp", amount: 500, weight: 6 },
      { type: "xp", amount: 1000, weight: 4 },
      { type: "xp", amount: 1500, weight: 2 },
      { type: "xp", amount: 2000, weight: 1 },
      { type: "xpp", amount: 50, weight: 4 },
      { type: "xpp", amount: 80, weight: 3 },
      { type: "xpp", amount: 120, weight: 2 },
      { type: "xpp", amount: 150, weight: 1 },
      { type: "card", cardId: "rlt_e01", weight: 6 },
      { type: "card", cardId: "rlt_e02", weight: 5 },
      { type: "card", cardId: "rlt_e03", weight: 4 },
      { type: "card", cardId: "rlt_l01", weight: 2 },
      { type: "card", cardId: "rlt_l02", weight: 1 },
      { type: "card", cardId: "rlt_m01", weight: 0.5 },
    ]
  },
  {
    id: "roleta_origens",
    name: "👑 Origens",
    cost: 20000,
    desc: "A roleta dos escolhidos. Apenas os mais corajosos (e ricos) ousam girar.",
    premios: [
      { type: "gold", amount: 5000, weight: 5 },
      { type: "gold", amount: 7000, weight: 3 },
      { type: "gold", amount: 10000, weight: 1 },
      { type: "xp", amount: 1000, weight: 4 },
      { type: "xp", amount: 2000, weight: 2 },
      { type: "xp", amount: 3000, weight: 1 },
      { type: "xpp", amount: 100, weight: 3 },
      { type: "xpp", amount: 200, weight: 2 },
      { type: "xpp", amount: 300, weight: 1 },
      { type: "card", cardId: "rlt_m01", weight: 3 },
      { type: "card", cardId: "rlt_u01", weight: 1.5 },
      { type: "card", cardId: "rlt_o01", weight: 0.1 },
    ]
  }
];
// Obs: encurtei os "name" das abas (removi "Roleta" repetido em cada uma) —
// era a causa principal do texto sobreposto/estourando nas abas.
// O nome completo original ainda aparece na descrição (desc) e no tooltip do botão.

// ─── FUNÇÕES DE SORTEIO ──────────────────────────────────────
function sortearPremio(premios) {
  const total = premios.reduce((acc, p) => acc + p.weight, 0);
  let rand = Math.random() * total;
  for (const premio of premios) {
    rand -= premio.weight;
    if (rand <= 0) {
      return premio;
    }
  }
  return premios[premios.length - 1];
}

function girarRoleta(save, roletaId) {
  const config = ROLETA_CONFIG.find(r => r.id === roletaId);
  if (!config) return { ok: false, error: "Roleta não encontrada." };

  if (save.gold < config.cost) {
    return { ok: false, error: "Ouro insuficiente." };
  }

  if (typeof spendGold === "function") {
    spendGold(save, config.cost);
  } else {
    save.gold -= config.cost;
  }

  const premio = sortearPremio(config.premios);
  // BUGFIX: guarda o índice real do prêmio sorteado (dentro de config.premios).
  // Antes, quando o prêmio era uma carta duplicada, resultado.tipo virava
  // "gold" com um valor aleatório (50~150) que não batia com NENHUM dos
  // valores fixos de "gold" da lista de prêmios — a roleta então caía
  // sempre na primeira fatia (índice 0) em vez da fatia da carta sorteada,
  // fazendo o ponteiro mentir sobre o que realmente foi ganho.
  const premioIndex = config.premios.indexOf(premio);
  let resultado = { tipo: premio.type, valor: null, label: "", premioIndex: premioIndex };

  // FIX: garante que save.vault existe antes de usar .includes()/.push()
  if (!save.vault) save.vault = [];

  switch (premio.type) {
    case "gold":
      earnGold(save, premio.amount);
      resultado.valor = premio.amount;
      resultado.label = `+${premio.amount} 🪙`;
      break;
    case "xp":
      save.xp = (save.xp || 0) + premio.amount;
      resultado.valor = premio.amount;
      resultado.label = `+${premio.amount} XP`;
      break;
    case "xpp":
      save.xpp = (save.xpp || 0) + premio.amount;
      resultado.valor = premio.amount;
      resultado.label = `+${premio.amount} XPP`;
      break;
    case "card": {
      const card = getCardById(premio.cardId);
      if (card) {
        if (!save.vault.includes(card.id)) {
          save.vault.push(card.id);
          resultado.label = `+ ${card.name} (${card.rarity})`;
          resultado.valor = card.id;
        } else {
          const goldComp = Math.floor(50 + Math.random() * 100);
          earnGold(save, goldComp);
          resultado.label = `+${goldComp} 🪙 (duplicata)`;
          resultado.valor = goldComp;
          resultado.tipo = "gold";
        }
      } else {
        earnGold(save, 100);
        resultado.label = `+100 🪙 (carta inválida)`;
        resultado.valor = 100;
        resultado.tipo = "gold";
      }
      break;
    }
    default:
      resultado.label = "Prêmio desconhecido";
  }

  if (!save.roletaHistorico) save.roletaHistorico = [];
  save.roletaHistorico.unshift({
    roleta: config.name,
    premio: resultado.label,
    data: new Date().toLocaleString()
  });
  if (save.roletaHistorico.length > 50) save.roletaHistorico.pop();

  if (!save.roletaStats) save.roletaStats = { totalGiros: 0, maiorPremio: 0 };
  save.roletaStats.totalGiros = (save.roletaStats.totalGiros || 0) + 1;
  // BUGFIX: comparava premio.type/premio.amount (o prêmio original sorteado),
  // então quando uma carta duplicada virava ouro de compensação (resultado.tipo
  // reatribuído para "gold"), esse ouro nunca era considerado pro "maior
  // prêmio". Agora compara o resultado FINAL realmente creditado ao jogador.
  if (resultado.tipo === "gold" && resultado.valor > (save.roletaStats.maiorPremio || 0)) {
    save.roletaStats.maiorPremio = resultado.valor;
  }

  writeSave(save);
  return { ok: true, resultado };
}

// ─── FUNÇÕES AUXILIARES PARA A UI ──────────────────────────
function getPremiosDisplay(roletaId) {
  const config = ROLETA_CONFIG.find(r => r.id === roletaId);
  if (!config) return [];
  return config.premios.map(p => {
    let label = "";
    if (p.type === "gold") label = `🪙 ${p.amount}`;
    else if (p.type === "xp") label = `⭐ ${p.amount} XP`;
    else if (p.type === "xpp") label = `🎖️ ${p.amount} XPP`;
    else if (p.type === "card") {
      const card = getCardById(p.cardId);
      label = card ? `${card.img} ${card.name}` : "❓ Carta";
    }
    return { ...p, label };
  });
}

function getPesoTotal(roletaId) {
  const config = ROLETA_CONFIG.find(r => r.id === roletaId);
  if (!config) return 0;
  return config.premios.reduce((acc, p) => acc + p.weight, 0);
}

console.log("[Card Fight] Sistema de Roleta carregado ✓ (v1.2 — bugfix fatia/maior prêmio)");