'use strict';

// pobieranie i zmiana zdjęć w tle

// document.addEventListener('DOMContentLoaded', () => {
//   this.slider();
// });

// const bgImages = document.querySelector('.bg-img');
// const howManyImages = 12;
// let currentImg = 1;

// function slider() {
//   const version = window.innerWidth > 1024 ? 'desktop' : 'mobile';
//   console.log(window.innerWidth);

//   if (currentImg > howManyImages) {
//     currentImg = 1;
//   }
//   bgImages.style.backgroundImage = `url(img/${version}/${currentImg}.jpg)`;
//   currentImg++;
//   setTimeout(() => {
//     this.slider();
//   }, 1000);
// }

// otwieranie menu

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-links');

openNav.addEventListener('click', () => {
  nav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
  nav.style.display = 'none';
});
