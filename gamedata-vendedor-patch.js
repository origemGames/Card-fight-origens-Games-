/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-vendedor-patch.js
   VENDEDOR ERRANTE – loja secundária com cartas exclusivas,
   rotação horária, disponibilidade por raridade e contador
   de Aparições.

   Este arquivo deve ser carregado DEPOIS de gamedata.js (e de
   qualquer outro patch), pois ele encadeia (wrap) a função
   getCardById já existente, em vez de sobrescrevê-la.
   ============================================================ */

"use strict";

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO GERAL
// ══════════════════════════════════════════════════════════════
const VENDEDOR_CONFIG = {
  rotationMs: 60 * 60 * 1000, // loja muda a cada 1 hora
  maxCards:   1000,           // meta futura do vendedor (hoje: 50)
};

// ══════════════════════════════════════════════════════════════
// CARTAS EXCLUSIVAS DO VENDEDOR (50 cartas iniciais)
// id | name | img (emoji) | rarity | chance de aparecer em stock
// + atk/hp (compatibilidade com batalha) + price (ouro) + stock
// (unidades disponíveis por rotação) + desc
// ══════════════════════════════════════════════════════════════
const VENDEDOR_CARDS = [
  // ── COMMON ──
  { id:"vd001", name:"Errante do Véu", img:"🕳️", rarity:"COMMON", atk:10, hp:77, price:178, chance:0.6235, stock:5, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd002", name:"Sentinela Perdida", img:"🪖", rarity:"COMMON", atk:20, hp:94, price:176, chance:0.5761, stock:5, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd003", name:"Vagante das Brumas", img:"🌫️", rarity:"COMMON", atk:10, hp:65, price:158, chance:0.6156, stock:5, desc:"Encontrada em uma dimensão que já não existe mais." },
  { id:"vd004", name:"Caçador de Restos", img:"🦴", rarity:"COMMON", atk:13, hp:94, price:293, chance:0.6759, stock:5, desc:"O vendedor a guarda com um cuidado estranho." },
  { id:"vd005", name:"Nômade Estelar", img:"🌠", rarity:"COMMON", atk:14, hp:60, price:300, chance:0.7776, stock:5, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd006", name:"Guarda de Portal", img:"🚪", rarity:"COMMON", atk:15, hp:77, price:258, chance:0.5966, stock:5, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd007", name:"Recruta Dimensional", img:"🎒", rarity:"COMMON", atk:11, hp:84, price:176, chance:0.579, stock:5, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd008", name:"Coletor de Poeira", img:"✨", rarity:"COMMON", atk:10, hp:89, price:217, chance:0.7109, stock:5, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd009", name:"Batedor do Vazio", img:"🔦", rarity:"COMMON", atk:18, hp:78, price:170, chance:0.7988, stock:5, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd010", name:"Peregrino Cinzento", img:"🚶", rarity:"COMMON", atk:13, hp:64, price:297, chance:0.5637, stock:5, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd011", name:"Ferreiro Errante", img:"🔧", rarity:"COMMON", atk:11, hp:74, price:224, chance:0.8099, stock:5, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd012", name:"Mercador Menor", img:"🪙", rarity:"COMMON", atk:17, hp:100, price:221, chance:0.8002, stock:5, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd013", name:"Vigia das Fendas", img:"👁️‍🗨️", rarity:"COMMON", atk:15, hp:73, price:244, chance:0.7511, stock:5, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd014", name:"Andarilho Rúnico", img:"🪧", rarity:"COMMON", atk:18, hp:75, price:193, chance:0.599, stock:5, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd015", name:"Explorador Nebuloso", img:"🧭", rarity:"COMMON", atk:20, hp:95, price:219, chance:0.6159, stock:5, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd016", name:"Aprendiz Viajante", img:"📜", rarity:"COMMON", atk:13, hp:62, price:164, chance:0.7915, stock:5, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  // ── RARE ──
  { id:"vd017", name:"Guardião de Fenda", img:"🛡️", rarity:"RARE", atk:19, hp:83, price:637, chance:0.4626, stock:3, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd018", name:"Caçador Astral", img:"🌌", rarity:"RARE", atk:28, hp:101, price:608, chance:0.3591, stock:3, desc:"O vendedor a guarda com um cuidado estranho." },
  { id:"vd019", name:"Espectro Comerciante", img:"👻", rarity:"RARE", atk:22, hp:78, price:573, chance:0.3293, stock:3, desc:"O vendedor sorri sempre que alguém pergunta sobre esta carta." },
  { id:"vd020", name:"Cavaleiro do Entre-Mundos", img:"🐎", rarity:"RARE", atk:27, hp:97, price:882, chance:0.4596, stock:3, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd021", name:"Feiticeiro de Portais", img:"🌀", rarity:"RARE", atk:21, hp:78, price:685, chance:0.3819, stock:3, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd022", name:"Arqueira das Marés Temporais", img:"🏹", rarity:"RARE", atk:18, hp:77, price:886, chance:0.3106, stock:3, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd023", name:"Andarilho de Cristal", img:"💎", rarity:"RARE", atk:24, hp:108, price:848, chance:0.2927, stock:3, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd024", name:"Xamã do Abismo", img:"🔮", rarity:"RARE", atk:25, hp:103, price:805, chance:0.3303, stock:3, desc:"Encontrada em uma dimensão que já não existe mais." },
  { id:"vd025", name:"Rastreador Cósmico", img:"🛰️", rarity:"RARE", atk:19, hp:104, price:848, chance:0.4302, stock:3, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd026", name:"Duelista das Sombras", img:"⚔️", rarity:"RARE", atk:22, hp:97, price:557, chance:0.3116, stock:3, desc:"Encontrada em uma dimensão que já não existe mais." },
  { id:"vd027", name:"Encantador de Fendas", img:"✴️", rarity:"RARE", atk:22, hp:102, price:869, chance:0.4324, stock:3, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd028", name:"Vidente Errante", img:"🔭", rarity:"RARE", atk:292, hp:1100, price:8920, chance:0.18015, stock:3, desc:"Ninguém sabe de onde ela realmente veio." },
  // ── EPIC ──
  { id:"vd029", name:"Arauto Dimensional", img:"📯", rarity:"EPIC", atk:321, hp:138, price:16056, chance:0.1162, stock:2, desc:"Encontrada em uma dimensão que já não existe mais." },
  { id:"vd030", name:"Dragão Menor do Vácuo", img:"🐉", rarity:"EPIC", atk:311, hp:1201, price:21103, chance:0.1019, stock:2, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd031", name:"Titã de Poeira Estelar", img:"🪐", rarity:"EPIC", atk:300, hp:1005, price:23909, chance:0.1058, stock:2, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd032", name:"Necromante Viajante", img:"💀", rarity:"EPIC", atk:330, hp:949, price:15807, chance:0.1978, stock:2, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd033", name:"Golem de Portal", img:"🗿", rarity:"EPIC", atk:396, hp:1290, price:16301, chance:0.1947, stock:2, desc:"Carrega o cheiro de lugares que nenhum mapa registra." },
  { id:"vd034", name:"Fênix Recém-Nascida", img:"🔥", rarity:"EPIC", atk:384, hp:1298, price:17701, chance:0.1423, stock:2, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd035", name:"Anjo Caído em Trânsito", img:"🕊️", rarity:"EPIC", atk:304, hp:1938, price:24501, chance:0.173, stock:2, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd036", name:"Devorador de Fendas", img:"🕳️", rarity:"EPIC", atk:300, hp:1105, price:2230, chance:0.1995, stock:2, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd037", name:"Guardiã do Tempo Roubado", img:"⏳", rarity:"EPIC", atk:304, hp:1918, price:19048, chance:0.1121, stock:2, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd038", name:"Berserker das Dimensões", img:"🪓", rarity:"EPIC", atk:301, hp:991, price:15650, chance:0.1588, stock:2, desc:"Ninguém sabe de onde ela realmente veio." },
  // ── LEGENDARY ──
  { id:"vd039", name:"Senhor das Fendas", img:"👑", rarity:"LEGENDARY", atk:307, hp:1290, price:74010, chance:0.0375, stock:1, desc:"Encontrada em uma dimensão que já não existe mais." },
  { id:"vd040", name:"Colosso Estelar", img:"🌟", rarity:"LEGENDARY", atk:305, hp:1292, price:59037, chance:0.0351, stock:1, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd041", name:"Devoradora de Mundos", img:"🌑", rarity:"LEGENDARY", atk:397, hp:1307, price:71095, chance:0.0284, stock:1, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd042", name:"Arcanjo do Vazio", img:"😇", rarity:"LEGENDARY", atk:306, hp:1956, price:72908, chance:0.0252, stock:1, desc:"Ninguém sabe de onde ela realmente veio." },
  { id:"vd043", name:"Wyrm das Marés do Tempo", img:"🐲", rarity:"LEGENDARY", atk:490, hp:1392, price:69037, chance:0.0183, stock:1, desc:"Uma relíquia rara, mesmo entre as raridades comuns." },
  { id:"vd044", name:"Herald da Última Dimensão", img:"🔱", rarity:"LEGENDARY", atk:400, hp:1496, price:64591, chance:0.0113, stock:1, desc:"Encontrada em uma dimensão que já não existe mais." },
  // ── MYTHIC ──
  { id:"vd045", name:"Avatar do Comerciante Ancião", img:"🧙", rarity:"MYTHIC", atk:592, hp:1596, price:205916, chance:0.098, stock:1, desc:"Dizem que atravessou mais fendas do que qualquer outra em seu baú." },
  { id:"vd046", name:"Sombra Primordial", img:"🌘", rarity:"MYTHIC", atk:493, hp:1695, price:215958, chance:0.045, stock:1, desc:"O vendedor a guarda com um cuidado estranho." },
  { id:"vd047", name:"Fera do Fim dos Tempos", img:"🐺", rarity:"MYTHIC", atk:489, hp:1691, price:161048, chance:0.056, stock:1, desc:"Ninguém sabe de onde ela realmente veio." },
  // ── ULTRA_RARE ──
  { id:"vd048", name:"Guardião do Multiverso", img:"🌐", rarity:"ULTRA_RARE", atk:501, hp:2098, price:543207, chance:0.009, stock:1, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  { id:"vd049", name:"Eco do Primeiro Vendedor", img:"🔔", rarity:"ULTRA_RARE", atk:600, hp:2104, price:408028, chance:0.0032, stock:1, desc:"O vendedor jura que a trocou por três moedas de um mundo esquecido." },
  // ── ORIGENS ──
  { id:"vd050", name:"O Vendedor Original", img:"🧳", rarity:"ORIGENS", atk:895, hp:2590, price:1200000, chance:0.0005, stock:1, desc:"Uma relíquia rara, Dificilmente encontrada." },
];

// ══════════════════════════════════════════════════════════════
// FALA DO VENDEDOR
// ══════════════════════════════════════════════════════════════
const VENDEDOR_DIALOGUE_INTRO =
  "Hey, jogador! Sou um velho vendedor de cartas que procura cartas por dimensões e " +
  "dimensões, e vendo na minha loja por preços justos (nem tanto hehe). Também trago " +
  "cartas novas, adicionadas a cada atualização do jogo, e um dia posso chegar a ter " +
  "até 1000 cartas exclusivas na minha loja... Cada carta aqui veio de um lugar " +
  "diferente, atravessando fendas que quase ninguém sabe que existem. Mas nem tudo " +
  "que carrego cabe na minha bagagem ao mesmo tempo — por isso minha loja muda a cada " +
  "hora, mostrando só uma parte do que tenho comigo. Fique de olho, porque o que está " +
  "disponível agora pode sumir na próxima hora... e pode levar muito tempo até eu " +
  "trazer de novo!";

const VENDEDOR_DIALOGUE_APPARITIONS =
  "Sou um procurador eficiente, mas tem umas cartas que são quase impossíveis de " +
  "achar! Você pode ver aqui quantas vezes uma carta de cada raridade já teve sua " +
  "Aparição na minha loja:";

// ══════════════════════════════════════════════════════════════
// PRNG DETERMINÍSTICO (mesma rotação para todo mundo, a cada hora)
// ══════════════════════════════════════════════════════════════
function _vendedorHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function _vendedorSeededRandom(seedStr) {
  let t = (_vendedorHash(seedStr) + 0x6D2B79F5) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function getVendedorHourBucket() {
  return Math.floor(Date.now() / VENDEDOR_CONFIG.rotationMs);
}

function getVendedorMsUntilNextRotation() {
  const next = (getVendedorHourBucket() + 1) * VENDEDOR_CONFIG.rotationMs;
  return Math.max(0, next - Date.now());
}

// Rola, de forma determinística, se uma carta está disponível numa rotação
function isVendedorCardAvailable(card, bucket) {
  const roll = _vendedorSeededRandom("vendedor_v1_" + bucket + "_" + card.id);
  return roll < card.chance;
}

// Lista (sem estado de save) de quais cartas estão disponíveis numa rotação
function getVendedorStockList(bucket) {
  if (typeof bucket !== "number") bucket = getVendedorHourBucket();
  return VENDEDOR_CARDS.map(function (card) {
    return { card: card, available: isVendedorCardAvailable(card, bucket) };
  });
}

// ══════════════════════════════════════════════════════════════
// ESTADO POR JOGADOR (save.vendedor)
// ══════════════════════════════════════════════════════════════
function ensureVendedorState(save) {
  if (!save.vendedor) {
    save.vendedor = {
      hourBucket: -1,
      apparitions: {},
      purchasedThisRotation: {},
    };
  }
  save.vendedor.apparitions = save.vendedor.apparitions || {};
  Object.keys(RARITY).forEach(function (rk) {
    if (typeof save.vendedor.apparitions[rk] !== "number") {
      save.vendedor.apparitions[rk] = 0;
    }
  });
  save.vendedor.purchasedThisRotation = save.vendedor.purchasedThisRotation || {};

  const bucket = getVendedorHourBucket();
  if (save.vendedor.hourBucket !== bucket) {
    // Nova rotação: soma as Aparições da nova rodada e libera o estoque
    const stock = getVendedorStockList(bucket);
    stock.forEach(function (s) {
      if (s.available) {
        save.vendedor.apparitions[s.card.rarity] =
          (save.vendedor.apparitions[s.card.rarity] || 0) + 1;
      }
    });
    save.vendedor.purchasedThisRotation = {};
    save.vendedor.hourBucket = bucket;
  }

  return save.vendedor;
}

// Estoque completo (com disponibilidade + quantidade restante) para exibir na tela
function getVendedorFullStock(save) {
  const state = ensureVendedorState(save);
  const bucket = state.hourBucket;
  return getVendedorStockList(bucket).map(function (s) {
    const bought = state.purchasedThisRotation[s.card.id] || 0;
    return {
      card: s.card,
      available: s.available,
      remaining: s.available ? Math.max(0, s.card.stock - bought) : 0,
    };
  });
}

// Compra uma carta do vendedor
// BUGFIX (auditoria): a função nunca checava o limite do cofre
// (save.vaultLimit, igual ao openPack() em gamedata.js) antes de
// adicionar a carta comprada. Isso tinha dois efeitos: (1) o jogador
// podia comprar infinitamente além da capacidade do cofre, furando o
// limite do jogo; e (2) o motivo "vault_full" já tratado do lado do
// vendedor.html (mensagem "Seu Cofre está cheio!") nunca era de fato
// retornado por essa função — código morto na UI.
function buyVendedorCard(save, cardId) {
  const state = ensureVendedorState(save);
  const card = VENDEDOR_CARDS.find(function (c) { return c.id === cardId; });
  if (!card) return { ok: false, reason: "not_found" };

  const available = isVendedorCardAvailable(card, state.hourBucket);
  if (!available) return { ok: false, reason: "unavailable" };

  const bought = state.purchasedThisRotation[cardId] || 0;
  if (bought >= card.stock) return { ok: false, reason: "sold_out" };

  if ((save.gold || 0) < card.price) return { ok: false, reason: "no_gold" };

  save.vault = save.vault || [];
  const vaultLimit = save.vaultLimit || 50;
  if (save.vault.length >= vaultLimit) return { ok: false, reason: "vault_full" };

  spendGold(save, card.price);
  save.vault.push(cardId);
  state.purchasedThisRotation[cardId] = bought + 1;
  writeSave(save);

  return { ok: true };
}

// ══════════════════════════════════════════════════════════════
// COMPATIBILIDADE: encadeia getCardById para reconhecer VENDEDOR_CARDS
// ══════════════════════════════════════════════════════════════
(function patchGetCardById() {
  const _prevGetCardById = (typeof getCardById === "function") ? getCardById : null;
  window.getCardById = function (id) {
    if (_prevGetCardById) {
      const c = _prevGetCardById(id);
      if (c) return c;
    }
    return VENDEDOR_CARDS.find(function (c) { return c.id === id; }) || null;
  };
})();
