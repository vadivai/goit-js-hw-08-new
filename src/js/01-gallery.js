import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup)

function createGalleryItemsMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href = "${original}">
                <img
                    class = "gallery__image"
                    src = "${preview}"
                    data-source = "${original}"
                    alt = "${description}"
                />
            </a>`;
}).join('');
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    // captionPosition: 'top',
    // overlay: false,
});

// console.log(galleryItems);
