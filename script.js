const toggleButton = document.getElementById('toggle-label');
const responsiveMenu = document.getElementById('responsive-menu');

toggleButton.addEventListener('click', function() {
    responsiveMenu.classList.toggle('active');
});