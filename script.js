// Exemple de liste de personnages
const personnages = [
  { nom: "Sa'd", surnom: "ibn abi waqqaas", title:" سعد بن أبي وقاص", particularites: [
    "L'un des premiers convertis et grand stratège militaire",
    " il fut conquérant de la Perse."
  ], dateNaissance: "1985-04-12", nbHadiths: 270, ville: "Mecque, Médine" },

  { nom: "Djaabir", surnom: "ibn 'abdilLaah", title:"جابر بن عبد الله", dateNaissance: "1985-04-12", nbHadiths: 1540, ville: "Medine, Bagdad, Egypte, Damas" },

  { nom: "bilal", surnom: "ibn rabah", title:"بلال بن رباح", particularites: [
    "Premier muezzin de Médine", 
    " ancien esclave éthipien libéré par Abou Bakr."
  ], dateNaissance: "634", nbHadiths: 550, ville: "Mecque, Medine, Syrie" },

  { nom: "Oubay", surnom: "ibn ka'b", title:"أبي بن كعب", dateNaissance: "1992-08-23", nbHadiths: 164, ville: "Medine" },

  { nom: "abou bakr", surnom: "essiddiiq", title:"أبو بكر الصديق", particularites: [
    "Premier calife après le Prophète", 
    " meilleur ami et beau-père du Prophète", 
    " a converti 5 compagnons parmi les 10 promis au Paradis",
    " a dirigé le premier état islamique après le décès du Prophète."
  ], dateNaissance: "634", nbHadiths: 142, ville: "Mecque" },

  { nom: "mou'aadh", surnom: "ibn djabal", title:"معاذ بن جبل", particularites: [
    "Envoyé au Yémen comme juge et enseignant. Le Prophète le décrivit comme le plus savant de ma communauté concernant le licite et l'illicite"
   ], dateNaissance: "1992-08-23", nbHadiths: 157, ville: "Medine, Yemen Mecque, Palestine, Syrie" },

  { nom: "abdoulLaah", surnom: "ibn 'abbaas", title:"عبد الله بن عباس", dateNaissance: "1992-08-23", nbHadiths: 1160, ville: "Mecque, Medine" },

  { nom: "abdoulLaah", surnom: "ibn 'omar", title:"عبد الله بن عمر", dateNaissance: "1992-08-23", nbHadiths: 2630, ville: "Mecque" },

  { nom: "Zoubayr", surnom: "ibn al'awwaam", title:"الزبير بن العوام بن خويلد", dateNaissance: "656", nbHadiths: 2630, ville: "Mecque, Medine" },


  { nom: "abdoulLaah", surnom: "ibn mas'oud", title:"عبدالله بن مسعود", particularites: [
    "L'un des premiers convertis à l'Islam",
    " Compagnon constant du Prophète et gardien de ses secrets",
    " Premier à réciter publiquement le Coran à La Mecque",
    " Éminent juriste et enseignant du Coran",
    " A transmis plus de 800 hadiths"
  ], dateNaissance: "1992-08-23", nbHadiths: 848, ville: "Mecque" },

  { nom: "salmaan", surnom: "alfaarisiy", title:" سلمان الفارسي", particularites: [
    "D'origine persane, ancien zoroastrien puis chrétien",
    " A voyagé pendant des années à la recherche de la vérité",
    " A suggéré la stratégie du fossé lors de la bataille des Coalisés",
    " Gouverneur de Madain sous le califat d'Umar",
    " Symbolise la dimension universelle de l'Islam"
  ], dateNaissance: "654", nbHadiths: 50, ville: "Mecque" },

  { nom: "omar", surnom: "ibn elkhattaab", title:"أبو حفص عمر بن الخطاب", particularites: [
    "Deuxième calife de l'Islam",
    " Connu pour sa force, sa justice et son caractère direct",
    " A établi de nombreuses institutions administratives",
    " A supervisé l'expansion de l'empire islamique",
    " Connu pour vivre simplement malgré sa position de pouvoir"
  ], dateNaissance: "1990-02-15", nbHadiths: 22, ville: "Mecque" },

  { nom: "zayd", surnom: "ibn thaabit", title:"زيد بن ثابت", particularites: [

  ], dateNaissance: "1982-07-30", nbHadiths: 42, ville: "Mecque" },

  { nom: "aliy", surnom: "ibn abi talib", title:"علي بن أبي طالب", particularites: [
    "Quatrième calife de l'Islam",
    " Cousin et gendre du Prophète Muhammad",
    " Premier enfant à avoir embrassé l'Islam",
    " Reconnu pour son éloquence, sa sagesse et sa bravoure",
    " Figure centrale dans la tradition intellectuelle islamique"
  ], dateNaissance: "789", nbHadiths: 345, ville: "Koufa, Medine, Mecque" },

  { nom: "Abou sa'iid", surnom: "elkhoudriyy", title:"أبو سعيد الخدري", dateNaissance: "1992-08-23", nbHadiths: 1170, ville: "Mecque" },

  { nom: "aicha", surnom: "bint abi bakr", title:"عائشة", particularites: [
    "Épouse bien-aimée du Prophète Muhammad",
    " Fille d'Abu Bakr",
    " Grande savante et narratrice de nombreux hadiths",
    " A joué un rôle important dans la transmission du savoir islamique",
    " Connue pour son intelligence et sa mémoire exceptionnelle"
  ], dateNaissance: "678", nbHadiths: 2210, ville: "Medine" },

  { nom: "outhmaan", surnom: "ibn affaan", title:"عثمان بن عفان", particularites: [
    "Troisième calife de l'Islam",
    " A épousé deux filles du Prophète (d'où son surnom)",
    " A financé l'équipement de l'armée musulmane lors de difficultés",
    " A supervisé la compilation standardisée du Coran",
    " Connu pour sa modestie et sa générosité exceptionnelle"
  ], dateNaissance: "789", nbHadiths: 146, ville: "Mecque" },

  { nom: "anas", surnom: "ibn maalik", title:"أنس بن مالك الأنصاري", dateNaissance: "1992-08-23", nbHadiths: 2286, ville: "Mecque" },

  { nom: "abou houreira", surnom: "", title:"أبوهريرة", dateNaissance: "632", nbHadiths: 5374, ville: "Mecque" }
];

/**
 * Fonction pour obtenir le texte du badge en fonction du nombre de hadiths
 */
function getBadgeText(nbHadiths) {
  if (nbHadiths >= 1000) return "Expert";
  if (nbHadiths >= 400) return "Avancé";
  if (nbHadiths >= 30) return "Intermédiaire";
  return "Débutant";
}

/**
 * Filtre les personnages par ordre alphabétique, date de naissance ou nombre de hadiths
 * @param {Array} personnages - Liste des personnages à filtrer
 * @param {String} critere - Critère de tri ('nom', 'prenom', 'dateNaissance' ou 'nbHadiths')
 * @param {Boolean} croissant - Ordre croissant (true) ou décroissant (false)
 * @returns {Array} - Liste des personnages filtrés
 */
function filtrerPersonnages(personnages, critere = 'nom', croissant = true) {
  // Création d'une copie pour ne pas modifier l'original
  const personnagesCopie = [...personnages];
  
  return personnagesCopie.sort((a, b) => {
      let valeurA, valeurB;
      
      // Extraction des valeurs selon le critère
      if (critere === 'dateNaissance') {
          valeurA = new Date(a.dateNaissance);
          valeurB = new Date(b.dateNaissance);
      } else if (critere === 'nbHadiths') {
          valeurA = a.nbHadiths;
          valeurB = b.nbHadiths;
      } else {
          valeurA = a[critere].toLowerCase();
          valeurB = b[critere].toLowerCase();
      }
      
      // Comparaison selon l'ordre demandé
      if (croissant === true || croissant === "true") {
          return valeurA < valeurB ? -1 : valeurA > valeurB ? 1 : 0;
      } else {
          return valeurA > valeurB ? -1 : valeurA < valeurB ? 1 : 0;
      }
  });
}

/**
 * Fonction pour calculer l'âge à partir de la date de naissance
 */
function calculerAge(dateNaissance) {
  const aujourdHui = new Date();
  const dateNaiss = new Date(dateNaissance);
  let age = aujourdHui.getFullYear() - dateNaiss.getFullYear();
  const moisDiff = aujourdHui.getMonth() - dateNaiss.getMonth();
  
  if (moisDiff < 0 || (moisDiff === 0 && aujourdHui.getDate() < dateNaiss.getDate())) {
      age--;
  }
  
  return age;
}

/**
* Fonction pour afficher les personnages sous forme de cartes
*/
function afficherPersonnages(personnagesFiltres) {
  const container = document.getElementById('cartesContainer');
  container.innerHTML = '';
  
  personnagesFiltres.forEach(personnage => {
      // Formatage de la date pour l'affichage
      const date = new Date(personnage.dateNaissance);
      const dateFormatee = date.toLocaleDateString('fr-FR');
      const age = calculerAge(personnage.dateNaissance);
      
      const carte = document.createElement('li');
      carte.className = 'item';
      
      carte.innerHTML = `
          <h2 class="card--header">
              <span dir="rtl" lang="ar" title="${personnage.title}">${personnage.nom} ${personnage.surnom}</span>
          </h2>
          <div class="card--body">
              <div class="card--info">
                  <p class="card--label">Décès : ${dateFormatee} <!--(${age} ans)--></p>
              </div>
              <div class="card--info">
                  <p class="card--label">Particularités :</p>
                  <p> ${personnage.particularites}</p>
                  <p class="card--label flex">Hadiths rapportés : 
                      ${personnage.nbHadiths}
                      <span>Ville(s) d'habitation : ${personnage.ville}</span>
                      <span class="card--badge">${getBadgeText(personnage.nbHadiths)}</span>
                  </p>
              </div>
          </div>
      `;
      
      container.appendChild(carte);
  });
}

// Fonction pour obtenir le texte du badge en fonction du nombre de hadiths
function getBadgeText(nbHadiths) {
  if (nbHadiths >= 1000) return "Expert";
  if (nbHadiths >= 400) return "Avancé";
  if (nbHadiths >= 20) return "Intermédiaire";
  return "Débutant";
}

// Gestion des boutons de filtre
document.querySelectorAll('.btn').forEach(bouton => {
  bouton.addEventListener('click', function() {
      // Retirer la classe active de tous les boutons
      document.querySelectorAll('.btn').forEach(b => {
          b.classList.remove('active');
      });
      
      // Ajouter la classe active au bouton cliqué
      this.classList.add('active');
      
      // Récupérer les attributs de tri
      const critere = this.getAttribute('data-critere');
      const ordre = this.getAttribute('data-ordre');
      
      // Filtrer et afficher les personnages
      const personnagesFiltres = filtrerPersonnages(personnages, critere, ordre);
      afficherPersonnages(personnagesFiltres);
  });
});

// Affichage initial (tri par défaut: nom A-Z)
const personnagesFiltres = filtrerPersonnages(personnages, 'nom', true);
afficherPersonnages(personnagesFiltres);


// Filters scroll animation
const filters = document.getElementById('filters');
const remove = document.querySelector('.btn--close');

window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
      filters.classList.add('active');
    }
    if(window.scrollY < 100) {
      filters.classList.remove('active');
    }
    if (remove && filters) {
      remove.addEventListener('click', function() {
        filters.classList.remove('active');
        filters.classList.add('zizou');
      });
    }
});

// Back-to-top animation
const backtop = document.querySelector('.backTop');
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        backtop.classList.add('active');
    }
    if(window.scrollY < 100) {
        backtop.classList.remove('active');
    }
});


