// ══════════════════════════════════════════════════════════════
// NEW PERSONAGEM — sistema dedicado para cartas novas
// ══════════════════════════════════════════════════════════════
// PRA QUE SERVE ESTE ARQUIVO:
// Os gamedata.js / gamedata2.js / gamedata3.js já estão enormes.
// A partir de agora, toda carta NOVA (personagem novo, não repetido)
// deve ser adicionada aqui dentro, no array NEW_PERSONAGEM_CARDS.
// Isso injeta automaticamente a carta em ALL_CARDS — indexcartas.html
// (e qualquer outra página que carregue este script) já lê e mostra
// a carta normalmente, sem precisar mexer em mais nada.
//
// COMO ADICIONAR UMA CARTA NOVA:
// 1. Copie um objeto de exemplo abaixo.
// 2. Troque o "id" por um novo, sempre come\u00e7ando com "np" e um
//    n\u00famero sequencial que ainda n\u00e3o exista (np001, np002, np003...).
//    Esse prefixo "np" \u00e9 exclusivo deste arquivo, ent\u00e3o nunca vai
//    colidir com ids dos outros gamedata.js.
// 3. Preencha name, atk, hp, rarity (COMMON | RARE | EPIC | LEGENDARY |
//    MYTHIC | ULTRA_RARE | ORIGENS), img (um emoji) e desc.
// 4. Salve o arquivo. Pronto — a carta já aparece no jogo.
//
// COMO CARREGAR ESTE ARQUIVO:
// Adicione a linha abaixo em TODA página que precisa ver as cartas
// novas (indexcartas.html, index.html, vault.html, battle.html,
// shop.html, correio.html etc.), sempre DEPOIS de gamedata.js,
// gamedata2.js e gamedata3.js:
//
//   <script src="NewPersonagem.js"></script>
//
// Em indexcartas.html especificamente, coloque este script ANTES do
// gamedata-index-patch.js (que precisa ser sempre o último, pois ele
// varre todos os arrays de cartas do jogo antes do Índice renderizar).
// ══════════════════════════════════════════════════════════════

const NEW_PERSONAGEM_CARDS = [
  // ── Exemplos iniciais (pode apagar ou manter, são cartas normais) ──
  { id:"np001", name:"Andarilho das Ruínas",   atk:150, hp:520, rarity:"COMMON", img:"🥾", desc:"Cruza terras esquecidas em busca de relíquias perdidas." },
  { id:"np002", name:"Bruxa do Pântano Negro", atk:260, hp:830, rarity:"EPIC",   img:"🧙‍♀️", desc:"Suas maldições apodrecem tudo o que tocam." },
  { id:"np003", name:"Colosso de Aço Vivo",    atk:340, hp:1450,rarity:"LEGENDARY", img:"🤖", desc:"Metal que pensa, sente ódio e nunca se cansa." },
];

// Injeta as cartas novas no array global do jogo
if (typeof ALL_CARDS !== "undefined") {
  NEW_PERSONAGEM_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}
