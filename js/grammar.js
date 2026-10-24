/* Fiches de grammaire (d'après le Bescherelle du Vaelrën) */
window.GRAMMAR = [
{ icon: '🔤', title: { fr: 'Alphabet et prononciation', es: 'Alfabeto y pronunciación' },
  desc: { fr: 'Les lettres, les sons, l\'accent', es: 'Las letras, los sonidos, el acento' },
  body: {
fr: `<p>Alphabet canonique : <b>A B D E F G H I K L M N O P R S T U V Y Z Ë Æ</b>. Il n'y a ni C, ni J, ni Q, ni W, ni X dans la norme (quelques mots du lexique complémentaire, comme <i>westel</i> ou <i>jelen</i>, sont des emprunts).</p>
<table class="gt plain"><tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
<tr><td class="v">a</td><td>a</td><td class="v">dar</td></tr><tr><td class="v">e</td><td>é / e</td><td class="v">selen</td></tr><tr><td class="v">i</td><td>i</td><td class="v">lir</td></tr><tr><td class="v">o</td><td>o</td><td class="v">mor</td></tr><tr><td class="v">u</td><td>ou</td><td class="v">sul</td></tr><tr><td class="v">ë</td><td>e muet (schwa)</td><td class="v">Vaelrën</td></tr><tr><td class="v">æ</td><td>è ouvert</td><td class="v">Vælrën</td></tr><tr><td class="v">r</td><td>roulé ou battu</td><td class="v">ren</td></tr><tr><td class="v">h</td><td>aspiré</td><td class="v">hesh</td></tr></table>
<h4>Accent tonique</h4><p>Il tombe sur l'<b>avant-dernière syllabe</b> et ne s'écrit jamais : <i>va-<u>E</u>-la</i>, <i>thal-<u>MOR</u></i> → en réalité <i><u>THAL</u>-mor</i>.</p>
<h4>Syllabes</h4><p>Schéma (C)(C)V(C). Groupes initiaux autorisés : <i>dr-</i> (drek), <i>tr-</i> (tri), <i>gr-</i> (grandar), <i>br-</i> (brael), <i>fr-</i> (fores), <i>pl-</i> (plena), <i>vr-</i> (vraia).</p>
<h4>Voyelles en contact</h4><p>Elles ne se contractent pas à l'écrit : <i>vaela</i> + <i>-arë</i> = <i>vaelaarë</i>. Le registre ancien pouvait insérer un <b>y</b> de liaison (<i>elayar</i>).</p>`,
es: `<p>Alfabeto canónico: <b>A B D E F G H I K L M N O P R S T U V Y Z Ë Æ</b>. No hay C, J, Q, W ni X en la norma (algunas palabras del léxico complementario, como <i>westel</i> o <i>jelen</i>, son préstamos).</p>
<table class="gt plain"><tr><th>Letra</th><th>Sonido</th><th>Ejemplo</th></tr>
<tr><td class="v">a</td><td>a</td><td class="v">dar</td></tr><tr><td class="v">e</td><td>e</td><td class="v">selen</td></tr><tr><td class="v">i</td><td>i</td><td class="v">lir</td></tr><tr><td class="v">o</td><td>o</td><td class="v">mor</td></tr><tr><td class="v">u</td><td>u</td><td class="v">sul</td></tr><tr><td class="v">ë</td><td>vocal neutra (schwa)</td><td class="v">Vaelrën</td></tr><tr><td class="v">æ</td><td>e abierta</td><td class="v">Vælrën</td></tr><tr><td class="v">r</td><td>vibrante</td><td class="v">ren</td></tr><tr><td class="v">h</td><td>aspirada</td><td class="v">hesh</td></tr></table>
<h4>Acento</h4><p>Cae en la <b>penúltima sílaba</b> y nunca se escribe: <i>va-<u>E</u>-la</i>, <i><u>THAL</u>-mor</i>.</p>
<h4>Sílabas</h4><p>Esquema (C)(C)V(C). Grupos iniciales permitidos: <i>dr-</i> (drek), <i>tr-</i> (tri), <i>gr-</i> (grandar), <i>br-</i> (brael), <i>fr-</i> (fores), <i>pl-</i> (plena), <i>vr-</i> (vraia).</p>
<h4>Vocales en contacto</h4><p>No se contraen por escrito: <i>vaela</i> + <i>-arë</i> = <i>vaelaarë</i>. El registro antiguo podía insertar una <b>y</b> de enlace (<i>elayar</i>).</p>` } },

{ icon: '🧑', title: { fr: 'Les pronoms', es: 'Los pronombres' },
  desc: { fr: 'Sujets, objets, possessifs, démonstratifs…', es: 'Sujeto, objeto, posesivos, demostrativos…' },
  body: {
fr: `<table class="gt"><tr><th>Sujet</th><th>Sens</th><th>Objet</th><th>Possessif</th></tr>
<tr><td>na</td><td>je</td><td>nam</td><td>nair</td></tr><tr><td>ta</td><td>tu</td><td>tam</td><td>tair</td></tr><tr><td>se</td><td>il</td><td>sem</td><td>seir</td></tr><tr><td>sa</td><td>elle</td><td>sam</td><td>sair</td></tr><tr><td>nar</td><td>nous</td><td>—</td><td>narir</td></tr><tr><td>tar</td><td>vous</td><td>—</td><td>tarir</td></tr><tr><td>ser</td><td>ils / elles</td><td>—</td><td>serir</td></tr></table>
<p><b>Démonstratifs</b> : <i>hoia</i> (celui-ci, ceci), <i>taela</i> (celui-là, cela). Ils se placent après le nom (<i>narel hoia</i> = cet enfant) et prennent le nombre : <i>hoiai</i> (duel), <i>hoien</i> (pluriel).</p>
<p><b>Interrogatifs</b> : <i>ka</i> qui, <i>ma</i> quoi, <i>tor</i> où, <i>ren</i> quand, <i>sha</i> pourquoi, <i>vel</i> comment, <i>dai</i> combien.</p>
<p><b>Relatif</b> : <i>ke</i>, invariable — <i>dar ke na mir</i> (l'homme que je vois).</p>
<p><b>Réfléchi</b> : <i>sen</i>, pour toutes les personnes — <i>na mir sen</i> (je me vois), <i>senir</i> (de soi-même), <i>senan</i> (à soi-même).</p>`,
es: `<table class="gt"><tr><th>Sujeto</th><th>Sentido</th><th>Objeto</th><th>Posesivo</th></tr>
<tr><td>na</td><td>yo</td><td>nam</td><td>nair</td></tr><tr><td>ta</td><td>tú</td><td>tam</td><td>tair</td></tr><tr><td>se</td><td>él</td><td>sem</td><td>seir</td></tr><tr><td>sa</td><td>ella</td><td>sam</td><td>sair</td></tr><tr><td>nar</td><td>nosotros</td><td>—</td><td>narir</td></tr><tr><td>tar</td><td>vosotros</td><td>—</td><td>tarir</td></tr><tr><td>ser</td><td>ellos / ellas</td><td>—</td><td>serir</td></tr></table>
<p><b>Demostrativos</b>: <i>hoia</i> (este, esto), <i>taela</i> (ese, aquel). Van después del nombre (<i>narel hoia</i> = este niño) y llevan número: <i>hoiai</i> (dual), <i>hoien</i> (plural).</p>
<p><b>Interrogativos</b>: <i>ka</i> quién, <i>ma</i> qué, <i>tor</i> dónde, <i>ren</i> cuándo, <i>sha</i> por qué, <i>vel</i> cómo, <i>dai</i> cuánto.</p>
<p><b>Relativo</b>: <i>ke</i>, invariable — <i>dar ke na mir</i> (el hombre que veo).</p>
<p><b>Reflexivo</b>: <i>sen</i>, para todas las personas — <i>na mir sen</i> (me veo), <i>senir</i> (de sí mismo), <i>senan</i> (a sí mismo).</p>` } },

{ icon: '📦', title: { fr: 'Les noms : nombre et cas', es: 'Los nombres: número y caso' },
  desc: { fr: 'Racine + nombre + cas', es: 'Raíz + número + caso' },
  body: {
fr: `<p>Un nom vaelrën se construit toujours dans cet ordre : <b>racine + nombre + cas</b>. Il n'y a ni article ni genre grammatical.</p>
<p><b>Nombres</b> : singulier (—), <b>duel -i</b> (deux), <b>pluriel -en</b>.</p>
<p><b>Cas</b> : nominatif (—), accusatif <b>-m</b>, génitif <b>-ir</b>, datif <b>-an</b>, locatif <b>-en</b>, ablatif <b>-or</b>, instrumental <b>-ek</b>, vocatif <b>-a</b>.</p>
<p>Exemple : <i>dar + i + en + ir</i> = <i>darienir</i>. Quand pluriel et locatif coïncident (<i>-en</i>), c'est le contexte qui tranche.</p>
<h4>Essaie avec n'importe quel nom</h4><div data-tool="decl"></div>`,
es: `<p>Un nombre vaelrën se construye siempre en este orden: <b>raíz + número + caso</b>. No hay artículos ni género gramatical.</p>
<p><b>Números</b>: singular (—), <b>dual -i</b> (dos), <b>plural -en</b>.</p>
<p><b>Casos</b>: nominativo (—), acusativo <b>-m</b>, genitivo <b>-ir</b>, dativo <b>-an</b>, locativo <b>-en</b>, ablativo <b>-or</b>, instrumental <b>-ek</b>, vocativo <b>-a</b>.</p>
<p>Ejemplo: <i>dar + i + en + ir</i> = <i>darienir</i>. Cuando plural y locativo coinciden (<i>-en</i>), decide el contexto.</p>
<h4>Prueba con cualquier nombre</h4><div data-tool="decl"></div>` } },

{ icon: '⏱️', title: { fr: 'Le verbe et ses particules', es: 'El verbo y sus partículas' },
  desc: { fr: 'Présent, passé, futur, conditionnel…', es: 'Presente, pasado, futuro, condicional…' },
  body: {
fr: `<p>La racine verbale ne change jamais. Le temps et l'aspect sont portés par des <b>particules</b> placées devant le verbe :</p>
<table class="gt plain"><tr><th>Forme</th><th>Formule</th><th>Exemple</th><th>Sens</th></tr>
<tr><td>Présent</td><td>sujet + V</td><td class="v">na var</td><td>je parle</td></tr><tr><td>Passé</td><td>+ ra</td><td class="v">na ra var</td><td>j'ai parlé</td></tr><tr><td>Futur</td><td>+ va</td><td class="v">na va var</td><td>je parlerai</td></tr><tr><td>Conditionnel</td><td>+ ei</td><td class="v">na ei var</td><td>je parlerais</td></tr><tr><td>Progressif</td><td>+ el</td><td class="v">na el var</td><td>je suis en train de parler</td></tr><tr><td>Habituel</td><td>+ sa</td><td class="v">na sa var</td><td>je parle d'habitude</td></tr><tr><td>Négatif</td><td>+ ul</td><td class="v">na ul var</td><td>je ne parle pas</td></tr></table>
<p><b>Formule universelle</b> : PRONOM + <i>ul</i> + PARTICULE TEMPORELLE + MODAL + VERBE → <i>na ul va sor mira</i> (je ne pourrai pas voir). Le conditionnel passé empile <i>ei ra</i> : <i>se ei ra es aeron</i> (il aurait été roi).</p>
<p>Le verbe <b>es</b> (être) peut s'omettre au présent en style poétique : <i>aer selen</i> (le ciel est lumineux). Suivi de <i>en</i>, il localise : <i>dar es en dom</i>.</p>
<h4>Conjugueur</h4><div data-tool="conj"></div>`,
es: `<p>La raíz verbal nunca cambia. El tiempo y el aspecto los llevan <b>partículas</b> colocadas delante del verbo:</p>
<table class="gt plain"><tr><th>Forma</th><th>Fórmula</th><th>Ejemplo</th><th>Sentido</th></tr>
<tr><td>Presente</td><td>sujeto + V</td><td class="v">na var</td><td>hablo</td></tr><tr><td>Pasado</td><td>+ ra</td><td class="v">na ra var</td><td>hablé</td></tr><tr><td>Futuro</td><td>+ va</td><td class="v">na va var</td><td>hablaré</td></tr><tr><td>Condicional</td><td>+ ei</td><td class="v">na ei var</td><td>hablaría</td></tr><tr><td>Progresivo</td><td>+ el</td><td class="v">na el var</td><td>estoy hablando</td></tr><tr><td>Habitual</td><td>+ sa</td><td class="v">na sa var</td><td>suelo hablar</td></tr><tr><td>Negativo</td><td>+ ul</td><td class="v">na ul var</td><td>no hablo</td></tr></table>
<p><b>Fórmula universal</b>: PRONOMBRE + <i>ul</i> + PARTÍCULA TEMPORAL + MODAL + VERBO → <i>na ul va sor mira</i> (no podré ver). El condicional pasado apila <i>ei ra</i>: <i>se ei ra es aeron</i> (habría sido rey).</p>
<p>El verbo <b>es</b> (ser/estar) puede omitirse en presente en estilo poético: <i>aer selen</i> (el cielo es luminoso). Seguido de <i>en</i>, localiza: <i>dar es en dom</i>.</p>
<h4>Conjugador</h4><div data-tool="conj"></div>` } },

{ icon: '🧭', title: { fr: 'Modes non personnels', es: 'Formas no personales' },
  desc: { fr: 'Infinitif, participes, impératif', es: 'Infinitivo, participios, imperativo' },
  body: {
fr: `<ul><li><b>Infinitif -a</b> : <i>var → vara</i>, <i>mir → mira</i>. Après un verbe modal : <i>na kae mira</i> (je veux voir). Les racines en <i>-a</i> le gardent tel quel : <i>ela</i> (classique : <i>elaa</i>).</li>
<li><b>Participe actif -ar</b> : <i>varar</i> (parlant, orateur), <i>drekar</i> (combattant).</li>
<li><b>Participe résultatif -en</b> : <i>varen</i> (parlé) — forme particulière : <i>drek → drekken</i>.</li>
<li><b>Impératif</b> : la racine seule — <i>Var !</i> (parle !), <i>Vel !</i> (va !). Poli : <i>Ela vel.</i> (veuillez partir).</li>
<li><b>Gérondif</b> (littéraire) : <i>varar ta vel</i> (tout en parlant, tu pars).</li>
<li><b>Supin</b> : infinitif après un verbe de mouvement pour le but — <i>se vel mira</i> (il va voir).</li></ul>`,
es: `<ul><li><b>Infinitivo -a</b>: <i>var → vara</i>, <i>mir → mira</i>. Tras un verbo modal: <i>na kae mira</i> (quiero ver). Las raíces en <i>-a</i> no cambian: <i>ela</i> (clásico: <i>elaa</i>).</li>
<li><b>Participio activo -ar</b>: <i>varar</i> (hablante, orador), <i>drekar</i> (combatiente).</li>
<li><b>Participio resultativo -en</b>: <i>varen</i> (hablado) — forma especial: <i>drek → drekken</i>.</li>
<li><b>Imperativo</b>: la raíz sola — <i>Var !</i> (¡habla!), <i>Vel !</i> (¡ve!). Cortés: <i>Ela vel.</i> (tenga a bien irse).</li>
<li><b>Gerundio</b> (literario): <i>varar ta vel</i> (hablando, te vas).</li>
<li><b>Supino</b>: infinitivo tras un verbo de movimiento para expresar finalidad — <i>se vel mira</i> (va a ver).</li></ul>` } },

{ icon: '❓', title: { fr: 'Négation et questions', es: 'Negación y preguntas' },
  desc: { fr: 'ul, nul, ae, va', es: 'ul, nul, ae, va' },
  body: {
fr: `<p><b>ul</b> se place devant le groupe verbal : <i>na ul ra var</i> (je n'ai pas parlé), <i>na ul kae vela</i> (je ne veux pas partir).</p>
<p>Négation partielle : <i>ul</i> devant le seul mot visé — <i>na mir ul darm, ma varkanm</i> (je ne vois pas l'homme, mais le soldat). « Rien » : <i>na mir nul</i>.</p>
<p><b>Question fermée</b> : <i>ae</i> en fin de phrase — <i>Ta va vel ae ?</i> Réponse courte : <i>va</i> (oui) / <i>ul</i> (non).</p>
<p><b>Question ouverte</b> : le mot interrogatif en tête — <i>Tor ta vel ?</i> (familier), <i>Tor ta va vel ?</i> (neutre), <i>Tor va ta vel ?</i> (formel).</p>`,
es: `<p><b>ul</b> va delante del grupo verbal: <i>na ul ra var</i> (no hablé), <i>na ul kae vela</i> (no quiero irme).</p>
<p>Negación parcial: <i>ul</i> delante de la palabra afectada — <i>na mir ul darm, ma varkanm</i> (no veo al hombre, sino al soldado). « Nada »: <i>na mir nul</i>.</p>
<p><b>Pregunta cerrada</b>: <i>ae</i> al final — <i>Ta va vel ae ?</i> Respuesta corta: <i>va</i> (sí) / <i>ul</i> (no).</p>
<p><b>Pregunta abierta</b>: la palabra interrogativa al principio — <i>Tor ta vel ?</i> (coloquial), <i>Tor ta va vel ?</i> (neutro), <i>Tor va ta vel ?</i> (formal).</p>` } },

{ icon: '🧩', title: { fr: 'Adjectifs et dérivation', es: 'Adjetivos y derivación' },
  desc: { fr: 'Degrés et suffixes productifs', es: 'Grados y sufijos productivos' },
  body: {
fr: `<p>L'adjectif suit le nom, sans accord : <i>aer selen</i>. Degrés : <i>vaela</i> (fort), <i>vaelaeth</i> (plus fort), <i>vaelaarë</i> (le plus fort), <i>minus vaela</i> (moins fort), <i>tan vaela se…</i> (aussi fort que…). Adverbe : <i>-rly</i> (<i>aivarly</i>, rapidement).</p>
<table class="gt"><tr><td>-ar</td><td>agent</td><td>drekar</td><td>combattant</td></tr><tr><td>-in</td><td>abstraction</td><td>selin</td><td>clarté</td></tr><tr><td>-or</td><td>lieu</td><td>selor</td><td>sanctuaire</td></tr><tr><td>-il</td><td>diminutif</td><td>domil</td><td>cabane</td></tr><tr><td>-thal</td><td>augmentatif</td><td>domthal</td><td>manoir</td></tr><tr><td>-im</td><td>ordinal</td><td>triim</td><td>troisième</td></tr></table>
<p>Les suffixes se cumulent dans l'ordre : racine + (augm./dimin.) + (agent/abstr./lieu) + (comp./superl.) → <i>domthalor</i> (le lieu de la grande maison). Les <b>composés</b> sont productifs : <i>aer + dor = aerdor</i> (royaume).</p>`,
es: `<p>El adjetivo sigue al nombre, sin concordancia: <i>aer selen</i>. Grados: <i>vaela</i> (fuerte), <i>vaelaeth</i> (más fuerte), <i>vaelaarë</i> (el más fuerte), <i>minus vaela</i> (menos fuerte), <i>tan vaela se…</i> (tan fuerte como…). Adverbio: <i>-rly</i> (<i>aivarly</i>, rápidamente).</p>
<table class="gt"><tr><td>-ar</td><td>agente</td><td>drekar</td><td>combatiente</td></tr><tr><td>-in</td><td>abstracción</td><td>selin</td><td>claridad</td></tr><tr><td>-or</td><td>lugar</td><td>selor</td><td>santuario</td></tr><tr><td>-il</td><td>diminutivo</td><td>domil</td><td>cabaña</td></tr><tr><td>-thal</td><td>aumentativo</td><td>domthal</td><td>mansión</td></tr><tr><td>-im</td><td>ordinal</td><td>triim</td><td>tercero</td></tr></table>
<p>Los sufijos se acumulan en orden: raíz + (aum./dimin.) + (agente/abstr./lugar) + (comp./superl.) → <i>domthalor</i> (el lugar de la gran casa). Los <b>compuestos</b> son productivos: <i>aer + dor = aerdor</i> (reino).</p>` } },

{ icon: '🧱', title: { fr: 'Syntaxe', es: 'Sintaxis' },
  desc: { fr: 'L\'ordre des mots', es: 'El orden de las palabras' },
  body: {
fr: `<table class="gt plain"><tr><th>Type</th><th>Vaelrën</th><th>Français</th></tr>
<tr><td>Neutre (S-V-O)</td><td class="v">Na mir darm.</td><td>Je vois l'homme.</td></tr><tr><td>Emphase de l'objet</td><td class="v">Darm na mir.</td><td>C'est l'homme que je vois.</td></tr><tr><td>Adjectif</td><td class="v">Dar vaela.</td><td>Homme fort.</td></tr><tr><td>Possession</td><td class="v">Nair dom.</td><td>Ma maison.</td></tr><tr><td>Lieu</td><td class="v">Na es en dom.</td><td>Je suis dans la maison.</td></tr><tr><td>Double objet</td><td class="v">Na dal panelm varkanan.</td><td>Je donne le pain au soldat.</td></tr></table>
<p>Groupe nominal étendu : possessif — adjectif — nom — génitif. Coordination avec <i>e</i> : <i>darm e varkanm na mir</i>.</p>`,
es: `<table class="gt plain"><tr><th>Tipo</th><th>Vaelrën</th><th>Español</th></tr>
<tr><td>Neutro (S-V-O)</td><td class="v">Na mir darm.</td><td>Veo al hombre.</td></tr><tr><td>Énfasis del objeto</td><td class="v">Darm na mir.</td><td>Es al hombre a quien veo.</td></tr><tr><td>Adjetivo</td><td class="v">Dar vaela.</td><td>Hombre fuerte.</td></tr><tr><td>Posesión</td><td class="v">Nair dom.</td><td>Mi casa.</td></tr><tr><td>Lugar</td><td class="v">Na es en dom.</td><td>Estoy en la casa.</td></tr><tr><td>Doble objeto</td><td class="v">Na dal panelm varkanan.</td><td>Doy el pan al soldado.</td></tr></table>
<p>Grupo nominal extendido: posesivo — adjetivo — nombre — genitivo. Coordinación con <i>e</i>: <i>darm e varkanm na mir</i>.</p>` } },

{ icon: '🔗', title: { fr: 'Propositions subordonnées', es: 'Oraciones subordinadas' },
  desc: { fr: 'sha, ei, ren, ke, to, pol, sota, tama', es: 'sha, ei, ren, ke, to, pol, sota, tama' },
  body: {
fr: `<table class="gt plain"><tr><th>Fonction</th><th>Marque</th><th>Exemple</th></tr>
<tr><td>Cause</td><td class="v">sha</td><td><i>Na vel, sha na kae mira.</i> — Je pars parce que je veux voir.</td></tr><tr><td>Condition</td><td class="v">ei</td><td><i>Ei ta len, nar va vel.</i> — Si tu viens, nous partirons.</td></tr><tr><td>Temps</td><td class="v">ren</td><td><i>Ren sola va sel, nar va vel.</i> — Quand le soleil se lèvera…</td></tr><tr><td>Opposition</td><td class="v">ma</td><td><i>Na kae vel, ma na ul sor.</i></td></tr><tr><td>Relative</td><td class="v">ke</td><td><i>dar ke na mir</i> — l'homme que je vois</td></tr><tr><td>Complétive</td><td class="v">to</td><td><i>Na pen to se va len.</i> — Je pense qu'il viendra.</td></tr><tr><td>But</td><td class="v">pol</td><td>pour que</td></tr><tr><td>Conséquence</td><td class="v">sota</td><td><i>…sota varkanen ra naz.</i> — si bien que les soldats ont fui.</td></tr><tr><td>Concession</td><td class="v">tama</td><td><i>Tama se sika, se ra vel.</i> — Bien qu'il soit malade, il est parti.</td></tr></table>`,
es: `<table class="gt plain"><tr><th>Función</th><th>Marca</th><th>Ejemplo</th></tr>
<tr><td>Causa</td><td class="v">sha</td><td><i>Na vel, sha na kae mira.</i> — Me voy porque quiero ver.</td></tr><tr><td>Condición</td><td class="v">ei</td><td><i>Ei ta len, nar va vel.</i> — Si vienes, nos iremos.</td></tr><tr><td>Tiempo</td><td class="v">ren</td><td><i>Ren sola va sel, nar va vel.</i> — Cuando salga el sol…</td></tr><tr><td>Oposición</td><td class="v">ma</td><td><i>Na kae vel, ma na ul sor.</i></td></tr><tr><td>Relativa</td><td class="v">ke</td><td><i>dar ke na mir</i> — el hombre que veo</td></tr><tr><td>Completiva</td><td class="v">to</td><td><i>Na pen to se va len.</i> — Creo que vendrá.</td></tr><tr><td>Finalidad</td><td class="v">pol</td><td>para que</td></tr><tr><td>Consecuencia</td><td class="v">sota</td><td><i>…sota varkanen ra naz.</i> — de modo que los soldados huyeron.</td></tr><tr><td>Concesión</td><td class="v">tama</td><td><i>Tama se sika, se ra vel.</i> — Aunque está enfermo, se fue.</td></tr></table>` } },

{ icon: '🎭', title: { fr: 'Registres de langue', es: 'Registros de lengua' },
  desc: { fr: 'Du familier au royal', es: 'De lo coloquial a lo real' },
  body: {
fr: `<table class="gt plain"><tr><th>Registre</th><th>Exemple</th><th>Usage</th></tr>
<tr><td>Familier</td><td class="v">Tor ta vel ?</td><td>conversation</td></tr><tr><td>Neutre</td><td class="v">Tor ta va vel ?</td><td>usage courant</td></tr><tr><td>Formel</td><td class="v">Tor va ta vel ?</td><td>administration, cérémonie</td></tr><tr><td>Poétique</td><td class="v">Vel aer, nar enar.</td><td>chants, poésie</td></tr><tr><td>Royal</td><td class="v">Nar var.</td><td>déclaration majestueuse</td></tr><tr><td>Militaire</td><td class="v">Nar ! Drek !</td><td>ordres brefs</td></tr></table>
<p><b>Cour</b> : le sujet est répété en fin de phrase — <i>Aeron va enar, se aeron.</i> <b>Marché</b> : ellipse du sujet — <i>Pag deka !</i> <b>Chants de guerre</b> : impératif redoublé — <i>Drek ! Drek ! Vaela !</i></p>`,
es: `<table class="gt plain"><tr><th>Registro</th><th>Ejemplo</th><th>Uso</th></tr>
<tr><td>Coloquial</td><td class="v">Tor ta vel ?</td><td>conversación</td></tr><tr><td>Neutro</td><td class="v">Tor ta va vel ?</td><td>uso corriente</td></tr><tr><td>Formal</td><td class="v">Tor va ta vel ?</td><td>administración, ceremonia</td></tr><tr><td>Poético</td><td class="v">Vel aer, nar enar.</td><td>cantos, poesía</td></tr><tr><td>Real</td><td class="v">Nar var.</td><td>declaración majestuosa</td></tr><tr><td>Militar</td><td class="v">Nar ! Drek !</td><td>órdenes breves</td></tr></table>
<p><b>Corte</b>: el sujeto se repite al final — <i>Aeron va enar, se aeron.</i> <b>Mercado</b>: elipsis del sujeto — <i>Pag deka !</i> <b>Cantos de guerra</b>: imperativo duplicado — <i>Drek ! Drek ! Vaela !</i></p>` } },

{ icon: '🔢', title: { fr: 'Les nombres', es: 'Los números' },
  desc: { fr: 'Cardinaux et ordinaux', es: 'Cardinales y ordinales' },
  body: {
fr: `<table class="gt plain"><tr><td class="v">una</td><td>1</td><td class="v">seka</td><td>6</td><td class="v">dekauna</td><td>11</td><td class="v">dekaseka</td><td>16</td></tr><tr><td class="v">dua</td><td>2</td><td class="v">sepa</td><td>7</td><td class="v">dekadua</td><td>12</td><td class="v">dekasepa</td><td>17</td></tr><tr><td class="v">tri</td><td>3</td><td class="v">okta</td><td>8</td><td class="v">dekatri</td><td>13</td><td class="v">dekaokta</td><td>18</td></tr><tr><td class="v">kvar</td><td>4</td><td class="v">nona</td><td>9</td><td class="v">dekakvar</td><td>14</td><td class="v">dekanona</td><td>19</td></tr><tr><td class="v">pena</td><td>5</td><td class="v">deka</td><td>10</td><td class="v">dekapena</td><td>15</td><td class="v">duadeka</td><td>20</td></tr></table>
<p><i>senta</i> = 100, <i>mila</i> = 1000. Le nombre précède le nom, qui se met au pluriel : <i>tri varkanen</i>. Ordinal : <b>-im</b> (<i>unaim</i>, <i>triim</i>, <i>dekaim</i>).</p>`,
es: `<table class="gt plain"><tr><td class="v">una</td><td>1</td><td class="v">seka</td><td>6</td><td class="v">dekauna</td><td>11</td><td class="v">dekaseka</td><td>16</td></tr><tr><td class="v">dua</td><td>2</td><td class="v">sepa</td><td>7</td><td class="v">dekadua</td><td>12</td><td class="v">dekasepa</td><td>17</td></tr><tr><td class="v">tri</td><td>3</td><td class="v">okta</td><td>8</td><td class="v">dekatri</td><td>13</td><td class="v">dekaokta</td><td>18</td></tr><tr><td class="v">kvar</td><td>4</td><td class="v">nona</td><td>9</td><td class="v">dekakvar</td><td>14</td><td class="v">dekanona</td><td>19</td></tr><tr><td class="v">pena</td><td>5</td><td class="v">deka</td><td>10</td><td class="v">dekapena</td><td>15</td><td class="v">duadeka</td><td>20</td></tr></table>
<p><i>senta</i> = 100, <i>mila</i> = 1000. El número precede al nombre, que va en plural: <i>tri varkanen</i>. Ordinal: <b>-im</b> (<i>unaim</i>, <i>triim</i>, <i>dekaim</i>).</p>` } },

{ icon: '🗺️', title: { fr: 'Dialectes régionaux', es: 'Dialectos regionales' },
  desc: { fr: 'Nord, Sud, Hauts-Plateaux, îles', es: 'Norte, Sur, Altiplanos, islas' },
  body: {
fr: `<ul><li><b>Nord</b> (référence) : distinction pleine æ / e, ordre S-V-O même en poésie.</li><li><b>Sud</b> : æ se ferme en é (<i>thalmor</i> → « thelmor ») ; <i>el</i> se soude au pronom : <i>na'l var</i> = <i>na el var</i>. Vocabulaire agricole et maritime riche.</li><li><b>Hauts-Plateaux</b> : duel très productif, négation renforcée <i>ul … nul</i> : <i>na ul var nul</i>.</li><li><b>Îles</b> : particule évidentielle <i>zol</i> en fin de phrase = « à ce qu'on dit ».</li></ul>`,
es: `<ul><li><b>Norte</b> (referencia): distinción plena æ / e, orden S-V-O incluso en poesía.</li><li><b>Sur</b>: la æ se cierra en e (<i>thalmor</i> → « thelmor »); <i>el</i> se suelda al pronombre: <i>na'l var</i> = <i>na el var</i>. Vocabulario agrícola y marítimo rico.</li><li><b>Altiplanos</b>: dual muy productivo, negación reforzada <i>ul … nul</i>: <i>na ul var nul</i>.</li><li><b>Islas</b>: partícula evidencial <i>zol</i> al final = « según dicen ».</li></ul>` } },

{ icon: '📜', title: { fr: 'Proverbes et expressions', es: 'Proverbios y expresiones' },
  desc: { fr: 'Les 20 expressions idiomatiques', es: 'Las 20 expresiones idiomáticas' },
  body: { fr: '<div data-tool="idioms"></div>', es: '<div data-tool="idioms"></div>' } },

{ icon: '✍️', title: { fr: 'Notes de l\'édition 2', es: 'Notas de la edición 2' },
  desc: { fr: 'Mots ajoutés et corrections du lexique', es: 'Palabras añadidas y correcciones del léxico' },
  body: {
fr: `<p>Pour construire le cours, <b>76 mots</b> ont été ajoutés (badge doré « Ajout éd. 2 » dans le dictionnaire) : eau (<i>nael</i>), femme (<i>sarna</i>), arbre (<i>arbel</i>), aujourd'hui (<i>ansol</i>), hier (<i>ren-ra</i>), avoir (<i>hab</i>), faire (<i>fak</i>), les jours de la semaine (<i>unasol</i> … <i>sepasol</i>), les émotions de base, etc. Tous respectent l'alphabet canonique et ont été vérifiés contre plus de 700 racines et toutes leurs formes déclinées : aucune collision.</p>
<h4>Corrections du lexique complémentaire</h4><table class="gt plain"><tr><th>Ancienne forme</th><th>Nouvelle forme</th><th>Sens</th></tr><tr><td class="v">batel2</td><td class="v">batal</td><td>bataille (batel = bateau)</td></tr><tr><td class="v">vestel2</td><td class="v">relikel</td><td>vestige (vestel = vêtement)</td></tr><tr><td class="v">sekel2</td><td class="v">aridel</td><td>sécheresse (sekel = siècle)</td></tr><tr><td class="v">mesel2</td><td class="v">mezurel</td><td>mesure (mesel = viande)</td></tr><tr><td class="v">tabel2</td><td class="v">pintel</td><td>tableau, de <i>pintar</i> (tabel = table)</td></tr><tr><td class="v">punish</td><td class="v">pun</td><td>punir (racine anglaise remplacée)</td></tr></table>
<p>Les mots dérivés régulièrement (<i>leror</i> = école, <i>fenor</i> = restaurant, <i>enarin</i> = vie…) suivent strictement les suffixes du Bescherelle.</p>`,
es: `<p>Para construir el curso se añadieron <b>76 palabras</b> (insignia dorada « Añadido ed. 2 » en el diccionario): agua (<i>nael</i>), mujer (<i>sarna</i>), árbol (<i>arbel</i>), hoy (<i>ansol</i>), ayer (<i>ren-ra</i>), tener (<i>hab</i>), hacer (<i>fak</i>), los días de la semana (<i>unasol</i> … <i>sepasol</i>), las emociones básicas, etc. Todas respetan el alfabeto canónico y se comprobaron contra más de 700 raíces y todas sus formas declinadas: ninguna colisión.</p>
<h4>Correcciones del léxico complementario</h4><table class="gt plain"><tr><th>Forma antigua</th><th>Forma nueva</th><th>Sentido</th></tr><tr><td class="v">batel2</td><td class="v">batal</td><td>batalla (batel = barco)</td></tr><tr><td class="v">vestel2</td><td class="v">relikel</td><td>vestigio (vestel = ropa)</td></tr><tr><td class="v">sekel2</td><td class="v">aridel</td><td>sequía (sekel = siglo)</td></tr><tr><td class="v">mesel2</td><td class="v">mezurel</td><td>medida (mesel = carne)</td></tr><tr><td class="v">tabel2</td><td class="v">pintel</td><td>cuadro, de <i>pintar</i> (tabel = mesa)</td></tr><tr><td class="v">punish</td><td class="v">pun</td><td>castigar (raíz inglesa reemplazada)</td></tr></table>
<p>Las palabras derivadas regularmente (<i>leror</i> = escuela, <i>fenor</i> = restaurante, <i>enarin</i> = vida…) siguen estrictamente los sufijos del Bescherelle.</p>` } },
];

window.IDIOMS = [
  ['Na es en sel.', 'Je suis dans la lumière.', 'Je vais bien / tout va bien pour moi.', 'Estoy en la luz.', 'Me va bien / todo va bien.'],
  ['Se ra mir moren.', "Il a vu l'obscurité.", 'Il a connu le malheur.', 'Ha visto la oscuridad.', 'Ha conocido la desgracia.'],
  ['Dar vaelin sen.', 'Homme de sa propre force.', 'Un homme qui ne doit rien à personne.', 'Hombre de su propia fuerza.', 'Un hombre que no le debe nada a nadie.'],
  ['Kanel narir.', 'La chanson de notre cœur.', 'Ce qui nous tient le plus à cœur.', 'La canción de nuestro corazón.', 'Lo que más nos importa.'],
  ['Vel aer, tar es.', 'Va vers le ciel, tu existes.', 'Formule de bénédiction au départ.', 'Ve hacia el cielo, existes.', 'Fórmula de bendición al partir.'],
  ['Sol ul va len ren-va.', 'Le soleil ne viendra pas demain.', 'Une situation sans espoir immédiat.', 'El sol no vendrá mañana.', 'Una situación sin esperanza inmediata.'],
  ['Firen en dolen.', 'La flamme dans la larme.', "L'espoir au cœur du chagrin.", 'La llama en la lágrima.', 'La esperanza en medio de la pena.'],
  ['Na ser ma na ul ser.', 'Je sais ce que je ne sais pas.', 'Formule de sagesse et d\'humilité.', 'Sé lo que no sé.', 'Fórmula de sabiduría y humildad.'],
  ['Kared thal.', 'Le grand chemin.', 'Une entreprise de longue haleine.', 'El gran camino.', 'Una empresa de largo aliento.'],
  ['Se drek sen.', 'Il se combat lui-même.', 'Il lutte contre ses propres démons.', 'Se combate a sí mismo.', 'Lucha contra sus propios demonios.'],
  ['Aer selen, vaelin nar.', 'Ciel lumineux, notre force.', 'Devise traditionnelle de bon augure.', 'Cielo luminoso, nuestra fuerza.', 'Lema tradicional de buen augurio.'],
  ['Ven vaelaarë.', 'Le plus fort des amis.', "Un ami sur qui l'on peut toujours compter.", 'El más fuerte de los amigos.', 'Un amigo con el que siempre se puede contar.'],
  ['Na hil selin en moren.', "Je cherche la clarté dans l'obscurité.", 'Chercher une solution en période difficile.', 'Busco la claridad en la oscuridad.', 'Buscar una solución en tiempos difíciles.'],
  ['Tor va sol, tar va vel.', 'Où va le soleil, vous irez.', 'Suivre son destin sans hésiter.', 'Adonde va el sol, iréis.', 'Seguir el destino sin dudar.'],
  ['Kaen ul es sula.', "Le désir n'est pas le sommeil.", 'Vouloir ne suffit pas, il faut agir.', 'El deseo no es el sueño.', 'Querer no basta, hay que actuar.'],
  ['Se ra kar elin, ul kar orel.', "Il a pris l'amour, pas l'or.", 'Il a choisi ce qui compte vraiment.', 'Tomó el amor, no el oro.', 'Eligió lo que de verdad importa.'],
  ['Narel sola pael thal kared.', "L'enfant seul marche le grand chemin.", 'On grandit en affrontant seul les épreuves.', 'El niño solo recorre el gran camino.', 'Se crece afrontando solo las pruebas.'],
  ['Va es ren, ul es namkae.', "Il y a un temps, il n'y a jamais de jamais.", 'Rien n\'est figé pour toujours.', 'Hay un tiempo, nunca hay un nunca.', 'Nada está fijado para siempre.'],
  ['Drekar ul haz vaelin.', 'Le combattant ne perd pas sa force.', 'Ne jamais perdre courage.', 'El combatiente no pierde su fuerza.', 'Nunca perder el ánimo.'],
  ['Selar es en tut.', 'Le gardien de lumière est en tout.', "L'espoir subsiste toujours quelque part.", 'El guardián de la luz está en todo.', 'La esperanza siempre sobrevive en algún lugar.'],
];
