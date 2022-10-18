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
function fetchAlbums() {
  fetch('https://api.imgur.com/3/account/xakashax/albums/', getHeaders())
    .then(response => response.json())
    .then(response => {
      console.log(response.data);
      var mappedAlbums = response.data.map(item => {
        return {
          id: item.id,
          cover: item.cover,
          title: item.title,
        };
      });

      fillAlbums(mappedAlbums);
    })
    .catch(error => console.log('error', error));
}

function fetchAlbumImages(albumId) {
  fetch(`https://api.imgur.com/3/album/${albumId}/images`, getHeaders())
    .then(response => response.json())
    .then(result => console.log(result.data))
    .catch(error => console.log('error', error));
}

function fillAlbums(albums) {
  // wyrenderuj kafelki
  // pobierz kontener
  const galleryContainer = document.querySelector('.gallery-container');
  albums.forEach(album => {
    const spanTag = document.createElement('span');
    const spanText = document.createTextNode(album.title);
    spanTag.appendChild(spanText);
    spanTag.classList.add('gallery-span');

    const imgTag = document.createElement('img');
    imgTag.classList.add('album-cover');
    imgTag.src = `https://i.imgur.com/${album.cover}h.jpg`;

    const divTag = document.createElement('div');
    divTag.classList.add('gallery-box');
    divTag.id = album.id;

    divTag.appendChild(imgTag);
    divTag.appendChild(spanTag);

    galleryContainer.appendChild(divTag);
  });
}

function fillGallery(gallery) {
  // wyrenderuj galerię
}

function getHeaders() {
  var myHeaders = new Headers();

  myHeaders.append(
    'Authorization',
    'Bearer c824cac64401f471be795bd28684eafad0e076ea'
  );

  return {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
}

fetchAlbums();
// fetchAlbumImages();
//fillAlbums('');
