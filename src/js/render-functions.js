import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Створення галереї
export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
      <a class="gallery-item" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// Очищення галереї
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Показати лоадер
export function showLoader() {
  loader.classList.add('visible');
}

// Сховати лоадер
export function hideLoader() {
  loader.classList.remove('visible');
}
