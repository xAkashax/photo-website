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
  currentImg++;
  setTimeout(() => {
    this.slider();
  }, 5000);
}

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

// formularz

// galeria
function fetchImage() {
  var myHeaders = new Headers();
  //myHeaders.append('Authorization', 'Client-ID c300f51e598cc26');
  myHeaders.append(
    'Authorization',
    'Bearer c824cac64401f471be795bd28684eafad0e076ea'
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch('https://api.imgur.com/3/account/xakashax/albums/', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

fetchImage();
