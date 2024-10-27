// export function toggleModal(modalId) {
//   const modal = document.getElementById(modalId);

//   if (modal) {
//     modal.classList.toggle("active");
//     modal.classList.toggle("hidden");

//     if (!modal.classList.contains("hidden")) {
//       setupModalEvents(modalId);
//     }
//   }
// }

// export const closeModalWindow = function (modalId) {
//   const modal = document.getElementById(modalId);
//   const btnClose = document.querySelector(`.close-btn`);

//   btnClose.addEventListener(`click`, function () {
//     modal.classList.add(`hidden`);
//     modal.classList.remove(`active`);
//   });
// }


export function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal) {
    modal.classList.toggle("active");
    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
      // Set up the close button event when modal is opened
      setupModalEvents(modalId);
    } else {
      // Clean up to prevent multiple event listeners
      removeModalEvents(modalId);
    }
  }
}

function setupModalEvents(modalId) {
  const modal = document.getElementById(modalId);
  const btnClose = modal.querySelector(`.close-btn`);

  if (btnClose) {
    // Ensure we are not adding duplicate event listeners
    btnClose.removeEventListener("click", closeModalWindow);
    btnClose.addEventListener("click", () => closeModalWindow(modalId));
  }
}

function removeModalEvents(modalId) {
  const modal = document.getElementById(modalId);
  const btnClose = modal.querySelector(`.close-btn`);

  if (btnClose) {
    // Remove the close event listener when modal is hidden
    btnClose.removeEventListener("click", closeModalWindow);
  }
}

export const closeModalWindow = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("active");
  }
};
