function createGallery(images) {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt || '';
    imgElement.className = 'gallery-image';
    gallery.appendChild(imgElement);
  });

  return gallery;
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.remove();
  }
}

function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(loader);
}
