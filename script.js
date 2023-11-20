document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navbarLinks = document.getElementById('navbarLinks');

    menuIcon.addEventListener('click', function () {
        console.log('Menu icon clicked'); // Add this line
        navbarLinks.classList.toggle('show');
    });
});