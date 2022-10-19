'use strict';

document.addEventListener('DOMContentLoaded', () => {
  fillAlbums();
});

function fetchAlbums() {
  return fetch('https://api.imgur.com/3/account/xakashax/albums/', getHeaders())
    .then(response => response.json())
    .then(response => {
      return response.data.map(item => {
        return {
          id: item.id,
          cover: item.cover,
          title: item.title,
        };
      });
    })
    .catch(error => console.log('error', error));
}

async function fetchAlbumImages(albumId) {
  return fetch(`https://api.imgur.com/3/album/${albumId}/images`, getHeaders())
    .then(response => response.json())
    .then(result => {
      return result.data.map(el => {
        return el.id;
      });
    })
    .catch(error => console.log('error', error));
}

async function fillAlbums() {
  // wyrenderuj kafelki
  // pobierz kontener
  let albums = await fetchAlbums();
  const galleryContainer = document.querySelector('.gallery-container');
  albums.forEach(album => {
    const spanTag = document.createElement('span');
    const spanText = document.createTextNode(album.title);
    spanTag.appendChild(spanText);
    spanTag.classList.add('gallery-span');

    const imgTag = document.createElement('img');
    imgTag.classList.add('album-cover');
    imgTag.classList.add('inactive-cover');
    imgTag.src = `https://i.imgur.com/${album.cover}h.jpg`;

    const divTag = document.createElement('div');
    divTag.classList.add('gallery-box');
    divTag.id = album.id;

    divTag.appendChild(imgTag);
    divTag.appendChild(spanTag);

    divTag.addEventListener('click', function (tag) {
      const imgTags = document.querySelectorAll('.album-cover');

      imgTags.forEach(el => {
        el.classList.remove('active-cover');
      });

      tag.target.classList.add('active-cover');

      const generatedGalleryContainer =
        document.querySelector('.gallery-generated');
      generatedGalleryContainer.innerHTML = '';
      fillGallery(album.id);
    });

    galleryContainer.appendChild(divTag);
  });
}

async function fillGallery(gallery) {
  // wyrenderuj galerię
  const generatedGalleryContainer =
    document.querySelector('.gallery-generated');

  await fetchAlbumImages(gallery).then(links => {
    links.forEach(link => {
      const imgTagGallery = document.createElement('img');
      imgTagGallery.classList.add('img-gallery');
      imgTagGallery.src = `https://i.imgur.com/${link}h.jpg`;
      generatedGalleryContainer.appendChild(imgTagGallery);
    });
  });
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
