/* Sharklingo — Cursus, partie 2 (unités 12 à 22) */
window.COURSE = window.COURSE || [];
window.COURSE.push(
{
  id: 'u12', icon: '🏘️', color: 'green',
  title: { fr: 'Où es-tu ?', es: '¿Dónde estás?' },
  desc: { fr: 'Les lieux et les cas', es: 'Los lugares y los casos' },
  tip: {
    fr: `<p>Le Vaelrën a <b>8 cas</b>, marqués par des suffixes ajoutés au nom :</p><table class="gt"><tr><th>Cas</th><th>Suffixe</th><th>Exemple</th><th>Sens</th></tr><tr><td>Nominatif</td><td>—</td><td>dar</td><td>l'homme (sujet)</td></tr><tr><td>Accusatif</td><td>-m</td><td>darm</td><td>l'homme (objet)</td></tr><tr><td>Génitif</td><td>-ir</td><td>darir</td><td>de l'homme</td></tr><tr><td>Datif</td><td>-an</td><td>daran</td><td>à l'homme</td></tr><tr><td>Locatif</td><td>-en</td><td>daren</td><td>chez l'homme</td></tr><tr><td>Ablatif</td><td>-or</td><td>daror</td><td>depuis l'homme</td></tr><tr><td>Instrumental</td><td>-ek</td><td>darek</td><td>avec l'homme</td></tr><tr><td>Vocatif</td><td>-a</td><td>dara !</td><td>ô homme !</td></tr></table>
<p>Le complément du nom (génitif) se place <u>après</u> : <i>dom farel<b>ir</b></i> = la maison du père.</p>
<p>Avec <b>dal</b> (donner) : objet en <b>-m</b>, destinataire en <b>-an</b> → <i>Na dal panelm varkan<b>an</b></i>.</p>`,
    es: `<p>El vaelrën tiene <b>8 casos</b>, marcados por sufijos añadidos al nombre:</p><table class="gt"><tr><th>Caso</th><th>Sufijo</th><th>Ejemplo</th><th>Sentido</th></tr><tr><td>Nominativo</td><td>—</td><td>dar</td><td>el hombre (sujeto)</td></tr><tr><td>Acusativo</td><td>-m</td><td>darm</td><td>al hombre (objeto)</td></tr><tr><td>Genitivo</td><td>-ir</td><td>darir</td><td>del hombre</td></tr><tr><td>Dativo</td><td>-an</td><td>daran</td><td>al hombre (destinatario)</td></tr><tr><td>Locativo</td><td>-en</td><td>daren</td><td>en casa del hombre</td></tr><tr><td>Ablativo</td><td>-or</td><td>daror</td><td>desde el hombre</td></tr><tr><td>Instrumental</td><td>-ek</td><td>darek</td><td>con el hombre</td></tr><tr><td>Vocativo</td><td>-a</td><td>dara !</td><td>¡oh, hombre!</td></tr></table>
<p>El complemento del nombre (genitivo) va <u>después</u>: <i>dom farel<b>ir</b></i> = la casa del padre.</p>
<p>Con <b>dal</b> (dar): objeto en <b>-m</b>, destinatario en <b>-an</b> → <i>Na dal panelm varkan<b>an</b></i>.</p>`
  },
  lessons: [
    { title: { fr: 'Dans la maison', es: 'En la casa' }, words: ['en', 'varad', 'leror', 'ferad', 'tael', 'abit', 'enar'],
      s: [
        ['Na es en dom.', 'Je suis dans la maison. || Je suis à la maison.', 'Estoy en la casa. || Estoy en casa.'],
        ['Se trav en varad.', 'Il travaille en ville. || Il travaille dans la ville.', 'Él trabaja en la ciudad.'],
        ['Nar enar en narad.', 'Nous vivons dans un village. || Nous vivons au village.', 'Vivimos en un pueblo. || Vivimos en el pueblo.'],
        ['Lerar es en leror.', "L'élève est à l'école.", 'El alumno está en la escuela.'],
        ['Kanen es hoi.', 'Le chien est ici.', 'El perro está aquí.'],
        ['Ferad es tael.', 'Le marché est là-bas.', 'El mercado está allí. || El mercado está allá.'],
      ] },
    { title: { fr: 'Donner à quelqu\'un (-an)', es: 'Dar a alguien (-an)' }, words: ['dal', 'kar'],
      s: [
        ['Na dal panelm varkanan.', 'Je donne le pain au soldat. || Je donne du pain au soldat.', 'Doy el pan al soldado. || Le doy pan al soldado.'],
        ['Sa dal florelm sair sarelan.', 'Elle donne une fleur à sa mère.', 'Ella da una flor a su madre. || Ella le da una flor a su madre.'],
        ['Ta dal lisonm leraran.', "Tu donnes le livre à l'élève.", 'Das el libro al alumno. || Le das el libro al alumno.'],
        ['Se tez tezanm seir braelan.', 'Il écrit une lettre à son frère.', 'Él escribe una carta a su hermano. || Él le escribe una carta a su hermano.'],
        ['Na var tesaran.', "Je parle au maître. || Je parle à l'enseignant.", 'Hablo al profesor. || Le hablo al profesor.'],
        ['Na kar lisonm.', 'Je prends le livre.', 'Tomo el libro. || Cojo el libro.'],
      ] },
    { title: { fr: 'La maison du père (-ir)', es: 'La casa del padre (-ir)' }, words: ['kelan'],
      s: [
        ['Dom farelir', 'La maison du père', 'La casa del padre'],
        ['Kelan aeronir', "L'épée du roi", 'La espada del rey'],
        ['Lison tesarir', "Le livre du maître || Le livre de l'enseignant", 'El libro del profesor || El libro del maestro'],
        ['Hoia es dom nair grandasir.', "C'est la maison de ma grand-mère.", 'Esta es la casa de mi abuela.'],
        ['Sel solir', 'La lumière du soleil', 'La luz del sol'],
        ['Kanel narelir', "La chanson de l'enfant", 'La canción del niño'],
      ] },
    { title: { fr: 'Depuis et avec (-or, -ek)', es: 'Desde y con (-or, -ek)' }, words: ['plumel', 'manor'],
      s: [
        ['Na len varador.', 'Je viens de la ville.', 'Vengo de la ciudad.'],
        ['Se len narador.', 'Il vient du village.', 'Él viene del pueblo.'],
        ['Sa tez plumelek.', 'Elle écrit avec une plume.', 'Ella escribe con una pluma.'],
        ['Varkan drek kelanek.', 'Le soldat combat avec une épée.', 'El soldado combate con una espada. || El soldado lucha con una espada.'],
        ['Na pael venek.', 'Je marche avec un ami. || Je marche avec mon ami.', 'Camino con un amigo.'],
        ['Ser len ondaror.', 'Ils viennent de la montagne.', 'Ellos vienen de la montaña.'],
      ] },
  ]
},
{
  id: 'u13', icon: '💪', color: 'orange',
  title: { fr: 'Vouloir, c\'est pouvoir', es: 'Querer es poder' },
  desc: { fr: 'Modaux, infinitif, progressif et habituel', es: 'Modales, infinitivo, progresivo y habitual' },
  tip: {
    fr: `<p>Trois verbes <b>modaux</b> : <b>kae</b> (vouloir), <b>sor</b> (pouvoir), <b>thal</b> (devoir). Ils sont suivis de l'<b>infinitif</b>, formé avec <b>-a</b> :</p><ul><li><i>fen</i> → <i>fen<b>a</b></i> : <i>Na kae fena</i> = Je veux manger.</li><li><i>vel</i> → <i>vel<b>a</b></i> : <i>Na sor vela</i> = Je peux partir.</li></ul>
<p>La <b>formule universelle</b> : PRONOM + ul + PARTICULE + MODAL + VERBE → <i>Na ul va sor mira</i> = Je ne pourrai pas voir.</p>
<p><b>el</b> = en train de : <i>Na el var</i> (je suis en train de parler). <b>sa</b> = d'habitude : <i>Na sa var</i> (je parle habituellement).</p>`,
    es: `<p>Tres verbos <b>modales</b>: <b>kae</b> (querer), <b>sor</b> (poder), <b>thal</b> (deber). Van seguidos del <b>infinitivo</b>, formado con <b>-a</b>:</p><ul><li><i>fen</i> → <i>fen<b>a</b></i>: <i>Na kae fena</i> = Quiero comer.</li><li><i>vel</i> → <i>vel<b>a</b></i>: <i>Na sor vela</i> = Puedo ir.</li></ul>
<p>La <b>fórmula universal</b>: PRONOMBRE + ul + PARTÍCULA + MODAL + VERBO → <i>Na ul va sor mira</i> = No podré ver.</p>
<p><b>el</b> = estar + gerundio: <i>Na el var</i> (estoy hablando). <b>sa</b> = soler: <i>Na sa var</i> (suelo hablar).</p>`
  },
  lessons: [
    { title: { fr: 'Je veux', es: 'Quiero' }, words: ['kae:v'],
      s: [
        ['Na kae fena.', 'Je veux manger.', 'Quiero comer.'],
        ['Ta kae mira.', 'Tu veux voir.', 'Quieres ver. || Tú quieres ver.'],
        ['Se kae sula.', 'Il veut dormir.', 'Él quiere dormir.'],
        ['Na kae bira naelm.', "Je veux boire de l'eau.", 'Quiero beber agua.'],
        ['Nar kae lera vaelrënm.', 'Nous voulons apprendre le vaelrën. || Nous voulons apprendre vaelrën.', 'Queremos aprender vaelrën.'],
        ['Na kae mira varadm.', 'Je veux voir la ville.', 'Quiero ver la ciudad.'],
      ] },
    { title: { fr: 'Je peux', es: 'Puedo' }, words: ['sor', 'nag', 'sokor'],
      s: [
        ['Na sor vela.', 'Je peux partir. || Je peux aller.', 'Puedo ir. || Puedo irme.'],
        ['Na ul sor sula.', 'Je ne peux pas dormir.', 'No puedo dormir.'],
        ['Ta sor nola.', 'Tu peux chanter.', 'Puedes cantar. || Tú puedes cantar.'],
        ['Sa sor naga.', 'Elle peut nager. || Elle sait nager.', 'Ella puede nadar. || Ella sabe nadar.'],
        ['Ta sor sokora nam ae ?', "Peux-tu m'aider ? || Tu peux m'aider ?", '¿Puedes ayudarme? || ¿Me puedes ayudar?'],
        ['Na ul va sor mira.', 'Je ne pourrai pas voir.', 'No podré ver.'],
      ] },
    { title: { fr: 'Je dois', es: 'Debo' }, words: ['thal:v', 'fir'],
      s: [
        ['Se thal vara.', 'Il doit parler.', 'Él debe hablar. || Él tiene que hablar.'],
        ['Ta thal fira naradm.', 'Tu dois protéger le village.', 'Debes proteger el pueblo. || Tienes que proteger el pueblo.'],
        ['Nar thal trava.', 'Nous devons travailler.', 'Debemos trabajar. || Tenemos que trabajar.'],
        ['Na thal vela ansa.', 'Je dois partir maintenant. || Je dois y aller maintenant.', 'Tengo que irme ahora. || Debo irme ahora.'],
        ['Ser thal lera.', 'Ils doivent apprendre.', 'Ellos deben aprender. || Ellos tienen que aprender.'],
        ['Ta ul thal dola.', 'Tu ne dois pas pleurer.', 'No debes llorar. || No tienes que llorar.'],
      ] },
    { title: { fr: 'En train de…, d\'habitude…', es: 'Estar haciendo…, soler…' }, words: ['el', 'sa:part', 'som', 'sovent', 'toujar'],
      s: [
        ['Na el var.', 'Je suis en train de parler.', 'Estoy hablando.'],
        ['Se el fen.', 'Il est en train de manger.', 'Él está comiendo.'],
        ['Sa el nol.', 'Elle est en train de chanter.', 'Ella está cantando.'],
        ['Nar sa som sovent.', 'Nous rêvons souvent.', 'Soñamos a menudo. || Solemos soñar a menudo.'],
        ['Ta sa trav.', "Tu travailles habituellement. || D'habitude, tu travailles.", 'Sueles trabajar.'],
        ['Na ra el var.', "J'étais en train de parler.", 'Estaba hablando.'],
      ] },
  ]
},
{
  id: 'u14', icon: '🫀', color: 'red',
  title: { fr: 'Le corps', es: 'El cuerpo' },
  desc: { fr: 'Corps humain et santé', es: 'Cuerpo humano y salud' },
  tip: {
    fr: `<p>Le <b>duel -i</b> est parfait pour les parties du corps qui vont par deux : <i>okel<b>i</b></i> (les deux yeux), <i>manor<b>i</b></i> (les deux mains), <i>pedel<b>i</b></i> (les deux pieds).</p>
<p>On peut empiler duel + cas : <i>okel<b>i</b><b>m</b></i> (les deux yeux, objet).</p>
<p>« Avoir » se dit <b>hab</b> : <i>Se hab fevelm</i> = Il a de la fièvre.</p>`,
    es: `<p>El <b>dual -i</b> es perfecto para las partes del cuerpo que van en pares: <i>okel<b>i</b></i> (los dos ojos), <i>manor<b>i</b></i> (las dos manos), <i>pedel<b>i</b></i> (los dos pies).</p>
<p>Se pueden apilar dual + caso: <i>okel<b>i</b><b>m</b></i> (los dos ojos, objeto).</p>
<p>« Tener » se dice <b>hab</b>: <i>Se hab fevelm</i> = Él tiene fiebre.</p>`
  },
  lessons: [
    { title: { fr: 'Tête, mains, pieds', es: 'Cabeza, manos, pies' }, words: ['kranel', 'pedel', 'okel', 'aurel', 'bosel'],
      s: [
        ['Nair kranel', 'Ma tête', 'Mi cabeza'],
        ['Na az aurelek.', "J'écoute avec l'oreille. || J'entends avec l'oreille.", 'Escucho con el oído. || Escucho con la oreja.'],
        ['Okeli', 'Deux yeux || Les deux yeux', 'Dos ojos || Los dos ojos'],
        ['Narel hab okelim zurena.', "L'enfant a les yeux bleus.", 'El niño tiene los ojos azules.'],
        ['Na tez manorek.', "J'écris avec la main.", 'Escribo con la mano.'],
        ['Pedeli', 'Deux pieds || Les deux pieds', 'Dos pies || Los dos pies'],
      ] },
    { title: { fr: 'Le corps entier', es: 'Todo el cuerpo' }, words: ['krinel', 'denar', 'pulsara', 'brazel', 'gamel', 'lasa'],
      s: [
        ['Sair krinel es lonja.', 'Ses cheveux sont longs.', 'Su cabello es largo. || Su pelo es largo.'],
        ['Tair pulsara es bona.', 'Ton cœur est bon.', 'Tu corazón es bueno.'],
        ['Se hab brazelim vaela.', 'Il a des bras forts. || Il a deux bras forts.', 'Él tiene brazos fuertes.'],
        ['Denaren selana', 'Des dents blanches', 'Dientes blancos'],
        ['Nair gameli es lasa.', 'Mes jambes sont fatiguées. || Mes deux jambes sont fatiguées.', 'Mis piernas están cansadas.'],
      ] },
    { title: { fr: 'Malade ou en forme ?', es: '¿Enfermo o sano?' }, words: ['sana', 'hel', 'fevel', 'remedel', 'amara'],
      s: [
        ['Na es sika.', 'Je suis malade.', 'Estoy enfermo. || Estoy enferma.'],
        ['Helar hel narelm.', "Le guérisseur guérit l'enfant.", 'El curandero cura al niño.'],
        ['Se hab fevelm.', 'Il a de la fièvre.', 'Él tiene fiebre.'],
        ['Remedel es amara.', 'Le remède est amer.', 'El remedio es amargo.'],
        ['Sa va es sana ren-va.', 'Elle sera en bonne santé demain. || Elle sera saine demain.', 'Ella estará sana mañana.'],
        ['Ta es sika ae ?', 'Es-tu malade ? || Tu es malade ?', '¿Estás enfermo? || ¿Estás enferma?'],
      ] },
    { title: { fr: "À l'hôpital", es: 'En el hospital' }, words: ['ospitel', 'blesel', 'poisel', 'potel', 'antidel', 'alkemar', 'fak'],
      s: [
        ['Varkan es en ospitel.', "Le soldat est à l'hôpital.", 'El soldado está en el hospital.'],
        ['Blesel es thala.', 'La blessure est grande.', 'La herida es grande.'],
        ['Alkemar fak potelm.', "L'alchimiste fait une potion.", 'El alquimista hace una poción.'],
        ['Hoia es poisel !', "C'est du poison ! || Ceci est du poison !", '¡Esto es veneno!'],
        ['Na thal bira antidelm.', "Je dois boire l'antidote.", 'Debo beber el antídoto. || Tengo que beber el antídoto.'],
      ] },
  ]
},
{
  id: 'u15', icon: '🐉', color: 'green',
  title: { fr: 'Les animaux', es: 'Los animales' },
  desc: { fr: 'Du chat au dragon', es: 'Del gato al dragón' },
  tip: {
    fr: `<p>Les noms d'animaux se déclinent comme tous les noms : <i>kanen</i> (le chien) → <i>kanen<b>m</b></i> (objet) → <i>kanen<b>en</b></i> (les chiens).</p>
<p>Attention : quand un nom finit déjà par <b>-en</b> (<i>kanen</i>, <i>lupen</i>), le pluriel donne <i>kanenen</i>, <i>lupenen</i>.</p>
<p>Un <b>adverbe</b> se forme avec <b>-rly</b> : <i>sova</i> (lent) → <i>sovarly</i> (lentement).</p>`,
    es: `<p>Los nombres de animales se declinan como todos los nombres: <i>kanen</i> (el perro) → <i>kanen<b>m</b></i> (objeto) → <i>kanen<b>en</b></i> (los perros).</p>
<p>Atención: cuando un nombre ya termina en <b>-en</b> (<i>kanen</i>, <i>lupen</i>), el plural da <i>kanenen</i>, <i>lupenen</i>.</p>
<p>Un <b>adverbio</b> se forma con <b>-rly</b>: <i>sova</i> (lento) → <i>sovarly</i> (lentamente).</p>`
  },
  lessons: [
    { title: { fr: 'Animaux domestiques', es: 'Animales domésticos' }, words: ['kanen', 'milen', 'ferel', 'korel', 'hiren', 'vez'],
      s: [
        ['Kanen zon.', 'Le chien court.', 'El perro corre.'],
        ['Milen sul.', 'Le chat dort.', 'El gato duerme.'],
        ['Korel vez.', "L'oiseau vole.", 'El pájaro vuela.'],
        ['Hiren nag.', 'Le poisson nage.', 'El pez nada.'],
        ['Na hab milenm.', "J'ai un chat.", 'Tengo un gato.'],
        ['Na ela kanenm.', "J'aime le chien. || J'aime mon chien.", 'Quiero al perro. || Me gusta el perro.'],
      ] },
    { title: { fr: 'Dans la forêt', es: 'En el bosque' }, words: ['lupen', 'orsel', 'vulpel', 'lapel', 'murel', 'naz', 'kel'],
      s: [
        ['Lupen es en fores.', 'Le loup est dans la forêt.', 'El lobo está en el bosque.'],
        ['Orsel fen hirenm.', "L'ours mange du poisson.", 'El oso come pescado.'],
        ['Vulpel naz.', 'Le renard fuit.', 'El zorro huye.'],
        ['Milen hil murelm.', 'Le chat cherche la souris.', 'El gato busca al ratón. || El gato busca el ratón.'],
        ['Lapel es pila e aiva.', 'Le lapin est petit et rapide.', 'El conejo es pequeño y rápido.'],
        ['Drekar ra kel lupenm.', 'Le guerrier a tué le loup.', 'El guerrero mató al lobo.'],
      ] },
    { title: { fr: 'Dans le ciel', es: 'En el cielo' }, words: ['aigel', 'hibel', 'abelel', 'papel', 'korvel'],
      s: [
        ['Aigel vez en aer.', "L'aigle vole dans le ciel.", 'El águila vuela en el cielo.'],
        ['Hibel ul sul en notel.', 'Le hibou ne dort pas la nuit.', 'El búho no duerme de noche. || El búho no duerme por la noche.'],
        ['Papel es bela.', 'Le papillon est beau.', 'La mariposa es bonita. || La mariposa es hermosa.'],
        ['Abelel es en florel.', "L'abeille est dans la fleur.", 'La abeja está en la flor.'],
        ['Korvel es morena.', 'Le corbeau est noir.', 'El cuervo es negro.'],
      ] },
    { title: { fr: 'Créatures fabuleuses', es: 'Criaturas fabulosas' }, words: ['vazir', 'vazel', 'granel', 'tortel', 'lionel', 'sovarly'],
      s: [
        ['Vazir es tre thala.', 'Le dragon est très grand.', 'El dragón es muy grande.'],
        ['Vazel es en herbel.', "Le serpent est dans l'herbe.", 'La serpiente está en la hierba.'],
        ['Tortel pael sovarly.', 'La tortue marche lentement.', 'La tortuga camina lentamente. || La tortuga camina despacio.'],
        ['Lionel es vaela.', 'Le lion est fort.', 'El león es fuerte.'],
        ['Granel nag en lakel.', 'La grenouille nage dans le lac.', 'La rana nada en el lago.'],
        ['Vazir vez e azor.', 'Le dragon vole et brille.', 'El dragón vuela y brilla.'],
      ] },
  ]
},
{
  id: 'u16', icon: '🪙', color: 'blue',
  title: { fr: 'Au marché', es: 'En el mercado' },
  desc: { fr: 'Acheter, vendre, payer', es: 'Comprar, vender, pagar' },
  tip: {
    fr: `<p>Au marché, on aime les phrases courtes ! Le <b>registre marchand</b> supprime souvent le sujet : <i>Pag deka !</i> = Payez dix !</p>
<p>Pour demander un prix : <i>Panel kos dai ?</i> = Combien coûte le pain ? (le livre donne aussi la forme figée <i>Panel kosel dai ?</i>).</p>
<p>L'<b>impératif</b>, c'est le verbe seul : <i>Pag !</i> (paie !), <i>Maz !</i> (achète !).</p>`,
    es: `<p>¡En el mercado gustan las frases cortas! El <b>registro mercantil</b> suele suprimir el sujeto: <i>Pag deka !</i> = ¡Paga diez!</p>
<p>Para preguntar un precio: <i>Panel kos dai ?</i> = ¿Cuánto cuesta el pan? (el libro da también la forma fija <i>Panel kosel dai ?</i>).</p>
<p>El <b>imperativo</b> es el verbo solo: <i>Pag !</i> (¡paga!), <i>Maz !</i> (¡compra!).</p>`
  },
  lessons: [
    { title: { fr: 'Acheter et vendre', es: 'Comprar y vender' }, words: ['maz', 'zel', 'kos', 'pag', 'mazen'],
      s: [
        ['Na maz panelm.', "J'achète du pain. || J'achète le pain.", 'Compro pan. || Compro el pan.'],
        ['Mazen zel velonenm.', 'Le marchand vend des fruits.', 'El comerciante vende frutas.'],
        ['Panel kos dai ? || Panel kosel dai ?', 'Combien coûte le pain ?', '¿Cuánto cuesta el pan?'],
        ['Na pag.', 'Je paie. || Je paye.', 'Pago. || Yo pago.'],
        ['Pag deka !', 'Payez dix ! || Paie dix !', '¡Paga diez! || ¡Pague diez! || ¡Pagad diez!'],
        ['Ta zel tair ferelm ae ? || Ta zel ferelm tair ae ?', 'Vends-tu ton cheval ? || Tu vends ton cheval ?', '¿Vendes tu caballo?'],
      ] },
    { title: { fr: 'Riche ou pauvre', es: 'Rico o pobre' }, words: ['orel', 'iren', 'monel', 'prisel', 'richa', 'povra'],
      s: [
        ['Na hab monelm.', "J'ai de l'argent.", 'Tengo dinero.'],
        ['Mazen es richa.', 'Le marchand est riche.', 'El comerciante es rico.'],
        ['Prisel es tre alta.', 'Le prix est très haut. || Le prix est très élevé.', 'El precio es muy alto.'],
        ['Ser hil orelm.', "Ils cherchent l'or. || Ils cherchent le trésor.", 'Ellos buscan el oro. || Ellos buscan el tesoro.'],
        ['Na ul hab monelm.', "Je n'ai pas d'argent.", 'No tengo dinero.'],
        ['Dar povra', 'Un homme pauvre', 'Un hombre pobre'],
      ] },
    { title: { fr: 'Les affaires', es: 'Los negocios' }, words: ['klientel', 'komel', 'kontrel', 'negosar', 'plena'],
      s: [
        ['Klientel maz kelanm.', 'Le client achète une épée.', 'El cliente compra una espada.'],
        ['Nar negosar.', 'Nous négocions.', 'Negociamos.'],
        ['Mazen e klientel negosar.', 'Le marchand et le client négocient.', 'El comerciante y el cliente negocian.'],
        ['Ser ra tez kontrelm.', 'Ils ont écrit un contrat.', 'Ellos escribieron un contrato.'],
        ['Komel es bona.', 'Le commerce est bon.', 'El comercio es bueno.'],
        ['Ferad es plena.', 'Le marché est plein.', 'El mercado está lleno.'],
      ] },
  ]
},
{
  id: 'u17', icon: '🏠', color: 'violet',
  title: { fr: 'Au quotidien', es: 'En el día a día' },
  desc: { fr: 'Vêtements, maison et voyages', es: 'Ropa, casa y viajes' },
  tip: {
    fr: `<p>L'<b>instrumental -ek</b> indique le moyen : <i>batel<b>ek</b></i> (en bateau, avec un bateau), <i>bisiklel<b>ek</b></i> (à vélo).</p>
<p>La préposition <b>en</b> couvre « dans », « à » et « sur » : <i>Lison es en tabel</i> = Le livre est sur la table.</p>
<p>Le pronom objet se place <u>après</u> le verbe : <i>Na aten <b>tam</b></i> = Je t'attends.</p>`,
    es: `<p>El <b>instrumental -ek</b> indica el medio: <i>batel<b>ek</b></i> (en barco), <i>bisiklel<b>ek</b></i> (en bicicleta).</p>
<p>La preposición <b>en</b> cubre « en », « dentro de » y « sobre »: <i>Lison es en tabel</i> = El libro está en la mesa.</p>
<p>El pronombre objeto va <u>después</u> del verbo: <i>Na aten <b>tam</b></i> = Te espero.</p>`
  },
  lessons: [
    { title: { fr: "S'habiller", es: 'Vestirse' }, words: ['vestel', 'kamisel', 'pantel', 'botel', 'mantel', 'hev', 'lav'],
      s: [
        ['Na hev mantelm.', 'Je porte un manteau.', 'Llevo un abrigo.'],
        ['Sa hev kamiselm selana.', 'Elle porte une chemise blanche.', 'Ella lleva una camisa blanca.'],
        ['Tair botelen es nova.', 'Tes chaussures sont neuves. || Tes chaussures sont nouvelles.', 'Tus zapatos son nuevos.'],
        ['Pantel es lonja.', 'Le pantalon est long.', 'El pantalón es largo.'],
        ['Na lav nair vestelenm.', 'Je lave mes vêtements.', 'Lavo mi ropa.'],
      ] },
    { title: { fr: 'À la maison', es: 'En casa' }, words: ['tabel', 'litel', 'fenel', 'portel', 'lampel', 'dav', 'tir'],
      s: [
        ['Na dav portelm.', "J'ouvre la porte.", 'Abro la puerta.'],
        ['Ta tir fenelm.', 'Tu fermes la fenêtre.', 'Cierras la ventana. || Tú cierras la ventana.'],
        ['Lison es en tabel.', 'Le livre est sur la table.', 'El libro está en la mesa. || El libro está sobre la mesa.'],
        ['Milen sul en litel.', 'Le chat dort sur le lit. || Le chat dort dans le lit.', 'El gato duerme en la cama.'],
        ['Lampel azor.', 'La lampe brille.', 'La lámpara brilla.'],
        ['Na abit en domil.', "J'habite dans une cabane. || J'habite dans une petite maison.", 'Vivo en una cabaña. || Vivo en una casita.'],
      ] },
    { title: { fr: 'Voyager', es: 'Viajar' }, words: ['karel', 'batel', 'bisiklel', 'voyar', 'peza'],
      s: [
        ['Na voyar batelek.', "Je voyage en bateau.", 'Viajo en barco.'],
        ['Se len bisiklelek.', 'Il vient à vélo. || Il vient en bicyclette. || Il vient à bicyclette.', 'Él viene en bicicleta.'],
        ['Nar trav en orenel e nar rid en vespel.', 'Nous travaillons le matin et nous nous reposons le soir.', 'Trabajamos por la mañana y descansamos por la tarde.'],
        ['Karel es tre peza.', 'La charrette est très lourde. || La voiture est très lourde.', 'El carro es muy pesado.'],
        ['Na sa sul en notel.', "D'habitude, je dors la nuit. || Je dors habituellement la nuit.", 'Suelo dormir de noche. || Suelo dormir por la noche.'],
      ] },
    { title: { fr: 'Faire, dire, aider', es: 'Hacer, decir, ayudar' }, words: ['dis', 'aten', 'devel', 'verel'],
      s: [
        ['Ma ta fak ?', "Que fais-tu ? || Qu'est-ce que tu fais ?", '¿Qué haces?'],
        ['Na fak nair develm.', 'Je fais mes devoirs. || Je fais mon devoir.', 'Hago mis deberes. || Hago mi tarea.'],
        ['Se dis verelm.', 'Il dit la vérité.', 'Él dice la verdad.'],
        ['Na aten tam.', "Je t'attends.", 'Te espero.'],
        ['Sa sokor sair sarelm.', 'Elle aide sa mère.', 'Ella ayuda a su madre.'],
        ['Ka sokor nam ?', "Qui m'aide ?", '¿Quién me ayuda?'],
      ] },
  ]
},
{
  id: 'u18', icon: '💖', color: 'red',
  title: { fr: 'Émotions et liens', es: 'Emociones y vínculos' },
  desc: { fr: 'Ressentir, aimer, être soi', es: 'Sentir, amar, ser uno mismo' },
  tip: {
    fr: `<p>Le suffixe <b>-in</b> transforme un adjectif ou un verbe en <b>nom abstrait</b> :</p><ul><li><i>felisa</i> (heureux) → <i>felis<b>in</b></i> (bonheur)</li><li><i>tristra</i> (triste) → <i>tristr<b>in</b></i> (tristesse)</li><li><i>ela</i> (aimer) → <i>el<b>in</b></i> (amour)</li></ul>
<p>Pour une émotion forte, on peut dire « avoir » + nom : <i>Narel hab pavelm</i> = L'enfant a peur.</p>`,
    es: `<p>El sufijo <b>-in</b> convierte un adjetivo o un verbo en <b>nombre abstracto</b>:</p><ul><li><i>felisa</i> (feliz) → <i>felis<b>in</b></i> (felicidad)</li><li><i>tristra</i> (triste) → <i>tristr<b>in</b></i> (tristeza)</li><li><i>ela</i> (amar) → <i>el<b>in</b></i> (amor)</li></ul>
<p>Para una emoción fuerte, se puede decir « tener » + nombre: <i>Narel hab pavelm</i> = El niño tiene miedo.</p>`
  },
  lessons: [
    { title: { fr: 'Comment te sens-tu ?', es: '¿Cómo te sientes?' }, words: ['felisa', 'tristra', 'gaudel', 'pavel', 'iral', 'tristrin'],
      s: [
        ['Na es felisa.', 'Je suis heureux. || Je suis heureuse. || Je suis content. || Je suis contente.', 'Estoy feliz. || Soy feliz. || Estoy contento. || Estoy contenta.'],
        ['Sa es tristra.', 'Elle est triste.', 'Ella está triste.'],
        ['Ta es lasa ae ?', 'Es-tu fatigué ? || Tu es fatigué ? || Es-tu fatiguée ?', '¿Estás cansado? || ¿Estás cansada?'],
        ['Narel hab pavelm.', "L'enfant a peur.", 'El niño tiene miedo.'],
        ['Gaudel e tristrin', 'La joie et la tristesse', 'La alegría y la tristeza'],
        ['Aeron hab iralm.', 'Le roi est en colère.', 'El rey está enfadado. || El rey tiene ira.'],
      ] },
    { title: { fr: 'Amour et bonheur', es: 'Amor y felicidad' }, words: ['elin', 'felisin', 'surel', 'kurel', 'dolen', 'firen'],
      s: [
        ['Elin es vaela.', "L'amour est fort.", 'El amor es fuerte.'],
        ['Na hil felisinm.', 'Je cherche le bonheur.', 'Busco la felicidad.'],
        ['Hoia es surel !', "C'est une surprise !", '¡Es una sorpresa! || ¡Esto es una sorpresa!'],
        ['Kurel es bona.', 'La curiosité est bonne.', 'La curiosidad es buena.'],
        ['Firen en dolen.', "La flamme dans la larme. || L'espoir au cœur du chagrin.", 'La llama en la lágrima. || La esperanza en medio de la pena.'],
      ] },
    { title: { fr: 'Les relations', es: 'Las relaciones' }, words: ['amorel', 'konjel', 'alira', 'vaelaarë'],
      s: [
        ['Na ela nair amorelm.', "J'aime mon partenaire. || J'aime ma partenaire. || J'aime mon copain. || J'aime ma copine.", 'Quiero a mi pareja. || Amo a mi pareja.'],
        ['Sa es seir konjel.', 'Elle est son épouse.', 'Ella es su esposa.'],
        ['Ta es nair alira.', 'Tu es mon allié. || Tu es mon alliée.', 'Eres mi aliado. || Eres mi aliada.'],
        ['Ven vaelaarë', "Le plus fort des amis. || Un ami sur qui l'on peut compter.", 'El más fuerte de los amigos. || Un amigo en quien confiar.'],
        ['Nar es venen toujar.', 'Nous sommes amis pour toujours. || Nous sommes toujours amis.', 'Somos amigos para siempre. || Siempre somos amigos.'],
      ] },
    { title: { fr: 'Identités', es: 'Identidades' }, words: ['identel', 'jenrel', 'kvira', 'sarela', 'senela', 'bisela', 'transar', 'nulgena'],
      s: [
        ['Na es kvira.', 'Je suis queer.', 'Soy queer.'],
        ['Sa es sarela.', 'Elle est lesbienne.', 'Ella es lesbiana.'],
        ['Se es senela.', 'Il est gay. || Il est homosexuel.', 'Él es gay. || Él es homosexual.'],
        ['Ser es bisela.', 'Ils sont bisexuels. || Elles sont bisexuelles.', 'Ellos son bisexuales. || Ellas son bisexuales.'],
        ['Nair ven es transar.', 'Mon ami est trans. || Mon ami est transgenre.', 'Mi amigo es trans. || Mi amigo es transgénero.'],
        ['Na es nulgena.', 'Je suis non-binaire.', 'Soy no binario. || Soy no binaria. || Soy no binarie.'],
      ] },
  ]
},
{
  id: 'u19', icon: '🧩', color: 'orange',
  title: { fr: 'Fabriquer des mots', es: 'Fabricar palabras' },
  desc: { fr: 'Suffixes de dérivation et degrés', es: 'Sufijos de derivación y grados' },
  tip: {
    fr: `<p>Avec une seule racine, tu peux créer des dizaines de mots :</p><table class="gt"><tr><td><b>-ar</b></td><td>agent</td><td>drek → drekar (combattant)</td></tr><tr><td><b>-in</b></td><td>abstraction</td><td>sel → selin (clarté)</td></tr><tr><td><b>-or</b></td><td>lieu</td><td>sel → selor (sanctuaire)</td></tr><tr><td><b>-il</b></td><td>diminutif</td><td>dom → domil (cabane)</td></tr><tr><td><b>-thal</b></td><td>augmentatif</td><td>dom → domthal (manoir)</td></tr><tr><td><b>-eth</b></td><td>comparatif</td><td>vaela → vaelaeth (plus fort)</td></tr><tr><td><b>-arë</b></td><td>superlatif</td><td>vaela → vaelaarë (le plus fort)</td></tr><tr><td><b>-rly</b></td><td>adverbe</td><td>aiva → aivarly (rapidement)</td></tr></table>
<p><b>minus</b> + adjectif = moins… : <i>dar minus vaela</i> (un homme moins fort).</p>`,
    es: `<p>Con una sola raíz, puedes crear decenas de palabras:</p><table class="gt"><tr><td><b>-ar</b></td><td>agente</td><td>drek → drekar (combatiente)</td></tr><tr><td><b>-in</b></td><td>abstracción</td><td>sel → selin (claridad)</td></tr><tr><td><b>-or</b></td><td>lugar</td><td>sel → selor (santuario)</td></tr><tr><td><b>-il</b></td><td>diminutivo</td><td>dom → domil (cabaña)</td></tr><tr><td><b>-thal</b></td><td>aumentativo</td><td>dom → domthal (mansión)</td></tr><tr><td><b>-eth</b></td><td>comparativo</td><td>vaela → vaelaeth (más fuerte)</td></tr><tr><td><b>-arë</b></td><td>superlativo</td><td>vaela → vaelaarë (el más fuerte)</td></tr><tr><td><b>-rly</b></td><td>adverbio</td><td>aiva → aivarly (rápidamente)</td></tr></table>
<p><b>minus</b> + adjetivo = menos…: <i>dar minus vaela</i> (un hombre menos fuerte).</p>`
  },
  lessons: [
    { title: { fr: 'Celui qui fait (-ar)', es: 'El que hace (-ar)' }, words: ['drekar', 'tezar:n', 'nolar', 'zonar', 'paelar'],
      s: [
        ['Nolar', 'Chanteur || Chanteuse', 'Cantante'],
        ['Drekar es vaela.', 'Le combattant est fort. || Le guerrier est fort.', 'El combatiente es fuerte. || El guerrero es fuerte.'],
        ['Tezar tez lisonm.', "L'écrivain écrit un livre.", 'El escritor escribe un libro.'],
        ['Paelar', 'Marcheur || Marcheuse', 'Caminante'],
        ['Zonar es aiva.', 'Le coureur est rapide.', 'El corredor es rápido.'],
      ] },
    { title: { fr: 'Les idées (-in)', es: 'Las ideas (-in)' }, words: ['serin', 'vaelin', 'enarin', 'murin', 'selin', 'moren:n'],
      s: [
        ['Serin es vaelin.', 'Le savoir est une force. || Le savoir est la force.', 'El saber es fuerza. || El conocimiento es poder.'],
        ['Enarin es bela.', 'La vie est belle.', 'La vida es bella. || La vida es bonita.'],
        ['Na hil selinm en moren.', "Je cherche la clarté dans l'obscurité.", 'Busco la claridad en la oscuridad.'],
        ['Enarin e murin', 'La vie et la mort', 'La vida y la muerte'],
      ] },
    { title: { fr: 'Petit et grand (-il, -thal, -or)', es: 'Pequeño y grande (-il, -thal, -or)' }, words: ['selor', 'domil', 'domthal', 'kanenil', 'fenor'],
      s: [
        ['Selor', 'Sanctuaire || Temple || Le sanctuaire || Le temple', 'Santuario || Templo || El santuario || El templo'],
        ['Domil', 'Petite maison || Cabane', 'Casita || Cabaña'],
        ['Domthal', 'Grande maison || Manoir', 'Mansión || Casa grande'],
        ['Kanenil', 'Petit chien || Chiot', 'Perrito || Cachorro'],
        ['Aeron enar en domthal.', 'Le roi vit dans un manoir. || Le roi vit dans une grande maison.', 'El rey vive en una mansión.'],
        ['Nar fen en fenor.', 'Nous mangeons au restaurant.', 'Comemos en el restaurante.'],
      ] },
    { title: { fr: 'Plus, le plus, moins', es: 'Más, el más, menos' }, words: ['vaelaeth', 'aivaeth', 'altaarë', 'aivarly', 'selarly', 'minus'],
      s: [
        ['Se es vaelaeth.', 'Il est plus fort.', 'Él es más fuerte.'],
        ['Sa es vaelaarë.', 'Elle est la plus forte.', 'Ella es la más fuerte.'],
        ['Ferel es aivaeth.', 'Le cheval est plus rapide.', 'El caballo es más rápido.'],
        ['Ondar altaarë', 'La plus haute montagne || La montagne la plus haute', 'La montaña más alta'],
        ['Kanen zon aivarly.', 'Le chien court rapidement. || Le chien court vite.', 'El perro corre rápidamente. || El perro corre rápido.'],
        ['Dar minus vaela', 'Un homme moins fort', 'Un hombre menos fuerte'],
      ] },
  ]
},
{
  id: 'u20', icon: '🔗', color: 'blue',
  title: { fr: 'Phrases complexes', es: 'Frases complejas' },
  desc: { fr: 'Relier les idées', es: 'Unir las ideas' },
  tip: {
    fr: `<p>Les <b>conjonctions</b> se placent en tête de proposition, sans changer l'ordre des mots :</p><table class="gt"><tr><td><b>e</b></td><td>et</td><td><b>ke</b></td><td>qui, que (relatif)</td></tr><tr><td><b>ma</b></td><td>mais</td><td><b>to</b></td><td>que (après penser, dire…)</td></tr><tr><td><b>sha</b></td><td>parce que</td><td><b>pol</b></td><td>pour que</td></tr><tr><td><b>ei</b></td><td>si</td><td><b>sota</b></td><td>si bien que</td></tr><tr><td><b>ren</b></td><td>quand</td><td><b>tama</b></td><td>bien que</td></tr></table>
<p>Exemple : <i>Ei ta len, nar va vel</i> = Si tu viens, nous partirons.</p>`,
    es: `<p>Las <b>conjunciones</b> van al principio de la oración, sin cambiar el orden de las palabras:</p><table class="gt"><tr><td><b>e</b></td><td>y</td><td><b>ke</b></td><td>que (relativo)</td></tr><tr><td><b>ma</b></td><td>pero</td><td><b>to</b></td><td>que (tras pensar, decir…)</td></tr><tr><td><b>sha</b></td><td>porque</td><td><b>pol</b></td><td>para que</td></tr><tr><td><b>ei</b></td><td>si</td><td><b>sota</b></td><td>de modo que</td></tr><tr><td><b>ren</b></td><td>cuando</td><td><b>tama</b></td><td>aunque</td></tr></table>
<p>Ejemplo: <i>Ei ta len, nar va vel</i> = Si vienes, nos iremos.</p>`
  },
  lessons: [
    { title: { fr: 'Et, mais, ou', es: 'Y, pero, o' }, words: ['e', 'ma', 'o'],
      s: [
        ['Na mir e na ser.', 'Je vois et je sais.', 'Veo y sé.'],
        ['Na kae vela, ma na ul sor.', 'Je veux partir, mais je ne peux pas.', 'Quiero irme, pero no puedo. || Quiero ir, pero no puedo.'],
        ['Ta kae naelm o vinelm ae ?', "Veux-tu de l'eau ou du vin ? || Tu veux de l'eau ou du vin ?", '¿Quieres agua o vino?'],
        ['Se es yuna, ma se es vaela.', 'Il est jeune, mais il est fort.', 'Él es joven, pero es fuerte.'],
        ['Darm e varkanm na mir.', "Je vois l'homme et le soldat.", 'Veo al hombre y al soldado.'],
      ] },
    { title: { fr: 'Parce que, si', es: 'Porque, si' }, words: ['sha', 'ei'],
      s: [
        ['Na vel, sha na kae mira.', 'Je pars parce que je veux voir.', 'Me voy porque quiero ver.'],
        ['Ei ta len, nar va vel.', 'Si tu viens, nous partirons.', 'Si vienes, nos iremos. || Si vienes, iremos.'],
        ['Ei ta len, na va vel.', 'Si tu viens, je partirai.', 'Si vienes, me iré. || Si vienes, iré.'],
        ['Narel dol, sha se ra haz seir kanenm.', "L'enfant pleure parce qu'il a perdu son chien.", 'El niño llora porque perdió a su perro. || El niño llora porque ha perdido a su perro.'],
        ['Ei helan fael, nar va rid en dom.', "S'il pleut, nous nous reposerons à la maison.", 'Si llueve, descansaremos en casa.'],
      ] },
    { title: { fr: 'Quand, que, qui', es: 'Cuando, que' }, words: ['ren:interr', 'ke', 'to', 'pen', 'solen:v'],
      s: [
        ['Ren sol va solen, nar va vel. || Ren sola va sel, nar va vel.', 'Quand le soleil se lèvera, nous partirons.', 'Cuando salga el sol, nos iremos.'],
        ['Dar ke na mir', "L'homme que je vois", 'El hombre que veo || El hombre al que veo'],
        ['Lison ke ta lis es bona.', 'Le livre que tu lis est bon.', 'El libro que lees es bueno.'],
        ['Na pen to se va len.', "Je pense qu'il viendra.", 'Creo que vendrá. || Pienso que él vendrá. || Creo que él vendrá.'],
        ['Na pen to ta es vraia.', 'Je pense que tu as raison.', 'Creo que tienes razón. || Pienso que tienes razón.'],
      ] },
    { title: { fr: 'Bien que, pour que', es: 'Aunque, para que' }, words: ['tama', 'pol', 'sota', 'tes'],
      s: [
        ['Tama se sika, se trav.', "Bien qu'il soit malade, il travaille.", 'Aunque está enfermo, trabaja. || Aunque esté enfermo, trabaja.'],
        ['Se ra drek vaelarly, sota varkanen ra naz.', 'Il a combattu si fort que les soldats ont fui.', 'Combatió tan fuerte que los soldados huyeron. || Luchó tan fuerte que los soldados huyeron.'],
        ['Na tes, pol ta ler.', "J'enseigne pour que tu apprennes.", 'Enseño para que aprendas.'],
        ['Tama na lasa, na va pael.', 'Bien que je sois fatigué, je marcherai. || Bien que je sois fatiguée, je marcherai.', 'Aunque estoy cansado, caminaré. || Aunque estoy cansada, caminaré.'],
      ] },
  ]
},
{
  id: 'u21', icon: '🏰', color: 'violet',
  title: { fr: 'Légendes du royaume', es: 'Leyendas del reino' },
  desc: { fr: 'Rois, dragons et proverbes', es: 'Reyes, dragones y proverbios' },
  tip: {
    fr: `<p>Le <b>registre de cour</b> répète le sujet en fin de phrase pour la solennité : <i>Aeron va enar, se aeron</i> (Le roi vivra, lui le roi).</p>
<p>Le Vaelrën regorge d'<b>expressions idiomatiques</b> : <i>Na es en sel</i> (« je suis dans la lumière ») veut dire « tout va bien pour moi ».</p>
<p>Les habitants se forment avec <b>-ar</b> : <i>Aerath</i> → <i>aerathar</i> (Aerathien·ne).</p>`,
    es: `<p>El <b>registro de corte</b> repite el sujeto al final de la frase por solemnidad: <i>Aeron va enar, se aeron</i> (El rey vivirá, él, el rey).</p>
<p>El vaelrën está lleno de <b>expresiones idiomáticas</b>: <i>Na es en sel</i> (« estoy en la luz ») significa « todo me va bien ».</p>
<p>Los gentilicios se forman con <b>-ar</b>: <i>Aerath</i> → <i>aerathar</i> (aerathiano/a).</p>`
  },
  lessons: [
    { title: { fr: 'La cour royale', es: 'La corte real' }, words: ['aerdor', 'vardan', 'firan', 'vard'],
      s: [
        ['Aeron e aerona enar en aerdor.', 'Le roi et la reine vivent dans le royaume.', 'El rey y la reina viven en el reino.'],
        ['Vardan vard portelm.', 'Le gardien garde la porte.', 'El guardián vigila la puerta. || El guardián guarda la puerta.'],
        ['Drekar hev kelanm e firanm.', 'Le guerrier porte une épée et un bouclier.', 'El guerrero lleva una espada y un escudo.'],
        ['Aeron va enar, se aeron.', 'Le roi vivra, lui le roi.', 'El rey vivirá, él, el rey.'],
        ['Varkanen fir aeronm.', 'Les soldats protègent le roi.', 'Los soldados protegen al rey.'],
      ] },
    { title: { fr: 'Le dragon', es: 'El dragón' }, words: ['folkel', 'sola'],
      s: [
        ['Vazir vez en aer.', 'Le dragon vole dans le ciel.', 'El dragón vuela en el cielo.'],
        ['Drekar drek vazirm.', 'Le guerrier combat le dragon.', 'El guerrero combate al dragón. || El guerrero lucha contra el dragón.'],
        ['Ta va sor kela vazirm sola.', 'Tu pourras tuer le dragon seul. || Tu pourras tuer le dragon seule.', 'Podrás matar al dragón solo. || Podrás matar al dragón sola.'],
        ['Folkel naz.', 'Le peuple fuit. || Les gens fuient.', 'El pueblo huye. || La gente huye.'],
        ['Selar fir selm.', 'Le gardien de la lumière protège la lumière.', 'El guardián de la luz protege la luz.'],
      ] },
    { title: { fr: 'Royaumes lointains', es: 'Reinos lejanos' }, words: ['Aerath', 'Selanor', 'Morengal', 'Thalmoria', 'aerathar', 'empel'],
      s: [
        ['Na ra gen en Aerath.', 'Je suis né à Aerath. || Je suis née à Aerath.', 'Nací en Aerath.'],
        ['Se es aerathar.', 'Il est aerathien.', 'Él es aerathiano.'],
        ['Selanor es varad selen.', 'Selanor est une ville lumineuse.', 'Selanor es una ciudad luminosa.'],
        ['Morengal es moren.', 'Morengal est sombre.', 'Morengal es oscuro. || Morengal es oscura.'],
        ['Thalmoria es empel thala.', 'Thalmoria est un grand empire.', 'Thalmoria es un gran imperio. || Thalmoria es un imperio grande.'],
      ] },
    { title: { fr: 'Proverbes', es: 'Proverbios' }, words: ['kared'],
      s: [
        ['Na es en sel.', 'Je suis dans la lumière. || Tout va bien pour moi.', 'Estoy en la luz. || Todo me va bien.'],
        ['Aer selen, vaelin nar.', 'Ciel lumineux, notre force.', 'Cielo luminoso, nuestra fuerza.'],
        ['Drekar ul haz vaelin.', 'Le combattant ne perd pas sa force.', 'El combatiente no pierde su fuerza.'],
        ['Kared thal.', 'Le grand chemin.', 'El gran camino.'],
        ['Se drek sen.', 'Il se combat lui-même.', 'Él lucha contra sí mismo. || Él se combate a sí mismo.'],
        ['Na ser ma na ul ser.', 'Je sais ce que je ne sais pas.', 'Sé lo que no sé.'],
      ] },
  ]
},
{
  id: 'u22', icon: '😎', color: 'green',
  title: { fr: 'Parler comme un local', es: 'Hablar como un local' },
  desc: { fr: 'Le registre familier', es: 'El registro coloquial' },
  tip: {
    fr: `<p>Entre potes, le Vaelrën se raccourcit ! <b>hael</b> (salut), <b>grat</b> (merci), <b>post</b> (à plus).</p>
<p>Le <b>registre familier</b> supprime souvent la particule de temps : <i>Tor ta vel ?</i> (Tu vas où ?).</p>
<p>⚠️ Ces mots sont à éviter dans un contexte formel ou royal !</p>`,
    es: `<p>¡Entre colegas, el vaelrën se acorta! <b>hael</b> (hola), <b>grat</b> (gracias), <b>post</b> (hasta luego).</p>
<p>El <b>registro coloquial</b> suele suprimir la partícula de tiempo: <i>Tor ta vel ?</i> (¿Adónde vas?).</p>
<p>⚠️ ¡Evita estas palabras en un contexto formal o real!</p>`
  },
  lessons: [
    { title: { fr: 'Entre potes', es: 'Entre colegas' }, words: ['venel', 'darel', 'sarina', 'gosel', 'zestara', 'folara'],
      s: [
        ['Hael, venel !', 'Salut, mon pote ! || Salut, pote !', '¡Hola, colega! || ¡Hola, tío!'],
        ['Darel es zestara.', 'Le mec est cool. || Ce mec est cool.', 'El tío es guay. || El chaval es guay.'],
        ['Sarina es folara !', 'La meuf est dingue !', '¡La tía está loca!'],
        ['Gosel pir.', 'Le gamin joue. || Le gosse joue.', 'El chaval juega. || El crío juega.'],
        ['Grat, venel !', 'Merci, mon pote ! || Merci, pote !', '¡Gracias, colega! || ¡Gracias, tío!'],
      ] },
    { title: { fr: "C'est quoi ce truc ?", es: '¿Qué es este chisme?' }, words: ['frikel', 'bagel', 'trukel', 'gobar', 'kifar', 'trembar', 'fatila', 'musel'],
      s: [
        ['Na gobar.', 'Je bouffe.', 'Estoy zampando. || Zampo.'],
        ['Na kifar muselm.', 'Je kiffe la musique.', 'Me mola la música.'],
        ['Na ul hab frikelm.', "Je n'ai pas de fric. || J'ai pas de fric.", 'No tengo pasta.'],
        ['Tair bagel es zestara !', 'Ta bagnole est cool !', '¡Tu coche es guay!'],
        ['Na es fatila.', 'Je suis crevé. || Je suis naze. || Je suis crevée.', 'Estoy reventado. || Estoy hecho polvo. || Estoy reventada.'],
        ['Ma es trukel hoia ?', "C'est quoi ce truc ? || Qu'est-ce que c'est que ce truc ?", '¿Qué es este chisme? || ¿Qué es esta cosa?'],
      ] },
  ]
}
);
