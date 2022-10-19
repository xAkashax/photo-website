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

  if (currentImg > howManyImages) {
    currentImg = 1;
  }
  bgImages.style.backgroundImage = `url(img/${version}/${currentImg}.jpg)`;
  currentImg++;
  setTimeout(() => {
    this.slider();
  }, 5000);
}
