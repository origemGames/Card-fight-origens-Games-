/* ============================================================
   CARD FIGHT – BY ORIGENS GAMES
   game.css – v5.0  ESTILOS GLOBAIS
   ============================================================ */

/* ── IMPORTS ─────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Rajdhani:wght@500;600;700&display=swap');

/* ── RESET & BASE ────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-base:    #070712;
  --bg-card:    #0e0e1e;
  --bg-panel:   #0d0d1c;
  --border:     #1e1e30;
  --text:       #e0e0f0;
  --text-muted: #9e9ea8;
  --gold:       #ffc107;
  --red:        #ff4444;
  --green:      #66bb6a;
  --blue:       #2196F3;
  --purple:     #9c27b0;
  --radius:     12px;
  --transition: 0.18s ease;
}

html, body {
  height: 100%;
  background: var(--bg-base);
  color: var(--text);
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

/* ── LAYOUT ──────────────────────────────────────────────── */
.page {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  flex: 1;
  padding: 12px 12px 80px;
  overflow-y: auto;
}

/* ── TOP BAR ─────────────────────────────────────────────── */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: rgba(7,7,18,0.97);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.logo-title {
  font-family: 'Cinzel', serif;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #ff4444, #ffc107);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── BOTTOM NAV ──────────────────────────────────────────── */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  background: rgba(7, 7, 18, 0.97);
  border-top: 1px solid var(--border);
  display: flex;
  padding: 6px 0 8px;
  z-index: 200;
  backdrop-filter: blur(8px);
}

.nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 4px 6px;
  text-decoration: none;
  color: #9e9e9e;
  font-size: 10px;
  font-weight: 700;
  transition: color var(--transition);
}

.nav-btn .icon { font-size: 20px; }
.nav-btn.active, .nav-btn:hover { color: var(--gold); }

/* ── PANELS ──────────────────────────────────────────────── */
.panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px;
  margin-bottom: 10px;
}

.panel-title {
  font-family: 'Cinzel', serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--gold);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.panel-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #ffc10733, transparent);
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}

.stat-row:last-child { border-bottom: none; }
.stat-label { color: var(--text-muted); }
.stat-value { font-weight: 700; }

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  letter-spacing: 0.3px;
  -webkit-user-select: none;
  user-select: none;
}

.btn:active { transform: scale(0.96); }

.btn-primary {
  background: linear-gradient(135deg, #8b0000, #c62828);
  color: #fff;
  box-shadow: 0 3px 12px rgba(198, 40, 40, 0.3);
}
.btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }

.btn-gold {
  background: linear-gradient(135deg, #b8730a, #e65100);
  color: #fff;
  box-shadow: 0 3px 12px rgba(230, 81, 0, 0.3);
}
.btn-gold:hover { filter: brightness(1.1); transform: translateY(-1px); }

.btn-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }

.btn-sm  { padding: 6px 12px; font-size: 12px; border-radius: 8px; }
.btn-lg  { padding: 14px 24px; font-size: 16px; letter-spacing: 0.5px; }
.btn-block { width: 100%; }

/* ── INPUTS ──────────────────────────────────────────────── */
.input {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: 10px 12px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  width: 100%;
  transition: border-color var(--transition);
}

.input:focus {
  outline: none;
  border-color: var(--gold);
}

.input::placeholder { color: #555; }

/* ── BADGES & CHIPS ──────────────────────────────────────── */
.gold-badge {
  background: rgba(255, 193, 7, 0.12);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 20px;
  padding: 4px 12px;
  font-weight: 700;
  font-size: 13px;
  color: var(--gold);
}

.rank-badge {
  background: linear-gradient(135deg, rgba(255,193,7,0.15), rgba(255,109,0,0.1));
  border: 1px solid rgba(255, 193, 7, 0.4);
  border-radius: 20px;
  padding: 4px 14px;
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--gold);
  display: inline-block;
}

/* ── MODALS ──────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-overlay.hidden { display: none; }

.modal-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 20px;
  width: 100%;
  max-width: 360px;
  max-height: 85vh;
  overflow-y: auto;
  animation: popIn 0.25s ease;
}

.modal-title {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 900;
  color: var(--gold);
  text-align: center;
  margin-bottom: 14px;
}

/* ── TOASTS ──────────────────────────────────────────────── */
#toast-container {
  position: fixed;
  bottom: 76px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 600;
  width: calc(100% - 32px);
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: none;
}

.toast {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  animation: slideUp 0.3s ease, fadeOut 0.4s 2.8s ease forwards;
  max-width: 100%;
  word-break: break-word;
}

.toast.gold   { border-color: var(--gold);   color: var(--gold); }
.toast.error  { border-color: #f44336;        color: #ef9a9a; }
.toast.info   { border-color: var(--blue);    color: #90caf9; }
.toast.win    { border-color: var(--green);   color: #a5d6a7; }

/* ── ANIMATIONS ──────────────────────────────────────────── */
@keyframes popIn {
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 6px rgba(255,193,7,0.3); }
  50%       { box-shadow: 0 0 18px rgba(255,193,7,0.7); }
}

@keyframes animate-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; transform: translateY(-8px); }
}

.animate-pulse { animation: animate-pulse 1.5s ease-in-out infinite; }

/* ── SCROLLBAR ───────────────────────────────────────────── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 4px; }

/* ── PLAYER QUICK INFO ───────────────────────────────────── */
.player-quick {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ── PROFILE-SPECIFIC HELPERS ────────────────────────────── */
.profile-card-preview {
  background: linear-gradient(135deg, #0a0a1e, #1a0a2e);
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}

/* Boosts strip shown on index page */
.boost-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.boost-pill {
  background: rgba(255, 193, 7, 0.12);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 700;
  color: var(--gold);
}

/* ── UTILITY CLASSES ──────────────────────────────────────── */
.text-center { text-align: center; }
.text-muted  { color: var(--text-muted); }
.text-gold   { color: var(--gold); }
.text-green  { color: var(--green); }
.text-red    { color: var(--red); }
.text-blue   { color: var(--blue); }
.text-purple { color: var(--purple); }
.fw-bold     { font-weight: 700; }
.ff-cinzel   { font-family: 'Cinzel', serif; }

.mt-8  { margin-top:  8px; }
.mb-8  { margin-bottom: 8px; }
.mt-12 { margin-top: 12px; }
.mb-12 { margin-bottom: 12px; }
.mt-16 { margin-top: 16px; }
.mb-16 { margin-bottom: 16px; }

/* ── RESPONSIVE (landscape phones) ──────────────────────── */
@media (max-height: 600px) {
  .content { padding-top: 8px; }
  .top-bar { padding: 8px 12px; }
}

@media (min-width: 480px) {
  .page { border-left: 1px solid var(--border); border-right: 1px solid var(--border); }
}
