const buyModal = document.getElementById("buy-modal");
const buyModalImageEl = buyModal.querySelector(".modal__image");
const buyModalCloseButton = buyModal.querySelector(".modal__close-button");
const buyModalConfirmationEl = buyModal.querySelector(".modal__confirmation");
const buyModalBuyButton = buyModal.querySelector(".modal__buy-button");
const buyModalCancelButton = buyModal.querySelector(".modal__cancel-button");

document.querySelectorAll(".card__buy-button").forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const img = card.querySelector(".card__image");
    buyModalImageEl.src = img.src;
    buyModalConfirmationEl.textContent = buyModalConfirmationEl.textContent;

    openModal(buyModal);
  });
});
buyModalBuyButton.addEventListener("click", function () {
  alert("Thank you for confirming!");
});
buyModalCancelButton.addEventListener("click", function () {
  closeModal(buyModal);
});
buyModalCloseButton.addEventListener("click", function () {
  closeModal(buyModal);
});

const previewModal = document.querySelector(".modal");
const previewModalCloseButton = previewModal.querySelector(
  ".modal__close-button"
);
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const ImageList = document.querySelector(".image__list");
const buyButton = document.querySelectorAll(".card__buy-button");

ImageList.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("picture")) {
    openModal(previewModal);
    previewModalImageEl.src = evt.target.src;
    previewModalCaptionEl.textContent = evt.target.alt;
  }
});
// buyButton.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   if (confirm("Would you like to buy this item?") === true) {
//     alert("Thank you for your purchase!");
//   }
// });

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

previewModalCloseButton.addEventListener("click", () =>
  closeModal(previewModal)
);
