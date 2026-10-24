/* Sharklingo — Cursus, partie 1 (unités 1 à 11)
   Format phrase : [vaelrën, français, español] — les variantes acceptées sont séparées par « || ».
   Mots : référence au lexique (« mot » ou « mot:catégorie » pour lever une homonymie). */
window.COURSE = window.COURSE || [];
window.COURSE.push(
{
  id: 'u1', icon: '👋', color: 'violet',
  title: { fr: 'Premiers pas', es: 'Primeros pasos' },
  desc: { fr: 'Saluer, remercier, dire au revoir', es: 'Saludar, agradecer, despedirse' },
  tip: {
    fr: `<p>Bienvenue en <b>Vaelrën</b> ! Les salutations sont des mots simples qui s'emploient seuls : <i>Haelin !</i> (bonjour), <i>Gratel !</i> (merci), <i>Postel !</i> (au revoir).</p>
<p>Pour répondre oui ou non, on utilise <b>va</b> (oui) et <b>ul</b> (non).</p>
<h4>Prononciation</h4><ul><li><b>u</b> se prononce « ou » : <i>ul</i> = « oul »</li><li><b>e</b> se prononce « é » : <i>selen</i> = « sélén »</li><li><b>ë</b> est un e muet, <b>æ</b> un « è » ouvert</li><li>Le <b>r</b> est roulé, le <b>h</b> est aspiré.</li><li>L'accent tombe sur l'avant-dernière syllabe : <i>ha-<u>E</u>-lin</i>.</li></ul>`,
    es: `<p>¡Bienvenido al <b>vaelrën</b>! Los saludos son palabras simples que se usan solas: <i>Haelin!</i> (hola), <i>Gratel!</i> (gracias), <i>Postel!</i> (adiós).</p>
<p>Para responder sí o no, se usa <b>va</b> (sí) y <b>ul</b> (no).</p>
<h4>Pronunciación</h4><ul><li>La <b>u</b> suena como en español: <i>ul</i></li><li>La <b>e</b> suena como en español: <i>selen</i></li><li><b>ë</b> es una vocal neutra (schwa), <b>æ</b> una « e » abierta</li><li>La <b>r</b> es vibrante, la <b>h</b> es aspirada (como una j suave).</li><li>El acento cae en la penúltima sílaba: <i>ha-<u>E</u>-lin</i>.</li></ul>`
  },
  lessons: [
    { title: { fr: 'Bonjour !', es: '¡Hola!' }, words: ['haelin', 'hael', 'gratel', 'postel', 'va:interj', 'ul:interj'],
      s: [
        ['Haelin !', 'Bonjour !', '¡Hola!'],
        ['Hael !', 'Salut !', '¡Hola!'],
        ['Gratel !', 'Merci !', '¡Gracias!'],
        ['Postel !', 'Au revoir !', '¡Adiós!'],
        ['Va, gratel.', 'Oui, merci.', 'Sí, gracias.'],
        ['Ul, gratel.', 'Non, merci.', 'No, gracias.'],
      ] },
    { title: { fr: 'La politesse', es: 'La cortesía' }, words: ['prosel', 'skuzel', 'nulan', 'lenen', 'post', 'grat'],
      s: [
        ['Prosel !', "S'il te plaît ! || S'il vous plaît !", '¡Por favor!'],
        ['Skuzel !', 'Pardon ! || Excuse-moi ! || Excusez-moi !', '¡Perdón! || ¡Disculpa! || ¡Disculpe!'],
        ['Gratel. Nulan.', 'Merci. De rien.', 'Gracias. De nada.'],
        ['Lenen !', 'Bienvenue !', '¡Bienvenido! || ¡Bienvenida! || ¡Bienvenidos!'],
        ['Grat, post !', 'Merci, à bientôt !', '¡Gracias, hasta pronto!'],
        ['Haelin e lenen !', 'Bonjour et bienvenue !', '¡Hola y bienvenido! || ¡Hola y bienvenida!'],
      ] },
    { title: { fr: 'Comment ça va ?', es: '¿Qué tal?' }, words: ['na', 'ta', 'es', 'bona', 'vespel:interj', 'notel:interj', 'e'],
      s: [
        ['Ta es bona ?', 'Comment vas-tu ? || Tu vas bien ? || Ça va ?', '¿Cómo estás? || ¿Estás bien? || ¿Qué tal?'],
        ['Na es bona, gratel.', 'Je vais bien, merci.', 'Estoy bien, gracias.'],
        ['Haelin, ta es bona ?', 'Bonjour, comment vas-tu ? || Bonjour, tu vas bien ?', 'Hola, ¿cómo estás? || Hola, ¿estás bien?'],
        ['Na es bona. E ta ?', 'Je vais bien. Et toi ?', 'Estoy bien. ¿Y tú?'],
        ['Vespel !', 'Bonsoir !', '¡Buenas tardes! || ¡Buenas noches!'],
        ['Notel !', 'Bonne nuit !', '¡Buenas noches!'],
      ] },
    { title: { fr: 'Souhaits et présentations', es: 'Deseos y presentaciones' }, words: ['sorel', 'ganel', 'sanel', 'nomel', 'nair', 'tair', 'ma'],
      s: [
        ['Bona sorel !', 'Bonne chance !', '¡Buena suerte!'],
        ['Bona kared !', 'Bon voyage !', '¡Buen viaje!'],
        ['Bona fenad !', 'Bon appétit !', '¡Buen provecho!'],
        ['Ganel !', 'Félicitations !', '¡Felicidades! || ¡Enhorabuena!'],
        ['Sanel !', 'Santé !', '¡Salud!'],
        ['Ma es tair nomel ?', "Quel est ton nom ? || Comment t'appelles-tu ?", '¿Cuál es tu nombre? || ¿Cómo te llamas?'],
        ['Nair nomel es Lia.', "Mon nom est Lia. || Je m'appelle Lia.", 'Mi nombre es Lia. || Me llamo Lia.'],
      ] },
  ]
},
{
  id: 'u2', icon: '🧑', color: 'green',
  title: { fr: 'Moi, toi, nous', es: 'Yo, tú, nosotros' },
  desc: { fr: 'Les pronoms et le verbe « es » (être)', es: 'Los pronombres y el verbo « es » (ser/estar)' },
  tip: {
    fr: `<p>Les <b>pronoms sujets</b> :</p><table class="gt"><tr><td>na</td><td>je</td><td>nar</td><td>nous</td></tr><tr><td>ta</td><td>tu</td><td>tar</td><td>vous</td></tr><tr><td>se</td><td>il</td><td rowspan="2">ser</td><td rowspan="2">ils / elles</td></tr><tr><td>sa</td><td>elle</td></tr></table>
<p>Le verbe <b>es</b> (être) ne change <u>jamais</u> : <i>na es, ta es, se es, nar es…</i> C'est le pronom qui indique la personne.</p>
<p>Il n'y a <b>pas d'article</b> : <i>dar</i> = « homme », « l'homme » ou « un homme ».</p>
<p>Le <b>pluriel</b> se forme avec <b>-en</b> : <i>ven</i> (ami) → <i>venen</i> (amis).</p>`,
    es: `<p>Los <b>pronombres sujeto</b>:</p><table class="gt"><tr><td>na</td><td>yo</td><td>nar</td><td>nosotros</td></tr><tr><td>ta</td><td>tú</td><td>tar</td><td>vosotros / ustedes</td></tr><tr><td>se</td><td>él</td><td rowspan="2">ser</td><td rowspan="2">ellos / ellas</td></tr><tr><td>sa</td><td>ella</td></tr></table>
<p>El verbo <b>es</b> (ser/estar) <u>nunca</u> cambia: <i>na es, ta es, se es, nar es…</i> Es el pronombre el que indica la persona.</p>
<p><b>No hay artículos</b>: <i>dar</i> = « hombre », « el hombre » o « un hombre ».</p>
<p>El <b>plural</b> se forma con <b>-en</b>: <i>ven</i> (amigo) → <i>venen</i> (amigos).</p>`
  },
  lessons: [
    { title: { fr: 'Je suis, tu es', es: 'Yo soy, tú eres' }, words: ['se:pron', 'sa:pron', 'dar', 'sarna', 'ven', 'vena'],
      s: [
        ['Na es dar.', 'Je suis un homme.', 'Soy un hombre. || Yo soy un hombre.'],
        ['Sa es sarna.', 'Elle est une femme.', 'Ella es una mujer.'],
        ['Ta es ven.', 'Tu es un ami. || Tu es ami.', 'Tú eres un amigo. || Eres un amigo.'],
        ['Sa es vena.', 'Elle est une amie.', 'Ella es una amiga.'],
        ['Se es nair ven.', 'Il est mon ami.', 'Él es mi amigo.'],
        ['Na es tair vena.', 'Je suis ton amie.', 'Soy tu amiga. || Yo soy tu amiga.'],
      ] },
    { title: { fr: 'Nous, vous, ils', es: 'Nosotros, vosotros, ellos' }, words: ['nar', 'tar', 'ser:pron', 'lerar', 'tesar'],
      s: [
        ['Nar es venen.', 'Nous sommes amis. || Nous sommes des amis.', 'Somos amigos. || Nosotros somos amigos.'],
        ['Tar es leraren.', 'Vous êtes des élèves. || Vous êtes élèves.', 'Vosotros sois alumnos. || Ustedes son alumnos. || Sois alumnos.'],
        ['Ser es tesaren.', 'Ils sont enseignants. || Ils sont des enseignants. || Elles sont enseignantes.', 'Ellos son profesores. || Ellas son profesoras. || Son profesores.'],
        ['Na es lerar.', 'Je suis élève. || Je suis un élève. || Je suis une élève.', 'Soy alumno. || Soy un alumno. || Soy alumna.'],
        ['Se es tesar.', 'Il est enseignant. || Il est maître. || Il est professeur.', 'Él es profesor. || Él es maestro.'],
        ['Nar es leraren e ser es tesaren.', 'Nous sommes élèves et ils sont enseignants.', 'Somos alumnos y ellos son profesores.'],
      ] },
    { title: { fr: 'Les métiers du royaume', es: 'Los oficios del reino' }, words: ['aeron', 'aerona', 'varkan', 'helar', 'mazen'],
      s: [
        ['Se es aeron.', 'Il est roi. || Il est le roi.', 'Él es rey. || Él es el rey.'],
        ['Sa es aerona.', 'Elle est reine. || Elle est la reine.', 'Ella es reina. || Ella es la reina.'],
        ['Ta es varkan.', 'Tu es soldat. || Tu es un soldat.', 'Tú eres soldado. || Eres soldado.'],
        ['Ser es helaren.', 'Ils sont guérisseurs. || Elles sont guérisseuses.', 'Ellos son curanderos. || Ellas son curanderas.'],
        ['Na es mazen.', 'Je suis marchand. || Je suis marchande.', 'Soy comerciante. || Yo soy comerciante.'],
        ['Se es varkan e sa es helar.', 'Il est soldat et elle est guérisseuse.', 'Él es soldado y ella es curandera.'],
      ] },
    { title: { fr: 'Qui est-ce ?', es: '¿Quién es?' }, words: ['ka', 'hoia', 'taela'],
      s: [
        ['Ka es se ?', 'Qui est-il ?', '¿Quién es él?'],
        ['Ka es ta ?', 'Qui es-tu ?', '¿Quién eres tú? || ¿Quién eres?'],
        ['Na es Arin.', 'Je suis Arin.', 'Soy Arin. || Yo soy Arin.'],
        ['Hoia es Lia.', "C'est Lia. || Celle-ci est Lia.", 'Esta es Lia.'],
        ['Taela es aeron.', 'Celui-là est le roi. || Celui-là est roi.', 'Aquel es el rey. || Ese es el rey.'],
        ['Ka es taela ?', 'Qui est celui-là ?', '¿Quién es ese? || ¿Quién es aquel?'],
      ] },
  ]
},
{
  id: 'u3', icon: '👨‍👩‍👧', color: 'orange',
  title: { fr: 'La famille', es: 'La familia' },
  desc: { fr: 'Parents, enfants et possessifs', es: 'Padres, hijos y posesivos' },
  tip: {
    fr: `<p>Les <b>possessifs</b> se placent devant le nom et ne s'accordent pas :</p><table class="gt"><tr><td>nair</td><td>mon, ma, mes</td><td>narir</td><td>notre, nos</td></tr><tr><td>tair</td><td>ton, ta, tes</td><td>tarir</td><td>votre, vos</td></tr><tr><td>seir</td><td>son, sa (à lui)</td><td rowspan="2">serir</td><td rowspan="2">leur, leurs</td></tr><tr><td>sair</td><td>son, sa (à elle)</td></tr></table>
<p>Les <b>pronoms objets</b> : <b>nam</b> (me), <b>tam</b> (te), <b>sem</b> (le), <b>sam</b> (la). Ils se placent <u>après</u> le verbe : <i>Na ela tam</i> = Je t'aime.</p>
<p>Un nom complément d'objet prend <b>-m</b> : <i>Nar ela narir familam</i> = Nous aimons notre famille.</p>`,
    es: `<p>Los <b>posesivos</b> van delante del nombre y no concuerdan:</p><table class="gt"><tr><td>nair</td><td>mi, mis</td><td>narir</td><td>nuestro/a</td></tr><tr><td>tair</td><td>tu, tus</td><td>tarir</td><td>vuestro/a</td></tr><tr><td>seir</td><td>su (de él)</td><td rowspan="2">serir</td><td rowspan="2">su (de ellos)</td></tr><tr><td>sair</td><td>su (de ella)</td></tr></table>
<p>Los <b>pronombres objeto</b>: <b>nam</b> (me), <b>tam</b> (te), <b>sem</b> (lo), <b>sam</b> (la). Van <u>después</u> del verbo: <i>Na ela tam</i> = Te quiero.</p>
<p>Un nombre complemento directo lleva <b>-m</b>: <i>Nar ela narir familam</i> = Queremos a nuestra familia.</p>`
  },
  lessons: [
    { title: { fr: 'Papa et maman', es: 'Papá y mamá' }, words: ['farel:n', 'sarel', 'brael', 'sirel'],
      s: [
        ['Hoia es nair farel.', "C'est mon père. || Celui-ci est mon père.", 'Este es mi padre.'],
        ['Hoia es nair sarel.', "C'est ma mère. || Celle-ci est ma mère.", 'Esta es mi madre.'],
        ['Se es tair brael.', 'Il est ton frère.', 'Él es tu hermano.'],
        ['Sa es nair sirel.', 'Elle est ma sœur.', 'Ella es mi hermana.'],
        ['Nair farel e nair sarel', 'Mon père et ma mère', 'Mi padre y mi madre'],
        ['Na es tair brael.', 'Je suis ton frère.', 'Soy tu hermano. || Yo soy tu hermano.'],
      ] },
    { title: { fr: 'Les enfants', es: 'Los hijos' }, words: ['narel', 'filen', 'filena', 'bebel', 'seir', 'sair'],
      s: [
        ['Se es seir filen.', 'Il est son fils.', 'Él es su hijo.'],
        ['Sa es sair filena.', 'Elle est sa fille.', 'Ella es su hija.'],
        ['Hoia es nair bebel.', "C'est mon bébé. || Celui-ci est mon bébé.", 'Este es mi bebé.'],
        ['Narel es seir brael.', "L'enfant est son frère.", 'El niño es su hermano.'],
        ['Sa es tair filena.', 'Elle est ta fille.', 'Ella es tu hija.'],
        ['Narelen es filenen.', 'Les enfants sont des fils. || Les enfants sont fils.', 'Los niños son hijos.'],
      ] },
    { title: { fr: 'Toute la famille', es: 'Toda la familia' }, words: ['grandar', 'grandas', 'oncar', 'tantar', 'kuzen', 'narir', 'tarir', 'serir'],
      s: [
        ['Grandar e grandas', 'Grand-père et grand-mère', 'Abuelo y abuela'],
        ['Hoia es narir grandas.', "C'est notre grand-mère.", 'Esta es nuestra abuela.'],
        ['Se es tarir oncar.', 'Il est votre oncle.', 'Él es vuestro tío. || Él es su tío.'],
        ['Sa es serir tantar.', 'Elle est leur tante.', 'Ella es su tía.'],
        ['Ser es nair kuzenen.', 'Ils sont mes cousins.', 'Ellos son mis primos.'],
        ['Narir famila', 'Notre famille', 'Nuestra familia'],
      ] },
    { title: { fr: 'Je t\'aime', es: 'Te quiero' }, words: ['ela', 'nam', 'tam', 'sem', 'sam', 'famila'],
      s: [
        ['Na ela tam.', "Je t'aime.", 'Te quiero. || Te amo.'],
        ['Ta ela nam.', "Tu m'aimes.", 'Me quieres. || Me amas. || Tú me quieres.'],
        ['Sa ela sem.', "Elle l'aime.", 'Ella lo quiere. || Ella lo ama.'],
        ['Se ela sam.', "Il l'aime.", 'Él la quiere. || Él la ama.'],
        ['Nar ela narir familam.', 'Nous aimons notre famille.', 'Queremos a nuestra familia. || Amamos a nuestra familia.'],
        ['Nair sarel ela nam.', "Ma mère m'aime.", 'Mi madre me quiere. || Mi madre me ama.'],
      ] },
  ]
},
{
  id: 'u4', icon: '🗣️', color: 'blue',
  title: { fr: 'Premiers verbes', es: 'Primeros verbos' },
  desc: { fr: 'Le présent et l\'objet direct en -m', es: 'El presente y el objeto directo en -m' },
  tip: {
    fr: `<p>Au <b>présent</b>, le verbe garde sa <b>racine</b> et ne se conjugue pas : <i>na var</i> (je parle), <i>ser var</i> (ils parlent).</p>
<p>L'ordre de la phrase est <b>Sujet → Verbe → Objet</b>.</p>
<p>Le <b>complément d'objet direct</b> prend le suffixe <b>-m</b> (accusatif) :</p><ul><li><i>Na mir <b>darm</b></i> = Je vois l'homme.</li><li><i>Sa tez <b>tezanm</b></i> = Elle écrit une lettre.</li></ul>
<p>Au pluriel, on empile : nombre puis cas → <i>lison<b>en</b><b>m</b></i> (des livres, objet).</p>`,
    es: `<p>En <b>presente</b>, el verbo conserva su <b>raíz</b> y no se conjuga: <i>na var</i> (hablo), <i>ser var</i> (ellos hablan).</p>
<p>El orden de la frase es <b>Sujeto → Verbo → Objeto</b>.</p>
<p>El <b>complemento directo</b> lleva el sufijo <b>-m</b> (acusativo):</p><ul><li><i>Na mir <b>darm</b></i> = Veo al hombre.</li><li><i>Sa tez <b>tezanm</b></i> = Ella escribe una carta.</li></ul>
<p>En plural se apilan: número y luego caso → <i>lison<b>en</b><b>m</b></i> (libros, objeto).</p>`
  },
  lessons: [
    { title: { fr: 'Parler et écouter', es: 'Hablar y escuchar' }, words: ['var', 'mir', 'az', 'kan'],
      s: [
        ['Na var.', 'Je parle.', 'Hablo. || Yo hablo.'],
        ['Ta mir.', 'Tu vois. || Tu regardes.', 'Ves. || Tú ves. || Miras.'],
        ['Se az.', 'Il écoute.', 'Él escucha.'],
        ['Sa kan.', 'Elle comprend.', 'Ella entiende. || Ella comprende.'],
        ['Nar var e ser az.', 'Nous parlons et ils écoutent.', 'Hablamos y ellos escuchan. || Nosotros hablamos y ellos escuchan.'],
        ['Tar kan.', 'Vous comprenez.', 'Vosotros entendéis. || Ustedes entienden. || Entendéis.'],
      ] },
    { title: { fr: "L'objet direct -m", es: 'El objeto directo -m' }, words: ['ler', 'vaelrën', 'lingel'],
      s: [
        ['Na mir darm.', "Je vois l'homme. || Je vois un homme.", 'Veo al hombre. || Veo a un hombre.'],
        ['Sa mir sair sarelm.', 'Elle voit sa mère.', 'Ella ve a su madre.'],
        ['Ta var vaelrënm.', 'Tu parles vaelrën. || Tu parles le vaelrën.', 'Hablas vaelrën. || Tú hablas vaelrën.'],
        ['Na kan tam.', 'Je te comprends.', 'Te entiendo. || Te comprendo.'],
        ['Se az nair farelm.', 'Il écoute mon père.', 'Él escucha a mi padre.'],
        ['Nar ler vaelrënm.', 'Nous apprenons le vaelrën. || Nous apprenons vaelrën.', 'Aprendemos vaelrën. || Nosotros aprendemos vaelrën.'],
      ] },
    { title: { fr: 'Lire et écrire', es: 'Leer y escribir' }, words: ['lis', 'tez', 'lison', 'tezan'],
      s: [
        ['Na lis lisonm.', 'Je lis un livre. || Je lis le livre.', 'Leo un libro. || Leo el libro.'],
        ['Sa tez tezanm.', 'Elle écrit une lettre.', 'Ella escribe una carta.'],
        ['Ta lis nair tezanm.', 'Tu lis ma lettre.', 'Lees mi carta. || Tú lees mi carta.'],
        ['Se tez lisonm.', 'Il écrit un livre.', 'Él escribe un libro.'],
        ['Ser lis e nar tez.', 'Ils lisent et nous écrivons.', 'Ellos leen y nosotros escribimos.'],
        ['Na lis lisonenm.', 'Je lis des livres.', 'Leo libros.'],
      ] },
    { title: { fr: 'Chanter, courir, dormir', es: 'Cantar, correr, dormir' }, words: ['nol', 'pael', 'zon', 'sul', 'nir', 'dol', 'kanel'],
      s: [
        ['Sa nol kanelm.', 'Elle chante une chanson.', 'Ella canta una canción.'],
        ['Narel zon.', "L'enfant court.", 'El niño corre. || La niña corre.'],
        ['Na pael e ta zon.', 'Je marche et tu cours.', 'Camino y tú corres. || Yo camino y tú corres.'],
        ['Bebel sul.', 'Le bébé dort.', 'El bebé duerme.'],
        ['Ser nir.', 'Ils rient. || Elles rient.', 'Ellos ríen. || Ellas ríen. || Ellos se ríen.'],
        ['Narel dol.', "L'enfant pleure.", 'El niño llora. || La niña llora.'],
      ] },
  ]
},
{
  id: 'u5', icon: '🍞', color: 'red',
  title: { fr: 'À table !', es: '¡A la mesa!' },
  desc: { fr: 'Nourriture et boissons', es: 'Comida y bebidas' },
  tip: {
    fr: `<p>Les verbes <b>fen</b> (manger) et <b>bir</b> (boire) prennent un objet en <b>-m</b> :</p><ul><li><i>Na fen panel<b>m</b></i> = Je mange du pain.</li><li><i>Ta bir nael<b>m</b></i> = Tu bois de l'eau.</li></ul>
<p>Le Vaelrën n'a pas de partitif : « du », « de la », « des » se traduisent simplement par le nom.</p>
<p>L'<b>adjectif</b> suit le nom et ne s'accorde pas : <i>supel sala</i> (soupe salée). Pour dire « le repas est bon » : <i>Fenad es bona.</i></p>`,
    es: `<p>Los verbos <b>fen</b> (comer) y <b>bir</b> (beber) llevan un objeto en <b>-m</b>:</p><ul><li><i>Na fen panel<b>m</b></i> = Como pan.</li><li><i>Ta bir nael<b>m</b></i> = Bebes agua.</li></ul>
<p>El <b>adjetivo</b> va después del nombre y no concuerda: <i>supel sala</i> (sopa salada). Para decir « la comida es buena »: <i>Fenad es bona.</i></p>`
  },
  lessons: [
    { title: { fr: 'Manger et boire', es: 'Comer y beber' }, words: ['fen', 'bir', 'panel', 'nael', 'velon', 'latel'],
      s: [
        ['Na fen panelm.', 'Je mange du pain. || Je mange le pain.', 'Como pan. || Yo como pan.'],
        ['Ta bir naelm.', "Tu bois de l'eau.", 'Bebes agua. || Tú bebes agua.'],
        ['Narel bir latelm.', "L'enfant boit du lait.", 'El niño bebe leche. || La niña bebe leche.'],
        ['Sa fen velonm.', 'Elle mange un fruit.', 'Ella come una fruta.'],
        ['Nar fen panelm e nar bir naelm.', "Nous mangeons du pain et nous buvons de l'eau.", 'Comemos pan y bebemos agua.'],
        ['Ser fen velonenm.', 'Ils mangent des fruits.', 'Ellos comen frutas.'],
      ] },
    { title: { fr: 'Le repas', es: 'La comida' }, words: ['mesel', 'hiren', 'ovel', 'fromel', 'supel', 'fenad'],
      s: [
        ['Se fen meselm.', 'Il mange de la viande.', 'Él come carne.'],
        ['Sa fen hirenm.', 'Elle mange du poisson.', 'Ella come pescado.'],
        ['Ta fen ovelm.', 'Tu manges un œuf.', 'Comes un huevo. || Tú comes un huevo.'],
        ['Nar fen supelm.', 'Nous mangeons de la soupe.', 'Comemos sopa.'],
        ['Fenad es bona.', 'Le repas est bon.', 'La comida es buena. || La comida está buena.'],
        ['Fromel es bona.', 'Le fromage est bon.', 'El queso es bueno. || El queso está bueno.'],
      ] },
    { title: { fr: 'Saveurs', es: 'Sabores' }, words: ['vinel', 'kafel', 'pomel', 'gatel', 'dulca', 'sala', 'verdel'],
      s: [
        ['Dar bir vinelm.', "L'homme boit du vin.", 'El hombre bebe vino.'],
        ['Sarna bir kafelm.', 'La femme boit du café.', 'La mujer bebe café.'],
        ['Na fen pomelm.', 'Je mange une pomme.', 'Como una manzana.'],
        ['Gatel es dulca.', 'Le gâteau est sucré.', 'El pastel es dulce. || El pastel está dulce.'],
        ['Supel es sala.', 'La soupe est salée.', 'La sopa está salada. || La sopa es salada.'],
        ['Ser fen verdelenm.', 'Ils mangent des légumes.', 'Ellos comen verduras.'],
      ] },
    { title: { fr: 'En cuisine', es: 'En la cocina' }, words: ['kuzinav', 'kuzinar', 'fenor', 'biren', 'varma', 'kalda'],
      s: [
        ['Nair sarel kuzinav supelm.', 'Ma mère cuisine une soupe. || Ma mère prépare une soupe.', 'Mi madre cocina una sopa. || Mi madre prepara una sopa.'],
        ['Kuzinar es en fenor.', 'Le cuisinier est au restaurant. || Le cuisinier est dans le restaurant.', 'El cocinero está en el restaurante.'],
        ['Na kuzinav e ta fen.', 'Je cuisine et tu manges.', 'Yo cocino y tú comes. || Cocino y tú comes.'],
        ['Biren es varma.', 'La boisson est chaude.', 'La bebida está caliente.'],
        ['Nael es kalda.', "L'eau est froide.", 'El agua está fría.'],
        ['Bona fenad !', 'Bon appétit !', '¡Buen provecho!'],
      ] },
  ]
},
{
  id: 'u6', icon: '❓', color: 'violet',
  title: { fr: 'Non ? Pourquoi ?', es: '¿No? ¿Por qué?' },
  desc: { fr: 'Négation et questions', es: 'Negación y preguntas' },
  tip: {
    fr: `<p>La <b>négation</b> <b>ul</b> se place <u>devant</u> le verbe : <i>Na <b>ul</b> var</i> = Je ne parle pas. « Rien » se dit <b>nul</b> : <i>Na mir nul</i> = Je ne vois rien.</p>
<p>Pour une <b>question fermée</b> (oui/non), on ajoute <b>ae</b> à la fin : <i>Ta var ae ?</i> = Parles-tu ? On répond <b>va</b> (oui) ou <b>ul</b> (non).</p>
<p>Les <b>mots interrogatifs</b> se placent en tête :</p><table class="gt"><tr><td>ka</td><td>qui</td><td>ren</td><td>quand</td></tr><tr><td>ma</td><td>quoi</td><td>sha</td><td>pourquoi</td></tr><tr><td>tor</td><td>où</td><td>vel</td><td>comment</td></tr><tr><td>dai</td><td>combien</td><td></td><td></td></tr></table>`,
    es: `<p>La <b>negación</b> <b>ul</b> va <u>delante</u> del verbo: <i>Na <b>ul</b> var</i> = No hablo. « Nada » se dice <b>nul</b>: <i>Na mir nul</i> = No veo nada.</p>
<p>Para una <b>pregunta cerrada</b> (sí/no), se añade <b>ae</b> al final: <i>Ta var ae ?</i> = ¿Hablas? Se responde <b>va</b> (sí) o <b>ul</b> (no).</p>
<p>Las <b>palabras interrogativas</b> van al principio:</p><table class="gt"><tr><td>ka</td><td>quién</td><td>ren</td><td>cuándo</td></tr><tr><td>ma</td><td>qué</td><td>sha</td><td>por qué</td></tr><tr><td>tor</td><td>dónde</td><td>vel</td><td>cómo</td></tr><tr><td>dai</td><td>cuánto</td><td></td><td></td></tr></table>`
  },
  lessons: [
    { title: { fr: 'Ne… pas', es: 'No…' }, words: ['ul', 'nul', 'sika'],
      s: [
        ['Na ul var.', 'Je ne parle pas.', 'No hablo. || Yo no hablo.'],
        ['Se ul fen meselm.', 'Il ne mange pas de viande.', 'Él no come carne.'],
        ['Ta ul kan.', 'Tu ne comprends pas.', 'No entiendes. || Tú no entiendes.'],
        ['Nar ul bir vinelm.', 'Nous ne buvons pas de vin.', 'No bebemos vino.'],
        ['Sa ul es sika.', "Elle n'est pas malade.", 'Ella no está enferma.'],
        ['Na mir nul.', 'Je ne vois rien.', 'No veo nada.'],
      ] },
    { title: { fr: 'Oui ou non ?', es: '¿Sí o no?' }, words: ['ae', 'va:interj', 'ul:interj'],
      s: [
        ['Ta var vaelrënm ae ?', 'Parles-tu vaelrën ? || Tu parles vaelrën ?', '¿Hablas vaelrën?'],
        ['Va, na var vaelrënm.', 'Oui, je parle vaelrën.', 'Sí, hablo vaelrën.'],
        ['Ul, na ul var vaelrënm.', 'Non, je ne parle pas vaelrën.', 'No, no hablo vaelrën.'],
        ['Se es tair brael ae ?', 'Est-il ton frère ? || Il est ton frère ?', '¿Es él tu hermano? || ¿Es tu hermano?'],
        ['Ta kan ae ?', 'Tu comprends ? || Comprends-tu ?', '¿Entiendes?'],
        ['Sa fen hirenm ae ?', 'Mange-t-elle du poisson ? || Elle mange du poisson ?', '¿Ella come pescado? || ¿Come pescado?'],
      ] },
    { title: { fr: 'Qui ? Quoi ? Où ?', es: '¿Quién? ¿Qué? ¿Dónde?' }, words: ['ka', 'ma', 'tor', 'vel:v'],
      s: [
        ['Ka var ?', 'Qui parle ?', '¿Quién habla?'],
        ['Ma ta fen ?', "Que manges-tu ? || Qu'est-ce que tu manges ?", '¿Qué comes?'],
        ['Tor ta vel ?', 'Où vas-tu ? || Tu vas où ?', '¿Adónde vas? || ¿Dónde vas?'],
        ['Tor es nair lison ?', 'Où est mon livre ?', '¿Dónde está mi libro?'],
        ['Ma se lis ?', "Que lit-il ? || Qu'est-ce qu'il lit ?", '¿Qué lee él? || ¿Qué lee?'],
        ['Tor es tair sarel ?', 'Où est ta mère ?', '¿Dónde está tu madre?'],
      ] },
    { title: { fr: 'Quand ? Pourquoi ? Comment ?', es: '¿Cuándo? ¿Por qué? ¿Cómo?' }, words: ['ren:interr', 'sha', 'vel:interr', 'dai', 'vokan', 'sen', 'len', 'kos'],
      s: [
        ['Ren ta len ?', 'Quand viens-tu ? || Tu viens quand ?', '¿Cuándo vienes?'],
        ['Sha ta dol ?', 'Pourquoi pleures-tu ? || Pourquoi tu pleures ?', '¿Por qué lloras?'],
        ['Vel ta vokan sen ?', "Comment t'appelles-tu ? || Comment tu t'appelles ?", '¿Cómo te llamas?'],
        ['Na vokan sen Arin.', "Je m'appelle Arin.", 'Me llamo Arin.'],
        ['Panel kos dai ? || Panel kosel dai ?', 'Combien coûte le pain ?', '¿Cuánto cuesta el pan?'],
        ['Sha ta nir ?', 'Pourquoi ris-tu ? || Pourquoi tu ris ?', '¿Por qué te ríes? || ¿Por qué ríes?'],
      ] },
  ]
},
{
  id: 'u7', icon: '🌄', color: 'green',
  title: { fr: 'La nature', es: 'La naturaleza' },
  desc: { fr: 'Ciel, terre, eau et météo', es: 'Cielo, tierra, agua y clima' },
  tip: {
    fr: `<p>Pour situer quelque chose, on utilise la préposition <b>en</b> (dans, à, sur) : <i>Arbel es <b>en</b> fores</i> = L'arbre est dans la forêt.</p>
<p>Avec un adjectif, <b>es</b> peut être omis en style poétique : <i>Aer selen</i> = Le ciel (est) lumineux.</p>
<p>Le Vaelrën aime les <b>composés</b> : <i>aer</i> (ciel) + <i>dor</i> → <i>aerdor</i> (royaume) ; <i>thal</i> + <i>mor</i> → <i>thalmor</i> (océan).</p>`,
    es: `<p>Para situar algo, se usa la preposición <b>en</b>: <i>Arbel es <b>en</b> fores</i> = El árbol está en el bosque.</p>
<p>Con un adjetivo, <b>es</b> puede omitirse en estilo poético: <i>Aer selen</i> = El cielo (es) luminoso.</p>
<p>Al vaelrën le encantan los <b>compuestos</b>: <i>aer</i> (cielo) + <i>dor</i> → <i>aerdor</i> (reino); <i>thal</i> + <i>mor</i> → <i>thalmor</i> (océano).</p>`
  },
  lessons: [
    { title: { fr: 'Le ciel', es: 'El cielo' }, words: ['sol', 'luen', 'stel', 'aer', 'sel', 'azor', 'selen:adj'],
      s: [
        ['Sol azor.', 'Le soleil brille.', 'El sol brilla.'],
        ['Na mir luenm.', 'Je vois la lune.', 'Veo la luna.'],
        ['Stelen azor en aer.', 'Les étoiles brillent dans le ciel.', 'Las estrellas brillan en el cielo.'],
        ['Aer es selen. || Aer selen.', 'Le ciel est lumineux. || Le ciel est clair.', 'El cielo es luminoso. || El cielo está claro.'],
        ['Sel es bela.', 'La lumière est belle.', 'La luz es bonita. || La luz es hermosa.'],
        ['Sol e luen', 'Le soleil et la lune', 'El sol y la luna'],
      ] },
    { title: { fr: 'Paysages', es: 'Paisajes' }, words: ['ondar', 'silen', 'fores', 'thalmor', 'arbel', 'florel', 'lakel', 'marel'],
      s: [
        ['Ondar es alta.', 'La montagne est haute.', 'La montaña es alta.'],
        ['Silen es lonja.', 'La rivière est longue.', 'El río es largo.'],
        ['Fores es thala.', 'La forêt est grande.', 'El bosque es grande.'],
        ['Na mir thalmorm.', "Je vois l'océan.", 'Veo el océano.'],
        ['Arbel es en fores.', "L'arbre est dans la forêt.", 'El árbol está en el bosque.'],
        ['Sa ela florelenm.', 'Elle aime les fleurs.', 'Ella ama las flores. || A ella le gustan las flores.'],
      ] },
    { title: { fr: 'Le temps qu\'il fait', es: 'El tiempo que hace' }, words: ['helan', 'neval', 'torel', 'nubel', 'fogel', 'firen', 'fael'],
      s: [
        ['Helan fael.', 'La pluie tombe. || Il pleut.', 'Cae la lluvia. || La lluvia cae. || Llueve.'],
        ['Neval es selana.', 'La neige est blanche.', 'La nieve es blanca.'],
        ['Torel es kalda.', 'Le vent est froid.', 'El viento es frío.'],
        ['Nubelen es en aer.', 'Les nuages sont dans le ciel.', 'Las nubes están en el cielo.'],
        ['Fogel es varma.', 'Le feu est chaud.', 'El fuego está caliente.'],
        ['Na mir firenm.', 'Je vois la flamme.', 'Veo la llama.'],
      ] },
    { title: { fr: 'Orage et arc-en-ciel', es: 'Tormenta y arcoíris' }, words: ['tonel', 'eklarel', 'arkolen', 'klimel', 'saizel', 'hoi'],
      s: [
        ['Na az tonelm.', "J'écoute le tonnerre. || J'entends le tonnerre.", 'Escucho el trueno. || Oigo el trueno.'],
        ['Arkolen es bela.', "L'arc-en-ciel est beau.", 'El arcoíris es bonito. || El arcoíris es hermoso.'],
        ['Eklarel es en aer.', "L'éclair est dans le ciel.", 'El relámpago está en el cielo.'],
        ['Klimel es varma hoi.', 'Le climat est chaud ici.', 'El clima es cálido aquí. || El clima es caliente aquí.'],
        ['Saizel nova', 'Une nouvelle saison || La nouvelle saison', 'Una nueva estación || Una estación nueva'],
      ] },
  ]
},
{
  id: 'u8', icon: '🎨', color: 'orange',
  title: { fr: 'Décrire le monde', es: 'Describir el mundo' },
  desc: { fr: 'Adjectifs et couleurs', es: 'Adjetivos y colores' },
  tip: {
    fr: `<p>L'<b>adjectif</b> se place <u>après</u> le nom et ne s'accorde jamais (ni genre, ni nombre) : <i>dom thala</i> (une grande maison), <i>domen thala</i> (de grandes maisons).</p>
<p>La plupart des adjectifs se terminent en <b>-a</b> : <i>vaela</i> (fort), <i>bela</i> (beau), <i>varana</i> (rouge).</p>
<p><b>tre</b> (très) se place devant l'adjectif : <i>tre thala</i> = très grand.</p>`,
    es: `<p>El <b>adjetivo</b> va <u>después</u> del nombre y nunca concuerda (ni género ni número): <i>dom thala</i> (una casa grande), <i>domen thala</i> (casas grandes).</p>
<p>La mayoría de los adjetivos terminan en <b>-a</b>: <i>vaela</i> (fuerte), <i>bela</i> (bonito), <i>varana</i> (rojo).</p>
<p><b>tre</b> (muy) va delante del adjetivo: <i>tre thala</i> = muy grande.</p>`
  },
  lessons: [
    { title: { fr: 'Grand et petit', es: 'Grande y pequeño' }, words: ['thala:adj', 'pila', 'bela', 'graza', 'bona', 'mala', 'dom'],
      s: [
        ['Dom thala', 'Une grande maison || La grande maison', 'Una casa grande || La casa grande'],
        ['Kanen pila', 'Un petit chien || Le petit chien', 'Un perro pequeño || El perro pequeño'],
        ['Dar bona', 'Un homme bon || Un bon homme', 'Un hombre bueno || Un buen hombre'],
        ['Nair dom es pila.', 'Ma maison est petite.', 'Mi casa es pequeña.'],
        ['Vazir es graza.', 'Le dragon est laid.', 'El dragón es feo.'],
        ['Tair sirel es bela.', 'Ta sœur est belle.', 'Tu hermana es guapa. || Tu hermana es bonita.'],
      ] },
    { title: { fr: 'Vieux et jeune', es: 'Viejo y joven' }, words: ['vetha', 'yuna', 'nova', 'vaela', 'aiva', 'sova'],
      s: [
        ['Grandar es vetha.', 'Grand-père est vieux. || Le grand-père est vieux.', 'El abuelo es viejo.'],
        ['Narel es yuna.', "L'enfant est jeune.", 'El niño es joven.'],
        ['Lison nova', 'Un nouveau livre || Un livre nouveau', 'Un libro nuevo || Un nuevo libro'],
        ['Varkan es vaela.', 'Le soldat est fort.', 'El soldado es fuerte.'],
        ['Ferel es aiva.', 'Le cheval est rapide.', 'El caballo es rápido.'],
        ['Tortel es sova.', 'La tortue est lente.', 'La tortuga es lenta.'],
      ] },
    { title: { fr: 'Les couleurs', es: 'Los colores' }, words: ['varana', 'zurena', 'solana', 'elyna', 'morena', 'selana'],
      s: [
        ['Aer es zurena.', 'Le ciel est bleu.', 'El cielo es azul.'],
        ['Florel varana', 'Une fleur rouge || La fleur rouge', 'Una flor roja || La flor roja'],
        ['Sol es solana.', 'Le soleil est jaune.', 'El sol es amarillo.'],
        ['Herbel es elyna.', "L'herbe est verte.", 'La hierba es verde.'],
        ['Milen morena', 'Un chat noir || Le chat noir', 'Un gato negro || El gato negro'],
        ['Nair kamisel es selana.', 'Ma chemise est blanche.', 'Mi camisa es blanca.'],
      ] },
    { title: { fr: 'Très coloré', es: 'Muy colorido' }, words: ['heshena', 'orenja', 'rozena', 'brunela', 'kolorel', 'tre'],
      s: [
        ['Orsel es brunela.', "L'ours est marron.", 'El oso es marrón.'],
        ['Lupen es heshena.', 'Le loup est gris.', 'El lobo es gris.'],
        ['Velon es orenja.', 'Le fruit est orange.', 'La fruta es naranja.'],
        ['Florel es tre rozena.', 'La fleur est très rose.', 'La flor es muy rosa.'],
        ['Dom es tre thala.', 'La maison est très grande.', 'La casa es muy grande.'],
        ['Vazir es tre vaela.', 'Le dragon est très fort.', 'El dragón es muy fuerte.'],
      ] },
  ]
},
{
  id: 'u9', icon: '⏳', color: 'blue',
  title: { fr: 'Hier', es: 'Ayer' },
  desc: { fr: 'Le passé avec « ra »', es: 'El pasado con « ra »' },
  tip: {
    fr: `<p>Pour le <b>passé</b>, on place la particule <b>ra</b> devant le verbe. Le verbe ne change pas !</p><ul><li><i>Na var</i> = je parle → <i>Na <b>ra</b> var</i> = j'ai parlé / je parlais</li><li><i>Se <b>ra</b> es aeron</i> = il était roi</li></ul>
<p>À la forme négative, <b>ul</b> vient <u>avant</u> <b>ra</b> : <i>Na <b>ul ra</b> var</i> = Je n'ai pas parlé.</p>
<p>« Hier » se dit <b>ren-ra</b> (et « demain » <b>ren-va</b>).</p>`,
    es: `<p>Para el <b>pasado</b>, se coloca la partícula <b>ra</b> delante del verbo. ¡El verbo no cambia!</p><ul><li><i>Na var</i> = hablo → <i>Na <b>ra</b> var</i> = hablé / hablaba / he hablado</li><li><i>Se <b>ra</b> es aeron</i> = él era rey</li></ul>
<p>En negativo, <b>ul</b> va <u>antes</u> de <b>ra</b>: <i>Na <b>ul ra</b> var</i> = No hablé.</p>
<p>« Ayer » se dice <b>ren-ra</b> (y « mañana » <b>ren-va</b>).</p>`
  },
  lessons: [
    { title: { fr: "J'ai parlé", es: 'Hablé' }, words: ['ra'],
      s: [
        ['Na ra var.', "J'ai parlé. || Je parlais.", 'Hablé. || Yo hablé. || He hablado. || Hablaba.'],
        ['Ta ra fen.', 'Tu as mangé. || Tu mangeais.', 'Comiste. || Has comido. || Tú comiste.'],
        ['Se ra mir darm.', "Il a vu l'homme.", 'Él vio al hombre. || Él ha visto al hombre.'],
        ['Sa ra bir naelm.', "Elle a bu de l'eau.", 'Ella bebió agua. || Ella ha bebido agua.'],
        ['Nar ra nol.', 'Nous avons chanté. || Nous chantions.', 'Cantamos. || Hemos cantado. || Nosotros cantamos.'],
        ['Ser ra nir.', 'Ils ont ri. || Elles ont ri.', 'Ellos rieron. || Ellos se rieron. || Ellos han reído.'],
      ] },
    { title: { fr: 'Trouvé, perdu', es: 'Encontrado, perdido' }, words: ['kir', 'haz', 'hil', 'klavel', 'sakel', 'kared', 'kanen'],
      s: [
        ['Na ra vel.', 'Je suis allé. || Je suis allée. || Je suis parti. || Je suis partie.', 'Fui. || Me fui. || Yo fui.'],
        ['Se ra len.', 'Il est venu.', 'Él vino. || Él ha venido.'],
        ['Sa ra kir sair klavelm.', 'Elle a trouvé sa clé.', 'Ella encontró su llave. || Ella ha encontrado su llave.'],
        ['Na ra haz nair sakelm.', "J'ai perdu mon sac.", 'Perdí mi bolsa. || He perdido mi bolsa.'],
        ['Ser ra hil kanenm.', 'Ils ont cherché le chien.', 'Ellos buscaron al perro.'],
        ['Nar ra haz karedm.', 'Nous avons perdu le chemin.', 'Perdimos el camino. || Hemos perdido el camino.'],
      ] },
    { title: { fr: 'Il était une fois', es: 'Érase una vez' }, words: ['drek', 'varkan'],
      s: [
        ['Se ra es aeron.', 'Il était roi. || Il a été roi.', 'Él era rey. || Él fue rey.'],
        ['Na ul ra var.', "Je n'ai pas parlé.", 'No hablé. || No he hablado. || Yo no hablé.'],
        ['Ta ul ra kan.', "Tu n'as pas compris.", 'No entendiste. || No has entendido.'],
        ['Sa ra es tre yuna.', 'Elle était très jeune.', 'Ella era muy joven.'],
        ['Varkanen ra drek.', 'Les soldats ont combattu.', 'Los soldados combatieron. || Los soldados lucharon.'],
        ['Ta ra fen ae ?', 'As-tu mangé ? || Tu as mangé ?', '¿Has comido? || ¿Comiste?'],
      ] },
    { title: { fr: 'Hier', es: 'Ayer' }, words: ['ren-ra', 'for', 'gen', 'narad'],
      s: [
        ['Ren-ra, na ra ler vaelrënm.', "Hier, j'ai appris le vaelrën. || Hier, j'ai appris vaelrën.", 'Ayer aprendí vaelrën. || Ayer, aprendí vaelrën.'],
        ['Na ra for tair nomelm.', "J'ai oublié ton nom.", 'Olvidé tu nombre. || He olvidado tu nombre.'],
        ['Se ra gen en narad.', 'Il est né dans un village. || Il est né au village.', 'Él nació en un pueblo. || Nació en un pueblo.'],
        ['Ren-ra, helan ra fael.', 'Hier, la pluie est tombée. || Hier, il a plu.', 'Ayer cayó la lluvia. || Ayer llovió.'],
        ['Sa ra tez tezanm ren-ra.', 'Elle a écrit une lettre hier.', 'Ella escribió una carta ayer.'],
      ] },
  ]
},
{
  id: 'u10', icon: '📅', color: 'red',
  title: { fr: 'Demain', es: 'Mañana' },
  desc: { fr: 'Futur « va », conditionnel « ei » et calendrier', es: 'Futuro « va », condicional « ei » y calendario' },
  tip: {
    fr: `<p>Les particules de temps se placent toutes <b>devant le verbe</b> :</p><table class="gt"><tr><td><b>ra</b></td><td>passé</td><td>na ra var</td><td>j'ai parlé</td></tr><tr><td><b>va</b></td><td>futur</td><td>na va var</td><td>je parlerai</td></tr><tr><td><b>ei</b></td><td>conditionnel</td><td>na ei var</td><td>je parlerais</td></tr></table>
<p>Ordre complet : <b>PRONOM + ul + PARTICULE + VERBE</b> → <i>Ser ul va len</i> = Ils ne viendront pas.</p>
<p>Les <b>jours</b> se forment avec un nombre + <i>sol</i> (soleil) : <i>unasol</i> (lundi), <i>duasol</i> (mardi)… <i>sepasol</i> (dimanche).</p>`,
    es: `<p>Las partículas de tiempo van todas <b>delante del verbo</b>:</p><table class="gt"><tr><td><b>ra</b></td><td>pasado</td><td>na ra var</td><td>hablé</td></tr><tr><td><b>va</b></td><td>futuro</td><td>na va var</td><td>hablaré</td></tr><tr><td><b>ei</b></td><td>condicional</td><td>na ei var</td><td>hablaría</td></tr></table>
<p>Orden completo: <b>PRONOMBRE + ul + PARTÍCULA + VERBO</b> → <i>Ser ul va len</i> = Ellos no vendrán.</p>
<p>Los <b>días</b> se forman con un número + <i>sol</i>: <i>unasol</i> (lunes), <i>duasol</i> (martes)… <i>sepasol</i> (domingo).</p>`
  },
  lessons: [
    { title: { fr: 'Je parlerai', es: 'Hablaré' }, words: ['va:part', 'ren-va', 'selar'],
      s: [
        ['Na va var.', 'Je parlerai.', 'Hablaré. || Yo hablaré.'],
        ['Ta va len ren-va.', 'Tu viendras demain.', 'Vendrás mañana. || Tú vendrás mañana.'],
        ['Nar va vel.', 'Nous irons. || Nous partirons.', 'Iremos. || Nos iremos.'],
        ['Ser ul va len.', 'Ils ne viendront pas. || Elles ne viendront pas.', 'Ellos no vendrán. || No vendrán.'],
        ['Sa va es selar.', 'Elle sera gardienne de la lumière.', 'Ella será guardiana de la luz.'],
        ['Na va lis lisonm ren-va.', 'Je lirai le livre demain.', 'Leeré el libro mañana.'],
      ] },
    { title: { fr: 'Je parlerais', es: 'Hablaría' }, words: ['ei'],
      s: [
        ['Na ei var.', 'Je parlerais.', 'Hablaría. || Yo hablaría.'],
        ['Nar ei es venen.', 'Nous serions amis.', 'Seríamos amigos.'],
        ['Se ei vel.', 'Il irait.', 'Él iría.'],
        ['Sa ei nol kanelm.', 'Elle chanterait une chanson.', 'Ella cantaría una canción.'],
        ['Ta ei kan.', 'Tu comprendrais.', 'Entenderías. || Tú entenderías.'],
        ['Ser ul ei fen meselm.', 'Ils ne mangeraient pas de viande.', 'Ellos no comerían carne.'],
      ] },
    { title: { fr: "Aujourd'hui", es: 'Hoy' }, words: ['ansol', 'ansa', 'orenel', 'vespel:n', 'notel:n', 'solen:n', 'trav', 'rid'],
      s: [
        ['Ansol, na trav.', "Aujourd'hui, je travaille.", 'Hoy trabajo. || Hoy, trabajo.'],
        ['Ren-va, na va rid.', 'Demain, je me reposerai.', 'Mañana descansaré. || Mañana, descansaré.'],
        ['Ansa, ta var.', 'Maintenant, tu parles.', 'Ahora hablas. || Ahora, tú hablas.'],
        ['Notel es kalda.', 'La nuit est froide.', 'La noche es fría.'],
        ['Orenel es bela.', 'Le matin est beau.', 'La mañana es bonita. || La mañana es hermosa.'],
        ['Ren-ra, ansol e ren-va', "Hier, aujourd'hui et demain", 'Ayer, hoy y mañana'],
      ] },
    { title: { fr: 'La semaine', es: 'La semana' }, words: ['unasol', 'duasol', 'trisol', 'kvarsol', 'penasol', 'sekasol', 'sepasol', 'sepael', 'anel', 'hab'],
      s: [
        ['Ansol es unasol.', "Aujourd'hui c'est lundi. || Aujourd'hui, c'est lundi. || Aujourd'hui est lundi.", 'Hoy es lunes.'],
        ['Ren-va es duasol.', "Demain c'est mardi. || Demain, c'est mardi. || Demain est mardi.", 'Mañana es martes.'],
        ['Sepael hab sepa solenen.', 'La semaine a sept jours.', 'La semana tiene siete días.'],
        ['Anel nova', 'Nouvelle année || La nouvelle année || Une nouvelle année', 'Año nuevo || Un año nuevo'],
        ['Na va voyar sepasol.', 'Je voyagerai dimanche.', 'Viajaré el domingo.'],
        ['Sekasol, nar pir.', 'Samedi, nous jouons. || Le samedi, nous jouons.', 'El sábado jugamos. || Los sábados jugamos.'],
      ] },
  ]
},
{
  id: 'u11', icon: '🔢', color: 'violet',
  title: { fr: 'Compter', es: 'Contar' },
  desc: { fr: 'Nombres, duel et pluriel', es: 'Números, dual y plural' },
  tip: {
    fr: `<p>Le Vaelrën a <b>trois nombres</b> :</p><ul><li>singulier : <i>dar</i> (un homme)</li><li><b>duel -i</b> : <i>dari</i> (deux hommes)</li><li><b>pluriel -en</b> : <i>daren</i> (des hommes)</li></ul>
<p>Les nombres se placent <b>devant</b> le nom, qui prend le pluriel : <i>tri varkan<b>en</b></i> (trois soldats).</p>
<p>De 11 à 19 : <i>deka</i> + unité (<i>dekauna</i> = 11). 20 = <i>duadeka</i>. Les <b>ordinaux</b> prennent <b>-im</b> : <i>triim</i> (troisième).</p>`,
    es: `<p>El vaelrën tiene <b>tres números</b>:</p><ul><li>singular: <i>dar</i> (un hombre)</li><li><b>dual -i</b>: <i>dari</i> (dos hombres)</li><li><b>plural -en</b>: <i>daren</i> (hombres)</li></ul>
<p>Los números van <b>delante</b> del nombre, que va en plural: <i>tri varkan<b>en</b></i> (tres soldados).</p>
<p>Del 11 al 19: <i>deka</i> + unidad (<i>dekauna</i> = 11). 20 = <i>duadeka</i>. Los <b>ordinales</b> llevan <b>-im</b>: <i>triim</i> (tercero).</p>`
  },
  lessons: [
    { title: { fr: 'Un, deux, trois', es: 'Uno, dos, tres' }, words: ['una', 'dua', 'tri', 'kvar', 'pena:num'],
      s: [
        ['Una milen', 'Un chat', 'Un gato'],
        ['Kaneni', 'Deux chiens', 'Dos perros'],
        ['Tri korelen', 'Trois oiseaux', 'Tres pájaros'],
        ['Na hab kvar lisonenm.', "J'ai quatre livres.", 'Tengo cuatro libros.'],
        ['Pena narelen', 'Cinq enfants', 'Cinco niños'],
        ['Dari', 'Deux hommes', 'Dos hombres'],
      ] },
    { title: { fr: "Jusqu'à dix", es: 'Hasta diez' }, words: ['seka', 'sepa', 'okta', 'nona', 'deka', 'verbel'],
      s: [
        ['Seka stelen', 'Six étoiles', 'Seis estrellas'],
        ['Sepa solenen', 'Sept jours', 'Siete días'],
        ['Okta aranelen', 'Huit araignées', 'Ocho arañas'],
        ['Nona ferelen', 'Neuf chevaux', 'Nueve caballos'],
        ['Deka varkanen', 'Dix soldats', 'Diez soldados'],
        ['Na ser deka verbelenm.', 'Je sais dix mots. || Je connais dix mots.', 'Sé diez palabras. || Conozco diez palabras.'],
      ] },
    { title: { fr: 'De onze à mille', es: 'De once a mil' }, words: ['dekauna', 'dekadua', 'dekapena', 'duadeka', 'senta', 'mila'],
      s: [
        ['Dekadua anelen', 'Douze ans || Douze années', 'Doce años'],
        ['Duadeka narelen', 'Vingt enfants', 'Veinte niños'],
        ['Senta anelen', 'Cent ans', 'Cien años'],
        ['Mila stelen', 'Mille étoiles', 'Mil estrellas'],
        ['Na hab dekapena anelenm.', "J'ai quinze ans.", 'Tengo quince años.'],
        ['Dekauna e dekadua', 'Onze et douze', 'Once y doce'],
      ] },
    { title: { fr: 'Premier, deuxième…', es: 'Primero, segundo…' }, words: ['triim', 'dekaim', 'dai'],
      s: [
        ['Triim solen', 'Le troisième jour', 'El tercer día'],
        ['Dekaim lunael', 'Le dixième mois', 'El décimo mes'],
        ['Unaim kared', 'Le premier chemin', 'El primer camino'],
        ['Dai kanenenm ta hab ?', 'Combien de chiens as-tu ? || Tu as combien de chiens ?', '¿Cuántos perros tienes?'],
        ['Na hab tri kanenenm.', "J'ai trois chiens.", 'Tengo tres perros.'],
        ['Sa es duaim.', 'Elle est deuxième.', 'Ella es segunda.'],
      ] },
  ]
}
);
