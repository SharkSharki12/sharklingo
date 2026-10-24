/* Sharky — petit requin mascotte (création originale) */
(function () {
  const COLORS = {
    ocean: { body: '#3B8EEA', dark: '#2563B8', belly: '#E8F3FF', fin: '#5FA6F0' },
    violet: { body: '#7B5CFF', dark: '#5636D9', belly: '#E6DFFF', fin: '#9C86FF' },
    jade: { body: '#2FBF71', dark: '#1F9255', belly: '#DDF7E8', fin: '#5CD493' },
    braise: { body: '#F0506E', dark: '#C73452', belly: '#FFE3E8', fin: '#F57B92' },
    nuit: { body: '#3A3470', dark: '#232050', belly: '#D4CFF2', fin: '#5A529A' },
    or: { body: '#F5B323', dark: '#C98A00', belly: '#FFF3D1', fin: '#F8C85A' },
  };
  const EY = 100; // hauteur des yeux
  function eyes(mood) {
    if (mood === 'happy') return `
      <path d="M78 ${EY + 2} q10 -12 20 0" fill="none" stroke="#24204A" stroke-width="5" stroke-linecap="round"/>
      <path d="M122 ${EY + 2} q10 -12 20 0" fill="none" stroke="#24204A" stroke-width="5" stroke-linecap="round"/>`;
    const sad = mood === 'sad';
    return `<g class="blink">
      <ellipse cx="88" cy="${EY}" rx="13" ry="${sad ? 12 : 15}" fill="#fff"/>
      <ellipse cx="132" cy="${EY}" rx="13" ry="${sad ? 12 : 15}" fill="#fff"/>
      <circle cx="${sad ? 88 : 91}" cy="${EY + (sad ? 4 : 2)}" r="8" fill="#24204A"/>
      <circle cx="${sad ? 132 : 135}" cy="${EY + (sad ? 4 : 2)}" r="8" fill="#24204A"/>
      <circle cx="${sad ? 91 : 94}" cy="${EY + (sad ? 1 : -2)}" r="3" fill="#fff"/>
      <circle cx="${sad ? 135 : 138}" cy="${EY + (sad ? 1 : -2)}" r="3" fill="#fff"/>
      ${sad ? `<path d="M76 ${EY - 14} l22 -7 M144 ${EY - 14} l-22 -7" stroke="#24204A" stroke-width="4" stroke-linecap="round"/>` : ''}
      ${mood === 'wow' ? `<path d="M76 ${EY - 20} q12 -8 24 -2 M120 ${EY - 22} q12 -6 24 2" fill="none" stroke="#24204A" stroke-width="4" stroke-linecap="round"/>` : ''}
    </g>`;
  }
  function mouth(mood) {
    const y = 130;
    if (mood === 'sad') return `<path d="M96 ${y + 4} q14 -9 28 0" fill="none" stroke="#24204A" stroke-width="4" stroke-linecap="round"/>`;
    if (mood === 'wow') return `<ellipse cx="110" cy="${y}" rx="8" ry="10" fill="#24204A"/><path d="M104 ${y - 8} l3 5 l3 -5 l3 5 l3 -5" fill="none" stroke="#fff" stroke-width="2"/>`;
    if (mood === 'think') return `<path d="M98 ${y} h22" stroke="#24204A" stroke-width="4" stroke-linecap="round"/>`;
    // grand sourire de requin avec petites dents
    return `<path d="M88 ${y - 6} q22 26 44 0 z" fill="#24204A"/>
      <path d="M90 ${y - 5} l4 6 l4 -5 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -5 z" fill="#fff"/>
      <path d="M102 ${y + 9} q8 5 16 0" fill="#F0506E"/>`;
  }
  window.mascotSVG = function (opts = {}) {
    const mood = opts.mood || 'normal';
    const c = COLORS[opts.color || (window.State && State.s.mascotColor) || 'ocean'] || COLORS.ocean;
    const cls = ['mascot', opts.anim || ''].join(' ');
    return `<svg class="${cls}" viewBox="0 0 220 220" aria-hidden="true">
      <ellipse cx="110" cy="208" rx="58" ry="8" fill="#24204A" opacity=".12"/>
      <!-- queue -->
      <path d="M148 178 q26 -4 40 -26 q6 -10 14 -10 q-4 16 -6 26 q8 6 14 22 q-12 -2 -20 -4 q-20 6 -44 4z" fill="${c.dark}"/>
      <!-- aileron dorsal -->
      <path d="M100 52 q14 -26 34 -44 q-4 30 2 50 z" fill="${c.dark}"/>
      <!-- nageoires -->
      <g class="wing"><path d="M62 146 q-32 2 -50 26 q30 8 56 -6 z" fill="${c.fin}" stroke="${c.dark}" stroke-width="4" stroke-linejoin="round"/></g>
      <g class="wing r"><path d="M158 146 q32 2 50 26 q-30 8 -56 -6 z" fill="${c.fin}" stroke="${c.dark}" stroke-width="4" stroke-linejoin="round"/></g>
      <!-- corps -->
      <path d="M56 140 q-6 -64 54 -100 q60 36 54 100 q-4 52 -54 54 q-50 -2 -54 -54z" fill="${c.body}"/>
      <!-- ventre -->
      <path d="M74 146 q36 -16 72 0 q-2 40 -36 42 q-34 -2 -36 -42z" fill="${c.belly}"/>
      <path d="M92 160 h36 M90 172 h40" stroke="${c.body}" stroke-width="3" stroke-linecap="round" opacity=".25"/>
      <!-- reflet -->
      <path d="M90 52 q-14 12 -20 30" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".35"/>
      <!-- branchies -->
      <path d="M64 112 q-5 8 0 16 M70 110 q-5 9 0 18" fill="none" stroke="${c.dark}" stroke-width="3" stroke-linecap="round"/>
      <path d="M156 112 q5 8 0 16 M150 110 q5 9 0 18" fill="none" stroke="${c.dark}" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="74" cy="${EY + 18}" rx="9" ry="6" fill="#F0506E" opacity=".3"/>
      <ellipse cx="146" cy="${EY + 18}" rx="9" ry="6" fill="#F0506E" opacity=".3"/>
      ${eyes(mood)}
      ${mouth(mood)}
      <!-- petites nageoires du bas -->
      <path d="M84 188 q-6 12 6 14 h12 q2 -10 -6 -14z" fill="${c.dark}"/>
      <path d="M136 188 q6 12 -6 14 h-12 q-2 -10 6 -14z" fill="${c.dark}"/>
      ${mood === 'happy' || mood === 'wow' ? '<g fill="#7FD4FF"><circle cx="34" cy="50" r="7" opacity=".7"/><circle cx="22" cy="74" r="4" opacity=".6"/><circle cx="188" cy="40" r="6" opacity=".7"/><circle cx="198" cy="62" r="3.5" opacity=".6"/></g>' : ''}
    </svg>`;
  };
  window.MASCOT_COLORS = COLORS;
  window.MASCOT_NAME = 'Sharky';
})();
