import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox;

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b><br> ${likes}</p>
          <p><b>Views</b><br> ${views}</p>
          <p><b>Comments</b><br> ${comments}</p>
          <p><b>Downloads</b><br> ${downloads}</p>
        </div>
      </li>`
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
  document.body.classList.add('loading');
}

export function hideLoader() {
  document.body.classList.remove('loading');
}
