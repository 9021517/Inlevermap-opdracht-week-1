// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Basisfunctionaliteit: Navigeer naar secties bij klikken
    const menuItems = document.querySelectorAll("nav a");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href");
            loadPage(page);
        });
    });

    function loadPage(page) {
        console.log("Laad pagina:", page);
        // Hier zou je code toevoegen om de juiste sectie te laden
        // bijv. via een AJAX-aanroep of door dynamisch de inhoud te veranderen
    }
});
