/* ═══════════════════════════════════════════════════════════════════════
   gamedata-index-patch.js — Card Fight
   PATCH: Sincronização total do catálogo de cartas

   PROBLEMA:
   O jogo foi crescendo e hoje as cartas vivem espalhadas em vários
   arquivos/arrays diferentes: ALL_CARDS (gamedata.js), EXTRA_CARDS e
   EVENT_CARDS (gamedata2.js), V5_CARDS/V5_EVENT_CARDS/VOID_GUARDIANS_CARDS
   (gamedata3.js), FISHING_CARDS (gamedata-pesca.js + gamedata-pesca-patch.js),
   ADVENTURE_CARDS (gamedata-aventuras-patch.js), entre outros.

   O Índice de Cartas (indexcartas.html) só olhava para ALL_CARDS +
   EVENT_CARDS, então cartas de pesca, de aventura e de expansões
   ficavam fora da contagem "X/Y cartas" — mesmo o jogador já tendo
   essas cartas no cofre.

   SOLUÇÃO:
   Este arquivo NÃO reescreve nenhum gamedata existente. Ele só precisa
   ser carregado por ÚLTIMO (depois de todos os outros gamedata*.js) em
   qualquer página que precise enxergar o catálogo completo. Ele varre
   todos os arrays de cartas conhecidos do jogo e garante que cada carta
   exista em ALL_CARDS (sem duplicar por id) — que continua sendo a
   "fonte da verdade" que o resto do jogo (getCardById, índice, etc.) já
   usa.

   COMO ADICIONAR UMA NOVA FONTE DE CARTAS NO FUTURO:
   Quando criar um novo gamedata-xxxx.js com cartas novas, basta:
     1) Carregar esse novo arquivo ANTES deste patch em todas as páginas.
     2) Adicionar uma linha em syncKnownSources() abaixo, tipo:
          if (typeof MEU_ARRAY_DE_CARTAS !== "undefined") {
            mergeIntoAllCards(MEU_ARRAY_DE_CARTAS);
          }
   Nenhum outro gamedata precisa ser tocado.
   ═══════════════════════════════════════════════════════════════════════ */

(function patchCardIndexSync() {
  'use strict';

  if (typeof ALL_CARDS === "undefined" || !Array.isArray(ALL_CARDS)) {
    console.warn("[Index Patch] ALL_CARDS não encontrado — carregue gamedata.js antes deste patch.");
    return;
  }

  // Junta um array de cartas dentro de ALL_CARDS, ignorando ids repetidos.
  function mergeIntoAllCards(cards) {
    if (!Array.isArray(cards)) return 0;
    const existingIds = new Set(ALL_CARDS.map(c => c.id));
    let added = 0;
    cards.forEach(c => {
      if (c && c.id && !existingIds.has(c.id)) {
        ALL_CARDS.push(c);
        existingIds.add(c.id);
        added++;
      }
    });
    return added;
  }

  function syncKnownSources() {
    let totalAdded = 0;

    // gamedata2.js
    if (typeof EXTRA_CARDS !== "undefined") totalAdded += mergeIntoAllCards(EXTRA_CARDS);
    if (typeof EVENT_CARDS !== "undefined") totalAdded += mergeIntoAllCards(EVENT_CARDS);

    // gamedata3.js
    if (typeof V5_CARDS !== "undefined") totalAdded += mergeIntoAllCards(V5_CARDS);
    if (typeof V5_EVENT_CARDS !== "undefined") totalAdded += mergeIntoAllCards(V5_EVENT_CARDS);
    if (typeof VOID_GUARDIANS_CARDS !== "undefined") totalAdded += mergeIntoAllCards(VOID_GUARDIANS_CARDS);

    // gamedata-pesca.js + gamedata-pesca-patch.js
    // (FISHING_CARDS já vem com as cartas do patch de pesca somadas,
    // já que o patch faz FISHING_CARDS.push(...) antes deste arquivo rodar)
    if (typeof FISHING_CARDS !== "undefined") totalAdded += mergeIntoAllCards(FISHING_CARDS);

    // Bônus: corrige um bug do gamedata-pesca-patch.js onde as 7 cartas
    // extras (pf092–pf098) nunca chegam a FISHING_CARDS porque o patch
    // tenta usar "window.PESCA_CARDS_V11", que nunca existe de verdade
    // (PESCA_CARDS_V11 só existe dentro do escopo local do patch).
    // Aqui pegamos essas cartas diretamente onde elas realmente ficam
    // expostas: window.PESCA_CARDS_EXTRA_V11_1.
    if (Array.isArray(window.PESCA_CARDS_EXTRA_V11_1)) {
      totalAdded += mergeIntoAllCards(window.PESCA_CARDS_EXTRA_V11_1);
    }

    // gamedata-aventuras-patch.js
    if (typeof ADVENTURE_CARDS !== "undefined") totalAdded += mergeIntoAllCards(ADVENTURE_CARDS);

    return totalAdded;
  }

  const added = syncKnownSources();

  // Disponibiliza uma forma padrão de qualquer página pegar o catálogo
  // 100% completo, sem precisar saber em qual gamedata cada carta nasceu.
  window.getFullCardCatalog = function () {
    return ALL_CARDS.slice();
  };

  console.log(
    `[Index Patch] Catálogo sincronizado: +${added} carta(s) juntada(s) em ALL_CARDS ` +
    `(total agora: ${ALL_CARDS.length} cartas únicas).`
  );
})();
