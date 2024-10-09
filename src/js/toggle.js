export function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal) {
    modal.classList.toggle("active");
    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
      setupModalEvents(modalId);
    }
  }
}

export const closeModalWindow = function (modalId) {
  const modal = document.getElementById(modalId);
  const btnClose = document.querySelector(`.close-btn`);

  btnClose.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    modal.classList.remove(`active`);
  });
}
