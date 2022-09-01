import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onlmageClick);