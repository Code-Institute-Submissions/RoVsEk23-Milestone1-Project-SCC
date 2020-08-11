const toggleButton =  document.getElementsByClassName('hamburger');
const navbarLinks = document.getElementsByClassName('menu-list');

toggleButton.addEventListener('click', () => {
    navbarLinks.class.toggle('show');
});
