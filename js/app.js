'use strict';

// otwieranie menu

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-links-mobile');

function activeNav() {
  nav.classList.toggle('active-nav');
}

openNav.addEventListener('click', () => {
  activeNav();
  closeNav.style.display = 'block';
  openNav.style.display = 'none';
});

closeNav.addEventListener('click', () => {
  activeNav();
  openNav.style.display = 'block';
  closeNav.style.display = 'none';
});
