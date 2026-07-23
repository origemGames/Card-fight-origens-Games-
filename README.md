# 🏰 Sistema de Fortaleza — Card Fight

Arquivos deste pacote (basta arrastar pra pasta do seu jogo):

| Arquivo | O que fazer |
|---|---|
| **`fortaleza.html`** | Nova página. Coloque na raiz do jogo (ao lado de `index.html`). |
| **`gamedata-fortaleza-patch.js`** | Patch JS. Coloque ao lado dos outros `gamedata*.js`. |
| **`game-fortaleza-patch.css`** | (Opcional) Trechos extras pra colar no fim do seu `game.css`. |
| **`index.html`** | Substitui o antigo. Já traz o botão da Fortaleza + registro do patch. |
| **`about.html`** | Substitui o antigo. Já traz a seção explicativa. |

## Como o patch se integra

1. **Save**: cria `save.fortress = { level, xp, totalXP, lastDailyClaim, ... }` na primeira leitura.
2. **XP da Fortaleza vem de 3 fontes**:
   - **Missões da Fortaleza**: 5 missões (`fm1`…`fm5`) são injetadas automaticamente em `DAILY_MISSIONS`. Cada uma tem `mission.fortressXP`. No seu handler de conclusão de missão, chame:
     ```js
     CF_Fortress.grantMissionReward(mission);
     ```
   - **Modo clássico**: o patch escuta o evento global `cf:battle:end`. No fim de uma batalha clássica, dispare:
     ```js
     window.dispatchEvent(new CustomEvent('cf:battle:end', { detail:{ mode:'classic', win:true } }));
     ```
   - **Doar ouro**: já implementado, botão dentro de `fortaleza.html`.
3. **Bônus passivos** — leia com `CF_Fortress.getBoosts(save)` em qualquer lugar do gameplay:
   ```js
   const b = CF_Fortress.getBoosts(save); // { gold, xp, xpp, atk, hp } (fração 0..1)
   goldGanho = Math.floor(goldGanho * (1 + b.gold));
   xpGanho   = Math.floor(xpGanho   * (1 + b.xp));
   atkFinal  = Math.floor(atkBase   * (1 + b.atk));
   hpFinal   = Math.floor(hpBase    * (1 + b.hp));
   ```
4. **Carta diária (só nível 20)** — botão pronto. Requer `ALL_CARDS`/`RARITY` do `gamedata.js`. Se o cofre estiver cheio, coleta é bloqueada (você **perde** aquele dia).
5. **Conquista** — ao atingir 20, grava `save.achievements.fortress_max`.

## Curvas (intencionalmente lentas)

- **XP pra próximo nível**: `1000 · 1.55^(level-1)` — nível 20 ≈ dezenas de milhões acumulados.
- **Upgrade instantâneo**: `80.000 · 1.9^(level-1)` — nível 19→20 fica proibitivo.
- **Doação**: `100.000 · 1.35^(level-1)` de ouro por `+300` XP fixo.
- **Bônus escalam linearmente** (nível/20) — em níveis baixos são quase invisíveis.

## Cheat sheet — API pública

```js
CF_Fortress.MAX_LEVEL       // 20
CF_Fortress.getSave()       // save com save.fortress garantido
CF_Fortress.getLevel(save)  // 1..20
CF_Fortress.getXP(save)
CF_Fortress.xpForNext(level)
CF_Fortress.upgradeCost(level)
CF_Fortress.donateCost(level)
CF_Fortress.getBoosts(save)               // { gold, xp, xpp, atk, hp } (fração)
CF_Fortress.addXP(save, amount, source)   // + persist externo
CF_Fortress.addBattleXP(isWin, mode)      // já persiste
CF_Fortress.upgrade()                     // { ok, msg }
CF_Fortress.donate()                      // { ok, msg }
CF_Fortress.canClaimDaily(save)
CF_Fortress.claimDaily()                  // { ok, msg }
CF_Fortress.grantMissionReward(mission)   // usar no handler de missão
```
