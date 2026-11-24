/* Sharklingo — état, utilitaires, navigation, panneau latéral */
(function () {
  const KEY = 'vaelren-academie-v1';
  const MAX_HEARTS = 5, HEART_MS = 30 * 60 * 1000;
  const today = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);

  const DEFAULT = () => ({
    v: 1, lang: null, onboarded: false, created: today(),
    xp: 0, xpByDay: {}, streak: 0, bestStreak: 0, lastActive: null, freezes: 0,
    gems: 100, hearts: MAX_HEARTS, heartsAt: Date.now(),
    zen: false, script: 'latin', lexVer: 1, sound: true, voice: true, voiceName: '', voiceRate: 0.9, theme: 'auto', dailyGoal: 20, hints: true,
    done: {}, words: {}, mistakes: [], ach: {}, quests: null,
    stats: { lessons: 0, perfect: 0, correct: 0, total: 0, listen: 0, typed: 0, conj: 0, stories: 0, bestCombo: 0, speedBest: 0, time: 0 },
    stories: {}, mascotColor: 'ocean', colors: ['ocean'],
  });

  const State = {
    s: null,
    load() {
      let s = null;
      try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
      const d = DEFAULT();
      this.s = s ? Object.assign(d, s, { stats: Object.assign(d.stats, s.stats || {}) }) : d;
      // migration : ancienne mascotte (dragon violet) → Sharky
      if (!this.s.colors.includes('ocean')) { this.s.colors.unshift('ocean'); if (this.s.mascotColor === 'violet') this.s.mascotColor = 'ocean'; }
      if (!MASCOT_COLORS[this.s.mascotColor]) this.s.mascotColor = 'ocean';
      // migration : lexique v1 (714 mots) → Dictionnaire du Vaelrën éd. 3 (identifiants changés)
      if ((this.s.lexVer || 1) < (window.LEX_VERSION || 1) && window.LEX_MIGRATE_V1) {
        const M = window.LEX_MIGRATE_V1, w2 = {};
        for (const k in this.s.words) { const n = M[+k]; if (n >= 0) w2[n] = this.s.words[k]; }
        this.s.words = w2;
        this.s.mistakes = this.s.mistakes.map(k => k.startsWith('w:') ? (M[+k.slice(2)] >= 0 ? 'w:' + M[+k.slice(2)] : null) : k).filter(Boolean);
        this.s.lexVer = window.LEX_VERSION; this.save();
      }
      this.regen(); this.checkStreak();
    },
    save() { try { localStorage.setItem(KEY, JSON.stringify(this.s)); } catch (e) { /* stockage indisponible */ } },
    reset() { const lang = this.s.lang; this.s = DEFAULT(); this.s.lang = lang; this.s.onboarded = true; this.save(); },
    regen() {
      const s = this.s;
      if (s.hearts >= MAX_HEARTS) { s.heartsAt = Date.now(); return; }
      const n = Math.floor((Date.now() - s.heartsAt) / HEART_MS);
      if (n > 0) { s.hearts = Math.min(MAX_HEARTS, s.hearts + n); s.heartsAt += n * HEART_MS; if (s.hearts >= MAX_HEARTS) s.heartsAt = Date.now(); }
    },
    nextHeartMin() { return Math.max(1, Math.ceil((HEART_MS - (Date.now() - this.s.heartsAt)) / 60000)); },
    loseHeart() { if (this.s.zen) return; if (this.s.hearts >= MAX_HEARTS) this.s.heartsAt = Date.now(); this.s.hearts = Math.max(0, this.s.hearts - 1); this.save(); },
    gainHeart(n = 1) { this.s.hearts = Math.min(MAX_HEARTS, this.s.hearts + n); this.save(); },
    checkStreak() {
      const s = this.s; if (!s.lastActive) return;
      const gap = dayDiff(s.lastActive, today());
      if (gap <= 1) return;
      const missed = gap - 1;
      if (s.freezes >= missed) { s.freezes -= missed; const y = new Date(); y.setDate(y.getDate() - 1); s.lastActive = today(y); }
      else s.streak = 0;
      this.save();
    },
    todayXp() { return this.s.xpByDay[today()] || 0; },
    addXp(n) {
      const s = this.s, d = today();
      const before = this.todayXp();
      s.xp += n; s.xpByDay[d] = before + n;
      if (s.lastActive !== d) {
        const gap = s.lastActive ? dayDiff(s.lastActive, d) : 99;
        s.streak = gap === 1 ? s.streak + 1 : (gap === 0 ? s.streak : 1);
        if (s.streak === 0) s.streak = 1;
        s.lastActive = d;
      }
      s.bestStreak = Math.max(s.bestStreak, s.streak);
      Quests.bump('xp', n);
      if (before < s.dailyGoal && before + n >= s.dailyGoal) setTimeout(() => toast('🔥', t('toastGoal')), 600);
      this.save();
    },
    knowsWord(id) { return !!this.s.words[id]; },
    wordStrength(id) {
      const w = this.s.words[id]; if (!w) return 0;
      const days = (Date.now() - w.t) / 864e5;
      return Math.max(0, w.s - Math.floor(days / (w.s + 1)));
    },
    touchWord(id, delta) {
      const w = this.s.words[id] || { s: 0, t: Date.now() };
      w.s = Math.max(0, Math.min(5, w.s + delta)); w.t = Date.now();
      this.s.words[id] = w;
    },
    addMistake(k) { if (!k || k === 'pairs' || k === 'conj' || k === 'decl') return; const m = this.s.mistakes; const i = m.indexOf(k); if (i >= 0) m.splice(i, 1); m.push(k); if (m.length > 80) m.shift(); },
    removeMistake(k) { const i = this.s.mistakes.indexOf(k); if (i >= 0) this.s.mistakes.splice(i, 1); },
    applyTheme() {
      const th = this.s.theme;
      const dark = th === 'dark' || (th === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      document.documentElement.dataset.script = this.s.script || 'latin';
    },
  };
  window.State = State;
  window.todayStr = today;
  State.MAX_HEARTS = MAX_HEARTS;

  // ---------- Quêtes du jour ----------
  const QUEST_DEFS = [
    { id: 'xp', icon: '⚡', goal: () => Math.max(20, State.s.dailyGoal + 10), reward: 15 },
    { id: 'lessons', icon: '📘', goal: () => 2, reward: 10 },
    { id: 'perfect', icon: '🎯', goal: () => 1, reward: 15 },
    { id: 'correct', icon: '✅', goal: () => 20, reward: 10 },
    { id: 'listen', icon: '🎧', goal: () => 5, reward: 15, voice: true },
    { id: 'typed', icon: '⌨️', goal: () => 5, reward: 10 },
    { id: 'combo', icon: '🔥', goal: () => 8, reward: 15, max: true },
  ];
  const Quests = {
    ensure() {
      const s = State.s;
      if (s.quests && s.quests.date === today()) return;
      const seed = today().split('-').reduce((a, b) => a * 31 + +b, 7);
      const pool = QUEST_DEFS.filter(q => q.id !== 'xp' && (!q.voice || (window.TTS && TTS.available())));
      const picks = [QUEST_DEFS[0]];
      let k = seed;
      while (picks.length < 3 && pool.length) { k = (k * 9301 + 49297) % 233280; picks.push(pool.splice(k % pool.length, 1)[0]); }
      s.quests = { date: today(), list: picks.map(q => ({ id: q.id, icon: q.icon, goal: q.goal(), prog: 0, reward: q.reward, done: false })) };
      State.save();
    },
    bump(id, n = 1) {
      this.ensure();
      const def = QUEST_DEFS.find(d => d.id === id);
      for (const q of State.s.quests.list) {
        if (q.id !== id || q.done) continue;
        q.prog = def && def.max ? Math.max(q.prog, n) : q.prog + n;
        if (q.prog >= q.goal) {
          q.prog = q.goal; q.done = true; State.s.gems += q.reward;
          setTimeout(() => { toast('🎁', t('toastQuest', { n: q.reward })); Sound.chest(); renderSide(); }, 900);
        }
      }
      State.save();
    },
    label(q) { return t('q_' + q.id, { n: q.goal }); }
  };
  window.Quests = Quests;

  // ---------- Exploits ----------
  const ACH = [
    { id: 'first', icon: '🌱', fr: 'Premiers pas', es: 'Primeros pasos', dfr: 'Termine ta première leçon.', des: 'Completa tu primera lección.', v: () => State.s.stats.lessons, goal: 1 },
    { id: 'l10', icon: '📘', fr: 'Élève assidu', es: 'Alumno aplicado', dfr: 'Termine 10 leçons.', des: 'Completa 10 lecciones.', v: () => State.s.stats.lessons, goal: 10 },
    { id: 'l50', icon: '📚', fr: 'Érudit', es: 'Erudito', dfr: 'Termine 50 leçons.', des: 'Completa 50 lecciones.', v: () => State.s.stats.lessons, goal: 50 },
    { id: 'xp100', icon: '⚡', fr: 'Étincelle', es: 'Chispa', dfr: 'Gagne 100 XP.', des: 'Gana 100 XP.', v: () => State.s.xp, goal: 100 },
    { id: 'xp1000', icon: '🌟', fr: 'Flamme sacrée', es: 'Llama sagrada', dfr: 'Gagne 1 000 XP.', des: 'Gana 1000 XP.', v: () => State.s.xp, goal: 1000 },
    { id: 'xp5000', icon: '☀️', fr: 'Aervar', es: 'Aervar', dfr: 'Gagne 5 000 XP.', des: 'Gana 5000 XP.', v: () => State.s.xp, goal: 5000 },
    { id: 'st3', icon: '🔥', fr: 'Ça chauffe', es: 'Se calienta', dfr: 'Atteins une série de 3 jours.', des: 'Alcanza una racha de 3 días.', v: () => State.s.bestStreak, goal: 3 },
    { id: 'st7', icon: '🐲', fr: 'Souffle du dragon', es: 'Aliento del dragón', dfr: 'Atteins une série de 7 jours.', des: 'Alcanza una racha de 7 días.', v: () => State.s.bestStreak, goal: 7 },
    { id: 'st30', icon: '👑', fr: 'Constance royale', es: 'Constancia real', dfr: 'Atteins une série de 30 jours.', des: 'Alcanza una racha de 30 días.', v: () => State.s.bestStreak, goal: 30 },
    { id: 'perf5', icon: '🎯', fr: 'Sans faute', es: 'Sin fallos', dfr: 'Réussis 5 leçons parfaites.', des: 'Haz 5 lecciones perfectas.', v: () => State.s.stats.perfect, goal: 5 },
    { id: 'w50', icon: '🗝️', fr: 'Collectionneur de mots', es: 'Coleccionista de palabras', dfr: 'Apprends 50 mots.', des: 'Aprende 50 palabras.', v: () => Object.keys(State.s.words).length, goal: 50 },
    { id: 'w250', icon: '📜', fr: 'Lexicographe', es: 'Lexicógrafo', dfr: 'Apprends 250 mots.', des: 'Aprende 250 palabras.', v: () => Object.keys(State.s.words).length, goal: 250 },
    { id: 'u5', icon: '🛡️', fr: 'Gardien de la lumière', es: 'Guardián de la luz', dfr: 'Termine 5 unités.', des: 'Completa 5 unidades.', v: () => unitsDone(), goal: 5 },
    { id: 'uall', icon: '🏰', fr: 'Maître du Vaelrën', es: 'Maestro del vaelrën', dfr: 'Termine toutes les unités.', des: 'Completa todas las unidades.', v: () => unitsDone(), goal: () => COURSE.length },
    { id: 'story', icon: '📖', fr: 'Conteur', es: 'Cuentacuentos', dfr: 'Lis 3 histoires.', des: 'Lee 3 historias.', v: () => Object.keys(State.s.stories).length, goal: 3 },
    { id: 'conj', icon: '⚙️', fr: 'Conjugueur', es: 'Conjugador', dfr: 'Réussis 30 conjugaisons.', des: 'Acierta 30 conjugaciones.', v: () => State.s.stats.conj, goal: 30 },
    { id: 'speed', icon: '⚡', fr: 'Éclair', es: 'Relámpago', dfr: 'Trouve 20 paires au défi éclair.', des: 'Encuentra 20 parejas en el desafío relámpago.', v: () => State.s.stats.speedBest, goal: 20 },
    { id: 'combo', icon: '💫', fr: 'Enchaînement', es: 'Encadenado', dfr: 'Fais 15 bonnes réponses d\'affilée.', des: 'Haz 15 aciertos seguidos.', v: () => State.s.stats.bestCombo, goal: 15 },
  ];
  function unitsDone() { return COURSE.filter(u => State.s.done[u.id + '-review']).length; }
  function achGoal(a) { return typeof a.goal === 'function' ? a.goal() : a.goal; }
  function checkAch() {
    for (const a of ACH) {
      if (State.s.ach[a.id]) continue;
      if (a.v() >= achGoal(a)) {
        State.s.ach[a.id] = today(); State.s.gems += 20;
        if (window.peam) window.peam.unlock(a.id);
        setTimeout(() => toast(a.icon, t('toastAch', { t: L({ fr: a.fr, es: a.es }) })), 1400);
      }
    }
    State.save();
  }
  window.Ach = { ACH, check: checkAch, goal: achGoal, unitsDone };

  // ---------- Utilitaires UI ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  window.$ = $; window.$$ = $$; window.esc = esc;

  window.toast = function (icon, msg) {
    const box = $('#toasts');
    const el = document.createElement('div'); el.className = 'toast'; el.innerHTML = `<span class="ti">${icon}</span><span>${esc(msg)}</span>`;
    box.appendChild(el); setTimeout(() => el.remove(), 3200);
  };
  window.modal = function (html, opts = {}) {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="modal ${opts.big ? 'big' : ''}" role="dialog">${opts.noClose ? '' : '<button class="x" aria-label="Fermer">✕</button>'}${html}</div>`;
    document.body.appendChild(bg);
    const close = () => { bg.remove(); document.removeEventListener('keydown', onKey); opts.onClose && opts.onClose(); };
    const onKey = (e) => { if (e.key === 'Escape' && !opts.noClose) close(); };
    document.addEventListener('keydown', onKey);
    bg.addEventListener('mousedown', (e) => { if (e.target === bg && !opts.noClose) close(); });
    const x = $('.x', bg); if (x) x.onclick = close;
    return { el: $('.modal', bg), close };
  };

  // Indices au survol
  let hintEl = null;
  function showHint(target, html) {
    hideHint();
    hintEl = document.createElement('div'); hintEl.className = 'hint'; hintEl.innerHTML = html; document.body.appendChild(hintEl);
    const r = target.getBoundingClientRect(); const h = hintEl.getBoundingClientRect();
    let top = r.bottom + 8; if (top + h.height > innerHeight - 10) top = r.top - h.height - 8;
    let left = r.left + r.width / 2 - h.width / 2; left = Math.max(10, Math.min(innerWidth - h.width - 10, left));
    hintEl.style.top = top + 'px'; hintEl.style.left = left + 'px';
  }
  function hideHint() { if (hintEl) { hintEl.remove(); hintEl = null; } }
  window.hideHint = hideHint;
  function hintForV(tok) {
    const a = Morph.analyze(tok); if (!a) return null;
    const lang = State.s.lang;
    const uniq = []; const seen = new Set();
    for (const e of a.entries) { const g = Morph.gloss(e, lang); if (!seen.has(g)) { seen.add(g); uniq.push(g); } }
    let h = `<div class="h-w">${esc(a.base)}</div>${State.s.script === 'tezin' ? `<div class="h-t tz">${esc(tok)}</div>` : ''}<div class="h-g">${uniq.slice(0, 3).map(esc).join(' · ')}</div>`;
    if (a.sufs.length) h += `<div class="h-m">${a.sufs.map(s => '-' + esc(s.s) + ' : ' + esc(Morph.SUF_L[lang][s.t])).join('<br>')}</div>`;
    return h;
  }
  function hintForL1(tok, vSentence) {
    if (!vSentence) return null;
    const lang = State.s.lang;
    const w = Morph.normL(tok, lang, false); if (!w || w.length < 2) return null;
    const out = [];
    for (const vt of Morph.tokensV(vSentence)) {
      const a = Morph.analyze(vt); if (!a) continue;
      for (const e of a.entries) {
        const g = Morph.normL(Morph.gloss(e, lang), lang, false);
        if (g.split(' ').some(x => x === w || (w.length > 3 && x.startsWith(w.slice(0, -1))))) { if (!out.some(o => o[0] === vt)) out.push([vt, Morph.shortGloss(e, lang)]); }
      }
    }
    if (!out.length) return null;
    return out.slice(0, 3).map(([v, g]) => `<div><span class="h-w">${esc(v)}</span> — ${esc(g)}</div>`).join('');
  }
  window.tokenizeV = function (s) {
    return s.split(/(\s+)/).map(part => {
      if (/^\s+$/.test(part) || !part) return part;
      const m = part.match(/^([«"¿¡]*)(.*?)([.,!?;:»"]*)$/);
      const core = m[2];
      if (!core || !Morph.analyze(core)) return esc(part);
      return `${esc(m[1])}<span class="tok" data-v="${esc(core)}">${esc(core)}</span>${esc(m[3])}`;
    }).join('');
  };
  window.tokenizeL1 = function (s, vref) {
    return s.split(/(\s+)/).map(part => {
      if (/^\s+$/.test(part) || !part) return part;
      const m = part.match(/^([«"¿¡]*)(.*?)([.,!?;:»"]*)$/);
      return `${esc(m[1])}<span class="tok l1" data-l="${esc(m[2])}" data-ref="${esc(vref || '')}">${esc(m[2])}</span>${esc(m[3])}`;
    }).join('');
  };
  document.addEventListener('mouseover', (e) => {
    const tk = e.target.closest && e.target.closest('.tok');
    if (!tk || !State.s.hints) return;
    const h = tk.dataset.v ? hintForV(tk.dataset.v) : hintForL1(tk.dataset.l, tk.dataset.ref);
    if (h) showHint(tk, h);
  });
  document.addEventListener('mouseout', (e) => { if (e.target.closest && e.target.closest('.tok')) hideHint(); });

  // Confettis
  window.confetti = function () {
    const c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c);
    c.width = innerWidth; c.height = innerHeight; const g = c.getContext('2d');
    const cols = ['#6D4AFF', '#F5B323', '#2FBF71', '#2BA8F0', '#F0506E', '#FF8A3D'];
    const P = Array.from({ length: 160 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35, vx: (Math.random() - .5) * 16, vy: -Math.random() * 16 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
    let f = 0;
    (function step() {
      g.clearRect(0, 0, c.width, c.height);
      for (const p of P) { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.fillStyle = p.c; g.fillRect(-p.r / 2, -p.r / 3, p.r, p.r * .66); g.restore(); }
      if (++f < 160) requestAnimationFrame(step); else c.remove();
    })();
  };

  // ---------- Navigation ----------
  const PAGES = [
    ['learn', '🏠'], ['practice', '🏋️'], ['stories', '📖'], ['dict', '📕'], ['grammar', '📐'], ['shop', '🛍️'], ['profile', '🦈'], ['settings', '⚙️'],
  ];
  let current = 'learn';
  window.go = function (page, arg) {
    if (window.peam) window.peam.presence({ learn: 'Sur le chemin', practice: 'Entraînement', stories: 'Lit une histoire', dict: 'Dictionnaire', grammar: 'Grammaire', shop: 'Boutique', profile: 'Profil', settings: 'Réglages' }[page] || 'Sharklingo');
    current = page; hideHint();
    renderNav();
    const main = $('#main'); main.scrollTop = 0;
    (Pages[page] || Pages.learn)(main, arg);
  };
  window.currentPage = () => current;
  function renderNav() {
    $('#nav').innerHTML = `
      <div class="logo">${logoSVG()}<div class="txt"><div class="name">Sharklingo</div><div class="sub">${t('appSub')}</div></div></div>
      ${PAGES.map(([p, ico]) => `<button class="navbtn ${p === current ? 'active' : ''}" data-p="${p}"><span class="ico">${ico}</span><span class="lbl">${t(p === 'learn' ? 'learn' : p)}</span></button>`).join('')}
      <div class="spacer"></div>
      <div class="langswitch"><button data-l="fr" class="${State.s.lang === 'fr' ? 'on' : ''}">FR</button><button data-l="es" class="${State.s.lang === 'es' ? 'on' : ''}">ES</button></div>`;
    $$('.navbtn', $('#nav')).forEach(b => b.onclick = () => { Sound.click(); go(b.dataset.p); });
    $$('.langswitch button').forEach(b => b.onclick = () => { State.s.lang = b.dataset.l; State.save(); renderAll(); });
  }
  function logoSVG() {
    return `<svg viewBox="0 0 48 48"><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FA3F5"/><stop offset="1" stop-color="#2563B8"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="13" fill="url(#lg)"/><path d="M13 31 Q21 22 22 9 Q30 18 35 31 Z" fill="#fff"/><path d="M8 33 q4 -3 8 0 t8 0 t8 0 t8 0" fill="none" stroke="#F5B323" stroke-width="3" stroke-linecap="round"/></svg>`;
  }
  window.logoSVG = logoSVG;

  // ---------- Panneau latéral ----------
  function ring(p) {
    const r = 26, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 64 64"><circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--line)" stroke-width="8"/><circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--gold)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.min(1, p))}" transform="rotate(-90 32 32)"/><text x="32" y="38" text-anchor="middle" font-size="18">${p >= 1 ? '🏆' : '⚡'}</text></svg>`;
  }
  window.topStatsHTML = function () {
    State.regen();
    const s = State.s;
    const active = s.lastActive === today();
    return `<div class="topstats">
      <button class="stat streak ${active ? '' : 'off'}" data-act="streak" title="${t('streak')}"><span class="ico">🔥</span>${s.streak}</button>
      <button class="stat gems" data-act="gems" title="${t('gems')}"><span class="ico">🪙</span>${s.gems}</button>
      <button class="stat hearts" data-act="hearts" title="${t('hearts')}"><span class="ico">${s.zen ? '💜' : '❤️'}</span>${s.zen ? '∞' : s.hearts}</button>
    </div>`;
  };
  function bindTopStats(root) {
    $$('[data-act]', root).forEach(b => b.onclick = () => {
      const a = b.dataset.act;
      if (a === 'hearts') heartsModal();
      else if (a === 'gems') go('shop');
      else if (a === 'streak') streakModal();
    });
  }
  window.bindTopStats = bindTopStats;
  function heartsModal() {
    const s = State.s;
    const full = s.hearts >= MAX_HEARTS;
    const m = modal(`<h2>${t('hearts')}</h2>
      <div style="font-size:38px;letter-spacing:4px;margin:10px 0">${s.zen ? '💜'.repeat(5) : '❤️'.repeat(s.hearts) + '🤍'.repeat(MAX_HEARTS - s.hearts)}</div>
      <p style="font-weight:700;color:var(--ink-soft)">${s.zen ? t('unlimited') : (full ? t('heartsFull') : t('nextHeart', { m: State.nextHeartMin() }))}</p>
      <div class="actions"><button class="btn ghost" data-a="practice">${t('practiceForHeart')}</button><button class="btn gold" data-a="refill" ${full || s.zen ? 'disabled' : ''}>${t('refillCost', { c: 350 })}</button></div>`);
    $('[data-a=practice]', m.el).onclick = () => { m.close(); Lesson.start('smart'); };
    $('[data-a=refill]', m.el).onclick = () => { if (State.s.gems < 350) { toast('🪙', t('notEnough')); return; } State.s.gems -= 350; State.s.hearts = MAX_HEARTS; State.save(); Sound.heart(); m.close(); renderSide(); };
  }
  window.heartsModal = heartsModal;
  function streakModal() {
    const s = State.s;
    const days = []; const d = new Date(); d.setDate(d.getDate() - 6);
    for (let i = 0; i < 7; i++) { const k = today(d); days.push([k, (s.xpByDay[k] || 0) > 0, d.toLocaleDateString(s.lang === 'es' ? 'es' : 'fr', { weekday: 'short' })]); d.setDate(d.getDate() + 1); }
    modal(`<div class="center"><div style="font-size:70px">🔥</div><h2>${s.streak} ${s.streak > 1 ? t('days') : t('day')}</h2>
      <div style="display:flex;justify-content:center;gap:10px;margin:16px 0">${days.map(([k, on, lbl]) => `<div style="text-align:center"><div style="width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:${on ? 'var(--orange)' : 'var(--line)'};color:#fff;font-weight:900">${on ? '✓' : ''}</div><div style="font-size:12px;font-weight:800;color:var(--ink-faint);margin-top:4px">${esc(lbl)}</div></div>`).join('')}</div>
      <p style="color:var(--ink-soft);font-weight:700">🧊 ${t('shopFreeze')} : ${s.freezes} · ${t('stBest')} : ${s.bestStreak}</p></div>`);
  }

  window.renderSide = function () {
    Quests.ensure();
    const s = State.s;
    const tx = State.todayXp();
    const qs = s.quests.list;
    $('#side').innerHTML = `
      ${topStatsHTML()}
      <div class="card"><h3>${t('dailyGoal')}</h3>
        <div class="goal">${ring(tx / s.dailyGoal)}<div class="txt"><b>${tx >= s.dailyGoal ? t('goalDone') : t('xpToday', { a: tx, b: s.dailyGoal })}</b><span>🔥 ${t('streak')} : ${s.streak} ${s.streak > 1 ? t('days') : t('day')}</span></div></div>
      </div>
      <div class="card"><h3>${t('dailyQuests')}</h3>
        ${qs.map(q => `<div class="quest ${q.done ? 'done' : ''}"><div class="qi">${q.icon}</div><div class="qb"><div class="qt">${esc(Quests.label(q))}</div><div class="bar ${q.done ? 'green' : ''}"><i style="width:${100 * q.prog / q.goal}%"></i><span>${q.prog} / ${q.goal}</span></div></div><div class="claim">${q.done ? '✅' : '🎁'}</div></div>`).join('')}
      </div>
      <div class="card" style="display:flex;gap:14px;align-items:center"><div style="width:84px;flex:none">${mascotSVG({ anim: 'float' })}</div><div style="font-weight:700;color:var(--ink-soft);font-size:14px">${esc(vaziTip())}</div></div>
      <div class="side-foot">Sharklingo · ${LEXICON.length} ${t('words')}</div>`;
    bindTopStats($('#side'));
    const ms = $('.mobile-stats'); if (ms) { ms.innerHTML = topStatsHTML(); bindTopStats(ms); }
  };
  const TIPS = {
    fr: ['Survole un mot vaelrën pour voir son sens et ses suffixes.', 'Le verbe ne change jamais : ce sont les particules qui portent le temps.', 'Appuie sur Entrée pour vérifier et continuer plus vite.', 'Touches 1 à 9 : choisis une réponse sans la souris.', 'Pas besoin de taper « ë » : « e » est accepté.', 'Les erreurs reviennent à la fin de la leçon. C\'est normal !', 'Le dictionnaire montre la déclinaison et la conjugaison de chaque mot.', 'Un mot = une racine + des suffixes, toujours dans le même ordre.'],
    es: ['Pasa el ratón sobre una palabra en vaelrën para ver su sentido y sus sufijos.', 'El verbo nunca cambia: las partículas llevan el tiempo.', 'Pulsa Intro para comprobar y continuar más rápido.', 'Teclas 1 a 9: elige una respuesta sin el ratón.', 'No hace falta escribir « ë »: se acepta « e ».', 'Los errores vuelven al final de la lección. ¡Es normal!', 'El diccionario muestra la declinación y la conjugación de cada palabra.', 'Una palabra = una raíz + sufijos, siempre en el mismo orden.'],
  };
  function vaziTip() { const a = TIPS[State.s.lang] || TIPS.fr; return a[new Date().getMinutes() % a.length]; }

  window.renderAll = function () {
    State.applyTheme();
    document.documentElement.lang = State.s.lang || 'fr';
    renderNav(); renderSide(); go(current);
  };

  // ---------- Démarrage ----------
  window.addEventListener('DOMContentLoaded', () => {
    State.load();
    State.applyTheme();
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => State.applyTheme());
    if (!State.s.onboarded) Onboarding.start(); else renderAll();
    window.peamSync = function () {
      if (!window.peam) return;
      const st = State.s;
      Object.keys(st.ach).forEach(id => window.peam.unlock(id));            // rattrapage des succès
      window.peam.stat('xp', st.xp); window.peam.stat('lecons', st.stats.lessons);
      window.peam.stat('mots', Object.keys(st.words).length); window.peam.stat('serie', st.bestStreak);
    };
    peamSync();
    setInterval(() => { const h = State.s.hearts; State.regen(); if (State.s.hearts !== h) { State.save(); if (!$('#lesson')) renderSide(); } }, 60000);
  });
})();
