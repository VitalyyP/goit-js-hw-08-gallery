const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const jsGalleryRef = document.querySelector(".js-gallery");
const jsLightboxRef = document.querySelector(".js-lightbox");
const jsLightboxImageRef = jsLightboxRef.querySelector(".lightbox__image");
const jsLightboxOverlayRef = jsLightboxRef.querySelector(".lightbox__overlay");
const jsButtonCloseLightboxRef = jsLightboxRef.querySelector(
  "[data-action='close-lightbox']"
);

jsGalleryRef.insertAdjacentHTML("beforeend", createItemsMarkup(galleryItems));

function createItemsMarkup(items) {
  return items
    .map((item) => {
      return ` <li class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
      >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

jsGalleryRef.addEventListener("click", openLightbox);
jsButtonCloseLightboxRef.addEventListener("click", closeLightbox);
jsLightboxOverlayRef.addEventListener("click", closeLightbox);
window.addEventListener("keyup", closeLightboxByEsc);

function openLightbox(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  addClassLightboxIsOpen();
  addImgLightboxSrc(e);
}

function addClassLightboxIsOpen() {
  jsLightboxRef.classList.add("is-open");
}

function addImgLightboxSrc(e) {
  jsLightboxImageRef.src = `${getSrcBigImg(e)}`;
}

function getSrcBigImg(e) {
  return e.target.dataset.source;
}

function closeLightbox() {
  removeClassLightBoxIsOpen();
  clearImgLightboxSrc();
}

function removeClassLightBoxIsOpen() {
  jsLightboxRef.classList.remove("is-open");
}

function clearImgLightboxSrc() {
  jsLightboxImageRef.src = "";
}

function closeLightboxByEsc(e) {
  if (e.key !== "Escape") {
    return;
  }
  removeClassLightBoxIsOpen();
  clearImgLightboxSrc();
}
