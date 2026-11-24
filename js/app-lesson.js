/* Sharklingo — moteur de leçon */
(function () {
  let S = null; // session courante
  const lang = () => State.s.lang;
  const isV = (x) => x === 'v';

  function speakBtn(text, cls = '') { return `<button class="btn blue sound-btn ${cls}" data-speak="${esc(text)}" title="${t('dListen')}">🔊</button>`; }
  function bindSpeak(root) {
    $$('[data-speak]', root).forEach(b => b.onclick = (e) => { e.stopPropagation(); if (!TTS.speak(b.dataset.speak, b.classList.contains('slow'))) toast('🔇', t('toastNoVoice')); });
  }

  const Lesson = {
    start(kind, arg) {
      const practiceKinds = ['mistakes', 'words', 'conj', 'decl', 'listen', 'smart', 'tezin'];
      const isPractice = practiceKinds.includes(kind);
      if (!isPractice && !State.s.zen) { State.regen(); if (State.s.hearts <= 0) { heartsModal(); return; } }
      let queue = [];
      if (kind === 'lesson') queue = Ex.buildLesson(arg.ui, arg.li);
      else if (kind === 'review') queue = Ex.buildUnitReview(arg.ui);
      else if (kind === 'jump') { queue = []; for (let u = Math.max(0, arg.ui - 3); u < arg.ui; u++) queue.push(...Ex.buildUnitReview(u, 6)); queue = Ex.sample(queue, 12); }
      else if (kind === 'mistakes') queue = Ex.buildMistakes();
      else if (kind === 'words') queue = Ex.buildWords();
      else if (kind === 'conj') queue = Ex.buildConj();
      else if (kind === 'decl') queue = Ex.buildDecl();
      else if (kind === 'tezin') queue = Ex.buildTezin();
      else if (kind === 'listen') queue = Ex.buildListen();
      else if (kind === 'smart') queue = Ex.buildSmart();
      queue = queue.filter(Boolean);
      if (!queue.length) { toast('🤔', t('pNone')); return; }
      S = { kind, arg, isPractice, queue, i: 0, initial: queue.length, firstTry: 0, wrong: 0, combo: 0, maxCombo: 0, t0: Date.now(), retried: new Set(), jumpErr: 0 };
      const el = document.createElement('div'); el.id = 'lesson';
      el.innerHTML = `<div class="l-top"><button class="l-close" aria-label="${t('quit')}">✕</button><div class="bar l-prog"><i style="width:0%"></i></div><div class="l-hearts"></div></div><div class="l-body"></div><div class="l-foot"><div class="inner"></div></div>`;
      document.body.appendChild(el);
      $('.l-close', el).onclick = confirmQuit;
      document.addEventListener('keydown', onKey);
      renderHearts();
      next();
    },
    get session() { return S; },
  };
  window.Lesson = Lesson;

  function renderHearts() {
    const h = $('#lesson .l-hearts'); if (!h) return;
    if (S.kind === 'jump') { h.className = 'l-hearts'; h.innerHTML = `❤️ ${Math.max(0, 3 - S.jumpErr)}`; return; }
    if (S.isPractice || State.s.zen) { h.className = 'l-hearts zen'; h.innerHTML = `💜 ∞`; return; }
    h.className = 'l-hearts'; h.innerHTML = `❤️ ${State.s.hearts}`;
  }
  function setProgress() {
    const p = $('#lesson .l-prog i'); if (p) p.style.width = (100 * S.i / S.queue.length) + '%';
  }
  function close() {
    document.removeEventListener('keydown', onKey);
    const el = $('#lesson'); if (el) el.remove();
    hideHint(); if ('speechSynthesis' in window) speechSynthesis.cancel();
    S = null;
    renderSide(); go(currentPage() === 'learn' ? 'learn' : currentPage());
  }
  function confirmQuit() {
    const m = modal(`<div class="center"><div style="width:140px;margin:0 auto">${mascotSVG({ mood: 'sad' })}</div><h2>${t('quitTitle')}</h2><p style="color:var(--ink-soft);font-weight:700">${t('quitMsg')}</p></div>
      <div class="actions" style="justify-content:center;flex-direction:column"><button class="btn wide" data-a="stay">${t('keepLearning')}</button><button class="linkbtn" data-a="quit" style="color:var(--red)">${t('quit')}</button></div>`);
    $('[data-a=stay]', m.el).onclick = m.close;
    $('[data-a=quit]', m.el).onclick = () => { m.close(); close(); };
  }

  let ctrl = null, phase = 'answer';
  function onKey(e) {
    if ($('.modal-bg')) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.target && e.target.tagName === 'TEXTAREA') e.preventDefault();
      if (e.repeat) return;
      const b = $('#lesson .l-foot .btn.main'); if (b && !b.disabled) { e.preventDefault(); b.click(); }
      return;
    }
    if (e.key === 'Escape') { confirmQuit(); return; }
    if (phase === 'answer' && ctrl && ctrl.onKey && !(e.target && /TEXTAREA|INPUT/.test(e.target.tagName))) ctrl.onKey(e);
  }

  function foot(state, data = {}) {
    const f = $('#lesson .l-foot'); const inner = $('.inner', f);
    f.className = 'l-foot' + (state === 'ok' ? ' ok' : state === 'ko' ? ' ko' : '');
    if (state === 'answer') {
      const ex = S.queue[S.i];
      const skippable = ex.type === 'listen';
      inner.innerHTML = `<div class="fb">${skippable ? `<button class="btn ghost" data-a="skip">${t('cantListen')}</button>` : `<button class="btn ghost" data-a="skip">${t('skip')}</button>`}</div><button class="btn green main" data-a="check" disabled>${t('check')}</button>`;
      $('[data-a=check]', inner).onclick = doCheck;
      $('[data-a=skip]', inner).onclick = () => { if (ex.type === 'listen') { S.queue[S.i] = convertListen(ex); renderEx(); } else doCheck(true); };
    } else if (state === 'done') {
      inner.innerHTML = `<div class="fb"></div><button class="btn green main">${t('continue')}</button>`;
      $('.btn', inner).onclick = data.onContinue;
    } else {
      const ok = state === 'ok';
      inner.innerHTML = `<div class="fb"><div class="big">${ok ? '✔️' : '✖️'}</div><div style="min-width:0"><h3>${data.title}</h3>${data.html || ''}</div></div><button class="btn ${ok ? 'green' : 'red'} main">${t('continue')}</button>`;
      $('.btn.main', inner).onclick = advance;
      bindSpeak(inner);
    }
  }
  window.lessonReady = (r) => { const b = $('#lesson .l-foot .btn.main[data-a=check]'); if (b) b.disabled = !r; };

  function convertListen(ex) {
    const s = Ex.sentByKey(ex.skey);
    return { type: 'tiles', key: 's:' + ex.skey + ':l2v', skey: ex.skey, from: 'l1', target: 'v', title: t('exTranslate'), prompt: s[lang()][0], accepted: s.v, bank: ex.bank || Ex.shuffle(Morph.tokensV(s.v[0])), vrefs: s.v[0] };
  }

  function next() {
    if (!S) return;
    setProgress();
    if (S.i >= S.queue.length) return finish();
    renderEx();
  }

  function renderEx() {
    phase = 'answer';
    const ex = S.queue[S.i];
    const body = $('#lesson .l-body');
    body.scrollTop = 0;
    const badge = ex.retry ? `<div class="ex-badge mistake">↻ ${t('prevMistake')}</div>` : ex.badge === 'new' ? `<div class="ex-badge new">✦ ${t('newWord')}</div>` : ex.badge === 'mistake' ? `<div class="ex-badge mistake">↻ ${t('prevMistake')}</div>` : '';
    body.innerHTML = `<div class="ex">${badge}<h2>${ex.title}</h2><div class="ex-c"></div></div>`;
    const c = $('.ex-c', body);
    foot('answer');
    ctrl = (R[ex.type] || R.mcq)(c, ex);
    bindSpeak(body);
    if (S.combo >= 5) { const k = document.createElement('div'); k.className = 'combo'; k.textContent = '🔥 ' + t('combo', { n: S.combo }); $('#lesson').appendChild(k); setTimeout(() => k.remove(), 1500); }
  }

  // ---------- rendus ----------
  const R = {};
  function optKeys(c, sel, cb) {
    return (e) => {
      const n = parseInt(e.key, 10);
      const opts = $$(sel, c);
      if (n >= 1 && n <= opts.length) { opts[n - 1].click(); cb && cb(); }
    };
  }

  R.pick = (c, ex) => {
    let sel = -1;
    c.innerHTML = `<div class="options grid3">${ex.options.map((o, i) => `<button class="opt pic" data-i="${i}"><span class="emo">${o.emo}</span><span class="lbl">${esc(o.v)}</span><span class="k">${i + 1}</span></button>`).join('')}</div>`;
    const h2 = $('#lesson h2'); h2.innerHTML = t('exPick', { w: esc(Morph.shortGloss(ex.word, lang())) });
    $$('.opt', c).forEach(b => b.onclick = () => { $$('.opt', c).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.i; TTS.speak(ex.options[sel].v); Sound.click(); lessonReady(true); });
    return {
      onKey: optKeys(c, '.opt'),
      check: () => ({ ok: sel === ex.answer, sol: ex.options[ex.answer].v, solV: true }),
      mark: (ok) => { const b = $$('.opt', c); if (sel >= 0) b[sel].classList.add(ok ? 'right' : 'wrong'); if (!ok) b[ex.answer].classList.add('right'); }
    };
  };

  R.mcq = (c, ex) => {
    let sel = -1;
    const head = (ex.pre || '') + (ex.speak ? `<div style="margin:-6px 0 18px">${speakBtn(ex.speak)}</div>` : '');
    if (ex.speak) setTimeout(() => TTS.speak(ex.speak), 250);
    c.innerHTML = `${head}<div class="options">${ex.options.map((o, i) => `<button class="opt ${ex.optV ? 'v-opt' : ''}" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
    $$('.opt', c).forEach(b => b.onclick = () => { $$('.opt', c).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.i; if (ex.optV) TTS.speak(ex.options[sel]); Sound.click(); lessonReady(true); });
    return {
      onKey: optKeys(c, '.opt'),
      check: () => ({ ok: sel === ex.answer, sol: ex.options[ex.answer], solV: ex.optV }),
      mark: (ok) => { const b = $$('.opt', c); if (sel >= 0) b[sel].classList.add(ok ? 'right' : 'wrong'); if (!ok) b[ex.answer].classList.add('right'); }
    };
  };

  R.pairs = (c, ex) => {
    const left = Ex.shuffle(ex.pairs), right = Ex.shuffle(ex.pairs);
    c.innerHTML = `<div class="pairs"><div class="col">${left.map((p, i) => `<button class="opt v-opt" data-side="v" data-id="${p.id}"><span class="k">${i + 1}</span><span style="flex:1">${esc(p.v)}</span></button>`).join('')}</div>
      <div class="col">${right.map((p, i) => `<button class="opt" data-side="l" data-id="${p.id}"><span class="k">${(i + left.length + 1) % 10}</span><span style="flex:1">${esc(p.l1)}</span></button>`).join('')}</div></div>`;
    let selV = null, selL = null, matched = 0, errors = 0;
    const tryMatch = () => {
      if (!selV || !selL) return;
      const a = selV, b = selL; selV = selL = null;
      if (a.dataset.id === b.dataset.id) {
        Sound.pair(); [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('flash'); setTimeout(() => { x.classList.remove('flash'); x.classList.add('gone'); }, 350); });
        matched++;
        if (matched === ex.pairs.length) { setTimeout(() => { doCheck(false, { ok: true, pairsErr: errors }); }, 450); }
      } else {
        Sound.wrong(); errors++;
        [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 400); });
      }
    };
    $$('.opt', c).forEach(b => b.onclick = () => {
      if (b.dataset.side === 'v') { if (selV) selV.classList.remove('sel'); selV = b; TTS.speak(ex.pairs.find(p => String(p.id) === b.dataset.id).v); }
      else { if (selL) selL.classList.remove('sel'); selL = b; }
      b.classList.add('sel'); Sound.click(); tryMatch();
    });
    const all = $$('.opt', c);
    return {
      onKey: (e) => { let n = parseInt(e.key, 10); if (isNaN(n)) return; if (n === 0) n = 10; const b = all[n - 1]; if (b && !b.classList.contains('gone')) b.click(); },
      check: () => ({ ok: true }), auto: true,
    };
  };

  function tilesUI(c, bank, isVT, promptHTML) {
    c.innerHTML = `${promptHTML}<div class="answer-zone"><div class="answer-line"></div><div class="answer-line"></div></div><div class="bank">${bank.map((w, i) => `<button class="tile ${isVT ? 'v' : ''}" data-i="${i}">${esc(w)}</button>`).join('')}</div>`;
    const lines = $$('.answer-line', c);
    const chosen = [];
    const redraw = () => {
      lines.forEach(l => l.innerHTML = '');
      chosen.forEach((i, k) => {
        const b = document.createElement('button'); b.className = 'tile pop' + (isVT ? ' v' : ''); b.textContent = bank[i];
        b.onclick = () => { chosen.splice(k, 1); $(`.bank .tile[data-i="${i}"]`, c).classList.remove('used'); Sound.click(); redraw(); };
        const target = lines[0].children.length < 7 || lines.length < 2 ? lines[0] : lines[1];
        target.appendChild(b);
      });
      lessonReady(chosen.length > 0);
    };
    $$('.bank .tile', c).forEach(b => b.onclick = () => { if (b.classList.contains('used')) return; chosen.push(+b.dataset.i); b.classList.add('used'); Sound.click(); if (isVT) TTS.speak(bank[+b.dataset.i]); redraw(); });
    return {
      answer: () => chosen.map(i => bank[i]).join(' '),
      onKey: (e) => {
        if (e.key === 'Backspace' && chosen.length) { const i = chosen.pop(); $(`.bank .tile[data-i="${i}"]`, c).classList.remove('used'); redraw(); return; }
        const n = parseInt(e.key, 10); const tiles = $$('.bank .tile', c);
        if (n >= 1 && n <= tiles.length) tiles[n - 1].click();
      }
    };
  }

  function promptBlock(ex) {
    if (ex.from === 'v') {
      return `<div class="speaker-row"><div class="mascot-mini">${mascotSVG({ mood: 'normal' })}</div><div class="bubble"><div style="display:flex;gap:10px;align-items:center">${speakBtn(ex.prompt)}<span class="v">${tokenizeV(ex.prompt)}</span></div></div></div>`;
    }
    return `<div class="speaker-row"><div class="mascot-mini">${mascotSVG({ mood: 'think' })}</div><div class="bubble">${tokenizeL1(ex.prompt, ex.vrefs)}</div></div>`;
  }

  R.tiles = (c, ex) => {
    const isVT = isV(ex.target);
    const ui = tilesUI(c, ex.bank, isVT, promptBlock(ex));
    if (ex.from === 'v') setTimeout(() => TTS.speak(ex.prompt), 250);
    return {
      onKey: ui.onKey,
      check: () => { const r = Morph.check(ui.answer(), ex.accepted, isVT ? 'v' : lang()); return { ok: r.ok && !r.typo, sol: ex.accepted[0], solV: isVT, alt: r.ok && r.best !== ex.accepted[0] ? ex.accepted[0] : null }; }
    };
  };

  function typeUI(c, isVT, promptHTML) {
    c.innerHTML = `${promptHTML}<textarea class="typebox ${isVT ? 'v' : ''}" spellcheck="false" placeholder="${isVT ? t('typeV') : t('typeHere')}"></textarea>${isVT ? `<div class="special-keys"><button data-ch="ë">ë</button><button data-ch="æ">æ</button></div>` : ''}`;
    const ta = $('textarea', c);
    ta.addEventListener('input', () => lessonReady(ta.value.trim().length > 0));
    $$('.special-keys button', c).forEach(b => b.onclick = () => { const p = ta.selectionStart; ta.value = ta.value.slice(0, p) + b.dataset.ch + ta.value.slice(ta.selectionEnd); ta.focus(); ta.selectionStart = ta.selectionEnd = p + 1; lessonReady(true); });
    setTimeout(() => ta.focus(), 60);
    return ta;
  }

  R.type = (c, ex) => {
    const isVT = isV(ex.target);
    const ph = ex.html ? ex.html : (ex.prompt ? promptBlock(ex) : '');
    const ta = typeUI(c, isVT, ph);
    if (ex.from === 'v' && ex.prompt) setTimeout(() => TTS.speak(ex.prompt), 250);
    return {
      typed: true,
      check: () => { const r = Morph.check(ta.value, ex.accepted, isVT ? 'v' : lang()); ta.disabled = true; return { ok: r.ok, typo: r.typo, accent: r.accent, sol: r.best || ex.accepted[0], solV: isVT }; }
    };
  };

  R.listen = (c, ex) => {
    const head = `<div style="display:flex;gap:18px;justify-content:center;align-items:flex-end;margin:10px 0 26px">${speakBtn(ex.audio, 'big')}${speakBtn(ex.audio, 'slow')}</div>`;
    $$('.slow', c);
    setTimeout(() => TTS.speak(ex.audio), 300);
    if (ex.mode === 'type') {
      const ta = typeUI(c, true, head);
      $$('[data-speak]', c).forEach(b => { if (b.classList.contains('slow')) b.textContent = '🐢'; });
      return { typed: true, listen: true, check: () => { const r = Morph.check(ta.value, ex.accepted, 'v'); ta.disabled = true; return { ok: r.ok, typo: r.typo, accent: r.accent, sol: ex.accepted[0], solV: true, meaning: ex.tr }; } };
    }
    const ui = tilesUI(c, ex.bank, true, head);
    $$('[data-speak]', c).forEach(b => { if (b.classList.contains('slow')) b.textContent = '🐢'; });
    return { onKey: ui.onKey, listen: true, check: () => { const r = Morph.check(ui.answer(), ex.accepted, 'v'); return { ok: r.ok && !r.typo, sol: ex.accepted[0], solV: true, meaning: ex.tr }; } };
  };

  R.fill = (c, ex) => {
    let sel = -1;
    c.innerHTML = `<div class="fill-sentence v">${ex.before.map(esc).join(' ')} <span class="gap">&nbsp;</span> ${ex.after.map(esc).join(' ')}${ex.after.length ? '' : ''}</div><div class="fill-tr">${esc(ex.tr)}</div>
      <div class="options">${ex.options.map((o, i) => `<button class="opt v-opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join('')}</div>`;
    const gap = $('.gap', c);
    $$('.opt', c).forEach(b => b.onclick = () => { $$('.opt', c).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.i; gap.textContent = ex.options[sel]; Sound.click(); lessonReady(true); });
    return {
      onKey: optKeys(c, '.opt'),
      check: () => ({ ok: sel === ex.answer, sol: ex.full, solV: true }),
      mark: (ok) => { const b = $$('.opt', c); if (sel >= 0) b[sel].classList.add(ok ? 'right' : 'wrong'); if (!ok) b[ex.answer].classList.add('right'); }
    };
  };

  // ---------- vérification ----------
  function doCheck(skipped, forced) {
    if (phase !== 'answer' || !S) return;
    phase = 'result'; hideHint();
    const ex = S.queue[S.i];
    let r = forced || (skipped === true ? { ok: false, sol: ex.accepted ? ex.accepted[0] : (ex.options ? (ex.optV ? ex.options[ex.answer] : ex.options[ex.answer]) : ''), solV: ex.target === 'v' || ex.optV || ex.type === 'fill' || ex.type === 'listen' } : ctrl.check());
    if (skipped === true && ex.type === 'fill') r.sol = ex.full;
    if (skipped === true && ex.type === 'pick') { r.sol = ex.options[ex.answer].v; r.solV = true; }
    if (ctrl && ctrl.mark) ctrl.mark(r.ok);
    State.s.stats.total++;
    if (r.ok) {
      Sound.correct();
      S.combo++; S.maxCombo = Math.max(S.maxCombo, S.combo);
      State.s.stats.correct++; State.s.stats.bestCombo = Math.max(State.s.stats.bestCombo, S.combo);
      Quests.bump('correct'); Quests.bump('combo', S.combo);
      if (ctrl && ctrl.listen) { State.s.stats.listen++; Quests.bump('listen'); }
      if (ctrl && ctrl.typed) { State.s.stats.typed++; Quests.bump('typed'); }
      if (ex.key === 'conj') State.s.stats.conj++;
      if (!ex.retry) S.firstTry++;
      if (ex.wid != null) State.touchWord(ex.wid, 0);
      if (S.kind === 'mistakes' || ex.badge === 'mistake') State.removeMistake(ex.key);
      if (ex.type === 'pairs') { advance(); State.save(); return; }
      const titles = [t('great'), t('good'), t('nice')];
      let html = '';
      if (r.typo) html += `<div class="note">${t('typoNote')}</div><div class="sol ${r.solV ? 'v' : ''}">${esc(r.sol)}</div>`;
      else if (r.accent) html += `<div class="note">${t('accentNote')} <span class="v">${esc(r.sol)}</span></div>`;
      else if (r.alt) html += `<div class="note">${t('correctSol')}</div><div class="sol ${r.solV ? 'v' : ''}">${esc(r.alt)}</div>`;
      if (r.meaning) html += `<div class="note">${t('meaning')} ${esc(r.meaning)}</div>`;
      foot('ok', { title: titles[Math.floor(Math.random() * titles.length)], html });
    } else {
      Sound.wrong();
      S.combo = 0; S.wrong++;
      State.addMistake(ex.key);
      if (ex.wid != null) State.touchWord(ex.wid, -1);
      if (S.kind === 'jump') S.jumpErr++;
      else if (!S.isPractice) State.loseHeart();
      renderHearts();
      if (!ex.retry && S.kind !== 'jump') { const copy = Object.assign({}, ex, { retry: true }); S.queue.push(copy); }
      const html = `<div class="note">${t('correctSol')}</div><div class="sol">${r.solV ? `<span class="v">${esc(r.sol)}</span>` : esc(r.sol)}</div>${r.meaning ? `<div class="note">${t('meaning')} ${esc(r.meaning)}</div>` : ''}`;
      foot('ko', { title: t('wrong'), html });
    }
    if (r.solV && r.sol && TTS.available() && !r.ok) setTimeout(() => TTS.speak(r.sol), 200);
    State.save();
  }

  function advance() {
    if (!S) return;
    if (S.kind === 'jump' && S.jumpErr >= 3) return finish(true);
    if (!S.isPractice && !State.s.zen && S.kind !== 'jump' && State.s.hearts <= 0) return outOfHearts();
    S.i++; next();
  }

  function outOfHearts() {
    const m = modal(`<div class="center"><div style="width:140px;margin:0 auto">${mascotSVG({ mood: 'sad' })}</div><h2>${t('outOfHearts')}</h2><p style="color:var(--ink-soft);font-weight:700">${t('outOfHeartsMsg')}</p></div>
      <div class="actions" style="flex-direction:column"><button class="btn gold wide" data-a="refill">${t('refillCost', { c: 350 })}</button><button class="linkbtn" data-a="quit">${t('noThanks')}</button></div>`, { noClose: true });
    $('[data-a=refill]', m.el).onclick = () => {
      if (State.s.gems < 350) { toast('🪙', t('notEnough')); return; }
      State.s.gems -= 350; State.s.hearts = State.MAX_HEARTS; State.save(); Sound.heart(); m.close(); renderHearts(); S.i++; next();
    };
    $('[data-a=quit]', m.el).onclick = () => { m.close(); close(); };
  }

  // ---------- fin de session ----------
  function finish(failedJump) {
    const secs = Math.round((Date.now() - S.t0) / 1000);
    State.s.stats.time += secs;
    const acc = Math.round(100 * S.firstTry / Math.max(1, S.initial));
    const perfect = S.wrong === 0;
    let xp = 0, title = t('lessonDone'), extra = '';
    const k = S.kind;
    if (k === 'jump') {
      if (failedJump) {
        showDone({ title: t('jumpFailed'), sub: t('jumpFailedMsg'), xp: 0, acc, secs, mood: 'sad' });
        return;
      }
      for (let u = 0; u < S.arg.ui; u++) { const U = COURSE[u]; U.lessons.forEach((l, li) => { State.s.done[`${U.id}-${li}`] = State.s.done[`${U.id}-${li}`] || 1; Ex.lessonWords(l).forEach(w => State.touchWord(w.id, 1)); }); State.s.done[U.id + '-review'] = State.s.done[U.id + '-review'] || 1; State.s.done[U.id + '-chest'] = State.s.done[U.id + '-chest'] || 1; }
      xp = 20; title = t('jumpPassed');
    } else if (k === 'lesson') {
      const U = COURSE[S.arg.ui]; const key = `${U.id}-${S.arg.li}`;
      const first = !State.s.done[key];
      xp = first ? 10 : 5; if (perfect) xp += 5; xp += Math.floor(S.maxCombo / 5);
      State.s.done[key] = (State.s.done[key] || 0) + 1;
      Ex.lessonWords(U.lessons[S.arg.li]).forEach(w => State.touchWord(w.id, 1));
      State.s.stats.lessons++; Quests.bump('lessons');
      if (perfect) { State.s.stats.perfect++; Quests.bump('perfect'); State.s.gems += 5; extra = t('perfect'); }
    } else if (k === 'review') {
      const U = COURSE[S.arg.ui]; State.s.done[U.id + '-review'] = (State.s.done[U.id + '-review'] || 0) + 1;
      xp = 20 + (perfect ? 5 : 0); title = t('reviewDone'); State.s.gems += 20;
      U.lessons.forEach(l => Ex.lessonWords(l).forEach(w => State.touchWord(w.id, 1)));
      State.s.stats.lessons++; Quests.bump('lessons'); if (perfect) { State.s.stats.perfect++; Quests.bump('perfect'); }
    } else {
      xp = 10; title = t('practiceDone'); State.gainHeart(1);
    }
    State.addXp(xp);
    Ach.check(); State.save();
    showDone({ title, sub: extra, xp, acc, secs, mood: 'happy' });
  }

  function showDone({ title, sub, xp, acc, secs, mood }) {
    $$('#lesson .combo').forEach(x => x.remove());
    setProgress(); $('#lesson .l-prog i').style.width = '100%';
    const body = $('#lesson .l-body');
    const mm = Math.floor(secs / 60), ss = String(secs % 60).padStart(2, '0');
    body.innerHTML = `<div class="done-screen"><div style="width:220px">${mascotSVG({ mood, anim: mood === 'happy' ? 'jump' : '' })}</div><h2>${esc(title)}</h2><p>${esc(sub || '')}</p>
      <div class="done-stats">
        <div class="dstat" style="--c:var(--gold)"><div class="dl">${t('totalXp')}</div><div class="dv">⚡ ${xp}</div></div>
        <div class="dstat" style="--c:var(--green)"><div class="dl">${t('accuracy')}</div><div class="dv">🎯 ${acc}%</div></div>
        <div class="dstat" style="--c:var(--blue)"><div class="dl">${t('time')}</div><div class="dv">⏱️ ${mm}:${ss}</div></div>
      </div></div>`;
    $('#lesson .l-top').style.visibility = 'hidden';
    if (mood === 'happy') { Sound.complete(); confetti(); }
    phase = 'done';
    foot('done', { onContinue: close });
  }

  // ---------- Défi éclair ----------
  Lesson.speed = function () {
    let words = Ex.learnedWords().filter(w => Morph.shortGloss(w, lang()));
    if (words.length < 8) words = Ex.lessonsFlat.slice(0, 6).flatMap(x => Ex.lessonWords(x.l));
    words = words.filter((w, i, a) => a.findIndex(x => x.v.toLowerCase() === w.v.toLowerCase() || Morph.shortGloss(x, lang()) === Morph.shortGloss(w, lang())) === i);
    const el = document.createElement('div'); el.id = 'lesson';
    el.innerHTML = `<div class="l-top"><button class="l-close">✕</button><div class="bar l-prog violet"><i style="width:100%;transition:width 1s linear"></i></div><div class="l-hearts zen">⚡ <span class="sc">0</span></div></div><div class="l-body"><div class="ex"><h2>${t('speedTitle')}</h2><div class="pairs"><div class="col cl"></div><div class="col cr"></div></div></div></div><div class="l-foot"><div class="inner"><div class="fb"></div></div></div>`;
    document.body.appendChild(el);
    let score = 0, left = 60, selV = null, selL = null, over = false;
    const cl = $('.cl', el), cr = $('.cr', el);
    const live = new Set();
    function addPair() {
      const avail = words.filter(w => !live.has(w.id)); if (!avail.length) return;
      const w = avail[Math.floor(Math.random() * avail.length)]; live.add(w.id);
      const a = document.createElement('button'); a.className = 'opt v-opt'; a.dataset.id = w.id; a.innerHTML = `<span style="flex:1">${esc(w.v)}</span>`;
      const b = document.createElement('button'); b.className = 'opt'; b.dataset.id = w.id; b.innerHTML = `<span style="flex:1">${esc(Morph.shortGloss(w, lang()))}</span>`;
      const insert = (col, node) => { const kids = col.children; const pos = Math.floor(Math.random() * (kids.length + 1)); col.insertBefore(node, kids[pos] || null); };
      insert(cl, a); insert(cr, b);
      a.onclick = () => { if (selV) selV.classList.remove('sel'); selV = a; a.classList.add('sel'); tryM(); };
      b.onclick = () => { if (selL) selL.classList.remove('sel'); selL = b; b.classList.add('sel'); tryM(); };
    }
    function tryM() {
      if (!selV || !selL || over) return;
      const a = selV, b = selL; selV = selL = null;
      if (a.dataset.id === b.dataset.id) {
        Sound.pair(); score++; $('.sc', el).textContent = score; live.delete(+a.dataset.id);
        [a, b].forEach(x => { x.classList.add('flash'); setTimeout(() => x.remove(), 250); }); setTimeout(addPair, 260);
      } else { Sound.wrong(); [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 400); }); }
    }
    for (let i = 0; i < 5; i++) addPair();
    const bar = $('.l-prog i', el);
    const timer = setInterval(() => { left--; bar.style.width = (100 * left / 60) + '%'; if (left <= 0) end(); }, 1000);
    function end() {
      if (over) return; over = true; clearInterval(timer);
      const best = Math.max(State.s.stats.speedBest, score); const rec = score > State.s.stats.speedBest && score > 0;
      State.s.stats.speedBest = best;
      const xp = Math.min(20, 5 + Math.floor(score / 2)); State.addXp(xp); Ach.check(); State.save();
      $('.l-body', el).innerHTML = `<div class="done-screen"><div style="width:200px">${mascotSVG({ mood: 'happy', anim: 'jump' })}</div><h2>${t('speedScore', { n: score })}</h2><p>${rec ? '🏆 ' : ''}${t('speedBest', { n: best })}</p><div class="done-stats"><div class="dstat" style="--c:var(--gold)"><div class="dl">${t('totalXp')}</div><div class="dv">⚡ ${xp}</div></div></div></div>`;
      Sound.complete(); if (rec) confetti();
      $('.l-foot .inner', el).innerHTML = `<div class="fb"></div><button class="btn green main">${t('continue')}</button>`;
      $('.l-foot .btn', el).onclick = () => { el.remove(); renderSide(); go('practice'); };
    }
    $('.l-close', el).onclick = () => { clearInterval(timer); over = true; el.remove(); renderSide(); };
  };
})();
