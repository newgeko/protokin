// --- 1. GÉNÉRATION DE LA BARRE LATÉRALE (SIDEBAR) ---
function genererSidebar() {
    const sidebarHTML = `
    <aside>
        <div id="logo">PROTOKIN</div>
        
        <div class="nav-group">
            <div class="nav-title">Navigation</div>
            <nav>
                <a href="index.html">🏠 Accueil</a>
                <a href="theorie.html">🗺️ La Théorie</a>
            </nav>
        </div>

        <div class="nav-group">
            <div class="nav-title">Organes</div>
            <nav>
                <a href="sismographe.html">📡 Sismographe</a>
                <a href="labo.html">🧪 Le Labo</a>
                <a href="bureau.html">📐 Bureau d'Études</a>
                <a href="dojo.html">🥋 Le Dojo</a>
            </nav>
        </div>
        
		<div class="nav-group">
            <div class="nav-title">Monde</div>
            <nav>
                <a href="nexae.html">🏙️ NEXÆ (Cité)</a>
            </nav>
        </div>
		
        <div style="margin-top: auto; font-size: 10px; color: #ccc; padding-top: 20px;">
            Système v2.1<br>Autonome
        </div>
    </aside>
    `;

    // Injection au début du body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// --- 2. GESTION DU MENU MOBILE (BURGER) ---
function initMobileMenu() {
    const burger = document.createElement('button');
    burger.id = 'burger';
    burger.innerHTML = '☰';
    document.body.appendChild(burger);

    // On sélectionne l'aside qu'on vient de créer
    const sidebar = document.querySelector('aside');

    burger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// --- 3. SURLIGNAGE DE LA PAGE ACTIVE ---
function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        // Si le href correspond au fichier actuel
        // OU si on est sur la racine et que le lien est index.html
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// --- 4. Fonction pour afficher un chapitre complet
function afficherChapitre(idChapitre, data) {
    // 1. Trouver le bon chapitre dans le JSON
    const chapitre = data.chapitres_detailles.find(c => c.id === idChapitre);
    if (!chapitre) return;

    // 2. Préparer le conteneur HTML
    const zoneLecture = document.getElementById('zone-lecture');
    zoneLecture.innerHTML = ''; // On vide avant de remplir

    // 3. Ajouter le Titre Principal
    let html = `<h1 class="text-4xl font-bold mb-6 font-serif">${chapitre.titre}</h1>`;
    html += `<p class="text-xl text-slate-500 italic mb-12 border-l-4 border-amber-500 pl-4">${chapitre.intro}</p>`;

    // 4. Boucle sur les blocs de contenu
    chapitre.contenu.forEach(bloc => {
        if (bloc.type === 'h2') {
            html += `<h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 border-b border-slate-200 pb-2">${bloc.texte}</h2>`;
        } 
        else if (bloc.type === 'p') {
            html += `<p class="text-slate-700 leading-relaxed mb-4 text-justify">${bloc.texte}</p>`;
        } 
        else if (bloc.type === 'citation') {
            html += `<blockquote class="bg-slate-100 p-6 my-6 border-l-4 border-slate-900 italic font-serif text-slate-600">"${bloc.texte}"</blockquote>`;
        }
        else if (bloc.type === 'image') {
            html += `<figure class="my-8"><img src="${bloc.src}" alt="Image" class="w-full rounded shadow-sm"><figcaption class="text-xs text-center text-slate-400 mt-2">${bloc.legende}</figcaption></figure>`;
        }
    });

    // 5. Injecter le tout
    zoneLecture.innerHTML = html;
}

// --- 6. GÉNÉRATION DU PIED DE PAGE (FOOTER) ---
function genererFooter() {
    const footerHTML = `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-block">
                <strong>PROTOKIN v2.1</strong><br>
                Physique & Politique du Geste
            </div>
            <div class="footer-links">
                <a href="#">Mentions Légales</a> • 
                <a href="#">Crédits</a> • 
                <a href="#">Contact</a>
            </div>
            <div class="footer-quote">
                "Ce n'est pas le corps qui produit le geste,<br>
                c'est le geste qui rend le corps possible."
            </div>
        </div>
    </footer>
    `;

    // On injecte le footer À LA FIN de la balise <main>
    // Cela permet au footer de scroller avec le contenu
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.insertAdjacentHTML('beforeend', footerHTML);
    }
}


// --- EXÉCUTION AU CHARGEMENT ---
// On lance les fonctions dans l'ordre
document.addEventListener('DOMContentLoaded', () => {
    genererSidebar();      // 1. On crée le menu
    initMobileMenu();      // 2. On ajoute le bouton mobile
    highlightActiveLink(); // 3. On illumine la page courante
	genererFooter();       // 6. Le Footer
});

