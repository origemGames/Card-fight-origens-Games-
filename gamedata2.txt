/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   gamedata2.js – v3.0  CONTEÚDO EXTRA
   Cartas de evento, novos sistemas, conteúdo adicional
   ============================================================ */

"use strict";

// ══════════════════════════════════════════════════════════════
// CARTAS EXTRAS (mais conteúdo no jogo)
// ══════════════════════════════════════════════════════════════
const EXTRA_CARDS = [
  // ── COMUNS EXTRAS ──
  { id:"c013", name:"Gnomo Explosivo",    atk:28, hp:40,  rarity:"COMMON",    img:"💣", desc:"Pequeno e perigoso." },
  // ══════════════════════════════════════════════════════════════
// NOVAS CARTAS – EXPANSÃO "ALÉM DO INFINITO" (cm001 – og010)
// ══════════════════════════════════════════════════════════════

// ── COMUNS (cm001 – cm200) ───────────────────────────────────
{ id: "cm001", name: "Lutador da Aurora", atk: 14, hp: 82, rarity: "COMMON", img: "🌅", desc: "Treina ao nascer do sol, cada golpe mais preciso que o anterior." },
// ══════════════════════════════════════════════════════════════
// EXPANSÃO "ALÉM DOS LIMITES" – MAIS DE 600 CARTAS INÉDITAS
// ══════════════════════════════════════════════════════════════

// ── ABYSS (ab001 – ab050) ───────────────────────────────────
{ id: "ab001", name: "Abismo Profundo", atk: 35, hp: 90, rarity: "COMMON", img: "🕳️", desc: "Olhar fixo no vazio que devora tudo." },
{ id: "ab002", name: "Criatura das Fendas", atk: 28, hp: 105, rarity: "COMMON", img: "🐙", desc: "Sai das rachaduras dimensionais para caçar." },
{ id: "ab003", name: "Sombra Líquida", atk: 42, hp: 55, rarity: "COMMON", img: "🌊", desc: "Escorre entre os dedos como água negra." },
{ id: "ab004", name: "Olho Abissal", atk: 22, hp: 120, rarity: "COMMON", img: "👁️", desc: "Observa do fundo sem piscar." },
{ id: "ab005", name: "Murmúrio do Vazio", atk: 38, hp: 80, rarity: "COMMON", img: "👄", desc: "Sussurra segredos que enlouquecem." },
{ id: "ab006", name: "Presa Ancestral", atk: 45, hp: 50, rarity: "COMMON", img: "🦷", desc: "Dente de uma criatura que existiu antes do tempo." },
{ id: "ab007", name: "Névoa Negra", atk: 32, hp: 95, rarity: "COMMON", img: "🌫️", desc: "Engole a luz e a esperança." },
{ id: "ab008", name: "Fragmento de Realidade", atk: 27, hp: 110, rarity: "COMMON", img: "🧩", desc: "Pedaço de um mundo que já foi." },
{ id: "ab009", name: "Corrente do Esquecimento", atk: 19, hp: 130, rarity: "COMMON", img: "⛓️", desc: "Prende a memória dos que passam." },
{ id: "ab010", name: "Sussurro do Nada", atk: 36, hp: 65, rarity: "COMMON", img: "🤐", desc: "Silêncio que fala mais que palavras." },
{ id: "ab011", name: "Eco do Abismo", atk: 30, hp: 85, rarity: "COMMON", img: "🔊", desc: "Repete os gritos dos que caíram." },
{ id: "ab012", name: "Sombra Dentada", atk: 15, hp: 125, rarity: "COMMON", img: "🦈", desc: "Mordida que não deixa marca." },
{ id: "ab013", name: "Vórtice Menor", atk: 24, hp: 100, rarity: "COMMON", img: "🌀", desc: "Pequeno redemoinho de energia escura." },
{ id: "ab014", name: "Caçador de Almas", atk: 40, hp: 45, rarity: "COMMON", img: "🎯", desc: "Sua presa nunca escapa." },
{ id: "ab015", name: "Guardião do Portal", atk: 33, hp: 88, rarity: "COMMON", img: "🚪", desc: "Impede a passagem entre mundos." },
{ id: "ab016", name: "Viajante Distorcido", atk: 18, hp: 70, rarity: "COMMON", img: "🧳", desc: "Anda por linhas do tempo quebradas." },
{ id: "ab017", name: "Lâmina de Sombras", atk: 29, hp: 98, rarity: "COMMON", img: "🗡️", desc: "Corta sem tocar." },
{ id: "ab018", name: "Farol Negro", atk: 26, hp: 78, rarity: "COMMON", img: "🕯️", desc: "Ilumina apenas o que quer ser visto." },
{ id: "ab019", name: "Carrasco do Vazio", atk: 21, hp: 65, rarity: "COMMON", img: "⚖️", desc: "Julgamento sem apelação." },
{ id: "ab020", name: "Lágrima de Estrela", atk: 17, hp: 108, rarity: "COMMON", img: "💧", desc: "Gotas de luz caídas do céu." },
{ id: "ab021", name: "Poeira Cósmica", atk: 31, hp: 92, rarity: "COMMON", img: "✨", desc: "Restos de galáxias mortas." },
{ id: "ab022", name: "Chama Abissal", atk: 39, hp: 50, rarity: "COMMON", img: "🔥", desc: "Fogo que queima sem oxigênio." },
{ id: "ab023", name: "Gelo do Fim", atk: 37, hp: 75, rarity: "COMMON", img: "🧊", desc: "Frio que congela até o tempo." },
{ id: "ab024", name: "Vento do Caos", atk: 20, hp: 115, rarity: "COMMON", img: "💨", desc: "Rajada que desorienta." },
{ id: "ab025", name: "Raio Morto", atk: 12, hp: 80, rarity: "COMMON", img: "⚡", desc: "Descarga que já foi vida." },
{ id: "ab026", name: "Masmorra Viva", atk: 23, hp: 70, rarity: "COMMON", img: "🏚️", desc: "Parede que respira." },
{ id: "ab027", name: "Penumbra Errante", atk: 34, hp: 95, rarity: "COMMON", img: "🌘", desc: "Entre a luz e a escuridão." },
{ id: "ab028", name: "Lodo Primordial", atk: 44, hp: 48, rarity: "COMMON", img: "🧪", desc: "Matéria orgânica não classificada." },
{ id: "ab029", name: "Arco de Trevas", atk: 16, hp: 72, rarity: "COMMON", img: "🏹", desc: "Flecha que se dobra no ar." },
{ id: "ab030", name: "Cálice de Ruína", atk: 41, hp: 40, rarity: "COMMON", img: "🍷", desc: "Quem bebe, se perde." },
{ id: "ab031", name: "Orbe de Aniquilação", atk: 25, hp: 85, rarity: "COMMON", img: "🔮", desc: "Contém um universo morrendo." },
{ id: "ab032", name: "Cristal Negro", atk: 14, hp: 110, rarity: "COMMON", img: "💎", desc: "Brilho macabro." },
{ id: "ab033", name: "Teia do Esquecimento", atk: 46, hp: 38, rarity: "COMMON", img: "🕸️", desc: "Prende a mente e a alma." },
{ id: "ab034", name: "Manto do Nada", atk: 35, hp: 70, rarity: "COMMON", img: "🧥", desc: "Quem veste, desaparece." },
{ id: "ab035", name: "Tridente das Profundezas", atk: 28, hp: 90, rarity: "COMMON", img: "🔱", desc: "Arma de um deus afogado." },
{ id: "ab036", name: "Serpente Etérea", atk: 32, hp: 60, rarity: "COMMON", img: "🐍", desc: "Corpo feito de fumaça." },
{ id: "ab037", name: "Martelo de Obsidiana", atk: 22, hp: 105, rarity: "COMMON", img: "🔨", desc: "Pesado como um pecado." },
{ id: "ab038", name: "Escudo de Fragmentos", atk: 29, hp: 80, rarity: "COMMON", img: "🛡️", desc: "Feito de estilhaços de realidade." },
{ id: "ab039", name: "Lança do Vazio", atk: 40, hp: 55, rarity: "COMMON", img: "⚔️", desc: "Perfura dimensões." },
{ id: "ab040", name: "Cajado Abissal", atk: 47, hp: 45, rarity: "COMMON", img: "🪄", desc: "Canaliza poder do nada." },
{ id: "ab041", name: "Foice do Juízo", atk: 20, hp: 82, rarity: "COMMON", img: "🌾", desc: "Ceifa almas como trigo." },
{ id: "ab042", name: "Adaga Sombria", atk: 18, hp: 78, rarity: "COMMON", img: "🔪", desc: "Corte silencioso." },
{ id: "ab043", name: "Machado Devorador", atk: 33, hp: 68, rarity: "COMMON", img: "🪓", desc: "Absorve a força do derrotado." },
{ id: "ab044", name: "Arco Estelar", atk: 26, hp: 75, rarity: "COMMON", img: "🏹", desc: "Flechas que viajam na luz." },
{ id: "ab045", name: "Escudo de Escamas", atk: 30, hp: 55, rarity: "COMMON", img: "🐉", desc: "Feito de pele de dragão morto." },
{ id: "ab046", name: "Cajado de Cristal", atk: 34, hp: 85, rarity: "COMMON", img: "🔮", desc: "Reflete a verdade." },
{ id: "ab047", name: "Lâmina Etérea", atk: 39, hp: 50, rarity: "COMMON", img: "🗡️", desc: "Corta o invisível." },
{ id: "ab048", name: "Maça do Juízo", atk: 24, hp: 95, rarity: "COMMON", img: "🪓", desc: "Esmaga com peso divino." },
{ id: "ab049", name: "Arpão das Profundezas", atk: 28, hp: 80, rarity: "COMMON", img: "🎣", desc: "Prende monstros marinhos." },
{ id: "ab050", name: "Selo do Vazio", atk: 37, hp: 65, rarity: "COMMON", img: "🔒", desc: "Tranca qualquer portal." },

// ── CYBER (cy001 – cy050) ──────────────────────────────────
{ id: "cy001", name: "Drone de Batalha", atk: 30, hp: 85, rarity: "COMMON", img: "🤖", desc: "Programado para vencer." },
{ id: "cy002", name: "Hacker Sombra", atk: 25, hp: 95, rarity: "COMMON", img: "💻", desc: "Invade sistemas e mentes." },
{ id: "cy003", name: "Exoesqueleto Reforçado", atk: 40, hp: 60, rarity: "COMMON", img: "⚙️", desc: "Força de aço, mobilidade de felino." },
{ id: "cy004", name: "Olho Cibernético", atk: 20, hp: 110, rarity: "COMMON", img: "👁️", desc: "Vê além do visível." },
{ id: "cy005", name: "Mão Biônica", atk: 35, hp: 75, rarity: "COMMON", img: "🦾", desc: "Esmaga com precisão robótica." },
{ id: "cy006", name: "Implante Neuronal", atk: 45, hp: 50, rarity: "COMMON", img: "🧠", desc: "Processa estratégias em milissegundos." },
{ id: "cy007", name: "Escudo de Energia", atk: 18, hp: 120, rarity: "COMMON", img: "🛡️", desc: "Campo de força impenetrável." },
{ id: "cy008", name: "Laser de Pulso", atk: 50, hp: 40, rarity: "COMMON", img: "🔫", desc: "Disparo rápido e letal." },
{ id: "cy009", name: "Módulo de Camuflagem", atk: 22, hp: 100, rarity: "COMMON", img: "👤", desc: "Desaparece em combate." },
{ id: "cy010", name: "Reator de Plasma", atk: 38, hp: 70, rarity: "COMMON", img: "⚡", desc: "Energia pura e instável." },
{ id: "cy011", name: "Cabo de Dados", atk: 28, hp: 90, rarity: "COMMON", img: "🔌", desc: "Conecta-se a qualquer sistema." },
{ id: "cy012", name: "Robô de Assalto", atk: 52, hp: 35, rarity: "COMMON", img: "🤖", desc: "Projetado para destruição." },
{ id: "cy013", name: "Scanner Biométrico", atk: 15, hp: 115, rarity: "COMMON", img: "📡", desc: "Identifica fraquezas inimigas." },
{ id: "cy014", name: "Garras de Titânio", atk: 42, hp: 55, rarity: "COMMON", img: "🦅", desc: "Arranhão que rasga aço." },
{ id: "cy015", name: "Mina de Neutrinos", atk: 33, hp: 80, rarity: "COMMON", img: "💣", desc: "Explosão de partículas." },
{ id: "cy016", name: "Antena de Comunicação", atk: 12, hp: 100, rarity: "COMMON", img: "📻", desc: "Transmite ordens e medo." },
{ id: "cy017", name: "Gerador de Campo", atk: 27, hp: 95, rarity: "COMMON", img: "🔋", desc: "Mantém defesas ativas." },
{ id: "cy018", name: "Espada de Luz", atk: 48, hp: 45, rarity: "COMMON", img: "⚔️", desc: "Corte que não deixa ferida." },
{ id: "cy019", name: "Drone de Suporte", atk: 16, hp: 85, rarity: "COMMON", img: "🛸", desc: "Cura e ataca." },
{ id: "cy020", name: "Cibernético Aprimorado", atk: 36, hp: 75, rarity: "COMMON", img: "💪", desc: "Implantes que superam a carne." },
{ id: "cy021", name: "Fragrância Sintética", atk: 44, hp: 50, rarity: "COMMON", img: "🧪", desc: "Atrai e desorienta." },
{ id: "cy022", name: "Placa de Circuito", atk: 21, hp: 105, rarity: "COMMON", img: "🔌", desc: "Conduz energia vital." },
{ id: "cy023", name: "Visão Térmica", atk: 30, hp: 70, rarity: "COMMON", img: "🔥", desc: "Enxerga no escuro." },
{ id: "cy024", name: "Braço Hidráulico", atk: 40, hp: 65, rarity: "COMMON", img: "🦾", desc: "Força dez vezes maior." },
{ id: "cy025", name: "Módulo de Invisibilidade", atk: 19, hp: 90, rarity: "COMMON", img: "👻", desc: "Fica oculto até atacar." },
{ id: "cy026", name: "Canhão de Íons", atk: 55, hp: 30, rarity: "COMMON", img: "🔫", desc: "Disparo de partículas carregadas." },
{ id: "cy027", name: "Central de Dados", atk: 14, hp: 120, rarity: "COMMON", img: "🗄️", desc: "Armazena conhecimento e poder." },
{ id: "cy028", name: "Robô Guardião", atk: 38, hp: 80, rarity: "COMMON", img: "🛡️", desc: "Defensor automatizado." },
{ id: "cy029", name: "Sensor de Movimento", atk: 23, hp: 85, rarity: "COMMON", img: "📷", desc: "Detecta qualquer ameaça." },
{ id: "cy030", name: "Célula de Combustível", atk: 26, hp: 95, rarity: "COMMON", img: "🔋", desc: "Energia limpa e explosiva." },
{ id: "cy031", name: "Matriz de Combate", atk: 32, hp: 78, rarity: "COMMON", img: "🖥️", desc: "Calcula o melhor golpe." },
{ id: "cy032", name: "Servomotor Avançado", atk: 29, hp: 88, rarity: "COMMON", img: "⚙️", desc: "Movimentos super-rápidos." },
{ id: "cy033", name: "Escudo de Polímero", atk: 17, hp: 110, rarity: "COMMON", img: "🛡️", desc: "Leve e resistente." },
{ id: "cy034", name: "Lança de Plasma", atk: 50, hp: 40, rarity: "COMMON", img: "⚔️", desc: "Perfura e queima." },
{ id: "cy035", name: "Dronídeo de Reconhecimento", atk: 24, hp: 80, rarity: "COMMON", img: "🛸", desc: "Mapeia o campo inimigo." },
{ id: "cy036", name: "Cibernético Caído", atk: 42, hp: 55, rarity: "COMMON", img: "💀", desc: "Reanimado por máquinas." },
{ id: "cy037", name: "Gerador de Ondas", atk: 33, hp: 72, rarity: "COMMON", img: "📡", desc: "Emite pulso desorientador." },
{ id: "cy038", name: "Mina Magnética", atk: 46, hp: 48, rarity: "COMMON", img: "🧲", desc: "Atrai e explode." },
{ id: "cy039", name: "Sonda de Exploração", atk: 20, hp: 95, rarity: "COMMON", img: "🚀", desc: "Viaja por terrenos hostis." },
{ id: "cy040", name: "Cápsula de Resgate", atk: 15, hp: 115, rarity: "COMMON", img: "🚁", desc: "Salva aliados em perigo." },
{ id: "cy041", name: "Foguete de Mísseis", atk: 58, hp: 25, rarity: "COMMON", img: "🚀", desc: "Ataque devastador." },
{ id: "cy042", name: "Modulador de Frequência", atk: 22, hp: 90, rarity: "COMMON", img: "📻", desc: "Interfere nas comunicações." },
{ id: "cy043", name: "Tanque Rastreador", atk: 44, hp: 60, rarity: "COMMON", img: "🚜", desc: "Persegue sem descanso." },
{ id: "cy044", name: "Mira a Laser", atk: 35, hp: 70, rarity: "COMMON", img: "🎯", desc: "Precisão absoluta." },
{ id: "cy045", name: "Luvas de Choque", atk: 40, hp: 65, rarity: "COMMON", img: "⚡", desc: "Golpe elétrico atordoante." },
{ id: "cy046", name: "Armadura Reativa", atk: 28, hp: 100, rarity: "COMMON", img: "🛡️", desc: "Responde a cada ataque." },
{ id: "cy047", name: "Mochila Propulsora", atk: 38, hp: 72, rarity: "COMMON", img: "🎒", desc: "Voo rápido e manobrável." },
{ id: "cy048", name: "Microfone Amplificado", atk: 19, hp: 85, rarity: "COMMON", img: "🎤", desc: "Grito sônico devastador." },
{ id: "cy049", name: "Gerador de Névoa", atk: 27, hp: 88, rarity: "COMMON", img: "🌫️", desc: "Cobre o campo de batalha." },
{ id: "cy050", name: "Pulseira de Energia", atk: 32, hp: 78, rarity: "COMMON", img: "📿", desc: "Armazena e libera poder." },

// ── DRACONIC (dr001 – dr050) ──────────────────────────────
{ id: "dr001", name: "Filhote de Dragão", atk: 30, hp: 85, rarity: "COMMON", img: "🐲", desc: "Pequeno, mas já cospe fogo." },
{ id: "dr002", name: "Dragão de Ferro", atk: 42, hp: 60, rarity: "COMMON", img: "🐉", desc: "Escamas metálicas." },
{ id: "dr003", name: "Wyvern da Montanha", atk: 38, hp: 75, rarity: "COMMON", img: "🦅", desc: "Voa alto e ataca de cima." },
{ id: "dr004", name: "Draco Noturno", atk: 50, hp: 40, rarity: "COMMON", img: "🌙", desc: "Sombra alada." },
{ id: "dr005", name: "Dragão de Gelo", atk: 35, hp: 90, rarity: "COMMON", img: "❄️", desc: "Sopro congelante." },
{ id: "dr006", name: "Dragão de Fogo", atk: 55, hp: 30, rarity: "COMMON", img: "🔥", desc: "Chamas devoradoras." },
{ id: "dr007", name: "Dragão de Terra", atk: 28, hp: 110, rarity: "COMMON", img: "🌍", desc: "Força telúrica." },
{ id: "dr008", name: "Dragão de Água", atk: 40, hp: 70, rarity: "COMMON", img: "🌊", desc: "Domina mares e rios." },
{ id: "dr009", name: "Dragão de Vento", atk: 45, hp: 55, rarity: "COMMON", img: "💨", desc: "Veloz como a brisa." },
{ id: "dr010", name: "Dragão de Cristal", atk: 33, hp: 95, rarity: "COMMON", img: "💎", desc: "Brilho cortante." },
{ id: "dr011", name: "Dragão de Obsidiana", atk: 48, hp: 50, rarity: "COMMON", img: "🪨", desc: "Negro e afiado." },
{ id: "dr012", name: "Dragão da Lua", atk: 42, hp: 65, rarity: "COMMON", img: "🌙", desc: "Canção noturna." },
{ id: "dr013", name: "Dragão do Sol", atk: 52, hp: 35, rarity: "COMMON", img: "☀️", desc: "Brilho ofuscante." },
{ id: "dr014", name: "Dragão do Caos", atk: 60, hp: 25, rarity: "COMMON", img: "🌀", desc: "Instável e mortal." },
{ id: "dr015", name: "Dragão da Noite", atk: 38, hp: 80, rarity: "COMMON", img: "🌑", desc: "Sombras vivas." },
{ id: "dr016", name: "Dragão do Crepúsculo", atk: 44, hp: 60, rarity: "COMMON", img: "🌆", desc: "Entre a luz e a treva." },
{ id: "dr017", name: "Dragão da Aurora", atk: 46, hp: 55, rarity: "COMMON", img: "🌅", desc: "Desperta com o sol." },
{ id: "dr018", name: "Dragão do Eclipse", atk: 54, hp: 40, rarity: "COMMON", img: "🌑", desc: "Poder do alinhamento." },
{ id: "dr019", name: "Dragão de Bronze", atk: 36, hp: 88, rarity: "COMMON", img: "🥉", desc: "Resistente e antigo." },
{ id: "dr020", name: "Dragão de Prata", atk: 50, hp: 45, rarity: "COMMON", img: "🥈", desc: "Luz prateada." },
{ id: "dr021", name: "Dragão de Ouro", atk: 56, hp: 35, rarity: "COMMON", img: "🥇", desc: "O mais nobre." },
{ id: "dr022", name: "Dragão de Jade", atk: 43, hp: 70, rarity: "COMMON", img: "🟩", desc: "Escamas verdes e duras." },
{ id: "dr023", name: "Dragão de Rubi", atk: 48, hp: 55, rarity: "COMMON", img: "❤️", desc: "Vermelho como sangue." },
{ id: "dr024", name: "Dragão de Safira", atk: 40, hp: 75, rarity: "COMMON", img: "💙", desc: "Azul profundo." },
{ id: "dr025", name: "Dragão de Esmeralda", atk: 46, hp: 65, rarity: "COMMON", img: "💚", desc: "Verde vibrante." },
{ id: "dr026", name: "Dragão de Ametista", atk: 52, hp: 45, rarity: "COMMON", img: "💜", desc: "Púrpura místico." },
{ id: "dr027", name: "Dragão de Opala", atk: 38, hp: 82, rarity: "COMMON", img: "🔮", desc: "Brilho iridescente." },
{ id: "dr028", name: "Dragão de Topázio", atk: 44, hp: 68, rarity: "COMMON", img: "🟡", desc: "Amarelo radiante." },
{ id: "dr029", name: "Dragão de Turmalina", atk: 50, hp: 50, rarity: "COMMON", img: "🟣", desc: "Eletricidade estranha." },
{ id: "dr030", name: "Dragão de Pirita", atk: 33, hp: 98, rarity: "COMMON", img: "🪙", desc: "Brilho de tolo." },
{ id: "dr031", name: "Dragão de Carbono", atk: 56, hp: 30, rarity: "COMMON", img: "⚫", desc: "Negro como carvão." },
{ id: "dr032", name: "Dragão de Neve", atk: 28, hp: 105, rarity: "COMMON", img: "❄️", desc: "Branco gelado." },
{ id: "dr033", name: "Dragão da Areia", atk: 40, hp: 78, rarity: "COMMON", img: "🏜️", desc: "Desliza nas dunas." },
{ id: "dr034", name: "Dragão da Lava", atk: 54, hp: 38, rarity: "COMMON", img: "🌋", desc: "Fluido e mortal." },
{ id: "dr035", name: "Dragão do Pântano", atk: 36, hp: 88, rarity: "COMMON", img: "🐊", desc: "Venenoso e lento." },
{ id: "dr036", name: "Dragão da Floresta", atk: 42, hp: 72, rarity: "COMMON", img: "🌳", desc: "Camuflado entre árvores." },
{ id: "dr037", name: "Dragão da Montanha", atk: 48, hp: 60, rarity: "COMMON", img: "⛰️", desc: "Sobrevive nas alturas." },
{ id: "dr038", name: "Dragão do Deserto", atk: 52, hp: 42, rarity: "COMMON", img: "🏜️", desc: "Resistente à seca." },
{ id: "dr039", name: "Dragão da Tundra", atk: 38, hp: 85, rarity: "COMMON", img: "❄️", desc: "Pele branca e espessa." },
{ id: "dr040", name: "Dragão da Selva", atk: 46, hp: 65, rarity: "COMMON", img: "🌴", desc: "Ágil e furtivo." },
{ id: "dr041", name: "Dragão da Savana", atk: 44, hp: 70, rarity: "COMMON", img: "🦒", desc: "Alto e veloz." },
{ id: "dr042", name: "Dragão do Mar", atk: 50, hp: 50, rarity: "COMMON", img: "🐋", desc: "Nadador poderoso." },
{ id: "dr043", name: "Dragão do Céu", atk: 55, hp: 35, rarity: "COMMON", img: "☁️", desc: "Voa nas nuvens." },
{ id: "dr044", name: "Dragão do Submundo", atk: 48, hp: 58, rarity: "COMMON", img: "💀", desc: "Vive entre os mortos." },
{ id: "dr045", name: "Dragão do Éter", atk: 42, hp: 75, rarity: "COMMON", img: "🌌", desc: "Sutil e etéreo." },
{ id: "dr046", name: "Dragão do Vazio", atk: 58, hp: 30, rarity: "COMMON", img: "🌀", desc: "Engole a luz." },
{ id: "dr047", name: "Dragão da Criação", atk: 50, hp: 55, rarity: "COMMON", img: "✨", desc: "Sopra vida." },
{ id: "dr048", name: "Dragão da Destruição", atk: 62, hp: 25, rarity: "COMMON", img: "💥", desc: "Aniquila tudo." },
{ id: "dr049", name: "Dragão da Transformação", atk: 44, hp: 68, rarity: "COMMON", img: "🔄", desc: "Muda de forma." },
{ id: "dr050", name: "Dragão da Ilusão", atk: 40, hp: 80, rarity: "COMMON", img: "🎭", desc: "Engana os sentidos." },

// ── ELEMENTAL (el001 – el060) ──────────────────────────────
{ id: "el001", name: "Fogo Elemental", atk: 45, hp: 50, rarity: "COMMON", img: "🔥", desc: "Chama viva." },
{ id: "el002", name: "Água Elemental", atk: 35, hp: 70, rarity: "COMMON", img: "🌊", desc: "Corrente fluida." },
{ id: "el003", name: "Terra Elemental", atk: 30, hp: 100, rarity: "COMMON", img: "🌍", desc: "Rocha sólida." },
{ id: "el004", name: "Ar Elemental", atk: 50, hp: 40, rarity: "COMMON", img: "💨", desc: "Vento cortante." },
{ id: "el005", name: "Gelo Elemental", atk: 40, hp: 60, rarity: "COMMON", img: "❄️", desc: "Frio absoluto." },
{ id: "el006", name: "Raio Elemental", atk: 55, hp: 35, rarity: "COMMON", img: "⚡", desc: "Choque elétrico." },
{ id: "el007", name: "Luz Elemental", atk: 38, hp: 72, rarity: "COMMON", img: "☀️", desc: "Brilho ofuscante." },
{ id: "el008", name: "Trevas Elemental", atk: 48, hp: 45, rarity: "COMMON", img: "🌑", desc: "Escuridão absoluta." },
{ id: "el009", name: "Veneno Elemental", atk: 42, hp: 55, rarity: "COMMON", img: "☣️", desc: "Tóxico e mortal." },
{ id: "el010", name: "Magma Elemental", atk: 50, hp: 40, rarity: "COMMON", img: "🌋", desc: "Lava derretida." },
{ id: "el011", name: "Neve Elemental", atk: 28, hp: 90, rarity: "COMMON", img: "🌨️", desc: "Neve eterna." },
{ id: "el012", name: "Areia Elemental", atk: 35, hp: 80, rarity: "COMMON", img: "🏜️", desc: "Tempestade de grãos." },
{ id: "el013", name: "Lama Elemental", atk: 25, hp: 105, rarity: "COMMON", img: "🧪", desc: "Lodo pegajoso." },
{ id: "el014", name: "Fumaça Elemental", atk: 40, hp: 65, rarity: "COMMON", img: "🌫️", desc: "Neblina sufocante." },
{ id: "el015", name: "Sombra Elemental", atk: 46, hp: 48, rarity: "COMMON", img: "🖤", desc: "Forma sem corpo." },
{ id: "el016", name: "Cristal Elemental", atk: 38, hp: 75, rarity: "COMMON", img: "💎", desc: "Duro e brilhante." },
{ id: "el017", name: "Metal Elemental", atk: 44, hp: 60, rarity: "COMMON", img: "⚙️", desc: "Aço vivo." },
{ id: "el018", name: "Madeira Elemental", atk: 32, hp: 88, rarity: "COMMON", img: "🌳", desc: "Flexível e resistente." },
{ id: "el019", name: "Vida Elemental", atk: 22, hp: 110, rarity: "COMMON", img: "🌱", desc: "Energia vital." },
{ id: "el020", name: "Morte Elemental", atk: 55, hp: 30, rarity: "COMMON", img: "💀", desc: "Ceifa sem piedade." },
{ id: "el021", name: "Caos Elemental", atk: 60, hp: 25, rarity: "COMMON", img: "🌀", desc: "Imprevisível e violento." },
{ id: "el022", name: "Ordem Elemental", atk: 40, hp: 80, rarity: "COMMON", img: "⚖️", desc: "Equilíbrio perfeito." },
{ id: "el023", name: "Tempo Elemental", atk: 35, hp: 85, rarity: "COMMON", img: "⏳", desc: "Distorce o passar." },
{ id: "el024", name: "Espaço Elemental", atk: 48, hp: 50, rarity: "COMMON", img: "🌌", desc: "Dobra a realidade." },
{ id: "el025", name: "Gravidade Elemental", atk: 42, hp: 65, rarity: "COMMON", img: "⚫", desc: "Puxa e esmaga." },
{ id: "el026", name: "Eletricidade Elemental", atk: 52, hp: 38, rarity: "COMMON", img: "⚡", desc: "Faísca mortífera." },
{ id: "el027", name: "Magnetismo Elemental", atk: 38, hp: 72, rarity: "COMMON", img: "🧲", desc: "Atrai e repele." },
{ id: "el028", name: "Radiação Elemental", atk: 50, hp: 42, rarity: "COMMON", img: "☢️", desc: "Energia corrosiva." },
{ id: "el029", name: "Fé Elemental", atk: 30, hp: 95, rarity: "COMMON", img: "🙏", desc: "Poder da crença." },
{ id: "el030", name: "Desespero Elemental", atk: 46, hp: 55, rarity: "COMMON", img: "😭", desc: "Sufoca a esperança." },
{ id: "el031", name: "Esperança Elemental", atk: 28, hp: 100, rarity: "COMMON", img: "🌈", desc: "Luz no fim." },
{ id: "el032", name: "Medo Elemental", atk: 44, hp: 60, rarity: "COMMON", img: "😱", desc: "Paralisa o coração." },
{ id: "el033", name: "Coragem Elemental", atk: 40, hp: 70, rarity: "COMMON", img: "🦁", desc: "Faz enfrentar." },
{ id: "el034", name: "Sabedoria Elemental", atk: 35, hp: 85, rarity: "COMMON", img: "🦉", desc: "Conhecimento é poder." },
{ id: "el035", name: "Loucura Elemental", atk: 58, hp: 28, rarity: "COMMON", img: "🤪", desc: "Inconsistência." },
{ id: "el036", name: "Silêncio Elemental", atk: 20, hp: 115, rarity: "COMMON", img: "🤫", desc: "Absorve o som." },
{ id: "el037", name: "Eco Elemental", atk: 33, hp: 78, rarity: "COMMON", img: "🔊", desc: "Repete e amplifica." },
{ id: "el038", name: "Ritmo Elemental", atk: 42, hp: 62, rarity: "COMMON", img: "🥁", desc: "Sincroniza ataques." },
{ id: "el039", name: "Melodia Elemental", atk: 30, hp: 88, rarity: "COMMON", img: "🎵", desc: "Encanta e fere." },
{ id: "el040", name: "Harmonia Elemental", atk: 36, hp: 76, rarity: "COMMON", img: "🎶", desc: "Equilíbrio sonoro." },
{ id: "el041", name: "Dissonância Elemental", atk: 48, hp: 50, rarity: "COMMON", img: "🎵", desc: "Cacofonia." },
{ id: "el042", name: "Paz Elemental", atk: 18, hp: 120, rarity: "COMMON", img: "🕊️", desc: "Acalma a guerra." },
{ id: "el043", name: "Fúria Elemental", atk: 60, hp: 22, rarity: "COMMON", img: "😡", desc: "Ira cega." },
{ id: "el044", name: "Tristeza Elemental", atk: 25, hp: 105, rarity: "COMMON", img: "🥲", desc: "Chuvas de lágrimas." },
{ id: "el045", name: "Alegria Elemental", atk: 32, hp: 82, rarity: "COMMON", img: "😄", desc: "Explosão de luz." },
{ id: "el046", name: "Amor Elemental", atk: 28, hp: 95, rarity: "COMMON", img: "❤️", desc: "Força que une." },
{ id: "el047", name: "Ódio Elemental", atk: 54, hp: 35, rarity: "COMMON", img: "👿", desc: "Consome tudo." },
{ id: "el048", name: "Vingança Elemental", atk: 50, hp: 42, rarity: "COMMON", img: "⚔️", desc: "Retribuição." },
{ id: "el049", name: "Perdão Elemental", atk: 22, hp: 110, rarity: "COMMON", img: "🙏", desc: "Liberta a alma." },
{ id: "el050", name: "Sacrifício Elemental", atk: 40, hp: 65, rarity: "COMMON", img: "🔥", desc: "Doa-se pelo outro." },
{ id: "el051", name: "Renascimento Elemental", atk: 38, hp: 72, rarity: "COMMON", img: "🔄", desc: "Recomeça." },
{ id: "el052", name: "Transcendência Elemental", atk: 52, hp: 38, rarity: "COMMON", img: "✨", desc: "Vai além." },
{ id: "el053", name: "Essência Elemental", atk: 44, hp: 58, rarity: "COMMON", img: "💧", desc: "Pura força." },
{ id: "el054", name: "Núcleo Elemental", atk: 48, hp: 50, rarity: "COMMON", img: "🔮", desc: "Fonte de tudo." },
{ id: "el055", name: "Fragmento Elemental", atk: 35, hp: 80, rarity: "COMMON", img: "🧩", desc: "Pedaço do todo." },
{ id: "el056", name: "Semente Elemental", atk: 20, hp: 100, rarity: "COMMON", img: "🌱", desc: "Potencial latente." },
{ id: "el057", name: "Fruto Elemental", atk: 42, hp: 68, rarity: "COMMON", img: "🍎", desc: "Poder colhido." },
{ id: "el058", name: "Raiz Elemental", atk: 30, hp: 95, rarity: "COMMON", img: "🌿", desc: "Firmeza." },
{ id: "el059", name: "Flor Elemental", atk: 28, hp: 88, rarity: "COMMON", img: "🌸", desc: "Bela e mortal." },
{ id: "el060", name: "Espinho Elemental", atk: 46, hp: 52, rarity: "COMMON", img: "🌵", desc: "Perfura e envenena." },

// ── FABLED (fd001 – fd050) ──────────────────────────────────
{ id: "fd001", name: "Fada da Neblina", atk: 25, hp: 85, rarity: "COMMON", img: "🧚", desc: "Pequena, mas poderosa." },
{ id: "fd002", name: "Duende das Ruínas", atk: 38, hp: 70, rarity: "COMMON", img: "🧝", desc: "Guardião de tesouros." },
{ id: "fd003", name: "Troll de Ponte", atk: 44, hp: 65, rarity: "COMMON", img: "🧌", desc: "Cobra pedágio." },
{ id: "fd004", name: "Gigante das Montanhas", atk: 55, hp: 40, rarity: "COMMON", img: "🗿", desc: "Passos que tremem." },
{ id: "fd005", name: "Náiade do Lago", atk: 30, hp: 90, rarity: "COMMON", img: "🧜‍♀️", desc: "Canto hipnótico." },
{ id: "fd006", name: "Sátiro Dançarino", atk: 42, hp: 60, rarity: "COMMON", img: "🎭", desc: "Ritmo selvagem." },
{ id: "fd007", name: "Centauro Arqueiro", atk: 48, hp: 50, rarity: "COMMON", img: "🐴", desc: "Flecha e galope." },
{ id: "fd008", name: "Harpia Cantora", atk: 40, hp: 72, rarity: "COMMON", img: "🦅", desc: "Grito estridente." },
{ id: "fd009", name: "Basilisco Pequeno", atk: 46, hp: 55, rarity: "COMMON", img: "🐍", desc: "Olhar de pedra." },
{ id: "fd010", name: "Cockatrice Jovem", atk: 38, hp: 78, rarity: "COMMON", img: "🐔", desc: "Veneno em gotas." },
{ id: "fd011", name: "Grifo Filhote", atk: 50, hp: 45, rarity: "COMMON", img: "🦁", desc: "Águia-leão." },
{ id: "fd012", name: "Pégaso Alado", atk: 44, hp: 60, rarity: "COMMON", img: "🐴", desc: "Voa livre." },
{ id: "fd013", name: "Unicórnio Menor", atk: 35, hp: 85, rarity: "COMMON", img: "🦄", desc: "Chifre mágico." },
{ id: "fd014", name: "Lobo de Prata", atk: 52, hp: 38, rarity: "COMMON", img: "🐺", desc: "Uivo lunar." },
{ id: "fd015", name: "Raposa de Fogo", atk: 48, hp: 48, rarity: "COMMON", img: "🦊", desc: "Caça ardente." },
{ id: "fd016", name: "Pantera Negra", atk: 54, hp: 32, rarity: "COMMON", img: "🐆", desc: "Sombra felina." },
{ id: "fd017", name: "Tigre de Gelo", atk: 46, hp: 55, rarity: "COMMON", img: "🐅", desc: "Presas de gelo." },
{ id: "fd018", name: "Urso Pardo", atk: 50, hp: 50, rarity: "COMMON", img: "🐻", desc: "Força bruta." },
{ id: "fd019", name: "Alce Ancestral", atk: 42, hp: 70, rarity: "COMMON", img: "🦌", desc: "Chifres enormes." },
{ id: "fd020", name: "Búfalo Selvagem", atk: 48, hp: 55, rarity: "COMMON", img: "🐃", desc: "Carga devastadora." },
{ id: "fd021", name: "Rinoceronte de Couraça", atk: 52, hp: 45, rarity: "COMMON", img: "🦏", desc: "Pele grossa." },
{ id: "fd022", name: "Hipopótamo Enfurecido", atk: 56, hp: 38, rarity: "COMMON", img: "🦛", desc: "Mordida esmagadora." },
{ id: "fd023", name: "Crocodilo das Águas", atk: 50, hp: 48, rarity: "COMMON", img: "🐊", desc: "Mandíbula de aço." },
{ id: "fd024", name: "Iguana Gigante", atk: 40, hp: 72, rarity: "COMMON", img: "🦎", desc: "Língua rápida." },
{ id: "fd025", name: "Tartaruga Blindada", atk: 30, hp: 100, rarity: "COMMON", img: "🐢", desc: "Defesa total." },
{ id: "fd026", name: "Lontra Lutadora", atk: 44, hp: 60, rarity: "COMMON", img: "🦦", desc: "Ágil na água." },
{ id: "fd027", name: "Texugo Feroz", atk: 48, hp: 52, rarity: "COMMON", img: "🦡", desc: "Luta até o fim." },
{ id: "fd028", name: "Ouriço de Fogo", atk: 46, hp: 55, rarity: "COMMON", img: "🦔", desc: "Espinhos queimam." },
{ id: "fd029", name: "Camaleão Místico", atk: 38, hp: 78, rarity: "COMMON", img: "🦎", desc: "Muda de cor." },
{ id: "fd030", name: "Macaco Guerreiro", atk: 52, hp: 40, rarity: "COMMON", img: "🐒", desc: "Saltos e golpes." },
{ id: "fd031", name: "Gorila de Ferro", atk: 56, hp: 35, rarity: "COMMON", img: "🦍", desc: "Soco sísmico." },
{ id: "fd032", name: "Orangotango Sábio", atk: 34, hp: 82, rarity: "COMMON", img: "🦧", desc: "Estratégia lenta." },
{ id: "fd033", name: "Javali da Floresta", atk: 50, hp: 48, rarity: "COMMON", img: "🐗", desc: "Presas afiadas." },
{ id: "fd034", name: "Gavião Peregrino", atk: 58, hp: 28, rarity: "COMMON", img: "🦅", desc: "Mergulho fatal." },
{ id: "fd035", name: "Morcego Vampiro", atk: 44, hp: 55, rarity: "COMMON", img: "🦇", desc: "Suga a vida." },
{ id: "fd036", name: "Sapo Venenoso", atk: 42, hp: 60, rarity: "COMMON", img: "🐸", desc: "Língua peçonhenta." },
{ id: "fd037", name: "Escorpião do Deserto", atk: 48, hp: 50, rarity: "COMMON", img: "🦂", desc: "Ferrão mortal." },
{ id: "fd038", name: "Aranha Tecedeira", atk: 46, hp: 55, rarity: "COMMON", img: "🕷️", desc: "Teias pegajosas." },
{ id: "fd039", name: "Centopeia Blindada", atk: 40, hp: 72, rarity: "COMMON", img: "🐛", desc: "Muitas patas." },
{ id: "fd040", name: "Caracol Guerreiro", atk: 28, hp: 105, rarity: "COMMON", img: "🐌", desc: "Devagar, seguro." },
{ id: "fd041", name: "Polvo Estrategista", atk: 50, hp: 45, rarity: "COMMON", img: "🐙", desc: "Oito braços." },
{ id: "fd042", name: "Água-viva Elétrica", atk: 54, hp: 38, rarity: "COMMON", img: "🪼", desc: "Toque chocante." },
{ id: "fd043", name: "Cavalo-marinho Dançarino", atk: 36, hp: 78, rarity: "COMMON", img: "🐴", desc: "Gracioso." },
{ id: "fd044", name: "Peixe-espada", atk: 56, hp: 32, rarity: "COMMON", img: "🐟", desc: "Nadadeira cortante." },
{ id: "fd045", name: "Tubarão Abissal", atk: 58, hp: 30, rarity: "COMMON", img: "🦈", desc: "Dentes serrilhados." },
{ id: "fd046", name: "Baleia Cantora", atk: 40, hp: 80, rarity: "COMMON", img: "🐋", desc: "Canção hipnótica." },
{ id: "fd047", name: "Golfinho Guerreiro", atk: 48, hp: 52, rarity: "COMMON", img: "🐬", desc: "Ágil e inteligente." },
{ id: "fd048", name: "Lula Luminescente", atk: 52, hp: 45, rarity: "COMMON", img: "🦑", desc: "Brilho e tentáculos." },
{ id: "fd049", name: "Sereia Menor", atk: 38, hp: 72, rarity: "COMMON", img: "🧜‍♀️", desc: "Canto do mar." },
{ id: "fd050", name: "Tritão Novato", atk: 44, hp: 60, rarity: "COMMON", img: "🧜", desc: "Lança de três pontas." },

// ── GHOST (gh001 – gh050) ──────────────────────────────────
{ id: "gh001", name: "Espectro Errante", atk: 35, hp: 80, rarity: "COMMON", img: "👻", desc: "Assombra sem tocar." },
{ id: "gh002", name: "Sombra Dançante", atk: 42, hp: 65, rarity: "COMMON", img: "🕺", desc: "Move-se sem corpo." },
{ id: "gh003", name: "Alma Penada", atk: 28, hp: 95, rarity: "COMMON", img: "😢", desc: "Presa entre mundos." },
{ id: "gh004", name: "Aparição", atk: 50, hp: 40, rarity: "COMMON", img: "🌫️", desc: "Aparece e some." },
{ id: "gh005", name: "Fantasma Esquecido", atk: 22, hp: 110, rarity: "COMMON", img: "🕯️", desc: "Não lembra quem foi." },
{ id: "gh006", name: "Poltergeist", atk: 46, hp: 55, rarity: "COMMON", img: "🔮", desc: "Move objetos com a mente." },
{ id: "gh007", name: "Espectro da Floresta", atk: 38, hp: 72, rarity: "COMMON", img: "🌲", desc: "Entre árvores." },
{ id: "gh008", name: "Sombra do Castelo", atk: 44, hp: 60, rarity: "COMMON", img: "🏰", desc: "Assombra corredores." },
{ id: "gh009", name: "Fantasminha Brincalhão", atk: 20, hp: 120, rarity: "COMMON", img: "😜", desc: "Leve e divertido." },
{ id: "gh010", name: "Espectro do Mar", atk: 48, hp: 48, rarity: "COMMON", img: "🌊", desc: "Névoa salgada." },
{ id: "gh011", name: "Alma do Guerreiro", atk: 52, hp: 35, rarity: "COMMON", img: "⚔️", desc: "Luta mesmo morta." },
{ id: "gh012", name: "Sombra do Herói", atk: 40, hp: 70, rarity: "COMMON", img: "🛡️", desc: "Reflexo glorioso." },
{ id: "gh013", name: "Espectro do Trono", atk: 30, hp: 90, rarity: "COMMON", img: "👑", desc: "Rei fantasma." },
{ id: "gh014", name: "Aparição Noturna", atk: 46, hp: 52, rarity: "COMMON", img: "🌙", desc: "Só aparece à noite." },
{ id: "gh015", name: "Sombra do Abismo", atk: 54, hp: 32, rarity: "COMMON", img: "🌀", desc: "Vindo do nada." },
{ id: "gh016", name: "Espectro do Deserto", atk: 38, hp: 78, rarity: "COMMON", img: "🏜️", desc: "Areia fantasma." },
{ id: "gh017", name: "Alma Selvagem", atk: 42, hp: 65, rarity: "COMMON", img: "🐺", desc: "Espírito lobo." },
{ id: "gh018", name: "Sombra do Caçador", atk: 48, hp: 50, rarity: "COMMON", img: "🏹", desc: "Flecha etérea." },
{ id: "gh019", name: "Espectro do Lago", atk: 32, hp: 88, rarity: "COMMON", img: "🏞️", desc: "Névoa d'água." },
{ id: "gh020", name: "Aparição da Lua", atk: 44, hp: 60, rarity: "COMMON", img: "🌕", desc: "Luz prateada." },
{ id: "gh021", name: "Sombra do Sol", atk: 50, hp: 42, rarity: "COMMON", img: "☀️", desc: "Brilho pálido." },
{ id: "gh022", name: "Espectro do Vento", atk: 40, hp: 72, rarity: "COMMON", img: "💨", desc: "Sussurro do ar." },
{ id: "gh023", name: "Alma do Fogo", atk: 52, hp: 35, rarity: "COMMON", img: "🔥", desc: "Chama fantasma." },
{ id: "gh024", name: "Sombra do Gelo", atk: 35, hp: 85, rarity: "COMMON", img: "❄️", desc: "Frio espectral." },
{ id: "gh025", name: "Espectro do Trovão", atk: 55, hp: 30, rarity: "COMMON", img: "⚡", desc: "Relâmpago morto." },
{ id: "gh026", name: "Aparição do Caos", atk: 58, hp: 25, rarity: "COMMON", img: "🌀", desc: "Forma distorcida." },
{ id: "gh027", name: "Sombra da Ordem", atk: 38, hp: 80, rarity: "COMMON", img: "⚖️", desc: "Equilíbrio fantasmagórico." },
{ id: "gh028", name: "Espectro do Tempo", atk: 30, hp: 95, rarity: "COMMON", img: "⏳", desc: "Relógio parado." },
{ id: "gh029", name: "Alma do Espaço", atk: 44, hp: 60, rarity: "COMMON", img: "🌌", desc: "Estrela morta." },
{ id: "gh030", name: "Sombra da Gravidade", atk: 42, hp: 68, rarity: "COMMON", img: "⚫", desc: "Puxa para baixo." },
{ id: "gh031", name: "Espectro da Luz", atk: 28, hp: 100, rarity: "COMMON", img: "💡", desc: "Clarão suave." },
{ id: "gh032", name: "Aparição das Trevas", atk: 50, hp: 42, rarity: "COMMON", img: "🌑", desc: "Escuridão viva." },
{ id: "gh033", name: "Sombra da Esperança", atk: 22, hp: 110, rarity: "COMMON", img: "🌈", desc: "Arco-íris pálido." },
{ id: "gh034", name: "Espectro do Medo", atk: 46, hp: 55, rarity: "COMMON", img: "😨", desc: "Paralisa." },
{ id: "gh035", name: "Alma da Coragem", atk: 40, hp: 75, rarity: "COMMON", img: "🦁", desc: "Enfrenta o fim." },
{ id: "gh036", name: "Sombra do Amor", atk: 25, hp: 105, rarity: "COMMON", img: "❤️", desc: "Laço eterno." },
{ id: "gh037", name: "Espectro do Ódio", atk: 56, hp: 28, rarity: "COMMON", img: "👿", desc: "Rancor imortal." },
{ id: "gh038", name: "Aparição do Perdão", atk: 20, hp: 115, rarity: "COMMON", img: "🙏", desc: "Liberta." },
{ id: "gh039", name: "Sombra do Sacrifício", atk: 35, hp: 82, rarity: "COMMON", img: "🔥", desc: "Entrega total." },
{ id: "gh040", name: "Espectro do Renascimento", atk: 38, hp: 78, rarity: "COMMON", img: "🔄", desc: "Ciclo eterno." },
{ id: "gh041", name: "Alma da Transcendência", atk: 48, hp: 48, rarity: "COMMON", img: "✨", desc: "Além da morte." },
{ id: "gh042", name: "Sombra da Destruição", atk: 60, hp: 22, rarity: "COMMON", img: "💥", desc: "Apaga tudo." },
{ id: "gh043", name: "Espectro da Criação", atk: 32, hp: 88, rarity: "COMMON", img: "🌱", desc: "Vida nova." },
{ id: "gh044", name: "Aparição do Caos", atk: 54, hp: 35, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "gh045", name: "Sombra da Ordem", atk: 36, hp: 85, rarity: "COMMON", img: "⚖️", desc: "Lei eterna." },
{ id: "gh046", name: "Espectro do Tempo", atk: 30, hp: 95, rarity: "COMMON", img: "⏳", desc: "Segundo eterno." },
{ id: "gh047", name: "Alma do Espaço", atk: 42, hp: 68, rarity: "COMMON", img: "🌌", desc: "Vazio." },
{ id: "gh048", name: "Sombra da Gravidade", atk: 44, hp: 60, rarity: "COMMON", img: "⚫", desc: "Colapso." },
{ id: "gh049", name: "Espectro da Luz", atk: 28, hp: 100, rarity: "COMMON", img: "💡", desc: "Clarão." },
{ id: "gh050", name: "Aparição das Trevas", atk: 50, hp: 42, rarity: "COMMON", img: "🌑", desc: "Negrume." },

// ── KNIGHT (kd001 – kd060) ──────────────────────────────────
{ id: "kd001", name: "Cavaleiro de Bronze", atk: 30, hp: 90, rarity: "COMMON", img: "🛡️", desc: "Armadura modesta." },
{ id: "kd002", name: "Cavaleiro de Ferro", atk: 40, hp: 70, rarity: "COMMON", img: "⚙️", desc: "Forjado no aço." },
{ id: "kd003", name: "Cavaleiro de Cobre", atk: 35, hp: 80, rarity: "COMMON", img: "🔶", desc: "Vermelho e forte." },
{ id: "kd004", name: "Cavaleiro de Lata", atk: 25, hp: 105, rarity: "COMMON", img: "🪣", desc: "Leve, frágil." },
{ id: "kd005", name: "Cavaleiro de Osso", atk: 45, hp: 55, rarity: "COMMON", img: "🦴", desc: "Morto-vivo." },
{ id: "kd006", name: "Cavaleiro de Palha", atk: 20, hp: 115, rarity: "COMMON", img: "🧑‍🌾", desc: "Surpreendente." },
{ id: "kd007", name: "Cavaleiro de Bambu", atk: 28, hp: 100, rarity: "COMMON", img: "🎋", desc: "Flexível." },
{ id: "kd008", name: "Cavaleiro de Cortiça", atk: 18, hp: 120, rarity: "COMMON", img: "🪵", desc: "Flutua." },
{ id: "kd009", name: "Cavaleiro de Vidro", atk: 50, hp: 35, rarity: "COMMON", img: "🪞", desc: "Brilha e quebra." },
{ id: "kd010", name: "Cavaleiro de Lã", atk: 22, hp: 110, rarity: "COMMON", img: "🐑", desc: "Macio, mas duro." },
{ id: "kd011", name: "Cavaleiro de Junco", atk: 26, hp: 108, rarity: "COMMON", img: "🌿", desc: "Leve." },
{ id: "kd012", name: "Cavaleiro de Cera", atk: 30, hp: 95, rarity: "COMMON", img: "🕯️", desc: "Derrete." },
{ id: "kd013", name: "Cavaleiro de Gelo", atk: 38, hp: 78, rarity: "COMMON", img: "❄️", desc: "Congela." },
{ id: "kd014", name: "Cavaleiro de Fogo", atk: 50, hp: 42, rarity: "COMMON", img: "🔥", desc: "Chamas." },
{ id: "kd015", name: "Cavaleiro de Terra", atk: 32, hp: 88, rarity: "COMMON", img: "🌍", desc: "Pesado." },
{ id: "kd016", name: "Cavaleiro de Água", atk: 40, hp: 72, rarity: "COMMON", img: "🌊", desc: "Fluido." },
{ id: "kd017", name: "Cavaleiro de Vento", atk: 44, hp: 60, rarity: "COMMON", img: "💨", desc: "Veloz." },
{ id: "kd018", name: "Cavaleiro de Luz", atk: 35, hp: 82, rarity: "COMMON", img: "☀️", desc: "Brilhante." },
{ id: "kd019", name: "Cavaleiro de Sombra", atk: 46, hp: 55, rarity: "COMMON", img: "🌑", desc: "Furtivo." },
{ id: "kd020", name: "Cavaleiro de Veneno", atk: 42, hp: 65, rarity: "COMMON", img: "☣️", desc: "Envenena." },
{ id: "kd021", name: "Cavaleiro de Magma", atk: 48, hp: 48, rarity: "COMMON", img: "🌋", desc: "Lava." },
{ id: "kd022", name: "Cavaleiro de Neve", atk: 30, hp: 92, rarity: "COMMON", img: "🌨️", desc: "Branco." },
{ id: "kd023", name: "Cavaleiro de Areia", atk: 36, hp: 80, rarity: "COMMON", img: "🏜️", desc: "Desliza." },
{ id: "kd024", name: "Cavaleiro de Lama", atk: 28, hp: 102, rarity: "COMMON", img: "🧪", desc: "Pegajoso." },
{ id: "kd025", name: "Cavaleiro de Fumaça", atk: 40, hp: 70, rarity: "COMMON", img: "🌫️", desc: "Fugaz." },
{ id: "kd026", name: "Cavaleiro de Cristal", atk: 44, hp: 62, rarity: "COMMON", img: "💎", desc: "Duro." },
{ id: "kd027", name: "Cavaleiro de Metal", atk: 48, hp: 55, rarity: "COMMON", img: "⚙️", desc: "Resistente." },
{ id: "kd028", name: "Cavaleiro de Madeira", atk: 32, hp: 90, rarity: "COMMON", img: "🪵", desc: "Natural." },
{ id: "kd029", name: "Cavaleiro de Vida", atk: 25, hp: 110, rarity: "COMMON", img: "🌱", desc: "Cura." },
{ id: "kd030", name: "Cavaleiro de Morte", atk: 55, hp: 32, rarity: "COMMON", img: "💀", desc: "Ceifador." },
{ id: "kd031", name: "Cavaleiro do Caos", atk: 58, hp: 28, rarity: "COMMON", img: "🌀", desc: "Imprevisível." },
{ id: "kd032", name: "Cavaleiro da Ordem", atk: 38, hp: 82, rarity: "COMMON", img: "⚖️", desc: "Justo." },
{ id: "kd033", name: "Cavaleiro do Tempo", atk: 35, hp: 88, rarity: "COMMON", img: "⏳", desc: "Lento." },
{ id: "kd034", name: "Cavaleiro do Espaço", atk: 42, hp: 68, rarity: "COMMON", img: "🌌", desc: "Distorce." },
{ id: "kd035", name: "Cavaleiro da Gravidade", atk: 40, hp: 72, rarity: "COMMON", img: "⚫", desc: "Pesado." },
{ id: "kd036", name: "Cavaleiro do Éter", atk: 44, hp: 60, rarity: "COMMON", img: "✨", desc: "Sutil." },
{ id: "kd037", name: "Cavaleiro do Vazio", atk: 50, hp: 42, rarity: "COMMON", img: "🕳️", desc: "Engole." },
{ id: "kd038", name: "Cavaleiro do Sonho", atk: 30, hp: 95, rarity: "COMMON", img: "💤", desc: "Onírico." },
{ id: "kd039", name: "Cavaleiro do Pesadelo", atk: 52, hp: 38, rarity: "COMMON", img: "😱", desc: "Aterroriza." },
{ id: "kd040", name: "Cavaleiro da Realidade", atk: 46, hp: 55, rarity: "COMMON", img: "🌍", desc: "Concreto." },
{ id: "kd041", name: "Cavaleiro da Ilusão", atk: 38, hp: 78, rarity: "COMMON", img: "🎭", desc: "Engana." },
{ id: "kd042", name: "Cavaleiro da Fé", atk: 28, hp: 102, rarity: "COMMON", img: "🙏", desc: "Inabalável." },
{ id: "kd043", name: "Cavaleiro da Dúvida", atk: 48, hp: 48, rarity: "COMMON", img: "🤔", desc: "Incerto." },
{ id: "kd044", name: "Cavaleiro da Certeza", atk: 36, hp: 85, rarity: "COMMON", img: "✔️", desc: "Decidido." },
{ id: "kd045", name: "Cavaleiro do Medo", atk: 50, hp: 45, rarity: "COMMON", img: "😨", desc: "Paralisa." },
{ id: "kd046", name: "Cavaleiro da Coragem", atk: 42, hp: 70, rarity: "COMMON", img: "🦁", desc: "Enfrenta." },
{ id: "kd047", name: "Cavaleiro do Amor", atk: 30, hp: 98, rarity: "COMMON", img: "❤️", desc: "Protetor." },
{ id: "kd048", name: "Cavaleiro do Ódio", atk: 54, hp: 35, rarity: "COMMON", img: "👿", desc: "Vingativo." },
{ id: "kd049", name: "Cavaleiro do Perdão", atk: 22, hp: 112, rarity: "COMMON", img: "🙏", desc: "Misericordioso." },
{ id: "kd050", name: "Cavaleiro do Sacrifício", atk: 40, hp: 75, rarity: "COMMON", img: "🔥", desc: "Dá tudo." },
{ id: "kd051", name: "Cavaleiro do Renascimento", atk: 38, hp: 82, rarity: "COMMON", img: "🔄", desc: "Recomeça." },
{ id: "kd052", name: "Cavaleiro da Transcendência", atk: 48, hp: 50, rarity: "COMMON", img: "✨", desc: "Vai além." },
{ id: "kd053", name: "Cavaleiro da Destruição", atk: 60, hp: 25, rarity: "COMMON", img: "💥", desc: "Aniquila." },
{ id: "kd054", name: "Cavaleiro da Criação", atk: 32, hp: 92, rarity: "COMMON", img: "🌱", desc: "Constrói." },
{ id: "kd055", name: "Cavaleiro do Nada", atk: 44, hp: 65, rarity: "COMMON", img: "⭕", desc: "Vazio." },
{ id: "kd056", name: "Cavaleiro do Tudo", atk: 42, hp: 68, rarity: "COMMON", img: "🌀", desc: "Todo." },
{ id: "kd057", name: "Cavaleiro do Infinito", atk: 50, hp: 48, rarity: "COMMON", img: "♾️", desc: "Eterno." },
{ id: "kd058", name: "Cavaleiro do Zero", atk: 20, hp: 115, rarity: "COMMON", img: "0️⃣", desc: "Origem." },
{ id: "kd059", name: "Cavaleiro do Um", atk: 55, hp: 32, rarity: "COMMON", img: "1️⃣", desc: "Unidade." },
{ id: "kd060", name: "Cavaleiro do Todo", atk: 48, hp: 55, rarity: "COMMON", img: "♾️", desc: "Soma." },

// ── LUMINOUS (lm001 – lm050) ──────────────────────────────
{ id: "lm001", name: "Fonte de Luz", atk: 30, hp: 90, rarity: "COMMON", img: "💡", desc: "Ilumina a escuridão." },
{ id: "lm002", name: "Raio de Sol", atk: 45, hp: 55, rarity: "COMMON", img: "☀️", desc: "Queima como fogo." },
{ id: "lm003", name: "Luz Lunar", atk: 38, hp: 75, rarity: "COMMON", img: "🌙", desc: "Suave e fria." },
{ id: "lm004", name: "Brilho Estelar", atk: 42, hp: 65, rarity: "COMMON", img: "⭐", desc: "Cintilante." },
{ id: "lm005", name: "Cintilação", atk: 28, hp: 100, rarity: "COMMON", img: "✨", desc: "Pequenos clarões." },
{ id: "lm006", name: "Clarão da Aurora", atk: 50, hp: 40, rarity: "COMMON", img: "🌅", desc: "Desperta." },
{ id: "lm007", name: "Luz do Crepúsculo", atk: 40, hp: 70, rarity: "COMMON", img: "🌆", desc: "Fim do dia." },
{ id: "lm008", name: "Faroeste", atk: 35, hp: 82, rarity: "COMMON", img: "🌟", desc: "Guia viajantes." },
{ id: "lm009", name: "Lâmpada Mágica", atk: 25, hp: 105, rarity: "COMMON", img: "🪔", desc: "Concede desejos." },
{ id: "lm010", name: "Tocha Eterna", atk: 48, hp: 50, rarity: "COMMON", img: "🔥", desc: "Nunca apaga." },
{ id: "lm011", name: "Vela Sagrada", atk: 22, hp: 115, rarity: "COMMON", img: "🕯️", desc: "Oração." },
{ id: "lm012", name: "Fogos de Artifício", atk: 55, hp: 30, rarity: "COMMON", img: "🎆", desc: "Explosão colorida." },
{ id: "lm013", name: "Luz do Paraíso", atk: 40, hp: 72, rarity: "COMMON", img: "🌈", desc: "Arco-íris." },
{ id: "lm014", name: "Relâmpago Branco", atk: 52, hp: 35, rarity: "COMMON", img: "⚡", desc: "Choque luminoso." },
{ id: "lm015", name: "Fulgor Divino", atk: 46, hp: 58, rarity: "COMMON", img: "✨", desc: "Toque celestial." },
{ id: "lm016", name: "Brilho do Cristal", atk: 38, hp: 80, rarity: "COMMON", img: "💎", desc: "Reflete." },
{ id: "lm017", name: "Luz do Oceano", atk: 35, hp: 88, rarity: "COMMON", img: "🌊", desc: "Brilho marinho." },
{ id: "lm018", name: "Clarão do Trovão", atk: 50, hp: 42, rarity: "COMMON", img: "⚡", desc: "Luz e som." },
{ id: "lm019", name: "Chama Azul", atk: 44, hp: 60, rarity: "COMMON", img: "🔥", desc: "Fogo frio." },
{ id: "lm020", name: "Luz do Abismo", atk: 30, hp: 95, rarity: "COMMON", img: "🌀", desc: "Brilho escuro." },
{ id: "lm021", name: "Estrela Cadente", atk: 55, hp: 28, rarity: "COMMON", img: "🌠", desc: "Desejo." },
{ id: "lm022", name: "Luz da Esperança", atk: 20, hp: 120, rarity: "COMMON", img: "🌈", desc: "Sempre ali." },
{ id: "lm023", name: "Clarão do Despertar", atk: 42, hp: 68, rarity: "COMMON", img: "☀️", desc: "Novo dia." },
{ id: "lm024", name: "Luz do Sonho", atk: 35, hp: 85, rarity: "COMMON", img: "💤", desc: "Onírica." },
{ id: "lm025", name: "Brilho do Conhecimento", atk: 28, hp: 100, rarity: "COMMON", img: "📚", desc: "Sabedoria." },
{ id: "lm026", name: "Luz da Verdade", atk: 40, hp: 72, rarity: "COMMON", img: "⚖️", desc: "Revela." },
{ id: "lm027", name: "Clarão da Justiça", atk: 46, hp: 58, rarity: "COMMON", img: "⚖️", desc: "Equilíbrio." },
{ id: "lm028", name: "Luz da Liberdade", atk: 38, hp: 78, rarity: "COMMON", img: "🕊️", desc: "Livra." },
{ id: "lm029", name: "Brilho da Paz", atk: 22, hp: 112, rarity: "COMMON", img: "🕊️", desc: "Acalma." },
{ id: "lm030", name: "Luz do Amor", atk: 30, hp: 95, rarity: "COMMON", img: "❤️", desc: "Une." },
{ id: "lm031", name: "Clarão da Fúria", atk: 55, hp: 30, rarity: "COMMON", img: "😡", desc: "Ira." },
{ id: "lm032", name: "Luz da Coragem", atk: 44, hp: 65, rarity: "COMMON", img: "🦁", desc: "Encoraja." },
{ id: "lm033", name: "Brilho do Sacrifício", atk: 35, hp: 85, rarity: "COMMON", img: "🔥", desc: "Doação." },
{ id: "lm034", name: "Luz do Renascimento", atk: 38, hp: 80, rarity: "COMMON", img: "🔄", desc: "Recomeço." },
{ id: "lm035", name: "Clarão da Transcendência", atk: 48, hp: 50, rarity: "COMMON", img: "✨", desc: "Além." },
{ id: "lm036", name: "Luz da Destruição", atk: 58, hp: 25, rarity: "COMMON", img: "💥", desc: "Aniquila." },
{ id: "lm037", name: "Brilho da Criação", atk: 32, hp: 92, rarity: "COMMON", img: "🌱", desc: "Nascimento." },
{ id: "lm038", name: "Luz do Nada", atk: 42, hp: 68, rarity: "COMMON", img: "⭕", desc: "Vazio." },
{ id: "lm039", name: "Clarão do Todo", atk: 50, hp: 42, rarity: "COMMON", img: "🌀", desc: "Universal." },
{ id: "lm040", name: "Luz do Infinito", atk: 46, hp: 55, rarity: "COMMON", img: "♾️", desc: "Eterna." },
{ id: "lm041", name: "Brilho do Zero", atk: 20, hp: 115, rarity: "COMMON", img: "0️⃣", desc: "Origem." },
{ id: "lm042", name: "Luz do Um", atk: 52, hp: 38, rarity: "COMMON", img: "1️⃣", desc: "Início." },
{ id: "lm043", name: "Clarão do Multiverso", atk: 55, hp: 32, rarity: "COMMON", img: "🌐", desc: "Tudo." },
{ id: "lm044", name: "Luz do Caos", atk: 48, hp: 48, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "lm045", name: "Brilho da Ordem", atk: 36, hp: 85, rarity: "COMMON", img: "⚖️", desc: "Lei." },
{ id: "lm046", name: "Luz do Tempo", atk: 30, hp: 95, rarity: "COMMON", img: "⏳", desc: "Passado." },
{ id: "lm047", name: "Clarão do Espaço", atk: 42, hp: 68, rarity: "COMMON", img: "🌌", desc: "Distância." },
{ id: "lm048", name: "Luz da Gravidade", atk: 40, hp: 72, rarity: "COMMON", img: "⚫", desc: "Peso." },
{ id: "lm049", name: "Brilho do Éter", atk: 44, hp: 60, rarity: "COMMON", img: "✨", desc: "Sutil." },
{ id: "lm050", name: "Luz do Sonho", atk: 35, hp: 85, rarity: "COMMON", img: "💤", desc: "Onírico." },

// ── MYSTIC (mn001 – mn060) ──────────────────────────────────
{ id: "mn001", name: "Mago das Runas", atk: 40, hp: 70, rarity: "COMMON", img: "🪷", desc: "Desenha símbolos." },
{ id: "mn002", name: "Feiticeiro de Cristal", atk: 48, hp: 55, rarity: "COMMON", img: "💎", desc: "Estilhaços mágicos." },
{ id: "mn003", name: "Bruxa da Névoa", atk: 35, hp: 85, rarity: "COMMON", img: "🌫️", desc: "Neblina encantada." },
{ id: "mn004", name: "Xamã do Fogo", atk: 50, hp: 42, rarity: "COMMON", img: "🔥", desc: "Chamas ancestrais." },
{ id: "mn005", name: "Adepto do Gelo", atk: 38, hp: 78, rarity: "COMMON", img: "❄️", desc: "Congelamento." },
{ id: "mn006", name: "Invocador de Ventos", atk: 44, hp: 60, rarity: "COMMON", img: "💨", desc: "Rajadas." },
{ id: "mn007", name: "Necromante Iniciante", atk: 42, hp: 65, rarity: "COMMON", img: "💀", desc: "Mortos-vivos." },
{ id: "mn008", name: "Encantador de Serpentes", atk: 46, hp: 55, rarity: "COMMON", img: "🐍", desc: "Cobras dançam." },
{ id: "mn009", name: "Domador de Feras", atk: 50, hp: 48, rarity: "COMMON", img: "🐅", desc: "Animais lutam." },
{ id: "mn010", name: "Mestre das Ilusões", atk: 30, hp: 95, rarity: "COMMON", img: "🎭", desc: "Engana." },
{ id: "mn011", name: "Alquimista Novato", atk: 36, hp: 82, rarity: "COMMON", img: "⚗️", desc: "Poções." },
{ id: "mn012", name: "Herborista", atk: 28, hp: 100, rarity: "COMMON", img: "🌿", desc: "Ervas curativas." },
{ id: "mn013", name: "Astrólogo", atk: 35, hp: 88, rarity: "COMMON", img: "🔭", desc: "Lê estrelas." },
{ id: "mn014", name: "Cartomante", atk: 40, hp: 75, rarity: "COMMON", img: "🃏", desc: "Previsões." },
{ id: "mn015", name: "Místico da Lua", atk: 44, hp: 65, rarity: "COMMON", img: "🌙", desc: "Poder lunar." },
{ id: "mn016", name: "Sacerdote do Sol", atk: 48, hp: 52, rarity: "COMMON", img: "☀️", desc: "Luz solar." },
{ id: "mn017", name: "Druida da Floresta", atk: 38, hp: 80, rarity: "COMMON", img: "🌳", desc: "Natureza." },
{ id: "mn018", name: "Xamã da Terra", atk: 32, hp: 92, rarity: "COMMON", img: "🌍", desc: "Rochas." },
{ id: "mn019", name: "Bruxa do Pântano", atk: 42, hp: 70, rarity: "COMMON", img: "🐸", desc: "Poções." },
{ id: "mn020", name: "Feiticeira do Mar", atk: 40, hp: 75, rarity: "COMMON", img: "🌊", desc: "Ondas." },
{ id: "mn021", name: "Mago do Trovão", atk: 52, hp: 38, rarity: "COMMON", img: "⚡", desc: "Relâmpagos." },
{ id: "mn022", name: "Bruxa das Sombras", atk: 46, hp: 58, rarity: "COMMON", img: "🌑", desc: "Trevas." },
{ id: "mn023", name: "Místico do Caos", atk: 55, hp: 30, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "mn024", name: "Sacerdote da Ordem", atk: 38, hp: 85, rarity: "COMMON", img: "⚖️", desc: "Equilíbrio." },
{ id: "mn025", name: "Feiticeiro do Tempo", atk: 35, hp: 90, rarity: "COMMON", img: "⏳", desc: "Dobra o tempo." },
{ id: "mn026", name: "Mago do Espaço", atk: 44, hp: 68, rarity: "COMMON", img: "🌌", desc: "Teleporte." },
{ id: "mn027", name: "Bruxa da Gravidade", atk: 42, hp: 72, rarity: "COMMON", img: "⚫", desc: "Puxa." },
{ id: "mn028", name: "Xamã do Éter", atk: 48, hp: 55, rarity: "COMMON", img: "✨", desc: "Energia pura." },
{ id: "mn029", name: "Necromante do Gelo", atk: 40, hp: 78, rarity: "COMMON", img: "❄️", desc: "Mortos congelados." },
{ id: "mn030", name: "Invocador de Fogo", atk: 50, hp: 45, rarity: "COMMON", img: "🔥", desc: "Chamas." },
{ id: "mn031", name: "Adepto da Água", atk: 35, hp: 85, rarity: "COMMON", img: "🌊", desc: "Fluido." },
{ id: "mn032", name: "Domador de Ventos", atk: 42, hp: 70, rarity: "COMMON", img: "💨", desc: "Correntes." },
{ id: "mn033", name: "Encantador de Bestas", atk: 46, hp: 60, rarity: "COMMON", img: "🐻", desc: "Animais." },
{ id: "mn034", name: "Mestre das Sombras", atk: 48, hp: 52, rarity: "COMMON", img: "🖤", desc: "Furtivo." },
{ id: "mn035", name: "Bruxa da Lua", atk: 38, hp: 82, rarity: "COMMON", img: "🌙", desc: "Lunar." },
{ id: "mn036", name: "Sacerdote do Sol", atk: 44, hp: 65, rarity: "COMMON", img: "☀️", desc: "Solar." },
{ id: "mn037", name: "Mago das Estrelas", atk: 40, hp: 75, rarity: "COMMON", img: "⭐", desc: "Astral." },
{ id: "mn038", name: "Feiticeira do Cristal", atk: 48, hp: 55, rarity: "COMMON", img: "💎", desc: "Brilho." },
{ id: "mn039", name: "Xamã do Fogo", atk: 50, hp: 42, rarity: "COMMON", img: "🔥", desc: "Chamas." },
{ id: "mn040", name: "Bruxa do Vento", atk: 36, hp: 88, rarity: "COMMON", img: "💨", desc: "Rajadas." },
{ id: "mn041", name: "Mago da Terra", atk: 32, hp: 95, rarity: "COMMON", img: "🌍", desc: "Rochas." },
{ id: "mn042", name: "Feiticeiro do Mar", atk: 40, hp: 78, rarity: "COMMON", img: "🌊", desc: "Ondas." },
{ id: "mn043", name: "Necromante do Fogo", atk: 48, hp: 50, rarity: "COMMON", img: "🔥", desc: "Chamas." },
{ id: "mn044", name: "Invocador de Gelo", atk: 35, hp: 88, rarity: "COMMON", img: "❄️", desc: "Congela." },
{ id: "mn045", name: "Adepto do Trovão", atk: 52, hp: 38, rarity: "COMMON", img: "⚡", desc: "Choque." },
{ id: "mn046", name: "Domador de Sombras", atk: 42, hp: 70, rarity: "COMMON", img: "🌑", desc: "Escuridão." },
{ id: "mn047", name: "Encantador de Cristais", atk: 38, hp: 82, rarity: "COMMON", img: "💎", desc: "Brilho." },
{ id: "mn048", name: "Mestre das Runas", atk: 44, hp: 65, rarity: "COMMON", img: "🪷", desc: "Símbolos." },
{ id: "mn049", name: "Bruxa do Caos", atk: 55, hp: 30, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "mn050", name: "Sacerdote da Ordem", atk: 40, hp: 78, rarity: "COMMON", img: "⚖️", desc: "Lei." },
{ id: "mn051", name: "Mago do Tempo", atk: 35, hp: 90, rarity: "COMMON", img: "⏳", desc: "Dobra." },
{ id: "mn052", name: "Feiticeiro do Espaço", atk: 46, hp: 58, rarity: "COMMON", img: "🌌", desc: "Distância." },
{ id: "mn053", name: "Xamã da Gravidade", atk: 42, hp: 72, rarity: "COMMON", img: "⚫", desc: "Peso." },
{ id: "mn054", name: "Bruxa do Éter", atk: 48, hp: 55, rarity: "COMMON", img: "✨", desc: "Energia." },
{ id: "mn055", name: "Mago da Vida", atk: 28, hp: 105, rarity: "COMMON", img: "🌱", desc: "Cura." },
{ id: "mn056", name: "Feiticeiro da Morte", atk: 55, hp: 30, rarity: "COMMON", img: "💀", desc: "Ceifa." },
{ id: "mn057", name: "Necromante da Luz", atk: 40, hp: 75, rarity: "COMMON", img: "💡", desc: "Luz." },
{ id: "mn058", name: "Invocador de Trevas", atk: 50, hp: 42, rarity: "COMMON", img: "🌑", desc: "Escuridão." },
{ id: "mn059", name: "Adepto do Fogo", atk: 48, hp: 50, rarity: "COMMON", img: "🔥", desc: "Chamas." },
{ id: "mn060", name: "Domador de Gelo", atk: 35, hp: 88, rarity: "COMMON", img: "❄️", desc: "Congela." },

// ── NIGHTMARE (nd001 – nd050) ──────────────────────────────
{ id: "nd001", name: "Pesadelo Vivo", atk: 50, hp: 40, rarity: "COMMON", img: "😈", desc: "Sombra que ataca." },
{ id: "nd002", name: "Terror Noturno", atk: 45, hp: 55, rarity: "COMMON", img: "🌙", desc: "Aterroriza." },
{ id: "nd003", name: "Sombra do Medo", atk: 38, hp: 72, rarity: "COMMON", img: "😨", desc: "Paralisa." },
{ id: "nd004", name: "Espectro do Pânico", atk: 42, hp: 65, rarity: "COMMON", img: "😱", desc: "Gritos." },
{ id: "nd005", name: "Criatura da Escuridão", atk: 48, hp: 50, rarity: "COMMON", img: "🌑", desc: "Trevas." },
{ id: "nd006", name: "Alma Penada", atk: 30, hp: 90, rarity: "COMMON", img: "👻", desc: "Lamenta." },
{ id: "nd007", name: "Fantasma do Caos", atk: 55, hp: 28, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "nd008", name: "Aparição Sombria", atk: 40, hp: 75, rarity: "COMMON", img: "🌫️", desc: "Neblina." },
{ id: "nd009", name: "Espectro do Abismo", atk: 46, hp: 58, rarity: "COMMON", img: "🕳️", desc: "Vazio." },
{ id: "nd010", name: "Sombra do Vazio", atk: 52, hp: 35, rarity: "COMMON", img: "🌀", desc: "Engole." },
{ id: "nd011", name: "Pesadelo do Guerreiro", atk: 38, hp: 80, rarity: "COMMON", img: "⚔️", desc: "Luta em sonhos." },
{ id: "nd012", name: "Terror do Mago", atk: 44, hp: 65, rarity: "COMMON", img: "🔮", desc: "Magia distorcida." },
{ id: "nd013", name: "Sombra do Dragão", atk: 50, hp: 42, rarity: "COMMON", img: "🐉", desc: "Asas negras." },
{ id: "nd014", name: "Espectro da Lua", atk: 35, hp: 85, rarity: "COMMON", img: "🌙", desc: "Luz pálida." },
{ id: "nd015", name: "Aparição do Sol", atk: 30, hp: 95, rarity: "COMMON", img: "☀️", desc: "Brilho morto." },
{ id: "nd016", name: "Criatura da Noite", atk: 42, hp: 68, rarity: "COMMON", img: "🦇", desc: "Morcego." },
{ id: "nd017", name: "Lobo das Sombras", atk: 48, hp: 50, rarity: "COMMON", img: "🐺", desc: "Uivo." },
{ id: "nd018", name: "Raposa Negra", atk: 44, hp: 60, rarity: "COMMON", img: "🦊", desc: "Astuta." },
{ id: "nd019", name: "Pantera Noturna", atk: 52, hp: 38, rarity: "COMMON", img: "🐆", desc: "Furtiva." },
{ id: "nd020", name: "Corvo do Caos", atk: 40, hp: 75, rarity: "COMMON", img: "🐦", desc: "Presságio." },
{ id: "nd021", name: "Serpente do Medo", atk: 46, hp: 55, rarity: "COMMON", img: "🐍", desc: "Venenosa." },
{ id: "nd022", name: "Aranha do Pânico", atk: 44, hp: 60, rarity: "COMMON", img: "🕷️", desc: "Teias." },
{ id: "nd023", name: "Escorpião das Trevas", atk: 50, hp: 42, rarity: "COMMON", img: "🦂", desc: "Ferrão." },
{ id: "nd024", name: "Sapo Enfeitiçado", atk: 35, hp: 82, rarity: "COMMON", img: "🐸", desc: "Veneno." },
{ id: "nd025", name: "Morcego Vampiro", atk: 48, hp: 48, rarity: "COMMON", img: "🦇", desc: "Suga." },
{ id: "nd026", name: "Fantasma da Floresta", atk: 38, hp: 78, rarity: "COMMON", img: "🌲", desc: "Assombra." },
{ id: "nd027", name: "Espectro do Lago", atk: 40, hp: 72, rarity: "COMMON", img: "🏞️", desc: "Névoa." },
{ id: "nd028", name: "Aparição do Castelo", atk: 42, hp: 68, rarity: "COMMON", img: "🏰", desc: "Corredores." },
{ id: "nd029", name: "Sombra do Trono", atk: 36, hp: 85, rarity: "COMMON", img: "👑", desc: "Realeza." },
{ id: "nd030", name: "Criatura do Submundo", atk: 50, hp: 42, rarity: "COMMON", img: "💀", desc: "Morte." },
{ id: "nd031", name: "Pesadelo do Caos", atk: 55, hp: 30, rarity: "COMMON", img: "🌀", desc: "Instável." },
{ id: "nd032", name: "Terror da Ordem", atk: 40, hp: 78, rarity: "COMMON", img: "⚖️", desc: "Distorce." },
{ id: "nd033", name: "Sombra do Tempo", atk: 35, hp: 90, rarity: "COMMON", img: "⏳", desc: "Parado." },
{ id: "nd034", name: "Espectro do Espaço", atk: 44, hp: 65, rarity: "COMMON", img: "🌌", desc: "Curvatura." },
{ id: "nd035", name: "Aparição da Gravidade", atk: 42, hp: 72, rarity: "COMMON", img: "⚫", desc: "Puxa." },
{ id: "nd036", name: "Criatura do Éter", atk: 48, hp: 55, rarity: "COMMON", img: "✨", desc: "Energia." },
{ id: "nd037", name: "Pesadelo do Sonho", atk: 30, hp: 95, rarity: "COMMON", img: "💤", desc: "Onírico." },
{ id: "nd038", name: "Terror da Realidade", atk: 46, hp: 58, rarity: "COMMON", img: "🌍", desc: "Concreto." },
{ id: "nd039", name: "Sombra da Ilusão", atk: 38, hp: 80, rarity: "COMMON", img: "🎭", desc: "Engana." },
{ id: "nd040", name: "Espectro da Fé", atk: 28, hp: 100, rarity: "COMMON", img: "🙏", desc: "Inabalável." },
{ id: "nd041", name: "Aparição da Dúvida", atk: 42, hp: 70, rarity: "COMMON", img: "🤔", desc: "Incerto." },
{ id: "nd042", name: "Criatura da Certeza", atk: 40, hp: 75, rarity: "COMMON", img: "✔️", desc: "Decidido." },
{ id: "nd043", name: "Pesadelo do Medo", atk: 50, hp: 42, rarity: "COMMON", img: "😨", desc: "Paralisa." },
{ id: "nd044", name: "Terror da Coragem", atk: 44, hp: 65, rarity: "COMMON", img: "🦁", desc: "Enfrenta." },
{ id: "nd045", name: "Sombra do Amor", atk: 30, hp: 95, rarity: "COMMON", img: "❤️", desc: "Laço." },
{ id: "nd046", name: "Espectro do Ódio", atk: 55, hp: 28, rarity: "COMMON", img: "👿", desc: "Rancor." },
{ id: "nd047", name: "Aparição do Perdão", atk: 22, hp: 115, rarity: "COMMON", img: "🙏", desc: "Liberta." },
{ id: "nd048", name: "Criatura do Sacrifício", atk: 38, hp: 82, rarity: "COMMON", img: "🔥", desc: "Doação." },
{ id: "nd049", name: "Pesadelo do Renascimento", atk: 40, hp: 78, rarity: "COMMON", img: "🔄", desc: "Recomeça." },
{ id: "nd050", name: "Terror da Transcendência", atk: 48, hp: 52, rarity: "COMMON", img: "✨", desc: "Além." },

// ── OBSIDIAN (ob001 – ob050) ──────────────────────────────
{ id: "ob001", name: "Golem de Obsidiana", atk: 50, hp: 60, rarity: "COMMON", img: "🗿", desc: "Vidro vulcânico." },
{ id: "ob002", name: "Cavaleiro Negro", atk: 45, hp: 65, rarity: "COMMON", img: "🖤", desc: "Armadura escura." },
{ id: "ob003", name: "Lâmina de Obsidiana", atk: 55, hp: 35, rarity: "COMMON", img: "🗡️", desc: "Corta rocha." },
{ id: "ob004", name: "Escudo de Cristal", atk: 30, hp: 100, rarity: "COMMON", img: "🛡️", desc: "Reflete." },
{ id: "ob005", name: "Flecha de Vidro", atk: 48, hp: 42, rarity: "COMMON", img: "🏹", desc: "Precisa." },
{ id: "ob006", name: "Martelo de Pedra", atk: 52, hp: 40, rarity: "COMMON", img: "🔨", desc: "Pesado." },
{ id: "ob007", name: "Machado de Lava", atk: 50, hp: 45, rarity: "COMMON", img: "🪓", desc: "Fogo." },
{ id: "ob008", name: "Lança de Ferro", atk: 44, hp: 60, rarity: "COMMON", img: "⚔️", desc: "Perfurante." },
{ id: "ob009", name: "Adaga de Obsidiana", atk: 58, hp: 28, rarity: "COMMON", img: "🔪", desc: "Corte preciso." },
{ id: "ob010", name: "Cajado de Pedra", atk: 40, hp: 75, rarity: "COMMON", img: "🪄", desc: "Magia." },
{ id: "ob011", name: "Orbe de Magma", atk: 48, hp: 50, rarity: "COMMON", img: "🔮", desc: "Lava." },
{ id: "ob012", name: "Coroa de Vidro", atk: 35, hp: 85, rarity: "COMMON", img: "👑", desc: "Realeza." },
{ id: "ob013", name: "Manto de Pedra", atk: 30, hp: 95, rarity: "COMMON", img: "🧥", desc: "Defesa." },
{ id: "ob014", name: "Anel de Fogo", atk: 42, hp: 68, rarity: "COMMON", img: "💍", desc: "Chamas." },
{ id: "ob015", name: "Bracelete de Cristal", atk: 44, hp: 60, rarity: "COMMON", img: "📿", desc: "Brilho." },
{ id: "ob016", name: "Amuleto de Lava", atk: 46, hp: 55, rarity: "COMMON", img: "🧿", desc: "Proteção." },
{ id: "ob017", name: "Escultura de Obsidiana", atk: 38, hp: 78, rarity: "COMMON", img: "🗿", desc: "Arte." },
{ id: "ob018", name: "Fragmento de Vidro", atk: 50, hp: 42, rarity: "COMMON", img: "🪞", desc: "Cortante." },
{ id: "ob019", name: "Pó de Cristal", atk: 35, hp: 85, rarity: "COMMON", img: "✨", desc: "Ofuscante." },
{ id: "ob020", name: "Lágrima de Lava", atk: 40, hp: 75, rarity: "COMMON", img: "💧", desc: "Quente." },
{ id: "ob021", name: "Semente de Obsidiana", atk: 28, hp: 100, rarity: "COMMON", img: "🌱", desc: "Cresce." },
{ id: "ob022", name: "Raiz de Pedra", atk: 32, hp: 92, rarity: "COMMON", img: "🌿", desc: "Firme." },
{ id: "ob023", name: "Flor de Vidro", atk: 38, hp: 80, rarity: "COMMON", img: "🌸", desc: "Bela." },
{ id: "ob024", name: "Espinho de Lava", atk: 48, hp: 48, rarity: "COMMON", img: "🌵", desc: "Ferido." },
{ id: "ob025", name: "Tronco de Obsidiana", atk: 30, hp: 95, rarity: "COMMON", img: "🪵", desc: "Duro." },
{ id: "ob026", name: "Fruto de Cristal", atk: 42, hp: 68, rarity: "COMMON", img: "🍎", desc: "Poder." },
{ id: "ob027", name: "Núcleo de Magma", atk: 52, hp: 35, rarity: "COMMON", img: "🔮", desc: "Energia." },
{ id: "ob028", name: "Coração de Pedra", atk: 40, hp: 78, rarity: "COMMON", img: "❤️", desc: "Vida." },
{ id: "ob029", name: "Cérebro de Cristal", atk: 44, hp: 65, rarity: "COMMON", img: "🧠", desc: "Inteligência." },
{ id: "ob030", name: "Olho de Lava", atk: 50, hp: 42, rarity: "COMMON", img: "👁️", desc: "Visão." },
{ id: "ob031", name: "Asa de Obsidiana", atk: 46, hp: 55, rarity: "COMMON", img: "🦅", desc: "Voa." },
{ id: "ob032", name: "Dente de Vidro", atk: 55, hp: 30, rarity: "COMMON", img: "🦷", desc: "Mordida." },
{ id: "ob033", name: "Garra de Lava", atk: 48, hp: 48, rarity: "COMMON", img: "🐾", desc: "Arranha." },
{ id: "ob034", name: "Casco de Pedra", atk: 30, hp: 100, rarity: "COMMON", img: "🐢", desc: "Defesa." },
{ id: "ob035", name: "Couraça de Cristal", atk: 42, hp: 72, rarity: "COMMON", img: "🛡️", desc: "Protege." },
{ id: "ob036", name: "Espada de Magma", atk: 55, hp: 32, rarity: "COMMON", img: "⚔️", desc: "Queima." },
{ id: "ob037", name: "Maça de Obsidiana", atk: 50, hp: 40, rarity: "COMMON", img: "🪓", desc: "Esmaga." },
{ id: "ob038", name: "Arco de Vidro", atk: 46, hp: 55, rarity: "COMMON", img: "🏹", desc: "Flexível." },
{ id: "ob039", name: "Flecha de Lava", atk: 52, hp: 38, rarity: "COMMON", img: "🔥", desc: "Incendeia." },
{ id: "ob040", name: "Escudo de Magma", atk: 35, hp: 88, rarity: "COMMON", img: "🛡️", desc: "Reflete." },
{ id: "ob041", name: "Lança de Vidro", atk: 48, hp: 50, rarity: "COMMON", img: "⚔️", desc: "Perfura." },
{ id: "ob042", name: "Adaga de Lava", atk: 55, hp: 28, rarity: "COMMON", img: "🔪", desc: "Corta." },
{ id: "ob043", name: "Cajado de Obsidiana", atk: 42, hp: 68, rarity: "COMMON", img: "🪄", desc: "Magia." },
{ id: "ob044", name: "Orbe de Vidro", atk: 44, hp: 60, rarity: "COMMON", img: "🔮", desc: "Vê." },
{ id: "ob045", name: "Coroa de Lava", atk: 38, hp: 78, rarity: "COMMON", img: "👑", desc: "Rei." },
{ id: "ob046", name: "Manto de Magma", atk: 30, hp: 95, rarity: "COMMON", img: "🧥", desc: "Aquece." },
{ id: "ob047", name: "Anel de Obsidiana", atk: 40, hp: 75, rarity: "COMMON", img: "💍", desc: "Poder." },
{ id: "ob048", name: "Bracelete de Lava", atk: 46, hp: 55, rarity: "COMMON", img: "📿", desc: "Fogo." },
{ id: "ob049", name: "Amuleto de Vidro", atk: 35, hp: 85, rarity: "COMMON", img: "🧿", desc: "Sorte." },
{ id: "ob050", name: "Escultura de Lava", atk: 42, hp: 70, rarity: "COMMON", img: "🗿", desc: "Arte." },

// ── RIFT (rv001 – rv050) ──────────────────────────────────
{ id: "rv001", name: "Viajante Dimensional", atk: 40, hp: 70, rarity: "COMMON", img: "🧳", desc: "Salta entre mundos." },
{ id: "rv002", name: "Criatura da Fenda", atk: 48, hp: 55, rarity: "COMMON", img: "🕳️", desc: "Sai do vazio." },
{ id: "rv003", name: "Sombra do Portal", atk: 44, hp: 60, rarity: "COMMON", img: "🚪", desc: "Guarda a passagem." },
{ id: "rv004", name: "Espectro da Curvatura", atk: 50, hp: 42, rarity: "COMMON", img: "🌀", desc: "Dobra o espaço." },
{ id: "rv005", name: "Fragmento de Realidade", atk: 35, hp: 85, rarity: "COMMON", img: "🧩", desc: "Pedaço perdido." },
{ id: "rv006", name: "Eco do Multiverso", atk: 42, hp: 68, rarity: "COMMON", img: "📢", desc: "Repete." },
{ id: "rv007", name: "Viajante do Tempo", atk: 38, hp: 78, rarity: "COMMON", img: "⏳", desc: "Salta eras." },
{ id: "rv008", name: "Criatura do Abismo", atk: 52, hp: 35, rarity: "COMMON", img: "🐙", desc: "Profunda." },
{ id: "rv009", name: "Sombra da Fenda", atk: 46, hp: 55, rarity: "COMMON", img: "🌑", desc: "Escuridão." },
{ id: "rv010", name: "Espectro do Nexus", atk: 40, hp: 75, rarity: "COMMON", img: "🔗", desc: "Conexão." },
{ id: "rv011", name: "Fragmento de Dimensão", atk: 48, hp: 50, rarity: "COMMON", img: "🧊", desc: "Gelado." },
{ id: "rv012", name: "Eco do Caos", atk: 55, hp: 28, rarity: "COMMON", img: "🌀", desc: "Desordem." },
{ id: "rv013", name: "Viajante da Aurora", atk: 44, hp: 60, rarity: "COMMON", img: "🌅", desc: "Luz." },
{ id: "rv014", name: "Criatura do Crepúsculo", atk: 42, hp: 68, rarity: "COMMON", img: "🌆", desc: "Sombra." },
{ id: "rv015", name: "Sombra do Eclipse", atk: 50, hp: 42, rarity: "COMMON", img: "🌑", desc: "Escuridão." },
{ id: "rv016", name: "Espectro da Lua", atk: 38, hp: 78, rarity: "COMMON", img: "🌙", desc: "Lunar." },
{ id: "rv017", name: "Fragmento de Estrela", atk: 46, hp: 55, rarity: "COMMON", img: "⭐", desc: "Brilho." },
{ id: "rv018", name: "Eco do Sol", atk: 40, hp: 75, rarity: "COMMON", img: "☀️", desc: "Quente." },
{ id: "rv019", name: "Viajante do Vazio", atk: 52, hp: 35, rarity: "COMMON", img: "🕳️", desc: "Nada." },
{ id: "rv020", name: "Criatura do Éter", atk: 44, hp: 60, rarity: "COMMON", img: "✨", desc: "Energia." },
{ id: "rv021", name: "Sombra do Infinito", atk: 50, hp: 42, rarity: "COMMON", img: "♾️", desc: "Eterno." },
{ id: "rv022", name: "Espectro do Zero", atk: 35, hp: 85, rarity: "COMMON", img: "0️⃣", desc: "Origem." },
{ id: "rv023", name: "Fragmento do Um", atk: 42, hp: 68, rarity: "COMMON", img: "1️⃣", desc: "Início." },
{ id: "rv024", name: "Eco do Todo", atk: 48, hp: 50, rarity: "COMMON", img: "🌀", desc: "Soma." },
{ id: "rv025", name: "Viajante do Nada", atk: 40, hp: 75, rarity: "COMMON", img: "⭕", desc: "Vazio." },
{ id: "rv026", name: "Criatura do Caos", atk: 55, hp: 28, rarity: "COMMON", img: "🌀", desc: "Instável." },
{ id: "rv027", name: "Sombra da Ordem", atk: 38, hp: 82, rarity: "COMMON", img: "⚖️", desc: "Lei." },
{ id: "rv028", name: "Espectro da Justiça", atk: 44, hp: 65, rarity: "COMMON", img: "⚖️", desc: "Equilíbrio." },
{ id: "rv029", name: "Fragmento do Tempo", atk: 35, hp: 88, rarity: "COMMON", img: "⏳", desc: "Passado." },
{ id: "rv030", name: "Eco do Espaço", atk: 42, hp: 70, rarity: "COMMON", img: "🌌", desc: "Distância." },
{ id: "rv031", name: "Viajante da Gravidade", atk: 46, hp: 58, rarity: "COMMON", img: "⚫", desc: "Peso." },
{ id: "rv032", name: "Criatura da Ilusão", atk: 38, hp: 80, rarity: "COMMON", img: "🎭", desc: "Engana." },
{ id: "rv033", name: "Sombra da Realidade", atk: 48, hp: 52, rarity: "COMMON", img: "🌍", desc: "Concreta." },
{ id: "rv034", name: "Espectro do Sonho", atk: 30, hp: 95, rarity: "COMMON", img: "💤", desc: "Onírico." },
{ id: "rv035", name: "Fragmento do Pesadelo", atk: 50, hp: 42, rarity: "COMMON", img: "😱", desc: "Aterroriza." },
{ id: "rv036", name: "Eco do Medo", atk: 44, hp: 60, rarity: "COMMON", img: "😨", desc: "Paralisa." },
{ id: "rv037", name: "Viajante da Coragem", atk: 40, hp: 75, rarity: "COMMON", img: "🦁", desc: "Enfrenta." },
{ id: "rv038", name: "Criatura do Amor", atk: 30, hp: 95, rarity: "COMMON", img: "❤️", desc: "Une." },
{ id: "rv039", name: "Sombra do Ódio", atk: 55, hp: 28, rarity: "COMMON", img: "👿", desc: "Rancor." },
{ id: "rv040", name: "Espectro do Perdão", atk: 22, hp: 115, rarity: "COMMON", img: "🙏", desc: "Liberta." },
{ id: "rv041", name: "Fragmento do Sacrifício", atk: 38, hp: 82, rarity: "COMMON", img: "🔥", desc: "Doação." },
{ id: "rv042", name: "Eco do Renascimento", atk: 40, hp: 78, rarity: "COMMON", img: "🔄", desc: "Recomeça." },
{ id: "rv043", name: "Viajante da Transcendência", atk: 48, hp: 52, rarity: "COMMON", img: "✨", desc: "Além." },
{ id: "rv044", name: "Criatura da Destruição", atk: 58, hp: 25, rarity: "COMMON", img: "💥", desc: "Aniquila." },
{ id: "rv045", name: "Sombra da Criação", atk: 32, hp: 92, rarity: "COMMON", img: "🌱", desc: "Nascimento." },
{ id: "rv046", name: "Espectro da Vida", atk: 28, hp: 105, rarity: "COMMON", img: "🌱", desc: "Cura." },
{ id: "rv047", name: "Fragmento da Morte", atk: 55, hp: 30, rarity: "COMMON", img: "💀", desc: "Ceifa." },
{ id: "rv048", name: "Eco da Luz", atk: 40, hp: 75, rarity: "COMMON", img: "💡", desc: "Ilumina." },
{ id: "rv049", name: "Viajante das Trevas", atk: 50, hp: 42, rarity: "COMMON", img: "🌑", desc: "Escuridão." },
{ id: "rv050", name: "Criatura do Fogo", atk: 48, hp: 50, rarity: "COMMON", img: "🔥", desc: "Chamas." },

// ── SHADOW (sd001 – sd060) ──────────────────────────────────
{ id: "sd001", name: "Sombra Furtiva", atk: 42, hp: 60, rarity: "COMMON", img: "🖤", desc: "Ataque oculto." },
{ id: "sd002", name: "Assassino Noturno", atk: 50, hp: 45, rarity: "COMMON", img: "🗡️", desc: "Golpe certeiro." },
{ id: "sd003", name: "Ladrão de Sombras", atk: 48, hp: 50, rarity: "COMMON", img: "💰", desc: "Rouba e foge." },
{ id: "sd004", name: "Espião das Trevas", atk: 38, hp: 72, rarity: "COMMON", img: "👤", desc: "Observa." },
{ id: "sd005", name: "Mercenário Sombrio", atk: 44, hp: 60, rarity: "COMMON", img: "⚔️", desc: "Lealdade paga." },
{ id: "sd006", name: "Bandido da Noite", atk: 46, hp: 55, rarity: "COMMON", img: "🌙", desc: "Ataca sob a lua." },
{ id: "sd007", name: "Fantasma da Cidade", atk: 40, hp: 70, rarity: "COMMON", img: "🏙️", desc: "Desaparece." },
{ id: "sd008", name: "Sombra do Beco", atk: 35, hp: 80, rarity: "COMMON", img: "🚪", desc: "Emboscada." },
{ id: "sd009", name: "Lobo das Ruas", atk: 50, hp: 42, rarity: "COMMON", img: "🐺", desc: "Caça urbana." },
{ id: "sd010", name: "Corvo Sombrio", atk: 44, hp: 60, rarity: "COMMON", img: "🐦", desc: "Presságio." },
{ id: "sd011", name: "Serpente das Sombras", atk: 48, hp: 48, rarity: "COMMON", img: "🐍", desc: "Veneno." },
{ id: "sd012", name: "Aranha Noturna", atk: 46, hp: 55, rarity: "COMMON", img: "🕷️", desc: "Teias." },
{ id: "sd013", name: "Escorpião Sombrio", atk: 52, hp: 46, rarity: "COMMON", img: "🦂", desc: "Ferrão letal." },
{ id: "cm002", name: "Escudeiro de Bronze", atk: 10, hp: 110, rarity: "COMMON", img: "🛡️", desc: "Sua armadura brilha como o metal que a forjou." },
{ id: "cm003", name: "Arqueiro do Bosque", atk: 22, hp: 55, rarity: "COMMON", img: "🏹", desc: "Dispara entre as árvores sem fazer barulho." },
{ id: "cm004", name: "Mago das Cinzas", atk: 18, hp: 65, rarity: "COMMON", img: "🌫️", desc: "Manipula a fumaça que sobe das fogueiras." },
{ id: "cm005", name: "Cavaleiro de Palha", atk: 9, hp: 118, rarity: "COMMON", img: "🧑‍🌾", desc: "Parece frágil, mas já sobreviveu a três colheitas de guerra." },
{ id: "cm006", name: "Pescador Noturno", atk: 16, hp: 92, rarity: "COMMON", img: "🎣", desc: "Pesca sob a lua, onde os peixes têm dentes." },
{ id: "cm007", name: "Lenhador da Geada", atk: 20, hp: 70, rarity: "COMMON", img: "🪓", desc: "Corta árvores congeladas como se fossem vidro." },
{ id: "cm008", name: "Vigia do Farol", atk: 12, hp: 85, rarity: "COMMON", img: "🗼", desc: "Sua luz revela o que as sombras escondem." },
{ id: "cm009", name: "Mercador de Ventos", atk: 15, hp: 78, rarity: "COMMON", img: "🎐", desc: "Vende direções para quem se perdeu." },
{ id: "cm010", name: "Batedor da Tundra", atk: 19, hp: 60, rarity: "COMMON", img: "❄️", desc: "Seus passos não deixam marcas na neve." },
{ id: "cm011", name: "Cozinheiro de Guerra", atk: 11, hp: 95, rarity: "COMMON", img: "🥘", desc: "Tempera seus golpes com pimenta e fúria." },
{ id: "cm012", name: "Pastor de Nuvens", atk: 13, hp: 88, rarity: "COMMON", img: "☁️", desc: "Guia as nuvens como quem guia ovelhas." },
{ id: "cm013", name: "Ferro-Velho", atk: 17, hp: 80, rarity: "COMMON", img: "🔧", desc: "Transforma sucata em armas letais." },
{ id: "cm014", name: "Corredor do Deserto", atk: 24, hp: 45, rarity: "COMMON", img: "🏜️", desc: "Atravessa dunas em velocidade alucinante." },
{ id: "cm015", name: "Mestre de Cães", atk: 18, hp: 72, rarity: "COMMON", img: "🐕", desc: "Seus cães lutam como uma matilha unida." },
{ id: "cm016", name: "Lavadeira de Almas", atk: 8, hp: 100, rarity: "COMMON", img: "🫧", desc: "Lava as manchas dos espíritos partidos." },
{ id: "cm017", name: "Cigano Andarilho", atk: 14, hp: 76, rarity: "COMMON", img: "🎪", desc: "Carrega sorte e azar na mesma mochila." },
{ id: "cm018", name: "Mineiro de Cristais", atk: 16, hp: 85, rarity: "COMMON", img: "💎", desc: "Escava gemas que brilham como olhos de dragão." },
{ id: "cm019", name: "Dançarina das Chamas", atk: 23, hp: 42, rarity: "COMMON", img: "💃", desc: "Gira e deixa rastros de fogo no chão." },
{ id: "cm020", name: "Guarda da Cidadela", atk: 13, hp: 105, rarity: "COMMON", img: "🏰", desc: "Fiel ao seu posto mesmo sob chuva de flechas." },
{ id: "cm021", name: "Mendigo da Profecia", atk: 7, hp: 72, rarity: "COMMON", img: "🔮", desc: "Cada moeda que recebe lhe mostra um vislumbre do futuro." },
{ id: "cm022", name: "Escultor de Pedra", atk: 15, hp: 88, rarity: "COMMON", img: "🗿", desc: "Suas estátuas parecem ganhar vida ao entardecer." },
{ id: "cm023", name: "Cervejeiro Anão", atk: 19, hp: 78, rarity: "COMMON", img: "🍺", desc: "Briga melhor depois do terceiro copo." },
{ id: "cm024", name: "Correio da Meia-Noite", atk: 21, hp: 48, rarity: "COMMON", img: "🦇", desc: "Entrega cartas e golpes com a mesma pontualidade." },
{ id: "cm025", name: "Vendedor de Amuletos", atk: 10, hp: 68, rarity: "COMMON", img: "🧿", desc: "Cada amuleto tem um preço, cada preço uma história." },
{ id: "cm026", name: "Trapezista da Morte", atk: 25, hp: 38, rarity: "COMMON", img: "🎪", desc: "Equilibra-se entre a vida e o abismo." },
{ id: "cm027", name: "Cavaleiro de Bambu", atk: 12, hp: 98, rarity: "COMMON", img: "🎋", desc: "Leve como o bambu, mas resistente como aço." },
{ id: "cm028", name: "Mago das Sombras", atk: 22, hp: 40, rarity: "COMMON", img: "🌚", desc: "Dança com as trevas e as usa como escudo." },
{ id: "cm029", name: "Batedor da Savana", atk: 20, hp: 55, rarity: "COMMON", img: "🦒", desc: "Seu olhar alcança o horizonte e além." },
{ id: "cm030", name: "Mestre de Bestas", atk: 17, hp: 75, rarity: "COMMON", img: "🐻", desc: "Fala com os animais da floresta em sua língua nativa." },
{ id: "cm031", name: "Encantador de Serpentes", atk: 19, hp: 60, rarity: "COMMON", img: "🐍", desc: "As cobras dançam e picam a seu comando." },
{ id: "cm032", name: "Artesão de Máscaras", atk: 14, hp: 82, rarity: "COMMON", img: "🎭", desc: "Cada máscara conta uma mentira ou uma verdade." },
{ id: "cm033", name: "Lutador de Rua", atk: 26, hp: 44, rarity: "COMMON", img: "🥊", desc: "Aprendeu a lutar nas vielas, onde não há regras." },
{ id: "cm034", name: "Sapateiro Élfico", atk: 11, hp: 78, rarity: "COMMON", img: "👢", desc: "Seus sapatos são tão silenciosos quanto seus passos." },
{ id: "cm035", name: "Mercador de Gelo", atk: 15, hp: 80, rarity: "COMMON", img: "🧊", desc: "Vende frio e golpes gelados." },
{ id: "cm036", name: "Guarda Noturno", atk: 18, hp: 62, rarity: "COMMON", img: "🌃", desc: "Patrulha enquanto os outros sonham." },
{ id: "cm037", name: "Pescador de Estrelas", atk: 13, hp: 70, rarity: "COMMON", img: "⭐", desc: "Pesca estrelas cadentes e as guarda em frascos." },
{ id: "cm038", name: "Mago da Neve", atk: 20, hp: 50, rarity: "COMMON", img: "☃️", desc: "Cria bonecos de neve que ganham vida." },
{ id: "cm039", name: "Ferroviário Errante", atk: 16, hp: 85, rarity: "COMMON", img: "🚂", desc: "Conduz trens e socos com a mesma força." },
{ id: "cm040", name: "Bruxa da Lua Minguante", atk: 22, hp: 45, rarity: "COMMON", img: "🌘", desc: "Seus feitiços enfraquecem com a lua, mas nunca somem." },
{ id: "cm041", name: "Caçador de Cogumelos", atk: 12, hp: 90, rarity: "COMMON", img: "🍄", desc: "Conhece os venenos e os antídotos da floresta." },
{ id: "cm042", name: "Ourives dos Abismos", atk: 17, hp: 72, rarity: "COMMON", img: "💍", desc: "Forja joias com metal extraído do vazio." },
{ id: "cm043", name: "Navegante dos Céus", atk: 19, hp: 58, rarity: "COMMON", img: "☁️", desc: "Pilota balões e ataca das alturas." },
{ id: "cm044", name: "Cavaleiro de Espuma", atk: 10, hp: 115, rarity: "COMMON", img: "🌊", desc: "Feito de espuma, sua resistência é surpreendente." },
{ id: "cm045", name: "Mago da Terra", atk: 18, hp: 68, rarity: "COMMON", img: "🌍", desc: "Levanta pedras para se proteger e ferir." },
{ id: "cm046", name: "Ladrão de Jóias", atk: 24, hp: 40, rarity: "COMMON", img: "💎", desc: "Rouba tesouros e vidas com igual habilidade." },
{ id: "cm047", name: "Padeiro de Ferro", atk: 14, hp: 92, rarity: "COMMON", img: "🍞", desc: "Seu pão é duro, seus punhos ainda mais." },
{ id: "cm048", name: "Barqueiro do Submundo", atk: 19, hp: 62, rarity: "COMMON", img: "⛵", desc: "Transporta almas pelo rio dos esquecidos." },
{ id: "cm049", name: "Jardineiro de Rosas", atk: 16, hp: 75, rarity: "COMMON", img: "🌹", desc: "Cultiva rosas com espinhos venenosos." },
{ id: "cm050", name: "Mestre de Forja", atk: 23, hp: 48, rarity: "COMMON", img: "🔨", desc: "Martela o ferro e os inimigos com o mesmo vigor." },
{ id: "cm051", name: "Cavaleiro de Vidro", atk: 11, hp: 108, rarity: "COMMON", img: "🪞", desc: "Brilha como cristal, mas pode quebrar." },
{ id: "cm052", name: "Bardo da Taverna", atk: 9, hp: 70, rarity: "COMMON", img: "🎵", desc: "Suas canções inspiram e irritam na mesma medida." },
{ id: "cm053", name: "Mensageiro das Sombras", atk: 21, hp: 42, rarity: "COMMON", img: "🦇", desc: "Entrega notícias e golpes furtivos." },
{ id: "cm054", name: "Cavaleiro de Osso", atk: 15, hp: 88, rarity: "COMMON", img: "🦴", desc: "Feito de ossos, mas ainda luta com fervor." },
{ id: "cm055", name: "Alquimista Novato", atk: 18, hp: 55, rarity: "COMMON", img: "⚗️", desc: "Suas poções têm resultados... imprevisíveis." },
{ id: "cm056", name: "Pescador de Pérolas", atk: 13, hp: 82, rarity: "COMMON", img: "🐚", desc: "Mergulha fundo para encontrar tesouros ocultos." },
{ id: "cm057", name: "Batedor da Neve", atk: 17, hp: 65, rarity: "COMMON", img: "🌨️", desc: "Rastreia pegadas na neve como um lobo." },
{ id: "cm058", name: "Cavaleiro de Folhas", atk: 12, hp: 95, rarity: "COMMON", img: "🍃", desc: "Leve como uma folha ao vento." },
{ id: "cm059", name: "Mago do Vento", atk: 22, hp: 42, rarity: "COMMON", img: "💨", desc: "Controla correntes de ar com um sopro." },
{ id: "cm060", name: "Ferreiro Errante", atk: 16, hp: 78, rarity: "COMMON", img: "⚒️", desc: "Forja armas onde quer que vá." },
{ id: "cm061", name: "Caçador de Relíquias", atk: 20, hp: 55, rarity: "COMMON", img: "🏺", desc: "Caça artefatos antigos e os usa como armas." },
{ id: "cm062", name: "Cavaleiro de Palha", atk: 8, hp: 120, rarity: "COMMON", img: "🧙", desc: "Parece frágil, mas é surpreendentemente durável." },
{ id: "cm063", name: "Aprendiz de Mago", atk: 19, hp: 50, rarity: "COMMON", img: "🔮", desc: "Ainda aprende a controlar o poder arcano." },
{ id: "cm064", name: "Mercenário Anão", atk: 21, hp: 65, rarity: "COMMON", img: "💰", desc: "Luta por ouro, mas sua lealdade é difícil de comprar." },
{ id: "cm065", name: "Guardião da Ponte", atk: 14, hp: 98, rarity: "COMMON", img: "🌉", desc: "Ninguém passa sem sua permissão." },
{ id: "cm066", name: "Pescador de Sonhos", atk: 11, hp: 78, rarity: "COMMON", img: "💤", desc: "Rouba sonhos para se fortalecer." },
{ id: "cm067", name: "Cavaleiro de Cera", atk: 13, hp: 102, rarity: "COMMON", img: "🕯️", desc: "Derrete, mas luta até o fim." },
{ id: "cm068", name: "Batedor do Pântano", atk: 18, hp: 70, rarity: "COMMON", img: "🐊", desc: "Conhece os perigos do pântano como ninguém." },
{ id: "cm069", name: "Mago da Poeira", atk: 22, hp: 45, rarity: "COMMON", img: "💨", desc: "Usa poeira para cegar inimigos." },
{ id: "cm070", name: "Cavaleiro de Madeira", atk: 15, hp: 92, rarity: "COMMON", img: "🪵", desc: "Duro como madeira de lei." },
{ id: "cm071", name: "Lutador de Taverna", atk: 25, hp: 40, rarity: "COMMON", img: "🍻", desc: "Nunca perde uma briga de bar." },
{ id: "cm072", name: "Mestre de Cães", atk: 16, hp: 72, rarity: "COMMON", img: "🐕", desc: "Seus cães lutam ao seu lado como irmãos." },
{ id: "cm073", name: "Arqueiro Élfico", atk: 21, hp: 52, rarity: "COMMON", img: "🧝", desc: "Precisão élfica em cada flecha." },
{ id: "cm074", name: "Cavaleiro de Cobre", atk: 14, hp: 88, rarity: "COMMON", img: "🔶", desc: "Barato, mas resistente." },
{ id: "cm075", name: "Jardineiro de Espinhos", atk: 19, hp: 60, rarity: "COMMON", img: "🌵", desc: "Planta espinhos no campo de batalha." },
{ id: "cm076", name: "Mestre de Bonecos", atk: 13, hp: 74, rarity: "COMMON", img: "🎎", desc: "Controla bonecos como marionetes de guerra." },
{ id: "cm077", name: "Cavaleiro de Cortiça", atk: 10, hp: 112, rarity: "COMMON", img: "🪵", desc: "Leve e flutuante, difícil de acertar." },
{ id: "cm078", name: "Batedor do Vulcão", atk: 20, hp: 55, rarity: "COMMON", img: "🌋", desc: "Sobrevive ao calor extremo." },
{ id: "cm079", name: "Mago do Gelo", atk: 23, hp: 44, rarity: "COMMON", img: "🧊", desc: "Congela o ar ao redor." },
{ id: "cm080", name: "Cavaleiro de Lã", atk: 11, hp: 108, rarity: "COMMON", img: "🐑", desc: "Macio, mas surpreendentemente durável." },
{ id: "cm081", name: "Pescador de Tesouros", atk: 17, hp: 68, rarity: "COMMON", img: "💎", desc: "Pesca joias do fundo do mar." },
{ id: "cm082", name: "Mestre de Corvos", atk: 19, hp: 54, rarity: "COMMON", img: "🐦", desc: "Seus corvos atacam em bando." },
{ id: "cm083", name: "Cavaleiro de Bambu", atk: 14, hp: 92, rarity: "COMMON", img: "🎋", desc: "Flexível e resistente." },
{ id: "cm084", name: "Batedor do Céu", atk: 22, hp: 48, rarity: "COMMON", img: "🪁", desc: "Observa tudo das alturas." },
{ id: "cm085", name: "Mago da Lava", atk: 24, hp: 40, rarity: "COMMON", img: "🌋", desc: "Conjura pequenas bolhas de lava." },
{ id: "cm086", name: "Cavaleiro de Barro", atk: 13, hp: 100, rarity: "COMMON", img: "🧱", desc: "Feito de barro, mas resistente." },
{ id: "cm087", name: "Pescador de Estrelas", atk: 16, hp: 62, rarity: "COMMON", img: "⭐", desc: "Pesca estrelas cadentes." },
{ id: "cm088", name: "Mestre de Insetos", atk: 15, hp: 78, rarity: "COMMON", img: "🐞", desc: "Comanda enxames de insetos." },
{ id: "cm089", name: "Cavaleiro de Espuma", atk: 11, hp: 105, rarity: "COMMON", img: "🌊", desc: "Surfa na espuma e no combate." },
{ id: "cm090", name: "Batedor da Montanha", atk: 18, hp: 58, rarity: "COMMON", img: "⛰️", desc: "Escala montanhas para atacar." },
{ id: "cm091", name: "Mago da Areia", atk: 21, hp: 46, rarity: "COMMON", img: "🏜️", desc: "Conjura tempestades de areia." },
{ id: "cm092", name: "Cavaleiro de Gelatina", atk: 9, hp: 118, rarity: "COMMON", img: "🍮", desc: "Parece frágil, mas absorve golpes." },
{ id: "cm093", name: "Pescador de Neblina", atk: 16, hp: 72, rarity: "COMMON", img: "🌫️", desc: "Pesca na névoa e ataca sem ser visto." },
{ id: "cm094", name: "Mestre de Gatos", atk: 20, hp: 52, rarity: "COMMON", img: "🐱", desc: "Seus gatos atacam com garras afiadas." },
{ id: "cm095", name: "Cavaleiro de Papel", atk: 14, hp: 86, rarity: "COMMON", img: "📄", desc: "Frágil, mas corta como papel." },
{ id: "cm096", name: "Lapidador de Cristais", atk: 13, hp: 78, rarity: "COMMON", img: "💎", desc: "Polia gemas com mãos firmes." },
{ id: "cm097", name: "Corredor das Dunas", atk: 22, hp: 48, rarity: "COMMON", img: "🏜️", desc: "Atravessa desertos em velocidade assustadora." },
{ id: "cm098", name: "Guarda da Cidadela", atk: 14, hp: 95, rarity: "COMMON", img: "🏰", desc: "Fiel ao seu posto sob qualquer tempestade." },
{ id: "cm099", name: "Ceifeiro de Colheitas", atk: 18, hp: 60, rarity: "COMMON", img: "🌾", desc: "Sua foice ceifa o trigo e a vida dos inimigos." },
{ id: "cm100", name: "Escavador de Túneis", atk: 11, hp: 90, rarity: "COMMON", img: "⛏️", desc: "Abre passagem por montanhas e exércitos." },
{ id: "cm101", name: "Arqueiro do Bosque", atk: 20, hp: 50, rarity: "COMMON", img: "🌳", desc: "Atira das copas sem ser visto." },
{ id: "cm102", name: "Pescador de Lendas", atk: 12, hp: 84, rarity: "COMMON", img: "🎣", desc: "Puxa histórias e peixes em igual medida." },
{ id: "cm103", name: "Ferroviário Anão", atk: 17, hp: 72, rarity: "COMMON", img: "🚂", desc: "Conduz trens e martela inimigos." },
{ id: "cm104", name: "Batedor Noturno", atk: 22, hp: 44, rarity: "COMMON", img: "🌙", desc: "Age sob o manto da noite." },
{ id: "cm105", name: "Mercador de Ventos", atk: 10, hp: 84, rarity: "COMMON", img: "🎐", desc: "Negocia com o vento e ganha vantagem." },
{ id: "cm106", name: "Tropeiro Valente", atk: 15, hp: 90, rarity: "COMMON", img: "🐴", desc: "Conduz mulas e socos pesados." },
{ id: "cm107", name: "Lenhadora da Aurora", atk: 16, hp: 68, rarity: "COMMON", img: "🪓", desc: "Corta madeira e adversários com o mesmo machado." },
{ id: "cm108", name: "Mestre das Armadilhas", atk: 21, hp: 48, rarity: "COMMON", img: "🔧", desc: "Monta engenhocas que prendem o inimigo." },
{ id: "cm109", name: "Dançarina das Chamas", atk: 23, hp: 40, rarity: "COMMON", img: "💃", desc: "Seus giros espalham fagulhas." },
{ id: "cm110", name: "Cozinheiro da Taverna", atk: 9, hp: 98, rarity: "COMMON", img: "🍲", desc: "Luta com panelas e tempero mortal." },
{ id: "cm111", name: "Mensageiro Élfico", atk: 18, hp: 56, rarity: "COMMON", img: "🧝", desc: "Leva notícias e flechas na mesma velocidade." },
{ id: "cm112", name: "Ourives das Sombras", atk: 14, hp: 72, rarity: "COMMON", img: "💍", desc: "Forja anéis que escurecem o dia." },
{ id: "cm113", name: "Trincheiro dos Pântanos", atk: 16, hp: 84, rarity: "COMMON", img: "🐊", desc: "Cava trincheiras e armadilhas no lodo." },
{ id: "cm114", name: "Vigia do Céu", atk: 20, hp: 46, rarity: "COMMON", img: "🔭", desc: "Observa estrelas e antevê ataques." },
{ id: "cm115", name: "Cavaleiro de Junco", atk: 11, hp: 102, rarity: "COMMON", img: "🌿", desc: "Leve e flexível, difícil de derrubar." },
{ id: "cm116", name: "Golem de Argila", atk: 13, hp: 110, rarity: "COMMON", img: "🧱", desc: "Lento, mas resistente como barro cozido." },
{ id: "cm117", name: "Esqueleto Legionário", atk: 17, hp: 66, rarity: "COMMON", img: "💀", desc: "Parte de um exército que nunca se rende." },
{ id: "cm118", name: "Bruxa da Colina", atk: 22, hp: 42, rarity: "COMMON", img: "🧹", desc: "Prepara poções e maldições simples." },
{ id: "cm119", name: "Milicano das Ruas", atk: 15, hp: 78, rarity: "COMMON", img: "🗡️", desc: "Defende seu bairro com facas e coragem." },
{ id: "cm120", name: "Bardo da Fronteira", atk: 12, hp: 66, rarity: "COMMON", img: "🎵", desc: "Canta canções que inspiram ou aterrorizam." },
{ id: "cm121", name: "Lutador de Arena", atk: 24, hp: 44, rarity: "COMMON", img: "🥊", desc: "Vive e morre por aplausos." },
{ id: "cm122", name: "Caçador de Cogumelos", atk: 13, hp: 72, rarity: "COMMON", img: "🍄", desc: "Conhece venenos e antídotos da floresta." },
{ id: "cm123", name: "Pastor de Nuvens", atk: 10, hp: 82, rarity: "COMMON", img: "☁️", desc: "Guia as nuvens e as usa como escudo." },
{ id: "cm124", name: "Mago do Crepúsculo", atk: 19, hp: 54, rarity: "COMMON", img: "🌆", desc: "Canaliza a energia do fim do dia." },
{ id: "cm125", name: "Cavaleiro de Palha", atk: 8, hp: 114, rarity: "COMMON", img: "🧑‍🌾", desc: "Frágil à vista, resistente na prática." },
{ id: "cm126", name: "Aprendiz de Alquimista", atk: 18, hp: 58, rarity: "COMMON", img: "⚗️", desc: "Suas misturas explodem com frequência." },
{ id: "cm127", name: "Carteiro Noturno", atk: 21, hp: 48, rarity: "COMMON", img: "📨", desc: "Entregava cartas, agora entrega golpes." },
{ id: "cm128", name: "Vendedor de Amuletos", atk: 11, hp: 76, rarity: "COMMON", img: "🔮", desc: "Vende proteções e também as usa." },
{ id: "cm129", name: "Navegante de Estrelas", atk: 17, hp: 62, rarity: "COMMON", img: "🧭", desc: "Lê mapas celestes para se orientar." },
{ id: "cm130", name: "Lençol de Fumaça", atk: 14, hp: 88, rarity: "COMMON", img: "💨", desc: "Desvia com cortinas de fumaça." },
{ id: "cm131", name: "Goleiro Goblin", atk: 16, hp: 70, rarity: "COMMON", img: "🥅", desc: "Bloqueia ataques com reflexos rápidos." },
{ id: "cm132", name: "Cavaleira de Couro", atk: 15, hp: 86, rarity: "COMMON", img: "🐎", desc: "Leve e ágil, sempre pronta para carga." },
{ id: "cm133", name: "Mestre de Mastins", atk: 20, hp: 52, rarity: "COMMON", img: "🐕", desc: "Seus cães atacam em matilha." },
{ id: "cm134", name: "Artífice de Relíquias", atk: 12, hp: 78, rarity: "COMMON", img: "🏺", desc: "Conserta artefatos e quebra adversários." },
{ id: "cm135", name: "Dançarino do Fogo", atk: 22, hp: 42, rarity: "COMMON", img: "🔥", desc: "Gira e lança labaredas." },
{ id: "cm136", name: "Tropeço Noturno", atk: 19, hp: 56, rarity: "COMMON", img: "🦇", desc: "Move-se em silêncio, golpeia nas costas." },
{ id: "cm137", name: "Jardineiro de Espinhos", atk: 13, hp: 82, rarity: "COMMON", img: "🌵", desc: "Planta espinhos e os usa como lanças." },
{ id: "cm138", name: "Pesadelo Pequeno", atk: 25, hp: 38, rarity: "COMMON", img: "😈", desc: "Pequeno mas assustador." },
{ id: "cm139", name: "Mago da Poeira", atk: 21, hp: 46, rarity: "COMMON", img: "🌫️", desc: "Cega com nuvens de poeira." },
{ id: "cm140", name: "Monge das Rochas", atk: 14, hp: 92, rarity: "COMMON", img: "🪨", desc: "Treina golpes que quebram pedras." },
{ id: "cm141", name: "Esfinge Menor", atk: 18, hp: 60, rarity: "COMMON", img: "🦁", desc: "Decifra enigmas e ataca sem aviso." },
{ id: "cm142", name: "Grifo Filhote", atk: 22, hp: 50, rarity: "COMMON", img: "🦅", desc: "Ainda aprende a voar, mas já arranha." },
{ id: "cm143", name: "Lobo das Neves", atk: 20, hp: 55, rarity: "COMMON", img: "🐺", desc: "Caça em bando nas montanhas geladas." },
{ id: "cm144", name: "Pantera da Sombra", atk: 24, hp: 48, rarity: "COMMON", img: "🐆", desc: "Surge da escuridão e desaparece." },
{ id: "cm145", name: "Urso Marrom", atk: 26, hp: 68, rarity: "COMMON", img: "🐻", desc: "Força bruta, pele grossa e mordida forte." },
{ id: "cm146", name: "Lampião da Estepe", atk: 14, hp: 82, rarity: "COMMON", img: "🏮", desc: "Ilumina a noite com sua chama dançante." },
{ id: "cm147", name: "Pescador de Nuvens", atk: 17, hp: 68, rarity: "COMMON", img: "☁️", desc: "Pesca gotas de chuva no céu." },
{ id: "cm148", name: "Menestrel Cigano", atk: 12, hp: 70, rarity: "COMMON", img: "🎻", desc: "Suas canções contam histórias de heróis." },
{ id: "cm149", name: "Mascate do Mercado", atk: 9, hp: 86, rarity: "COMMON", img: "🧺", desc: "Vende quinquilharias e briga por elas." },
{ id: "cm150", name: "Lavadeira Feroz", atk: 13, hp: 94, rarity: "COMMON", img: "🧺", desc: "Bate a roupa e os inimigos com a mesma força." },
{ id: "cm151", name: "Pescador de Almas", atk: 20, hp: 52, rarity: "COMMON", img: "🎣", desc: "Pesca algo mais que peixes." },
{ id: "cm152", name: "Batedor da Floresta", atk: 19, hp: 58, rarity: "COMMON", img: "🌲", desc: "Conhece cada trilha da mata." },
{ id: "cm153", name: "Curandeira Nômade", atk: 10, hp: 98, rarity: "COMMON", img: "🌿", desc: "Cura com ervas e golpes suaves." },
{ id: "cm154", name: "Ferro-Velho", atk: 14, hp: 88, rarity: "COMMON", img: "🔧", desc: "Transforma sucata em armas." },
{ id: "cm155", name: "Cavaleiro de Lata", atk: 12, hp: 105, rarity: "COMMON", img: "🛡️", desc: "Frágil por fora, resistente por dentro." },
{ id: "cm156", name: "Cigana Sortuda", atk: 16, hp: 65, rarity: "COMMON", img: "🔮", desc: "Sorte nas cartas, azar para os inimigos." },
{ id: "cm157", name: "Dançarina da Chuva", atk: 18, hp: 55, rarity: "COMMON", img: "🌧️", desc: "A dança traz tempestades." },
{ id: "cm158", name: "Lenhador Noturno", atk: 23, hp: 45, rarity: "COMMON", img: "🌙", desc: "Trabalha melhor no escuro." },
{ id: "cm159", name: "Mendigo Sabido", atk: 7, hp: 72, rarity: "COMMON", img: "🪙", desc: "Sabe mais do que aparenta." },
{ id: "cm160", name: "Cervejeiro Anão", atk: 17, hp: 78, rarity: "COMMON", img: "🍺", desc: "Luta melhor depois de um barril." },
{ id: "cm161", name: "Vendedor de Poções", atk: 11, hp: 62, rarity: "COMMON", img: "🧪", desc: "Suas poções curam e machucam." },
{ id: "cm162", name: "Trapezista", atk: 22, hp: 40, rarity: "COMMON", img: "🎪", desc: "Equilibra-se entre a vida e a morte." },
{ id: "cm163", name: "Cozinheiro de Batalha", atk: 14, hp: 82, rarity: "COMMON", img: "🥘", desc: "Tempera seus golpes com fogo." },
{ id: "cm164", name: "Mago das Sombras", atk: 24, hp: 38, rarity: "COMMON", img: "🌚", desc: "Controla a escuridão com seus dedos." },
{ id: "cm165", name: "Batedor da Tundra", atk: 16, hp: 70, rarity: "COMMON", img: "❄️", desc: "Sobrevive ao gelo mais intenso." },
{ id: "cm166", name: "Mestre de Bestas", atk: 19, hp: 60, rarity: "COMMON", img: "🐻", desc: "Fala com os animais da floresta." },
{ id: "cm167", name: "Encantador de Cobras", atk: 21, hp: 50, rarity: "COMMON", img: "🐍", desc: "As serpentes obedecem seu chamado." },
{ id: "cm168", name: "Cavaleiro de Bambu", atk: 13, hp: 95, rarity: "COMMON", img: "🎋", desc: "Leve e resistente como o bambu." },
{ id: "cm169", name: "Artesão de Máscaras", atk: 15, hp: 72, rarity: "COMMON", img: "🎭", desc: "Suas máscaras enganam a todos." },
{ id: "cm170", name: "Batedor do Deserto", atk: 18, hp: 58, rarity: "COMMON", img: "🐫", desc: "Atravessa dunas como se fossem ruas." },
{ id: "cm171", name: "Lutador de Rua", atk: 25, hp: 45, rarity: "COMMON", img: "🥊", desc: "Aprendeu a lutar nas vielas." },
{ id: "cm172", name: "Sapateiro Élfico", atk: 12, hp: 80, rarity: "COMMON", img: "👢", desc: "Seus sapatos dão passos silenciosos." },
{ id: "cm173", name: "Mercador de Gelo", atk: 14, hp: 75, rarity: "COMMON", img: "🧊", desc: "Vende frio e golpes gelados." },
{ id: "cm174", name: "Guarda Noturno", atk: 20, hp: 52, rarity: "COMMON", img: "🌃", desc: "Patrulha quando todos dormem." },
{ id: "cm175", name: "Pescador de Estrelas", atk: 16, hp: 65, rarity: "COMMON", img: "⭐", desc: "Pesca estrelas caídas." },
{ id: "cm176", name: "Mago da Neve", atk: 19, hp: 55, rarity: "COMMON", img: "☃️", desc: "Cria bolas de neve e confusão." },
{ id: "cm177", name: "Ferroviário", atk: 17, hp: 70, rarity: "COMMON", img: "🚂", desc: "Conduz trens e socos pesados." },
{ id: "cm178", name: "Bruxa da Lua", atk: 22, hp: 42, rarity: "COMMON", img: "🌕", desc: "Canaliza o poder da lua cheia." },
{ id: "cm179", name: "Caçador de Cogumelos", atk: 13, hp: 88, rarity: "COMMON", img: "🍄", desc: "Conhece os venenos da floresta." },
{ id: "cm180", name: "Ourives Anão", atk: 15, hp: 78, rarity: "COMMON", img: "💍", desc: "Forja anéis e golpes certeiros." },
{ id: "cm181", name: "Navegante do Céu", atk: 18, hp: 60, rarity: "COMMON", img: "☁️", desc: "Voa em balões e ataca das alturas." },
{ id: "cm182", name: "Cavaleiro de Espuma", atk: 11, hp: 110, rarity: "COMMON", img: "🌊", desc: "Feito de espuma, mas cheio de fúria." },
{ id: "cm183", name: "Mago da Terra", atk: 20, hp: 50, rarity: "COMMON", img: "🌍", desc: "Levanta pedras para se proteger." },
{ id: "cm184", name: "Ladrão de Jóias", atk: 24, hp: 38, rarity: "COMMON", img: "💎", desc: "Rouba tesouros e golpeia sem avisar." },
{ id: "cm185", name: "Padeiro de Ferro", atk: 14, hp: 90, rarity: "COMMON", img: "🍞", desc: "Seu pão é duro, seus punhos também." },
{ id: "cm186", name: "Barqueiro do Estige", atk: 19, hp: 55, rarity: "COMMON", img: "⛵", desc: "Transporta almas e golpes." },
{ id: "cm187", name: "Jardineiro de Rosas", atk: 16, hp: 68, rarity: "COMMON", img: "🌹", desc: "Suas rosas têm espinhos venenosos." },
{ id: "cm188", name: "Mestre de Forja", atk: 22, hp: 45, rarity: "COMMON", img: "🔨", desc: "Martela ferro e inimigos com a mesma força." },
{ id: "cm189", name: "Cavaleiro de Vidro", atk: 12, hp: 100, rarity: "COMMON", img: "🪞", desc: "Brilha, mas pode quebrar." },
{ id: "cm190", name: "Bardo da Taverna", atk: 10, hp: 70, rarity: "COMMON", img: "🎵", desc: "Suas músicas inspiram e irritam." },
{ id: "cm191", name: "Mensageiro das Sombras", atk: 21, hp: 40, rarity: "COMMON", img: "🦇", desc: "Entrega notícias e golpes furtivos." },
{ id: "cm192", name: "Cavaleiro de Osso", atk: 15, hp: 85, rarity: "COMMON", img: "🦴", desc: "Feito de ossos, mas ainda luta." },
{ id: "cm193", name: "Alquimista Novato", atk: 18, hp: 52, rarity: "COMMON", img: "⚗️", desc: "Suas poções são imprevisíveis." },
{ id: "cm194", name: "Pescador de Pérolas", atk: 13, hp: 80, rarity: "COMMON", img: "🐚", desc: "Mergulha fundo para encontrar tesouros." },
{ id: "cm195", name: "Batedor da Neve", atk: 17, hp: 62, rarity: "COMMON", img: "🌨️", desc: "Rastreia pegadas na neve." },
{ id: "cm196", name: "Cavaleiro de Folhas", atk: 14, hp: 78, rarity: "COMMON", img: "🍃", desc: "Leve como uma folha ao vento." },
{ id: "cm197", name: "Mago do Vento", atk: 22, hp: 40, rarity: "COMMON", img: "💨", desc: "Controla as correntes de ar." },
{ id: "cm198", name: "Ferreiro Errante", atk: 16, hp: 72, rarity: "COMMON", img: "⚒️", desc: "Forja armas onde quer que vá." },
{ id: "cm199", name: "Caçador de Relíquias", atk: 19, hp: 55, rarity: "COMMON", img: "🏺", desc: "Caça tesouros antigos." },
{ id: "cm200", name: "Cavaleiro de Palha", atk: 9, hp: 115, rarity: "COMMON", img: "🧙", desc: "Parece frágil, mas é resistente." },

// ── RAROS (rn001 – rn100) ────────────────────────────────────
{ id: "rn001", name: "Cavaleiro de Obsidiana", atk: 42, hp: 200, rarity: "RARE", img: "🪨", desc: "Sua armadura é feita de vidro vulcânico." },
{ id: "rn002", name: "Maga das Tempestades", atk: 58, hp: 160, rarity: "RARE", img: "⛈️", desc: "Conjura raios e ventos furiosos." },
{ id: "rn003", name: "Paladino da Penitência", atk: 38, hp: 240, rarity: "RARE", img: "⚜️", desc: "Expia seus pecados com a espada." },
{ id: "rn004", name: "Feiticeiro de Runas", atk: 52, hp: 155, rarity: "RARE", img: "🪷", desc: "Desenha runas que explodem em poder." },
{ id: "rn005", name: "Berserker de Mármore", atk: 68, hp: 135, rarity: "RARE", img: "🗿", desc: "Pele de pedra, fúria de vulcão." },
{ id: "rn006", name: "Monge da Neblina", atk: 46, hp: 210, rarity: "RARE", img: "🌫️", desc: "Luta entre as brumas com precisão." },
{ id: "rn007", name: "Vampira do Crepúsculo", atk: 54, hp: 185, rarity: "RARE", img: "🌆", desc: "Suga a energia no fim da tarde." },
{ id: "rn008", name: "Guardião do Lago", atk: 40, hp: 235, rarity: "RARE", img: "🏞️", desc: "Protetor das águas sagradas." },
{ id: "rn009", name: "Pirata do Asfalto", atk: 62, hp: 145, rarity: "RARE", img: "🏴‍☠️", desc: "Navega nas ruas com sua tripulação." },
{ id: "rn010", name: "Samurai da Folha", atk: 58, hp: 155, rarity: "RARE", img: "🍂", desc: "Sua lâmina corta como o vento outonal." },
{ id: "rn011", name: "Atirador da Aurora", atk: 50, hp: 175, rarity: "RARE", img: "🌅", desc: "Flechas tingidas de luz do amanhecer." },
{ id: "rn012", name: "Sacerdotisa do Eco", atk: 42, hp: 225, rarity: "RARE", img: "🔊", desc: "Reza para os espíritos do som." },
{ id: "rn013", name: "Xamã do Fogo", atk: 56, hp: 180, rarity: "RARE", img: "🔥", desc: "Invoca chamas ancestrais." },
{ id: "rn014", name: "Cavaleira do Vento", atk: 48, hp: 195, rarity: "RARE", img: "🌬️", desc: "Monta uma nuvem e ataca de cima." },
{ id: "rn015", name: "Assassino das Sombras", atk: 66, hp: 138, rarity: "RARE", img: "🔪", desc: "Nunca visto, sempre letal." },
{ id: "rn016", name: "Arqueira do Gelo", atk: 56, hp: 165, rarity: "RARE", img: "🧊", desc: "Suas flechas congelam o inimigo." },
{ id: "rn017", name: "Bardo das Marés", atk: 40, hp: 240, rarity: "RARE", img: "🌊", desc: "Sua música atrai as ondas." },
{ id: "rn018", name: "Domador de Feras", atk: 54, hp: 160, rarity: "RARE", img: "🐅", desc: "Luta lado a lado com tigres e ursos." },
{ id: "rn019", name: "Templário do Sol", atk: 60, hp: 150, rarity: "RARE", img: "☀️", desc: "Empunha uma espada de luz solar." },
{ id: "rn020", name: "Feiticeira do Caos", atk: 48, hp: 205, rarity: "RARE", img: "🌀", desc: "Conjura bolhas de realidade distorcida." },
{ id: "rn021", name: "Caçador de Dragões", atk: 64, hp: 142, rarity: "RARE", img: "🐲", desc: "Já matou três dragões jovens." },
{ id: "rn022", name: "Monarca do Ocaso", atk: 42, hp: 235, rarity: "RARE", img: "🌇", desc: "Rei do crepúsculo e das sombras." },
{ id: "rn023", name: "Guerreiro de Vidro", atk: 58, hp: 158, rarity: "RARE", img: "🪞", desc: "Brilha e fere com fragmentos." },
{ id: "rn024", name: "Xerife do Inferno", atk: 52, hp: 190, rarity: "RARE", img: "🤠", desc: "Mantém a lei nas terras ardentes." },
{ id: "rn025", name: "Sacerdote do Vazio", atk: 44, hp: 220, rarity: "RARE", img: "🌀", desc: "Reza ao nada e recebe poder." },
{ id: "rn026", name: "Lutadora de Garras", atk: 62, hp: 145, rarity: "RARE", img: "🐾", desc: "Luta com garras de metal afiadas." },
{ id: "rn027", name: "Guardião do Trovão", atk: 38, hp: 250, rarity: "RARE", img: "⚡", desc: "Absorve raios e os devolve." },
{ id: "rn028", name: "Espectro do Abismo", atk: 56, hp: 168, rarity: "RARE", img: "👻", desc: "Vaga entre dimensões." },
{ id: "rn029", name: "Capitã da Tempestade", atk: 60, hp: 148, rarity: "RARE", img: "⛵", desc: "Comanda navios e trovões." },
{ id: "rn030", name: "Alquimista do Fogo", atk: 52, hp: 172, rarity: "RARE", img: "🧪", desc: "Suas poções queimam ou curam." },
{ id: "rn031", name: "Ronin da Lua", atk: 60, hp: 155, rarity: "RARE", img: "🌕", desc: "Lâmina banhada em luz lunar." },
{ id: "rn032", name: "Bruxa Carmesim", atk: 46, hp: 215, rarity: "RARE", img: "🩸", desc: "Magia com custo de sangue." },
{ id: "rn033", name: "Cavaleiro de Ossos", atk: 44, hp: 230, rarity: "RARE", img: "🦴", desc: "Monta um esqueleto de cavalo." },
{ id: "rn034", name: "Maga do Cristal", atk: 58, hp: 170, rarity: "RARE", img: "💠", desc: "Atira estilhaços de cristal." },
{ id: "rn035", name: "Paladino do Gelo", atk: 42, hp: 240, rarity: "RARE", img: "❄️", desc: "Cura com a pureza do gelo." },
{ id: "rn036", name: "Feiticeiro de Areia", atk: 60, hp: 155, rarity: "RARE", img: "🏜️", desc: "Controla tempestades de areia." },
{ id: "rn037", name: "Berserker de Lava", atk: 70, hp: 140, rarity: "RARE", img: "🌋", desc: "Sua raiva derrete o chão." },
{ id: "rn038", name: "Monge do Eco", atk: 50, hp: 198, rarity: "RARE", img: "🔊", desc: "Usa o som para desorientar." },
{ id: "rn039", name: "Vampira do Alvorecer", atk: 60, hp: 180, rarity: "RARE", img: "🌅", desc: "Última da linhagem noturna." },
{ id: "rn040", name: "Guardião das Águas", atk: 40, hp: 255, rarity: "RARE", img: "💧", desc: "Protege rios e lagos." },
{ id: "rn041", name: "Pirata das Nuvens", atk: 62, hp: 150, rarity: "RARE", img: "☁️", desc: "Navega em navios voadores." },
{ id: "rn042", name: "Samurai do Crepúsculo", atk: 62, hp: 165, rarity: "RARE", img: "🌆", desc: "Lâmina que brilha no fim do dia." },
{ id: "rn043", name: "Atirador do Caos", atk: 54, hp: 175, rarity: "RARE", img: "🎯", desc: "Sua flecha encontra sempre o alvo." },
{ id: "rn044", name: "Sacerdotisa do Vulcão", atk: 46, hp: 225, rarity: "RARE", img: "🌋", desc: "Oferece cinzas aos deuses." },
{ id: "rn045", name: "Dragão de Prata", atk: 72, hp: 160, rarity: "RARE", img: "🐉", desc: "Escamas prateadas, sopro de luz." },
{ id: "rn046", name: "Anjo Caído da Lua", atk: 66, hp: 170, rarity: "RARE", img: "🌙", desc: "Asas de prata, coração negro." },
{ id: "rn047", name: "Golem de Ferro", atk: 50, hp: 245, rarity: "RARE", img: "🔩", desc: "Forjado com ferro e vontade." },
{ id: "rn048", name: "Necromante do Gelo", atk: 64, hp: 145, rarity: "RARE", img: "🧊", desc: "Levanta mortos congelados." },
{ id: "rn049", name: "Titã da Cera", atk: 74, hp: 150, rarity: "RARE", img: "🕯️", desc: "Derrete e se molda novamente." },
{ id: "rn050", name: "Sereia da Aurora", atk: 58, hp: 185, rarity: "RARE", img: "🌅", desc: "Canta na luz do amanhecer." },
{ id: "rn051", name: "Centauro das Estrelas", atk: 56, hp: 195, rarity: "RARE", img: "🐴", desc: "Galopa entre constelações." },
{ id: "rn052", name: "Harpia Noturna", atk: 62, hp: 155, rarity: "RARE", img: "🦅", desc: "Grita e ataca nas sombras." },
{ id: "rn053", name: "Quimera de Fogo", atk: 70, hp: 145, rarity: "RARE", img: "🐲", desc: "Cabeças de leão, cabra e serpente flamejante." },
{ id: "rn054", name: "Mantícora Venenosa", atk: 66, hp: 160, rarity: "RARE", img: "🦂", desc: "Cauda de escorpião e dentes de leão." },
{ id: "rn055", name: "Basilisco de Pedra", atk: 58, hp: 175, rarity: "RARE", img: "🐍", desc: "Olhar que petrifica lentamente." },
{ id: "rn056", name: "Cockatrice Veloz", atk: 64, hp: 140, rarity: "RARE", img: "🐔", desc: "Garras afiadas e veneno rápido." },
{ id: "rn057", name: "Grifo do Sol", atk: 68, hp: 165, rarity: "RARE", img: "🦁", desc: "Águia e leão sob a luz do sol." },
{ id: "rn058", name: "Pégaso Noturno", atk: 52, hp: 190, rarity: "RARE", img: "🐴", desc: "Voa sob a lua e ataca com cascos." },
{ id: "rn059", name: "Unicórnio Sombrio", atk: 56, hp: 185, rarity: "RARE", img: "🦄", desc: "Chifre negro, magia das trevas." },
{ id: "rn060", name: "Lobo de Prata", atk: 62, hp: 170, rarity: "RARE", img: "🐺", desc: "Uiva para a lua e caça em bando." },
{ id: "rn061", name: "Raposa de Fogo", atk: 60, hp: 155, rarity: "RARE", img: "🦊", desc: "Astúcia e chamas." },
{ id: "rn062", name: "Pantera Fantasma", atk: 68, hp: 145, rarity: "RARE", img: "🐆", desc: "Desaparece e ataca de surpresa." },
{ id: "rn063", name: "Tigre de Gelo", atk: 70, hp: 160, rarity: "RARE", img: "🐅", desc: "Presas de gelo, rugido congelante." },
{ id: "rn064", name: "Urso Polar Ancestral", atk: 64, hp: 195, rarity: "RARE", img: "🐻‍❄️", desc: "Força bruta e pelagem gelada." },
{ id: "rn065", name: "Alce Celestial", atk: 56, hp: 200, rarity: "RARE", img: "🦌", desc: "Chifres que tocam as estrelas." },
{ id: "rn066", name: "Búfalo de Sombras", atk: 62, hp: 185, rarity: "RARE", img: "🐃", desc: "Carga escura que derruba tudo." },
{ id: "rn067", name: "Rinoceronte de Aço", atk: 70, hp: 175, rarity: "RARE", img: "🦏", desc: "Pele de metal e chifre perfurante." },
{ id: "rn068", name: "Hipopótamo de Lava", atk: 68, hp: 190, rarity: "RARE", img: "🦛", desc: "Mordida quente como magma." },
{ id: "rn069", name: "Crocodilo Abissal", atk: 72, hp: 165, rarity: "RARE", img: "🐊", desc: "Mandíbulas que esmagam navios." },
{ id: "rn070", name: "Iguana do Sol", atk: 54, hp: 180, rarity: "RARE", img: "🦎", desc: "Língua longa e golpes ardentes." },
{ id: "rn071", name: "Tartaruga de Cristal", atk: 46, hp: 240, rarity: "RARE", img: "🐢", desc: "Carapaça de diamante, quase inquebrável." },
{ id: "rn072", name: "Águia da Tempestade", atk: 66, hp: 155, rarity: "RARE", img: "🦅", desc: "Voa entre raios e relâmpagos." },
{ id: "rn073", name: "Falcão Noturno", atk: 64, hp: 148, rarity: "RARE", img: "🦅", desc: "Olhos de fogo, garras de gelo." },
{ id: "rn074", name: "Corvo das Sombras", atk: 58, hp: 170, rarity: "RARE", img: "🐦", desc: "Mensageiro dos mortos." },
{ id: "rn075", name: "Coruja Sábia", atk: 50, hp: 195, rarity: "RARE", img: "🦉", desc: "Golpes precisos e silenciosos." },
{ id: "rn076", name: "Ouriço de Fogo", atk: 62, hp: 140, rarity: "RARE", img: "🦔", desc: "Espinhos flamejantes que ferem quem ataca." },
{ id: "rn077", name: "Lontra das Marés", atk: 56, hp: 175, rarity: "RARE", img: "🦦", desc: "Ágil na água e na terra." },
{ id: "rn078", name: "Texugo de Ferro", atk: 68, hp: 160, rarity: "RARE", img: "🦡", desc: "Pele dura e mordida esmagadora." },
{ id: "rn079", name: "Camaleão Arcano", atk: 52, hp: 185, rarity: "RARE", img: "🦎", desc: "Muda de cor e de estratégia." },
{ id: "rn080", name: "Macaco Guerreiro", atk: 64, hp: 150, rarity: "RARE", img: "🐒", desc: "Saltos e golpes rápidos." },
{ id: "rn081", name: "Javali de Obsidiana", atk: 70, hp: 170, rarity: "RARE", img: "🐗", desc: "Presas de vidro vulcânico." },
{ id: "rn082", name: "Gavião Peregrino", atk: 74, hp: 135, rarity: "RARE", img: "🦅", desc: "O ataque mais rápido entre os raros." },
{ id: "rn083", name: "Morcego das Trevas", atk: 60, hp: 155, rarity: "RARE", img: "🦇", desc: "Suga a energia do oponente." },
{ id: "rn084", name: "Sapo Venenoso", atk: 56, hp: 165, rarity: "RARE", img: "🐸", desc: "Língua pegajosa e veneno letal." },
{ id: "rn085", name: "Formiga de Aço", atk: 62, hp: 175, rarity: "RARE", img: "🐜", desc: "Trabalho em equipe, força bruta." },
{ id: "rn086", name: "Besouro Titan", atk: 74, hp: 160, rarity: "RARE", img: "🪲", desc: "Chifre poderoso, carapaça dura." },
{ id: "rn087", name: "Libélula Elétrica", atk: 58, hp: 145, rarity: "RARE", img: "🪰", desc: "Esquiva e picada precisa." },
{ id: "rn088", name: "Joaninha Cósmica", atk: 46, hp: 190, rarity: "RARE", img: "🐞", desc: "Sorte e pequenas explosões." },
{ id: "rn089", name: "Escorpião de Fogo", atk: 68, hp: 148, rarity: "RARE", img: "🦂", desc: "Veneno que queima e paralisa." },
{ id: "rn090", name: "Aranha Tecedeira", atk: 60, hp: 155, rarity: "RARE", img: "🕷️", desc: "Teias que prendem o inimigo." },
{ id: "rn091", name: "Centopeia Blindada", atk: 56, hp: 185, rarity: "RARE", img: "🐛", desc: "Muitas patas, muita resistência." },
{ id: "rn092", name: "Caracol de Ferro", atk: 42, hp: 230, rarity: "RARE", img: "🐌", desc: "Devagar, mas quase inquebrável." },
{ id: "rn093", name: "Polvo Estrategista", atk: 64, hp: 155, rarity: "RARE", img: "🐙", desc: "Oito tentáculos, oito golpes." },
{ id: "rn094", name: "Água-viva Elétrica", atk: 70, hp: 142, rarity: "RARE", img: "🪼", desc: "Choques que desorientam." },
{ id: "rn095", name: "Cavalo-marinho Dançarino", atk: 52, hp: 180, rarity: "RARE", img: "🐴", desc: "Gracioso e mortal." },
{ id: "rn096", name: "Peixe-espada", atk: 74, hp: 148, rarity: "RARE", img: "🐟", desc: "Nadadeira afiada como lâmina." },
{ id: "rn097", name: "Tubarão Abissal", atk: 66, hp: 160, rarity: "RARE", img: "🦈", desc: "Dentes serrilhados e fome eterna." },
{ id: "rn098", name: "Baleia Cantora", atk: 54, hp: 210, rarity: "RARE", img: "🐋", desc: "Canções que atordoam." },
{ id: "rn099", name: "Golfinho Arremessador", atk: 60, hp: 155, rarity: "RARE", img: "🐬", desc: "Arremessa conchas com precisão." },
{ id: "rn100", name: "Lula Luminescente", atk: 64, hp: 148, rarity: "RARE", img: "🦑", desc: "Brilho ofuscante e tentáculos." },

// ── ÉPICOS (ep001 – ep080) ───────────────────────────────────
{ id: "ep001", name: "Arauto do Crepúsculo", atk: 82, hp: 380, rarity: "EPIC", img: "🌆", desc: "Anuncia o fim do dia e o começo da morte." },
{ id: "ep002", name: "Colosso de Ferro", atk: 76, hp: 430, rarity: "EPIC", img: "🤖", desc: "Máquina de guerra indestrutível." },
{ id: "ep003", name: "Sereia de Fogo", atk: 88, hp: 320, rarity: "EPIC", img: "🔥", desc: "Canta e queima ao mesmo tempo." },
{ id: "ep004", name: "Necromante dos Mortos", atk: 90, hp: 310, rarity: "EPIC", img: "💀", desc: "Chama os mortos para lutar." },
{ id: "ep005", name: "Titã do Gelo", atk: 100, hp: 290, rarity: "EPIC", img: "❄️", desc: "Congela o mundo com seu sopro." },
{ id: "ep006", name: "Dragão de Bronze", atk: 84, hp: 360, rarity: "EPIC", img: "🐉", desc: "Escamas de bronze, sopro de fogo." },
{ id: "ep007", name: "Anjo da Guerra", atk: 96, hp: 305, rarity: "EPIC", img: "⚔️", desc: "Guerreiro celestial implacável." },
{ id: "ep008", name: "Golem de Prata", atk: 72, hp: 450, rarity: "EPIC", img: "🪙", desc: "Prata pura, defesa impecável." },
{ id: "ep009", name: "Lich das Almas", atk: 92, hp: 300, rarity: "EPIC", img: "👻", desc: "Almas são seu combustível." },
{ id: "ep010", name: "Griffe da Noite", atk: 80, hp: 370, rarity: "EPIC", img: "🐾", desc: "Garras que rasgam a escuridão." },
{ id: "ep011", name: "Sombra do Caos", atk: 105, hp: 270, rarity: "EPIC", img: "🌀", desc: "Sombra que distorce a realidade." },
{ id: "ep012", name: "Cavaleiro das Estrelas", atk: 78, hp: 400, rarity: "EPIC", img: "⭐", desc: "Cavalga entre as constelações." },
{ id: "ep013", name: "Maga do Trovão", atk: 94, hp: 320, rarity: "EPIC", img: "⚡", desc: "Raio e magia em harmonia." },
{ id: "ep014", name: "Paladino da Morte", atk: 76, hp: 420, rarity: "EPIC", img: "☠️", desc: "Cavaleiro da morte, sem piedade." },
{ id: "ep015", name: "Feiticeiro do Abismo", atk: 90, hp: 330, rarity: "EPIC", img: "🌀", desc: "Poder do vazio em suas mãos." },
{ id: "ep016", name: "Berserk da Luz", atk: 98, hp: 280, rarity: "EPIC", img: "💡", desc: "Fúria luminosa, cega os inimigos." },
{ id: "ep017", name: "Monge do Vento", atk: 84, hp: 360, rarity: "EPIC", img: "🍃", desc: "Golpes de furacão, rápidos e mortais." },
{ id: "ep018", name: "Vampira da Meia-Noite", atk: 86, hp: 350, rarity: "EPIC", img: "🌙", desc: "Sangue lunar, poder noturno." },
{ id: "ep019", name: "Guardião do Trovão", atk: 74, hp: 450, rarity: "EPIC", img: "⚡", desc: "Defensor dos céus, inabalável." },
{ id: "ep020", name: "Pirata do Caos", atk: 92, hp: 320, rarity: "EPIC", img: "🏴‍☠️", desc: "Navega no caos, sem rumo." },
{ id: "ep021", name: "Samurai do Abismo", atk: 94, hp: 340, rarity: "EPIC", img: "⚔️", desc: "Lâmina do vazio, corte absoluto." },
{ id: "ep022", name: "Atirador dos Sonhos", atk: 82, hp: 370, rarity: "EPIC", img: "💤", desc: "Flecha onírica, ataca no sono." },
{ id: "ep023", name: "Sacerdotisa do Fogo", atk: 80, hp: 390, rarity: "EPIC", img: "🔥", desc: "Chamas sagradas, poder divino." },
{ id: "ep024", name: "Dragão da Noite", atk: 92, hp: 350, rarity: "EPIC", img: "🐉", desc: "Sopro de escuridão, cega o inimigo." },
{ id: "ep025", name: "Anjo Vingador", atk: 98, hp: 310, rarity: "EPIC", img: "🗡️", desc: "Vingança celestial, justiça divina." },
{ id: "ep026", name: "Golem de Obsidiana", atk: 76, hp: 430, rarity: "EPIC", img: "🪨", desc: "Vidro negro, defesa afiada." },
{ id: "ep027", name: "Necromante Estelar", atk: 90, hp: 330, rarity: "EPIC", img: "⭐", desc: "Poder das estrelas, magia cósmica." },
{ id: "ep028", name: "Titã da Geada", atk: 102, hp: 295, rarity: "EPIC", img: "❄️", desc: "Gelo eterno, frio absoluto." },
{ id: "ep029", name: "Sereia do Crepúsculo", atk: 84, hp: 370, rarity: "EPIC", img: "🌆", desc: "Canto do fim do dia, hipnose." },
{ id: "ep030", name: "Valquíria do Fogo", atk: 92, hp: 340, rarity: "EPIC", img: "🔥", desc: "Chamas e escudo, guerreira ardente." },
{ id: "ep031", name: "Lich do Abismo", atk: 98, hp: 300, rarity: "EPIC", img: "🌀", desc: "Vazio vivo, poder do nada." },
{ id: "ep032", name: "Griffe do Tempo", atk: 86, hp: 380, rarity: "EPIC", img: "⌛", desc: "Garras que envelhecem o alvo." },
{ id: "ep033", name: "Sombra do Fogo", atk: 104, hp: 280, rarity: "EPIC", img: "🔥", desc: "Sombra incandescente, queima sem luz." },
{ id: "ep034", name: "Cavaleiro do Gelo", atk: 82, hp: 410, rarity: "EPIC", img: "🧊", desc: "Montaria de gelo, cavaleiro congelante." },
{ id: "ep035", name: "Maga do Trovão", atk: 94, hp: 325, rarity: "EPIC", img: "⚡", desc: "Raio e magia, sinfonia elétrica." },
{ id: "ep036", name: "Paladino do Abismo", atk: 80, hp: 425, rarity: "EPIC", img: "🌀", desc: "Defensor do vazio, fé inabalável." },
{ id: "ep037", name: "Feiticeiro do Caos", atk: 92, hp: 330, rarity: "EPIC", img: "🌪️", desc: "Caos puro, magia imprevisível." },
{ id: "ep038", name: "Berserk do Crepúsculo", atk: 104, hp: 275, rarity: "EPIC", img: "🌘", desc: "Fúria na penumbra, sem controle." },
{ id: "ep039", name: "Monge da Lua", atk: 88, hp: 365, rarity: "EPIC", img: "🌙", desc: "Poder lunar, golpes precisos." },
{ id: "ep040", name: "Vampira das Sombras", atk: 90, hp: 355, rarity: "EPIC", img: "🖤", desc: "Sombra e sangue, dupla mortal." },
{ id: "ep041", name: "Guardião do Caos", atk: 76, hp: 455, rarity: "EPIC", img: "🌀", desc: "Protetor do caos, desordem em pessoa." },
{ id: "ep042", name: "Pirata do Fogo", atk: 94, hp: 325, rarity: "EPIC", img: "🔥", desc: "Mar de chamas, navega na lava." },
{ id: "ep043", name: "Samurai da Morte", atk: 96, hp: 345, rarity: "EPIC", img: "💀", desc: "Lâmina da morte, golpe final." },
{ id: "ep044", name: "Atirador da Eternidade", atk: 84, hp: 375, rarity: "EPIC", img: "♾️", desc: "Flecha infinita, nunca erra." },
{ id: "ep045", name: "Sacerdotisa do Abismo", atk: 82, hp: 395, rarity: "EPIC", img: "🌀", desc: "Vazio sagrado, poder divino." },
{ id: "ep046", name: "Dragão do Trovão", atk: 94, hp: 355, rarity: "EPIC", img: "⚡", desc: "Sopro elétrico, choque mortal." },
{ id: "ep047", name: "Anjo do Caos", atk: 100, hp: 315, rarity: "EPIC", img: "🌀", desc: "Anjo distorcido, mensageiro da desordem." },
{ id: "ep048", name: "Golem de Fogo", atk: 78, hp: 435, rarity: "EPIC", img: "🔥", desc: "Lava viva, indestrutível." },
{ id: "ep049", name: "Necromante da Luz", atk: 92, hp: 335, rarity: "EPIC", img: "💡", desc: "Luz dos mortos, brilho macabro." },
{ id: "ep050", name: "Titã do Fogo", atk: 104, hp: 300, rarity: "EPIC", img: "🔥", desc: "Chama primordial, poder absoluto." },
{ id: "ep051", name: "Sereia do Caos", atk: 86, hp: 375, rarity: "EPIC", img: "🌀", desc: "Canto caótico, desorienta e ataca." },
{ id: "ep052", name: "Valquíria do Abismo", atk: 94, hp: 345, rarity: "EPIC", img: "🌀", desc: "Valquíria sombria, escolhe os caídos." },
{ id: "ep053", name: "Lich do Tempo", atk: 98, hp: 305, rarity: "EPIC", img: "⌛", desc: "Tempo distorcido, imortal." },
{ id: "ep054", name: "Griffe do Fogo", atk: 88, hp: 385, rarity: "EPIC", img: "🔥", desc: "Garras flamejantes, queimam tudo." },
{ id: "ep055", name: "Sombra do Gelo", atk: 106, hp: 285, rarity: "EPIC", img: "❄️", desc: "Sombra congelante, paralisante." },
{ id: "ep056", name: "Cavaleiro do Abismo", atk: 84, hp: 415, rarity: "EPIC", img: "🌀", desc: "Montaria do vazio, cavaleiro eterno." },
{ id: "ep057", name: "Maga do Fogo", atk: 96, hp: 330, rarity: "EPIC", img: "🔥", desc: "Magia flamejante, poder puro." },
{ id: "ep058", name: "Paladino do Fogo", atk: 82, hp: 430, rarity: "EPIC", img: "🔥", desc: "Fogo sagrado, justiça ardente." },
{ id: "ep059", name: "Feiticeiro do Trovão", atk: 94, hp: 335, rarity: "EPIC", img: "⚡", desc: "Raio e magia, sinfonia elétrica." },
{ id: "ep060", name: "Berserk do Abismo", atk: 106, hp: 280, rarity: "EPIC", img: "🌀", desc: "Fúria do vazio, sem controle." },
{ id: "ep061", name: "Monge do Caos", atk: 90, hp: 370, rarity: "EPIC", img: "🌀", desc: "Golpes caóticos, imprevisíveis." },
{ id: "ep062", name: "Vampira do Fogo", atk: 92, hp: 360, rarity: "EPIC", img: "🔥", desc: "Sangue flamejante, queima ao tocar." },
{ id: "ep063", name: "Guardião do Gelo", atk: 78, hp: 460, rarity: "EPIC", img: "🧊", desc: "Defensor do gelo, inabalável." },
{ id: "ep064", name: "Pirata do Abismo", atk: 96, hp: 330, rarity: "EPIC", img: "🌀", desc: "Navega no vazio, sem destino." },
{ id: "ep065", name: "Samurai do Fogo", atk: 98, hp: 350, rarity: "EPIC", img: "🔥", desc: "Lâmina flamejante, corte incandescente." },
{ id: "ep066", name: "Atirador do Abismo", atk: 86, hp: 380, rarity: "EPIC", img: "🌀", desc: "Flecha do vazio, certeira." },
{ id: "ep067", name: "Sacerdotisa do Trovão", atk: 84, hp: 400, rarity: "EPIC", img: "⚡", desc: "Poder do raio, bênção elétrica." },
{ id: "ep068", name: "Dragão do Abismo", atk: 96, hp: 360, rarity: "EPIC", img: "🐉", desc: "Sopro do vazio, devastador." },
{ id: "ep069", name: "Anjo do Fogo", atk: 102, hp: 320, rarity: "EPIC", img: "🔥", desc: "Anjo incandescente, justiça ardente." },
{ id: "ep070", name: "Golem do Trovão", atk: 80, hp: 440, rarity: "EPIC", img: "⚡", desc: "Golem elétrico, choque constante." },
{ id: "ep071", name: "Necromante do Caos", atk: 94, hp: 340, rarity: "EPIC", img: "🌀", desc: "Caos e morte, dupla letal." },
{ id: "ep072", name: "Titã do Abismo", atk: 106, hp: 305, rarity: "EPIC", img: "🌀", desc: "Titã do vazio, poder incomensurável." },
{ id: "ep073", name: "Sereia do Gelo", atk: 88, hp: 380, rarity: "EPIC", img: "❄️", desc: "Canto gelado, hipnose congelante." },
{ id: "ep074", name: "Valquíria do Trovão", atk: 96, hp: 350, rarity: "EPIC", img: "⚡", desc: "Raio e escudo, defesa perfeita." },
{ id: "ep075", name: "Lich do Fogo", atk: 100, hp: 310, rarity: "EPIC", img: "🔥", desc: "Chamas eternas, lich imortal." },
{ id: "ep076", name: "Griffe do Abismo", atk: 90, hp: 390, rarity: "EPIC", img: "🌀", desc: "Garras do vazio, rasgam a alma." },
{ id: "ep077", name: "Sombra do Trovão", atk: 108, hp: 290, rarity: "EPIC", img: "⚡", desc: "Sombra elétrica, choque surpresa." },
{ id: "ep078", name: "Cavaleiro do Fogo", atk: 86, hp: 420, rarity: "EPIC", img: "🔥", desc: "Cavalo de chamas, carga ardente." },
{ id: "ep079", name: "Maga do Abismo", atk: 98, hp: 335, rarity: "EPIC", img: "🌀", desc: "Magia do vazio, poder escuro." },
{ id: "ep080", name: "Paladino do Trovão", atk: 84, hp: 435, rarity: "EPIC", img: "⚡", desc: "Defensor do raio, justiça elétrica." },

// ── LENDÁRIOS (lg001 – lg060) ────────────────────────────────
{ id: "lg001", name: "Deus do Sol", atk: 148, hp: 620, rarity: "LEGENDARY", img: "☀️", desc: "O sol em forma de guerreiro." },
{ id: "lg002", name: "Deusa da Lua", atk: 138, hp: 660, rarity: "LEGENDARY", img: "🌙", desc: "A lua que guia os perdidos." },
{ id: "lg003", name: "Titã do Trovão", atk: 168, hp: 560, rarity: "LEGENDARY", img: "⚡", desc: "O trovão que ecoa por toda eternidade." },
{ id: "lg004", name: "Fênix das Sombras", atk: 155, hp: 590, rarity: "LEGENDARY", img: "🦅", desc: "Renasce das trevas mais profundas." },
{ id: "lg005", name: "Senhor das Estrelas", atk: 150, hp: 630, rarity: "LEGENDARY", img: "⭐", desc: "Comanda as constelações." },
{ id: "lg006", name: "Guerreiro Cósmico", atk: 160, hp: 570, rarity: "LEGENDARY", img: "🌌", desc: "Viaja pelo cosmos em batalha." },
{ id: "lg007", name: "Imperador Dragão", atk: 175, hp: 540, rarity: "LEGENDARY", img: "🐲", desc: "Rei dos dragões lendários." },
{ id: "lg008", name: "Anjo Celestial", atk: 142, hp: 670, rarity: "LEGENDARY", img: "👼", desc: "Mensageiro dos deuses." },
{ id: "lg009", name: "Golem Primordial", atk: 132, hp: 710, rarity: "LEGENDARY", img: "🗿", desc: "O primeiro golem." },
{ id: "lg010", name: "Necromante Eterno", atk: 157, hp: 600, rarity: "LEGENDARY", img: "💀", desc: "Vive na morte e na vida." },
{ id: "lg011", name: "Titã do Fogo", atk: 170, hp: 550, rarity: "LEGENDARY", img: "🔥", desc: "Chamas primordiais." },
{ id: "lg012", name: "Sereia do Destino", atk: 147, hp: 640, rarity: "LEGENDARY", img: "🧜‍♀️", desc: "Canta o futuro." },
{ id: "lg013", name: "Valquíria Celestial", atk: 152, hp: 620, rarity: "LEGENDARY", img: "🛡️", desc: "Valquíria suprema." },
{ id: "lg014", name: "Lich do Caos", atk: 162, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Caos imortal." },
{ id: "lg015", name: "Griffe do Destino", atk: 142, hp: 650, rarity: "LEGENDARY", img: "⚖️", desc: "Garras do destino." },
{ id: "lg016", name: "Sombra Infinita", atk: 178, hp: 530, rarity: "LEGENDARY", img: "🌌", desc: "Sombra eterna." },
{ id: "lg017", name: "Cavaleiro do Apocalipse", atk: 152, hp: 610, rarity: "LEGENDARY", img: "🐴", desc: "Um dos quatro cavaleiros." },
{ id: "lg018", name: "Maga do Destino", atk: 157, hp: 590, rarity: "LEGENDARY", img: "🔮", desc: "Vê o destino." },
{ id: "lg019", name: "Paladino da Luz Eterna", atk: 137, hp: 690, rarity: "LEGENDARY", img: "☀️", desc: "Luz infinita." },
{ id: "lg020", name: "Feiticeiro do Vazio", atk: 162, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Vazio vivo." },
{ id: "lg021", name: "Berserk do Fim", atk: 182, hp: 510, rarity: "LEGENDARY", img: "💥", desc: "Fúria do fim." },
{ id: "lg022", name: "Monge da Eternidade", atk: 147, hp: 660, rarity: "LEGENDARY", img: "♾️", desc: "Golpes eternos." },
{ id: "lg023", name: "Vampira Primordial", atk: 157, hp: 630, rarity: "LEGENDARY", img: "🦇", desc: "Primeira vampira." },
{ id: "lg024", name: "Guardião do Tempo", atk: 132, hp: 720, rarity: "LEGENDARY", img: "⏳", desc: "Defensor do tempo." },
{ id: "lg025", name: "Pirata Estelar", atk: 162, hp: 590, rarity: "LEGENDARY", img: "🏴‍☠️", desc: "Navega entre estrelas." },
{ id: "lg026", name: "Samurai do Vazio", atk: 167, hp: 570, rarity: "LEGENDARY", img: "⚔️", desc: "Lâmina do vazio." },
{ id: "lg027", name: "Atirador do Destino", atk: 152, hp: 610, rarity: "LEGENDARY", img: "🎯", desc: "Nunca erra." },
{ id: "lg028", name: "Sacerdotisa do Caos", atk: 142, hp: 680, rarity: "LEGENDARY", img: "🌀", desc: "Caos divino." },
{ id: "lg029", name: "Dragão do Tempo", atk: 172, hp: 550, rarity: "LEGENDARY", img: "🐉", desc: "Sopro temporal." },
{ id: "lg030", name: "Anjo da Morte", atk: 162, hp: 580, rarity: "LEGENDARY", img: "💀", desc: "Anjo ceifador." },
{ id: "lg031", name: "Golem de Energia", atk: 137, hp: 700, rarity: "LEGENDARY", img: "⚡", desc: "Golem elétrico." },
{ id: "lg032", name: "Necromante Estelar", atk: 157, hp: 600, rarity: "LEGENDARY", img: "⭐", desc: "Poder das estrelas." },
{ id: "lg033", name: "Titã do Gelo", atk: 167, hp: 560, rarity: "LEGENDARY", img: "❄️", desc: "Gelo primordial." },
{ id: "lg034", name: "Sereia da Eternidade", atk: 147, hp: 650, rarity: "LEGENDARY", img: "♾️", desc: "Canto eterno." },
{ id: "lg035", name: "Valquíria da Guerra", atk: 157, hp: 620, rarity: "LEGENDARY", img: "⚔️", desc: "Deusa da guerra." },
{ id: "lg036", name: "Lich do Destino", atk: 167, hp: 580, rarity: "LEGENDARY", img: "🔮", desc: "Lich do futuro." },
{ id: "lg037", name: "Griffe do Caos", atk: 147, hp: 660, rarity: "LEGENDARY", img: "🌀", desc: "Garras do caos." },
{ id: "lg038", name: "Sombra do Destino", atk: 182, hp: 540, rarity: "LEGENDARY", img: "🌑", desc: "Sombra do futuro." },
{ id: "lg039", name: "Cavaleiro do Fogo", atk: 152, hp: 620, rarity: "LEGENDARY", img: "🔥", desc: "Cavalo de chamas." },
{ id: "lg040", name: "Maga do Tempo", atk: 157, hp: 600, rarity: "LEGENDARY", img: "⏳", desc: "Magia temporal." },
{ id: "lg041", name: "Paladino do Caos", atk: 137, hp: 700, rarity: "LEGENDARY", img: "🌀", desc: "Defensor do caos." },
{ id: "lg042", name: "Feiticeiro da Luz", atk: 162, hp: 590, rarity: "LEGENDARY", img: "💡", desc: "Luz pura." },
{ id: "lg043", name: "Berserk do Trovão", atk: 182, hp: 520, rarity: "LEGENDARY", img: "⚡", desc: "Fúria elétrica." },
{ id: "lg044", name: "Monge do Destino", atk: 147, hp: 670, rarity: "LEGENDARY", img: "🔮", desc: "Golpes do destino." },
{ id: "lg045", name: "Vampira do Caos", atk: 157, hp: 640, rarity: "LEGENDARY", img: "🌀", desc: "Sangue caótico." },
{ id: "lg046", name: "Guardião do Fogo", atk: 132, hp: 730, rarity: "LEGENDARY", img: "🔥", desc: "Guarda das chamas." },
{ id: "lg047", name: "Pirata do Tempo", atk: 162, hp: 600, rarity: "LEGENDARY", img: "⏳", desc: "Navega no tempo." },
{ id: "lg048", name: "Samurai do Caos", atk: 167, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Lâmina caótica." },
{ id: "lg049", name: "Atirador da Luz", atk: 152, hp: 620, rarity: "LEGENDARY", img: "💡", desc: "Flecha luminosa." },
{ id: "lg050", name: "Sacerdotisa do Fogo", atk: 142, hp: 690, rarity: "LEGENDARY", img: "🔥", desc: "Fogo sagrado." },
{ id: "lg051", name: "Dragão do Caos", atk: 172, hp: 560, rarity: "LEGENDARY", img: "🐉", desc: "Sopro caótico." },
{ id: "lg052", name: "Anjo do Tempo", atk: 162, hp: 590, rarity: "LEGENDARY", img: "⏳", desc: "Anjo temporal." },
{ id: "lg053", name: "Golem do Caos", atk: 137, hp: 710, rarity: "LEGENDARY", img: "🌀", desc: "Golem caótico." },
{ id: "lg054", name: "Necromante do Fogo", atk: 157, hp: 610, rarity: "LEGENDARY", img: "🔥", desc: "Morte flamejante." },
{ id: "lg055", name: "Titã do Trovão", atk: 167, hp: 570, rarity: "LEGENDARY", img: "⚡", desc: "Titã elétrico." },
{ id: "lg056", name: "Sereia do Caos", atk: 147, hp: 660, rarity: "LEGENDARY", img: "🌀", desc: "Canto caótico." },
{ id: "lg057", name: "Valquíria do Fogo", atk: 157, hp: 630, rarity: "LEGENDARY", img: "🔥", desc: "Valquíria flamejante." },
{ id: "lg058", name: "Lich do Gelo", atk: 167, hp: 590, rarity: "LEGENDARY", img: "❄️", desc: "Gelo imortal." },
{ id: "lg059", name: "Griffe do Trovão", atk: 147, hp: 670, rarity: "LEGENDARY", img: "⚡", desc: "Garras elétricas." },
{ id: "lg060", name: "Sombra do Caos", atk: 182, hp: 550, rarity: "LEGENDARY", img: "🌀", desc: "Sombra caótica." },

// ── MÍTICOS (mt001 – mt040) ──────────────────────────────────
{ id: "mt001", name: "Imperador do Fogo", atk: 145, hp: 620, rarity: "MYTHIC", img: "🔥", desc: "Rei das chamas e dos vulcões." },
{ id: "mt002", name: "Deusa do Gelo Eterno", atk: 135, hp: 680, rarity: "MYTHIC", img: "❄️", desc: "Seu sopro congela mundos." },
{ id: "mt003", name: "Titã do Caos", atk: 165, hp: 570, rarity: "MYTHIC", img: "🌀", desc: "Personificação do caos primordial." },
{ id: "mt004", name: "Fênix Cósmica", atk: 155, hp: 600, rarity: "MYTHIC", img: "🦅", desc: "Renasce das estrelas." },
{ id: "mt005", name: "Senhor do Tempo", atk: 150, hp: 640, rarity: "MYTHIC", img: "⏳", desc: "Dobra o tempo à sua vontade." },
{ id: "mt006", name: "Guerreiro das Galáxias", atk: 160, hp: 580, rarity: "MYTHIC", img: "🌌", desc: "Carrega o poder de um sistema solar." },
{ id: "mt007", name: "Dragão Imperador", atk: 170, hp: 550, rarity: "MYTHIC", img: "🐲", desc: "Rei indiscutível dos dragões." },
{ id: "mt008", name: "Anjo Primordial", atk: 140, hp: 680, rarity: "MYTHIC", img: "👼", desc: "Primeiro dos seres celestiais." },
{ id: "mt009", name: "Golem de Origem", atk: 130, hp: 720, rarity: "MYTHIC", img: "🗿", desc: "Feito do barro da criação." },
{ id: "mt010", name: "Necromante da Eternidade", atk: 155, hp: 610, rarity: "MYTHIC", img: "💀", desc: "Comanda os mortos desde o início." },
{ id: "mt011", name: "Titã do Trovão", atk: 168, hp: 560, rarity: "MYTHIC", img: "⚡", desc: "Cada passo é um raio." },
{ id: "mt012", name: "Sereia do Fim", atk: 145, hp: 650, rarity: "MYTHIC", img: "🧜‍♀️", desc: "Seu canto anuncia o apocalipse." },
{ id: "mt013", name: "Valquíria da Guerra", atk: 150, hp: 630, rarity: "MYTHIC", img: "⚔️", desc: "Lidera exércitos divinos." },
{ id: "mt014", name: "Lich do Multiverso", atk: 160, hp: 590, rarity: "MYTHIC", img: "🌐", desc: "Existe em todas as realidades." },
{ id: "mt015", name: "Griffe do Nada", atk: 140, hp: 660, rarity: "MYTHIC", img: "⭕", desc: "Garras que apagam a existência." },
{ id: "mt016", name: "Sombra Infinita", atk: 175, hp: 540, rarity: "MYTHIC", img: "🌑", desc: "A escuridão que não tem fim." },
{ id: "mt017", name: "Cavaleiro do Juízo Final", atk: 150, hp: 620, rarity: "MYTHIC", img: "🐴", desc: "Cavalga para o fim dos tempos." },
{ id: "mt018", name: "Maga do Infinito", atk: 155, hp: 600, rarity: "MYTHIC", img: "♾️", desc: "Manipula a energia infinita." },
{ id: "mt019", name: "Paladino da Luz Absoluta", atk: 135, hp: 700, rarity: "MYTHIC", img: "☀️", desc: "Sua espada é feita de luz pura." },
{ id: "mt020", name: "Feiticeiro do Nada", atk: 160, hp: 590, rarity: "MYTHIC", img: "🕳️", desc: "Canaliza o vazio absoluto." },
{ id: "mt021", name: "Berserker do Apocalipse", atk: 180, hp: 520, rarity: "MYTHIC", img: "💥", desc: "Fúria que destrói reinos." },
{ id: "mt022", name: "Monge da Transcendência", atk: 145, hp: 670, rarity: "MYTHIC", img: "🧘", desc: "Golpes que transcendem a matéria." },
{ id: "mt023", name: "Vampira das Estrelas", atk: 155, hp: 640, rarity: "MYTHIC", img: "🦇", desc: "Suga a luz das estrelas." },
{ id: "mt024", name: "Guardião do Cosmos", atk: 130, hp: 730, rarity: "MYTHIC", img: "🌠", desc: "Protege a ordem cósmica." },
{ id: "mt025", name: "Pirata Cósmico", atk: 160, hp: 600, rarity: "MYTHIC", img: "🏴‍☠️", desc: "Saqueia planetas inteiros." },
{ id: "mt026", name: "Samurai da Eternidade", atk: 165, hp: 580, rarity: "MYTHIC", img: "⚔️", desc: "Lâmina que corta o tempo." },
{ id: "mt027", name: "Atirador do Infinito", atk: 150, hp: 620, rarity: "MYTHIC", img: "🎯", desc: "Sua flecha nunca erra o alvo eterno." },
{ id: "mt028", name: "Sacerdotisa do Nada", atk: 140, hp: 690, rarity: "MYTHIC", img: "🕯️", desc: "Reza ao vazio que tudo criou." },
{ id: "mt029", name: "Dragão do Tempo", atk: 170, hp: 560, rarity: "MYTHIC", img: "🐉", desc: "Sopro que envelhece instantaneamente." },
{ id: "mt030", name: "Anjo do Caos", atk: 160, hp: 590, rarity: "MYTHIC", img: "😈", desc: "Anjo que abraçou a desordem." },
{ id: "mt031", name: "Golem de Energia Pura", atk: 135, hp: 710, rarity: "MYTHIC", img: "💠", desc: "Energia em forma sólida." },
{ id: "mt032", name: "Necromante Cósmico", atk: 155, hp: 610, rarity: "MYTHIC", img: "🌌", desc: "Levanta mortos de outras galáxias." },
{ id: "mt033", name: "Titã da Luz", atk: 165, hp: 570, rarity: "MYTHIC", img: "💡", desc: "Luz que cega deuses." },
{ id: "mt034", name: "Sereia do Multiverso", atk: 145, hp: 650, rarity: "MYTHIC", img: "🌐", desc: "Canto que ecoa em todas as realidades." },
{ id: "mt035", name: "Valquíria da Eternidade", atk: 155, hp: 630, rarity: "MYTHIC", img: "♾️", desc: "Escolhe os imortais." },
{ id: "mt036", name: "Lich do Infinito", atk: 165, hp: 590, rarity: "MYTHIC", img: "∞", desc: "O lich que nunca morre." },
{ id: "mt037", name: "Griffe do Vazio", atk: 145, hp: 660, rarity: "MYTHIC", img: "🌀", desc: "Garras que rasgam o nada." },
{ id: "mt038", name: "Sombra da Criação", atk: 175, hp: 550, rarity: "MYTHIC", img: "🌌", desc: "Sombra que existia antes da luz." },
{ id: "mt039", name: "Cavaleiro do Infinito", atk: 152, hp: 620, rarity: "MYTHIC", img: "♾️", desc: "Cavaleiro que nunca para." },
{ id: "mt040", name: "Maga do Multiverso", atk: 157, hp: 600, rarity: "MYTHIC", img: "🌐", desc: "Magia que atravessa realidades." },

// ── ULTRA RAROS (ur001 – ur020) ──────────────────────────────
{ id: "ur001", name: "Vazio Consciente", atk: 395, hp: 1450, rarity: "ULTRA_RARE", img: "🌀", desc: "O vazio pensante." },
{ id: "ur002", name: "Tempo Distorcido", atk: 415, hp: 1380, rarity: "ULTRA_RARE", img: "⏳", desc: "Distorção temporal." },
{ id: "ur003", name: "Caos Absoluto", atk: 435, hp: 1300, rarity: "ULTRA_RARE", img: "🌀", desc: "Caos puro e infinito." },
{ id: "ur004", name: "Luz Primordial", atk: 380, hp: 1500, rarity: "ULTRA_RARE", img: "💡", desc: "Luz original." },
{ id: "ur005", name: "Sombra Cósmica", atk: 405, hp: 1400, rarity: "ULTRA_RARE", img: "🌑", desc: "Sombra das estrelas." },
{ id: "ur006", name: "Fogo Eterno", atk: 400, hp: 1430, rarity: "ULTRA_RARE", img: "🔥", desc: "Chamas que nunca se apagam." },
{ id: "ur007", name: "Gelo Absoluto", atk: 385, hp: 1480, rarity: "ULTRA_RARE", img: "❄️", desc: "Gelo do zero absoluto." },
{ id: "ur008", name: "Trovão Supremo", atk: 420, hp: 1360, rarity: "ULTRA_RARE", img: "⚡", desc: "Raio celestial." },
{ id: "ur009", name: "Mar de Estrelas", atk: 390, hp: 1460, rarity: "ULTRA_RARE", img: "🌊", desc: "Oceano estelar." },
{ id: "ur010", name: "Deus do Nada", atk: 430, hp: 1320, rarity: "ULTRA_RARE", img: "⭕", desc: "O deus do vazio." },
{ id: "ur011", name: "Criador de Mundos", atk: 375, hp: 1550, rarity: "ULTRA_RARE", img: "🌍", desc: "Forja planetas." },
{ id: "ur012", name: "Destruidor de Realidades", atk: 445, hp: 1280, rarity: "ULTRA_RARE", img: "💥", desc: "Aniquila realidades." },
{ id: "ur013", name: "Guardião do Multiverso", atk: 395, hp: 1470, rarity: "ULTRA_RARE", img: "🌌", desc: "Protege o multiverso." },
{ id: "ur014", name: "Viajante do Infinito", atk: 415, hp: 1390, rarity: "ULTRA_RARE", img: "♾️", desc: "Viaja pelo infinito." },
{ id: "ur015", name: "Sonho Imortal", atk: 385, hp: 1490, rarity: "ULTRA_RARE", img: "💤", desc: "Sonho eterno." },
{ id: "ur016", name: "Pesadelo Cósmico", atk: 425, hp: 1340, rarity: "ULTRA_RARE", img: "😱", desc: "Pesadelo das estrelas." },
{ id: "ur017", name: "Fênix Cósmica", atk: 400, hp: 1440, rarity: "ULTRA_RARE", img: "🦅", desc: "Fênix universal." },
{ id: "ur018", name: "Dragão do Infinito", atk: 435, hp: 1310, rarity: "ULTRA_RARE", img: "🐉", desc: "Dragão sem fim." },
{ id: "ur019", name: "Anjo do Vazio", atk: 390, hp: 1470, rarity: "ULTRA_RARE", img: "👼", desc: "Anjo do nada." },
{ id: "ur020", name: "Golem do Cosmos", atk: 380, hp: 1530, rarity: "ULTRA_RARE", img: "🗿", desc: "Golem celeste." },

// ── ORIGENS (og001 – og010) ──────────────────────────────────
{ id: "og001", name: "Alfa e Ômega", atk: 550, hp: 1950, rarity: "ORIGENS", img: "α", desc: "O princípio e o fim." },
{ id: "og002", name: "Infinito Original", atk: 530, hp: 2000, rarity: "ORIGENS", img: "♾️", desc: "O infinito em pessoa." },
{ id: "og003", name: "Nada Absoluto", atk: 520, hp: 2100, rarity: "ORIGENS", img: "⭕", desc: "O nada que tudo gera." },
{ id: "og004", name: "Tudo Primordial", atk: 545, hp: 1980, rarity: "ORIGENS", img: "🌌", desc: "O tudo original." },
{ id: "og005", name: "Essência Cósmica", atk: 510, hp: 2080, rarity: "ORIGENS", img: "✨", desc: "A essência do cosmos." },
{ id: "og006", name: "Alma Universal", atk: 505, hp: 2150, rarity: "ORIGENS", img: "🧠", desc: "A alma do universo." },
{ id: "og007", name: "Mente Divina", atk: 535, hp: 2020, rarity: "ORIGENS", img: "👁️", desc: "A mente que pensa tudo." },
{ id: "og008", name: "Vontade Primordial", atk: 560, hp: 1880, rarity: "ORIGENS", img: "🔥", desc: "A vontade original." },
{ id: "og009", name: "Silêncio Eterno", atk: 495, hp: 2180, rarity: "ORIGENS", img: "🤫", desc: "O silêncio primordial." },
{ id: "og010", name: "Palavra Original", atk: 555, hp: 1920, rarity: "ORIGENS", img: "📜", desc: "A palavra que criou." },
  { id:"c014", name:"Cervejeiro Guerreiro",atk:17,hp:92,  rarity:"COMMON",    img:"🍺", desc:"Briga melhor bêbado." },
  { id:"c015", name:"Pescador do Fim",    atk:14, hp:100, rarity:"COMMON",    img:"🎣", desc:"Pesca até inimigos." },
  { id:"c016", name:"Fantasma Corredor", atk:30,  hp:35,  rarity:"COMMON",    img:"👻", desc:"Tão rápido que some." },
  { id:"c017", name:"Troll da Ponte",    atk:20,  hp:110, rarity:"COMMON",    img:"🧌", desc:"Bloqueia qualquer passagem." },

  // ── RAROS EXTRAS ──
  { id:"r013", name:"Corsário das Estrelas",atk:62,hp:145,rarity:"RARE",      img:"🌟", desc:"Navega entre os astros." },
  { id:"r014", name:"Duelista Perfeito",  atk:56, hp:168, rarity:"RARE",      img:"🤺", desc:"Nenhum erro em seus golpes." },
  { id:"r015", name:"Invocador das Ruínas",atk:48,hp:200, rarity:"RARE",      img:"🏚️", desc:"Convoca poder das ruínas antigas." },
  { id:"r016", name:"Executora Real",     atk:64, hp:135, rarity:"RARE",      img:"⚖️", desc:"A lei é sua espada." },

  // ── ÉPICOS EXTRAS ──
  { id:"e011", name:"Serpente do Caos",   atk:88, hp:310, rarity:"EPIC",      img:"🐍", desc:"O caos em forma de serpente." },
  { id:"e012", name:"Colossus de Bronze", atk:72, hp:450, rarity:"EPIC",      img:"🤖", desc:"Uma máquina de guerra antiga." },
  { id:"e013", name:"Tempestade Divina",  atk:98, hp:265, rarity:"EPIC",      img:"🌪️", desc:"Tufão que destrói reinos." },

  // ── LENDÁRIOS EXTRAS ──
  { id:"l007", name:"Oráculo Eterno",     atk:135,hp:640, rarity:"LEGENDARY", img:"🔭", desc:"Vê passado, presente e futuro." },
  { id:"l008", name:"Behemoth das Eras",  atk:165,hp:530, rarity:"LEGENDARY", img:"🦏", desc:"Mais antigo que qualquer civilização." },

  // ── MÍTICO EXTRA ──
  { id:"m006", name:"Destruidor Cósmico", atk:310,hp:920, rarity:"MYTHIC",    img:"☄️", desc:"Uma extinção em forma de ser." },

  // ── ULTRA RARO EXTRA ──
  { id:"u004", name:"Singularidade",      atk:420,hp:1300,rarity:"ULTRA_RARE",img:"🌀", desc:"Onde o espaço colapsa em si mesmo." },
  
  // ══════════════════════════════════════════════════════════════
// NOVAS CARTAS – EXPANSÃO Z (z001 – z500)
// Adicione esta lista ao final da array ALL_CARDS em gamedata.js
// ══════════════════════════════════════════════════════════════

{ id: "z001", name: "Guardião da Aurora", atk: 35, hp: 90, rarity: "COMMON", img: "🌅", desc: "Surge com os primeiros raios de sol, trazendo esperança." },
{ id: "z002", name: "Lutador das Cavernas", atk: 28, hp: 105, rarity: "COMMON", img: "🕯️", desc: "Treinou nas profundezas escuras, onde cada passo é perigo." },
{ id: "z003", name: "Arqueiro do Crepúsculo", atk: 42, hp: 55, rarity: "COMMON", img: "🌆", desc: "Suas flechas se confundem com as sombras do entardecer." },
{ id: "z004", name: "Escudeiro do Alvorecer", atk: 22, hp: 120, rarity: "COMMON", img: "☀️", desc: "Protege os fracos com um escudo banhado pela luz da manhã." },
{ id: "z005", name: "Monge da Montanha", atk: 38, hp: 80, rarity: "COMMON", img: "🏔️", desc: "Medita nas geleiras e golpeia com a precisão do vento." },
{ id: "z006", name: "Batedor da Savana", atk: 45, hp: 50, rarity: "COMMON", img: "🦒", desc: "Olha o horizonte e antecipa os movimentos do inimigo." },
{ id: "z007", name: "Mercenário do Deserto", atk: 32, hp: 95, rarity: "COMMON", img: "🐪", desc: "Luta por moedas, mas sua lealdade é comprada apenas pela sobrevivência." },
{ id: "z008", name: "Lenhadora da Floresta Negra", atk: 27, hp: 110, rarity: "COMMON", img: "🌲", desc: "Seu machado corta tanto árvores quanto armaduras." },
{ id: "z009", name: "Cavaleiro de Lodo", atk: 19, hp: 130, rarity: "COMMON", img: "🧟", desc: "Feito de barro e lama, mas sua resistência é surpreendente." },
{ id: "z010", name: "Atirador de Estilingue", atk: 36, hp: 65, rarity: "COMMON", img: "🎯", desc: "Pequenas pedras, grandes estragos." },
{ id: "z011", name: "Coletor de Ossos", atk: 30, hp: 85, rarity: "COMMON", img: "🦴", desc: "Carrega consigo os restos de inimigos passados." },
{ id: "z012", name: "Curandeiro das Ervas", atk: 15, hp: 125, rarity: "COMMON", img: "🌿", desc: "Conhece cada planta que cura e cada uma que mata." },
{ id: "z013", name: "Pescador do Rio Negro", atk: 24, hp: 100, rarity: "COMMON", img: "🎣", desc: "Pesca nas águas escuras, onde monstros se escondem." },
{ id: "z014", name: "Caçador de Insetos", atk: 40, hp: 45, rarity: "COMMON", img: "🐞", desc: "Especialista em caçar criaturas pequenas e venenosas." },
{ id: "z015", name: "Guerreiro da Tribo Perdida", atk: 33, hp: 88, rarity: "COMMON", img: "🏹", desc: "Seus ancestrais foram esquecidos, mas ele luta por sua memória." },
{ id: "z016", name: "Bardo da Lua", atk: 18, hp: 70, rarity: "COMMON", img: "🌙", desc: "Suas canções embalam os guerreiros para a batalha." },
{ id: "z017", name: "Ferroviário do Submundo", atk: 29, hp: 98, rarity: "COMMON", img: "🚂", desc: "Conduz trens de almas para o além." },
{ id: "z018", name: "Vigia do Farol", atk: 26, hp: 78, rarity: "COMMON", img: "🗼", desc: "Sua luz guia os perdidos e cega os invasores." },
{ id: "z019", name: "Mascate das Sombras", atk: 21, hp: 65, rarity: "COMMON", img: "🧳", desc: "Vende segredos e também os guarda." },
{ id: "z020", name: "Lavadeira da Alma", atk: 17, hp: 108, rarity: "COMMON", img: "🫧", desc: "Lava as almas dos caídos para que possam descansar." },
{ id: "z021", name: "Mineiro de Cristais", atk: 31, hp: 92, rarity: "COMMON", img: "💎", desc: "Escava gemas que brilham como estrelas." },
{ id: "z022", name: "Dançarina do Fogo Fátuo", atk: 39, hp: 50, rarity: "COMMON", img: "🔥", desc: "Gira e dança, deixando rastros de chamas azuis." },
{ id: "z023", name: "Lenhador Noturno", atk: 37, hp: 75, rarity: "COMMON", img: "🌙", desc: "Trabalha melhor quando a lua está alta." },
{ id: "z024", name: "Guarda do Castelo de Areia", atk: 20, hp: 115, rarity: "COMMON", img: "🏰", desc: "Defende um forte que o vento pode levar, mas nunca desiste." },
{ id: "z025", name: "Mendigo da Profecia", atk: 12, hp: 80, rarity: "COMMON", img: "🔮", desc: "Pede esmolas, mas vê o futuro em cada moeda." },
{ id: "z026", name: "Escultor de Nuvens", atk: 23, hp: 70, rarity: "COMMON", img: "☁️", desc: "Molda as nuvens para criar ilusões." },
{ id: "z027", name: "Cervejeiro Anão", atk: 34, hp: 95, rarity: "COMMON", img: "🍺", desc: "Sua bebida dá força, mas também coragem imprudente." },
{ id: "z028", name: "Correio da Meia-Noite", atk: 44, hp: 48, rarity: "COMMON", img: "🦇", desc: "Entrega mensagens e golpes mortais." },
{ id: "z029", name: "Vendedor de Amuletos", atk: 16, hp: 72, rarity: "COMMON", img: "🧿", desc: "Seus amuletos protegem, mas cada um tem um preço." },
{ id: "z030", name: "Trapezista da Morte", atk: 41, hp: 40, rarity: "COMMON", img: "🎪", desc: "Equilibra-se entre a vida e a morte com cada salto." },
{ id: "z031", name: "Cozinheiro do Acampamento", atk: 25, hp: 85, rarity: "COMMON", img: "🥘", desc: "Tempera seus golpes com ervas ardentes." },
{ id: "z032", name: "Cavaleiro de Palha", atk: 14, hp: 110, rarity: "COMMON", img: "🧑‍🌾", desc: "Frágil por fora, mas resistente como o camponês que luta pela terra." },
{ id: "z033", name: "Mago das Sombras", atk: 46, hp: 38, rarity: "COMMON", img: "🌚", desc: "Dança com as sombras, atacando sem ser visto." },
{ id: "z034", name: "Batedor da Tundra", atk: 35, hp: 70, rarity: "COMMON", img: "❄️", desc: "Seus passos são silenciosos na neve." },
{ id: "z035", name: "Mestre de Bestas", atk: 28, hp: 90, rarity: "COMMON", img: "🐻", desc: "Comunica-se com os animais da floresta." },
{ id: "z036", name: "Encantador de Serpentes", atk: 32, hp: 60, rarity: "COMMON", img: "🐍", desc: "Faz as cobras dançarem e atacarem." },
{ id: "z037", name: "Cavaleiro de Bambu", atk: 22, hp: 105, rarity: "COMMON", img: "🎋", desc: "Leve e flexível, desvia de golpes com facilidade." },
{ id: "z038", name: "Artesão de Máscaras", atk: 29, hp: 80, rarity: "COMMON", img: "🎭", desc: "Suas máscaras contam histórias e enganam inimigos." },
{ id: "z039", name: "Batedor do Deserto", atk: 40, hp: 55, rarity: "COMMON", img: "🐫", desc: "Conhece cada duna como se fosse seu lar." },
{ id: "z040", name: "Lutador de Rua", atk: 47, hp: 45, rarity: "COMMON", img: "🥊", desc: "Aprendeu a lutar na sarjeta e nunca esqueceu." },
{ id: "z041", name: "Sapateiro Élfico", atk: 20, hp: 82, rarity: "COMMON", img: "👢", desc: "Seus sapatos são tão silenciosos quanto seus passos." },
{ id: "z042", name: "Mercador de Ventos", atk: 18, hp: 78, rarity: "COMMON", img: "🎐", desc: "Vende a direção do vento para quem precisa." },
{ id: "z043", name: "Guarda Noturno", atk: 33, hp: 68, rarity: "COMMON", img: "🌃", desc: "Patrulha as ruas enquanto os outros dormem." },
{ id: "z044", name: "Pescador de Estrelas", atk: 26, hp: 75, rarity: "COMMON", img: "⭐", desc: "Pesca estrelas cadentes no horizonte." },
{ id: "z045", name: "Mago da Neve", atk: 30, hp: 55, rarity: "COMMON", img: "☃️", desc: "Conjura bolas de neve e frio cortante." },
{ id: "z046", name: "Ferroviário Errante", atk: 34, hp: 85, rarity: "COMMON", img: "🚂", desc: "Viaja por trilhas esquecidas, entregando carga e golpes." },
{ id: "z047", name: "Bruxa da Lua Minguante", atk: 39, hp: 50, rarity: "COMMON", img: "🌘", desc: "Canaliza o poder da lua em seus feitiços." },
{ id: "z048", name: "Caçador de Cogumelos", atk: 24, hp: 95, rarity: "COMMON", img: "🍄", desc: "Conhece os fungos que curam e os que matam." },
{ id: "z049", name: "Ourives dos Abismos", atk: 28, hp: 80, rarity: "COMMON", img: "💍", desc: "Forja joias com metal das profundezas." },
{ id: "z050", name: "Navegante dos Céus", atk: 37, hp: 65, rarity: "COMMON", img: "☁️", desc: "Pilota balões e ataca das alturas." },
{ id: "z051", name: "Cavaleiro de Espuma", atk: 18, hp: 115, rarity: "COMMON", img: "🌊", desc: "Feito de espuma do mar, mas sua fúria é real." },
{ id: "z052", name: "Mago da Terra", atk: 32, hp: 75, rarity: "COMMON", img: "🌍", desc: "Levanta pedras para se proteger e atacar." },
{ id: "z053", name: "Ladrão de Jóias", atk: 44, hp: 40, rarity: "COMMON", img: "💎", desc: "Rouba tesouros e vidas com a mesma habilidade." },
{ id: "z054", name: "Padeiro de Ferro", atk: 25, hp: 90, rarity: "COMMON", img: "🍞", desc: "Seu pão é duro, seus punhos são mais duros." },
{ id: "z055", name: "Barqueiro do Submundo", atk: 35, hp: 70, rarity: "COMMON", img: "⛵", desc: "Transporta almas pelo rio dos mortos." },
{ id: "z056", name: "Jardineiro de Rosas", atk: 27, hp: 85, rarity: "COMMON", img: "🌹", desc: "Cultiva rosas com espinhos venenosos." },
{ id: "z057", name: "Mestre de Forja", atk: 42, hp: 48, rarity: "COMMON", img: "🔨", desc: "Martela o ferro e os inimigos com igual vigor." },
{ id: "z058", name: "Cavaleiro de Vidro", atk: 20, hp: 110, rarity: "COMMON", img: "🪞", desc: "Brilha, mas pode quebrar se for atingido." },
{ id: "z059", name: "Bardo da Taverna", atk: 16, hp: 75, rarity: "COMMON", img: "🎵", desc: "Suas músicas inspiram e irritam." },
{ id: "z060", name: "Mensageiro das Sombras", atk: 41, hp: 40, rarity: "COMMON", img: "🦇", desc: "Entrega notícias e golpes furtivos." },
{ id: "z061", name: "Cavaleiro de Osso", atk: 22, hp: 100, rarity: "COMMON", img: "🦴", desc: "Feito de ossos, mas ainda luta." },
{ id: "z062", name: "Alquimista Novato", atk: 30, hp: 55, rarity: "COMMON", img: "⚗️", desc: "Suas poções são imprevisíveis." },
{ id: "z063", name: "Pescador de Pérolas", atk: 24, hp: 85, rarity: "COMMON", img: "🐚", desc: "Mergulha fundo para encontrar tesouros." },
{ id: "z064", name: "Batedor da Neve", atk: 28, hp: 70, rarity: "COMMON", img: "🌨️", desc: "Rastreia pegadas na neve." },
{ id: "z065", name: "Cavaleiro de Folhas", atk: 21, hp: 88, rarity: "COMMON", img: "🍃", desc: "Leve como uma folha ao vento." },
{ id: "z066", name: "Mago do Vento", atk: 38, hp: 45, rarity: "COMMON", img: "💨", desc: "Controla as correntes de ar." },
{ id: "z067", name: "Ferreiro Errante", atk: 26, hp: 78, rarity: "COMMON", img: "⚒️", desc: "Forja armas onde quer que vá." },
{ id: "z068", name: "Caçador de Relíquias", atk: 33, hp: 65, rarity: "COMMON", img: "🏺", desc: "Caça tesouros antigos." },
{ id: "z069", name: "Cavaleiro de Palha", atk: 14, hp: 120, rarity: "COMMON", img: "🧙", desc: "Parece frágil, mas é resistente." },
{ id: "z070", name: "Aprendiz de Mago", atk: 35, hp: 50, rarity: "COMMON", img: "🔮", desc: "Ainda aprende a controlar o poder." },
{ id: "z071", name: "Mercenário Anão", atk: 30, hp: 72, rarity: "COMMON", img: "💰", desc: "Luta por ouro, não por honra." },
{ id: "z072", name: "Guardião da Ponte", atk: 25, hp: 95, rarity: "COMMON", img: "🌉", desc: "Ninguém passa sem sua permissão." },
{ id: "z073", name: "Pescador de Sonhos", atk: 20, hp: 80, rarity: "COMMON", img: "💤", desc: "Rouba sonhos para se fortalecer." },
{ id: "z074", name: "Cavaleiro de Cera", atk: 22, hp: 100, rarity: "COMMON", img: "🕯️", desc: "Derrete, mas luta até o fim." },
{ id: "z075", name: "Batedor do Pântano", atk: 29, hp: 75, rarity: "COMMON", img: "🐊", desc: "Conhece os perigos do pântano." },
{ id: "z076", name: "Mago da Poeira", atk: 36, hp: 48, rarity: "COMMON", img: "💨", desc: "Usa poeira para cegar inimigos." },
{ id: "z077", name: "Cavaleiro de Madeira", atk: 23, hp: 92, rarity: "COMMON", img: "🪵", desc: "Duro como madeira de lei." },
{ id: "z078", name: "Lutador de Taverna", atk: 43, hp: 42, rarity: "COMMON", img: "🍻", desc: "Nunca perde uma briga de bar." },
{ id: "z079", name: "Mestre de Cães", atk: 27, hp: 78, rarity: "COMMON", img: "🐕", desc: "Seus cães lutam ao seu lado." },
{ id: "z080", name: "Arqueiro Élfico", atk: 34, hp: 52, rarity: "COMMON", img: "🧝", desc: "Precisão élfica em cada flecha." },
{ id: "z081", name: "Cavaleiro de Cobre", atk: 24, hp: 88, rarity: "COMMON", img: "🔶", desc: "Barato, mas resistente." },
{ id: "z082", name: "Jardineiro de Espinhos", atk: 31, hp: 62, rarity: "COMMON", img: "🌵", desc: "Planta espinhos no campo de batalha." },
{ id: "z083", name: "Mestre de Bonecos", atk: 22, hp: 76, rarity: "COMMON", img: "🎎", desc: "Controla bonecos como marionetes." },
{ id: "z084", name: "Cavaleiro de Cortiça", atk: 18, hp: 115, rarity: "COMMON", img: "🪵", desc: "Leve e flutuante, difícil de acertar." },
{ id: "z085", name: "Batedor do Vulcão", atk: 33, hp: 58, rarity: "COMMON", img: "🌋", desc: "Sobrevive ao calor extremo." },
{ id: "z086", name: "Mago do Gelo", atk: 39, hp: 48, rarity: "COMMON", img: "🧊", desc: "Congela o ar ao redor." },
{ id: "z087", name: "Cavaleiro de Lã", atk: 17, hp: 110, rarity: "COMMON", img: "🐑", desc: "Macio, mas surpreendentemente durável." },
{ id: "z088", name: "Pescador de Tesouros", atk: 26, hp: 72, rarity: "COMMON", img: "💎", desc: "Pesca joias do fundo do mar." },
{ id: "z089", name: "Mestre de Corvos", atk: 30, hp: 58, rarity: "COMMON", img: "🐦", desc: "Seus corvos atacam em bando." },
{ id: "z090", name: "Cavaleiro de Bambu", atk: 24, hp: 95, rarity: "COMMON", img: "🎋", desc: "Flexível e resistente." },
{ id: "z091", name: "Batedor do Céu", atk: 35, hp: 50, rarity: "COMMON", img: "🪁", desc: "Observa tudo das alturas." },
{ id: "z092", name: "Mago da Lava", atk: 40, hp: 44, rarity: "COMMON", img: "🌋", desc: "Conjura pequenas bolhas de lava." },
{ id: "z093", name: "Cavaleiro de Barro", atk: 22, hp: 98, rarity: "COMMON", img: "🧱", desc: "Feito de barro, mas resistente." },
{ id: "z094", name: "Pescador de Estrelas", atk: 28, hp: 65, rarity: "COMMON", img: "⭐", desc: "Pesca estrelas cadentes." },
{ id: "z095", name: "Mestre de Insetos", atk: 25, hp: 80, rarity: "COMMON", img: "🐞", desc: "Comanda enxames de insetos." },
{ id: "z096", name: "Cavaleiro de Espuma", atk: 20, hp: 105, rarity: "COMMON", img: "🌊", desc: "Surfa na espuma e no combate." },
{ id: "z097", name: "Batedor da Montanha", atk: 32, hp: 60, rarity: "COMMON", img: "⛰️", desc: "Escala montanhas para atacar." },
{ id: "z098", name: "Mago da Areia", atk: 37, hp: 48, rarity: "COMMON", img: "🏜️", desc: "Conjura tempestades de areia." },
{ id: "z099", name: "Cavaleiro de Gelatina", atk: 16, hp: 120, rarity: "COMMON", img: "🍮", desc: "Parece frágil, mas absorve golpes." },
{ id: "z100", name: "Pescador de Neblina", atk: 27, hp: 75, rarity: "COMMON", img: "🌫️", desc: "Pesca na névoa e ataca sem ser visto." },
{ id: "z101", name: "Mestre de Gatos", atk: 33, hp: 55, rarity: "COMMON", img: "🐱", desc: "Seus gatos atacam com garras afiadas." },
{ id: "z102", name: "Cavaleiro de Papel", atk: 23, hp: 88, rarity: "COMMON", img: "📄", desc: "Frágil, mas corta como papel." },
{ id: "z103", name: "Lapidador de Cristais", atk: 22, hp: 80, rarity: "COMMON", img: "💎", desc: "Polia gemas com mãos firmes e golpes certeiros." },
{ id: "z104", name: "Corredor das Dunas", atk: 38, hp: 50, rarity: "COMMON", img: "🏜️", desc: "Atravessa desertos em velocidade assustadora." },
{ id: "z105", name: "Guarda da Cidadela", atk: 25, hp: 95, rarity: "COMMON", img: "🏰", desc: "Fiel ao seu posto, mesmo sob tempestade." },
{ id: "z106", name: "Ceifeiro de Colheitas", atk: 34, hp: 62, rarity: "COMMON", img: "🌾", desc: "Sua foice ceifa o trigo e a vida dos inimigos." },
{ id: "z107", name: "Escavador de Túneis", atk: 20, hp: 90, rarity: "COMMON", img: "⛏️", desc: "Abre passagem por montanhas e exércitos." },
{ id: "z108", name: "Arqueiro do Bosque", atk: 36, hp: 52, rarity: "COMMON", img: "🌳", desc: "Atira das copas sem ser visto." },
{ id: "z109", name: "Pescador de Lendas", atk: 21, hp: 82, rarity: "COMMON", img: "🎣", desc: "Puxa histórias e peixes em igual medida." },
{ id: "z110", name: "Ferroviário Anão", atk: 30, hp: 72, rarity: "COMMON", img: "🚂", desc: "Conduz trens e martela inimigos." },
{ id: "z111", name: "Batedor Noturno", atk: 40, hp: 45, rarity: "COMMON", img: "🌙", desc: "Age sob o manto da noite." },
{ id: "z112", name: "Mercador de Ventos", atk: 18, hp: 85, rarity: "COMMON", img: "🎐", desc: "Negocia com o vento e ganha vantagem." },
{ id: "z113", name: "Tropeiro Valente", atk: 26, hp: 92, rarity: "COMMON", img: "🐴", desc: "Conduz mulas e socos pesados." },
{ id: "z114", name: "Lenhadora da Aurora", atk: 28, hp: 70, rarity: "COMMON", img: "🪓", desc: "Corta madeira e adversários com o mesmo machado." },
{ id: "z115", name: "Mestre das Armadilhas", atk: 39, hp: 48, rarity: "COMMON", img: "🔧", desc: "Monta engenhocas que prendem o inimigo." },
{ id: "z116", name: "Dançarina das Chamas", atk: 42, hp: 40, rarity: "COMMON", img: "💃", desc: "Seus giros espalham fagulhas." },
{ id: "z117", name: "Cozinheiro da Taverna", atk: 16, hp: 98, rarity: "COMMON", img: "🍲", desc: "Luta com panelas e tempero mortal." },
{ id: "z118", name: "Mensageiro Élfico", atk: 33, hp: 56, rarity: "COMMON", img: "🧝", desc: "Leva notícias e flechas na mesma velocidade." },
{ id: "z119", name: "Ourives das Sombras", atk: 25, hp: 74, rarity: "COMMON", img: "💍", desc: "Forja anéis que escurecem o dia." },
{ id: "z120", name: "Trincheiro dos Pântanos", atk: 28, hp: 84, rarity: "COMMON", img: "🐊", desc: "Cava trincheiras e armadilhas no lodo." },
{ id: "z121", name: "Vigia do Céu", atk: 36, hp: 46, rarity: "COMMON", img: "🔭", desc: "Observa estrelas e antevê ataques." },
{ id: "z122", name: "Cavaleiro de Junco", atk: 20, hp: 102, rarity: "COMMON", img: "🌿", desc: "Leve e flexível, difícil de derrubar." },
{ id: "z123", name: "Golem de Argila", atk: 22, hp: 110, rarity: "COMMON", img: "🧱", desc: "Lento, mas resistente como barro cozido." },
{ id: "z124", name: "Esqueleto Legionário", atk: 30, hp: 66, rarity: "COMMON", img: "💀", desc: "Parte de um exército que nunca se rende." },
{ id: "z125", name: "Bruxa da Colina", atk: 38, hp: 44, rarity: "COMMON", img: "🧹", desc: "Prepara poções e maldições simples." },
{ id: "z126", name: "Milicano das Ruas", atk: 27, hp: 80, rarity: "COMMON", img: "🗡️", desc: "Defende seu bairro com facas e coragem." },
{ id: "z127", name: "Bardo da Fronteira", atk: 20, hp: 68, rarity: "COMMON", img: "🎵", desc: "Canta canções que inspiram ou aterrorizam." },
{ id: "z128", name: "Lutador de Arena", atk: 44, hp: 44, rarity: "COMMON", img: "🥊", desc: "Vive e morre por aplausos." },
{ id: "z129", name: "Caçador de Cogumelos", atk: 24, hp: 74, rarity: "COMMON", img: "🍄", desc: "Conhece venenos e antídotos da floresta." },
{ id: "z130", name: "Pastor de Nuvens", atk: 18, hp: 84, rarity: "COMMON", img: "☁️", desc: "Guia as nuvens e as usas como escudo." },
{ id: "z131", name: "Mago do Crepúsculo", atk: 34, hp: 56, rarity: "COMMON", img: "🌆", desc: "Canaliza a energia do fim do dia." },
{ id: "z132", name: "Cavaleiro de Palha", atk: 14, hp: 115, rarity: "COMMON", img: "🧑‍🌾", desc: "Frágil à vista, resistente na prática." },
{ id: "z133", name: "Aprendiz de Alquimista", atk: 32, hp: 60, rarity: "COMMON", img: "⚗️", desc: "Suas misturas explodem com frequência." },
{ id: "z134", name: "Carteiro Noturno", atk: 39, hp: 48, rarity: "COMMON", img: "📨", desc: "Entregava cartas, agora entrega golpes." },
{ id: "z135", name: "Vendedor de Amuletos", atk: 20, hp: 76, rarity: "COMMON", img: "🔮", desc: "Vende proteções e também as usa." },
{ id: "z136", name: "Navegante de Estrelas", atk: 30, hp: 64, rarity: "COMMON", img: "🧭", desc: "Lê mapas celestes para se orientar." },
{ id: "z137", name: "Lençol de Fumaça", atk: 26, hp: 88, rarity: "COMMON", img: "💨", desc: "Desvia com cortinas de fumaça." },
{ id: "z138", name: "Goleiro Goblin", atk: 28, hp: 72, rarity: "COMMON", img: "🥅", desc: "Bloqueia ataques com reflexos rápidos." },
{ id: "z139", name: "Cavaleira de Couro", atk: 27, hp: 86, rarity: "COMMON", img: "🐎", desc: "Leve e ágil, sempre pronta para carga." },
{ id: "z140", name: "Mestre de Mastins", atk: 36, hp: 54, rarity: "COMMON", img: "🐕", desc: "Seus cães atacam em matilha." },
{ id: "z141", name: "Artífice de Relíquias", atk: 22, hp: 78, rarity: "COMMON", img: "🏺", desc: "Conserta artefatos e quebra adversários." },
{ id: "z142", name: "Dançarino do Fogo", atk: 40, hp: 44, rarity: "COMMON", img: "🔥", desc: "Gira e lança labaredas." },
{ id: "z143", name: "Tropeço Noturno", atk: 35, hp: 58, rarity: "COMMON", img: "🦇", desc: "Move-se em silêncio, golpeia nas costas." },
{ id: "z144", name: "Jardineiro de Espinhos", atk: 24, hp: 82, rarity: "COMMON", img: "🌵", desc: "Planta espinhos e os usa como lanças." },
{ id: "z145", name: "Pesadelo Pequeno", atk: 44, hp: 38, rarity: "COMMON", img: "😈", desc: "Pequeno mas assustador." },
{ id: "z146", name: "Mago da Poeira", atk: 38, hp: 48, rarity: "COMMON", img: "🌫️", desc: "Cega com nuvens de poeira." },
{ id: "z147", name: "Monge das Rochas", atk: 26, hp: 92, rarity: "COMMON", img: "🪨", desc: "Treina golpes que quebram pedras." },
{ id: "z148", name: "Esfinge Menor", atk: 32, hp: 62, rarity: "COMMON", img: "🦁", desc: "Decifra enigmas e ataca sem aviso." },
{ id: "z149", name: "Grifo Filhote", atk: 40, hp: 52, rarity: "COMMON", img: "🦅", desc: "Ainda aprende a voar, mas já arranha." },
{ id: "z150", name: "Lobo das Neves", atk: 36, hp: 56, rarity: "COMMON", img: "🐺", desc: "Caça em bando nas montanhas geladas." },
{ id: "z151", name: "Pantera da Sombra", atk: 44, hp: 48, rarity: "COMMON", img: "🐆", desc: "Surge da escuridão e desaparece." },
{ id: "z152", name: "Urso Marrom", atk: 46, hp: 68, rarity: "COMMON", img: "🐻", desc: "Força bruta, pele grossa e mordida forte." },

// ── RAROS ──────────────────────────────────────────────────────
{ id: "z153", name: "Cavaleiro de Obsidiana", atk: 48, hp: 200, rarity: "RARE", img: "🪨", desc: "Sua armadura é feita de vidro vulcânico." },
{ id: "z154", name: "Maga das Tempestades", atk: 62, hp: 160, rarity: "RARE", img: "⛈️", desc: "Conjura raios e ventos furiosos." },
{ id: "z155", name: "Paladino da Penitência", atk: 40, hp: 240, rarity: "RARE", img: "⚜️", desc: "Expia seus pecados com a espada." },
{ id: "z156", name: "Feiticeiro de Runas", atk: 58, hp: 155, rarity: "RARE", img: "🪷", desc: "Desenha runas que explodem em poder." },
{ id: "z157", name: "Berserker de Mármore", atk: 70, hp: 135, rarity: "RARE", img: "🗿", desc: "Pele de pedra, fúria de vulcão." },
{ id: "z158", name: "Monge da Neblina", atk: 48, hp: 210, rarity: "RARE", img: "🌫️", desc: "Luta entre as brumas com precisão." },
{ id: "z159", name: "Vampira do Crepúsculo", atk: 56, hp: 185, rarity: "RARE", img: "🌆", desc: "Suga a energia no fim da tarde." },
{ id: "z160", name: "Guardião do Lago", atk: 42, hp: 235, rarity: "RARE", img: "🏞️", desc: "Protetor das águas sagradas." },
{ id: "z161", name: "Pirata do Asfalto", atk: 66, hp: 145, rarity: "RARE", img: "🏴‍☠️", desc: "Navega nas ruas com sua tripulação." },
{ id: "z162", name: "Samurai da Folha", atk: 62, hp: 155, rarity: "RARE", img: "🍂", desc: "Sua lâmina corta como o vento outonal." },
{ id: "z163", name: "Atirador da Aurora", atk: 52, hp: 175, rarity: "RARE", img: "🌅", desc: "Flechas tingidas de luz do amanhecer." },
{ id: "z164", name: "Sacerdotisa do Eco", atk: 44, hp: 225, rarity: "RARE", img: "🔊", desc: "Reza para os espíritos do som." },
{ id: "z165", name: "Xamã do Fogo", atk: 58, hp: 180, rarity: "RARE", img: "🔥", desc: "Invoca chamas ancestrais." },
{ id: "z166", name: "Cavaleira do Vento", atk: 50, hp: 195, rarity: "RARE", img: "🌬️", desc: "Monta uma nuvem e ataca de cima." },
{ id: "z167", name: "Assassino das Sombras", atk: 68, hp: 138, rarity: "RARE", img: "🔪", desc: "Nunca visto, sempre letal." },
{ id: "z168", name: "Arqueira do Gelo", atk: 60, hp: 165, rarity: "RARE", img: "🧊", desc: "Suas flechas congelam o inimigo." },
{ id: "z169", name: "Bardo das Marés", atk: 42, hp: 240, rarity: "RARE", img: "🌊", desc: "Sua música atrai as ondas." },
{ id: "z170", name: "Domador de Feras", atk: 56, hp: 160, rarity: "RARE", img: "🐅", desc: "Luta lado a lado com tigres e ursos." },
{ id: "z171", name: "Templário do Sol", atk: 62, hp: 150, rarity: "RARE", img: "☀️", desc: "Empunha uma espada de luz solar." },
{ id: "z172", name: "Feiticeira do Caos", atk: 50, hp: 205, rarity: "RARE", img: "🌀", desc: "Conjura bolhas de realidade distorcida." },
{ id: "z173", name: "Caçador de Dragões", atk: 66, hp: 142, rarity: "RARE", img: "🐲", desc: "Já matou três dragões jovens." },
{ id: "z174", name: "Monarca do Ocaso", atk: 44, hp: 235, rarity: "RARE", img: "🌇", desc: "Rei do crepúsculo e das sombras." },
{ id: "z175", name: "Guerreiro de Vidro", atk: 62, hp: 158, rarity: "RARE", img: "🪞", desc: "Brilha e fere com fragmentos." },
{ id: "z176", name: "Xerife do Inferno", atk: 54, hp: 190, rarity: "RARE", img: "🤠", desc: "Mantém a lei nas terras ardentes." },
{ id: "z177", name: "Sacerdote do Vazio", atk: 46, hp: 220, rarity: "RARE", img: "🌀", desc: "Reza ao nada e recebe poder." },
{ id: "z178", name: "Lutadora de Garras", atk: 66, hp: 145, rarity: "RARE", img: "🐾", desc: "Luta com garras de metal afiadas." },
{ id: "z179", name: "Guardião do Trovão", atk: 40, hp: 250, rarity: "RARE", img: "⚡", desc: "Absorve raios e os devolve." },
{ id: "z180", name: "Espectro do Abismo", atk: 58, hp: 168, rarity: "RARE", img: "👻", desc: "Vaga entre dimensões." },
{ id: "z181", name: "Capitã da Tempestade", atk: 64, hp: 148, rarity: "RARE", img: "⛵", desc: "Comanda navios e trovões." },
{ id: "z182", name: "Alquimista do Fogo", atk: 56, hp: 172, rarity: "RARE", img: "🧪", desc: "Suas poções queimam ou curam." },
{ id: "z183", name: "Ronin da Lua", atk: 62, hp: 155, rarity: "RARE", img: "🌕", desc: "Lâmina banhada em luz lunar." },
{ id: "z184", name: "Bruxa Carmesim", atk: 48, hp: 215, rarity: "RARE", img: "🩸", desc: "Magia com custo de sangue." },
{ id: "z185", name: "Cavaleiro de Ossos", atk: 46, hp: 230, rarity: "RARE", img: "🦴", desc: "Monta um esqueleto de cavalo." },
{ id: "z186", name: "Maga do Cristal", atk: 60, hp: 170, rarity: "RARE", img: "💠", desc: "Atira estilhaços de cristal." },
{ id: "z187", name: "Paladino do Gelo", atk: 44, hp: 240, rarity: "RARE", img: "❄️", desc: "Cura com a pureza do gelo." },
{ id: "z188", name: "Feiticeiro de Areia", atk: 62, hp: 155, rarity: "RARE", img: "🏜️", desc: "Controla tempestades de areia." },
{ id: "z189", name: "Berserker de Lava", atk: 72, hp: 140, rarity: "RARE", img: "🌋", desc: "Sua raiva derrete o chão." },
{ id: "z190", name: "Monge do Eco", atk: 52, hp: 198, rarity: "RARE", img: "🔊", desc: "Usa o som para desorientar." },
{ id: "z191", name: "Vampira do Alvorecer", atk: 62, hp: 180, rarity: "RARE", img: "🌅", desc: "Última da linhagem noturna." },
{ id: "z192", name: "Guardião das Águas", atk: 42, hp: 255, rarity: "RARE", img: "💧", desc: "Protege rios e lagos." },
{ id: "z193", name: "Pirata das Nuvens", atk: 66, hp: 150, rarity: "RARE", img: "☁️", desc: "Navega em navios voadores." },
{ id: "z194", name: "Samurai do Crepúsculo", atk: 64, hp: 165, rarity: "RARE", img: "🌆", desc: "Lâmina que brilha no fim do dia." },
{ id: "z195", name: "Atirador do Caos", atk: 56, hp: 175, rarity: "RARE", img: "🎯", desc: "Sua flecha encontra sempre o alvo." },
{ id: "z196", name: "Sacerdotisa do Vulcão", atk: 48, hp: 225, rarity: "RARE", img: "🌋", desc: "Oferece cinzas aos deuses." },
{ id: "z197", name: "Dragão de Prata", atk: 74, hp: 160, rarity: "RARE", img: "🐉", desc: "Escamas prateadas, sopro de luz." },
{ id: "z198", name: "Anjo Caído da Lua", atk: 68, hp: 170, rarity: "RARE", img: "🌙", desc: "Asas de prata, coração negro." },
{ id: "z199", name: "Golem de Ferro", atk: 52, hp: 245, rarity: "RARE", img: "🔩", desc: "Forjado com ferro e vontade." },
{ id: "z200", name: "Necromante do Gelo", atk: 66, hp: 145, rarity: "RARE", img: "🧊", desc: "Levanta mortos congelados." },
{ id: "z201", name: "Titã da Cera", atk: 76, hp: 150, rarity: "RARE", img: "🕯️", desc: "Derrete e se molda novamente." },
{ id: "z202", name: "Sereia da Aurora", atk: 60, hp: 185, rarity: "RARE", img: "🌅", desc: "Canta na luz do amanhecer." },
{ id: "z203", name: "Centauro das Estrelas", atk: 58, hp: 195, rarity: "RARE", img: "🐴", desc: "Galopa entre constelações." },
{ id: "z204", name: "Harpia Noturna", atk: 64, hp: 155, rarity: "RARE", img: "🦅", desc: "Grita e ataca nas sombras." },
{ id: "z205", name: "Quimera de Fogo", atk: 72, hp: 145, rarity: "RARE", img: "🐲", desc: "Cabeças de leão, cabra e serpente flamejante." },
{ id: "z206", name: "Mantícora Venenosa", atk: 68, hp: 160, rarity: "RARE", img: "🦂", desc: "Cauda de escorpião e dentes de leão." },
{ id: "z207", name: "Basilisco de Pedra", atk: 60, hp: 175, rarity: "RARE", img: "🐍", desc: "Olhar que petrifica lentamente." },
{ id: "z208", name: "Cockatrice Veloz", atk: 66, hp: 140, rarity: "RARE", img: "🐔", desc: "Garras afiadas e veneno rápido." },
{ id: "z209", name: "Grifo do Sol", atk: 70, hp: 165, rarity: "RARE", img: "🦁", desc: "Águia e leão sob a luz do sol." },
{ id: "z210", name: "Pégaso Noturno", atk: 54, hp: 190, rarity: "RARE", img: "🐴", desc: "Voa sob a lua e ataca com cascos." },
{ id: "z211", name: "Unicórnio Sombrio", atk: 58, hp: 185, rarity: "RARE", img: "🦄", desc: "Chifre negro, magia das trevas." },
{ id: "z212", name: "Lobo de Prata", atk: 64, hp: 170, rarity: "RARE", img: "🐺", desc: "Uiva para a lua e caça em bando." },
{ id: "z213", name: "Raposa de Fogo", atk: 62, hp: 155, rarity: "RARE", img: "🦊", desc: "Astúcia e chamas." },
{ id: "z214", name: "Pantera Fantasma", atk: 70, hp: 145, rarity: "RARE", img: "🐆", desc: "Desaparece e ataca de surpresa." },
{ id: "z215", name: "Tigre de Gelo", atk: 72, hp: 160, rarity: "RARE", img: "🐅", desc: "Presas de gelo, rugido congelante." },
{ id: "z216", name: "Urso Polar Ancestral", atk: 66, hp: 195, rarity: "RARE", img: "🐻‍❄️", desc: "Força bruta e pelagem gelada." },
{ id: "z217", name: "Alce Celestial", atk: 58, hp: 200, rarity: "RARE", img: "🦌", desc: "Chifres que tocam as estrelas." },
{ id: "z218", name: "Búfalo de Sombras", atk: 64, hp: 185, rarity: "RARE", img: "🐃", desc: "Carga escura que derruba tudo." },
{ id: "z219", name: "Rinoceronte de Aço", atk: 72, hp: 175, rarity: "RARE", img: "🦏", desc: "Pele de metal e chifre perfurante." },
{ id: "z220", name: "Hipopótamo de Lava", atk: 70, hp: 190, rarity: "RARE", img: "🦛", desc: "Mordida quente como magma." },
{ id: "z221", name: "Crocodilo Abissal", atk: 74, hp: 165, rarity: "RARE", img: "🐊", desc: "Mandíbulas que esmagam navios." },
{ id: "z222", name: "Iguana do Sol", atk: 56, hp: 180, rarity: "RARE", img: "🦎", desc: "Língua longa e golpes ardentes." },
{ id: "z223", name: "Tartaruga de Cristal", atk: 48, hp: 240, rarity: "RARE", img: "🐢", desc: "Carapaça de diamante, quase inquebrável." },
{ id: "z224", name: "Águia da Tempestade", atk: 68, hp: 155, rarity: "RARE", img: "🦅", desc: "Voa entre raios e relâmpagos." },
{ id: "z225", name: "Falcão Noturno", atk: 66, hp: 148, rarity: "RARE", img: "🦅", desc: "Olhos de fogo, garras de gelo." },
{ id: "z226", name: "Corvo das Sombras", atk: 60, hp: 170, rarity: "RARE", img: "🐦", desc: "Mensageiro dos mortos." },
{ id: "z227", name: "Coruja Sábia", atk: 52, hp: 195, rarity: "RARE", img: "🦉", desc: "Golpes precisos e silenciosos." },
{ id: "z228", name: "Ouriço de Fogo", atk: 64, hp: 140, rarity: "RARE", img: "🦔", desc: "Espinhos flamejantes que ferem quem ataca." },
{ id: "z229", name: "Lontra das Marés", atk: 58, hp: 175, rarity: "RARE", img: "🦦", desc: "Ágil na água e na terra." },
{ id: "z230", name: "Texugo de Ferro", atk: 70, hp: 160, rarity: "RARE", img: "🦡", desc: "Pele dura e mordida esmagadora." },
{ id: "z231", name: "Camaleão Arcano", atk: 54, hp: 185, rarity: "RARE", img: "🦎", desc: "Muda de cor e de estratégia." },
{ id: "z232", name: "Macaco Guerreiro", atk: 66, hp: 150, rarity: "RARE", img: "🐒", desc: "Saltos e golpes rápidos." },
{ id: "z233", name: "Javali de Obsidiana", atk: 72, hp: 170, rarity: "RARE", img: "🐗", desc: "Presas de vidro vulcânico." },
{ id: "z234", name: "Gavião Peregrino", atk: 76, hp: 135, rarity: "RARE", img: "🦅", desc: "O ataque mais rápido entre os raros." },
{ id: "z235", name: "Morcego das Trevas", atk: 62, hp: 155, rarity: "RARE", img: "🦇", desc: "Suga a energia do oponente." },
{ id: "z236", name: "Sapo Venenoso", atk: 58, hp: 165, rarity: "RARE", img: "🐸", desc: "Língua pegajosa e veneno letal." },
{ id: "z237", name: "Formiga de Aço", atk: 64, hp: 175, rarity: "RARE", img: "🐜", desc: "Trabalho em equipe, força bruta." },
{ id: "z238", name: "Besouro Titan", atk: 76, hp: 160, rarity: "RARE", img: "🪲", desc: "Chifre poderoso, carapaça dura." },
{ id: "z239", name: "Libélula Elétrica", atk: 60, hp: 145, rarity: "RARE", img: "🪰", desc: "Esquiva e picada precisa." },
{ id: "z240", name: "Joaninha Cósmica", atk: 48, hp: 190, rarity: "RARE", img: "🐞", desc: "Sorte e pequenas explosões." },
{ id: "z241", name: "Escorpião de Fogo", atk: 70, hp: 148, rarity: "RARE", img: "🦂", desc: "Veneno que queima e paralisa." },
{ id: "z242", name: "Aranha Tecedeira", atk: 62, hp: 155, rarity: "RARE", img: "🕷️", desc: "Teias que prendem o inimigo." },
{ id: "z243", name: "Centopeia Blindada", atk: 58, hp: 185, rarity: "RARE", img: "🐛", desc: "Muitas patas, muita resistência." },
{ id: "z244", name: "Caracol de Ferro", atk: 44, hp: 230, rarity: "RARE", img: "🐌", desc: "Devagar, mas quase inquebrável." },
{ id: "z245", name: "Polvo Estrategista", atk: 66, hp: 155, rarity: "RARE", img: "🐙", desc: "Oito tentáculos, oito golpes." },
{ id: "z246", name: "Água-viva Elétrica", atk: 72, hp: 142, rarity: "RARE", img: "🪼", desc: "Choques que desorientam." },
{ id: "z247", name: "Cavalo-marinho Dançarino", atk: 54, hp: 180, rarity: "RARE", img: "🐴", desc: "Gracioso e mortal." },
{ id: "z248", name: "Peixe-espada", atk: 76, hp: 148, rarity: "RARE", img: "🐟", desc: "Nadadeira afiada como lâmina." },
{ id: "z249", name: "Tubarão Abissal", atk: 68, hp: 160, rarity: "RARE", img: "🦈", desc: "Dentes serrilhados e fome eterna." },
{ id: "z250", name: "Baleia Cantora", atk: 56, hp: 210, rarity: "RARE", img: "🐋", desc: "Canções que atordoam." },
{ id: "z251", name: "Golfinho Arremessador", atk: 62, hp: 155, rarity: "RARE", img: "🐬", desc: "Arremessa conchas com precisão." },
{ id: "z252", name: "Lula Luminescente", atk: 66, hp: 148, rarity: "RARE", img: "🦑", desc: "Brilho ofuscante e tentáculos." },
{ id: "z253", name: "Sereia Menor", atk: 50, hp: 190, rarity: "RARE", img: "🧜‍♀️", desc: "Canto hipnótico, golpes suaves." },
{ id: "z254", name: "Tritão Guerreiro", atk: 62, hp: 175, rarity: "RARE", img: "🧜", desc: "Lança de três pontas." },
{ id: "z255", name: "Dragãozinho de Estimação", atk: 70, hp: 150, rarity: "RARE", img: "🐉", desc: "Cuspe fogo, mas é fofinho." },
{ id: "z256", name: "Gárgula de Pedra", atk: 52, hp: 225, rarity: "RARE", img: "🗿", desc: "Imóvel até atacar." },
{ id: "z257", name: "Espírito da Lâmpada", atk: 64, hp: 158, rarity: "RARE", img: "🪔", desc: "Concede desejos, ou golpes." },
{ id: "z258", name: "Gênio Trapaceiro", atk: 56, hp: 175, rarity: "RARE", img: "🧞", desc: "Distrai com ilusões." },
{ id: "z259", name: "Efrit Menor", atk: 72, hp: 145, rarity: "RARE", img: "🔥", desc: "Chamas que queimam sem piedade." },
{ id: "z260", name: "Salamandra de Fogo", atk: 68, hp: 155, rarity: "RARE", img: "🦎", desc: "Pele quente, mordida ardente." },
{ id: "z261", name: "Golem de Neve", atk: 44, hp: 230, rarity: "RARE", img: "❄️", desc: "Derrete, mas luta até o fim." },
{ id: "z262", name: "Yeti Jovem", atk: 74, hp: 180, rarity: "RARE", img: "🐻‍❄️", desc: "Força bruta, pouco cérebro." },
{ id: "z263", name: "Fada dos Bosques", atk: 54, hp: 165, rarity: "RARE", img: "🧚", desc: "Pó mágico e picadas." },
{ id: "z264", name: "Elfo Patrulheiro", atk: 64, hp: 162, rarity: "RARE", img: "🧝", desc: "Arco e flecha élficos." },
{ id: "z265", name: "Anão Mineiro", atk: 60, hp: 185, rarity: "RARE", img: "⛏️", desc: "Machado e barriga de ferro." },
{ id: "z266", name: "Halfling Ladino", atk: 68, hp: 145, rarity: "RARE", img: "🦶", desc: "Pequeno, ágil e sorrateiro." },
{ id: "z267", name: "Orc Grunhido", atk: 72, hp: 175, rarity: "RARE", img: "👹", desc: "Golpes fortes, gritos altos." },
{ id: "z268", name: "Goblin Inventor", atk: 56, hp: 155, rarity: "RARE", img: "🔧", desc: "Armadilhas e engenhocas." },
{ id: "z269", name: "Hobgoblin Batedor", atk: 64, hp: 160, rarity: "RARE", img: "👺", desc: "Mais esperto que os outros." },
{ id: "z270", name: "Kobold Escavador", atk: 52, hp: 180, rarity: "RARE", img: "🐲", desc: "Túneis e emboscadas." },
{ id: "z271", name: "Gnomo das Gemas", atk: 50, hp: 175, rarity: "RARE", img: "💎", desc: "Ataques reluzentes e valiosos." },
{ id: "z272", name: "Pixie Travessa", atk: 62, hp: 140, rarity: "RARE", img: "✨", desc: "Ilusões e furtividade." },
{ id: "z273", name: "Dríade Jovem", atk: 48, hp: 200, rarity: "RARE", img: "🌳", desc: "Enraizada na defesa." },
{ id: "z274", name: "Sátiro Flautista", atk: 56, hp: 168, rarity: "RARE", img: "🎶", desc: "Música que confunde." },
{ id: "z275", name: "Centauro Arqueiro", atk: 68, hp: 172, rarity: "RARE", img: "🐴", desc: "Metade homem, metade flecha." },
{ id: "z276", name: "Harpia Menor", atk: 66, hp: 148, rarity: "RARE", img: "🦅", desc: "Garras e gritos agudos." },
{ id: "z277", name: "Quimera Filhote", atk: 70, hp: 155, rarity: "RARE", img: "🐲", desc: "Cabeças de leão, cabra e serpente." },
{ id: "z278", name: "Mantícora Novata", atk: 74, hp: 160, rarity: "RARE", img: "🦁", desc: "Cauda de escorpião, dentes de leão." },
{ id: "z279", name: "Basilisco Mirim", atk: 60, hp: 165, rarity: "RARE", img: "🐍", desc: "Olhar petrificante fraco." },
{ id: "z280", name: "Cockatrice Pequena", atk: 56, hp: 155, rarity: "RARE", img: "🐔", desc: "Garras de galinha, veneno de serpente." },
{ id: "z281", name: "Grifo Jovem", atk: 72, hp: 170, rarity: "RARE", img: "🦁", desc: "Águia e leão, força média." },
{ id: "z282", name: "Pégaso Menor", atk: 52, hp: 180, rarity: "RARE", img: "🐴", desc: "Voa e ataca com cascos." },
{ id: "z283", name: "Unicórnio Jovem", atk: 56, hp: 178, rarity: "RARE", img: "🦄", desc: "Chifre mágico, mas inexperiente." },
{ id: "z284", name: "Lobo Cinzento", atk: 64, hp: 160, rarity: "RARE", img: "🐺", desc: "Uivo e mordida em bando." },
{ id: "z285", name: "Raposa Prateada", atk: 60, hp: 155, rarity: "RARE", img: "🦊", desc: "Esperteza e agilidade." },
{ id: "z286", name: "Pantera Negra", atk: 72, hp: 165, rarity: "RARE", img: "🐆", desc: "Sombra que ataca." },
{ id: "z287", name: "Tigre Dentes-de-Sabre", atk: 76, hp: 180, rarity: "RARE", img: "🐅", desc: "Presas longas, salto mortal." },
{ id: "z288", name: "Urso Pardo", atk: 68, hp: 195, rarity: "RARE", img: "🐻", desc: "Força bruta e pelagem grossa." },
{ id: "z289", name: "Alce Gigante", atk: 62, hp: 200, rarity: "RARE", img: "🦌", desc: "Chifres e patas pesadas." },
{ id: "z290", name: "Búfalo das Planícies", atk: 66, hp: 205, rarity: "RARE", img: "🐃", desc: "Carga devastadora." },
{ id: "z291", name: "Rinoceronte de Couraça", atk: 72, hp: 210, rarity: "RARE", img: "🦏", desc: "Pele grossa, chifre afiado." },
{ id: "z292", name: "Hipopótamo Enfurecido", atk: 70, hp: 220, rarity: "RARE", img: "🦛", desc: "Mordida esmagadora." },
{ id: "z293", name: "Crocodilo das Águas", atk: 74, hp: 185, rarity: "RARE", img: "🐊", desc: "Mandíbulas de aço." },
{ id: "z294", name: "Iguana Gigante", atk: 58, hp: 175, rarity: "RARE", img: "🦎", desc: "Língua longa, golpes rápidos." },
{ id: "z295", name: "Tartaruga Blindada", atk: 48, hp: 230, rarity: "RARE", img: "🐢", desc: "Quase impenetrável." },

// ── ÉPICOS ────────────────────────────────────────────────────
{ id: "z296", name: "Arauto do Crepúsculo", atk: 82, hp: 380, rarity: "EPIC", img: "🌆", desc: "Anuncia o fim do dia e o começo da morte." },
{ id: "z297", name: "Colosso de Ferro", atk: 76, hp: 430, rarity: "EPIC", img: "🤖", desc: "Máquina de guerra indestrutível." },
{ id: "z298", name: "Sereia de Fogo", atk: 88, hp: 320, rarity: "EPIC", img: "🔥", desc: "Canta e queima ao mesmo tempo." },
{ id: "z299", name: "Necromante dos Mortos", atk: 90, hp: 310, rarity: "EPIC", img: "💀", desc: "Chama os mortos para lutar." },
{ id: "z300", name: "Titã do Gelo", atk: 100, hp: 290, rarity: "EPIC", img: "❄️", desc: "Congela o mundo com seu sopro." },
{ id: "z301", name: "Dragão de Bronze", atk: 84, hp: 360, rarity: "EPIC", img: "🐉", desc: "Escamas de bronze, sopro de fogo." },
{ id: "z302", name: "Anjo da Guerra", atk: 96, hp: 305, rarity: "EPIC", img: "⚔️", desc: "Guerreiro celestial implacável." },
{ id: "z303", name: "Golem de Prata", atk: 72, hp: 450, rarity: "EPIC", img: "🪙", desc: "Prata pura, defesa impecável." },
{ id: "z304", name: "Lich das Almas", atk: 92, hp: 300, rarity: "EPIC", img: "👻", desc: "Almas são seu combustível." },
{ id: "z305", name: "Griffe da Noite", atk: 80, hp: 370, rarity: "EPIC", img: "🐾", desc: "Garras que rasgam a escuridão." },
{ id: "z306", name: "Sombra do Caos", atk: 105, hp: 270, rarity: "EPIC", img: "🌀", desc: "Sombra que distorce a realidade." },
{ id: "z307", name: "Cavaleiro das Estrelas", atk: 78, hp: 400, rarity: "EPIC", img: "⭐", desc: "Cavalga entre as constelações." },
{ id: "z308", name: "Maga do Trovão", atk: 94, hp: 320, rarity: "EPIC", img: "⚡", desc: "Raio e magia em harmonia." },
{ id: "z309", name: "Paladino da Morte", atk: 76, hp: 420, rarity: "EPIC", img: "☠️", desc: "Cavaleiro da morte, sem piedade." },
{ id: "z310", name: "Feiticeiro do Abismo", atk: 90, hp: 330, rarity: "EPIC", img: "🌀", desc: "Poder do vazio em suas mãos." },
{ id: "z311", name: "Berserk da Luz", atk: 98, hp: 280, rarity: "EPIC", img: "💡", desc: "Fúria luminosa, cega os inimigos." },
{ id: "z312", name: "Monge do Vento", atk: 84, hp: 360, rarity: "EPIC", img: "🍃", desc: "Golpes de furacão, rápidos e mortais." },
{ id: "z313", name: "Vampira da Meia-Noite", atk: 86, hp: 350, rarity: "EPIC", img: "🌙", desc: "Sangue lunar, poder noturno." },
{ id: "z314", name: "Guardião do Trovão", atk: 74, hp: 450, rarity: "EPIC", img: "⚡", desc: "Defensor dos céus, inabalável." },
{ id: "z315", name: "Pirata do Caos", atk: 92, hp: 320, rarity: "EPIC", img: "🏴‍☠️", desc: "Navega no caos, sem rumo." },
{ id: "z316", name: "Samurai do Abismo", atk: 94, hp: 340, rarity: "EPIC", img: "⚔️", desc: "Lâmina do vazio, corte absoluto." },
{ id: "z317", name: "Atirador dos Sonhos", atk: 82, hp: 370, rarity: "EPIC", img: "💤", desc: "Flecha onírica, ataca no sono." },
{ id: "z318", name: "Sacerdotisa do Fogo", atk: 80, hp: 390, rarity: "EPIC", img: "🔥", desc: "Chamas sagradas, poder divino." },
{ id: "z319", name: "Dragão da Noite", atk: 92, hp: 350, rarity: "EPIC", img: "🐉", desc: "Sopro de escuridão, cega o inimigo." },
{ id: "z320", name: "Anjo Vingador", atk: 98, hp: 310, rarity: "EPIC", img: "🗡️", desc: "Vingança celestial, justiça divina." },
{ id: "z321", name: "Golem de Obsidiana", atk: 76, hp: 430, rarity: "EPIC", img: "🪨", desc: "Vidro negro, defesa afiada." },
{ id: "z322", name: "Necromante Estelar", atk: 90, hp: 330, rarity: "EPIC", img: "⭐", desc: "Poder das estrelas, magia cósmica." },
{ id: "z323", name: "Titã da Geada", atk: 102, hp: 295, rarity: "EPIC", img: "❄️", desc: "Gelo eterno, frio absoluto." },
{ id: "z324", name: "Sereia do Crepúsculo", atk: 84, hp: 370, rarity: "EPIC", img: "🌆", desc: "Canto do fim do dia, hipnose." },
{ id: "z325", name: "Valquíria do Fogo", atk: 92, hp: 340, rarity: "EPIC", img: "🔥", desc: "Chamas e escudo, guerreira ardente." },
{ id: "z326", name: "Lich do Abismo", atk: 98, hp: 300, rarity: "EPIC", img: "🌀", desc: "Vazio vivo, poder do nada." },
{ id: "z327", name: "Griffe do Tempo", atk: 86, hp: 380, rarity: "EPIC", img: "⌛", desc: "Garras que envelhecem o alvo." },
{ id: "z328", name: "Sombra do Fogo", atk: 104, hp: 280, rarity: "EPIC", img: "🔥", desc: "Sombra incandescente, queima sem luz." },
{ id: "z329", name: "Cavaleiro do Gelo", atk: 82, hp: 410, rarity: "EPIC", img: "🧊", desc: "Montaria de gelo, cavaleiro congelante." },
{ id: "z330", name: "Maga do Trovão", atk: 94, hp: 325, rarity: "EPIC", img: "⚡", desc: "Raio e magia, sinfonia elétrica." },
{ id: "z331", name: "Paladino do Abismo", atk: 80, hp: 425, rarity: "EPIC", img: "🌀", desc: "Defensor do vazio, fé inabalável." },
{ id: "z332", name: "Feiticeiro do Caos", atk: 92, hp: 330, rarity: "EPIC", img: "🌪️", desc: "Caos puro, magia imprevisível." },
{ id: "z333", name: "Berserk do Crepúsculo", atk: 104, hp: 275, rarity: "EPIC", img: "🌘", desc: "Fúria na penumbra, sem controle." },
{ id: "z334", name: "Monge da Lua", atk: 88, hp: 365, rarity: "EPIC", img: "🌙", desc: "Poder lunar, golpes precisos." },
{ id: "z335", name: "Vampira das Sombras", atk: 90, hp: 355, rarity: "EPIC", img: "🖤", desc: "Sombra e sangue, dupla mortal." },
{ id: "z336", name: "Guardião do Caos", atk: 76, hp: 455, rarity: "EPIC", img: "🌀", desc: "Protetor do caos, desordem em pessoa." },
{ id: "z337", name: "Pirata do Fogo", atk: 94, hp: 325, rarity: "EPIC", img: "🔥", desc: "Mar de chamas, navega na lava." },
{ id: "z338", name: "Samurai da Morte", atk: 96, hp: 345, rarity: "EPIC", img: "💀", desc: "Lâmina da morte, golpe final." },
{ id: "z339", name: "Atirador da Eternidade", atk: 84, hp: 375, rarity: "EPIC", img: "♾️", desc: "Flecha infinita, nunca erra." },
{ id: "z340", name: "Sacerdotisa do Abismo", atk: 82, hp: 395, rarity: "EPIC", img: "🌀", desc: "Vazio sagrado, poder divino." },
{ id: "z341", name: "Dragão do Trovão", atk: 94, hp: 355, rarity: "EPIC", img: "⚡", desc: "Sopro elétrico, choque mortal." },
{ id: "z342", name: "Anjo do Caos", atk: 100, hp: 315, rarity: "EPIC", img: "🌀", desc: "Anjo distorcido, mensageiro da desordem." },
{ id: "z343", name: "Golem de Fogo", atk: 78, hp: 435, rarity: "EPIC", img: "🔥", desc: "Lava viva, indestrutível." },
{ id: "z344", name: "Necromante da Luz", atk: 92, hp: 335, rarity: "EPIC", img: "💡", desc: "Luz dos mortos, brilho macabro." },
{ id: "z345", name: "Titã do Fogo", atk: 104, hp: 300, rarity: "EPIC", img: "🔥", desc: "Chama primordial, poder absoluto." },
{ id: "z346", name: "Sereia do Caos", atk: 86, hp: 375, rarity: "EPIC", img: "🌀", desc: "Canto caótico, desorienta e ataca." },
{ id: "z347", name: "Valquíria do Abismo", atk: 94, hp: 345, rarity: "EPIC", img: "🌀", desc: "Valquíria sombria, escolhe os caídos." },
{ id: "z348", name: "Lich do Tempo", atk: 98, hp: 305, rarity: "EPIC", img: "⌛", desc: "Tempo distorcido, imortal." },
{ id: "z349", name: "Griffe do Fogo", atk: 88, hp: 385, rarity: "EPIC", img: "🔥", desc: "Garras flamejantes, queimam tudo." },
{ id: "z350", name: "Sombra do Gelo", atk: 106, hp: 285, rarity: "EPIC", img: "❄️", desc: "Sombra congelante, paralisante." },
{ id: "z351", name: "Cavaleiro do Abismo", atk: 84, hp: 415, rarity: "EPIC", img: "🌀", desc: "Montaria do vazio, cavaleiro eterno." },
{ id: "z352", name: "Maga do Fogo", atk: 96, hp: 330, rarity: "EPIC", img: "🔥", desc: "Magia flamejante, poder puro." },
{ id: "z353", name: "Paladino do Fogo", atk: 82, hp: 430, rarity: "EPIC", img: "🔥", desc: "Fogo sagrado, justiça ardente." },
{ id: "z354", name: "Feiticeiro do Trovão", atk: 94, hp: 335, rarity: "EPIC", img: "⚡", desc: "Raio e magia, sinfonia elétrica." },
{ id: "z355", name: "Berserk do Abismo", atk: 106, hp: 280, rarity: "EPIC", img: "🌀", desc: "Fúria do vazio, sem controle." },
{ id: "z356", name: "Monge do Caos", atk: 90, hp: 370, rarity: "EPIC", img: "🌀", desc: "Golpes caóticos, imprevisíveis." },
{ id: "z357", name: "Vampira do Fogo", atk: 92, hp: 360, rarity: "EPIC", img: "🔥", desc: "Sangue flamejante, queima ao tocar." },
{ id: "z358", name: "Guardião do Gelo", atk: 78, hp: 460, rarity: "EPIC", img: "🧊", desc: "Defensor do gelo, inabalável." },
{ id: "z359", name: "Pirata do Abismo", atk: 96, hp: 330, rarity: "EPIC", img: "🌀", desc: "Navega no vazio, sem destino." },
{ id: "z360", name: "Samurai do Fogo", atk: 98, hp: 350, rarity: "EPIC", img: "🔥", desc: "Lâmina flamejante, corte incandescente." },
{ id: "z361", name: "Atirador do Abismo", atk: 86, hp: 380, rarity: "EPIC", img: "🌀", desc: "Flecha do vazio, certeira." },
{ id: "z362", name: "Sacerdotisa do Trovão", atk: 84, hp: 400, rarity: "EPIC", img: "⚡", desc: "Poder do raio, bênção elétrica." },
{ id: "z363", name: "Dragão do Abismo", atk: 96, hp: 360, rarity: "EPIC", img: "🐉", desc: "Sopro do vazio, devastador." },
{ id: "z364", name: "Anjo do Fogo", atk: 102, hp: 320, rarity: "EPIC", img: "🔥", desc: "Anjo incandescente, justiça ardente." },
{ id: "z365", name: "Golem do Trovão", atk: 80, hp: 440, rarity: "EPIC", img: "⚡", desc: "Golem elétrico, choque constante." },
{ id: "z366", name: "Necromante do Caos", atk: 94, hp: 340, rarity: "EPIC", img: "🌀", desc: "Caos e morte, dupla letal." },
{ id: "z367", name: "Titã do Abismo", atk: 106, hp: 305, rarity: "EPIC", img: "🌀", desc: "Titã do vazio, poder incomensurável." },
{ id: "z368", name: "Sereia do Gelo", atk: 88, hp: 380, rarity: "EPIC", img: "❄️", desc: "Canto gelado, hipnose congelante." },
{ id: "z369", name: "Valquíria do Trovão", atk: 96, hp: 350, rarity: "EPIC", img: "⚡", desc: "Raio e escudo, defesa perfeita." },
{ id: "z370", name: "Lich do Fogo", atk: 100, hp: 310, rarity: "EPIC", img: "🔥", desc: "Chamas eternas, lich imortal." },
{ id: "z371", name: "Griffe do Abismo", atk: 90, hp: 390, rarity: "EPIC", img: "🌀", desc: "Garras do vazio, rasgam a alma." },
{ id: "z372", name: "Sombra do Trovão", atk: 108, hp: 290, rarity: "EPIC", img: "⚡", desc: "Sombra elétrica, choque surpresa." },
{ id: "z373", name: "Cavaleiro do Fogo", atk: 86, hp: 420, rarity: "EPIC", img: "🔥", desc: "Cavalo de chamas, carga ardente." },
{ id: "z374", name: "Maga do Abismo", atk: 98, hp: 335, rarity: "EPIC", img: "🌀", desc: "Magia do vazio, poder escuro." },
{ id: "z375", name: "Paladino do Trovão", atk: 84, hp: 435, rarity: "EPIC", img: "⚡", desc: "Defensor do raio, justiça elétrica." },
{ id: "z376", name: "Feiticeiro do Fogo", atk: 96, hp: 340, rarity: "EPIC", img: "🔥", desc: "Fogo puro, magia incandescente." },
{ id: "z377", name: "Berserk do Gelo", atk: 108, hp: 285, rarity: "EPIC", img: "❄️", desc: "Fúria congelante, sem piedade." },
{ id: "z378", name: "Monge do Trovão", atk: 92, hp: 375, rarity: "EPIC", img: "⚡", desc: "Punhos elétricos, choque certeiro." },
{ id: "z379", name: "Vampira do Abismo", atk: 94, hp: 365, rarity: "EPIC", img: "🌀", desc: "Sangue do vazio, sede eterna." },
{ id: "z380", name: "Guardião do Fogo", atk: 80, hp: 465, rarity: "EPIC", img: "🔥", desc: "Guarda das chamas, protetor ardente." },

// ── LENDÁRIOS ─────────────────────────────────────────────────
{ id: "z381", name: "Deus do Sol", atk: 148, hp: 620, rarity: "LEGENDARY", img: "☀️", desc: "O sol em forma de guerreiro." },
{ id: "z382", name: "Deusa da Lua", atk: 138, hp: 660, rarity: "LEGENDARY", img: "🌙", desc: "A lua que guia os perdidos." },
{ id: "z383", name: "Titã do Trovão", atk: 168, hp: 560, rarity: "LEGENDARY", img: "⚡", desc: "O trovão que ecoa por toda eternidade." },
{ id: "z384", name: "Fênix das Sombras", atk: 155, hp: 590, rarity: "LEGENDARY", img: "🦅", desc: "Renasce das trevas mais profundas." },
{ id: "z385", name: "Senhor das Estrelas", atk: 150, hp: 630, rarity: "LEGENDARY", img: "⭐", desc: "Comanda as constelações." },
{ id: "z386", name: "Guerreiro Cósmico", atk: 160, hp: 570, rarity: "LEGENDARY", img: "🌌", desc: "Viaja pelo cosmos em batalha." },
{ id: "z387", name: "Imperador Dragão", atk: 175, hp: 540, rarity: "LEGENDARY", img: "🐲", desc: "Rei dos dragões lendários." },
{ id: "z388", name: "Anjo Celestial", atk: 142, hp: 670, rarity: "LEGENDARY", img: "👼", desc: "Mensageiro dos deuses." },
{ id: "z389", name: "Golem Primordial", atk: 132, hp: 710, rarity: "LEGENDARY", img: "🗿", desc: "O primeiro golem." },
{ id: "z390", name: "Necromante Eterno", atk: 157, hp: 600, rarity: "LEGENDARY", img: "💀", desc: "Vive na morte e na vida." },
{ id: "z391", name: "Titã do Fogo", atk: 170, hp: 550, rarity: "LEGENDARY", img: "🔥", desc: "Chamas primordiais." },
{ id: "z392", name: "Sereia do Destino", atk: 147, hp: 640, rarity: "LEGENDARY", img: "🧜‍♀️", desc: "Canta o futuro." },
{ id: "z393", name: "Valquíria Celestial", atk: 152, hp: 620, rarity: "LEGENDARY", img: "🛡️", desc: "Valquíria suprema." },
{ id: "z394", name: "Lich do Caos", atk: 162, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Caos imortal." },
{ id: "z395", name: "Griffe do Destino", atk: 142, hp: 650, rarity: "LEGENDARY", img: "⚖️", desc: "Garras do destino." },
{ id: "z396", name: "Sombra Infinita", atk: 178, hp: 530, rarity: "LEGENDARY", img: "🌌", desc: "Sombra eterna." },
{ id: "z397", name: "Cavaleiro do Apocalipse", atk: 152, hp: 610, rarity: "LEGENDARY", img: "🐴", desc: "Um dos quatro cavaleiros." },
{ id: "z398", name: "Maga do Destino", atk: 157, hp: 590, rarity: "LEGENDARY", img: "🔮", desc: "Vê o destino." },
{ id: "z399", name: "Paladino da Luz Eterna", atk: 137, hp: 690, rarity: "LEGENDARY", img: "☀️", desc: "Luz infinita." },
{ id: "z400", name: "Feiticeiro do Vazio", atk: 162, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Vazio vivo." },
{ id: "z401", name: "Berserk do Fim", atk: 182, hp: 510, rarity: "LEGENDARY", img: "💥", desc: "Fúria do fim." },
{ id: "z402", name: "Monge da Eternidade", atk: 147, hp: 660, rarity: "LEGENDARY", img: "♾️", desc: "Golpes eternos." },
{ id: "z403", name: "Vampira Primordial", atk: 157, hp: 630, rarity: "LEGENDARY", img: "🦇", desc: "Primeira vampira." },
{ id: "z404", name: "Guardião do Tempo", atk: 132, hp: 720, rarity: "LEGENDARY", img: "⏳", desc: "Defensor do tempo." },
{ id: "z405", name: "Pirata Estelar", atk: 162, hp: 590, rarity: "LEGENDARY", img: "🏴‍☠️", desc: "Navega entre estrelas." },
{ id: "z406", name: "Samurai do Vazio", atk: 167, hp: 570, rarity: "LEGENDARY", img: "⚔️", desc: "Lâmina do vazio." },
{ id: "z407", name: "Atirador do Destino", atk: 152, hp: 610, rarity: "LEGENDARY", img: "🎯", desc: "Nunca erra." },
{ id: "z408", name: "Sacerdotisa do Caos", atk: 142, hp: 680, rarity: "LEGENDARY", img: "🌀", desc: "Caos divino." },
{ id: "z409", name: "Dragão do Tempo", atk: 172, hp: 550, rarity: "LEGENDARY", img: "🐉", desc: "Sopro temporal." },
{ id: "z410", name: "Anjo da Morte", atk: 162, hp: 580, rarity: "LEGENDARY", img: "💀", desc: "Anjo ceifador." },
{ id: "z411", name: "Golem de Energia", atk: 137, hp: 700, rarity: "LEGENDARY", img: "⚡", desc: "Golem elétrico." },
{ id: "z412", name: "Necromante Estelar", atk: 157, hp: 600, rarity: "LEGENDARY", img: "⭐", desc: "Poder das estrelas." },
{ id: "z413", name: "Titã do Gelo", atk: 167, hp: 560, rarity: "LEGENDARY", img: "❄️", desc: "Gelo primordial." },
{ id: "z414", name: "Sereia da Eternidade", atk: 147, hp: 650, rarity: "LEGENDARY", img: "♾️", desc: "Canto eterno." },
{ id: "z415", name: "Valquíria da Guerra", atk: 157, hp: 620, rarity: "LEGENDARY", img: "⚔️", desc: "Deusa da guerra." },
{ id: "z416", name: "Lich do Destino", atk: 167, hp: 580, rarity: "LEGENDARY", img: "🔮", desc: "Lich do futuro." },
{ id: "z417", name: "Griffe do Caos", atk: 147, hp: 660, rarity: "LEGENDARY", img: "🌀", desc: "Garras do caos." },
{ id: "z418", name: "Sombra do Destino", atk: 182, hp: 540, rarity: "LEGENDARY", img: "🌑", desc: "Sombra do futuro." },
{ id: "z419", name: "Cavaleiro do Fogo", atk: 152, hp: 620, rarity: "LEGENDARY", img: "🔥", desc: "Cavalo de chamas." },
{ id: "z420", name: "Maga do Tempo", atk: 157, hp: 600, rarity: "LEGENDARY", img: "⏳", desc: "Magia temporal." },
{ id: "z421", name: "Paladino do Caos", atk: 137, hp: 700, rarity: "LEGENDARY", img: "🌀", desc: "Defensor do caos." },
{ id: "z422", name: "Feiticeiro da Luz", atk: 162, hp: 590, rarity: "LEGENDARY", img: "💡", desc: "Luz pura." },
{ id: "z423", name: "Berserk do Trovão", atk: 182, hp: 520, rarity: "LEGENDARY", img: "⚡", desc: "Fúria elétrica." },
{ id: "z424", name: "Monge do Destino", atk: 147, hp: 670, rarity: "LEGENDARY", img: "🔮", desc: "Golpes do destino." },
{ id: "z425", name: "Vampira do Caos", atk: 157, hp: 640, rarity: "LEGENDARY", img: "🌀", desc: "Sangue caótico." },
{ id: "z426", name: "Guardião do Fogo", atk: 132, hp: 730, rarity: "LEGENDARY", img: "🔥", desc: "Guarda das chamas." },
{ id: "z427", name: "Pirata do Tempo", atk: 162, hp: 600, rarity: "LEGENDARY", img: "⏳", desc: "Navega no tempo." },
{ id: "z428", name: "Samurai do Caos", atk: 167, hp: 580, rarity: "LEGENDARY", img: "🌀", desc: "Lâmina caótica." },
{ id: "z429", name: "Atirador da Luz", atk: 152, hp: 620, rarity: "LEGENDARY", img: "💡", desc: "Flecha luminosa." },
{ id: "z430", name: "Sacerdotisa do Fogo", atk: 142, hp: 690, rarity: "LEGENDARY", img: "🔥", desc: "Fogo sagrado." },
{ id: "z431", name: "Dragão do Caos", atk: 172, hp: 560, rarity: "LEGENDARY", img: "🐉", desc: "Sopro caótico." },
{ id: "z432", name: "Anjo do Tempo", atk: 162, hp: 590, rarity: "LEGENDARY", img: "⏳", desc: "Anjo temporal." },
{ id: "z433", name: "Golem do Caos", atk: 137, hp: 710, rarity: "LEGENDARY", img: "🌀", desc: "Golem caótico." },
{ id: "z434", name: "Necromante do Fogo", atk: 157, hp: 610, rarity: "LEGENDARY", img: "🔥", desc: "Morte flamejante." },
{ id: "z435", name: "Titã do Trovão", atk: 167, hp: 570, rarity: "LEGENDARY", img: "⚡", desc: "Titã elétrico." },
{ id: "z436", name: "Sereia do Caos", atk: 147, hp: 660, rarity: "LEGENDARY", img: "🌀", desc: "Canto caótico." },
{ id: "z437", name: "Valquíria do Fogo", atk: 157, hp: 630, rarity: "LEGENDARY", img: "🔥", desc: "Valquíria flamejante." },
{ id: "z438", name: "Lich do Gelo", atk: 167, hp: 590, rarity: "LEGENDARY", img: "❄️", desc: "Gelo imortal." },
{ id: "z439", name: "Griffe do Trovão", atk: 147, hp: 670, rarity: "LEGENDARY", img: "⚡", desc: "Garras elétricas." },
{ id: "z440", name: "Sombra do Caos", atk: 182, hp: 550, rarity: "LEGENDARY", img: "🌀", desc: "Sombra caótica." },
{ id: "z441", name: "Cavaleiro do Caos", atk: 152, hp: 630, rarity: "LEGENDARY", img: "🌀", desc: "Cavalo do caos." },
{ id: "z442", name: "Maga do Fogo", atk: 157, hp: 610, rarity: "LEGENDARY", img: "🔥", desc: "Magia flamejante." },
{ id: "z443", name: "Paladino do Gelo", atk: 137, hp: 720, rarity: "LEGENDARY", img: "❄️", desc: "Defensor do gelo." },
{ id: "z444", name: "Feiticeiro do Caos", atk: 162, hp: 600, rarity: "LEGENDARY", img: "🌀", desc: "Caos mágico." },
{ id: "z445", name: "Berserk do Fogo", atk: 182, hp: 530, rarity: "LEGENDARY", img: "🔥", desc: "Fúria flamejante." },
{ id: "z446", name: "Monge do Trovão", atk: 147, hp: 680, rarity: "LEGENDARY", img: "⚡", desc: "Golpes elétricos." },
{ id: "z447", name: "Vampira do Gelo", atk: 157, hp: 650, rarity: "LEGENDARY", img: "❄️", desc: "Sangue gelado." },
{ id: "z448", name: "Guardião do Abismo", atk: 132, hp: 740, rarity: "LEGENDARY", img: "🌀", desc: "Defensor do vazio." },
{ id: "z449", name: "Pirata do Caos", atk: 162, hp: 610, rarity: "LEGENDARY", img: "🏴‍☠️", desc: "Navega no caos." },
{ id: "z450", name: "Samurai do Gelo", atk: 167, hp: 590, rarity: "LEGENDARY", img: "❄️", desc: "Lâmina de gelo." },
{ id: "z451", name: "Atirador do Caos", atk: 152, hp: 630, rarity: "LEGENDARY", img: "🌀", desc: "Flecha caótica." },
{ id: "z452", name: "Sacerdotisa do Trovão", atk: 142, hp: 700, rarity: "LEGENDARY", img: "⚡", desc: "Poder do raio." },
{ id: "z453", name: "Dragão do Fogo", atk: 172, hp: 570, rarity: "LEGENDARY", img: "🔥", desc: "Sopro de fogo." },
{ id: "z454", name: "Anjo do Gelo", atk: 162, hp: 600, rarity: "LEGENDARY", img: "❄️", desc: "Anjo congelante." },
{ id: "z455", name: "Golem do Trovão", atk: 137, hp: 720, rarity: "LEGENDARY", img: "⚡", desc: "Golem elétrico." },
{ id: "z456", name: "Necromante do Caos", atk: 157, hp: 620, rarity: "LEGENDARY", img: "🌀", desc: "Morte caótica." },
{ id: "z457", name: "Titã do Fogo", atk: 167, hp: 580, rarity: "LEGENDARY", img: "🔥", desc: "Titã flamejante." },
{ id: "z458", name: "Sereia do Trovão", atk: 147, hp: 670, rarity: "LEGENDARY", img: "⚡", desc: "Canto elétrico." },
{ id: "z459", name: "Valquíria do Caos", atk: 157, hp: 640, rarity: "LEGENDARY", img: "🌀", desc: "Valquíria caótica." },
{ id: "z460", name: "Lich do Fogo", atk: 167, hp: 600, rarity: "LEGENDARY", img: "🔥", desc: "Lich flamejante." },
{ id: "z461", name: "Griffe do Gelo", atk: 147, hp: 680, rarity: "LEGENDARY", img: "❄️", desc: "Garras de gelo." },
{ id: "z462", name: "Sombra do Trovão", atk: 182, hp: 560, rarity: "LEGENDARY", img: "⚡", desc: "Sombra elétrica." },
{ id: "z463", name: "Cavaleiro do Gelo", atk: 152, hp: 640, rarity: "LEGENDARY", img: "❄️", desc: "Cavalo de gelo." },
{ id: "z464", name: "Maga do Caos", atk: 157, hp: 620, rarity: "LEGENDARY", img: "🌀", desc: "Magia caótica." },
{ id: "z465", name: "Paladino do Fogo", atk: 137, hp: 720, rarity: "LEGENDARY", img: "🔥", desc: "Fogo divino." },
{ id: "z466", name: "Feiticeiro do Gelo", atk: 162, hp: 610, rarity: "LEGENDARY", img: "❄️", desc: "Magia gelada." },
{ id: "z467", name: "Berserk do Caos", atk: 182, hp: 540, rarity: "LEGENDARY", img: "🌀", desc: "Fúria caótica." },
{ id: "z468", name: "Monge do Fogo", atk: 147, hp: 690, rarity: "LEGENDARY", img: "🔥", desc: "Golpes flamejantes." },
{ id: "z469", name: "Vampira do Trovão", atk: 157, hp: 660, rarity: "LEGENDARY", img: "⚡", desc: "Sangue elétrico." },
{ id: "z470", name: "Guardião do Trovão", atk: 132, hp: 750, rarity: "LEGENDARY", img: "⚡", desc: "Guarda do raio." },
{ id: "z471", name: "Pirata do Gelo", atk: 162, hp: 620, rarity: "LEGENDARY", img: "❄️", desc: "Mar gelado." },
{ id: "z472", name: "Samurai do Fogo", atk: 167, hp: 600, rarity: "LEGENDARY", img: "🔥", desc: "Lâmina flamejante." },
{ id: "z473", name: "Atirador do Gelo", atk: 152, hp: 640, rarity: "LEGENDARY", img: "❄️", desc: "Flecha de gelo." },
{ id: "z474", name: "Sacerdotisa do Gelo", atk: 142, hp: 710, rarity: "LEGENDARY", img: "❄️", desc: "Gelo sagrado." },
{ id: "z475", name: "Dragão do Trovão", atk: 172, hp: 580, rarity: "LEGENDARY", img: "⚡", desc: "Sopro elétrico." },
{ id: "z476", name: "Anjo do Fogo", atk: 162, hp: 610, rarity: "LEGENDARY", img: "🔥", desc: "Anjo incandescente." },
{ id: "z477", name: "Golem do Gelo", atk: 137, hp: 730, rarity: "LEGENDARY", img: "❄️", desc: "Golem de gelo." },
{ id: "z478", name: "Necromante do Trovão", atk: 157, hp: 630, rarity: "LEGENDARY", img: "⚡", desc: "Raio dos mortos." },
{ id: "z479", name: "Titã do Caos", atk: 167, hp: 590, rarity: "LEGENDARY", img: "🌀", desc: "Titã caótico." },
{ id: "z480", name: "Sereia do Fogo", atk: 147, hp: 680, rarity: "LEGENDARY", img: "🔥", desc: "Canto de fogo." },

// ── MÍTICOS ───────────────────────────────────────────────────
{ id: "z481", name: "Imperador do Fogo", atk: 145, hp: 620, rarity: "MYTHIC", img: "🔥", desc: "Rei das chamas e dos vulcões." },
{ id: "z482", name: "Deusa do Gelo Eterno", atk: 135, hp: 680, rarity: "MYTHIC", img: "❄️", desc: "Seu sopro congela mundos." },
{ id: "z483", name: "Titã do Caos", atk: 165, hp: 570, rarity: "MYTHIC", img: "🌀", desc: "Personificação do caos primordial." },
{ id: "z484", name: "Fênix Cósmica", atk: 155, hp: 600, rarity: "MYTHIC", img: "🦅", desc: "Renasce das estrelas." },
{ id: "z485", name: "Senhor do Tempo", atk: 150, hp: 640, rarity: "MYTHIC", img: "⏳", desc: "Dobra o tempo à sua vontade." },
{ id: "z486", name: "Guerreiro das Galáxias", atk: 160, hp: 580, rarity: "MYTHIC", img: "🌌", desc: "Carrega o poder de um sistema solar." },
{ id: "z487", name: "Dragão Imperador", atk: 170, hp: 550, rarity: "MYTHIC", img: "🐲", desc: "Rei indiscutível dos dragões." },
{ id: "z488", name: "Anjo Primordial", atk: 140, hp: 680, rarity: "MYTHIC", img: "👼", desc: "Primeiro dos seres celestiais." },
{ id: "z489", name: "Golem de Origem", atk: 130, hp: 720, rarity: "MYTHIC", img: "🗿", desc: "Feito do barro da criação." },
{ id: "z490", name: "Necromante da Eternidade", atk: 155, hp: 610, rarity: "MYTHIC", img: "💀", desc: "Comanda os mortos desde o início." },
{ id: "z491", name: "Titã do Trovão", atk: 168, hp: 560, rarity: "MYTHIC", img: "⚡", desc: "Cada passo é um raio." },
{ id: "z492", name: "Sereia do Fim", atk: 145, hp: 650, rarity: "MYTHIC", img: "🧜‍♀️", desc: "Seu canto anuncia o apocalipse." },
{ id: "z493", name: "Valquíria da Guerra", atk: 150, hp: 630, rarity: "MYTHIC", img: "⚔️", desc: "Lidera exércitos divinos." },
{ id: "z494", name: "Lich do Multiverso", atk: 160, hp: 590, rarity: "MYTHIC", img: "🌐", desc: "Existe em todas as realidades." },
{ id: "z495", name: "Griffe do Nada", atk: 140, hp: 660, rarity: "MYTHIC", img: "⭕", desc: "Garras que apagam a existência." },
{ id: "z496", name: "Sombra Infinita", atk: 175, hp: 540, rarity: "MYTHIC", img: "🌑", desc: "A escuridão que não tem fim." },
{ id: "z497", name: "Cavaleiro do Juízo Final", atk: 150, hp: 620, rarity: "MYTHIC", img: "🐴", desc: "Cavalga para o fim dos tempos." },
{ id: "z498", name: "Maga do Infinito", atk: 155, hp: 600, rarity: "MYTHIC", img: "♾️", desc: "Manipula a energia infinita." },
{ id: "z499", name: "Paladino da Luz Absoluta", atk: 135, hp: 700, rarity: "MYTHIC", img: "☀️", desc: "Sua espada é feita de luz pura." },
{ id: "z500", name: "Feiticeiro do Nada", atk: 160, hp: 590, rarity: "MYTHIC", img: "🕳️", desc: "Canaliza o vazio absoluto." },
];

// Injeta cartas extras no array global
if (typeof ALL_CARDS !== "undefined") {
  EXTRA_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// CARTAS DE EVENTO (exclusivas de eventos – ficam no cofre para sempre)
// ══════════════════════════════════════════════════════════════
const EVENT_CARDS = [
  // Evento 1: Chama da Origem
  { id:"ev001", name:"Pyros da Chama",    atk:200,hp:700, rarity:"EPIC",      img:"🔥", desc:"Nascido das primeiras chamas do mundo.", eventId:"evt_chama",  eventName:"A Chama da Origem" },
  { id:"ev002", name:"Ignis Eterno",      atk:350,hp:1200,rarity:"MYTHIC",    img:"🌋", desc:"Guarda o fogo primordial da criação.",  eventId:"evt_chama",  eventName:"A Chama da Origem" },
  { id:"ev003", name:"Centelha Suprema",  atk:490,hp:1800,rarity:"ULTRA_RARE",img:"⚡", desc:"A primeira faísca que criou o universo.",eventId:"evt_chama", eventName:"A Chama da Origem" },

  // Evento 2: Invasão das Trevas
  { id:"ev004", name:"Sombra Voraz",      atk:220,hp:720, rarity:"EPIC",      img:"🌑", desc:"Devora a luz onde passa.",              eventId:"evt_trevas", eventName:"Invasão das Trevas" },
  { id:"ev005", name:"Noite Eterna",      atk:370,hp:1100,rarity:"MYTHIC",    img:"🦇", desc:"Transformou o dia em noite permanente.", eventId:"evt_trevas", eventName:"Invasão das Trevas" },

  // Evento 3: Tempestade Cósmica
  { id:"ev006", name:"Vento Cósmico",     atk:240,hp:680, rarity:"EPIC",      img:"🌌", desc:"Sopro das estrelas moribundas.",        eventId:"evt_cosmos", eventName:"Tempestade Cósmica" },
  { id:"ev007", name:"Nebulosa Guardiã",  atk:400,hp:1300,rarity:"MYTHIC",    img:"🌠", desc:"Nasceu da poeira de estrelas mortas.",  eventId:"evt_cosmos", eventName:"Tempestade Cósmica" },

  // Evento 4: Festival de Natal
  { id:"ev008", name:"Papai Noel das Batalhas",atk:180,hp:800,rarity:"EPIC",  img:"🎅", desc:"Distribui cartas e derrotas.",          eventId:"evt_natal",  eventName:"Festival de Natal" },
  { id:"ev009", name:"Rena de Combate",   atk:320,hp:1050,rarity:"MYTHIC",    img:"🦌", desc:"Velocíssima e implacável.",             eventId:"evt_natal",  eventName:"Festival de Natal" },

  // Evento 5: Fúria do Oceano
  { id:"ev010", name:"Leviatã Abissal",   atk:210,hp:750, rarity:"EPIC",      img:"🐋", desc:"Desperta das profundezas mais escuras do oceano.", eventId:"evt_oceano", eventName:"Fúria do Oceano" },
  { id:"ev011", name:"Kraken Ancestral",  atk:365,hp:1250,rarity:"MYTHIC",    img:"🐙", desc:"Seus tentáculos já afundaram impérios inteiros.",   eventId:"evt_oceano", eventName:"Fúria do Oceano" },
  { id:"ev012", name:"Maré Primordial",   atk:500,hp:1850,rarity:"ULTRA_RARE",img:"🌊", desc:"A força que moldou todos os oceanos do mundo.",     eventId:"evt_oceano", eventName:"Fúria do Oceano" },
  // ── EVENTO ESPECIAL: COPA DO MUNDO 2026 ──────────────────────
{ id:"ev016", name:"Atacante Estelar",   atk:220, hp:750,  rarity:"EPIC",      img:"⚽", desc:"Artilheiro das arenas, nunca perde um gol.", eventId:"evt_copa", eventName:"Copa do Mundo 2026" },
{ id:"ev017", name:"Guardião da Copa",   atk:380, hp:1150, rarity:"MYTHIC",    img:"🥅", desc:"Defensor implacável, protege a meta com a vida.", eventId:"evt_copa", eventName:"Copa do Mundo 2026" },
{ id:"ev018", name:"Campeão do Mundo",   atk:510, hp:1850, rarity:"ULTRA_RARE",img:"🏆", desc:"A lenda que ergueu o troféu mais cobiçado do planeta.", eventId:"evt_copa", eventName:"Copa do Mundo 2026" },
// ══════════════════════════════════════════════════════════════
// Parceria Origens Games X Akudama Drive
// ══════════════════════════════════════════════════════════════
{ id:"ev019", name:"Brawler — O Brutamontes",  atk:200, hp:650,  rarity:"RARE",       img:"🥊", desc:"Não negocia. Resolve tudo com os punhos antes que alguém termine a frase.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev020", name:"Pilot — O Piloto",         atk:190, hp:700,  rarity:"RARE",       img:"🏎️", desc:"Não existe fuga impossível quando ele está no volante.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev021", name:"Doctor — A Médica",        atk:260, hp:800,  rarity:"EPIC",       img:"💉", desc:"Cura o suficiente pra manter você vivo até o próximo golpe dela.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev022", name:"Swindler — A Trapaceira",  atk:230, hp:760,  rarity:"EPIC",       img:"🎭", desc:"Nunca revela o próprio rosto — só as consequências de confiar nela.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev023", name:"Cutthroat — O Carrasco",   atk:430, hp:950,  rarity:"MYTHIC",     img:"🔪", desc:"Não luta por dinheiro. Luta porque adora o som da lâmina.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev024", name:"Hoodlum — O Brutamontes",  atk:350, hp:1320, rarity:"MYTHIC",     img:"👊", desc:"Quanto mais apanha, mais forte fica. Ninguém sabe explicar por quê.", eventId:"evt_akudama", eventName:"Akudama Drive" },
{ id:"ev025", name:"Courier — O Mensageiro",   atk:480, hp:1900, rarity:"ULTRA_RARE", img:"🏍️", desc:"Nenhuma entrega falhou. Nenhuma perseguição terminou bem para quem o seguiu.", eventId:"evt_akudama", eventName:"Akudama Drive" },
  { id:"ev026", name:"Palhaço da Meia-Noite",      atk:230, hp:780,  rarity:"EPIC",       img:"🤡", desc:"Seu sorriso é a última coisa que você vê antes do escuro.", eventId:"evt_circo", eventName:"O Circo Amaldiçoado" },
  { id:"ev027", name:"Domador de Pesadelos",        atk:400, hp:1350, rarity:"MYTHIC",     img:"🎩", desc:"Doma feras que nem a escuridão ousa nomear.",                eventId:"evt_circo", eventName:"O Circo Amaldiçoado" },
  { id:"ev028", name:"Rainha da Lona Sangrenta",    atk:520, hp:1900, rarity:"ULTRA_RARE", img:"🎪", desc:"Sob a lona vermelha, ninguém aplaude — todos gritam.",       eventId:"evt_circo", eventName:"O Circo Amaldiçoado" },
];


// Injeta cartas de evento no array global
if (typeof ALL_CARDS !== "undefined") {
  EVENT_CARDS.forEach(c => {
    if (!ALL_CARDS.find(x => x.id === c.id)) {
      ALL_CARDS.push(c);
    }
  });
}

// ══════════════════════════════════════════════════════════════
// EVENTOS DO JOGO
// ══════════════════════════════════════════════════════════════
const GAME_EVENTS = [
{
  id:          "evt_circo",
  name:        "🎪 O Circo Amaldiçoado",
  icon:        "🎪",
  color:       "#ff6f00",
  desc:        "Numa noite de lua cheia, uma lona vermelha surge do nada. Dentro dela, atrações macabras esperam por quem for corajoso (ou tolo) o bastante pra entrar. Cartas exclusivas que, quando o circo for embora, NUNCA MAIS voltarão!",
  durationDays: 30,
  fromCreated:  false,   // controle manual (liga/desliga por isActive)
  isActive:     false,   // ← troque pra true no lançamento
  comingSoon:   true,    // ← deixa "em breve" ativo pra criar expectativa
  archived:     false,
  rewards: [
    { req:50,   gold:700,   xp:450,   xpp:28,  card:"ev026", label:"50 batalhas"  },
    { req:420,  gold:2800,  xp:1900,  xpp:100, card:null,    label:"420 batalhas" },
    { req:1000,  gold:7500,  xp:5000,  xpp:260, card:"ev027", label:"1000 batalhas" },
    { req:1900, gold:18000, xp:12000, xpp:600, card:"ev028", label:"1900 batalhas – GRANDE PRÊMIO!" },
  ],
 },
{
  id:          "evt_akudama",
  name:        "🌃 Akudama Drive",
  icon:        "🚔",
  color:       "#e040fb",
  desc:        "Kansai caiu no caos. Criminosos de elite — os Akudama — cruzam a cidade numa fuga que não admite erros. Parceria oficial com o anime: cartas exclusivas que, quando o evento acabar, NUNCA MAIS voltarão!",
  durationDays: 7,          // ajustar pra duração real da parceria
  fromCreated:  false,       // controle manual, igual à Copa
  isActive:     false,       // ← trocar pra true no lançamento
  comingSoon:   false,        // ← já deixa "em breve" ativo pra criar expectativa
  archived:     true,
  rewards: [
    { req:50,   gold:800,   xp:600,   xpp:25,  card:"ev019", label:"50 batalhas"   },
    { req:150,  gold:2000,  xp:1400,  xpp:70,  card:"ev020", label:"150 batalhas"  },
    { req:275,  gold:3800,  xp:2600,  xpp:130, card:"ev021", label:"275 batalhas"  },
    { req:450,  gold:6500,  xp:4500,  xpp:220, card:"ev022", label:"450 batalhas"  },
    { req:650,  gold:11000, xp:7500,  xpp:350, card:null,    label:"650 batalhas"  },
    { req:850,  gold:16000, xp:11000, xpp:500, card:"ev023", label:"850 batalhas"  },
    { req:1100, gold:24000, xp:16000, xpp:700, card:"ev024", label:"1100 batalhas" },
    { req:1500, gold:40000, xp:26000, xpp:1000,card:"ev025", label:"1500 batalhas – GRANDE PRÊMIO!" },
  ],
},
{
  id:          "evt_copa",
  name:        "🏆 Copa do Mundo 2026",
  icon:        "⚽",
  color:       "#1a8a3f",
  desc:        "A grande final da Copa do Mundo! Guerreiros do futebol surgem nos campos de batalha. Cartas exclusivas disponíveis por APENAS 1 DIA — depois nunca mais voltarão!",
  durationDays: 1,          // ativo apenas hoje (19/07/2026)
  fromCreated:  false,      // controle manual (ativa/desativa via isActive)
  isActive:     false,       // ← ATIVO durante a copa
  comingSoon:   false,
  archived: true,
  rewards: [
    { req:25,  gold:1000,  xp:800,   xpp:30,  card:"ev016", label:"25 batalhas"  },
    { req:75,  gold:3000,  xp:2000,  xpp:100, card:null,    label:"75 batalhas" },
    { req:200, gold:8000,  xp:5000,  xpp:250, card:"ev017", label:"200 batalhas" },
    { req:500, gold:20000, xp:15000, xpp:500, card:"ev018", label:"500 batalhas – GRANDE PRÊMIO!" },
  ],
},
  {
    id:          "evt_chama",
    name:        "A Chama da Origem",
    icon:        "🔥",
    color:       "#ff4444",
    desc:        "Na aurora do jogo, os primeiros guerreiros despertam. Personagens exclusivos de lançamento que nunca mais estarão disponíveis!",
    durationDays:60,        // dura 60 dias a partir da criação da conta
    fromCreated: true,      // temporizador conta a partir da criação da conta
    isActive:    false,     // ← EVENTO ENCERRADO MANUALMENTE (não mexer nas cartas ev001/ev002/ev003!)
    archived:    true,     // troque pra true quando quiser sumir da tela de Eventos (as cartas continuam válidas pra sempre)
    rewards: [
      { req:5,  gold:500,   xp:300,   xpp:20,  card:"ev001", label:"5 batalhas"  },
      { req:15, gold:1500,  xp:1000,  xpp:60,  card:null,    label:"15 batalhas" },
      { req:30, gold:5000,  xp:3000,  xpp:150, card:"ev002", label:"30 batalhas" },
      { req:50, gold:15000, xp:10000, xpp:500, card:"ev003", label:"50 batalhas – GRANDE PRÊMIO!" },
    ],
  },
  {
    id:          "evt_trevas",
    name:        "Invasão das Trevas",
    icon:        "🌑",
    color:       "#9c27b0",
    desc:        "Personagens sombrios invadem o campo de batalha. Derrote-os para ganhar cartas EXCLUSIVAS de Trevas que nunca mais voltarão!",
    durationDays:30,
    fromCreated: false,     // controle manual (liga/desliga por isActive, sem depender da data de criação da conta)
    isActive:  false,      // ← ATIVADO agora
    archived:   true,
    rewards: [
      { req:80,   gold:800,   xp:500,   xpp:30,  card:"ev004", label:"80 batalhas" },
      { req:300,  gold:3000,  xp:2000,  xpp:100, card:null,    label:"300 batalhas" },
      { req:1000, gold:10000, xp:7000,  xpp:300, card:"ev005", label:"1000 batalhas – GRANDE PRÊMIO!" },
    ],
  },
  {
    id:          "evt_cosmos",
    name:        "Tempestade Cósmica",
    icon:        "🌊",
    color:       "#2196F3",
    desc:        "Guerreiros do cosmos descem à terra. Batalhe para desbloquear cartas de raridade cósmica inigualável!",
    durationDays:45,
    fromCreated: false,
    isActive:    false,
    comingSoon:  true,
    rewards: [
      { req:100,  gold:1000,  xp:600,   xpp:35,  card:"ev006", label:"100 batalhas" },
      { req:350,  gold:4000,  xp:2500,  xpp:120, card:null,    label:"350 batalhas" },
      { req:1200, gold:12000, xp:8000,  xpp:400, card:"ev007", label:"1200 batalhas – GRANDE PRÊMIO!" },
    ],
  },
  {
    id:          "evt_natal",
    name:        "Festival de Natal",
    icon:        "🎄",
    color:       "#4CAF50",
    desc:        "Guerreiros temáticos de natal, presentes especiais e cartas únicas de inverno! Disponível em dezembro.",
    durationDays:31,
    fromCreated: false,
    isActive:    false,
    comingSoon:  true,
    rewards: [
      { req:60,   gold:600,   xp:400,   xpp:25,  card:"ev008", label:"60 batalhas"  },
      { req:250,  gold:4000,  xp:2500,  xpp:120, card:null,    label:"250 batalhas" },
      { req:1000, gold:11000, xp:7500,  xpp:350, card:"ev009", label:"1000 batalhas – GRANDE PRÊMIO!" },
    ],
  },
];

// Verifica se um evento está ativo para o jogador
function isEventActive(event, save) {
  if (!event.isActive) return false;
  if (event.fromCreated) {
    const end = (save.createdAt || Date.now()) + event.durationDays * 86400000;
    return Date.now() < end;
  }
  return true;
}

// Verifica se um evento foi encerrado (mas cartas ainda ficam no cofre)
function isEventEnded(event, save) {
  // Encerrado manualmente: evento já foi ativo um dia e foi desligado (isActive:false),
  // e não é um evento futuro (comingSoon)
  if (!event.isActive && !event.comingSoon) return true;
  if (!event.fromCreated) return false;
  const end = (save.createdAt || Date.now()) + event.durationDays * 86400000;
  return Date.now() >= end;
}

// ══════════════════════════════════════════════════════════════
// PACOTES EXTRAS (injetados em PACKS)
// ══════════════════════════════════════════════════════════════
const EXTRA_PACKS = [
  {
    id:"pack_combo",
    name:"⚡ Pacote Combo",
    price:5400,
    rarities:["COMMON","RARE","RARE","COMMON"],
    count:4,
    desc:"Pacote custo-benefício para quem quer acumular Raros rápido.",
    emoji:"⚡",
    gradient:"linear-gradient(135deg,#0a1a2e,#1a2a4e)",
    borderColor:"#64b5f6",
  },
  {
    id:"pack_ultra_starter",
    name:"🌟 Pacote Ultra Iniciante",
    price:990,
    rarities:["COMMON","COMMON","RARE","COMMON","COMMON"],
    count:5,
    desc:"5 cartas para encherm o cofre rápido. Ótimo para novatos!",
    emoji:"🌟",
    gradient:"linear-gradient(135deg,#0a1a0a,#1a2a1a)",
    borderColor:"#66bb6a",
  },
];

// Injeta pacotes extras
if (typeof PACKS !== "undefined") {
  EXTRA_PACKS.forEach(p => {
    if (!PACKS.find(x => x.id === p.id)) {
      PACKS.unshift(p); // adiciona no início para aparecer primeiro
    }
  });
}

// JOGADORES SIMULADOS – 300 JOGADORES (v4.0)
// ══════════════════════════════════════════════════════════════
const SIMULATED_PLAYERS = [
  // ── TOP 3 – CRIADORES VERIFICADOS (stats absurdos) ──────────
  { name:"KairoMaster",    xpp:4800000000000, wins:98420, xp:9900000000, level:98,  winRate:72, vaultCards:2400, profileFrame:"frame_origens", profileTitle:"title_origens", isVerifiedCreator: true },
  { name:"VoidHunterX",    xpp:3200000000000, wins:75300, xp:7200000000, level:87,  winRate:68, vaultCards:1850, profileFrame:"frame_fire",    profileTitle:"title_god", isVerifiedCreator: true },
  { name:"ShadowOrigens",  xpp:2100000000000, wins:61000, xp:5400000000, level:79,  winRate:65, vaultCards:1600, profileFrame:"frame_diamond", profileTitle:"title_god", isVerifiedCreator: true },

  // ── TOP 10 (restante) ──────────────────────────────────────
  { name:"BladeEternal",   xpp:1500000000000, wins:52000, xp:4100000000, level:71,  winRate:63, vaultCards:1300, profileFrame:"frame_ice",     profileTitle:"title_legend" },
  { name:"FrostReaper",    xpp:890000000000,  wins:43000, xp:3200000000, level:63,  winRate:61, vaultCards:1100, profileFrame:"frame_gold",    profileTitle:"title_legend" },
  { name:"DragonSlayerZ",  xpp:600000000000,  wins:35000, xp:2600000000, level:57,  winRate:59, vaultCards:900,  profileFrame:"frame_fire",    profileTitle:"title_slayer" },
  { name:"NightVandal",    xpp:350000000000,  wins:28000, xp:1900000000, level:51,  winRate:57, vaultCards:750,  profileFrame:"frame_gold",    profileTitle:"title_slayer" },
  { name:"IronStorm99",    xpp:190000000000,  wins:21000, xp:1400000000, level:44,  winRate:55, vaultCards:600,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"CrimsonFang",    xpp:80000000000,   wins:14500, xp:950000000,  level:38,  winRate:53, vaultCards:450,  profileFrame:"",              profileTitle:"" },
  { name:"StarForged",     xpp:42000000000,   wins:9800,  xp:620000000,  level:31,  winRate:51, vaultCards:380,  profileFrame:"",              profileTitle:"" },

  // ── TOP 30 ──────────────────────────────────────────────────
  { name:"RuneMaster7",    xpp:18000000000,   wins:6200,  xp:380000000,  level:25,  winRate:49, vaultCards:280,  profileFrame:"",              profileTitle:"" },
  { name:"GrimWatcher",    xpp:7500000000,    wins:3800,  xp:210000000,  level:19,  winRate:47, vaultCards:200,  profileFrame:"",              profileTitle:"" },
  { name:"PhoenixRising",  xpp:2100000000,    wins:2100,  xp:98000000,   level:14,  winRate:45, vaultCards:150,  profileFrame:"",              profileTitle:"" },
  { name:"SilverEdge",     xpp:750000000,     wins:1200,  xp:42000000,   level:10,  winRate:44, vaultCards:110,  profileFrame:"",              profileTitle:"" },
  { name:"NovaBlade",      xpp:180000000,     wins:580,   xp:16000000,   level:7,   winRate:42, vaultCards:80,   profileFrame:"",              profileTitle:"" },
  { name:"YoungKnight",    xpp:45000000,      wins:230,   xp:5800000,    level:5,   winRate:40, vaultCards:55,   profileFrame:"",              profileTitle:"" },
  { name:"IronGuard01",    xpp:8900000,       wins:95,    xp:1200000,    level:3,   winRate:38, vaultCards:30,   profileFrame:"",              profileTitle:"" },
  { name:"StarterHero",    xpp:1500000,       wins:32,    xp:350000,     level:2,   winRate:35, vaultCards:18,   profileFrame:"",              profileTitle:"" },
  { name:"EclipseWarden",  xpp:4500000000000, wins:91200, xp:10500000000, level:96, winRate:74, vaultCards:2600, profileFrame:"frame_origens", profileTitle:"title_origens" },
  { name:"ShadowTitan",    xpp:3800000000000, wins:87600, xp:9100000000, level:92, winRate:71, vaultCards:2300, profileFrame:"frame_diamond", profileTitle:"title_god" },
  { name:"FrostEmperor",   xpp:2900000000000, wins:79500, xp:8200000000, level:88, winRate:70, vaultCards:2100, profileFrame:"frame_ice",     profileTitle:"title_god" },
  { name:"StormChaser",    xpp:2200000000000, wins:68800, xp:7100000000, level:83, winRate:69, vaultCards:1950, profileFrame:"frame_fire",    profileTitle:"title_legend" },
  { name:"IronVanguard",   xpp:1700000000000, wins:60200, xp:6300000000, level:78, winRate:67, vaultCards:1800, profileFrame:"frame_gold",    profileTitle:"title_legend" },
  { name:"BlazeFury",      xpp:1300000000000, wins:55600, xp:5600000000, level:73, winRate:65, vaultCards:1600, profileFrame:"frame_fire",    profileTitle:"title_slayer" },
  { name:"NightHawk",      xpp:980000000000,  wins:48500, xp:4800000000, level:68, winRate:64, vaultCards:1450, profileFrame:"frame_diamond", profileTitle:"title_slayer" },
  { name:"CrystalMage",    xpp:720000000000,  wins:42100, xp:3900000000, level:63, winRate:63, vaultCards:1350, profileFrame:"frame_ice",     profileTitle:"title_legend" },
  { name:"ThunderLord",    xpp:510000000000,  wins:36800, xp:3300000000, level:58, winRate:61, vaultCards:1200, profileFrame:"frame_gold",    profileTitle:"title_god" },
  { name:"ViperStrike",    xpp:380000000000,  wins:32100, xp:2800000000, level:54, winRate:60, vaultCards:1100, profileFrame:"frame_fire",    profileTitle:"" },
  { name:"SavageWolf",     xpp:260000000000,  wins:27800, xp:2300000000, level:50, winRate:58, vaultCards:980,  profileFrame:"frame_gold",    profileTitle:"title_slayer" },
  { name:"PhantomReaper",  xpp:180000000000,  wins:24500, xp:1900000000, level:46, winRate:57, vaultCards:890,  profileFrame:"frame_ice",     profileTitle:"title_slayer" },

  // ── TOP 60 ──────────────────────────────────────────────────
  { name:"SteelCrusader",  xpp:120000000000,  wins:21200, xp:1600000000, level:42, winRate:56, vaultCards:820,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"InfernoKing",    xpp:85000000000,   wins:18500, xp:1400000000, level:38, winRate:55, vaultCards:740,  profileFrame:"frame_diamond", profileTitle:"" },
  { name:"GlacierQueen",   xpp:58000000000,   wins:16200, xp:1150000000, level:35, winRate:54, vaultCards:680,  profileFrame:"frame_ice",     profileTitle:"title_legend" },
  { name:"DuskBlade",      xpp:42000000000,   wins:14200, xp:980000000,  level:31, winRate:53, vaultCards:610,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StarSniper",     xpp:28000000000,   wins:12500, xp:820000000,  level:28, winRate:52, vaultCards:550,  profileFrame:"frame_fire",    profileTitle:"title_slayer" },
  { name:"RuneWarrior",    xpp:19000000000,   wins:10800, xp:680000000,  level:25, winRate:51, vaultCards:500,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"GrimExecutor",   xpp:13000000000,   wins:9200,  xp:560000000,  level:22, winRate:50, vaultCards:460,  profileFrame:"",              profileTitle:"" },
  { name:"AshenOne",       xpp:8800000000,    wins:7800,  xp:450000000,  level:20, winRate:49, vaultCards:420,  profileFrame:"",              profileTitle:"" },
  { name:"CyberHawk",      xpp:6000000000,    wins:6500,  xp:360000000,  level:17, winRate:48, vaultCards:380,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"VenomSpirit",    xpp:4200000000,    wins:5600,  xp:300000000,  level:15, winRate:47, vaultCards:350,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"TerraGuard",     xpp:2900000000,    wins:4800,  xp:245000000,  level:14, winRate:46, vaultCards:320,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"AquaTitan",      xpp:2000000000,    wins:4200,  xp:200000000,  level:12, winRate:45, vaultCards:290,  profileFrame:"",              profileTitle:"" },
  { name:"WindWalker",     xpp:1400000000,    wins:3600,  xp:160000000,  level:11, winRate:44, vaultCards:260,  profileFrame:"frame_gold",    profileTitle:"title_slayer" },
  { name:"SolarFlare",     xpp:950000000,     wins:3100,  xp:130000000,  level:10, winRate:43, vaultCards:240,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"LunarEclipse",   xpp:680000000,     wins:2700,  xp:105000000,  level:9,  winRate:42, vaultCards:220,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"CobaltFang",     xpp:480000000,     wins:2350,  xp:85000000,   level:8,  winRate:41, vaultCards:200,  profileFrame:"",              profileTitle:"" },
  { name:"ObsidianKnight", xpp:340000000,     wins:2050,  xp:68000000,   level:7,  winRate:40, vaultCards:180,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ScarletWitch",   xpp:240000000,     wins:1800,  xp:55000000,   level:6,  winRate:39, vaultCards:165,  profileFrame:"",              profileTitle:"" },
  { name:"IronMaw",        xpp:170000000,     wins:1550,  xp:43000000,   level:6,  winRate:38, vaultCards:150,  profileFrame:"",              profileTitle:"" },
  { name:"ShadowProwler",  xpp:120000000,     wins:1350,  xp:35000000,   level:5,  winRate:37, vaultCards:140,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"SilverTalon",    xpp:85000000,      wins:1180,  xp:28000000,   level:5,  winRate:36, vaultCards:130,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"EmberHeart",     xpp:60000000,      wins:1020,  xp:22000000,   level:4,  winRate:35, vaultCards:120,  profileFrame:"",              profileTitle:"" },
  { name:"Frostbite",      xpp:42000000,      wins:880,   xp:17000000,   level:4,  winRate:34, vaultCards:110,  profileFrame:"",              profileTitle:"" },
  { name:"ThunderPaw",     xpp:29000000,      wins:760,   xp:13000000,   level:3,  winRate:33, vaultCards:100,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"VenomFang",      xpp:20000000,      wins:650,   xp:10000000,   level:3,  winRate:32, vaultCards:90,   profileFrame:"",              profileTitle:"" },
  { name:"RapidStrike",    xpp:14000000,      wins:550,   xp:7500000,    level:3,  winRate:31, vaultCards:85,   profileFrame:"",              profileTitle:"" },
  { name:"BruteForce",     xpp:9500000,       wins:460,   xp:5500000,    level:2,  winRate:30, vaultCards:75,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowStitch",   xpp:6500000,       wins:380,   xp:4000000,    level:2,  winRate:29, vaultCards:70,   profileFrame:"",              profileTitle:"" },
  { name:"StoneBreaker",   xpp:4500000,       wins:320,   xp:2800000,    level:2,  winRate:28, vaultCards:65,   profileFrame:"",              profileTitle:"" },
  { name:"IronClad",       xpp:3200000,       wins:270,   xp:2000000,    level:2,  winRate:27, vaultCards:60,   profileFrame:"",              profileTitle:"" },

  // ── TOP 100 ──────────────────────────────────────────────────
  { name:"SwiftArrow",     xpp:2200000,       wins:230,   xp:1400000,    level:2,  winRate:26, vaultCards:55,   profileFrame:"",              profileTitle:"" },
  { name:"BoldBrawler",    xpp:1500000,       wins:195,   xp:1000000,    level:2,  winRate:25, vaultCards:50,   profileFrame:"",              profileTitle:"" },
  { name:"SilentStep",     xpp:1050000,       wins:165,   xp:700000,     level:1,  winRate:24, vaultCards:45,   profileFrame:"",              profileTitle:"" },
  { name:"WildCard",       xpp:720000,        wins:140,   xp:480000,     level:1,  winRate:23, vaultCards:40,   profileFrame:"",              profileTitle:"" },
  { name:"CrimsonTide",    xpp:500000,        wins:118,   xp:330000,     level:1,  winRate:22, vaultCards:38,   profileFrame:"",              profileTitle:"" },
  { name:"BlindSniper",    xpp:350000,        wins:98,    xp:220000,     level:1,  winRate:21, vaultCards:35,   profileFrame:"",              profileTitle:"" },
  { name:"StormRider",     xpp:240000,        wins:82,    xp:150000,     level:1,  winRate:20, vaultCards:32,   profileFrame:"",              profileTitle:"" },
  { name:"DarkRitual",     xpp:165000,        wins:68,    xp:100000,     level:1,  winRate:19, vaultCards:30,   profileFrame:"",              profileTitle:"" },
  { name:"GoldenFist",     xpp:115000,        wins:56,    xp:68000,      level:1,  winRate:18, vaultCards:28,   profileFrame:"",              profileTitle:"" },
  { name:"NightOwl",       xpp:80000,         wins:46,    xp:45000,      level:1,  winRate:17, vaultCards:25,   profileFrame:"",              profileTitle:"" },
  { name:"FuryBlaze",      xpp:55000,         wins:38,    xp:30000,      level:1,  winRate:16, vaultCards:22,   profileFrame:"",              profileTitle:"" },
  { name:"ZenMaster",      xpp:38000,         wins:31,    xp:20000,      level:1,  winRate:15, vaultCards:20,   profileFrame:"",              profileTitle:"" },
  { name:"RogueAgent",     xpp:26000,         wins:25,    xp:13000,      level:1,  winRate:14, vaultCards:18,   profileFrame:"",              profileTitle:"" },
  { name:"ApexHunter",     xpp:18000,         wins:20,    xp:8500,       level:1,  winRate:13, vaultCards:16,   profileFrame:"",              profileTitle:"" },
  { name:"MysticEcho",     xpp:12000,         wins:16,    xp:5500,       level:1,  winRate:12, vaultCards:14,   profileFrame:"",              profileTitle:"" },
  { name:"CobaltBlade",    xpp:8000,          wins:12,    xp:3500,       level:1,  winRate:11, vaultCards:12,   profileFrame:"",              profileTitle:"" },
  { name:"BurningAce",     xpp:5500,          wins:9,     xp:2200,       level:1,  winRate:10, vaultCards:10,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowFox",      xpp:3700,          wins:7,     xp:1400,       level:1,  winRate:9,  vaultCards:9,    profileFrame:"",              profileTitle:"" },
  { name:"ThunderAxe",     xpp:2500,          wins:5,     xp:900,        level:1,  winRate:8,  vaultCards:8,    profileFrame:"",              profileTitle:"" },
  { name:"FrostShield",    xpp:1700,          wins:4,     xp:600,        level:1,  winRate:7,  vaultCards:7,    profileFrame:"",              profileTitle:"" },
  { name:"IronSoul",       xpp:1100,          wins:3,     xp:400,        level:1,  winRate:6,  vaultCards:6,    profileFrame:"",              profileTitle:"" },
  { name:"SkyChaser",      xpp:750,           wins:2,     xp:250,        level:1,  winRate:5,  vaultCards:5,    profileFrame:"",              profileTitle:"" },
  { name:"BattleBard",     xpp:500,           wins:1,     xp:150,        level:1,  winRate:4,  vaultCards:4,    profileFrame:"",              profileTitle:"" },
  { name:"WanderingSage",  xpp:330,           wins:0,     xp:90,         level:1,  winRate:3,  vaultCards:3,    profileFrame:"",              profileTitle:"" },
  { name:"VoidWalker",     xpp:220,           wins:0,     xp:50,         level:1,  winRate:2,  vaultCards:2,    profileFrame:"",              profileTitle:"" },
  { name:"EmberSoul",      xpp:145,           wins:0,     xp:25,         level:1,  winRate:1,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"BlazingStar",    xpp:4000000000,    wins:5100,  xp:280000000,  level:14, winRate:47, vaultCards:330,  profileFrame:"frame_fire",    profileTitle:"title_slayer" },
  { name:"DreadKnight",    xpp:2700000000,    wins:4350,  xp:210000000,  level:13, winRate:46, vaultCards:300,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"MysticWeaver",   xpp:1800000000,    wins:3700,  xp:160000000,  level:11, winRate:45, vaultCards:270,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"RustyBlade",     xpp:1200000000,    wins:3100,  xp:120000000,  level:10, winRate:44, vaultCards:245,  profileFrame:"",              profileTitle:"" },
  { name:"CrimsonStorm",   xpp:800000000,     wins:2600,  xp:90000000,   level:9,  winRate:43, vaultCards:225,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"ArcaneWarden",   xpp:540000000,     wins:2200,  xp:68000000,   level:8,  winRate:42, vaultCards:205,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ShadowSage",     xpp:360000000,     wins:1850,  xp:50000000,   level:7,  winRate:41, vaultCards:185,  profileFrame:"",              profileTitle:"" },

  // ── TOP 150 ──────────────────────────────────────────────────
  { name:"IronBeast",      xpp:240000000,     wins:1550,  xp:38000000,   level:6,  winRate:40, vaultCards:170,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"FrostWraith",    xpp:160000000,     wins:1300,  xp:28000000,   level:5,  winRate:39, vaultCards:155,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"StormWeaver",    xpp:105000000,     wins:1100,  xp:21000000,   level:4,  winRate:38, vaultCards:145,  profileFrame:"",              profileTitle:"" },
  { name:"PhantomFist",    xpp:70000000,      wins:920,   xp:15000000,   level:4,  winRate:37, vaultCards:135,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"DarkHarbinger",  xpp:46000000,      wins:780,   xp:11000000,   level:3,  winRate:36, vaultCards:125,  profileFrame:"",              profileTitle:"" },
  { name:"SolarKnight",    xpp:30000000,      wins:660,   xp:8000000,    level:3,  winRate:35, vaultCards:115,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"LunarTide",      xpp:20000000,      wins:550,   xp:5800000,    level:3,  winRate:34, vaultCards:105,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"FuryEdge",       xpp:13000000,      wins:460,   xp:4200000,    level:2,  winRate:33, vaultCards:95,   profileFrame:"",              profileTitle:"" },
  { name:"CelestialWarden",xpp:8500000,       wins:380,   xp:3000000,    level:2,  winRate:32, vaultCards:85,   profileFrame:"",              profileTitle:"" },
  { name:"InfernalMaw",    xpp:5600000,       wins:310,   xp:2100000,    level:2,  winRate:31, vaultCards:75,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"TwilightHunter", xpp:3700000,       wins:260,   xp:1400000,    level:2,  winRate:30, vaultCards:68,   profileFrame:"",              profileTitle:"" },
  { name:"EternalGuard",   xpp:2400000,       wins:210,   xp:950000,     level:2,  winRate:29, vaultCards:60,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ChaosBringer",   xpp:1600000,       wins:170,   xp:630000,     level:2,  winRate:28, vaultCards:52,   profileFrame:"",              profileTitle:"" },
  { name:"DawnBreaker",    xpp:1050000,       wins:135,   xp:420000,     level:1,  winRate:27, vaultCards:46,   profileFrame:"",              profileTitle:"" },
  { name:"NightWarden",    xpp:700000,        wins:110,   xp:280000,     level:1,  winRate:26, vaultCards:42,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"FlameStriker",   xpp:460000,        wins:90,    xp:180000,     level:1,  winRate:25, vaultCards:38,   profileFrame:"",              profileTitle:"" },
  { name:"FrostFury",      xpp:300000,        wins:72,    xp:120000,     level:1,  winRate:24, vaultCards:34,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"ThunderClap",    xpp:200000,        wins:58,    xp:78000,      level:1,  winRate:23, vaultCards:30,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowClaw",     xpp:130000,        wins:46,    xp:50000,      level:1,  winRate:22, vaultCards:26,   profileFrame:"",              profileTitle:"" },
  { name:"IronWill",       xpp:85000,         wins:36,    xp:32000,      level:1,  winRate:21, vaultCards:22,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormBlade",     xpp:56000,         wins:28,    xp:20000,      level:1,  winRate:20, vaultCards:18,   profileFrame:"",              profileTitle:"" },
  { name:"RuneCarver",     xpp:37000,         wins:22,    xp:13000,      level:1,  winRate:19, vaultCards:15,   profileFrame:"",              profileTitle:"" },
  { name:"BattleTitan",    xpp:24000,         wins:17,    xp:8500,       level:1,  winRate:18, vaultCards:12,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ShadowWeaver",   xpp:16000,         wins:13,    xp:5500,       level:1,  winRate:17, vaultCards:10,   profileFrame:"",              profileTitle:"" },
  { name:"SkyFury",        xpp:10500,         wins:10,    xp:3500,       level:1,  winRate:16, vaultCards:8,    profileFrame:"",              profileTitle:"" },
  { name:"CrimsonEdge",    xpp:6900,          wins:8,     xp:2200,       level:1,  winRate:15, vaultCards:6,    profileFrame:"frame_fire",    profileTitle:"" },
  { name:"FrostHammer",    xpp:4500,          wins:6,     xp:1400,       level:1,  winRate:14, vaultCards:5,    profileFrame:"",              profileTitle:"" },
  { name:"EagleEye",       xpp:2900,          wins:4,     xp:900,        level:1,  winRate:13, vaultCards:4,    profileFrame:"frame_gold",    profileTitle:"" },
  { name:"WolfPack",       xpp:1900,          wins:3,     xp:600,        level:1,  winRate:12, vaultCards:3,    profileFrame:"",              profileTitle:"" },
  { name:"ViperFang",      xpp:1200,          wins:2,     xp:400,        level:1,  winRate:11, vaultCards:2,    profileFrame:"",              profileTitle:"" },
  { name:"BronzeWarrior",  xpp:800,           wins:1,     xp:250,        level:1,  winRate:10, vaultCards:1,    profileFrame:"",              profileTitle:"" },

  // ── TOP 200 ──────────────────────────────────────────────────
  { name:"SteelGuardian",  xpp:520,           wins:0,     xp:150,        level:1,  winRate:9,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"EmberKnight",    xpp:340,           wins:0,     xp:90,         level:1,  winRate:8,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"AquaSage",       xpp:220,           wins:0,     xp:50,         level:1,  winRate:7,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"DarkEmperor",    xpp:145,           wins:0,     xp:25,         level:1,  winRate:6,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"LightBringer",   xpp:95,            wins:0,     xp:15,         level:1,  winRate:5,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"StormCaller",    xpp:62000000000,   wins:16800, xp:1200000000, level:36, winRate:55, vaultCards:700,  profileFrame:"frame_diamond", profileTitle:"title_legend" },
  { name:"FrostGiant",     xpp:43000000000,   wins:14500, xp:1020000000, level:33, winRate:54, vaultCards:640,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ShadowEmperor",  xpp:30000000000,   wins:12800, xp:850000000,  level:30, winRate:53, vaultCards:590,  profileFrame:"frame_fire",    profileTitle:"title_slayer" },
  { name:"IronFist",       xpp:21000000000,   wins:11200, xp:700000000,  level:27, winRate:52, vaultCards:540,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"CrystalWarden",  xpp:14500000000,   wins:9800,  xp:580000000,  level:24, winRate:51, vaultCards:490,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"BlazeKnight",    xpp:10000000000,   wins:8500,  xp:470000000,  level:21, winRate:50, vaultCards:450,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"RuneMage",       xpp:6900000000,    wins:7400,  xp:380000000,  level:18, winRate:49, vaultCards:410,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"DragonHeart",    xpp:4700000000,    wins:6400,  xp:310000000,  level:16, winRate:48, vaultCards:370,  profileFrame:"frame_diamond", profileTitle:"" },
  { name:"EclipseHunter",  xpp:3200000000,    wins:5500,  xp:250000000,  level:14, winRate:47, vaultCards:340,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"StormGuard",     xpp:2200000000,    wins:4700,  xp:200000000,  level:12, winRate:46, vaultCards:310,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"VenomStrike",    xpp:1500000000,    wins:4000,  xp:160000000,  level:11, winRate:45, vaultCards:280,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ArcaneShadow",   xpp:1000000000,    wins:3400,  xp:125000000,  level:10, winRate:44, vaultCards:250,  profileFrame:"",              profileTitle:"" },
  { name:"FrostReaver",    xpp:680000000,     wins:2900,  xp:98000000,   level:9,  winRate:43, vaultCards:230,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ThunderFury",    xpp:460000000,     wins:2450,  xp:76000000,   level:8,  winRate:42, vaultCards:210,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"ShadowHunter",   xpp:310000000,     wins:2050,  xp:58000000,   level:7,  winRate:41, vaultCards:190,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"IronReaper",     xpp:210000000,     wins:1700,  xp:44000000,   level:6,  winRate:40, vaultCards:175,  profileFrame:"",              profileTitle:"" },
  { name:"CrimsonKnight",  xpp:140000000,     wins:1400,  xp:33000000,   level:5,  winRate:39, vaultCards:160,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"DuskMarauder",   xpp:95000000,      wins:1150,  xp:25000000,   level:5,  winRate:38, vaultCards:145,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"FrostWolf",      xpp:64000000,      wins:950,   xp:18000000,   level:4,  winRate:37, vaultCards:130,  profileFrame:"",              profileTitle:"" },
  { name:"ShadowFury",     xpp:43000000,      wins:780,   xp:13000000,   level:3,  winRate:36, vaultCards:115,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormTamer",     xpp:29000000,      wins:640,   xp:9500000,    level:3,  winRate:35, vaultCards:105,  profileFrame:"",              profileTitle:"" },
  { name:"RuneGuardian",   xpp:19000000,      wins:530,   xp:6800000,    level:3,  winRate:34, vaultCards:95,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"BladeMaster",    xpp:13000000,      wins:440,   xp:4800000,    level:2,  winRate:33, vaultCards:85,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"EternalFlame",   xpp:8500000,       wins:360,   xp:3400000,    level:2,  winRate:32, vaultCards:75,   profileFrame:"",              profileTitle:"" },
  { name:"DarkTitan",      xpp:5600000,       wins:300,   xp:2400000,    level:2,  winRate:31, vaultCards:65,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"SilverWolf",     xpp:3700000,       wins:250,   xp:1700000,    level:2,  winRate:30, vaultCards:58,   profileFrame:"",              profileTitle:"" },
  { name:"PhantomBlade",   xpp:2400000,       wins:205,   xp:1200000,    level:2,  winRate:29, vaultCards:50,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"NightReaper",    xpp:1600000,       wins:170,   xp:850000,     level:2,  winRate:28, vaultCards:44,   profileFrame:"",              profileTitle:"" },
  { name:"CelestialFury",  xpp:1050000,       wins:140,   xp:580000,     level:1,  winRate:27, vaultCards:38,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"InfernoBlade",   xpp:700000,        wins:115,   xp:390000,     level:1,  winRate:26, vaultCards:32,   profileFrame:"",              profileTitle:"" },
  { name:"FrostBite",      xpp:460000,        wins:95,    xp:260000,     level:1,  winRate:25, vaultCards:28,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ThunderStrike",  xpp:300000,        wins:78,    xp:170000,     level:1,  winRate:24, vaultCards:24,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowSlayer",   xpp:200000,        wins:64,    xp:110000,     level:1,  winRate:23, vaultCards:20,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"IronMage",       xpp:130000,        wins:52,    xp:72000,      level:1,  winRate:22, vaultCards:17,   profileFrame:"",              profileTitle:"" },

  // ── TOP 250 ──────────────────────────────────────────────────
  { name:"StormFury",      xpp:85000,         wins:42,    xp:46000,      level:1,  winRate:21, vaultCards:14,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"CrimsonWraith",  xpp:56000,         wins:34,    xp:30000,      level:1,  winRate:20, vaultCards:12,   profileFrame:"",              profileTitle:"" },
  { name:"RuneSlayer",     xpp:37000,         wins:27,    xp:19000,      level:1,  winRate:19, vaultCards:10,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"BattleMage",     xpp:24000,         wins:21,    xp:12000,      level:1,  winRate:18, vaultCards:8,    profileFrame:"",              profileTitle:"" },
  { name:"ShadowBlade",    xpp:16000,         wins:16,    xp:7500,       level:1,  winRate:17, vaultCards:7,    profileFrame:"",              profileTitle:"" },
  { name:"FrostMage",      xpp:10500,         wins:12,    xp:4800,       level:1,  winRate:16, vaultCards:6,    profileFrame:"frame_fire",    profileTitle:"" },
  { name:"EagleEye",       xpp:6900,          wins:9,     xp:3000,       level:1,  winRate:15, vaultCards:5,    profileFrame:"",              profileTitle:"" },
  { name:"IronHeart",      xpp:4500,          wins:7,     xp:1900,       level:1,  winRate:14, vaultCards:4,    profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ThunderPulse",   xpp:2900,          wins:5,     xp:1200,       level:1,  winRate:13, vaultCards:3,    profileFrame:"",              profileTitle:"" },
  { name:"CrimsonFury",    xpp:1900,          wins:4,     xp:750,        level:1,  winRate:12, vaultCards:2,    profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormWolf",      xpp:1200,          wins:3,     xp:480,        level:1,  winRate:11, vaultCards:2,    profileFrame:"",              profileTitle:"" },
  { name:"ShadowTalon",    xpp:800,           wins:2,     xp:300,        level:1,  winRate:10, vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"FrostClaw",      xpp:520,           wins:1,     xp:190,        level:1,  winRate:9,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"EmberWolf",      xpp:340,           wins:0,     xp:120,        level:1,  winRate:8,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"DuskFury",       xpp:220,           wins:0,     xp:75,         level:1,  winRate:7,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"RuneWolf",       xpp:145,           wins:0,     xp:45,         level:1,  winRate:6,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"IronWolf",       xpp:95,            wins:0,     xp:25,         level:1,  winRate:5,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"BlazeWolf",      xpp:60,            wins:0,     xp:15,         level:1,  winRate:4,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"ShadowWolf",     xpp:40,            wins:0,     xp:10,         level:1,  winRate:3,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"FrostWolf",      xpp:25,            wins:0,     xp:5,          level:1,  winRate:2,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"StormWolf",      xpp:15,            wins:0,     xp:2,          level:1,  winRate:1,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"VoidSpectre",    xpp:4800000000,    wins:5300,  xp:295000000,  level:14, winRate:47, vaultCards:340,  profileFrame:"frame_diamond", profileTitle:"title_legend" },
  { name:"DarkNova",       xpp:3200000000,    wins:4600,  xp:215000000,  level:13, winRate:46, vaultCards:305,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"CrimsonAce",     xpp:2100000000,    wins:3900,  xp:165000000,  level:11, winRate:45, vaultCards:275,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"FrostEdge",      xpp:1400000000,    wins:3200,  xp:125000000,  level:10, winRate:44, vaultCards:250,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"ShadowAdept",    xpp:950000000,     wins:2700,  xp:95000000,   level:9,  winRate:43, vaultCards:230,  profileFrame:"",              profileTitle:"" },
  { name:"ThunderWolf",    xpp:650000000,     wins:2300,  xp:70000000,   level:8,  winRate:42, vaultCards:210,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"IronPheonix",    xpp:430000000,     wins:1950,  xp:53000000,   level:7,  winRate:41, vaultCards:190,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormWeaver",    xpp:290000000,     wins:1650,  xp:39000000,   level:6,  winRate:40, vaultCards:170,  profileFrame:"",              profileTitle:"" },
  { name:"CrystalKnight",  xpp:190000000,     wins:1380,  xp:29000000,   level:5,  winRate:39, vaultCards:155,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"RuneStorm",      xpp:130000000,     wins:1150,  xp:21000000,   level:4,  winRate:38, vaultCards:140,  profileFrame:"frame_fire",    profileTitle:"" },
  { name:"EclipseBlade",   xpp:85000000,      wins:950,   xp:16000000,   level:4,  winRate:37, vaultCards:130,  profileFrame:"",              profileTitle:"" },
  { name:"FrostStorm",     xpp:56000000,      wins:790,   xp:12000000,   level:3,  winRate:36, vaultCards:120,  profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ShadowGale",     xpp:37000000,      wins:660,   xp:9000000,    level:3,  winRate:35, vaultCards:110,  profileFrame:"",              profileTitle:"" },
  { name:"StormMage",      xpp:24000000,      wins:550,   xp:6500000,    level:3,  winRate:34, vaultCards:100,  profileFrame:"frame_ice",     profileTitle:"" },
  { name:"DarkFlame",      xpp:16000000,      wins:460,   xp:4800000,    level:2,  winRate:33, vaultCards:90,   profileFrame:"",              profileTitle:"" },
  { name:"RuneFire",       xpp:10500000,      wins:380,   xp:3500000,    level:2,  winRate:32, vaultCards:85,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"IceWolf",        xpp:7000000,       wins:310,   xp:2500000,    level:2,  winRate:31, vaultCards:75,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowFrost",    xpp:4600000,       wins:260,   xp:1800000,    level:2,  winRate:30, vaultCards:65,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormChaser",    xpp:3000000,       wins:210,   xp:1300000,    level:2,  winRate:29, vaultCards:55,   profileFrame:"",              profileTitle:"" },
  { name:"CrimsonWolf",    xpp:2000000,       wins:170,   xp:900000,     level:2,  winRate:28, vaultCards:48,   profileFrame:"frame_ice",     profileTitle:"" },

  // ── TOP 300 ──────────────────────────────────────────────────
  { name:"FrostAce",       xpp:1300000,       wins:140,   xp:650000,     level:1,  winRate:27, vaultCards:42,   profileFrame:"",              profileTitle:"" },
  { name:"ShadowStorm",    xpp:850000,        wins:110,   xp:450000,     level:1,  winRate:26, vaultCards:36,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"ThunderWraith",  xpp:560000,        wins:90,    xp:310000,     level:1,  winRate:25, vaultCards:30,   profileFrame:"",              profileTitle:"" },
  { name:"IronFlame",      xpp:370000,        wins:72,    xp:210000,     level:1,  winRate:24, vaultCards:26,   profileFrame:"frame_gold",    profileTitle:"" },
  { name:"CrystalFury",    xpp:240000,        wins:58,    xp:140000,     level:1,  winRate:23, vaultCards:22,   profileFrame:"",              profileTitle:"" },
  { name:"EclipseWolf",    xpp:160000,        wins:46,    xp:95000,      level:1,  winRate:22, vaultCards:18,   profileFrame:"frame_ice",     profileTitle:"" },
  { name:"RuneTiger",      xpp:105000,        wins:36,    xp:62000,      level:1,  winRate:21, vaultCards:15,   profileFrame:"",              profileTitle:"" },
  { name:"StormPanther",   xpp:70000,         wins:28,    xp:42000,      level:1,  winRate:20, vaultCards:12,   profileFrame:"frame_fire",    profileTitle:"" },
  { name:"DarkLion",       xpp:46000,         wins:22,    xp:28000,      level:1,  winRate:19, vaultCards:10,   profileFrame:"",              profileTitle:"" },
  { name:"FrostBear",      xpp:30000,         wins:17,    xp:18000,      level:1,  winRate:18, vaultCards:8,    profileFrame:"frame_gold",    profileTitle:"" },
  { name:"ShadowHawk",     xpp:20000,         wins:13,    xp:12000,      level:1,  winRate:17, vaultCards:6,    profileFrame:"",              profileTitle:"" },
  { name:"ThunderFox",     xpp:13000,         wins:10,    xp:7500,       level:1,  winRate:16, vaultCards:5,    profileFrame:"frame_ice",     profileTitle:"" },
  { name:"IronEagle",      xpp:8500,          wins:8,     xp:4800,       level:1,  winRate:15, vaultCards:4,    profileFrame:"",              profileTitle:"" },
  { name:"CrimsonLion",    xpp:5600,          wins:6,     xp:3000,       level:1,  winRate:14, vaultCards:3,    profileFrame:"frame_fire",    profileTitle:"" },
  { name:"FrostPhoenix",   xpp:3700,          wins:4,     xp:1900,       level:1,  winRate:13, vaultCards:2,    profileFrame:"",              profileTitle:"" },
  { name:"ShadowTiger",    xpp:2400,          wins:3,     xp:1200,       level:1,  winRate:12, vaultCards:2,    profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormLion",      xpp:1600,          wins:2,     xp:750,        level:1,  winRate:11, vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"DarkWolf",       xpp:1050,          wins:1,     xp:480,        level:1,  winRate:10, vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"RuneHawk",       xpp:700,           wins:0,     xp:300,        level:1,  winRate:9,  vaultCards:1,    profileFrame:"frame_ice",     profileTitle:"" },
  { name:"FrostPanther",   xpp:460,           wins:0,     xp:190,        level:1,  winRate:8,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"IronTiger",      xpp:300,           wins:0,     xp:120,        level:1,  winRate:7,  vaultCards:1,    profileFrame:"frame_fire",    profileTitle:"" },
  { name:"CrimsonEagle",   xpp:200,           wins:0,     xp:75,         level:1,  winRate:6,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"ShadowBear",     xpp:130,           wins:0,     xp:45,         level:1,  winRate:5,  vaultCards:1,    profileFrame:"frame_gold",    profileTitle:"" },
  { name:"StormHawk",      xpp:85,            wins:0,     xp:25,         level:1,  winRate:4,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"DarkPanther",    xpp:55,            wins:0,     xp:15,         level:1,  winRate:3,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"RuneWolf",       xpp:35,            wins:0,     xp:10,         level:1,  winRate:2,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  { name:"FrostLion",      xpp:20,            wins:0,     xp:5,          level:1,  winRate:1,  vaultCards:1,    profileFrame:"",              profileTitle:"" },
  // ── NOVOS JOGADORES SIMULADOS (valores absurdos para desafiar o ranking) ──
{ name:"CosmicTitan",       xpp:2500000000000000, wins:1520000, xp:52000000000, level:178, winRate:92, vaultCards:9200, profileFrame:"frame_origens", profileTitle:"title_origens", isVerifiedCreator: true },
{ name:"AbyssalKing",       xpp:1800000000000000, wins:1250000, xp:45000000000, level:168, winRate:90, vaultCards:8500, profileFrame:"frame_diamond", profileTitle:"title_origens", isVerifiedCreator: true },
{ name:"EternalFlame",      xpp:1300000000000000, wins:1050000, xp:38000000000, level:160, winRate:89, vaultCards:7800, profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"OmegaDevourer",     xpp:950000000000000,  wins:920000,  xp:32000000000, level:152, winRate:88, vaultCards:7200, profileFrame:"frame_origens", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"CelestialWarden",   xpp:720000000000000,  wins:850000,  xp:29000000000, level:148, winRate:87, vaultCards:6800, profileFrame:"frame_diamond", profileTitle:"title_origens", isVerifiedCreator: true },
{ name:"PrimalFury",        xpp:550000000000000,  wins:790000,  xp:25000000000, level:142, winRate:86, vaultCards:6400, profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"NullVortex",        xpp:420000000000000,  wins:740000,  xp:22000000000, level:137, winRate:85, vaultCards:6000, profileFrame:"frame_gold",    profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"ZenithLord",        xpp:330000000000000,  wins:700000,  xp:19000000000, level:132, winRate:84, vaultCards:5700, profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"QuantumShadow",     xpp:260000000000000,  wins:660000,  xp:17000000000, level:128, winRate:83, vaultCards:5400, profileFrame:"frame_diamond", profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"InfernoEmperor",    xpp:210000000000000,  wins:630000,  xp:15000000000, level:124, winRate:82, vaultCards:5100, profileFrame:"frame_fire",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"GlacierFang",       xpp:165000000000000,  wins:600000,  xp:13000000000, level:120, winRate:81, vaultCards:4800, profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"ObsidianKnight",    xpp:130000000000000,  wins:570000,  xp:12000000000, level:116, winRate:80, vaultCards:4500, profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"SolarMonarch",      xpp:100000000000000,  wins:540000,  xp:10500000000, level:112, winRate:79, vaultCards:4300, profileFrame:"frame_diamond", profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"StellarDragon",     xpp:78000000000000,   wins:520000,  xp:9500000000,  level:108, winRate:78, vaultCards:4100, profileFrame:"frame_origens", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"DracoImperius",     xpp:60000000000000,   wins:490000,  xp:8500000000,  level:104, winRate:77, vaultCards:3900, profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"RagnarokBringer",   xpp:45000000000000,   wins:460000,  xp:7800000000,  level:100, winRate:76, vaultCards:3700, profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"TitanOfOrigins",    xpp:35000000000000,   wins:430000,  xp:7000000000,  level:96,  winRate:75, vaultCards:3500, profileFrame:"frame_origens", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"AsgardChampion",    xpp:27000000000000,   wins:410000,  xp:6400000000,  level:92,  winRate:74, vaultCards:3300, profileFrame:"frame_ice",     profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"OlympusGuardian",   xpp:20000000000000,   wins:390000,  xp:5800000000,  level:88,  winRate:73, vaultCards:3100, profileFrame:"frame_diamond", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"ChronoArchon",      xpp:15000000000000,   wins:370000,  xp:5200000000,  level:84,  winRate:72, vaultCards:2900, profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"GalacticOverlord",  xpp:11000000000000,   wins:350000,  xp:4800000000,  level:80,  winRate:71, vaultCards:2700, profileFrame:"frame_origens", profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"MythicKaiser",      xpp:8000000000000,    wins:330000,  xp:4300000000,  level:76,  winRate:70, vaultCards:2500, profileFrame:"frame_fire",    profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"EpochSentinel",     xpp:5800000000000,    wins:310000,  xp:3900000000,  level:72,  winRate:69, vaultCards:2300, profileFrame:"frame_ice",     profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"AeonWalker",        xpp:4200000000000,    wins:290000,  xp:3500000000,  level:68,  winRate:68, vaultCards:2100, profileFrame:"frame_diamond", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"InfinityEdge",      xpp:3000000000000,    wins:270000,  xp:3200000000,  level:64,  winRate:67, vaultCards:1900, profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"ParadoxReaver",     xpp:2200000000000,    wins:250000,  xp:2900000000,  level:60,  winRate:66, vaultCards:1700, profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"QuantumCrown",      xpp:1600000000000,    wins:230000,  xp:2600000000,  level:56,  winRate:65, vaultCards:1500, profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"NexusPrime",        xpp:1150000000000,    wins:210000,  xp:2300000000,  level:52,  winRate:64, vaultCards:1300, profileFrame:"frame_diamond", profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"SingularityGod",    xpp:850000000000,     wins:190000,  xp:2000000000,  level:48,  winRate:63, vaultCards:1100, profileFrame:"frame_origens", profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"CelestialSage",     xpp:620000000000,     wins:170000,  xp:1800000000,  level:44,  winRate:62, vaultCards:900,  profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"DarknessIncarnate", xpp:450000000000,     wins:150000,  xp:1600000000,  level:40,  winRate:61, vaultCards:750,  profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"Lightmaker",        xpp:330000000000,     wins:130000,  xp:1400000000,  level:36,  winRate:60, vaultCards:600,  profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"Skybreaker",        xpp:240000000000,     wins:110000,  xp:1200000000,  level:32,  winRate:59, vaultCards:450,  profileFrame:"frame_diamond", profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"Earthshaker",       xpp:170000000000,     wins:90000,   xp:1000000000,  level:28,  winRate:58, vaultCards:300,  profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"OceanusPrime",      xpp:120000000000,     wins:70000,   xp:800000000,   level:24,  winRate:57, vaultCards:150,  profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"Pyroclast",         xpp:85000000000,      wins:50000,   xp:600000000,   level:20,  winRate:56, vaultCards:100,  profileFrame:"frame_ice",     profileTitle:"title_god",      isVerifiedCreator: true },
{ name:"Cryogenic",         xpp:60000000000,      wins:30000,   xp:400000000,   level:16,  winRate:55, vaultCards:80,   profileFrame:"frame_diamond", profileTitle:"title_legend",   isVerifiedCreator: false },
{ name:"TempestDuke",       xpp:42000000000,      wins:15000,   xp:250000000,   level:12,  winRate:54, vaultCards:60,   profileFrame:"frame_gold",    profileTitle:"title_slayer",   isVerifiedCreator: false },
{ name:"ArcanumLich",       xpp:28000000000,      wins:8000,    xp:150000000,   level:9,   winRate:53, vaultCards:40,   profileFrame:"frame_fire",    profileTitle:"title_legend",   isVerifiedCreator: true },
{ name:"DreadKaiser",       xpp:15000000000,      wins:4000,    xp:80000000,    level:6,   winRate:52, vaultCards:20,   profileFrame:"frame_ice",     profileTitle:"title_slayer",   isVerifiedCreator: false },
];

// ══════════════════════════════════════════════════════════════
// CRIADOR DE CONTEÚDO VERIFICADO – v7.0 EXPANDIDO
// ══════════════════════════════════════════════════════════════
// Chave concedida manualmente por um dev da Origens Games no Discord,
// após avaliação do canal do streamer/criador.
const CREATOR_KEY = "OrigensVerificadoOx01OKLMm";

// Itens exclusivos concedidos ao verificar (não estão à venda na loja)
const CREATOR_ITEMS = [
  { id:"badge_verified", name:"Selo de Criador Verificado", type:"badge",
    emoji:"✅", desc:"Concedido pela equipe Origens Games a criadores de conteúdo verificados.",
    color:"#29b6f6", rarity:"ORIGENS", price:0 },
  { id:"frame_creator", name:"Moldura de Criador", type:"frame",
    emoji:"🎬", desc:"Exclusiva de quem cria conteúdo oficial para a Origens Games.",
    color:"#29b6f6", rarity:"ORIGENS", price:0 },
  { id:"title_creator", name:"Título: Criador Origens", type:"title",
    emoji:"🎥", desc:"Reconhecimento oficial de criador de conteúdo parceiro.",
    color:"#29b6f6", rarity:"ORIGENS", price:0 },
  { id:"avatar_creator", name:"Avatar: Estrela Criador", type:"avatar",
    emoji:"⭐", desc:"Avatar exclusivo para criadores verificados.",
    color:"#ffd600", rarity:"ORIGENS", price:0 },
  { id:"effect_creator", name:"Efeito: Aura de Criador", type:"effect",
    emoji:"✨", desc:"Efeito de brilho exclusivo para criadores.",
    color:"#29b6f6", rarity:"ORIGENS", price:0 },
];

// Regras exibidas em criador.html (o que a equipe avalia antes de liberar a chave)
const CREATOR_RULES = [
  { icon:"🎥", text:"Produzir conteúdo (vídeos, lives ou posts) dedicado a Card Fight." },
  { icon:"📅", text:"Manter atividade mínima e constante no canal/rede." },
  { icon:"🤝", text:"Seguir as regras da comunidade: sem discurso de ódio, trapaças ou conteúdo ofensivo." },
  { icon:"🔍", text:"Ter o canal avaliado e aprovado por um desenvolvedor da equipe no Discord." },
  { icon:"🚫", text:"Não usar cheats, exploits ou divulgar formas de burlar o save do jogo." },
];

// ──────────────────────────────────────────────────────────────
// VANTAGENS EXTRAS PARA CRIADORES (sempre ter conteúdo para vídeos)
// ──────────────────────────────────────────────────────────────

// Itens garantidos por dia para criadores (além do correio VIP)
const CREATOR_DAILY_GUARANTEED = [
  { type:"card", rarity:"EPIC",      label:"Carta Épica Garantida",         weight:40 },
  { type:"card", rarity:"LEGENDARY", label:"Carta Lendária",                 weight:25 },
  { type:"card", rarity:"MYTHIC",    label:"Carta Mítica",                   weight:15 },
  { type:"card", rarity:"ULTRA_RARE",label:"Carta Ultra Rara",               weight:5  },
  { type:"gold", val:80000,          label:"80.000 Ouro",                    weight:30 },
  { type:"gold", val:150000,         label:"150.000 Ouro Bônus",             weight:10 },
  { type:"xp",   val:40000,          label:"40.000 XP",                      weight:25 },
  { type:"xpp",  val:2500,           label:"2.500 XPP",                      weight:20 },
  { type:"xpp",  val:5000,           label:"5.000 XPP Bônus",                weight:8  },
  { type:"boost", id:"boost_xp3",   label:"Boost XP x4 (20min)",            weight:15 },
  { type:"boost", id:"boost_gold3", label:"Boost Ouro x3 (45min)",          weight:15 },
  { type:"boost", id:"boost_luck2", label:"Boost Sorte +100% (1.5h)",       weight:12 },
  { type:"boost", id:"boost_combo", label:"Boost Combo x2 (1h)",            weight:10 },
];

// ──────────────────────────────────────────────────────────────
// VANTAGENS PASSIVAS DE CRIADORES (verificadas na hora de calcular recompensas)
// ──────────────────────────────────────────────────────────────
// Multiplicador de XPP para criadores verificados em batalhas normais
const CREATOR_XPP_MULT      = 2.0;   // XPP em dobro (sobe de rank 2x mais rápido)
// Multiplicador de recompensas no Modo Sobrevivência
const CREATOR_SURVIVAL_MULT = 1.5;   // 50% mais recompensas no modo Sobrevivência
// Expansão de cofre gratuita por semana
const CREATOR_FREE_VAULT_EXPANSIONS_PER_WEEK = 1;
// Acesso antecipado a eventos (horas antes)
const CREATOR_EARLY_EVENT_HOURS = 24;
// Desconto extra exclusivo na Loja (empilha com desconto base)
const CREATOR_SHOP_EXTRA_DISCOUNT = 0.10; // +10% de desconto extra

// Verifica se o criador tem acesso antecipado ao evento (24h antes)
function creatorHasEarlyAccess(event, save) {
  if (!save || !save.isVerifiedCreator) return false;
  if (!event || event.isActive) return true; // já ativo pra todos
  // Se o evento ainda não começou mas o criador tem acesso early...
  // (a lógica de ativação real depende de quando o dev liga isActive)
  return false; // reservado para implementação futura pelo dev
}

// Aplica o multiplicador de XPP do criador nas recompensas de batalha
function applyCreatorBattleBonus(save, rewards) {
  if (!save || !save.isVerifiedCreator) return rewards;
  return {
    ...rewards,
    xpp: Math.round((rewards.xpp || 0) * CREATOR_XPP_MULT),
  };
}

// Tópicos/sugestões de conteúdo para vídeos (rotaciona diariamente)
const CREATOR_CONTENT_TOPICS = [
  "🎁 Abrindo 10 Pacotes Lendários — O que vou conseguir?",
  "⚔️ Batalha Ranqueada: Subindo do Bronze ao Diamante!",
  "🃏 Meu Cofre Completo — Todas as Cartas ORIGENS!",
  "💰 Como ficar RICO no Card Fight: Guia de Ouro Infinito",
  "🏆 Guerra de Guildas: Minha Guilda DOMINOU a temporada!",
  "🎟️ Battle Pass Tier 30 — Vale a pena o Premium?",
  "🔮 Maestria de Cartas: Como conseguir 5★ em TODAS!",
  "📦 Trocas Épicas: Consegui a carta mais RARA do jogo!",
  "🏰 Raide Semanal: Derrotei o Boss SOZINHO!",
  "🌌 Evento Especial: Cartas que NUNCA mais voltam!",
  "🛒 Loja Secreta: Itens que só CRIADORES têm acesso!",
  "⚡ Combo Insano: 50x Dano em uma rodada!",
  "🎯 Desafio: Vencer só com cartas COMUNS!",
  "💎 Gastando 1 MILHÃO de Ouro — O que dá?",
  "👑 Top 1 do Ranking: Minha Build Secreta Revelada!",
  "🎪 Salas Personalizadas: Criando meu Próprio Torneio!",
  "🔄 Sistema de Trocas: Lucrando com o Mercado!",
  "⭐ Companheiros: Qual o MELHOR para farmar?",
  "🕳️ Mercado Negro: Itens PROIBIDOS que consegui!",
  "🏅 Conquistas Secretas: Desbloqueei TODAS!",
  "📬 Correio VIP: O que vem todo dia para Criadores?",
  "🎨 Personalização: Meu Perfil mais BONITO do jogo!",
  "🆚 PvP Real: Enfrentei um CRIADOR RIVAL!",
  "📈 Evolução: Do Nível 1 ao 100 em 1 vídeo!",
  "🎭 Easter Eggs: Segredos que NINGUÉM encontrou!",
];

// Gera tópico do dia para o criador (baseado na data)
function getCreatorTopicOfDay(save) {
  const dayIndex = Math.floor(Date.now() / 86400000) % CREATOR_CONTENT_TOPICS.length;
  return CREATOR_CONTENT_TOPICS[dayIndex];
}

// Gera "pacote de conteúdo" diário para o criador (garante material pro vídeo)
function generateCreatorContentPack(save) {
  const today = new Date().toDateString();
  if (save.lastCreatorPack === today) return null; // já gerou hoje
  save.lastCreatorPack = today;

  const pack = {
    date: today,
    topic: getCreatorTopicOfDay(save),
    rewards: [],
    // Garante pelo menos 1 carta boa + recursos
    guaranteedCard: true,
  };

  // Sorteia 3-5 recompensas do pool garantido
  const numRewards = 3 + Math.floor(Math.random() * 3);
  const shuffled = [...CREATOR_DAILY_GUARANTEED].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < numRewards; i++) {
    const reward = shuffled[i];
    if (reward.type === "card") {
      const pool = ALL_CARDS.filter(c => c.rarity === reward.rarity);
      if (pool.length > 0) {
        const card = pool[Math.floor(Math.random() * pool.length)];
        pack.rewards.push({ type:"card", cardId:card.id, label:reward.label + ": " + card.name + " " + card.img });
        if (!save.vault.includes(card.id)) save.vault.push(card.id);
      }
    } else if (reward.type === "gold") {
      earnGold(save, reward.val);
      pack.rewards.push({ type:"gold", val:reward.val, label:reward.label });
    } else if (reward.type === "xp") {
      save.xp += reward.val;
      pack.rewards.push({ type:"xp", val:reward.val, label:reward.label });
    } else if (reward.type === "xpp") {
      save.xpp += reward.val;
      pack.rewards.push({ type:"xpp", val:reward.val, label:reward.label });
    } else if (reward.type === "boost" && save.activeBoosts) {
      const boost = BOOSTS.find(b => b.id === reward.id);
      if (boost) {
        save.activeBoosts.push({ type:boost.type, mult:boost.mult, endTime:Date.now()+boost.duration, name:"Creator Pack" });
        pack.rewards.push({ type:"boost", id:reward.id, label:reward.label });
      }
    }
  }

  // Log para o criador usar no vídeo
  save.creatorContentLog = save.creatorContentLog || [];
  save.creatorContentLog.unshift({
    date: today,
    topic: pack.topic,
    rewards: pack.rewards.map(r => r.label).join(" | ")
  });
  if (save.creatorContentLog.length > 30) save.creatorContentLog = save.creatorContentLog.slice(0, 30);

  return pack;
}

// Aplica a verificação no save do jogador se a chave for válida
function applyCreatorVerification(save, key) {
  if (!key || key.trim() !== CREATOR_KEY) return { ok:false, reason:"key" };
  if (save.isVerifiedCreator) return { ok:false, reason:"already" };

  save.isVerifiedCreator = true;
  save.verifiedSince     = Date.now();
  save.lastContentDate   = Date.now();

  if (!save.ownedProfileItems) save.ownedProfileItems = [];
  CREATOR_ITEMS.forEach(item => {
    if (!save.ownedProfileItems.includes(item.id)) save.ownedProfileItems.push(item.id);
  });
  // Equipa o selo automaticamente se o jogador ainda não tiver nenhum selo equipado
  if (!save.profileBadge) save.profileBadge = "badge_verified";

  // Gera primeiro pacote de conteúdo
  generateCreatorContentPack(save);

  return { ok:true };
}

// Atualiza data de último conteúdo (chamar quando criador posta vídeo)
function updateCreatorContentDate(save) {
  if (!save.isVerifiedCreator) return;
  save.lastContentDate = Date.now();
  writeSave(save);
}

// ──────────────────────────────────────────────────────────────
// CORREIO – presentes diários (correio.html) – EXPANDIDO PARA CRIADORES
// ──────────────────────────────────────────────────────────────
const CORREIO_NORMAL_POOL = [
  { title:"Carta da Vila",           emoji:"✉️", gold:[40, 120] },
  { title:"Encomenda Perdida",       emoji:"📨", gold:[60, 150] },
  { title:"Presente de um Fã",       emoji:"🎁", gold:[30, 90],  xp:[20, 60] },
  { title:"Recado do Correio Real",  emoji:"📜", gold:[50, 130] },
  { title:"Ajuda do Mercador",       emoji:"🛒", gold:[70, 140], xp:[10, 30] },
  { title:"Descoberta de Tesouro",   emoji:"🗺️", gold:[45, 100], xp:[25, 55] },
  { title:"Nota do Aventureiro",     emoji:"⚔️", gold:[20, 60],  xp:[40, 80] },
  { title:"Carta do Mensageiro",     emoji:"📯", gold:[55, 110], xp:[15, 35] },
  // ── NOVAS CARTAS DO CORREIO PARA NORMAIS (recompensas baixas) ──
  { title:"Bilhete da Estalagem",     emoji:"🏨", gold:[35, 85],  xp:[5, 20]   },
  { title:"Nota do Ferreiro",         emoji:"🔨", gold:[60, 120]               },
  { title:"Carta do Pescador",        emoji:"🐟", gold:[25, 70],  xp:[10, 30]  },
  { title:"Sinal do Mercador",        emoji:"🧭", gold:[80, 140]               },
  { title:"Rolo de Couro",            emoji:"📿", gold:[45, 90],  xp:[15, 25]  },
  { title:"Encomenda da Guilda",      emoji:"⚜️", gold:[70, 130], xp:[5, 15]   },
  { title:"Pacote de Ervas",          emoji:"🌿", gold:[30, 60],  xp:[30, 60]  },
  { title:"Mensagem do Bardo",        emoji:"🎵", gold:[40, 80],  xp:[10, 40]  },
  { title:"Carta do Alquimista",      emoji:"⚗️", gold:[50, 100], xp:[20, 45]  },
  { title:"Aviso da Patrulha",        emoji:"🚩", gold:[65, 115]               },
  { title:"Presente do Andarilho",    emoji:"🧳", gold:[20, 55],  xp:[5, 25]   },
  { title:"Notícias da Capital",      emoji:"🏙️", gold:[75, 135], xp:[20, 40]  },
  { title:"Recado dos Anões",         emoji:"⛏️", gold:[85, 150]               },
  { title:"Pergaminho do Sábio",      emoji:"🦉", gold:[40, 75],  xp:[40, 75]  },
  { title:"Encomenda da Vila",        emoji:"🏡", gold:[55, 105], xp:[10, 20]  },
  { title:"Sinal do Caçador",         emoji:"🏹", gold:[60, 110], xp:[5, 15]   },
];

const CORREIO_VERIFIED_POOL = [
  { title:"Envelope da Equipe Origens", emoji:"📮", gold:[400, 700], xp:[150,300], xpp:[15,35] },
  { title:"Pacote do Criador",          emoji:"🎬", gold:[500, 900], xp:[250,450], xpp:[25,50] },
  { title:"Correspondência VIP",        emoji:"💌", gold:[350, 650], xp:[180,320], xpp:[20,40],
    boost:{ type:"gold", mult:2, duration:3600000, label:"Ouro x2 (1h)" } },
  { title:"Selo de Reconhecimento",     emoji:"🏅", gold:[450, 800], xp:[200,380], xpp:[20,45],
    boost:{ type:"xp",   mult:2, duration:3600000, label:"XP x2 (1h)"   } },
  { title:"Carta do Patrocinador",      emoji:"💳", gold:[600, 1000], xp:[100,200], xpp:[30,60] },
  { title:"Pacote Surpresa da Origens", emoji:"🎁", gold:[300, 600], xp:[300,500], xpp:[10,30],
    boost:{ type:"combo", mult:1.5, duration:5400000, label:"Combo x1.5 (1.5h)" } },
  { title:"Nota de Agradecimento",      emoji:"🙏", gold:[250, 450], xp:[400,700], xpp:[15,35],
    boost:{ type:"luck", mult:1.5, duration:7200000, label:"Sorte x1.5 (2h)" } },
  { title:"OrigensGames", emoji:"🎟️", gold:[700, 1100], xp:[500,800], xpp:[40,75] },
  // NOVOS: Itens exclusivos de perfil
  { title:"Moldura Exclusiva do Dia",   emoji:"🖼️", gold:[200, 400], xp:[100,200], xpp:[10,20],
    item:{ type:"frame", rarity:"EPIC" } },
  { title:"Título Diário do Criador",   emoji:"🏷️", gold:[150, 300], xp:[80,150], xpp:[8,15],
    item:{ type:"title", rarity:"RARE" } },
    // ── NOVAS CARTAS DO CORREIO PARA VERIFICADOS (moderadas) ──
  { title:"Presente do Topo",          emoji:"🏆", gold:[500, 900],   xp:[200, 400], xpp:[20, 45] },
  { title:"Caixa de Recursos",         emoji:"📦", gold:[400, 700],   xp:[250, 450], xpp:[15, 30] },
  { title:"Honra ao Membro",           emoji:"🎖️", gold:[450, 800],   xp:[150, 300], xpp:[25, 50] },
  { title:"Bônus de Criador",          emoji:"✨", gold:[600, 1000],  xp:[300, 500], xpp:[30, 55] },
  { title:"Kit do Guerreiro",          emoji:"🛡️", gold:[350, 650],   xp:[400, 600], xpp:[10, 25],
    boost:{ type:"defense", mult:0.8, duration:1800000, label:"Escudo -20% (30min)" } },
  { title:"Munição de Ouro",           emoji:"🔫", gold:[750, 1100],  xp:[100, 200], xpp:[40, 60] },
  { title:"Agradecimento Mensal",      emoji:"📅", gold:[300, 550],   xp:[500, 700], xpp:[5, 15]  },
  { title:"Presente da Comunidade",    emoji:"🤝", gold:[500, 750],   xp:[350, 550], xpp:[20, 35] },
  { title:"Envelope Premium",          emoji:"💎", gold:[800, 1200],  xp:[150, 250], xpp:[35, 50] },
  { title:"Sinal da Equipe",           emoji:"🔰", gold:[400, 600],   xp:[200, 300], xpp:[25, 40] },
  { title:"Carta Exclusiva",           emoji:"📨", gold:[450, 700],   xp:[250, 400], xpp:[30, 45] },
  { title:"Pacote de Boas-Vindas",     emoji:"🎈", gold:[350, 500],   xp:[300, 450], xpp:[10, 20] },
  { title:"Estímulo de Elite",         emoji:"⚡", gold:[650, 950],   xp:[400, 600], xpp:[25, 40] },
  { title:"Prêmio de Patente",         emoji:"🎯", gold:[550, 850],   xp:[100, 200], xpp:[45, 70] },
  { title:"Coroa do Criador",          emoji:"👑", gold:[700, 1000],  xp:[300, 500], xpp:[30, 50] },
  { title:"Fragmento de Poder",        emoji:"🌀", gold:[600, 900],   xp:[500, 700], xpp:[10, 20],
    boost:{ type:"xp", mult:1.5, duration:1800000, label:"XP x1.5 (30min)" }
  }
];

const CORREIO_NORMAL_CHANCE = 0.55;
const CORREIO_INBOX_MAX     = 20;

function _correioRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _correioBuildLetter(base, verified) {
  return {
    id:       "letter_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    date:     new Date().toDateString(),
    title:    base.title,
    emoji:    base.emoji,
    verified: !!verified,
    claimed:  false,
    rewards: {
      gold:  base.gold ? _correioRandInt(base.gold[0], base.gold[1]) : 0,
      xp:    base.xp   ? _correioRandInt(base.xp[0],   base.xp[1])   : 0,
      xpp:   base.xpp  ? _correioRandInt(base.xpp[0],  base.xpp[1])  : 0,
      boost: base.boost || null,
      item:  base.item || null,
    },
  };
}

// Gera a carta do dia (uma vez por dia). Retorna a carta criada ou null.
function generateDailyCorreioLetter(save) {
  const today = new Date().toDateString();
  if (!save.correioInbox) save.correioInbox = [];
  if (save.lastCorreioGenerated === today) return null; // já gerou hoje

  save.lastCorreioGenerated = today;
  let letter = null;

  if (save.isVerifiedCreator) {
    // Criadores SEMPRE recebem carta (100% chance)
    const base = CORREIO_VERIFIED_POOL[Math.floor(Math.random() * CORREIO_VERIFIED_POOL.length)];
    letter = _correioBuildLetter(base, true);
    // Chance extra de segunda carta no mesmo dia (20%)
    if (Math.random() < 0.2) {
      const base2 = CORREIO_VERIFIED_POOL[Math.floor(Math.random() * CORREIO_VERIFIED_POOL.length)];
      const letter2 = _correioBuildLetter(base2, true);
      save.correioInbox.unshift(letter2);
    }
  } else if (Math.random() < CORREIO_NORMAL_CHANCE) {
    const base = CORREIO_NORMAL_POOL[Math.floor(Math.random() * CORREIO_NORMAL_POOL.length)];
    letter = _correioBuildLetter(base, false);
  }

  if (letter) {
    save.correioInbox.unshift(letter);
    if (save.correioInbox.length > CORREIO_INBOX_MAX) {
      const unclaimed  = save.correioInbox.filter(l => !l.claimed);
      const claimedArr = save.correioInbox.filter(l => l.claimed);
      save.correioInbox = [...unclaimed, ...claimedArr].slice(0, CORREIO_INBOX_MAX);
    }
  }
  return letter;
}

// Resgata uma carta específica do correio. Retorna a carta (com rewards) ou false.
function claimCorreioLetter(save, letterId) {
  if (!save.correioInbox) return false;
  const letter = save.correioInbox.find(l => l.id === letterId);
  if (!letter || letter.claimed) return false;

  earnGold(save, letter.rewards.gold || 0);
  save.xp  += (letter.rewards.xp  || 0);
  save.xpp += (letter.rewards.xpp || 0);

  if (letter.rewards.boost) {
    if (!save.activeBoosts) save.activeBoosts = [];
    save.activeBoosts.push({
      type:    letter.rewards.boost.type,
      mult:    letter.rewards.boost.mult,
      endTime: Date.now() + letter.rewards.boost.duration,
      name:    "Correio",
    });
  }

  if (letter.rewards.item) {
    if (!save.ownedProfileItems) save.ownedProfileItems = [];
    // Gera item aleatório do tipo indicado
    const pool = PROFILE_ITEMS.filter(p => p.type === letter.rewards.item.type);
    if (pool.length > 0) {
      const item = pool[Math.floor(Math.random() * pool.length)];
      if (!save.ownedProfileItems.includes(item.id)) save.ownedProfileItems.push(item.id);
    }
  }

  letter.claimed = true;
  return letter;
}

// ──────────────────────────────────────────────────────────────
// MENSAGENS DE ADMIN – os admins do jogo enviam pro correio de TODOS
// os jogadores, com recompensas junto (avisos, eventos, desculpas por
// bug, presente de data comemorativa, etc.)
// ──────────────────────────────────────────────────────────────
// COMO ENVIAR UMA MENSAGEM NOVA:
// Basta adicionar um objeto novo dentro do array ADMIN_MESSAGES logo
// abaixo. Na próxima vez que qualquer jogador abrir o jogo (qualquer
// tela que carregue gamedata2.js e chame syncAdminMessages), a carta
// aparece automaticamente no correio dele — só uma vez por jogador,
// controlado pelo campo "id".
//
// REGRAS IMPORTANTES:
//   - "id" tem que ser ÚNICO e nunca deve ser reaproveitado. Se você
//     reusar um id que já existiu, quem já recebeu não recebe de novo,
//     mas é fácil se confundir — use um padrão tipo "admin_AAAA_MM_DD_assunto".
//   - Pra "desativar" uma mensagem antiga, não precisa apagar: apenas
//     não mexa mais nela. Apagar do array só impede novos jogadores de
//     receber; quem já recebeu não é afetado de qualquer forma.
//   - "rewards" é opcional — pode mandar só um aviso sem recompensa,
//     bastando omitir o campo "rewards" inteiro ou deixá-lo vazio {}.
//   - "expires" é opcional. Se definido (timestamp em ms, ex:
//     Date.parse("2026-12-31")), jogadores que só abrirem o jogo DEPOIS
//     dessa data não recebem mais a carta. Deixe null para nunca expirar.
//
// ════════ EXEMPLO CORRETO (copie e adapte o modelo abaixo) ═════════
//   {
//     id:      "admin_2026_08_15_boasvindas",   // único, nunca repita
//     title:   "Bem-vindo de volta, Guerreiro!", // título da carta
//     message: "A equipe Origens Games agradece por jogar Card Fight! " +
//              "Aqui vai um presente para comemorar a atualização v4.0.",
//     emoji:   "📯",
//     from:    "Equipe Origens Games",           // remetente (opcional)
//     rewards: {
//       gold:  500,                              // ouro fixo (opcional)
//       xp:    200,                              // xp fixo (opcional)
//       xpp:   20,                                // xpp fixo (opcional)
//       boost: { type:"gold", mult:2, duration:3600000, label:"Ouro x2 (1h)" }, // opcional
//       item:  { type:"frame", rarity:"EPIC" },  // item de perfil (opcional)
//     },
//     expires: null,                              // ou Date.parse("2026-12-31")
//   },
// ═════════════════════════════════════════════════════════════════
const ADMIN_MESSAGES = [
  {
    id:      "admin_2026_07_akudama_parceria",
    title:   "🌟 Nova Parceria!",
    message: "Está chegando um novo evento sobre nossa parceria com o anime Épico Akudama Drive🔥 - Aproveite ao máximo o novo evento que vai chegar, e todas as novidades no nosso Discord OFICIAL! Assista o anime completo, vocês não irão se arrepender!" +
             "⚠️ E também, um presente para vocês!💯",
    emoji:   "🌃",
    from:    "Equipe Origens Games X Akudama Drive",
    rewards: {
      gold: 100,
      xp:   200,
      xpp:  50,
    },
    expires: null,
  },
];

// Entrega no correio do jogador toda mensagem de ADMIN_MESSAGES que ele
// ainda não recebeu (e que não esteja expirada). Chamar sempre que o
// correio for carregado. Retorna true se alguma carta nova foi entregue.
function syncAdminMessages(save) {
  if (!save.correioInbox)      save.correioInbox      = [];
  if (!save.receivedAdminMsgs) save.receivedAdminMsgs = [];

  const now = Date.now();
  let delivered = false;

  ADMIN_MESSAGES.forEach(msg => {
    if (!msg || !msg.id) return;                                  // entrada inválida, ignora
    if (save.receivedAdminMsgs.includes(msg.id)) return;           // já recebeu essa
    if (msg.expires && now > msg.expires) return;                  // expirou antes do jogador ver

    const r = msg.rewards || {};
    const letter = {
      id:       "admin_" + msg.id + "_" + Date.now(),
      date:     new Date().toDateString(),
      title:    msg.title || "Mensagem da Equipe",
      emoji:    msg.emoji || "📯",
      verified: false,
      isAdmin:  true,
      from:     msg.from || "Equipe Origens Games",
      message:  msg.message || "",
      claimed:  false,
      rewards: {
        gold:  r.gold  || 0,
        xp:    r.xp    || 0,
        xpp:   r.xpp   || 0,
        boost: r.boost || null,
        item:  r.item  || null,
      },
    };

    save.correioInbox.unshift(letter);
    save.receivedAdminMsgs.push(msg.id);
    delivered = true;
  });

  if (save.correioInbox.length > CORREIO_INBOX_MAX) {
    const unclaimed  = save.correioInbox.filter(l => !l.claimed);
    const claimedArr = save.correioInbox.filter(l => l.claimed);
    save.correioInbox = [...unclaimed, ...claimedArr].slice(0, CORREIO_INBOX_MAX);
  }

  return delivered;
}

// ══════════════════════════════════════════════════════════════
// v4.0 — NOVOS SISTEMAS
// ══════════════════════════════════════════════════════════════

// ── DESCONTO DO CRIADOR (Loja de Diamantes) ──────────────────
// Retorna o desconto percentual atual para o jogador.
// Muda a cada hora com seed baseada na hora do dia + tipo de membro.
const CREATOR_DISCOUNTS = {
  normalWeekday:  { min:5,  max:15 },
  normalWeekend:  { min:10, max:25 },
  creatorWeekday: { min:15, max:40 },
  creatorWeekend: { min:30, max:55 },
};

function getShopDiscount(isCreator) {
  const isWeekend = [0, 6].includes(new Date().getDay());
  const key       = (isCreator ? "creator" : "normal") + (isWeekend ? "Weekend" : "Weekday");
  const range     = CREATOR_DISCOUNTS[key];
  const hourSlot  = Math.floor(Date.now() / 3600000);
  const seed      = (hourSlot + (isCreator ? 777 : 0)) % 100;
  return range.min + (seed % (range.max - range.min + 1));
}

// ── LIMITE DE SALAS DO DIA ────────────────────────────────────
function getRoomCardLimit(save) {
  return save.isVerifiedCreator ? 50 : 5;
}

// ── VERIFICAÇÃO DE INATIVIDADE ────────────────────────────────
// Retorna número de dias sem postar conteúdo.
// Aviso começa em 25 dias; perda de status é manual (admin revoga).
function checkCreatorInactivity(save) {
  if (!save.isVerifiedCreator) return 0;
  const lastContent = save.lastContentDate || save.verifiedSince || Date.now();
  return Math.floor((Date.now() - lastContent) / 86400000);
}

// ── VITRINE EXCLUSIVA (comprar.html) ─────────────────────────
// Retorna os índices dos personagens em rotação a cada 3h.
function getExclusiveShowcaseSlot() {
  return Math.floor(Date.now() / (3 * 3600000));
}

// Personagens exclusivos da vitrine (dados também em comprar.html;
// aqui registrado para eventual uso no admin e comprar.html).
const EXCLUSIVE_SHOWCASE_IDS = ["vc001","vc002","vc003","vc004","vc005","vc006","vc007","vc008","vc009","vc010","vc011","vc012","vc013","vc014","vc015","vc016","vc017","vc018","vc019","vc020","vc021","vc022","vc023","vc024","vc025","vc026","vc027","vc028","vc029","vc030","vc031","vc032","vc033","vc034","vc035","vc036","vc037","vc038","vc039","vc040","vc041","vc042","vc043","vc044","vc045","vc046","vc047","vc048","vc049","vc050","vc051","vc052","vc053","vc054","vc055","vc056","vc057","vc058","vc059","vc060","vc061","vc062","vc063","vc064","vc065","vc066","vc067","vc068","vc069","vc070","vc071","vc072","vc073","vc074","vc075","vc076","vc077","vc078","vc079","vc080","vc081","vc082","vc083","vc084","vc085","vc086","vc087","vc088","vc089","vc090","vc091","vc092","vc093","vc094","vc095","vc096","vc097","vc098","vc099","vc100","vc101","vc102","vc103","vc104","vc105","vc106","vc107","vc108","vc109","vc110","vc111"];

// ── GUILDAS (dados canônicos – guilda.html usa os próprios) ───
// Referência de IDs para o save do jogador:
//   save.guildaId    — string ID da guilda (ex: "gu_origens")
//   save.guildaName  — nome da guilda (ex: "Lança das Origens")
//   save.guildaColor — cor (#hex) para exibição no perfil
//   save.guildaLevel — nível da guilda no momento da entrada

// ── CARTÃO DE SALA ────────────────────────────────────────────
// save.roomCards          — quantidade de cartões disponíveis
// save.salasDiarias       — { date: string, count: number }
// save.criadaSalas        — array de objetos de sala criada

// Utilitário: consome 1 Cartão de Sala (ou verifica se é criador)
function useRoomCard(save) {
  const today = new Date().toDateString();
  if (!save.salasDiarias || save.salasDiarias.date !== today) {
    save.salasDiarias = { date: today, count: 0 };
  }
  const limit = getRoomCardLimit(save);
  if (save.salasDiarias.count >= limit) return { ok:false, reason:"limit" };
  if (!save.isVerifiedCreator) {
    if ((save.roomCards || 0) <= 0) return { ok:false, reason:"noCard" };
    save.roomCards = Math.max(0, (save.roomCards || 0) - 1);
  }
  save.salasDiarias.count = (save.salasDiarias.count || 0) + 1;
  return { ok:true };
}