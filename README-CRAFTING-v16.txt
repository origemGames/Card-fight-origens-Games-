═══════════════════════════════════════════════════════════════
  CARD FIGHT v16.0 — SISTEMA DE CRAFTING
  Origens Games · Patch drop-in
═══════════════════════════════════════════════════════════════

ARQUIVOS NESTE PACOTE
─────────────────────
  Crafting.html            (NOVO)  Mesa de Ferramentas completa
  gamedata-crafting.js     (NOVO)  Patch: config, 200 receitas,
                                   pesquisas, craft, upgrades,
                                   conquistas, drops, tickets,
                                   shop dinâmico.
  index.html               (EDIT)  +nav Crafting, +HUD chips ⚙️⛽, v16
  about.html               (EDIT)  +seção explicativa Crafting, v16
  shop.html                (EDIT)  +auto-injeção da loja de craft
  battle.html              (EDIT)  +hook de drop 7% em vitória
  pesca.html               (EDIT)  +hook de drop 22% ao pescar

INSTALAÇÃO
──────────
1. Copie TODOS os arquivos deste zip para a raiz do seu jogo
   (mesma pasta de game.css / gamedata.js).
2. Não precisa mudar nada mais. O patch se auto-carrega.
3. Ordem de scripts (já configurada em Crafting.html):
   gamedata.js → gamedata2.js → gamedata3.js →
   gamedata-pesca.js → gamedata-pesca-patch.js → gamedata-crafting.js

RESUMO DO SISTEMA (100% conforme especificação)
──────────────────────────────────────────────
• 200 receitas de fusão geradas a partir das cartas existentes.
• Preços de craft (ouro + ⚙️ + ⛽) exatamente como pedido.
• Sistema de pesquisa: 5K/20K, 30min/1h30, chance de falhar
  (refund 50%), 3/dia, 1 rodando por vez.
• Craft dura 1h base (reduzido pelo upgrade).
• Upgrades de máquina Nv 1/2/3 com custos e bônus exatos.
• Brinde diário: +1 ⛽ +1 ⚙️ grátis.
• Loja de suprimentos: Gasolina 50K (max 5/dia), Engrenagem
  2K (max 15/dia), + 2 pacotes extras via patch.
• Drops: 7% Batalha, 22% Pesca.
• 22 conquistas exclusivas com recompensas automáticas.
• Painel de ajuda completo dentro de Crafting.html (aba ❓).
• Sistema de Tickets pra pagamento manual (Pix).
• Catálogo mostrado com fundo preto "?" até ser revelado.

COMPATIBILIDADE
───────────────
• Save existente: campos novos são adicionados automaticamente
  (craftGears, craftGas, craftMachineLevel, researchQueue,
   craftQueue, craftHistory, craftAchievements, craftTickets,
   craftDailyLast, researchRevealed, etc). Nenhum dado antigo
   é perdido.
• getCardById é embrulhado para reconhecer as novas cartas
  "cr###" no cofre.
• calcBattleRewards é embrulhado para rolar o drop
  automaticamente em vitória (fallback também via MutationObserver
  em battle.html).

DÚVIDAS / SUPORTE
─────────────────
Discord: Origens Games
Pix (para tickets): craft@origensgames.com.br
