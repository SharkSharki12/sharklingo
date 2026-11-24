/* Sharklingo — Cursus, partie 3 (unités 23 et 24) : vocabulaire du Dictionnaire du Vaelrën, édition 3 */
window.COURSE = window.COURSE || [];
window.COURSE.push(
{
  id: 'u23', icon: '🗓️', color: 'orange',
  title: { fr: 'Mois et saisons', es: 'Meses y estaciones' },
  desc: { fr: "Le calendrier et les fêtes", es: 'El calendario y las fiestas' },
  tip: {
    fr: `<p>Les <b>mois</b> et les <b>saisons</b> sont des noms en <b>-el</b>, comme la plupart des noms du dictionnaire : <i>enerel</i> (janvier), <i>veranel</i> (été).</p>
<p>Pour dire « en avril », on utilise la préposition <b>en</b> : <i>Na ra gen en abrel</i> = Je suis né en avril.</p>
<p>Ces noms se déclinent comme les autres : <i>kumpleanosel</i> (anniversaire) → <i>kumpleanosel<b>m</b></i> (objet) ; <i>saizel</i> → <i>saizel<b>en</b></i> (les saisons).</p>`,
    es: `<p>Los <b>meses</b> y las <b>estaciones</b> son nombres en <b>-el</b>, como la mayoría de los nombres del diccionario: <i>enerel</i> (enero), <i>veranel</i> (verano).</p>
<p>Para decir « en abril », se usa la preposición <b>en</b>: <i>Na ra gen en abrel</i> = Nací en abril.</p>
<p>Estos nombres se declinan como los demás: <i>kumpleanosel</i> (cumpleaños) → <i>kumpleanosel<b>m</b></i> (objeto); <i>saizel</i> → <i>saizel<b>en</b></i> (las estaciones).</p>`
  },
  lessons: [
    { title: { fr: 'De janvier à juin', es: 'De enero a junio' }, words: ['enerel', 'febrerel', 'marzel', 'abrel', 'mael', 'huniel'],
      s: [
        ['Enerel es kalda.', 'Janvier est froid.', 'Enero es frío.'],
        ['Mael es bela.', 'Mai est beau.', 'Mayo es bonito.'],
        ['Na ra gen en abrel.', 'Je suis né en avril. || Je suis née en avril.', 'Nací en abril. || Yo nací en abril.'],
        ['Febrerel es korta.', 'Février est court.', 'Febrero es corto.'],
        ['Marzel e abrel', 'Mars et avril', 'Marzo y abril'],
        ['Ta va len en huniel ae ?', 'Viendras-tu en juin ? || Tu viendras en juin ?', '¿Vendrás en junio?'],
      ] },
    { title: { fr: 'De juillet à décembre', es: 'De julio a diciembre' }, words: ['huliel', 'agostel', 'septembrel', 'oktubrel', 'novembrel', 'disembrel'],
      s: [
        ['En agostel, sol es tre varma.', 'En août, le soleil est très chaud.', 'En agosto, el sol es muy caliente. || En agosto, el sol calienta mucho.'],
        ['Na va voyar en huliel.', 'Je voyagerai en juillet.', 'Viajaré en julio.'],
        ['Oktubrel e novembrel', 'Octobre et novembre', 'Octubre y noviembre'],
        ['Disembrel es lunael kalda.', 'Décembre est un mois froid.', 'Diciembre es un mes frío.'],
        ['En septembrel, narelen vel en leror.', "En septembre, les enfants vont à l'école.", 'En septiembre, los niños van a la escuela.'],
      ] },
    { title: { fr: 'Les quatre saisons', es: 'Las cuatro estaciones' }, words: ['primaverel', 'veranel', 'otonel', 'invernel', 'saizel'],
      s: [
        ['Primaverel es bela.', 'Le printemps est beau.', 'La primavera es bonita.'],
        ['En veranel, nar nag en marel.', 'En été, nous nageons dans la mer.', 'En verano, nadamos en el mar.'],
        ['En otonel, helan fael.', 'En automne, il pleut. || En automne, la pluie tombe.', 'En otoño, llueve. || En otoño, cae la lluvia.'],
        ['Invernel es tre kalda.', "L'hiver est très froid.", 'El invierno es muy frío.'],
        ['Na ela veranelm.', "J'aime l'été.", 'Me gusta el verano. || Amo el verano.'],
        ['Kvar saizelen', 'Quatre saisons', 'Cuatro estaciones'],
      ] },
    { title: { fr: "Joyeux anniversaire !", es: '¡Feliz cumpleaños!' }, words: ['festel', 'kumpleanosel', 'regel', 'kandel', 'festeh'],
      s: [
        ['Ansol es nair kumpleanosel !', "Aujourd'hui c'est mon anniversaire ! || Aujourd'hui, c'est mon anniversaire !", '¡Hoy es mi cumpleaños!'],
        ['Na dal regelm nair venan.', 'Je donne un cadeau à mon ami.', 'Doy un regalo a mi amigo. || Le doy un regalo a mi amigo.'],
        ['Gatel hab deka kandelenm.', 'Le gâteau a dix bougies.', 'El pastel tiene diez velas.'],
        ['Nar festeh tair kumpleanoselm.', 'Nous fêtons ton anniversaire.', 'Celebramos tu cumpleaños. || Festejamos tu cumpleaños.'],
        ['Festel es bela !', 'La fête est belle !', '¡La fiesta es bonita!'],
        ['Nar va dansar en festel.', 'Nous danserons à la fête.', 'Bailaremos en la fiesta.'],
      ] },
  ]
},
{
  id: 'u24', icon: '🏙️', color: 'blue',
  title: { fr: 'En ville', es: 'En la ciudad' },
  desc: { fr: 'Rues, magasins et monuments', es: 'Calles, tiendas y monumentos' },
  tip: {
    fr: `<p>Le dictionnaire forme les <b>métiers</b> avec <b>-ar</b> et les <b>lieux</b> avec <b>-or</b> ou un nom en -el : <i>panadar</i> (boulanger), <i>panaderel</i> (boulangerie).</p>
<p>Pour un moyen de transport, on emploie l'<b>instrumental -ek</b> : <i>Na voyar trenel<b>ek</b></i> = Je voyage en train.</p>
<p>Le suffixe <b>-thal</b> agrandit : <i>varad</i> (ville) → <i>varadthal</i> (métropole).</p>`,
    es: `<p>El diccionario forma los <b>oficios</b> con <b>-ar</b> y los <b>lugares</b> con <b>-or</b> o un nombre en -el: <i>panadar</i> (panadero), <i>panaderel</i> (panadería).</p>
<p>Para un medio de transporte, se usa el <b>instrumental -ek</b>: <i>Na voyar trenel<b>ek</b></i> = Viajo en tren.</p>
<p>El sufijo <b>-thal</b> agranda: <i>varad</i> (ciudad) → <i>varadthal</i> (metrópoli).</p>`
  },
  lessons: [
    { title: { fr: 'Dans la rue', es: 'En la calle' }, words: ['kalel', 'pontel', 'parkal', 'hardinel', 'tendal'],
      s: [
        ['Kalel es lonja.', 'La rue est longue.', 'La calle es larga.'],
        ['Pontel es vetha.', 'Le pont est vieux.', 'El puente es viejo.'],
        ['Narelen pir en parkal.', 'Les enfants jouent dans le parc.', 'Los niños juegan en el parque.'],
        ['Na maz panelm en tendal.', "J'achète du pain au magasin.", 'Compro pan en la tienda.'],
        ['Florelen es en hardinel.', 'Les fleurs sont dans le jardin.', 'Las flores están en el jardín.'],
        ['Tor es tendal ?', 'Où est le magasin ?', '¿Dónde está la tienda?'],
      ] },
    { title: { fr: 'Les bâtiments', es: 'Los edificios' }, words: ['panaderel', 'panadar', 'bibliel', 'musal', 'bankal', 'iglesiel'],
      s: [
        ['Panadar fak panelm.', 'Le boulanger fait du pain.', 'El panadero hace pan.'],
        ['Na vel en panaderel.', 'Je vais à la boulangerie.', 'Voy a la panadería.'],
        ['Nar lis lisonenm en bibliel.', 'Nous lisons des livres à la bibliothèque.', 'Leemos libros en la biblioteca.'],
        ['Musal es thala.', 'Le musée est grand.', 'El museo es grande.'],
        ['Monel es en bankal.', "L'argent est à la banque.", 'El dinero está en el banco.'],
        ['Iglesiel es tre vetha.', "L'église est très vieille.", 'La iglesia es muy vieja.'],
      ] },
    { title: { fr: 'Se déplacer', es: 'Desplazarse' }, words: ['estal', 'trenel', 'visit', 'polisar', 'medikal', 'farmasiel'],
      s: [
        ['Trenel es en estal.', 'Le train est à la gare.', 'El tren está en la estación.'],
        ['Na voyar trenelek.', 'Je voyage en train.', 'Viajo en tren.'],
        ['Ser ra visit musalm.', 'Ils ont visité le musée.', 'Ellos visitaron el museo. || Ellos han visitado el museo.'],
        ['Polisar fir varadm.', 'Le policier protège la ville.', 'El policía protege la ciudad.'],
        ['Medikal hel narelm.', "Le médecin soigne l'enfant. || Le médecin guérit l'enfant.", 'El médico cura al niño.'],
        ['Farmasiel es tael.', 'La pharmacie est là-bas.', 'La farmacia está allí.'],
      ] },
    { title: { fr: 'Châteaux et palais', es: 'Castillos y palacios' }, words: ['kastel', 'palasiel', 'torol', 'vakasionel', 'varadthal'],
      s: [
        ['Aeron enar en palasiel.', 'Le roi vit dans un palais.', 'El rey vive en un palacio.'],
        ['Kastel es en ondar.', 'Le château est sur la montagne. || Le château est dans la montagne.', 'El castillo está en la montaña.'],
        ['Torol es tre alta.', 'La tour est très haute.', 'La torre es muy alta.'],
        ['En vakasionel, nar visit kastelm.', 'En vacances, nous visitons un château.', 'De vacaciones, visitamos un castillo. || En vacaciones, visitamos un castillo.'],
        ['Varadthal', 'Métropole || Grande ville', 'Metrópoli || Gran ciudad'],
      ] },
  ]
}
);
