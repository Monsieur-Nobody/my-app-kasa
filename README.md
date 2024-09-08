<H1>Kasa - Site de location immobilière</H1>


Kasa est une application web de location immobilière développée avec React. Elle permet aux utilisateurs de parcourir des annonces d’hébergements et d'en consulter les détails, ainsi qu’une section "À propos" expliquant les valeurs de la plateforme. Le projet a été réalisé dans le cadre d'une formation et met en pratique des concepts avancés de React tels que les composants dynamiques, la gestion des routes, ainsi que la récupération des données à partir d'un fichier JSON.

<H2>Fonctionnalités</H2>


Affichage des logements : La page d'accueil affiche une galerie d'annonces avec un système de cards.
Navigation : Utilisation de React Router pour gérer les différentes pages (/, /location/:id, /about, et gestion de la page 404).
Système de slider : Défilement des images dans la page de détails de chaque logement avec gestion de la navigation (boutons suivant/précédent).
Collapses dynamiques : Affichage de sections d'information (description, équipements) sous forme de collapses.
Responsive design : L'application est entièrement responsive pour une meilleure expérience sur mobile.
Technologies utilisées
React : Composants fonctionnels avec hooks (useState, useEffect).
React Router : Pour la gestion des routes et la navigation entre les différentes pages.
Slick Carousel : Pour le slider des images des logements.
SCSS : Pour la gestion des styles de manière modulaire et optimisée.
FontAwesome : Pour les icônes (chevrons, étoiles de notation, etc.).

<H3>Structure du projet</H3>

├── public/</br>
│   ├── index.html</br>
│   └── ...</br>
├── src/</br>
│   ├── assets/                # Images et icônes</br>
│   ├── components/            # Composants React</br>
│   │   ├── ChildsComponents/  # Composants enfants (Thumb, Tag, Collapse, etc.)</br>
│   │   ├── ParentsComponents/ # Composants principaux (Header, Footer, Gallery, etc.)</br>
│   │   ├── PageComponents/    # Pages (HomePage, LocationPage, AboutPage, NotFoundPage)</br>
│   ├── data/                  # Données des logements (accommodation.json)</br>
│   ├── styles/                # Fichiers SCSS</br>
│   ├── App.js                 # Composant principal gérant les routes</br>
│   └── index.js               # Point d'entrée de l'application</br>
└── README.md</br>



<H4>Installation et exécution</H4>

Clonez ce dépôt :</br>

bash</br>
Copier le code</br>
git clone https://github.com/ton-utilisateur/kasa.git</br>
Installez les dépendances du projet :</br>

bash</br>
Copier le code</br>
cd kasa</br>
npm install</br>
Installez FontAwesome pour les icônes :</br>

bash</br>
Copier le code</br>
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome</br>
Lancez l'application en mode développement :</br>

bash</br>
Copier le code</br>
npm start</br>
Ouvrez le navigateur à l'adresse http://localhost:3000 pour visualiser l'application.</br>

Auteur
Projet réalisé par Youaabed Romain dans le cadre de la formation OpenClassrooms.



