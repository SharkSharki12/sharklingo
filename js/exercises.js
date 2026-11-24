/* Génération des exercices */
(function () {
  const EMOJI = {
    dar: '👨', sarna: '👩', ven: '🧑‍🤝‍🧑', vena: '👭', aeron: '🤴', aerona: '👸', varkan: '💂', drekar: '⚔️', helar: '🧑‍⚕️', mazen: '🧑‍🌾', tesar: '🧑‍🏫', lerar: '🧑‍🎓',
    farel: '👨', sarel: '👩', brael: '👦', sirel: '👧', narel: '🧒', filen: '👦', filena: '👧', bebel: '👶', grandar: '👴', grandas: '👵', famila: '👨‍👩‍👧',
    vazir: '🐉', vazel: '🐍', kanen: '🐕', milen: '🐈', ferel: '🐎', korel: '🐦', lupen: '🐺', orsel: '🐻', hiren: '🐟', lionel: '🦁', tigrel: '🐅', vulpel: '🦊', servel: '🦌', lapel: '🐇', murel: '🐭', aigel: '🦅', falkel: '🦅', korvel: '🐦‍⬛', hibel: '🦉', abelel: '🐝', papel: '🦋', aranel: '🕷️', granel: '🐸', tortel: '🐢', kanenil: '🐶',
    aer: '🌌', sol: '☀️', luen: '🌙', stel: '⭐', sel: '💡', thalmor: '🌊', ondar: '⛰️', silen: '🏞️', fores: '🌲', aren: '🏜️', neval: '❄️', torel: '🌬️', helan: '🌧️', firen: '🔥', fogel: '🔥', nael: '💧', arbel: '🌳', florel: '🌸', herbel: '🌿', lakel: '🏞️', marel: '🌊', petrel: '🪨', nubel: '☁️', rokel: '🪨', islen: '🏝️', vulkel: '🌋', glasel: '🧊', tonel: '⛈️', eklarel: '⚡', arkolen: '🌈', mundel: '🌍',
    dom: '🏠', domil: '🛖', domthal: '🏰', varad: '🏙️', narad: '🏘️', kared: '🛤️', portel: '🚪', ferad: '🏪', selor: '⛩️', leror: '🏫', fenor: '🍽️', ospitel: '🏥',
    fenad: '🍲', biren: '🥤', panel: '🍞', mesel: '🥩', velon: '🍎', latel: '🥛', vinel: '🍷', pomel: '🍏', ovel: '🥚', fromel: '🧀', supel: '🥣', gatel: '🍰', kafel: '☕', verdel: '🥦', salel: '🧂', dulkel: '🍬',
    kanel: '🎵', tezan: '✉️', lison: '📖', orel: '🪙', iren: '🥈', kelan: '🗡️', firan: '🛡️', monel: '💰', plumel: '🪶',
    kranel: '🗣️', manor: '✋', pedel: '🦶', okel: '👁️', aurel: '👂', bosel: '👄', denar: '🦷', krinel: '💇', pulsara: '❤️', brazel: '💪', gamel: '🦵', ostel: '🦴',
    tabel: '🪑', litel: '🛏️', fenel: '🪟', kutel: '🔪', sakel: '👜', mirel: '🪞', orlen: '🕰️', kandel: '🕯️', klavel: '🔑', lampel: '💡', vestel: '👕', kamisel: '👔', pantel: '👖', botel: '👞', mantel: '🧥', karel: '🛒', batel: '⛵', bisiklel: '🚲',
    potel: '🧪', poisel: '☠️', fevel: '🤒', remedel: '💊', blesel: '🩹',
    varana: '🟥', zurena: '🟦', solana: '🟨', elyna: '🟩', morena: '⬛', selana: '⬜', heshena: '🩶', orenja: '🟧', rozena: '🩷', brunela: '🟫',
    felisa: '😊', tristra: '😢', lasa: '😴', gaudel: '😄', pavel: '😨', iral: '😠', elin: '💞', surel: '😲',
    haelin: '👋', hael: '✌️', gratel: '🙏', postel: '👋', notel: '🌙', sorel: '🍀', ganel: '🎉', sanel: '🥂',
    festel: '🎉', regel: '🎁', kastel: '🏰', palasiel: '🏯', torol: '🗼', trenel: '🚆', estal: '🚉', bankal: '🏦', musal: '🏛️', iglesiel: '⛪', pontel: '🌉', parkal: '🛝', hardinel: '🌷', panadar: '🧑‍🍳', medikal: '🧑‍⚕️', polisar: '👮', farmasiel: '💊', bibliel: '📚', kumpleanosel: '🎂', primaverel: '🌸', veranel: '🏖️', otonel: '🍂', invernel: '⛄', tendal: '🏬', kalel: '🛣️', varadthal: '🌆', vakasionel: '🧳', panaderel: '🥖',
    musel: '🎶', tamel: '🥁', harpel: '🪕', dansel: '💃', martel: '🔨', roel: '🛞', jeuel: '🎲', shakel: '♟️', deel: '🎲',
  };
  const PICK_CATS = new Set(['n', 'adj', 'interj']);

  const rnd = (n) => Math.floor(Math.random() * n);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const uniqBy = (a, f) => { const s = new Set(); return a.filter(x => { const k = f(x); if (s.has(k)) return false; s.add(k); return true; }); };

  // ---------- index du cours ----------
  const C = window.COURSE;
  const lessonsFlat = [];
  C.forEach((u, ui) => u.lessons.forEach((l, li) => lessonsFlat.push({ u, ui, l, li, key: `${u.id}-${li}` })));
  function sentObj(u, li, si) {
    const s = C.find(x => x.id === u.id).lessons[li].s[si];
    return { v: Morph.alts(s[0]), fr: Morph.alts(s[1]), es: Morph.alts(s[2]), key: `${u.id}.${li}.${si}` };
  }
  function sentByKey(key) {
    const [uid, li, si] = key.split('.');
    const u = C.find(x => x.id === uid); if (!u || !u.lessons[+li] || !u.lessons[+li].s[+si]) return null;
    return sentObj(u, +li, +si);
  }
  function lessonWords(l) { return l.words.map(Morph.ref).filter(Boolean); }
  function wordsUpTo(ui, li) {
    const out = [];
    for (const x of lessonsFlat) { if (x.ui > ui || (x.ui === ui && x.li > li)) break; out.push(...lessonWords(x.l)); }
    return uniqBy(out, e => e.id);
  }
  function sentencesUpTo(ui, li) {
    const out = [];
    for (const x of lessonsFlat) { if (x.ui > ui || (x.ui === ui && x.li > li)) break; x.l.s.forEach((_, si) => out.push(sentObj(x.u, x.li, si))); }
    return out;
  }
  function allSentences() { return sentencesUpTo(C.length, 99); }

  const lang = () => State.s.lang || 'fr';
  const l1 = (s) => s[lang()];
  const isSingle = (s) => Morph.tokensV(s.v[0]).length <= 1;

  // ---------- générateurs ----------
  function glossOK(e) { return Morph.shortGloss(e, lang()).length > 0; }

  function exPick(w, pool, isNew) {
    const others = uniqBy(pool.filter(e => e.id !== w.id && EMOJI[e.v.toLowerCase()] && EMOJI[e.v.toLowerCase()] !== EMOJI[w.v.toLowerCase()] && Morph.shortGloss(e, lang()) !== Morph.shortGloss(w, lang())), e => EMOJI[e.v.toLowerCase()]);
    if (others.length < 2) return exMeaning(w, pool, isNew);
    const opts = shuffle([w, ...sample(others, 2)]);
    return { type: 'pick', key: 'w:' + w.id, wid: w.id, badge: isNew ? 'new' : null, word: w, options: opts.map(e => ({ v: e.v, emo: EMOJI[e.v.toLowerCase()] })), answer: opts.indexOf(w) };
  }
  function distractWords(w, pool, n) {
    let cands = pool.filter(e => e.id !== w.id && e.v.toLowerCase() !== w.v.toLowerCase() && Morph.shortGloss(e, lang()) !== Morph.shortGloss(w, lang()));
    const same = cands.filter(e => e.cat === w.cat);
    let picked = sample(same, n);
    if (picked.length < n) {
      const more = window.LEXICON.filter(e => !e.sense && e.cat === w.cat && e.id !== w.id && !picked.includes(e) && Morph.shortGloss(e, lang()) !== Morph.shortGloss(w, lang()) && e.v.length < 14);
      picked = picked.concat(sample(more, n - picked.length));
    }
    return uniqBy(picked, e => Morph.shortGloss(e, lang()));
  }
  function exMeaning(w, pool, isNew) {
    const d = distractWords(w, pool, 3);
    const opts = shuffle([w, ...d]);
    return { type: 'mcq', key: 'w:' + w.id, wid: w.id, badge: isNew ? 'new' : null, title: t('exMeaning', { w: '<span class="v">' + esc(w.v) + '</span>' }), speak: w.v, options: opts.map(e => Morph.shortGloss(e, lang())), optV: false, answer: opts.indexOf(w), word: w };
  }
  function exHowSay(w, pool) {
    const d = distractWords(w, pool, 3);
    const opts = shuffle([w, ...d]);
    return { type: 'mcq', key: 'w:' + w.id, wid: w.id, title: t('exHowSay', { w: esc(Morph.shortGloss(w, lang())) }), options: opts.map(e => e.v), optV: true, answer: opts.indexOf(w), word: w };
  }
  function exTypeWord(w) {
    return { type: 'type', key: 'w:' + w.id, wid: w.id, from: 'l1', target: 'v', title: t('exHowSay', { w: esc(Morph.shortGloss(w, lang())) }), prompt: null, accepted: [w.v] };
  }
  function exPairs(words, pool) {
    let ws = uniqBy(words, e => e.v.toLowerCase());
    ws = uniqBy(ws, e => Morph.shortGloss(e, lang()));
    if (ws.length < 5) {
      const extra = pool.filter(e => !ws.includes(e));
      for (const e of shuffle(extra)) { if (ws.length >= 5) break; if (!ws.some(x => x.v.toLowerCase() === e.v.toLowerCase() || Morph.shortGloss(x, lang()) === Morph.shortGloss(e, lang()))) ws.push(e); }
    }
    ws = ws.slice(0, 5);
    if (ws.length < 3) return null;
    return { type: 'pairs', key: 'pairs', title: t('exPairs'), pairs: ws.map(e => ({ id: e.id, v: e.v, l1: Morph.shortGloss(e, lang()) })) };
  }

  function bankFrom(answerToks, otherToks, n) {
    const lowAns = new Set(answerToks.map(x => x.toLowerCase()));
    const d = uniqBy(otherToks.filter(x => !lowAns.has(x.toLowerCase())), x => x.toLowerCase());
    return shuffle([...answerToks, ...sample(d, n)]);
  }
  function exTiles(s, dir, pool) {
    const others = pool.filter(x => x.key !== s.key);
    if (dir === 'v2l') {
      const ans = Morph.tokensL(l1(s)[0]);
      const oth = others.flatMap(x => Morph.tokensL(l1(x)[0]));
      return { type: 'tiles', key: 's:' + s.key + ':v2l', skey: s.key, from: 'v', target: 'l1', title: t('exTranslate'), prompt: s.v[0], speak: s.v[0], accepted: l1(s), bank: bankFrom(ans, oth, Math.min(4, Math.max(2, 8 - ans.length))) };
    }
    const ans = Morph.tokensV(s.v[0]);
    const oth = others.flatMap(x => Morph.tokensV(x.v[0]));
    return { type: 'tiles', key: 's:' + s.key + ':l2v', skey: s.key, from: 'l1', target: 'v', title: t('exTranslate'), prompt: l1(s)[0], accepted: s.v, bank: bankFrom(ans, oth, Math.min(4, Math.max(2, 8 - ans.length))), vrefs: s.v[0] };
  }
  function exType(s, dir) {
    if (dir === 'l2v') return { type: 'type', key: 's:' + s.key + ':l2v', skey: s.key, from: 'l1', target: 'v', title: t('exWrite'), prompt: l1(s)[0], accepted: s.v, vrefs: s.v[0] };
    return { type: 'type', key: 's:' + s.key + ':v2l', skey: s.key, from: 'v', target: 'l1', title: t('exWriteL1').replace('français', lang() === 'es' ? 'español' : 'français'), prompt: s.v[0], speak: s.v[0], accepted: l1(s) };
  }
  function exListen(s, pool, typed) {
    const ans = Morph.tokensV(s.v[0]);
    if (typed) return { type: 'listen', key: 's:' + s.key + ':lis', skey: s.key, mode: 'type', title: t('exListen'), audio: s.v[0], accepted: s.v, tr: l1(s)[0] };
    const oth = pool.filter(x => x.key !== s.key).flatMap(x => Morph.tokensV(x.v[0]));
    return { type: 'listen', key: 's:' + s.key + ':lis', skey: s.key, mode: 'tiles', title: t('exTapListen'), audio: s.v[0], accepted: s.v, bank: bankFrom(ans, oth, 3), tr: l1(s)[0] };
  }

  const PART_GROUPS = [
    ['ra', 'va', 'ei'], ['ul', 'va', 'ra'], ['el', 'sa', 'ra'], ['ae', 'ul', 'e'],
    ['e', 'ma', 'o'], ['sha', 'ei', 'ren', 'tama'], ['ke', 'to', 'pol'], ['sota', 'pol', 'sha'],
    ['na', 'ta', 'se', 'sa', 'nar', 'tar', 'ser'], ['nam', 'tam', 'sem', 'sam'],
    ['nair', 'tair', 'seir', 'sair', 'narir', 'tarir', 'serir'], ['kae', 'sor', 'thal'],
    ['ka', 'ma', 'tor', 'ren', 'sha', 'vel', 'dai'],
  ];
  const CASE_SUF = ['', 'm', 'ir', 'an', 'en', 'or', 'ek'];
  function exFill(s) {
    const toks = Morph.tokensV(s.v[0]);
    if (toks.length < 2) return null;
    const cands = [];
    toks.forEach((tk, i) => {
      const low = tk.toLowerCase();
      // particules
      const PRONS = ['na', 'ta', 'se', 'sa', 'nar', 'tar', 'ser'];
      let groups = PART_GROUPS;
      if (low === 'sa') groups = (i > 0 && PRONS.includes(toks[i - 1].toLowerCase())) ? [['el', 'sa', 'ra']] : [PRONS];
      else if (low === 'va' && i === 0) groups = [['va', 'ul']];
      else if (low === 'ma' && i === 0) groups = [['ka', 'ma', 'tor', 'ren', 'sha', 'dai']];
      else if (['seir', 'sair', 'serir', 'tarir'].includes(low)) groups = [[low, 'nair', 'tair', 'narir']];
      else if (['sem', 'sam'].includes(low)) groups = [[low, 'nam', 'tam']];
      for (const g of groups) {
        if (g.includes(low)) {
          // évite d'offrir une option ambiguë (ex. « sa » pronom vs particule)
          const opts = sample(g.filter(x => x !== low), Math.min(3, g.length - 1));
          cands.push({ i, ans: tk, opts: [low, ...opts], w: g.length > 6 ? 1 : 3 });
          return;
        }
      }
      const a = Morph.analyze(tk);
      if (a && a.sufs.length && a.entries.some(e => e.cat === 'n')) {
        const last = a.sufs[a.sufs.length - 1].s;
        if (['m', 'ir', 'an', 'or', 'ek'].includes(last)) {
          const stem = low.slice(0, -last.length);
          const opts = sample(CASE_SUF.filter(x => x !== last), 3).map(x => stem + x);
          cands.push({ i, ans: tk, opts: [low, ...opts], w: 4 });
        }
      }
      if (a && !a.sufs.length && a.entries.some(e => e.cat === 'v') && i > 0 && ['kae', 'sor', 'thal'].includes(toks[i - 1].toLowerCase()) === false) {
        // rien
      }
      if (a && a.sufs.length === 1 && a.sufs[0].s === 'a' && a.entries.some(e => e.cat === 'v') && i > 0 && ['kae', 'sor', 'thal'].includes(toks[i - 1].toLowerCase())) {
        const root = a.base;
        cands.push({ i, ans: tk, opts: [low, root, root + 'ar', root + 'en'], w: 4 });
      }
    });
    if (!cands.length) return null;
    // tirage pondéré
    const total = cands.reduce((x, c) => x + c.w, 0);
    let r = Math.random() * total, c = cands[0];
    for (const x of cands) { r -= x.w; if (r <= 0) { c = x; break; } }
    const opts = shuffle(uniqBy(c.opts, x => x.toLowerCase()));
    return { type: 'fill', key: 's:' + s.key + ':fill', skey: s.key, title: t('exFill'), before: toks.slice(0, c.i), after: toks.slice(c.i + 1), options: opts, answer: opts.findIndex(o => o.toLowerCase() === c.ans.toLowerCase()), full: s.v[0], tr: l1(s)[0], punct: (s.v[0].match(/[.!?]\s*$/) || [''])[0].trim() };
  }

  // ---------- sessions ----------
  function sentenceExercise(s, kind, pool) {
    const voice = TTS.available();
    if (isSingle(s)) {
      if (kind === 'typeL2V' || kind === 'tilesL2V' || kind === 'fill') return exType(s, 'l2v');
      if (kind === 'listen' && voice) return exListen(s, pool, true);
      return exTiles(s, 'v2l', pool);
    }
    switch (kind) {
      case 'tilesV2L': return exTiles(s, 'v2l', pool);
      case 'tilesL2V': return exTiles(s, 'l2v', pool);
      case 'listen': return voice ? exListen(s, pool, Math.random() < .3) : exTiles(s, 'l2v', pool);
      case 'fill': return exFill(s) || exTiles(s, 'l2v', pool);
      case 'typeL2V': return exType(s, 'l2v');
      case 'typeV2L': return exType(s, 'v2l');
    }
    return exTiles(s, 'v2l', pool);
  }

  function buildLesson(ui, li) {
    const u = C[ui], l = u.lessons[li];
    const W = lessonWords(l);
    const pool = wordsUpTo(ui, li);
    const sents = l.s.map((_, si) => sentObj(u, li, si));
    const sentPool = sentencesUpTo(ui, li).slice(-40).concat(sents);
    const firstTime = !State.s.done[`${u.id}-${li}`];
    const easy = ui === 0 && li < 2;
    const ex = [];
    const intro = W.filter(w => !State.knowsWord(w.id)).slice(0, 3);
    const introSet = intro.length ? intro : (firstTime ? W.slice(0, 2) : sample(W, 2));
    for (const w of introSet) {
      ex.push(PICK_CATS.has(w.cat) && EMOJI[w.v.toLowerCase()] ? exPick(w, pool, firstTime) : exMeaning(w, pool, firstTime));
    }
    const pattern = easy
      ? ['tilesV2L', 'tilesL2V', 'tilesV2L', 'listen', 'tilesL2V', 'tilesV2L', 'fill']
      : ['tilesV2L', 'tilesL2V', 'fill', 'listen', 'typeL2V', 'tilesV2L', 'typeV2L', 'tilesL2V'];
    const order = shuffle(sents);
    const body = [];
    order.forEach((s, i) => { const e = sentenceExercise(s, pattern[i % pattern.length], sentPool); if (e) body.push(e); });
    const pairs = exPairs(W, pool);
    if (pairs) body.splice(Math.min(2, body.length), 0, pairs);
    const rest = W.filter(w => !introSet.includes(w));
    for (const w of sample(rest, 2)) body.push(Math.random() < .5 || easy ? exHowSay(w, pool) : exTypeWord(w));
    // révision d'un élément d'une leçon précédente
    const prevS = sentencesUpTo(ui, li - 1);
    if (prevS.length && !easy) body.push(sentenceExercise(prevS[rnd(prevS.length)], Math.random() < .5 ? 'tilesL2V' : 'tilesV2L', sentPool));
    return ex.concat(body).slice(0, 15);
  }

  function buildUnitReview(ui, count = 14) {
    const u = C[ui];
    const sents = []; u.lessons.forEach((l, li) => l.s.forEach((_, si) => sents.push(sentObj(u, li, si))));
    const pool = wordsUpTo(ui, u.lessons.length - 1);
    const W = uniqBy(u.lessons.flatMap(lessonWords), e => e.id);
    const kinds = ['typeL2V', 'tilesV2L', 'fill', 'listen', 'tilesL2V', 'typeV2L', 'typeL2V', 'fill'];
    const ex = sample(sents, count - 2).map((s, i) => sentenceExercise(s, kinds[i % kinds.length], sents));
    const p = exPairs(sample(W, 5), pool); if (p) ex.splice(3, 0, p);
    const w = sample(W, 1)[0]; if (w) ex.push(exTypeWord(w));
    return ex.filter(Boolean);
  }

  // ---------- entraînement ----------
  function rebuildMistake(m) {
    if (m.startsWith('w:')) {
      const w = window.LEXICON[+m.slice(2)]; if (!w) return null;
      return Math.random() < .5 ? exHowSay(w, window.LEXICON.filter(e => e.cat === w.cat).slice(0, 80)) : exTypeWord(w);
    }
    if (m.startsWith('s:')) {
      const [, key, dir] = m.split(':');
      const s = sentByKey(key); if (!s) return null;
      const pool = allSentences().filter(x => x.key.split('.')[0] === key.split('.')[0]);
      if (dir === 'v2l') return Math.random() < .5 ? exTiles(s, 'v2l', pool) : exType(s, 'v2l');
      if (dir === 'lis') return TTS.available() ? exListen(s, pool, false) : exTiles(s, 'l2v', pool);
      if (dir === 'fill') return exFill(s) || exTiles(s, 'l2v', pool);
      return Math.random() < .5 ? exTiles(s, 'l2v', pool) : exType(s, 'l2v');
    }
    return null;
  }
  function buildMistakes() {
    const list = State.s.mistakes.slice(-30);
    return shuffle(list).slice(0, 12).map(rebuildMistake).filter(Boolean).map(e => (e.badge = 'mistake', e));
  }
  function learnedWords() {
    return Object.keys(State.s.words).map(id => window.LEXICON[+id]).filter(Boolean);
  }
  function buildWords() {
    const lw = learnedWords();
    if (lw.length < 4) return [];
    const weak = lw.slice().sort((a, b) => State.wordStrength(a.id) - State.wordStrength(b.id)).slice(0, 10);
    const ex = [];
    const p = exPairs(weak.slice(0, 5), lw); if (p) ex.push(p);
    weak.forEach((w, i) => ex.push(i % 3 === 0 ? exTypeWord(w) : (i % 3 === 1 ? exHowSay(w, lw) : exMeaning(w, lw))));
    const p2 = exPairs(weak.slice(5, 10), lw); if (p2) ex.push(p2);
    return ex;
  }
  function knownVerbs() {
    const lw = learnedWords().filter(e => e.cat === 'v' && !/\s/.test(e.v) && e.v !== 'es');
    if (lw.length >= 4) return lw;
    return window.LEXICON.filter(e => e.cat === 'v' && e.src === 'livre' && e.v !== 'es').slice(0, 20);
  }
  function exConj() {
    const vs = knownVerbs(); const v = vs[rnd(vs.length)];
    const p = Morph.PRON[rnd(7)];
    const tenses = [['tPresent', ''], ['tPast', 'ra '], ['tFuture', 'va '], ['tCond', 'ei '], ['tNeg', 'ul '], ['tProg', 'el '], ['tHab', 'sa ']];
    const [tk, part] = tenses[rnd(tenses.length)];
    const ans = `${p} ${part}${v.v}`;
    return { type: 'type', key: 'conj', from: 'l1', target: 'v', title: t('exConj'), html: `<div class="fill-sentence"><span class="v">${esc(v.v)}</span> <span style="color:var(--ink-soft);font-size:18px">(${esc(Morph.shortGloss(v, lang()))})</span></div><div class="fill-tr">${esc(Morph.PRON_L[lang()][p])} · <b>${t(tk)}</b></div>`, accepted: [ans], tr: `${Morph.PRON_L[lang()][p]} — ${t(tk)}` };
  }
  function exDecl() {
    let ns = learnedWords().filter(e => e.cat === 'n' && !/[\s-]/.test(e.v) && /^[a-zë]+$/.test(e.v));
    if (ns.length < 4) ns = window.LEXICON.filter(e => e.cat === 'n' && e.src === 'livre' && /^[a-zë]+$/.test(e.v)).slice(0, 40);
    const n = ns[rnd(ns.length)];
    const c = Morph.CASES[rnd(7)];
    const num = Morph.NUMBERS[rnd(10) < 6 ? 0 : (rnd(2) ? 1 : 2)];
    const ans = n.v + num.s + c.s;
    const cl = lang() === 'es' ? c.es : c.fr;
    const nl = t(num.k === 'sg' ? 'nSg' : num.k === 'du' ? 'nDu' : 'nPl');
    return { type: 'type', key: 'decl', from: 'l1', target: 'v', title: t('exDecl'), html: `<div class="fill-sentence"><span class="v">${esc(n.v)}</span> <span style="color:var(--ink-soft);font-size:18px">(${esc(Morph.shortGloss(n, lang()))})</span></div><div class="fill-tr"><b>${esc(cl)}</b> (${esc(lang() === 'es' ? c.ges : c.gfr)}) · <b>${esc(nl)}</b></div>`, accepted: [ans] };
  }
  function doneSentences() {
    const out = [];
    for (const x of lessonsFlat) if (State.s.done[x.key]) x.l.s.forEach((_, si) => out.push(sentObj(x.u, x.li, si)));
    return out;
  }
  function buildListen() {
    let ss = doneSentences(); if (ss.length < 4) ss = sentencesUpTo(0, 3);
    return sample(ss.filter(s => !isSingle(s)), 8).map((s, i) => exListen(s, ss, i % 3 === 2));
  }
  function buildSmart() {
    const ex = [];
    ex.push(...buildMistakes().slice(0, 4));
    const w = buildWords(); ex.push(...sample(w, 4));
    const ss = doneSentences();
    const kinds = ['typeL2V', 'tilesV2L', 'fill', 'listen', 'tilesL2V'];
    sample(ss, 6).forEach((s, i) => ex.push(sentenceExercise(s, kinds[i % kinds.length], ss)));
    if (!ex.length) return buildLesson(0, 0);
    return shuffle(ex).slice(0, 14);
  }
  function buildTezin(n = 10) {
    let ws = learnedWords().filter(e => !e.sense && /^[a-zë]+$/i.test(e.v) && e.v.length >= 3);
    if (ws.length < 8) ws = window.LEXICON.filter(e => e.src === 'livre' && !e.sense && /^[a-zë]+$/.test(e.v) && e.v.length >= 3).slice(0, 120);
    ws = uniqBy(ws, e => e.v.toLowerCase());
    return sample(ws, n).map((w, i) => {
      if (i % 3 === 2) return { type: 'type', key: 'tezin', from: 'l1', target: 'v', title: t('exTezinType'), html: `<div class="tezin-demo tz" style="font-size:54px;text-align:center;margin:10px 0 18px">${esc(w.v)}</div>`, accepted: [w.v] };
      const d = sample(ws.filter(x => x.v !== w.v && x.v[0] === w.v[0]).concat(sample(ws.filter(x => x.v !== w.v), 6)), 3);
      const opts = shuffle([w, ...uniqBy(d, e => e.v)].slice(0, 4));
      return { type: 'mcq', key: 'tezin', title: t('exTezin'), pre: `<div class="tezin-demo tz" style="font-size:54px;text-align:center;margin:10px 0 18px">${esc(w.v)}</div>`, options: opts.map(e => `${e.v} — ${Morph.shortGloss(e, lang())}`), optV: false, answer: opts.indexOf(w) };
    });
  }
  function buildConj(n = 10) { return Array.from({ length: n }, exConj); }
  function buildDecl(n = 10) { return Array.from({ length: n }, exDecl); }

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]); }

  window.Ex = { EMOJI, buildLesson, buildUnitReview, buildMistakes, buildWords, buildListen, buildSmart, buildConj, buildDecl, buildTezin, rebuildMistake, lessonsFlat, lessonWords, sentByKey, allSentences, doneSentences, learnedWords, shuffle, sample, esc, exPairs };
})();
