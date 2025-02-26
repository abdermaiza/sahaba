// Exemple de liste de personnages
const personnages = [
  { nom: "Sa'd", surnom: "ibn abi waqqaas", title:"أبو هريرة", dateNaissance: "1985-04-12", nbHadiths: 270 },
  { nom: "bilal", surnom: "elhabachi", dateNaissance: "1992-08-23", nbHadiths: 550 },
  { nom: "Oubay", surnom: "ibn ka'b", dateNaissance: "1992-08-23", nbHadiths: 164 },
  { nom: "abou bakr", surnom: "essiddiiq", dateNaissance: "1978-11-05", nbHadiths: 142 },
  { nom: "mou'aadh", surnom: "ibn djabal", dateNaissance: "1992-08-23", nbHadiths: 157 },
  { nom: "abdoulLaah", surnom: "ibn 'abbaas", tite:"عبد الله بن عباس", dateNaissance: "1992-08-23", nbHadiths: 1160 },
  { nom: "abdoulLaah", surnom: "ibn 'omar", title:"عبد الله بن عمر", dateNaissance: "1992-08-23", nbHadiths: 2630 },
  { nom: "abdoulLaah", surnom: "ibn mas'oud", title:"عبدالله بن مسعود", dateNaissance: "1992-08-23", nbHadiths: 848 },
  { nom: "omar", surnom: "ibn elkhattaab", dateNaissance: "1990-02-15", nbHadiths: 2 },
  { nom: "zayd", surnom: "ibn thaabit", dateNaissance: "1982-07-30", nbHadiths: 42 },
  { nom: "aliy", surnom: "ibn abi talib", dateNaissance: "789", nbHadiths: 345 },
  { nom: "Abou sa'iid", surnom: "elkhoudriyy", title:"أبو سعيد الخدري", dateNaissance: "1992-08-23", nbHadiths: 1170 },
  { nom: "aicha", surnom: "bint abi bakr", title:"عائشة", dateNaissance: "678", nbHadiths: 2210 },
  { nom: "outhmaan", surnom: "ibn affaan", dateNaissance: "789", nbHadiths: 146 },
  { nom: "anas", surnom: "ibn maalik", title:"أنس بن مالك الأنصاري", dateNaissance: "1992-08-23", nbHadiths: 2286 },
  { nom: "abou houreira", surnom: "", title:"أبوهريرة", dateNaissance: "632", nbHadiths: 5374 }
];

/**
 * Fonction pour obtenir le texte du badge en fonction du nombre de hadiths
 */
function getBadgeText(nbHadiths) {
  if (nbHadiths >= 200) return "Expert";
  if (nbHadiths >= 100) return "Avancé";
  if (nbHadiths >= 50) return "Intermédiaire";
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
                  <p class="card--label">Particularités : 
                  </p>
                  <p class="card--label flex">Hadiths rapportés : 
                      ${personnage.nbHadiths}
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
window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
      filters.classList.add('active');
    }
    if(window.scrollY < 100) {
      filters.classList.remove('active');
    }
});