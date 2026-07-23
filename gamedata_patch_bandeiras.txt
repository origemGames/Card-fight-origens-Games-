/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata_patch_bandeiras.js – PATCH v1.0
   Corrige o farm fácil do modo "Dominar Bandeiras":
   escala a força das cartas do bot pelo NÍVEL (xp) + PATENTE (xpp)
   do jogador, em vez de só pela patente.

   COMO APLICAR:
   Não é preciso editar gamedata.js/2/3.js. Basta incluir este
   arquivo DEPOIS deles e ANTES do script do bandeiras.html:

   <script src="gamedata.js"></script>
   <script src="gamedata2.js"></script>
   <script src="gamedata3.js"></script>
   <script src="gamedata_patch_bandeiras.js"></script>   <!-- NOVO -->
   <script> ... lógica do bandeiras.html ... </script>

   Nada do gamedata.js original é alterado — a função antiga
   getBotHand() continua existindo e sendo usada onde já era
   usada. Esse patch só ADICIONA getFlagsBotHand(), usada
   exclusivamente pelo modo Bandeiras.
   ============================================================ */

"use strict";

/**
 * Monta a mão do bot no modo Bandeiras com base na força real do
 * jogador: o maior entre progresso de NÍVEL (xp) e de PATENTE (xpp).
 *
 * Por quê os dois? Um jogador pode focar em farmar patente (xpp)
 * sem subir muito de nível (xp), ou vice-versa. Usando só um dos
 * dois, dava pra "esconder" evolução do outro e manter o bot fraco
 * de propósito. Pegando o maior dos dois fatores, o bot sempre
 * acompanha o jogador mais evoluído dos dois eixos.
 *
 * IMPORTANTE: isso só afeta QUAIS CARTAS o bot recebe (raridade/
 * poder do baralho). Não mexe em dano de torre nem em HP do bot.
 */
function getFlagsBotHand(save) {
  const xp  = (save && save.xp)  || 0;
  const xpp = (save && save.xpp) || 0;

  const level   = (typeof getLevel === "function") ? getLevel(xp) : 1;
  const rankObj = (typeof getRank  === "function") ? getRank(xpp) : RANKS[0];
  const rankIdx = RANKS.indexOf(rankObj);

  // Normaliza os dois eixos de progresso pra uma escala 0..1.
  // Nível 120+ já é considerado "força máxima" por nível (curva de
  // XP é extremamente longa, não faz sentido esperar nível 9999).
  const levelFactor = Math.min(1, level / 120);
  const rankFactor  = Math.min(1, rankIdx / (RANKS.length - 1));
  const strength    = Math.max(levelFactor, rankFactor);

  let pool;
  if (strength < 0.08) {
    pool = ALL_CARDS.filter(c => c.rarity === "COMMON");
  } else if (strength < 0.18) {
    pool = ALL_CARDS.filter(c => ["COMMON", "RARE"].includes(c.rarity));
  } else if (strength < 0.32) {
    pool = ALL_CARDS.filter(c => ["COMMON", "RARE", "EPIC"].includes(c.rarity));
  } else if (strength < 0.50) {
    pool = ALL_CARDS.filter(c => ["RARE", "EPIC"].includes(c.rarity));
  } else if (strength < 0.68) {
    pool = ALL_CARDS.filter(c => ["RARE", "EPIC", "LEGENDARY"].includes(c.rarity));
  } else if (strength < 0.85) {
    pool = ALL_CARDS.filter(c => ["EPIC", "LEGENDARY", "MYTHIC"].includes(c.rarity));
  } else {
    pool = ALL_CARDS.filter(c => ["LEGENDARY", "MYTHIC", "ULTRA_RARE", "ORIGENS"].includes(c.rarity));
  }

  if (!pool || pool.length === 0) pool = ALL_CARDS;

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}