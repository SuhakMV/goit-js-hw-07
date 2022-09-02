import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGalleryItemsMarkup = (galleryItems) =>
    galleryItems.map(({preview, original, description}) =>
    `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                >
            </a>
        </div>`
).join("");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onItemClick);

function onItemClick(event) {
    event.preventDefault();

    const isGalleryItemEl = event.target.classList.contains('gallery__image');
    if (!isGalleryItemEl) {
        return;
    }

    const galleryItemOpen = event.target.dataset.source;
    const instance = basicLightbox.create(`<img class="modal-image" src="${galleryItemOpen}">`);
    instance.show();
    window.addEventListener('keydown', onEsc);

        function onEsc(event) {
            const ESC_KEY_CODE = 'Escape';

            if(event.code === ESC_KEY_CODE) {
                instance.close();

                window.removeEventListener('keydown', onEsc);
            }
        }
}