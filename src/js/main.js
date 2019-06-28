var toggleMenu = document.querySelector('.toggle-menu');
var sidenav = document.querySelector('.side-nav');
var close = document.querySelector('.close');
var main = document.querySelector('main');

toggleMenu.addEventListener('click', function () {

    main.classList.add('move-right');
    sidenav.classList.add('open');
});

close.addEventListener('click', function () {

    main.classList.remove('move-right');
    sidenav.classList.remove('open');
});