CARD FIGHT — PACOTE SISTEMA DE ALDEIA v17.0
============================================

ARQUIVOS:
  1. Aldeia.html                  → NOVA página principal do sistema
  2. gamedata-aldeia-patch.js     → NOVO patch (dados + API completa)
  3. index.html                   → ATUALIZADO (botão Aldeia + badge notificação + nav)
  4. about.html                   → ATUALIZADO (painel explicando o sistema)

COMO INSTALAR:
  Copie os 4 arquivos para a raiz do seu projeto (onde está o game.css).
  Sobrescreva index.html e about.html.
  Não precisa alterar mais nada — o script é carregado automaticamente.

FUNCIONALIDADES ENTREGUES:
  ✔ 8 construções (Loja/Minas/Fazenda/Publicidade/Qualidade/Armazém/Guarda/Decoração)
  ✔ 5 começam liberadas em nível 1 (as 3 últimas você constrói)
  ✔ Produção base: 10 itens em 30min, aumenta até +59% no lvl 8
  ✔ Publicidade multiplica chegada de clientes até 8×
  ✔ Qualidade SÓ sobe com clientes satisfeitos (não com ouro)
  ✔ Paciência: 10min (lvl1) a 60min (lvl8)
  ✔ Armazém: capacidade limitada — produção some se lotar
  ✔ Guarda: reduz sucesso de ladrão e acelera descoberta
  ✔ Decoração: charme ≥ 4 libera VIPs (raros, pagam melhor, esperam menos)
  ✔ 28 NPCs base com falas próprias (fácil expansão — só editar ALDEIA_NPCS)
  ✔ 30+ frases variadas por recurso (ALDEIA_PHRASES)
  ✔ Ladrões disfarçados com sinais evolutivos (5 níveis de sutileza)
  ✔ Expulsar cliente honesto derruba avaliação
  ✔ Minigame de negociação (3 frases, funciona por tipo de NPC + 20% risco)
  ✔ Fidelidade VIP (contador ⭐×N)
  ✔ Informante da cidade (pago, avisa dias de risco/VIP)
  ✔ Dia da semana e hora influenciam movimento
  ✔ Contratos com prazo em ouro
  ✔ Ranking dinâmico de 100 aldeias (só sobem, seed muda a cada 30min)
  ✔ Jogador NÃO ganha pontos automáticos como os NPCs do ranking
  ✔ Notificações no index.html e no próprio Aldeia.html
  ✔ Painel de ajuda completo

EXPANSÃO FUTURA:
  • Adicionar NPCs: basta acrescentar objetos em ALDEIA_NPCS.
  • Adicionar falas: adicionar strings em ALDEIA_PHRASES[recurso].
  • Adicionar sinais de ladrão: acrescentar em ALDEIA_THIEF_SIGNS[nível].
  • Adicionar frases de negociação: acrescentar em ALDEIA_NEGO_LINES.
  • Adicionar recursos: extender ALDEIA_RES e ALDEIA_BUILDINGS.
