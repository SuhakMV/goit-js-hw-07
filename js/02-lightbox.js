import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGalleryItemsMarkup = (galleryItems) =>
    galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                >
            </a>
        </li>`
).join("");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

    var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
});