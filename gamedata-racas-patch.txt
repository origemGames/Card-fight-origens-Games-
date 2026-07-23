/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata-racas-patch.js – v19.2
   Sistema "Faça Seu Caminho" (Raças & Run)
   ------------------------------------------------------------
   Este patch é 100% aditivo: nao altera nem substitui nenhum
   objeto de gamedata.js / gamedata2.js / gamedata3.js.
   Ele apenas:
     - Registra as 5 raças especiais + Origens
     - Define os caminhos (nodes de batalha e rotas duplas)
     - Define os 5 Artefatos e a fusão final
     - Define a nova moeda "Energia" (ícone ⚡️E)
     - Registra as 20 conquistas do sistema
     - Expõe window.RacasAPI com toda a lógica
     - Aplica os bônus permanentes onde faz sentido
   ============================================================ */
"use strict";

(function(){

  // ═════════════════════════════════════════════════════════════
  // 0.  UTILS SEGUROS
  // ═════════════════════════════════════════════════════════════
  // BUGFIX v19.1: _save()/_persist() tinham um fallback próprio
  // (localStorage direto + JSON.stringify puro) que NÃO bate com o
  // formato real do save (gamedata.js usa _encodeSave/_decodeSave em
  // base64 e recalcula um goldHash anti-cheat). Resultado: todo
  // ouro/XP/XPP concedido por este patch era escrito por fora do
  // ledger (totalGoldEarned/totalGoldSpent) e do hash — na próxima
  // getOrCreateSave() o anti-cheat detectava a divergência do
  // goldHash e ZERAVA/TRUNCAVA o ouro do jogador. Agora sempre se
  // usa getOrCreateSave()/writeSave() reais, e qualquer alteração de
  // ouro passa por earnGold()/spendGold() para manter ledger e hash
  // consistentes. O fallback é só um último recurso.
  function _save(){
    if (typeof getOrCreateSave === "function") return getOrCreateSave();
    try {
      var raw = localStorage.getItem("cardfight_save_v3");
      if (raw) return JSON.parse(raw);
    } catch(e){}
    return {};
  }
  function _persist(s){
    if (typeof writeSave === "function") { writeSave(s); return; }
    try { localStorage.setItem("cardfight_save_v3", JSON.stringify(s)); } catch(e){}
  }
  function _earn(s, amount){
    if (!amount) return;
    if (typeof earnGold === "function") earnGold(s, amount);
    else s.gold = (s.gold||0) + amount;
  }
  function _spend(s, amount){
    if (!amount) return true;
    if (typeof spendGold === "function") return spendGold(s, amount);
    if ((s.gold||0) < amount) return false;
    s.gold -= amount;
    return true;
  }
  function fmt(n){
    if (typeof fmtNum === "function") return fmtNum(n);
    n = Number(n)||0;
    if (n >= 1e6) return (n/1e6).toFixed(1)+"M";
    if (n >= 1e3) return (n/1e3).toFixed(1)+"K";
    return String(Math.floor(n));
  }
  function _rand(a,b){ return a + Math.floor(Math.random()*(b-a+1)); }

  // BUGFIX (auditoria): fuseDominator() empurrava o OBJETO inteiro da carta
  // pra save.vault (s.vault.push(card)), quebrando o formato usado em TODO
  // o resto do jogo, onde vault é uma lista de IDs (string) resolvidos via
  // getCardById() — ver getHandFromVault()/openPack() em gamedata.js e o
  // mesmo padrão já usado corretamente em gamedata-vendedor-patch.js. Isso
  // corrompia o cofre (uma entrada "diferente" de todas as outras) e
  // quebraria qualquer tela/lógica que espera IDs (Cofre, Batalha...).
  // Como só pode existir 1 Dominador por conta, usamos um id fixo e
  // registramos a carta aqui, encadeando getCardById() no mesmo estilo do
  // patch do vendedor, pra ela ser resolvível em qualquer página/sessão.
  var RACAS_SPECIAL_CARDS = {
    art_dominator: {
      id:"art_dominator", name:"Dominador de Artefatos", img:"👑",
      atk:1050, hp:3000, rarity:"ORIGENS",
      desc:"A carta mais poderosa do jogo. Fundida a partir dos 5 Artefatos."
    }
  };
  (function _patchGetCardByIdForRacas(){
    var _prevGetCardById = (typeof getCardById === "function") ? getCardById : null;
    window.getCardById = function(id){
      if (_prevGetCardById){
        var c = _prevGetCardById(id);
        if (c) return c;
      }
      return RACAS_SPECIAL_CARDS[id] || null;
    };
  })();

  // BUGFIX (auditoria): battle() concedia o título de Origens V4 escrevendo
  // diretamente em "s.title" — um campo que NÃO existe no schema do save
  // (ver createDefaultSave() em gamedata.js). O jogo inteiro usa
  // save.profileTitle, que guarda um ID resolvido por getProfileItemById()
  // dentro de PROFILE_ITEMS (ver buildProfileCard() em gamedata.js). Como
  // "s.title" nunca era lido por nenhuma tela, o título "Portador das
  // Origens" prometido no Painel e na tela de resultado da batalha nunca
  // aparecia em lugar nenhum, mesmo depois de conquistado. Corrigido no
  // mesmo padrão aditivo já usado acima para a carta do Dominador: registra
  // um item de título especial e encadeia getProfileItemById().
  var RACAS_SPECIAL_PROFILE_ITEMS = {
    title_portador_origens: {
      id:"title_portador_origens", name:'Título: "Portador das Origens"',
      type:"title", emoji:"👑",
      desc:"Concedido a quem alcança V4 na Raça Origens.",
      color:"#ff00aa", rarity:"ORIGENS", price:0
    }
  };
  (function _patchGetProfileItemByIdForRacas(){
    var _prevGetProfileItemById = (typeof getProfileItemById === "function") ? getProfileItemById : null;
    window.getProfileItemById = function(id){
      if (_prevGetProfileItemById){
        var it = _prevGetProfileItemById(id);
        if (it) return it;
      }
      return RACAS_SPECIAL_PROFILE_ITEMS[id] || null;
    };
  })();

  // ═════════════════════════════════════════════════════════════
  // 1.  RAÇAS
  // ═════════════════════════════════════════════════════════════
  //   - Cada raça tem 30 nodes (batalhas + escolhas)
  //   - Rotas duplas em nodes 8, 16 e 24
  //   - Cooldowns: vitória = 24h ; derrota = 72h
  //   - Requisitos de deck variam por node
  //   - No fim ganha 1 Artefato (permanente)
  // ═════════════════════════════════════════════════════════════
  const RACES = {
    human: {
      id:"human", name:"Human", emoji:"🛡️",
      color:"#66bb6a",
      colorSoft:"rgba(102,187,106,0.15)",
      title:"O Caminho do Reino",
      lore:"Os humanos ergueram o Reino de Aldoran após séculos de guerra. Agora, um antigo inimigo desperta e apenas um verdadeiro herói pode reclamar o Artefato do Ouro Eterno.",
      artifact:{ id:"art_human", emoji:"🥇", name:"Coroa do Rei Perdido",
        desc:"+10% de ouro em TODAS as fontes (permanente).",
        effect:"gold_mult", value:1.10
      },
      unlockCost:{ gold:0, energy:0 } // 1ª raça é gratuita
    },
    shark: {
      id:"shark", name:"Shark", emoji:"🦈",
      color:"#29b6f6",
      colorSoft:"rgba(41,182,246,0.15)",
      title:"O Caminho das Marés",
      lore:"Nas profundezas do Mar de Sombra vive o clã dos Sharks — caçadores implacáveis. Para conquistar a Presa Ancestral, o herói precisa mergulhar em águas onde nem a luz alcança.",
      artifact:{ id:"art_shark", emoji:"🦷", name:"Presa Ancestral",
        desc:"+10% de XP da conta (permanente).",
        effect:"xp_mult", value:1.10
      },
      unlockCost:{ gold:250000, energy:50 }
    },
    mink: {
      id:"mink", name:"Mink", emoji:"🐺",
      color:"#ce93d8",
      colorSoft:"rgba(206,147,216,0.15)",
      title:"O Caminho da Lua",
      lore:"Os Minks vivem na floresta de Zou, sob a Lua Cheia. Sua fúria eletrificante desperta o Colar Lunar, que multiplica a essência de todo guerreiro que o carrega.",
      artifact:{ id:"art_mink", emoji:"🌙", name:"Colar Lunar",
        desc:"+10% de XPP (progresso da conta) permanente.",
        effect:"xpp_mult", value:1.10
      },
      unlockCost:{ gold:500000, energy:100 }
    },
    cyborg: {
      id:"cyborg", name:"Cyborg", emoji:"🤖",
      color:"#00e5ff",
      colorSoft:"rgba(0,229,255,0.15)",
      title:"O Caminho de Aço",
      lore:"Nas ruínas da cidade de Neo-Baltigo, os Cyborgs remontam a si mesmos com peças de guerra. O Núcleo de Plasma pulsa nos escombros — quem o dominar aumentará o ATK de todas as suas cartas.",
      artifact:{ id:"art_cyborg", emoji:"⚙️", name:"Núcleo de Plasma",
        desc:"+5% de ATK permanente em TODAS as cartas.",
        effect:"atk_mult", value:1.05
      },
      unlockCost:{ gold:1000000, energy:200 }
    },
    angel: {
      id:"angel", name:"Angel", emoji:"👼",
      color:"#ffc107",
      colorSoft:"rgba(255,193,7,0.15)",
      title:"O Caminho Celestial",
      lore:"Os últimos Anjos guardam os Portões do Céu de Skypiea. A Pena Sagrada só é entregue a quem prova, batalha após batalha, que merece o dom da vida eterna.",
      artifact:{ id:"art_angel", emoji:"🕊️", name:"Pena Sagrada",
        desc:"+5% de HP permanente em TODAS as cartas.",
        effect:"hp_mult", value:1.05
      },
      unlockCost:{ gold:2000000, energy:400 }
    },
    origens: {
      id:"origens", name:"Origens", emoji:"🌌",
      color:"#ff00aa",
      colorSoft:"rgba(255,0,170,0.15)",
      title:"O Caminho das Origens",
      lore:"Antes das eras, antes das raças, existiam os Origens. Somente aquele que dominou os 5 Caminhos e reuniu 5 Cartas Origens é digno de trilhar este último caminho — o começo de tudo.",
      artifact:{ id:"art_origens", emoji:"👑", name:"Sigilo das Origens",
        desc:"Símbolo ✨ para equipar em qualquer carta do cofre: +bônus absurdos de ATK/HP nas batalhas clássicas.",
        effect:"sigil", value:1
      },
      // custo especial: exige fundir 5 cartas Origens do cofre
      unlockRule:"Fundir 5 cartas Origens no altar (aba Raça).",
      unlockCost:{ gold:0, energy:0, origensFuse:5 }
    }
  };

  // ═════════════════════════════════════════════════════════════
  // 2.  CAMINHO (nodes) DE CADA RAÇA
  // ═════════════════════════════════════════════════════════════
  //   Total: 30 nodes por raça. Nodes 8/16/24 são bifurcações
  //   (rota A ou B) — a lore diverge, mas o Artefato é único.
  //   Requisitos de deck sobem gradualmente.
  // ═════════════════════════════════════════════════════════════
  function _buildPath(race){
    var nodes = [];
    var rarityReqs = [
      { c:6, r:3, e:1, ep:0, l:0, m:0 },     // node 1
      { c:5, r:4, e:1, ep:0, l:0, m:0 },
      { c:5, r:3, e:2, ep:0, l:0, m:0 },
      { c:4, r:3, e:3, ep:0, l:0, m:0 },
      { c:3, r:4, e:3, ep:0, l:0, m:0 },     // 5
      { c:3, r:3, e:3, ep:1, l:0, m:0 },
      { c:2, r:3, e:3, ep:2, l:0, m:0 },
      // 8 = choice
      { c:2, r:2, e:4, ep:2, l:0, m:0 },
      { c:1, r:3, e:4, ep:2, l:0, m:0 },
      { c:1, r:2, e:4, ep:3, l:0, m:0 },     // 10
      { c:0, r:3, e:4, ep:3, l:0, m:0 },
      { c:0, r:2, e:5, ep:3, l:0, m:0 },
      { c:0, r:2, e:4, ep:3, l:1, m:0 },
      { c:0, r:1, e:4, ep:4, l:1, m:0 },
      { c:0, r:0, e:5, ep:4, l:1, m:0 },     // 15
      // 16 = choice
      { c:0, r:0, e:4, ep:4, l:2, m:0 },
      { c:0, r:0, e:4, ep:3, l:3, m:0 },
      { c:0, r:0, e:3, ep:4, l:3, m:0 },
      { c:0, r:0, e:3, ep:3, l:4, m:0 },
      { c:0, r:0, e:2, ep:4, l:4, m:0 },     // 20
      { c:0, r:0, e:2, ep:3, l:4, m:1 },
      { c:0, r:0, e:2, ep:2, l:4, m:2 },
      { c:0, r:0, e:1, ep:3, l:4, m:2 },
      // 24 = choice
      { c:0, r:0, e:1, ep:2, l:5, m:2 },
      { c:0, r:0, e:1, ep:2, l:4, m:3 },     // 25
      { c:0, r:0, e:0, ep:3, l:4, m:3 },
      { c:0, r:0, e:0, ep:2, l:5, m:3 },
      { c:0, r:0, e:0, ep:2, l:4, m:4 },
      { c:0, r:0, e:0, ep:1, l:5, m:4 },     // 29
      { c:0, r:0, e:0, ep:0, l:5, m:5 },     // 30 = BOSS FINAL
    ];
    var loresA = _lore(race,"A");
    var loresB = _lore(race,"B");
    for (var i=0;i<30;i++){
      var num = i+1;
      var isChoice = (num===8 || num===16 || num===24);
      var isBoss   = (num===30);
      nodes.push({
        n:num,
        kind: isBoss ? "boss" : (isChoice ? "choice" : "battle"),
        req:  rarityReqs[i],
        enemyName: _enemyName(race, num),
        rewardGold: 5000 + num*2500,
        rewardXp:   1000 + num*500,
        rewardEnergy: (num%5===0 ? 5 : 1),
        loreA: loresA[i] || "",
        loreB: loresB[i] || ""
      });
    }
    return nodes;
  }

  function _enemyName(race,num){
    var pools = {
      human: ["Bandido do Reino","Cavaleiro Renegado","Assassino da Coroa","Comandante Rebelde","Ogro de Guerra","Bruxo Negro","Dragão da Torre","Rainha Sombria","Ex-General","Rei Perdido"],
      shark:["Filhote de Recife","Nadador Ferido","Tubarão-Martelo","Kraken Jovem","Sereia Corrompida","Leviatã Menor","Guardião do Abismo","Rei do Coral","Titã Marinho","O Devorador"],
      mink:["Aprendiz Elétrico","Guerreiro da Lua","Xamã Trovão","Alfa da Matilha","Espírito Ancestral","Titã Elétrico","Cão Celestial","Deus do Trovão","Duque Dogtooth","Rainha da Lua Cheia"],
      cyborg:["Drone de Vigia","Sentinela AK","Robô Assalto","Cyborg Elite","MK-VII","Predador Alfa","Titã Mecânico","Overlord IA","Núcleo Corrompido","O Primeiro Modelo"],
      angel:["Serafim Novato","Guarda Alado","Anjo Guerreiro","Arcanjo Menor","Anjo Sagrado","Anjo da Guarda","Anjo do Trono","Arcanjo Guerreiro","Serafim Ancião","Anjo Original"],
      origens:["Eco Primordial","Sombra do Caos","Cristal Vivo","Ancião Esquecido","Tempo Ferido","Vazio Consciente","Chama do Início","Titã sem Nome","Origem Corrompido","O PRIMEIRO"]
    };
    var arr = pools[race] || pools.human;
    var idx = Math.min(arr.length-1, Math.floor((num-1)/3));
    // BUGFIX v19.2: o sufixo " (BOSS)" era adicionado em todo node
    // múltiplo de 10 (10, 20 E 30), mas só o node 30 é kind:"boss" de
    // verdade em _buildPath (só ele tem o chip vermelho "BOSS", conclui
    // a raça, dá o Artefato e libera a versão seguinte). Nodes 10 e 20
    // ficavam com nome de inimigo dizendo "(BOSS)" sem serem batalhas de
    // boss reais — confuso pro jogador. Agora só o node 30 recebe o sufixo.
    return arr[idx] + (num===30 ? " (BOSS)" : "");
  }

  function _lore(race, rota){
    // 30 linhas por rota, curtas. Substituídas nos nodes.
    var base = {
      human:{
        A:["Você parte da Cidadela.","As muralhas rangem ao vento.","Um assassino te ataca à noite.",
           "Sangue no gramado.","Os mercadores fogem.","Um velho conta um segredo.","O Ogro cerca o povoado.",
           "ROTA A: Enfrentar o exército rebelde.","Você marcha em fileira.","O tambor da guerra ecoa.",
           "Fogo nas colheitas.","Um antigo herói se junta a você.","Você derrota o General renegado.",
           "A ponte de pedra range.","Uma armadilha explode.","ROTA A: Invadir o castelo pelo túnel.",
           "Você entra silenciosamente.","O trono está vazio.","Uma sombra caminha nos corredores.",
           "Você descobre a traição da corte.","O rei falso te desafia.","Você venceu a corte real.",
           "As torres caem uma a uma.","ROTA A: Duelo aberto na praça.","O povo assiste em silêncio.",
           "Ele saca a espada dourada.","O céu treme.","A coroa balança na cabeça dele.","Ele cai de joelhos.",
           "Você conquista a COROA DO REI PERDIDO."],
        B:["Você parte da Cidadela.","As muralhas rangem ao vento.","Um assassino te ataca à noite.",
           "Sangue no gramado.","Os mercadores fogem.","Um velho conta um segredo.","O Ogro cerca o povoado.",
           "ROTA B: Negociar com os rebeldes.","Você entra sozinho no acampamento.","Um pacto é oferecido.",
           "Mas uma emboscada acontece.","Você luta cercado.","Aliados escondidos aparecem.",
           "Uma ponte de gelo se forma.","Uma armadilha mágica.","ROTA B: Escalar a muralha externa.",
           "Você sobe em silêncio.","Guardas patrulham as torres.","Você derrota 3 sentinelas.",
           "Um arcanista revela o mapa.","O rei falso te desafia.","Você venceu a corte real.",
           "As torres caem uma a uma.","ROTA B: Envenenar o rei no banquete.","O vinho ferve na taça.",
           "Ele saca a espada dourada.","O céu treme.","A coroa balança na cabeça dele.","Ele cai de joelhos.",
           "Você conquista a COROA DO REI PERDIDO."]
      },
      shark:{
        A:["Você mergulha nas Águas Negras.","O primeiro cardume se dispersa.","Ondas quebram no casco.",
           "Um golpe silencioso.","Água cheia de sangue.","A pressão te esmaga.","Um Kraken jovem surge.",
           "ROTA A: Descer até a Fossa.","O escuro consome tudo.","Formas ancestrais nadam ao lado.",
           "Cristais de sal brilham.","Um coral fala com você.","Você derrota o Leviatã menor.",
           "Um cardume dourado te guia.","Correntes gélidas te puxam.","ROTA A: Entrar no palácio afundado.",
           "Estátuas antigas.","Sereias corrompidas cantam.","Uma iluminação estranha te cega.",
           "Você quebra o feitiço.","O Guardião do Abismo desperta.","Você venceu o Guardião.",
           "O caminho para o Rei se abre.","ROTA A: Duelo submerso em silêncio.","Bolhas explodem.",
           "Ele carrega uma lança de coral.","Correntes te sufocam.","O golpe final ressoa.","O Rei cai.",
           "Você conquista a PRESA ANCESTRAL."],
        B:["Você mergulha nas Águas Negras.","O primeiro cardume se dispersa.","Ondas quebram no casco.",
           "Um golpe silencioso.","Água cheia de sangue.","A pressão te esmaga.","Um Kraken jovem surge.",
           "ROTA B: Contornar pela superfície.","Tempestade elétrica.","Um navio fantasma surge.",
           "Você luta no convés.","O capitão morto te ataca.","Você derrota o Leviatã menor.",
           "Um cardume dourado te guia.","Correntes gélidas te puxam.","ROTA B: Furar o casco do palácio.",
           "Explosivos de coral.","O palácio inunda.","Sereias tentam escapar.","O feitiço se rompe.",
           "O Guardião do Abismo desperta.","Você venceu o Guardião.","O caminho para o Rei se abre.",
           "ROTA B: Emboscada com aliados marinhos.","Golfinhos atacam.","Ele carrega uma lança de coral.",
           "Correntes te sufocam.","O golpe final ressoa.","O Rei cai.","Você conquista a PRESA ANCESTRAL."]
      },
      mink:{
        A:["Zou está sob a Lua Cheia.","Os elétrons dançam.","Uivos ecoam.","Um Mink jovem te desafia.",
           "Trovão parte o céu.","Você bebe o rio sagrado.","O Alfa se aproxima.",
           "ROTA A: Provar-se em duelo tradicional.","A tribo assiste.","Você golpeia com respeito.",
           "O céu abre um relâmpago.","Um espírito ancestral aparece.","Você é aceito na matilha.",
           "Uma expedição no bosque.","Sombras entre árvores.","ROTA A: Escalar o pico da lua.",
           "Ventos gélidos.","A lua cresce no horizonte.","Um deus menor te testa.","Você resiste.",
           "A Rainha te desafia.","Você venceu a Rainha.","O trono de raízes cede.",
           "ROTA A: Ritual das cinzas.","Fogo azul consome tudo.","Uma corrente de elétrons.",
           "A lua treme.","Golpe elétrico final.","Ela sorri antes de cair.","Você conquista o COLAR LUNAR."],
        B:["Zou está sob a Lua Cheia.","Os elétrons dançam.","Uivos ecoam.","Um Mink jovem te desafia.",
           "Trovão parte o céu.","Você bebe o rio sagrado.","O Alfa se aproxima.",
           "ROTA B: Trair a tradição e roubar o poder.","A tribo te caça.","Você foge para as ruínas.",
           "Um antigo templo se abre.","Um espírito ancestral aparece.","Você é aceito pela lua.",
           "Uma expedição no bosque.","Sombras entre árvores.","ROTA B: Cavar o subsolo eletrificado.",
           "Rochas cristalinas.","Choques cegam a visão.","Um deus menor te testa.","Você resiste.",
           "A Rainha te desafia.","Você venceu a Rainha.","O trono de raízes cede.",
           "ROTA B: Envolver a Rainha em uma armadilha lunar.","Espelhos refletem a lua.","Uma corrente de elétrons.",
           "A lua treme.","Golpe elétrico final.","Ela sorri antes de cair.","Você conquista o COLAR LUNAR."]
      },
      cyborg:{
        A:["Neo-Baltigo em ruínas.","Um drone patrulha.","Faíscas iluminam o beco.","Um soldado cyborg surge.",
           "Fumaça de plasma.","Alarmes soam.","MK-VII se aproxima.",
           "ROTA A: Invasão frontal ao complexo.","Você arromba os portões.","Torres automáticas atiram.",
           "Uma explosão te joga longe.","Você reboota o sistema.","MK-VII é destruído.",
           "Silêncio pós-batalha.","Uma IA amiga te contata.","ROTA A: Ir direto ao Núcleo.",
           "Corredores enferrujados.","A luz vermelha piscando.","O Overlord conversa por rádio.",
           "Um teste lógico.","O Overlord IA te desafia.","Você venceu o Overlord.",
           "O reator central vibra.","ROTA A: Sobrecarga do reator.","Faíscas por todos os lados.",
           "Ele mostra sua verdadeira forma.","Contagem regressiva.","Golpe de plasma final.",
           "O Primeiro Modelo desliga.","Você conquista o NÚCLEO DE PLASMA."],
        B:["Neo-Baltigo em ruínas.","Um drone patrulha.","Faíscas iluminam o beco.","Um soldado cyborg surge.",
           "Fumaça de plasma.","Alarmes soam.","MK-VII se aproxima.",
           "ROTA B: Infiltração e sabotagem silenciosa.","Você desativa 3 câmeras.","Você hackeia o portão.",
           "Um bug expõe sua posição.","Você foge pelo ventilador.","MK-VII é destruído.",
           "Silêncio pós-batalha.","Uma IA amiga te contata.","ROTA B: Sabotar o Overlord por dentro.",
           "Vírus injetado.","O Overlord grita em código.","Ele revela sua origem.","Um teste lógico.",
           "O Overlord IA te desafia.","Você venceu o Overlord.","O reator central vibra.",
           "ROTA B: Desligar o reator com precisão.","Cada fio importa.","Ele mostra sua verdadeira forma.",
           "Contagem regressiva.","Golpe de plasma final.","O Primeiro Modelo desliga.",
           "Você conquista o NÚCLEO DE PLASMA."]
      },
      angel:{
        A:["Os Portões de Skypiea se abrem.","Nuvens douradas.","Um serafim te avalia.","Uma prova de coragem.",
           "Você cai no vazio e voa.","Cânticos ao longe.","Um arcanjo te chama.",
           "ROTA A: Prova da Luz.","Você medita 3 dias.","Sua fé é testada.","Um demônio se disfarça.",
           "Você o expulsa.","O Arcanjo menor cede.","Ventos sagrados.","Nuvens de cristal.",
           "ROTA A: Entrar pelo Portão Principal.","Anjos guerreiros te saúdam.","Um tribunal celestial.",
           "Você prova sua causa.","Um julgamento divino.","Você venceu o Serafim ancião.",
           "O céu se abre em ouro.","O Anjo Original desce.","ROTA A: Duelo à luz plena.","Espadas de luz.",
           "Ele te oferece uma última chance.","Você recusa e ataca.","O golpe divino final.",
           "Ele sorri antes de partir.","Você conquista a PENA SAGRADA."],
        B:["Os Portões de Skypiea se abrem.","Nuvens douradas.","Um serafim te avalia.","Uma prova de coragem.",
           "Você cai no vazio e voa.","Cânticos ao longe.","Um arcanjo te chama.",
           "ROTA B: Prova da Sombra.","Você aceita a dor.","Sua fé é testada no escuro.","Um anjo caído te acompanha.",
           "Você o expulsa.","O Arcanjo menor cede.","Ventos sagrados.","Nuvens de cristal.",
           "ROTA B: Entrar pelo Portão dos Caídos.","Guardiões te seguem.","Um tribunal celestial.",
           "Você prova sua causa.","Um julgamento divino.","Você venceu o Serafim ancião.",
           "O céu se abre em ouro.","O Anjo Original desce.","ROTA B: Emboscada em névoa dourada.",
           "Espadas de luz.","Ele te oferece uma última chance.","Você recusa e ataca.","O golpe divino final.",
           "Ele sorri antes de partir.","Você conquista a PENA SAGRADA."]
      },
      origens:{
        A:["Você desaparece no tempo.","O nada te observa.","Formas primordiais nadam.","Um eco antigo grita.",
           "O primeiro relâmpago cai.","O tempo dobra sobre si.","Um Titã sem nome se levanta.",
           "ROTA A: Enfrentar o Vazio.","Nada existe.","Uma faísca aparece.","A faísca vira você.",
           "Você renasce.","Você derrota o Vazio.","Cristais vivos pulsam.","Sombras pensam.",
           "ROTA A: Reunir os fragmentos.","Um pelo Sol.","Um pela Lua.","Um pela Terra.",
           "Um pela Chama.","O PRIMEIRO abre os olhos.","Você venceu O PRIMEIRO parcialmente.",
           "O tempo desaba.","ROTA A: Duelo fora do tempo.","Cada golpe é uma era.","Ele te desafia com o seu próprio rosto.",
           "Você vê a origem.","Você golpeia o começo.","Ele agradece.",
           "Você conquista o SIGILO DAS ORIGENS."],
        B:["Você desaparece no tempo.","O nada te observa.","Formas primordiais nadam.","Um eco antigo grita.",
           "O primeiro relâmpago cai.","O tempo dobra sobre si.","Um Titã sem nome se levanta.",
           "ROTA B: Abraçar o Vazio.","Você é dissolvido.","Você retorna diferente.","Você é agora parte do começo.",
           "Você renasce.","Você derrota o Vazio.","Cristais vivos pulsam.","Sombras pensam.",
           "ROTA B: Deixar os fragmentos te encontrarem.","Eles vêm.","Um pela Lua.","Um pela Terra.",
           "Um pela Chama.","O PRIMEIRO abre os olhos.","Você venceu O PRIMEIRO parcialmente.",
           "O tempo desaba.","ROTA B: Fundir-se com Ele.","Cada golpe é uma era.","Ele te desafia com o seu próprio rosto.",
           "Você vê a origem.","Você golpeia o começo.","Ele agradece.",
           "Você conquista o SIGILO DAS ORIGENS."]
      }
    };
    var b = base[race] || base.human;
    return rota==="B" ? b.B : b.A;
  }

  // ═════════════════════════════════════════════════════════════
  // 3.  CONQUISTAS (20)
  // ═════════════════════════════════════════════════════════════
  const ACHIEVEMENTS = [
    // Progressão básica
    { id:"first_battle", name:"Primeiro Passo",   desc:"Complete sua 1ª batalha em qualquer raça.", check:s=>s.racas.totalWins>=1, reward:{gold:10000,xp:1000,xpp:100} },
    { id:"ten_battles",  name:"Aprendiz",         desc:"Vença 10 batalhas de raça.",               check:s=>s.racas.totalWins>=10, reward:{gold:50000,xp:5000,xpp:500} },
    { id:"fifty_battles",name:"Veterano",         desc:"Vença 50 batalhas de raça.",               check:s=>s.racas.totalWins>=50, reward:{gold:150000,xp:15000,xpp:1500} },
    { id:"hundred_battles",name:"Lenda Viva",     desc:"Vença 100 batalhas de raça.",              check:s=>s.racas.totalWins>=100, reward:{gold:500000,xp:50000,xpp:5000} },
    // Artefatos
    { id:"first_artifact",name:"O Primeiro Artefato",desc:"Ganhe seu 1º Artefato.",                check:s=>_countArtifacts(s)>=1, reward:{gold:100000,xp:20000,xpp:2000} },
    { id:"three_artifacts",name:"Colecionador",   desc:"Ganhe 3 Artefatos.",                       check:s=>_countArtifacts(s)>=3, reward:{gold:300000,xp:60000,xpp:6000} },
    { id:"five_artifacts",name:"Mestre dos Cinco",desc:"Ganhe todos os 5 Artefatos das raças.",    check:s=>_countArtifacts(s,true)>=5, reward:{gold:1000000,xp:200000,xpp:20000} },
    { id:"dominator",    name:"Dominador de Artefatos",desc:"Funda os 5 Artefatos em Dominador.",   check:s=>s.racas.artifacts.dominator===true, reward:{gold:2000000,xp:500000,xpp:50000} },
    // Raças V4
    { id:"first_v4",     name:"V4 Alcançado",     desc:"Chegue à V4 de qualquer raça.",            check:s=>_countV4(s)>=1, reward:{gold:200000,xp:30000,xpp:3000} },
    { id:"three_v4",     name:"Tríplice Coroa",   desc:"3 raças em V4.",                            check:s=>_countV4(s)>=3, reward:{gold:500000,xp:100000,xpp:10000} },
    { id:"all_v4",       name:"Panteão Completo", desc:"Todas as 5 raças em V4.",                  check:s=>_countV4(s,true)>=5, reward:{gold:1500000,xp:300000,xpp:30000} },
    { id:"origens_v4",   name:"Origem de Tudo",   desc:"Raça Origens em V4.",                       check:s=>(s.racas.races.origens||{}).ver>=4, reward:{gold:5000000,xp:1000000,xpp:100000} },
    // Estilos
    { id:"perfect_start",name:"Estreia Perfeita", desc:"Vença 5 batalhas seguidas sem perder.",    check:s=>s.racas.bestStreak>=5, reward:{gold:75000,xp:10000,xpp:1000} },
    { id:"perfect_run",  name:"Run Perfeita",     desc:"Complete uma raça sem NENHUMA derrota.",   check:s=>s.racas.perfectRuns>=1, reward:{gold:500000,xp:80000,xpp:8000} },
    { id:"two_paths",    name:"Ambos os Caminhos",desc:"Complete rota A e rota B na mesma raça.",  check:s=>_bothPaths(s)>=1, reward:{gold:200000,xp:40000,xpp:4000} },
    // Energia
    { id:"first_energy", name:"Faísca",           desc:"Acumule 50 de Energia.",                    check:s=>(s.racas.energy||0)>=50, reward:{gold:30000,xp:3000,xpp:300} },
    { id:"charged",      name:"Carregado",        desc:"Acumule 500 de Energia.",                   check:s=>(s.racas.energy||0)>=500, reward:{gold:150000,xp:20000,xpp:2000} },
    // Origens
    { id:"origens_unlock",name:"Chamado das Origens",desc:"Desbloqueie a raça Origens (fundir 5 Origens).",check:s=>s.racas.origensUnlocked===true, reward:{gold:1000000,xp:150000,xpp:15000} },
    { id:"sigil_equip",  name:"Portador do Sigilo",desc:"Equipe o Sigilo ✨ em uma carta.",         check:s=>!!s.racas.sigilCardId, reward:{gold:300000,xp:50000,xpp:5000} },
    { id:"boss_slayer",  name:"Matador de Chefes",desc:"Derrote 5 chefes finais (node 30).",       check:s=>s.racas.bossKills>=5, reward:{gold:600000,xp:120000,xpp:12000} }
  ];

  // ═════════════════════════════════════════════════════════════
  // 4.  ENSURE SAVE STATE
  // ═════════════════════════════════════════════════════════════
  function _ensure(s){
    if (!s.racas){
      s.racas = {
        energy: 0,
        totalWins: 0,
        bestStreak: 0,
        curStreak: 0,
        perfectRuns: 0,
        bossKills: 0,
        origensUnlocked: false,
        sigilCardId: null,
        activeRace: null,       // raça atualmente em progresso
        artifacts: {},          // { art_human:true, ... , dominator:false }
        races: {},              // por raça: { unlocked, nodeIdx, ver, path("A"/"B"), completions, cooldownUntil, cooldownKind }
        achievementsClaimed: {} // { id: true }
      };
      // Human sempre desbloqueada (grátis)
      s.racas.races.human = { unlocked:true, nodeIdx:0, ver:1, path:"A", completions:0, cooldownUntil:0, cooldownKind:null, hasLostThisRun:false, completedPaths:{}, v4RewardClaimed:false };
    }
    return s.racas;
  }
  function _countArtifacts(s, onlyRaces){
    var a = s.racas.artifacts || {};
    var keys = onlyRaces ? ["art_human","art_shark","art_mink","art_cyborg","art_angel"]
                          : Object.keys(a);
    var n = 0; keys.forEach(function(k){ if (a[k]) n++; });
    return n;
  }
  function _countV4(s, all){
    var r = s.racas.races || {};
    var keys = all ? ["human","shark","mink","cyborg","angel"] : Object.keys(r);
    var n = 0; keys.forEach(function(k){ if ((r[k]||{}).ver>=4) n++; });
    return n;
  }
  function _bothPaths(s){
    var r = s.racas.races||{};
    var n = 0;
    ["human","shark","mink","cyborg","angel","origens"].forEach(function(k){
      var cp = (r[k]||{}).completedPaths || {};
      if (cp.A && cp.B) n++;
    });
    return n;
  }

  // ═════════════════════════════════════════════════════════════
  // 5.  API PÚBLICA
  // ═════════════════════════════════════════════════════════════
  var API = {
    RACES: RACES,
    ACHIEVEMENTS: ACHIEVEMENTS,

    ensure: function(){
      var s = _save(); _ensure(s); _persist(s); return s.racas;
    },

    getRace: function(id){ return RACES[id]; },
    listRaces: function(){ return Object.keys(RACES).map(function(k){ return RACES[k]; }); },
    getPath: function(raceId){ return _buildPath(raceId); },

    getCurrentNode: function(raceId){
      var s = _save(); _ensure(s);
      var rst = s.racas.races[raceId];
      if (!rst) return null;
      var path = _buildPath(raceId);
      return path[Math.min(rst.nodeIdx, path.length-1)];
    },

    // ─── Cooldown ────────────────────────────────────────────
    cooldownRemaining: function(raceId){
      var s = _save(); _ensure(s);
      var rst = s.racas.races[raceId];
      if (!rst) return 0;
      var d = (rst.cooldownUntil||0) - Date.now();
      return d>0 ? d : 0;
    },
    cooldownLabel: function(ms){
      if (ms<=0) return "Pronto!";
      var h = Math.floor(ms/3600000);
      var m = Math.floor((ms%3600000)/60000);
      var sec = Math.floor((ms%60000)/1000);
      if (h>=1) return h+"h "+m+"m";
      if (m>=1) return m+"m "+sec+"s";
      return sec+"s";
    },
    // Debug/skip: consumir 50 energia pra pular cooldown
    skipCooldown: function(raceId){
      var s = _save(); _ensure(s);
      if ((s.racas.energy||0) < 50) return {ok:false, msg:"Precisa de 50 ⚡ Energia"};
      var rst = s.racas.races[raceId];
      if (!rst) return {ok:false, msg:"Raça não iniciada"};
      s.racas.energy -= 50;
      rst.cooldownUntil = 0;
      rst.cooldownKind = null;
      _persist(s);
      return {ok:true};
    },

    // ─── Desbloquear raça ────────────────────────────────────
    unlockRace: function(raceId){
      var s = _save(); _ensure(s);
      var race = RACES[raceId]; if (!race) return {ok:false, msg:"Raça inválida"};
      if (s.racas.races[raceId] && s.racas.races[raceId].unlocked) return {ok:false, msg:"Já desbloqueada"};
      if (raceId==="origens"){
        if (!s.racas.origensUnlocked) return {ok:false, msg:"Fundir 5 Origens no altar primeiro"};
      } else {
        var cost = race.unlockCost || {gold:0,energy:0};
        if ((s.gold||0) < cost.gold)   return {ok:false, msg:"Precisa de "+fmt(cost.gold)+" 🪙"};
        if ((s.racas.energy||0) < cost.energy) return {ok:false, msg:"Precisa de "+cost.energy+" ⚡ Energia"};
        // BUGFIX v19.1: usar _spend() (spendGold real) em vez de decrementar
        // s.gold direto — mantém totalGoldSpent e o hash anti-cheat corretos.
        _spend(s, cost.gold);
        s.racas.energy-= cost.energy;
      }
      s.racas.races[raceId] = { unlocked:true, nodeIdx:0, ver:1, path:"A", completions:0, cooldownUntil:0, cooldownKind:null, hasLostThisRun:false, completedPaths:{}, v4RewardClaimed:false };
      s.racas.activeRace = raceId;
      _persist(s);
      return {ok:true};
    },

    // BUGFIX v19.2: o HTML tentava marcar a raça vista na aba "Jornada"
    // como activeRace mexendo direto num objeto pego por uma nova
    // chamada de getSave() (sem nunca chamar writeSave/_persist) — ou
    // seja, a alteração nunca era realmente salva. Expondo esse método
    // aqui garante persistência real via _persist(s).
    setActiveRace: function(raceId){
      var s = _save(); _ensure(s);
      if (!s.racas.races[raceId]) return {ok:false, msg:"Raça não iniciada"};
      s.racas.activeRace = raceId;
      _persist(s);
      return {ok:true};
    },

    setPath: function(raceId, letter){
      var s = _save(); _ensure(s);
      var rst = s.racas.races[raceId]; if (!rst) return {ok:false, msg:"Raça não iniciada"};
      rst.path = (letter==="B" ? "B" : "A");
      _persist(s);
      return {ok:true};
    },

    // ─── Checar requisito de deck ────────────────────────────
    // BUGFIX (auditoria): "deck" chega aqui como array de IDs de carta
    // (string), igual ao save.vault (ver getHandFromVault() em
    // gamedata.js) — antes o código assumia objetos {rarity}, então
    // card.rarity era sempre undefined e NENHUMA carta era contada em
    // nenhuma raridade. Resultado: checkDeckRequirement rejeitava toda
    // batalha com "Faltam: X Comum, Y Rara..." mesmo com o cofre cheio
    // de cartas certas, tornando "Faça Seu Caminho" impossível de jogar.
    checkDeckRequirement: function(deck, req){
      // deck: array de IDs de carta — leva do save.vault
      deck = deck || [];
      req  = req  || {c:0,r:0,e:0,ep:0,l:0,m:0};
      var count = {c:0,r:0,e:0,ep:0,l:0,m:0};
      deck.forEach(function(cardId){
        var card = (typeof getCardById === "function") ? getCardById(cardId) : null;
        var r = card ? (card.rarity||"").toUpperCase() : "";
        if (r==="COMMON") count.c++;
        else if (r==="RARE") count.r++;
        else if (r==="EPIC" || r==="ULTRA_RARE") count.e++;
        else if (r==="LEGENDARY") count.l++;
        else if (r==="MYTHIC" || r==="ORIGENS") count.m++;
      });
      // BUGFIX v19.1: req.ep ("épicos extra") era somado no total de 10
      // cartas de cada node (c+r+e+ep+l+m == 10 em todos os 30 nodes),
      // mas nunca era exigido aqui nem mostrado no reqLabel — o requisito
      // real ficava mais fraco do que o planejado (o jogador não
      // precisava juntar essas cartas extras). Como o jogo só tem uma
      // categoria "Épica" (EPIC/ULTRA_RARE), req.ep é somado a req.e.
      var need = { c:req.c, r:req.r, e:(req.e||0)+(req.ep||0), l:req.l, m:req.m };
      var msg = [];
      if (count.c < need.c) msg.push((need.c-count.c)+" Comum");
      if (count.r < need.r) msg.push((need.r-count.r)+" Rara");
      if (count.e < need.e) msg.push((need.e-count.e)+" Épica");
      if (count.l < need.l) msg.push((need.l-count.l)+" Lendária");
      if (count.m < need.m) msg.push((need.m-count.m)+" Mítica");
      // BUGFIX v19.2: a checagem `deck.length !== 10` vinha ANTES desta
      // checagem de raridades e sempre retornava a mensagem genérica
      // "O deck deve ter exatamente 10 cartas.", escondendo a mensagem
      // específica "Faltam: X Comum, Y Rara..." — que é justamente o caso
      // mais comum (jogador sem cartas suficientes de alguma raridade
      // gera um deck com MENOS de 10 cartas). Agora a mensagem específica
      // tem prioridade; a checagem de tamanho só serve de rede de
      // segurança para uma composição inconsistente sem cartas faltando.
      if (msg.length) return {ok:false, msg:"Faltam: "+msg.join(", ")};
      if (deck.length !== 10) return {ok:false, msg:"O deck deve ter exatamente 10 cartas."};
      return {ok:true};
    },
    reqLabel: function(req){
      var parts = [];
      if (req.c) parts.push(req.c+" Comum");
      if (req.r) parts.push(req.r+" Rara");
      // BUGFIX v19.1: req.ep somado à Épica exibida (ver checkDeckRequirement).
      var epicTotal = (req.e||0)+(req.ep||0);
      if (epicTotal) parts.push(epicTotal+" Épica");
      if (req.l) parts.push(req.l+" Lendária");
      if (req.m) parts.push(req.m+" Mítica");
      return parts.length ? parts.join(" · ") : "Qualquer 10 cartas";
    },

    // ─── Resolver batalha ────────────────────────────────────
    battle: function(raceId){
      var s = _save(); _ensure(s);
      var rst = s.racas.races[raceId]; if (!rst || !rst.unlocked) return {ok:false, msg:"Raça bloqueada"};
      if (this.cooldownRemaining(raceId) > 0) return {ok:false, msg:"Suas cartas ainda estão em recuperação."};
      var path = _buildPath(raceId);
      var node = path[rst.nodeIdx];
      if (!node) return {ok:false, msg:"Caminho concluído"};

      // Chance de vitória base + bônus por V4 de outras raças
      var winChance = 0.65
        - (node.n*0.007)                                    // fica mais difícil
        + ((s.racas.races[raceId]||{}).ver-1)*0.02          // versão da raça atual
        + _countV4(s,true)*0.015;                           // sinergia V4
      winChance = Math.min(0.92, Math.max(0.20, winChance));

      var won = Math.random() < winChance;
      var out = { ok:true, won:won, node:node, chance:Math.round(winChance*100) };

      if (won){
        s.racas.totalWins++;
        s.racas.curStreak++;
        if (s.racas.curStreak > s.racas.bestStreak) s.racas.bestStreak = s.racas.curStreak;
        // BUGFIX v19.1: (1) usar _earn()/earnGold() em vez de somar
        // s.gold direto, para manter o ledger/hash anti-cheat corretos;
        // (2) passar gold/xp pelo applyArtifactMults() do próprio patch,
        // já que o Artefato "Coroa do Rei Perdido" (art_human, +10% ouro)
        // e a "Presa Ancestral" (art_shark, +10% XP) prometem bônus em
        // TODAS as fontes — mas nunca eram aplicados nem aqui, dentro do
        // próprio sistema de Raças que os concede.
        var goldEarned = API.applyArtifactMults("gold", node.rewardGold);
        var xpEarned   = API.applyArtifactMults("xp",   node.rewardXp);
        _earn(s, goldEarned);
        s.xp   = (s.xp||0)   + xpEarned;
        s.racas.energy = (s.racas.energy||0) + node.rewardEnergy;
        out.reward = { gold:goldEarned, xp:xpEarned, energy:node.rewardEnergy };

        rst.nodeIdx++;
        if (node.kind === "boss"){
          // Concluiu a raça!
          s.racas.bossKills++;
          rst.completions++;
          rst.completedPaths = rst.completedPaths || {};
          rst.completedPaths[rst.path||"A"] = true;
          if (!rst.hasLostThisRun) s.racas.perfectRuns++;
          // Sobe versão até V4
          if (rst.ver < 4) rst.ver++;
          // Ganha Artefato
          var race = RACES[raceId];
          if (race && race.artifact) s.racas.artifacts[race.artifact.id] = true;
          out.raceCompleted = true;
          out.newVer = rst.ver;
          // Reset para permitir nova run
          rst.nodeIdx = 0;
          rst.hasLostThisRun = false;
          // BUGFIX v19.2: as recompensas de "chegar em V4" (e a recompensa
          // especial da raça Origens) não tinham nenhum trava de "só uma
          // vez" — como rst.ver fica travado em 4 (nunca sobe pra 5), a
          // cada vez que o jogador zerava a raça DE NOVO (já estando em
          // V4) a condição `rst.ver===4` era verdadeira outra vez e o
          // bônus (250K🪙+25K XPP, ou 1M🪙+5M XPP+10M XP na Origens) era
          // concedido de novo — permitindo farmar ouro/XP infinitos só
          // replayando uma raça já em V4. Agora só concede uma vez,
          // controlado por rst.v4RewardClaimed.
          if (rst.ver===4 && !rst.v4RewardClaimed){
            rst.v4RewardClaimed = true;
            out.v4Reached = true;
            // BUGFIX (auditoria): out.v4Reward guardava os valores BRUTOS
            // (250000/25000), diferentes do que era de fato creditado por
            // _earn()/applyArtifactMults() quando o jogador já tem
            // Artefatos com bônus (+10% ouro/XPP). A UI mostraria um
            // número errado (menor que o realmente recebido).
            var v4Gold = API.applyArtifactMults("gold", 250000);
            var v4Xpp  = API.applyArtifactMults("xpp", 25000);
            _earn(s, v4Gold);
            s.xpp = (s.xpp||0) + v4Xpp;
            out.v4Reward = { gold:v4Gold, xpp:v4Xpp };
            // Recompensa especial Origens V4 (também só uma vez)
            if (raceId==="origens"){
              var oGold = API.applyArtifactMults("gold", 1000000);
              var oXpp  = API.applyArtifactMults("xpp", 5000000);
              var oXp   = API.applyArtifactMults("xp", 10000000);
              _earn(s, oGold);
              s.xpp   = (s.xpp||0)   + oXpp;
              s.xp    = (s.xp||0)    + oXp;
              // BUGFIX (auditoria): concede E equipa o título de verdade
              // (save.profileTitle + ownedProfileItems), no formato que
              // buildProfileCard()/getProfileItemById() sabem ler — ver
              // RACAS_SPECIAL_PROFILE_ITEMS no topo do arquivo.
              s.ownedProfileItems = s.ownedProfileItems || [];
              if (s.ownedProfileItems.indexOf("title_portador_origens") === -1){
                s.ownedProfileItems.push("title_portador_origens");
              }
              s.profileTitle = "title_portador_origens";
              out.origensV4 = true;
              out.origensV4Reward = { gold:oGold, xpp:oXpp, xp:oXp };
            }
          }
        } else {
          // Cooldown de vitória
          rst.cooldownUntil = Date.now() + 24*3600*1000;
          rst.cooldownKind  = "rest";
        }
      } else {
        s.racas.curStreak = 0;
        rst.hasLostThisRun = true;
        rst.cooldownUntil = Date.now() + 3*24*3600*1000;
        rst.cooldownKind  = "hurt";
      }

      _persist(s);
      _checkAch(s);
      return out;
    },

    // ─── Fusão dos 5 Artefatos → Dominador ───────────────────
    fuseDominator: function(){
      var s = _save(); _ensure(s);
      if (s.racas.artifacts.dominator) return {ok:false, msg:"Você já criou o Dominador."};
      if (_countArtifacts(s,true) < 5) return {ok:false, msg:"Reúna os 5 Artefatos primeiro."};
      if ((s.gold||0) < 1000000)       return {ok:false, msg:"Precisa de 1.000.000 🪙"};
      if ((s.racas.energy||0) < 500)   return {ok:false, msg:"Precisa de 500 ⚡ Energia"};
      // BUGFIX (auditoria): checar espaço no cofre ANTES de cobrar, igual
      // ao openPack() em gamedata.js. Antes disso não existia — o jogador
      // podia pagar 1M🪙+500⚡ com o cofre cheio e a carta nunca entrava.
      s.vault = s.vault || [];
      var vaultLimit = s.vaultLimit || 50;
      if (s.vault.length >= vaultLimit) return {ok:false, msg:"Seu Cofre está cheio! Abra espaço antes de fundir o Dominador."};
      // BUGFIX v19.1: usar _spend() (spendGold real) em vez de decrementar
      // s.gold direto, para manter totalGoldSpent/hash anti-cheat corretos.
      _spend(s, 1000000);
      s.racas.energy -= 500;
      s.racas.artifacts.dominator = true;
      // Adiciona a carta ORIGENS mais forte ao cofre. BUGFIX (auditoria):
      // agora empurra só o ID (RACAS_SPECIAL_CARDS.art_dominator), no
      // mesmo formato usado pelo resto do vault — ver comentário acima
      // de RACAS_SPECIAL_CARDS.
      var card = RACAS_SPECIAL_CARDS.art_dominator;
      s.vault.push(card.id);
      _persist(s);
      _checkAch(s);
      return {ok:true, card:card};
    },

    // ─── Origens: fundir 5 cartas Origens no altar ───────────
    // BUGFIX (auditoria): save.vault é um array de IDs de carta (string),
    // igual ao resto do jogo — ver getHandFromVault()/openPack() em
    // gamedata.js, que sempre fazem save.vault.push(card.id) e depois
    // resolvem com getCardById(id). Este código tratava cada item do
    // vault como se já fosse o objeto da carta (c.rarity, c.id), o que
    // nunca é verdade: c.rarity era sempre undefined, "origens" ficava
    // sempre vazio e a Raça Origens NUNCA podia ser desbloqueada, mesmo
    // com 5+ cartas Origens de fato no cofre.
    fuseOrigensRace: function(){
      var s = _save(); _ensure(s);
      var vault = s.vault || [];
      if (typeof getCardById !== "function") return {ok:false, msg:"Erro interno: getCardById indisponível."};
      // Precisa ter todas outras raças em V4 (checado antes de consumir cartas)
      var need = ["human","shark","mink","cyborg","angel"];
      for (var i=0;i<need.length;i++){
        if ((s.racas.races[need[i]]||{}).ver < 4) return {ok:false, msg:"Todas as 5 raças precisam estar em V4 antes."};
      }
      // Acha os ÍNDICES (não só os ids) das 5 primeiras cartas Origens no
      // vault, pra remover exatamente 5 unidades mesmo se houver cópias
      // repetidas do mesmo id (vault é uma lista "plana" com duplicatas).
      var idxToRemove = [];
      for (var vi=0; vi<vault.length && idxToRemove.length<5; vi++){
        var c = getCardById(vault[vi]);
        if (c && (c.rarity||"").toUpperCase()==="ORIGENS") idxToRemove.push(vi);
      }
      if (idxToRemove.length < 5) return {ok:false, msg:"Precisa de 5 cartas Origens no cofre."};
      s.vault = vault.filter(function(_, i){ return idxToRemove.indexOf(i) === -1; });
      s.racas.origensUnlocked = true;
      // Cria a raça origens (bloqueada até chamar unlockRace, mas gratuita)
      s.racas.races.origens = s.racas.races.origens || { unlocked:false, nodeIdx:0, ver:1, path:"A", completions:0, cooldownUntil:0, cooldownKind:null, hasLostThisRun:false, completedPaths:{}, v4RewardClaimed:false };
      _persist(s);
      _checkAch(s);
      return {ok:true};
    },

    // ─── Equipar Sigilo ✨ em uma carta ──────────────────────
    // BUGFIX (auditoria): mesmo caso de fuseOrigensRace — vault.find(c=>c.id===cardId)
    // nunca batia porque os itens do vault são ids (string), não objetos.
    // O Sigilo nunca podia ser equipado em NENHUMA carta, mesmo já com as
    // 6 raças em V4.
    equipSigil: function(cardId){
      var s = _save(); _ensure(s);
      // Só permitido se todas as 6 raças (5 + origens) em V4
      var need = ["human","shark","mink","cyborg","angel","origens"];
      for (var i=0;i<need.length;i++){
        if ((s.racas.races[need[i]]||{}).ver < 4) return {ok:false, msg:"Todas as 6 raças precisam estar em V4."};
      }
      var vault = s.vault || [];
      if (vault.indexOf(cardId) === -1) return {ok:false, msg:"Carta não encontrada"};
      s.racas.sigilCardId = cardId;
      _persist(s);
      _checkAch(s);
      return {ok:true};
    },

    // ─── Conquistas ──────────────────────────────────────────
    listAchievements: function(){
      var s = _save(); _ensure(s);
      return ACHIEVEMENTS.map(function(a){
        var unlocked = false;
        try { unlocked = !!a.check(s); } catch(e){}
        return { id:a.id, name:a.name, desc:a.desc, reward:a.reward,
                 unlocked:unlocked, claimed:!!s.racas.achievementsClaimed[a.id] };
      });
    },
    claimAchievement: function(id){
      var s = _save(); _ensure(s);
      var ach = ACHIEVEMENTS.find(function(a){ return a.id===id; });
      if (!ach) return {ok:false, msg:"Conquista inválida"};
      if (s.racas.achievementsClaimed[id]) return {ok:false, msg:"Já resgatada"};
      if (!ach.check(s)) return {ok:false, msg:"Requisitos não atendidos"};
      // BUGFIX v19.1: _earn() (ledger) em vez de somar s.gold direto,
      // e recompensas também passam pelos multiplicadores de Artefato.
      var goldR = API.applyArtifactMults("gold", ach.reward.gold||0);
      var xpR   = API.applyArtifactMults("xp",   ach.reward.xp||0);
      var xppR  = API.applyArtifactMults("xpp",  ach.reward.xpp||0);
      _earn(s, goldR);
      s.xp   = (s.xp||0)   + xpR;
      s.xpp  = (s.xpp||0)  + xppR;
      s.racas.achievementsClaimed[id] = true;
      _persist(s);
      return {ok:true, reward:{gold:goldR, xp:xpR, xpp:xppR}};
    },

    // ─── Aplica bônus permanentes (chamado pelo Card Fight quando pega ouro/xp/carta em batalha clássica) ───
    applyArtifactMults: function(kind, value){
      var s = _save(); _ensure(s);
      var a = s.racas.artifacts || {};
      var v = Number(value)||0;
      if (kind==="gold" && a.art_human)  v = Math.floor(v * 1.10);
      if (kind==="xp"   && a.art_shark)  v = Math.floor(v * 1.10);
      if (kind==="xpp"  && a.art_mink)   v = Math.floor(v * 1.10);
      return v;
    },
    applyCardMults: function(card){
      var s = _save(); _ensure(s);
      var a = s.racas.artifacts || {};
      var atk = card.atk||0, hp = card.hp||0;
      if (a.art_cyborg) atk = Math.round(atk * 1.05);
      if (a.art_angel)  hp  = Math.round(hp  * 1.05);
      // BUGFIX (auditoria): o Painel (tab "Painel" do Raças_Run.html, seção
      // "⭐ Versões V1 → V4") promete "V4 também dá um pequeno bônus em
      // batalhas clássicas" — mas essa frase nunca virou código em lugar
      // nenhum: _countV4() só era usado dentro de battle() para a chance de
      // vitória em batalhas de RAÇA, nunca em applyCardMults() (a única
      // função que batalha clássica consulta). +1% ATK/HP por raça em V4
      // (das 5 raças base), pequeno o bastante para não competir com os
      // Artefatos (+5%) nem com o Sigilo (+50%).
      var v4Count = _countV4(s, true);
      if (v4Count > 0){
        var v4Mult = 1 + v4Count*0.01;
        atk = Math.round(atk * v4Mult);
        hp  = Math.round(hp  * v4Mult);
      }
      // Sigilo Origens: bônus absurdo (+50%/+50%) na carta equipada
      if (s.racas.sigilCardId && card.id===s.racas.sigilCardId){
        atk = Math.round(atk * 1.50);
        hp  = Math.round(hp  * 1.50);
      }
      return Object.assign({}, card, {atk:atk, hp:hp});
    },

    // Energia (moeda)
    grantEnergy: function(n){ var s=_save(); _ensure(s); s.racas.energy=(s.racas.energy||0)+n; _persist(s); }
  };

  // BUGFIX v19.1: s.racas._notified nunca era definido em lugar nenhum,
  // ou seja, "!s.racas._notified" era sempre true — a cada chamada de
  // battle()/fuseDominator()/etc., TODAS as conquistas já disponíveis
  // (mas ainda não resgatadas) disparavam o toast de novo, repetidamente,
  // em vez de notificar uma única vez no momento em que são desbloqueadas.
  // Agora se usa um Set por-conquista (s.racas._notifiedAch) para só
  // notificar cada conquista uma vez, e persiste essa marca no save.
  function _checkAch(s){
    try {
      s.racas._notifiedAch = s.racas._notifiedAch || {};
      var changed = false;
      ACHIEVEMENTS.forEach(function(a){
        if (!s.racas.achievementsClaimed[a.id] && !s.racas._notifiedAch[a.id]){
          try {
            if (a.check(s)){
              s.racas._notifiedAch[a.id] = true;
              changed = true;
              if (typeof toast === "function") toast("🏆 Conquista desbloqueada: "+a.name);
            }
          } catch(e){}
        }
      });
      if (changed) _persist(s);
    } catch(e){}
  }

  // ═════════════════════════════════════════════════════════════
  // Expor API global
  // ═════════════════════════════════════════════════════════════
  window.RacasAPI = API;
  // Também expõe as constantes pra depuração
  window.RACES = RACES;

  // Boot: garantir save inicializado
  try { API.ensure(); } catch(e){}
})();
