/* Sharklingo — moteur morphologique et outils de comparaison */
(function (root) {
  const LEX = root.LEXICON || [];
  const byV = new Map();
  for (const e of LEX) {
    const k = e.v.toLowerCase();
    if (!byV.has(k)) byV.set(k, []);
    byV.get(k).push(e);
  }

  const CAT_ALIAS = { 'n': ['n', 'nom propre'], 'v': ['v'], 'adj': ['adj'], 'adv': ['adv'], 'pron': ['pron', 'poss', 'dém'], 'interr': ['interr'], 'part': ['part'], 'num': ['num'], 'interj': ['interj', 'expr'], 'conj': ['conj', 'rel'], 'prép': ['prép'] };

  function ref(r) {
    // « mot » ou « mot:cat »
    const [w, cat] = r.split(':');
    const list = byV.get(w.toLowerCase()) || [];
    if (!list.length) return null;
    if (!cat) return list[0];
    const cats = CAT_ALIAS[cat] || [cat];
    return list.find(e => cats.includes(e.cat)) || list[0];
  }

  const PRON = ['na', 'ta', 'se', 'sa', 'nar', 'tar', 'ser'];
  const PRON_L = {
    fr: { na: 'je', ta: 'tu', se: 'il', sa: 'elle', nar: 'nous', tar: 'vous', ser: 'ils/elles' },
    es: { na: 'yo', ta: 'tú', se: 'él', sa: 'ella', nar: 'nosotros', tar: 'vosotros', ser: 'ellos/ellas' }
  };

  function infinitive(root) {
    if (root === 'es') return 'esa';
    if (root === 'kae') return 'kae';
    if (/a$/.test(root)) return root; // ela → ela (forme moderne)
    return root + 'a';
  }
  function activePart(root) { return root === 'ela' ? 'elaar' : root + 'ar'; }
  function resultPart(root) { if (root === 'drek') return 'drekken'; if (root === 'ela') return 'elaen'; return root + 'en'; }

  function conjugate(root) {
    const T = { present: '', past: 'ra ', future: 'va ', cond: 'ei ' };
    const table = {};
    for (const t in T) table[t] = PRON.map(p => `${p} ${T[t]}${root}`);
    return {
      table,
      inf: infinitive(root), act: activePart(root), res: resultPart(root),
      prog: `el ${root}`, hab: `sa ${root}`, neg: `ul ${root}`, imp: `${root} !`
    };
  }

  const CASES = [
    { k: 'nom', s: '', fr: 'Nominatif', es: 'Nominativo', gfr: 'sujet', ges: 'sujeto' },
    { k: 'acc', s: 'm', fr: 'Accusatif', es: 'Acusativo', gfr: 'objet direct', ges: 'objeto directo' },
    { k: 'gen', s: 'ir', fr: 'Génitif', es: 'Genitivo', gfr: 'de (possession)', ges: 'de (posesión)' },
    { k: 'dat', s: 'an', fr: 'Datif', es: 'Dativo', gfr: 'à (destinataire)', ges: 'a (destinatario)' },
    { k: 'loc', s: 'en', fr: 'Locatif', es: 'Locativo', gfr: 'dans, chez', ges: 'en, en casa de' },
    { k: 'abl', s: 'or', fr: 'Ablatif', es: 'Ablativo', gfr: 'depuis, de', ges: 'desde, de' },
    { k: 'ins', s: 'ek', fr: 'Instrumental', es: 'Instrumental', gfr: 'avec, par', ges: 'con, por' },
    { k: 'voc', s: 'a', fr: 'Vocatif', es: 'Vocativo', gfr: 'appel (ô …!)', ges: 'llamada (¡oh…!)' },
  ];
  const NUMBERS = [
    { k: 'sg', s: '', fr: 'Singulier', es: 'Singular' },
    { k: 'du', s: 'i', fr: 'Duel', es: 'Dual' },
    { k: 'pl', s: 'en', fr: 'Pluriel', es: 'Plural' },
  ];
  function decline(rootW) {
    const rows = CASES.map(c => ({ c, forms: NUMBERS.map(n => rootW + n.s + c.s) }));
    return { rows };
  }

  // ---------- analyse morphologique ----------
  const SUFFIXES = [
    { s: 'arë', t: 'sup' }, { s: 'thal', t: 'aug' }, { s: 'rly', t: 'adv' }, { s: 'eth', t: 'comp' },
    { s: 'im', t: 'ord' }, { s: 'ir', t: 'gen' }, { s: 'an', t: 'dat' }, { s: 'en', t: 'pl/loc' },
    { s: 'or', t: 'abl/lieu' }, { s: 'ek', t: 'ins' }, { s: 'ar', t: 'agent' }, { s: 'in', t: 'abs' },
    { s: 'il', t: 'dim' }, { s: 'ly', t: 'adv' }, { s: 'm', t: 'acc' }, { s: 'i', t: 'duel' }, { s: 'a', t: 'inf/voc' },
  ];
  const SUF_L = {
    fr: { sup: 'superlatif (le plus…)', aug: 'augmentatif (grand…)', adv: 'adverbe', comp: 'comparatif (plus…)', ord: 'ordinal (…ième)', gen: 'génitif : « de »', dat: 'datif : « à »', 'pl/loc': 'pluriel ou locatif', 'abl/lieu': 'ablatif « depuis » ou lieu', ins: 'instrumental : « avec »', agent: 'agent (celui qui…)', abs: 'abstraction', dim: 'diminutif (petit…)', acc: 'objet direct', duel: 'duel : deux', 'inf/voc': 'infinitif ou vocatif' },
    es: { sup: 'superlativo (el más…)', aug: 'aumentativo (gran…)', adv: 'adverbio', comp: 'comparativo (más…)', ord: 'ordinal', gen: 'genitivo: « de »', dat: 'dativo: « a »', 'pl/loc': 'plural o locativo', 'abl/lieu': 'ablativo « desde » o lugar', ins: 'instrumental: « con »', agent: 'agente (el que…)', abs: 'abstracción', dim: 'diminutivo', acc: 'objeto directo', duel: 'dual: dos', 'inf/voc': 'infinitivo o vocativo' }
  };

  const cache = new Map();
  function analyze(token) {
    let t = token.toLowerCase().replace(/[.,!?;:«»"“”()¿¡]/g, '').trim();
    if (!t) return null;
    if (cache.has(t)) return cache.get(t);
    let best = null;
    function rec(rest, sufs, depth) {
      const hit = byV.get(rest);
      if (hit) {
        const cand = { base: rest, entries: hit, sufs: sufs.slice() };
        if (!best || cand.sufs.length < best.sufs.length) best = cand;
        return;
      }
      if (depth >= 3 || rest.length < 2) return;
      for (const S of SUFFIXES) {
        if (rest.length > S.s.length + 1 && rest.endsWith(S.s)) {
          if (S.t === 'ord') { const b = byV.get(rest.slice(0, -2)); if (!b || !b.some(e => e.cat === 'num')) continue; }
          rec(rest.slice(0, -S.s.length), [S, ...sufs], depth + 1);
        }
      }
    }
    rec(t, [], 0);
    cache.set(t, best);
    return best;
  }

  // ---------- normalisation & comparaison ----------
  function stripAccents(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function normV(s) {
    return stripAccents(s.toLowerCase().replace(/æ/g, 'ae').replace(/[’`]/g, "'"))
      .replace(/[.,!?;:«»"“”()¿¡—–]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  const FR_DROP = new Set(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'l']);
  const ES_DROP = new Set(['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'del']);
  const ES_PRON = ['yo', 'tu', 'tú', 'el', 'él', 'ella', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'usted', 'ustedes'];

  function normL(s, lang, loose) {
    let x = s.toLowerCase().replace(/[’`]/g, "'").replace(/œ/g, 'oe');
    x = x.replace(/[.,!?;:«»"“”()¿¡—–]/g, ' ');
    if (lang === 'fr') {
      x = x.replace(/\b(j|t|m|s|n|c|d|qu)'/g, (m, a) => ({ j: 'je ', t: 'te ', m: 'me ', s: 'se ', n: 'ne ', c: 'ce ', d: 'de ', qu: 'que ' })[a]);
      x = x.replace(/\bl'/g, 'l ');
      x = x.replace(/-/g, ' ');
    }
    let toks = x.split(/\s+/).filter(Boolean);
    if (loose) {
      const drop = lang === 'fr' ? FR_DROP : ES_DROP;
      toks = toks.filter(w => !drop.has(w));
      if (lang === 'fr') {
        // « de l'eau » / « de la soupe » → partitif ignoré
        toks = toks.filter(w => w !== 'de');
      }
    }
    return stripAccents(toks.join(' '));
  }

  function lev(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }

  function tokTypo(A, B, minLen) {
    const a = A.split(' '), b = B.split(' ');
    if (a.length !== b.length) return false;
    let typos = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue;
      if (a[i].length >= minLen && b[i].length >= minLen && lev(a[i], b[i]) <= 1) { typos++; continue; }
      return false;
    }
    return typos > 0 && typos <= 2;
  }

  function alts(s) { return s.split('||').map(x => x.trim()).filter(Boolean); }

  function esVariants(a) {
    const out = [a];
    const t = a.replace(/^[¿¡]+/, '');
    const first = t.split(/\s+/)[0].toLowerCase();
    if (ES_PRON.includes(first)) {
      const rest = t.split(/\s+/).slice(1).join(' ');
      if (rest) out.push(rest);
    }
    return out;
  }

  /* Compare une réponse à la liste des réponses acceptées.
     Retourne { ok, typo, accent, best } */
  function check(answer, accepted, lang) {
    const list = [];
    for (const a of accepted) {
      if (lang === 'es') list.push(...esVariants(a)); else list.push(a);
    }
    if (lang === 'v') {
      const A = normV(answer);
      let bestD = 99, best = list[0];
      for (const a of list) {
        const d = lev(A, normV(a));
        if (d < bestD) { bestD = d; best = a; }
        if (d === 0) {
          const exactE = answer.toLowerCase().includes('ë') || !a.toLowerCase().includes('ë');
          return { ok: true, typo: false, accent: !exactE, best: a };
        }
      }
      for (const a of list) if (tokTypo(A, normV(a), 4)) return { ok: true, typo: true, best: a };
      return { ok: false, best };
    }
    const strictA = normL(answer, lang, false);
    const looseA = normL(answer, lang, true);
    let bestD = 99, best = list[0];
    for (const a of list) {
      if (normL(a, lang, false) === strictA) return { ok: true, best: a };
      const la = normL(a, lang, true);
      if (la === looseA) return { ok: true, best: a, article: true };
      const d = lev(looseA, la);
      if (d < bestD) { bestD = d; best = a; }
    }
    for (const a of list) if (tokTypo(looseA, normL(a, lang, true), 5)) return { ok: true, typo: true, best: a };
    return { ok: false, best };
  }

  function tokensV(s) {
    return s.replace(/[.,!?;:«»"“”()¿¡—]/g, ' ').split(/\s+/).filter(Boolean);
  }
  function tokensL(s) {
    return s.replace(/[.,!?;:«»"“”()—]/g, ' ').replace(/[¿¡]/g, '').split(/\s+/).filter(Boolean);
  }

  function gloss(e, lang) { return (lang === 'es' ? e.es : e.fr) || e.fr; }
  function shortGloss(e, lang) {
    let g = gloss(e, lang);
    g = g.replace(/\s*\(.*?\)\s*/g, ' ').trim();
    return g.split(/[,/]/)[0].trim();
  }

  // Lecture à voix haute : préparation phonétique (voix espagnole ou italienne)
  function speakable(s) {
    return s.replace(/ë/g, 'e').replace(/æ/g, 'e').replace(/Ë/g, 'E').replace(/Æ/g, 'E')
      .replace(/\bae\b/g, 'a-e').replace(/rly\b/g, 'rli').replace(/th/g, 't').replace(/sh/g, 'ch')
      .replace(/-/g, ' ');
  }

  root.Morph = { ref, byV, conjugate, decline, CASES, NUMBERS, PRON, PRON_L, infinitive, analyze, SUF_L, normV, normL, check, alts, tokensV, tokensL, gloss, shortGloss, lev, speakable };
})(typeof window !== 'undefined' ? window : globalThis);
