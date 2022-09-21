'use strict';

// pobieranie i zmiana zdjęć w tle

document.addEventListener('DOMContentLoaded', () => {
  this.slider();
});

const bgImages = document.querySelector('.bg-img');
const howManyImages = 10;
let currentImg = 1;

function slider() {
  const version = window.innerWidth > 1024 ? 'desktop' : 'mobile';
  console.log(window.innerWidth);

  if (currentImg > howManyImages) {
    currentImg = 1;
  }
  bgImages.style.backgroundImage = `url(img/${version}/${currentImg}.jpg)`;
  // bgImages.style.transition = 'opacity 1s ease-in-out';
  currentImg++;
  setTimeout(() => {
    this.slider();
  }, 5000);
}

// otwieranie menu

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-links');

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
