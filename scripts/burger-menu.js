const navMenu = document.getElementById('navMenu');
const burgerMenu = document.getElementById('burgerMenu');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
   
});

// Добавляем обработчик клика на ссылки в navMenu
// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         burgerMenu.classList.remove('active');
//         navMenu.classList.remove('active');
        
//     });
// });