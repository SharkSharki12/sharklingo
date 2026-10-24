/* Sons synthétisés (aucun fichier audio) + synthèse vocale */
(function () {
  let ctx = null;
  function ac() { if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); return ctx; }
  function tone(freq, start, dur, type = 'sine', vol = 0.18) {
    const c = ac(); const o = c.createOscillator(); const g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime + start);
    g.gain.linearRampToValueAtTime(vol, c.currentTime + start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + start + dur);
    o.connect(g).connect(c.destination); o.start(c.currentTime + start); o.stop(c.currentTime + start + dur + 0.05);
  }
  const S = {
    on() { return !window.State || State.s.sound !== false; },
    correct() { if (!S.on()) return; tone(784, 0, .16, 'triangle'); tone(1175, .09, .28, 'triangle'); },
    wrong() { if (!S.on()) return; tone(220, 0, .22, 'square', .07); tone(165, .1, .3, 'square', .07); },
    click() { if (!S.on()) return; tone(520, 0, .06, 'triangle', .08); },
    pair() { if (!S.on()) return; tone(988, 0, .12, 'triangle', .12); },
    complete() { if (!S.on()) return; [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * .09, .35, 'triangle', .14)); },
    chest() { if (!S.on()) return; [392, 523, 659, 784, 988, 1175].forEach((f, i) => tone(f, i * .06, .3, 'sine', .14)); },
    heart() { if (!S.on()) return; tone(330, 0, .2, 'sine', .12); tone(262, .12, .3, 'sine', .12); },
  };
  window.Sound = S;

  // ---------- Synthèse vocale ----------
  const TTS = {
    voices: [],
    load() {
      if (!('speechSynthesis' in window)) return;
      TTS.voices = speechSynthesis.getVoices();
    },
    pick() {
      const pref = window.State && State.s.voiceName;
      const vs = TTS.voices;
      if (!vs.length) return null;
      if (pref) { const v = vs.find(v => v.name === pref); if (v) return v; }
      return vs.find(v => /^es/i.test(v.lang)) || vs.find(v => /^it/i.test(v.lang)) || vs.find(v => /^pt/i.test(v.lang)) || vs.find(v => /^fr/i.test(v.lang)) || vs[0];
    },
    available() { return 'speechSynthesis' in window && TTS.voices.length > 0 && (!window.State || State.s.voice !== false); },
    speak(text, slow) {
      if (!('speechSynthesis' in window)) return false;
      if (window.State && State.s.voice === false) return false;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(window.Morph ? Morph.speakable(text) : text);
      const v = TTS.pick(); if (v) { u.voice = v; u.lang = v.lang; }
      const base = (window.State && State.s.voiceRate) || 0.9;
      u.rate = slow ? base * 0.6 : base;
      speechSynthesis.speak(u);
      return true;
    },
    speakL1(text, lang) {
      if (!('speechSynthesis' in window) || (window.State && State.s.voice === false)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = TTS.voices.find(v => v.lang.toLowerCase().startsWith(lang));
      if (v) { u.voice = v; u.lang = v.lang; }
      speechSynthesis.speak(u);
    }
  };
  if ('speechSynthesis' in window) {
    TTS.load();
    speechSynthesis.onvoiceschanged = TTS.load;
  }
  window.TTS = TTS;
})();
