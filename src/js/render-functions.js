import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.createElement('ul');
galleryContainer.className = 'gallery';
document.querySelector('main').appendChild(galleryContainer);

let lightbox;

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li>
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.body.classList.add('loading'); // or show a loader element
}

export function hideLoader() {
  document.body.classList.remove('loading'); // or hide the loader element
}
