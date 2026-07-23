/**
 * configuracoes.js  v13.0
 * Lightweight settings loader — include on any page to apply cf_settings_v1.
 *
 * Usage (add before </body>):
 *   <script src="configuracoes.js?v=13.0"></script>
 *
 * Exports (window-level, safe to read from any other script):
 *   CF_SETTINGS        — raw settings object
 *   CF_ANIM_SPEED      — 1.0 | 0.45 | 0.0 (CSS transition multiplier)
 *   CF_BOT_DIFF_MULT   — 0.75 | 1.0 | 1.35 (bot ATK multiplier)
 *   CF_TURN_TIMER_SEC  — 10 | 15 | 20 | 30 (seconds)
 *   CF_CARD_SIZE       — "small" | "medium" | "large"
 *   CF_SOUND_ON        — true | false
 */
(function () {
  "use strict";

  const KEY = "cf_settings_v1";
  const DEFAULTS = {
    sound:        true,
    music:        false,
    anim:         "normal",
    cardsize:     "medium",
    difficulty:   "normal",
    timer:        "15",
    autoplayTie:  false,
    haptic:       true,
    puTips:       true,
    botPuToast:   true,
  };

  let cfg = DEFAULTS;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) cfg = Object.assign({}, DEFAULTS, JSON.parse(raw));
  } catch (e) { /* use defaults */ }

  // Validate
  if (!["normal","fast","off"].includes(cfg.anim))        cfg.anim       = "normal";
  if (!["small","medium","large"].includes(cfg.cardsize)) cfg.cardsize   = "medium";
  if (!["easy","normal","hard"].includes(cfg.difficulty)) cfg.difficulty = "normal";
  if (!["10","15","20","30"].includes(cfg.timer))         cfg.timer      = "15";

  // ── Export to window ──────────────────────────────────────────
  window.CF_SETTINGS      = cfg;
  window.CF_SOUND_ON      = !!cfg.sound;
  window.CF_CARD_SIZE     = cfg.cardsize;
  window.CF_TURN_TIMER_SEC= parseInt(cfg.timer, 10);
  window.CF_BOT_DIFF_MULT = { easy: 0.75, normal: 1.0, hard: 1.35 }[cfg.difficulty] || 1.0;
  window.CF_ANIM_SPEED    = { normal: 1.0, fast: 0.45, off: 0.0  }[cfg.anim]        || 1.0;

  // ── Apply CSS variables ───────────────────────────────────────
  // --cf-anim-speed: multiply against any CSS transition/animation duration
  // --cf-card-scale: relative font-size / scale for hand cards
  const cardScale = { small: "0.88", medium: "1", large: "1.13" }[cfg.cardsize] || "1";
  const animMs    = Math.round(300 * window.CF_ANIM_SPEED);

  try {
    document.documentElement.style.setProperty("--cf-anim-speed",  String(window.CF_ANIM_SPEED));
    document.documentElement.style.setProperty("--cf-anim-ms",     animMs + "ms");
    document.documentElement.style.setProperty("--cf-card-scale",  cardScale);
    document.documentElement.style.setProperty("--cf-bot-mult",    String(window.CF_BOT_DIFF_MULT));
  } catch(e) { /* non-fatal */ }

  // ── Haptic helper (used by any page that checks window.cfHaptic) ──
  window.cfHaptic = function(durationMs) {
    if (!cfg.haptic) return;
    if (navigator && navigator.vibrate) {
      try { navigator.vibrate(durationMs || 50); } catch(e) {}
    }
  };

  // ── Sound placeholder (connect to your audio engine) ─────────
  // Pages that play sounds should check CF_SOUND_ON before doing so.
  // Example: if (CF_SOUND_ON) audioCtx.resume().then(() => sfx.play());

})();
