    document.addEventListener("DOMContentLoaded", () => {
        // 1. Définition du HTML du Menu (Template String)
        const menuTemplate = `
            <div class="menu-overlay" id="globalMenu">
                <button class="close-menu-btn" onclick="toggleGlobalMenu()">FERMER [X]</button>
                <nav class="flex flex-col items-center">
                    <a href="/index.html" class="menu-link">ACCUEIL</a>
                    <a href="/theorie.html" class="menu-link">MÉCANIQUE</a>
                    <a href="/labo.html" class="menu-link">LABO</a>
                    <a href="/bureau.html" class="menu-link">BUREAU D'ÉTUDES</a>
                    <a href="/dojo.html" class="menu-link">DOJO</a>
                    <a href="/nexae.html" class="menu-link" style="color: #00ffff;">NEXEA</a>
                </nav>
            </div>
        `;

        // 2. Injection du HTML dans le body
        document.body.insertAdjacentHTML('beforeend', menuTemplate);
    });

    // 3. Fonction globale pour l'ouverture/fermeture (attachée à window pour être accessible depuis le HTML)
    window.toggleGlobalMenu = function() {
        const menu = document.getElementById('globalMenu');
        if (menu) {
            menu.classList.toggle('open');
            // Bloquer le scroll quand le menu est ouvert
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : 'auto';
        }
    };