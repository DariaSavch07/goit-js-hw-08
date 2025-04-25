const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },

];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Делегування
galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== 'IMG') return;

  const largeImageURL = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();
}
