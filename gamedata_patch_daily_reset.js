/* ============================================================
   PATCH – corrige o reset das Missões Diárias à meia-noite
   Bug: getOrCreateSave() reseta dailyBattles/dailyWins/etc mas
   nunca zera save.dailyMissions, então missão coletada fica
   "claimed" pra sempre.

   COMO APLICAR: incluir DEPOIS de gamedata.js (em qualquer
   página que chame getOrCreateSave — ex: daily.html):

   <script src="gamedata.js"></script>
   <script src="gamedata_patch_daily_reset.js"></script>   <!-- NOVO -->
   ============================================================ */

"use strict";

(function () {
  const _originalGetOrCreateSave = getOrCreateSave;

  getOrCreateSave = function (...args) {
    const save  = _originalGetOrCreateSave.apply(this, args);
    const today = new Date().toDateString();

    if (save._missionsResetDate !== today) {
      save.dailyMissions      = {};
      save._missionsResetDate = today;
      writeSave(save);
    }

    return save;
  };
})();
