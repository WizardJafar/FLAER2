document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const fullMenu = document.getElementById('full-menu');

    toggleButton.addEventListener('click', function () {
        if (fullMenu.style.display === 'none' || fullMenu.style.display === '') {
            fullMenu.style.display = 'block';
            toggleButton.textContent = 'Hide Full Menu';
        } else {
            fullMenu.style.display = 'none';
            toggleButton.textContent = 'Check Full Menu';
        }
    });

    const offerButton = document.getElementById("special-offer-button");
    const offerSection = document.getElementById("special-offer");

    offerButton.addEventListener("click", function() {
        if (offerSection.classList.contains("hidden")) {
            offerSection.classList.remove("hidden");
        } else {
            offerSection.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeController = document.querySelector('.theme-controller');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeController.checked = savedTheme === 'luxury';
    }

    themeController.addEventListener('change', toggleTheme);
});

function toggleTheme() {
    const themeController = document.querySelector('.theme-controller');
    const theme = themeController.checked ? 'luxury' : '';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
