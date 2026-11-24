/* Sharklingo — pages */
(function () {
  const Pages = {};
  window.Pages = Pages;
  const lang = () => State.s.lang;
  const ICONS = ['⭐', '📘', '🎧', '💪', '🪶'];
  const OFFS = [0, 52, 78, 52, 0, -52, -78, -52];

  function allSteps() {
    const out = [];
    COURSE.forEach((u, ui) => {
      u.lessons.forEach((l, li) => out.push({ type: 'lesson', u, ui, li, key: `${u.id}-${li}` }));
      out.push({ type: 'review', u, ui, key: `${u.id}-review` });
      out.push({ type: 'chest', u, ui, key: `${u.id}-chest` });
    });
    return out;
  }
  window.allSteps = allSteps;

  // ================= APPRENDRE =================
  Pages.learn = function (main) {
    const steps = allSteps();
    let cur = steps.findIndex(s => !State.s.done[s.key]);
    if (cur < 0) cur = steps.length;
    const curUnit = cur < steps.length ? steps[cur].ui : COURSE.length - 1;
    let html = `<div class="page"><div class="mobile-stats"></div>`;
    let idx = 0;
    COURSE.forEach((u, ui) => {
      const unitSteps = steps.filter(s => s.ui === ui);
      const unitLocked = steps.indexOf(unitSteps[0]) > cur;
      html += `<section class="unit ${unitLocked ? 'locked' : ''}" id="unit-${u.id}">
        <div class="unit-banner u-${u.color}"><div class="ub-t"><div class="ub-n">${t('unit')} ${ui + 1}</div><div class="ub-h">${esc(L(u.title))}</div><div class="ub-d">${esc(L(u.desc))}</div></div>
          ${unitLocked && ui > 0 ? `<button class="btn small" data-jump="${ui}">⏭ ${t('jumpTest')}</button>` : ''}
          <button class="btn small" data-guide="${ui}">📖 ${t('guide')}</button></div>
        <div class="path u-${u.color}">`;
      unitSteps.forEach((s, k) => {
        const gi = steps.indexOf(s);
        const done = !!State.s.done[s.key];
        const isCur = gi === cur;
        const locked = gi > cur;
        const off = OFFS[k % OFFS.length] * (ui % 2 ? -1 : 1);
        let cls = 'node', icon = '';
        if (s.type === 'lesson') { icon = done && !isCur ? '✓' : ICONS[k % ICONS.length]; }
        if (s.type === 'review') { cls += ' review'; icon = '🏆'; }
        if (s.type === 'chest') { cls += ' chest'; icon = done ? '📭' : '🎁'; if (done) cls += ' opened'; }
        if (done && s.type !== 'chest') cls += ' done';
        if (isCur) cls += ' current';
        if (locked) cls += ' locked';
        html += `<div class="node-wrap" style="transform:translateX(${off}px)">
          ${isCur ? `<div class="start-tip">${s.type === 'chest' ? t('openChest') : t('start')}</div>` : ''}
          <button class="${cls}" data-step="${gi}" aria-label="${esc(stepTitle(s))}">${icon}</button></div>`;
        idx++;
      });
      html += `</div></section>`;
    });
    html += `</div>`;
    main.innerHTML = html;
    const ms = $('.mobile-stats', main); if (ms) { ms.innerHTML = topStatsHTML(); bindTopStats(ms); }
    // mascotte décorative à côté du chemin courant
    const curNode = $('.node.current', main);
    if (curNode) {
      const path = curNode.closest('.path');
      const m = document.createElement('div'); m.className = 'path-mascot';
      const sideRight = parseFloat(curNode.parentElement.style.transform.replace(/[^-\d.]/g, '')) <= 0;
      m.style.cssText = `top:${curNode.parentElement.offsetTop - 30}px;${sideRight ? 'right:4%' : 'left:4%'}`;
      m.innerHTML = mascotSVG({ anim: 'float' });
      path.appendChild(m);
      setTimeout(() => { main.style.scrollBehavior = 'auto'; main.scrollTop = Math.max(0, curNode.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - innerHeight / 2 + 60); main.style.scrollBehavior = ''; }, 30);
    }
    $$('[data-guide]', main).forEach(b => b.onclick = (e) => { e.stopPropagation(); guideModal(+b.dataset.guide); });
    $$('[data-jump]', main).forEach(b => b.onclick = (e) => { e.stopPropagation(); jumpModal(+b.dataset.jump); });
    $$('.node', main).forEach(b => b.onclick = (e) => { e.stopPropagation(); Sound.click(); nodePopover(b, steps[+b.dataset.step], +b.dataset.step, cur); });
  };

  function stepTitle(s) {
    if (s.type === 'lesson') return L(s.u.lessons[s.li].title);
    if (s.type === 'review') return t('unitReview');
    return t('chest');
  }
  function closePop() { $$('.popover').forEach(p => { p.parentElement.classList.remove('pop-open'); p.remove(); }); document.removeEventListener('click', closePop); }
  function nodePopover(btn, s, gi, cur) {
    const had = btn.parentElement.querySelector('.popover');
    closePop(); if (had) return;
    const locked = gi > cur, done = !!State.s.done[s.key];
    const p = document.createElement('div'); p.className = 'popover' + (locked ? ' locked' : '');
    if (s.type === 'chest') {
      p.innerHTML = `<h4>${t('chest')}</h4><p>${locked ? t('lockedMsg') : done ? t('chestOpened') : t('chestDesc')}</p><button class="btn" ${locked || done ? 'disabled' : ''}>${t('openChest')}</button>`;
      $('.btn', p).onclick = () => { closePop(); openChest(s); };
    } else {
      const sub = s.type === 'lesson' ? `${t('lesson')} ${s.li + 1} ${t('of')} ${s.u.lessons.length}` : t('unitReviewDesc');
      p.innerHTML = `<h4>${esc(stepTitle(s))}</h4><p>${locked ? t('lockedMsg') : esc(sub)}</p><button class="btn" ${locked ? 'disabled' : ''}>${locked ? '🔒 ' + t('locked') : done ? t('practiceAgain') : t('startLesson', { xp: s.type === 'review' ? 20 : 10 })}</button>`;
      $('.btn', p).onclick = () => { closePop(); s.type === 'lesson' ? Lesson.start('lesson', { ui: s.ui, li: s.li }) : Lesson.start('review', { ui: s.ui }); };
    }
    btn.parentElement.appendChild(p); btn.parentElement.classList.add('pop-open');
    p.addEventListener('click', e => e.stopPropagation());
    setTimeout(() => document.addEventListener('click', closePop), 0);
  }
  function openChest(s) {
    const n = 25 + Math.floor(Math.random() * 26);
    State.s.done[s.key] = 1; State.s.gems += n; State.save();
    Sound.chest(); confetti();
    const m = modal(`<div class="center"><div style="font-size:90px;animation:wiggle .8s 2">🎁</div><h2>${t('chestTitle')}</h2><p style="font-size:20px;font-weight:900;color:var(--gold-d)">🪙 ${t('chestGot', { n })}</p><div class="actions" style="justify-content:center"><button class="btn gold">${t('continue')}</button></div></div>`);
    $('.btn', m.el).onclick = m.close;
    renderSide(); go('learn');
  }
  function guideModal(ui) {
    const u = COURSE[ui];
    const m = modal(`<h2>${u.icon} ${esc(L(u.title))}</h2><div class="guide">${L(u.tip)}</div>
      <h4 style="font-weight:900;margin:18px 0 8px">${t('dExamples')}</h4>
      <table class="gt plain">${u.lessons.flatMap(l => l.s.slice(0, 2)).map(s => `<tr><td class="v">${tokenizeV(Morph.alts(s[0])[0])}</td><td>${esc(Morph.alts(s[lang() === 'es' ? 2 : 1])[0])}</td></tr>`).join('')}</table>`, { big: true });
  }
  function jumpModal(ui) {
    const m = modal(`<div class="center"><div style="width:150px;margin:0 auto">${mascotSVG({ mood: 'wow' })}</div><h2>${t('jumpHere')}</h2><p style="color:var(--ink-soft);font-weight:700">${t('jumpDesc')}</p><div class="actions" style="justify-content:center"><button class="btn">${t('jumpTest')}</button></div></div>`);
    $('.btn', m.el).onclick = () => { m.close(); Lesson.start('jump', { ui }); };
  }

  // ================= ENTRAÎNEMENT =================
  Pages.practice = function (main) {
    const nm = State.s.mistakes.length, nw = Object.keys(State.s.words).length;
    const voice = TTS.available();
    main.innerHTML = `<div class="page wide"><div class="mobile-stats"></div><h1>${t('pTitle')}</h1><p class="lead">${t('pLead')}</p>
      <div class="practice-grid">
        <button class="pcard feature" data-k="smart"><div class="pi">✨</div><div><div class="pt">${t('pSmart')}</div><div class="pd">${t('pSmartD')}</div></div></button>
        <button class="pcard" data-k="mistakes" ${nm ? '' : 'disabled'}><div class="pi">🩹</div><div class="pt">${t('pMistakes')}</div><div class="pd">${t('pMistakesD')}</div><div class="pc">${nm ? t('pItems', { n: nm }) : t('pNone')}</div></button>
        <button class="pcard" data-k="words" ${nw >= 4 ? '' : 'disabled'}><div class="pi">🗝️</div><div class="pt">${t('pWords')}</div><div class="pd">${t('pWordsD')}</div><div class="pc">${nw >= 4 ? t('pItems', { n: nw }) : t('pNone')}</div></button>
        <button class="pcard" data-k="conj"><div class="pi">⚙️</div><div class="pt">${t('pConj')}</div><div class="pd">${t('pConjD')}</div><div class="pc">10 ×</div></button>
        <button class="pcard" data-k="decl"><div class="pi">📦</div><div class="pt">${t('pDecl')}</div><div class="pd">${t('pDeclD')}</div><div class="pc">10 ×</div></button>
        <button class="pcard" data-k="listen" ${voice ? '' : 'disabled'}><div class="pi">🎧</div><div class="pt">${t('pListen')}</div><div class="pd">${t('pListenD')}</div><div class="pc">${voice ? '8 ×' : t('pNeedVoice')}</div></button>
        <button class="pcard" data-k="tezin"><div class="pi tz" style="color:var(--violet)">vælrën</div><div class="pt">${t('pTezin')}</div><div class="pd">${t('pTezinD')}</div><div class="pc">10 ×</div></button>
        <button class="pcard" data-k="speed"><div class="pi">⚡</div><div class="pt">${t('pSpeed')}</div><div class="pd">${t('pSpeedD')}</div><div class="pc">${t('speedBest', { n: State.s.stats.speedBest })}</div></button>
      </div></div>`;
    const ms = $('.mobile-stats', main); if (ms) { ms.innerHTML = topStatsHTML(); bindTopStats(ms); }
    $$('.pcard', main).forEach(b => b.onclick = () => { if (b.disabled) return; const k = b.dataset.k; k === 'speed' ? Lesson.speed() : Lesson.start(k); });
  };

  // ================= HISTOIRES =================
  Pages.stories = function (main, sid) {
    if (sid) return storyPlayer(main, STORIES.find(s => s.id === sid));
    const unitDone = (ui) => !!State.s.done[COURSE[ui].id + '-review'];
    main.innerHTML = `<div class="page"><h1>${t('sTitle')}</h1><p class="lead">${t('sLead')}</p><div class="story-list">
      ${STORIES.map(s => { const open = unitDone(s.after); return `<button class="story-card ${open ? '' : 'locked'}" data-s="${s.id}" ${open ? '' : 'disabled'}><div class="sc-i">${open ? s.icon : '🔒'}</div><div class="sc-t">${esc(s.title)}</div><div class="sc-d">${esc(open ? L(s.desc) : t('sLocked', { n: s.after + 1 }))}</div>${State.s.stories[s.id] ? `<div class="done-mark">${t('sDone')}</div>` : ''}</button>`; }).join('')}
    </div></div>`;
    $$('.story-card', main).forEach(b => b.onclick = () => { if (!b.disabled) go('stories', b.dataset.s); });
  };
  function storyPlayer(main, st) {
    let i = 0;
    main.innerHTML = `<div class="page"><button class="btn ghost small backbtn">← ${t('back')}</button><h1 class="v" style="color:var(--violet)">${st.icon} ${esc(st.title)}</h1><p class="lead">${esc(L(st.desc))}</p><div class="story-body"></div><div style="position:sticky;bottom:0;padding:16px 0;background:var(--bg);display:flex;gap:12px;justify-content:flex-end;border-top:2px solid var(--line)"><button class="btn ghost small tr-toggle">${t('sShowTr')}</button><button class="btn green next">${t('continue')}</button></div></div>`;
    $('.backbtn', main).onclick = () => go('stories');
    const body = $('.story-body', main); const nextB = $('.next', main);
    let showTr = false;
    $('.tr-toggle', main).onclick = () => { showTr = !showTr; $$('.tr', body).forEach(x => x.classList.toggle('hidden', !showTr)); };
    function step() {
      if (i >= st.lines.length) {
        nextB.textContent = t('sFinish');
        nextB.onclick = () => {
          const first = !State.s.stories[st.id];
          State.s.stories[st.id] = todayStr();
          if (first) { State.s.gems += 10; State.addXp(15); State.s.stats.stories++; } else State.addXp(5);
          Ach.check(); State.save(); Sound.complete(); confetti(); renderSide(); go('stories');
        };
        return;
      }
      const ln = st.lines[i++];
      if (ln.q) {
        nextB.disabled = true;
        const q = document.createElement('div'); q.className = 'story-q';
        q.innerHTML = `<h4>❓ ${esc(L(ln.q))}</h4><div class="options">${ln.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${k + 1}</span>${esc(L(o))}</button>`).join('')}</div>`;
        body.appendChild(q);
        $$('.opt', q).forEach(b => b.onclick = () => {
          if (+b.dataset.k === ln.a) { b.classList.add('right'); Sound.correct(); $$('.opt', q).forEach(x => x.disabled = true); nextB.disabled = false; }
          else { b.classList.add('wrong'); Sound.wrong(); setTimeout(() => b.classList.remove('wrong'), 600); }
        });
      } else {
        const who = st.cast[ln.w] || ['', '💬'];
        const d = document.createElement('div'); d.className = 'story-line' + (ln.w === 'n' ? ' narr' : '');
        d.innerHTML = `<div class="av">${who[1]}</div><div class="sbub">${who[0] ? `<div class="who">${esc(who[0])}</div>` : ''}<div style="display:flex;gap:10px;align-items:center"><button class="btn blue sound-btn" style="width:40px;height:38px;font-size:16px" data-speak="${esc(ln.v)}">🔊</button><span class="v">${tokenizeV(ln.v)}</span></div><div class="tr ${showTr ? '' : 'hidden'}">${esc(ln[lang()])}</div></div>`;
        body.appendChild(d);
        $('[data-speak]', d).onclick = () => TTS.speak(ln.v);
        TTS.speak(ln.v);
      }
      setTimeout(() => main.scrollTo({ top: main.scrollHeight, behavior: 'smooth' }), 30);
    }
    nextB.onclick = () => { Sound.click(); step(); };
    step();
  }

  // ================= DICTIONNAIRE =================
  let dictQ = '', dictF = 'all', dictTheme = '';
  const GROUPS = ['noms', 'verbes', 'adjectifs', 'adverbes', 'personnes', 'lieux', 'abstrait', 'participes', 'nombres', 'grammaire', 'expressions'];
  const dictWords = () => LEXICON.filter(e => !e.sense);
  Pages.dict = function (main) {
    const all = dictWords();
    main.innerHTML = `<div class="page wide"><h1>${t('dTitle')}</h1><p class="lead">${t('dLead', { n: all.length })}</p>
      <div class="searchbar"><input type="search" placeholder="${t('dSearch')}" value="${esc(dictQ)}"><select class="sel theme"><option value="">— ${t('dAllCats')} —</option>${GROUPS.map(g => `<option value="${g}" ${g === dictTheme ? 'selected' : ''}>${esc(t('g_' + g))}</option>`).join('')}</select></div>
      <div class="chips">${[['all', t('dAll')], ['learned', '✓ ' + t('dLearned')], ['livre', '◆ ' + t('dSrcLivre')], ['dico', t('dSrcDico')]].map(([k, l]) => `<button class="chip ${dictF === k ? 'on' : ''}" data-f="${k}">${esc(l)}</button>`).join('')}</div>
      <div class="dict-count"></div><div class="dict-list"></div></div>`;
    const inp = $('input', main), list = $('.dict-list', main);
    const draw = () => {
      const q = Morph.normL(dictQ, 'fr', false).replace(/\s+/g, ' ');
      let rows = all.filter(e => {
        if (dictF === 'learned' && !State.knowsWord(e.id)) return false;
        if ((dictF === 'livre' || dictF === 'dico') && e.src !== dictF) return false;
        if (dictTheme && e.group !== dictTheme) return false;
        if (!q) return true;
        return Morph.normV(e.v).includes(q) || Morph.normL(e.fr, 'fr', false).includes(q) || Morph.normL(e.es || '', 'es', false).includes(q) || Morph.normL(e.en || '', 'fr', false).includes(q);
      });
      const score = (e) => { const v = Morph.normV(e.v); if (v === q) return 0; const g = Morph.normL(Morph.gloss(e, lang()), lang(), false); if (g === q || g.split(/[ ,;]+/).includes(q)) return 1; if (v.startsWith(q)) return 2; return 3; };
      if (q) rows.sort((a, b) => score(a) - score(b) || Morph.normV(a.v).localeCompare(Morph.normV(b.v)));
      else rows.sort((a, b) => Morph.normV(a.v).localeCompare(Morph.normV(b.v)));
      $('.dict-count', main).textContent = t('dCount', { n: rows.length });
      list.innerHTML = rows.length ? rows.slice(0, 300).map(e => `<button class="dict-row" data-id="${e.id}"><div class="w">${esc(e.v)}${State.knowsWord(e.id) ? '<span class="learned-dot">●</span>' : ''}</div><div><span class="g">${esc(Morph.gloss(e, lang()))}</span> <span class="c">${esc(e.label || e.cat)}</span></div><span class="src ${e.src}">${e.src === 'livre' ? '◆ ' + esc(t('dSrcLivre')) : esc(t('dSrcDico'))}</span></button>`).join('') + (rows.length > 300 ? `<div class="center" style="color:var(--ink-faint);font-weight:700;padding:10px">${t('dMore', { n: rows.length - 300 })}</div>` : '') : `<div class="card center" style="color:var(--ink-soft);font-weight:700">${t('dNone')}</div>`;
      $$('.dict-row', list).forEach(r => r.onclick = () => wordModal(LEXICON[+r.dataset.id]));
    };
    let tmr = null;
    inp.oninput = () => { dictQ = inp.value; clearTimeout(tmr); tmr = setTimeout(draw, 120); };
    $('.theme', main).onchange = (e) => { dictTheme = e.target.value; draw(); };
    $$('.chip', main).forEach(c => c.onclick = () => { dictF = c.dataset.f; $$('.chip', main).forEach(x => x.classList.toggle('on', x === c)); draw(); });
    draw(); setTimeout(() => inp.focus(), 50);
  };

  function conjTable(root) {
    const c = Morph.conjugate(root);
    const PL = Morph.PRON_L[lang()];
    return `<table class="gt plain"><tr><th></th><th>${t('tPresent')}</th><th>${t('tPast')}</th><th>${t('tFuture')}</th><th>${t('tCond')}</th></tr>
      ${Morph.PRON.map((p, i) => `<tr><td>${esc(PL[p])}</td>${['present', 'past', 'future', 'cond'].map(k => `<td class="v">${esc(c.table[k][i])}</td>`).join('')}</tr>`).join('')}</table>
      <table class="gt plain"><tr><td>${t('tInf')}</td><td class="v">${esc(c.inf)}</td><td>${lang() === 'es' ? 'Participio activo' : 'Participe actif'}</td><td class="v">${esc(c.act)}</td></tr><tr><td>${lang() === 'es' ? 'Resultativo' : 'Résultatif'}</td><td class="v">${esc(c.res)}</td><td>${lang() === 'es' ? 'Imperativo' : 'Impératif'}</td><td class="v">${esc(c.imp)}</td></tr><tr><td>${t('tProg')}</td><td class="v">${esc(c.prog)}</td><td>${t('tHab')}</td><td class="v">${esc(c.hab)}</td></tr></table>`;
  }
  function declTable(w) {
    const d = Morph.decline(w);
    return `<table class="gt plain"><tr><th></th>${Morph.NUMBERS.map(n => `<th>${esc(lang() === 'es' ? n.es : n.fr)}</th>`).join('')}</tr>${d.rows.map(r => `<tr><td>${esc(lang() === 'es' ? r.c.es : r.c.fr)} <span style="color:var(--ink-faint);font-size:12px">${esc(lang() === 'es' ? r.c.ges : r.c.gfr)}</span></td>${r.forms.map(f => `<td class="v">${esc(f)}${r.c.k === 'voc' ? ' !' : ''}</td>`).join('')}</tr>`).join('')}</table>`;
  }
  window.conjTable = conjTable; window.declTable = declTable;

  function examplesFor(e) {
    const out = [];
    const base = e.v.toLowerCase();
    for (const s of Ex.allSentences()) {
      if (Morph.tokensV(s.v[0]).some(tk => { const a = Morph.analyze(tk); return a && a.base === base; })) out.push(s);
      if (out.length >= 4) break;
    }
    return out;
  }
  function wordModal(e) {
    const canTab = (e.cat === 'v' && !/\s/.test(e.v)) || (e.cat === 'n' && /^[a-zë]+$/i.test(e.v));
    const ex = examplesFor(e);
    const m = modal(`<div class="word-head"><div class="w">${esc(e.v)}</div><button class="btn blue sound-btn" data-sp>🔊</button><span class="src ${e.src}">${e.src === 'livre' ? '◆ ' + esc(t('dSrcLivre')) : esc(t('dSrcDico'))}</span></div>
      <div class="word-tezin"><span class="tz">${esc(e.v)}</span><span>${t('dTezin')}</span></div>
      <div class="word-sub">${esc(e.label || e.cat)}${e.inf ? ` · ${t('tInf')} <span class="v">${esc(e.inf)}</span>` : ''}</div>
      <table class="gt plain"><tr><td>🇫🇷 Français</td><td><b>${esc(e.fr)}</b></td></tr><tr><td>🇬🇧 English</td><td><b>${esc(e.en || '—')}</b></td></tr><tr><td>🇪🇸 Español</td><td><b>${esc(e.es || '—')}</b></td></tr>${e.form ? `<tr><td>${t('dForm')}</td><td>${esc(e.form)}</td></tr>` : ''}</table>
      ${canTab ? `<h4 style="font-weight:900;margin:16px 0 6px">${e.cat === 'v' ? t('dConj') : t('dDecl')}</h4>${e.cat === 'v' ? conjTable(e.v) : declTable(e.v)}` : ''}
      ${ex.length ? `<h4 style="font-weight:900;margin:16px 0 6px">${t('dExamples')}</h4><table class="gt plain">${ex.map(s => `<tr><td class="v">${tokenizeV(s.v[0])}</td><td>${esc(s[lang()][0])}</td></tr>`).join('')}</table>` : ''}`, { big: true });
    $('[data-sp]', m.el).onclick = () => { if (!TTS.speak(e.v)) toast('🔇', t('toastNoVoice')); };
  }
  window.wordModal = wordModal;

  // ================= GRAMMAIRE =================
  Pages.grammar = function (main, arg) {
    if (arg != null) return chapter(main, arg);
    main.innerHTML = `<div class="page"><h1>${t('gTitle')}</h1><p class="lead">${t('gLead')}</p>
      <div class="chapters">${GRAMMAR.map((g, i) => `<button class="chapter" data-c="g${i}"><div class="ci">${g.icon}</div><div><div class="ct">${esc(L(g.title))}</div><div class="cd">${esc(L(g.desc))}</div></div></button>`).join('')}</div>
      <h2 class="section-h">📚 ${t('unit')}s</h2>
      <div class="chapters">${COURSE.map((u, i) => `<button class="chapter" data-c="u${i}"><div class="ci">${u.icon}</div><div><div class="ct">${t('unit')} ${i + 1} · ${esc(L(u.title))}</div><div class="cd">${esc(L(u.desc))}</div></div></button>`).join('')}</div></div>`;
    $$('.chapter', main).forEach(b => b.onclick = () => go('grammar', b.dataset.c));
  };
  function chapter(main, id) {
    let title, body;
    if (id[0] === 'g') { const g = GRAMMAR[+id.slice(1)]; title = g.icon + ' ' + L(g.title); body = L(g.body); }
    else { const u = COURSE[+id.slice(1)]; title = u.icon + ' ' + L(u.title); body = L(u.tip); }
    main.innerHTML = `<div class="page"><button class="btn ghost small backbtn">← ${t('back')}</button><h1>${esc(title)}</h1><div class="guide card">${body}</div></div>`;
    $('.backbtn', main).onclick = () => go('grammar');
    $$('[data-tool]', main).forEach(el => {
      const tool = el.dataset.tool;
      if (tool === 'tezin') {
        const V = [['a', 'a'], ['e', 'é / e'], ['i', 'i'], ['o', 'o'], ['u', lang() === 'es' ? 'u' : 'ou'], ['ë', lang() === 'es' ? 'schwa' : 'e muet'], ['æ', lang() === 'es' ? 'e abierta' : 'è ouvert'], ['y', 'y']];
        const C = [['p', 'b'], ['t', 'd'], ['k', 'g'], ['f', 'v'], ['s', 'z'], ['c', 'j']];
        const O = ['h', 'r', 'l', 'm', 'n', 'w'];
        el.innerHTML = `<table class="gt plain tezin-table"><tr>${V.map(x => `<td class="tzc">${x[0]}</td>`).join('')}</tr><tr>${V.map(x => `<td class="v" style="text-align:center">${x[0]}<div style="font-family:var(--font);font-size:11px;color:var(--ink-faint)">${esc(x[1])}</div></td>`).join('')}</tr></table>
          <table class="gt plain tezin-table"><tr>${C.map(x => `<td class="tzc">${x[0]} ${x[1]}</td>`).join('')}</tr><tr>${C.map(x => `<td class="v" style="text-align:center">${x[0]} · ${x[1]}</td>`).join('')}</tr></table>
          <table class="gt plain tezin-table"><tr>${O.map(x => `<td class="tzc">${x}</td>`).join('')}</tr><tr>${O.map(x => `<td class="v" style="text-align:center">${x}</td>`).join('')}</tr></table>`;
      } else if (tool === 'tezin-try') {
        el.innerHTML = `<input class="typebox v" style="min-height:0;height:50px;padding:8px 14px;font-family:var(--font-v)" value="Aer selen, vaelin nar !" spellcheck="false"><div class="tezin-demo tz out"></div>`;
        const inp = $('input', el), out = $('.out', el);
        const draw = () => { out.textContent = inp.value; }; inp.oninput = draw; draw();
      } else if (tool === 'idioms') {
        el.innerHTML = IDIOMS.map(r => `<div style="padding:12px 0;border-bottom:2px solid var(--line)"><div style="display:flex;gap:10px;align-items:center"><button class="btn blue sound-btn" style="width:40px;height:38px;font-size:16px" data-speak="${esc(r[0])}">🔊</button><span class="v" style="font-size:20px;color:var(--violet);font-weight:700">${tokenizeV(r[0])}</span></div><div style="color:var(--ink-soft);font-weight:600;margin-top:4px">« ${esc(lang() === 'es' ? r[3] : r[1])} »</div><div style="font-weight:800">→ ${esc(lang() === 'es' ? r[4] : r[2])}</div></div>`).join('');
        $$('[data-speak]', el).forEach(b => b.onclick = () => TTS.speak(b.dataset.speak));
      } else {
        const def = tool === 'conj' ? 'mir' : 'dom';
        el.innerHTML = `<div style="display:flex;gap:10px;margin-bottom:10px"><input class="typebox v" style="min-height:0;height:50px;padding:8px 14px" value="${def}" spellcheck="false"></div><div class="out"></div>`;
        const inp = $('input', el), out = $('.out', el);
        const draw = () => { const w = inp.value.trim().toLowerCase().replace(/[^a-zëæ-]/g, ''); out.innerHTML = w ? (tool === 'conj' ? conjTable(w) : declTable(w)) : ''; const e = Morph.byV.get(w); if (e) out.insertAdjacentHTML('afterbegin', `<p style="font-weight:800">${esc(e.map(x => Morph.gloss(x, lang())).join(' · '))}</p>`); };
        inp.oninput = draw; draw();
      }
    });
  }

  // ================= BOUTIQUE =================
  Pages.shop = function (main) {
    const s = State.s;
    const full = s.hearts >= State.MAX_HEARTS || s.zen;
    main.innerHTML = `<div class="page"><div class="mobile-stats"></div><h1>${t('shopTitle')}</h1><p class="lead">${t('shopLead')} · 🪙 <b>${s.gems}</b></p>
      <div class="shop-item"><div class="si">❤️</div><div class="sb"><b>${t('shopRefill')}</b><span>${t('shopRefillD')}</span></div><button class="btn gold" data-buy="refill" ${full ? 'disabled' : ''}>${full ? t('full') : '🪙 350'}</button></div>
      <div class="shop-item"><div class="si">🧊</div><div class="sb"><b>${t('shopFreeze')}</b><span>${t('shopFreezeD', { n: s.freezes })}</span></div><button class="btn gold" data-buy="freeze" ${s.freezes >= 2 ? 'disabled' : ''}>${s.freezes >= 2 ? t('owned') : '🪙 200'}</button></div>
      <div class="shop-item"><div style="width:70px">${mascotSVG({})}</div><div class="sb"><b>${t('shopColor')}</b><span>${t('shopColorD')} (🪙 300)</span>
        <div class="swatches">${Object.entries(MASCOT_COLORS).map(([k, c]) => `<button class="swatch ${s.mascotColor === k ? 'on' : ''}" data-col="${k}" style="background:${c.body}" title="${k}">${s.colors.includes(k) ? '' : '<span class="lock">🔒</span>'}</button>`).join('')}</div></div></div>
    </div>`;
    const ms = $('.mobile-stats', main); if (ms) { ms.innerHTML = topStatsHTML(); bindTopStats(ms); }
    const pay = (n) => { if (State.s.gems < n) { toast('🪙', t('notEnough')); return false; } State.s.gems -= n; return true; };
    $$('[data-buy]', main).forEach(b => b.onclick = () => {
      const k = b.dataset.buy;
      if (k === 'refill' && pay(350)) { State.s.hearts = State.MAX_HEARTS; Sound.heart(); toast('❤️', t('bought')); }
      if (k === 'freeze' && pay(200)) { State.s.freezes++; Sound.chest(); toast('🧊', t('bought')); }
      State.save(); renderSide(); go('shop');
    });
    $$('[data-col]', main).forEach(b => b.onclick = () => {
      const k = b.dataset.col;
      if (!State.s.colors.includes(k)) { if (!pay(300)) return; State.s.colors.push(k); Sound.chest(); toast('🎨', t('bought')); }
      State.s.mascotColor = k; State.save(); renderSide(); go('shop');
    });
  };

  // ================= PROFIL =================
  Pages.profile = function (main) {
    const s = State.s;
    const words = Object.keys(s.words).length;
    const acc = s.stats.total ? Math.round(100 * s.stats.correct / s.stats.total) : 0;
    const since = new Date(s.created + 'T12:00').toLocaleDateString(lang() === 'es' ? 'es' : 'fr', { month: 'long', year: 'numeric' });
    const days = []; const d = new Date(); d.setDate(d.getDate() - 6);
    for (let i = 0; i < 7; i++) { const k = todayStr(d); days.push([k, s.xpByDay[k] || 0, d.toLocaleDateString(lang() === 'es' ? 'es' : 'fr', { weekday: 'short' })]); d.setDate(d.getDate() + 1); }
    const maxX = Math.max(s.dailyGoal, ...days.map(x => x[1]));
    main.innerHTML = `<div class="page"><div class="mobile-stats"></div>
      <div class="prof-head"><div class="avatar">${mascotSVG({ mood: 'happy' })}</div><div><h1>${t('prTitle')}</h1><div style="color:var(--ink-soft);font-weight:700">${t('since', { d: esc(since) })}</div><div style="font-weight:800;margin-top:4px">${lang() === 'es' ? '🇪🇸 Español' : '🇫🇷 Français'} → <span class="v" style="color:var(--violet)">Vaelrën</span></div></div></div>
      <div class="stat-grid">
        <div class="sgrid-item"><div class="si">⚡</div><div><b>${s.xp}</b><span>${t('stTotalXp')}</span></div></div>
        <div class="sgrid-item"><div class="si">🔥</div><div><b>${s.streak}</b><span>${t('stStreak')}</span></div></div>
        <div class="sgrid-item"><div class="si">🗝️</div><div><b>${words}</b><span>${t('stWords')}</span></div></div>
        <div class="sgrid-item"><div class="si">📘</div><div><b>${s.stats.lessons}</b><span>${t('stLessons')}</span></div></div>
        <div class="sgrid-item"><div class="si">🏅</div><div><b>${s.bestStreak}</b><span>${t('stBest')}</span></div></div>
        <div class="sgrid-item"><div class="si">🎯</div><div><b>${acc}%</b><span>${t('stAccuracy')}</span></div></div>
      </div>
      <h2 class="section-h">${t('week')}</h2>
      <div class="card"><div class="week">${days.map(([k, v, lbl], i) => `<div class="col ${i === 6 ? 'today' : ''}"><div class="cv">${v || ''}</div><div class="colbar" style="height:${Math.round(100 * v / maxX)}%"></div><div class="cl">${esc(lbl)}</div></div>`).join('')}</div></div>
      <h2 class="section-h">${t('achievements')}</h2>
      <div class="ach-list">${Ach.ACH.map(a => { const g = Ach.goal(a); const v = Math.min(g, a.v()); const got = !!s.ach[a.id]; return `<div class="ach ${got ? '' : 'locked'}"><div class="ai">${a.icon}</div><div class="ab"><div class="at">${esc(L({ fr: a.fr, es: a.es }))}</div><div class="ad">${esc(L({ fr: a.dfr, es: a.des }))}</div><div class="bar ${got ? 'green' : ''}"><i style="width:${100 * v / g}%"></i></div></div><div style="font-weight:900;color:var(--ink-soft);font-size:14px">${v}/${g}</div></div>`; }).join('')}</div>
    </div>`;
    const ms = $('.mobile-stats', main); if (ms) { ms.innerHTML = topStatsHTML(); bindTopStats(ms); }
  };

  // ================= RÉGLAGES =================
  Pages.settings = function (main) {
    const s = State.s;
    const sw = (k) => `<button class="switch ${s[k] ? 'on' : ''}" data-sw="${k}" role="switch" aria-checked="${!!s[k]}"></button>`;
    const voices = TTS.voices || [];
    main.innerHTML = `<div class="page"><h1>${t('setTitle')}</h1>
      <div class="setting"><div class="sl"><b>${t('setLang')}</b><span>${t('setLangD')}</span></div><div class="seg"><button data-lang="fr" class="${s.lang === 'fr' ? 'on' : ''}">🇫🇷 Français</button><button data-lang="es" class="${s.lang === 'es' ? 'on' : ''}">🇪🇸 Español</button></div></div>
      <div class="setting"><div class="sl"><b>${t('setGoal')}</b><span>${s.dailyGoal} ${t('perDay')}</span></div><div class="seg">${[[10, 'goalCasual'], [20, 'goalRegular'], [30, 'goalSerious'], [50, 'goalIntense']].map(([n, k]) => `<button data-goal="${n}" class="${s.dailyGoal === n ? 'on' : ''}">${t(k)}</button>`).join('')}</div></div>
      <div class="setting"><div class="sl"><b>${t('setTheme')}</b></div><div class="seg">${['auto', 'light', 'dark'].map(k => `<button data-theme="${k}" class="${s.theme === k ? 'on' : ''}">${t('theme' + k[0].toUpperCase() + k.slice(1))}</button>`).join('')}</div></div>
      <div class="setting"><div class="sl"><b>${t('setScript')}</b><span>${t('setScriptD')}</span></div><div class="seg"><button data-script="latin" class="${s.script !== 'tezin' ? 'on' : ''}">Abc</button><button data-script="tezin" class="${s.script === 'tezin' ? 'on' : ''}"><span class="tz">vælrën</span></button></div></div>
      <div class="setting"><div class="sl"><b>${t('setSound')}</b></div>${sw('sound')}</div>
      <div class="setting"><div class="sl"><b>${t('setVoice')}</b><span>${t('setVoiceD')}</span></div>${sw('voice')}</div>
      <div class="setting"><div class="sl"><b>${t('setVoiceSel')}</b><span>${voices.length} ${lang() === 'es' ? 'voces' : 'voix'}</span></div><div style="display:flex;gap:8px"><select class="sel" data-voice><option value="">${t('setVoiceAuto')}</option>${voices.map(v => `<option value="${esc(v.name)}" ${s.voiceName === v.name ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select><button class="btn small blue" data-test>${t('testVoice')}</button></div></div>
      <div class="setting"><div class="sl"><b>${t('setRate')}</b><span>${s.voiceRate.toFixed(2)}×</span></div><input type="range" min="0.5" max="1.3" step="0.05" value="${s.voiceRate}" data-rate></div>
      <div class="setting"><div class="sl"><b>${t('setHints')}</b><span>${t('setHintsD')}</span></div>${sw('hints')}</div>
      <div class="setting"><div class="sl"><b>${t('setZen')}</b><span>${t('setZenD')}</span></div>${sw('zen')}</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px"><button class="btn ghost" data-export>💾 ${t('setExport')}</button><button class="btn ghost" data-import>📂 ${t('setImport')}</button><button class="btn red" data-reset>${t('setReset')}</button><input type="file" accept=".json" class="hidden" data-file></div>
    </div>`;
    const redo = () => { State.save(); renderAll(); };
    $$('[data-sw]', main).forEach(b => b.onclick = () => { s[b.dataset.sw] = !s[b.dataset.sw]; Sound.click(); redo(); });
    $$('[data-lang]', main).forEach(b => b.onclick = () => { s.lang = b.dataset.lang; redo(); });
    $$('[data-goal]', main).forEach(b => b.onclick = () => { s.dailyGoal = +b.dataset.goal; if (s.quests) s.quests.date = ''; redo(); });
    $$('[data-theme]', main).forEach(b => b.onclick = () => { s.theme = b.dataset.theme; redo(); });
    $$('[data-script]', main).forEach(b => b.onclick = () => { s.script = b.dataset.script; redo(); });
    $('[data-voice]', main).onchange = (e) => { s.voiceName = e.target.value; State.save(); TTS.speak('Haelin, ven !'); };
    $('[data-test]', main).onclick = () => { if (!TTS.speak('Haelin ! Na es Sharky. Aer selen, vaelin nar !')) toast('🔇', t('toastNoVoice')); };
    $('[data-rate]', main).oninput = (e) => { s.voiceRate = +e.target.value; State.save(); $('[data-rate]', main).closest('.setting').querySelector('span').textContent = s.voiceRate.toFixed(2) + '×'; };
    $('[data-rate]', main).onchange = () => TTS.speak('Vaelrën');
    $('[data-export]', main).onclick = () => {
      const blob = new Blob([JSON.stringify(State.s, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `sharklingo-sauvegarde-${todayStr()}.json`; a.click(); toast('💾', t('exported'));
    };
    const file = $('[data-file]', main);
    $('[data-import]', main).onclick = () => file.click();
    file.onchange = async () => {
      try { const d = JSON.parse(await file.files[0].text()); if (!d || typeof d.xp !== 'number' || !d.done) throw 0; localStorage.setItem('vaelren-academie-v1', JSON.stringify(d)); State.load(); toast('📂', t('imported')); renderAll(); }
      catch (e) { toast('⚠️', t('importBad')); }
    };
    $('[data-reset]', main).onclick = () => {
      const m = modal(`<h2>${t('setReset')}</h2><p style="font-weight:700;color:var(--ink-soft)">${t('resetConfirm')}</p><div class="actions"><button class="btn ghost" data-a="no">${t('noThanks')}</button><button class="btn red" data-a="yes">${t('setReset')}</button></div>`);
      $('[data-a=no]', m.el).onclick = m.close;
      $('[data-a=yes]', m.el).onclick = () => { State.reset(); m.close(); toast('🧹', t('resetDone')); renderAll(); };
    };
  };

  // ================= ACCUEIL =================
  window.Onboarding = {
    start() {
      const el = document.createElement('div'); el.className = 'onboard'; document.body.appendChild(el);
      let lang = 'fr', goal = 20;
      const step1 = () => {
        el.innerHTML = `<div class="ob-inner"><div style="width:200px;margin:0 auto">${mascotSVG({ anim: 'float' })}</div><h1 class="ob-title">Sharklingo</h1><p class="ob-sub">Vaelrën · Français · Español</p>
          <div class="ob-choices"><button class="ob-choice ${lang === 'fr' ? 'on' : ''}" data-l="fr"><span class="flag">🇫🇷</span><span>J'apprends depuis le français<small>Je parle français</small></span></button><button class="ob-choice ${lang === 'es' ? 'on' : ''}" data-l="es"><span class="flag">🇪🇸</span><span>Aprendo desde el español<small>Hablo español</small></span></button></div>
          <button class="btn gold wide" data-next>${lang === 'es' ? 'Siguiente' : 'Suivant'}</button></div>`;
        $$('[data-l]', el).forEach(b => b.onclick = () => { lang = b.dataset.l; Sound.click(); step1(); });
        $('[data-next]', el).onclick = () => { State.s.lang = lang; step2(); };
      };
      const step2 = () => {
        el.innerHTML = `<div class="ob-inner"><div style="width:150px;margin:0 auto">${mascotSVG({ mood: 'wow' })}</div><h1 class="ob-title" style="font-size:30px">${t('obGoalQ')}</h1><p class="ob-sub"></p>
          <div class="ob-choices">${[[10, 'goalCasual'], [20, 'goalRegular'], [30, 'goalSerious'], [50, 'goalIntense']].map(([n, k]) => `<button class="ob-choice ${goal === n ? 'on' : ''}" data-g="${n}"><span class="flag">${n === 10 ? '🌱' : n === 20 ? '🔥' : n === 30 ? '⚔️' : '🐉'}</span><span>${t(k)}<small>${n} ${t('perDay')}</small></span></button>`).join('')}</div>
          <button class="btn gold wide" data-next>${t('obNext')}</button></div>`;
        $$('[data-g]', el).forEach(b => b.onclick = () => { goal = +b.dataset.g; Sound.click(); step2(); });
        $('[data-next]', el).onclick = () => { State.s.dailyGoal = goal; step3(); };
      };
      const step3 = () => {
        el.innerHTML = `<div class="ob-inner"><div style="width:220px;margin:0 auto">${mascotSVG({ mood: 'happy', anim: 'jump' })}</div><h1 class="ob-title" style="font-size:34px">Haelin !</h1><p class="ob-sub">${t('hiVazi')}</p><button class="btn gold wide" data-next>${t('obGo')}</button></div>`;
        TTS.speak('Haelin !');
        $('[data-next]', el).onclick = () => { State.s.onboarded = true; State.save(); el.remove(); Sound.complete(); renderAll(); };
      };
      step1();
    }
  };
})();
