const hamburger = document.querySelector('.hamburger');
const menuPopup = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    menuPopup.classList.toggle('nav-popup');
})
