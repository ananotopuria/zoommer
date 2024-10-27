// import { toggleModal, closeModalWindow } from "./src/js/toggle.js";
// import { setupTabs } from "./src/js/tabs";
// import { openMenu, closeMenu } from "./src/js/menu";
// import { makeSticky } from "./src/js/stickyNavigation";
// import { initSlider } from "./src/js/heroSlider.js";
// import { imgSlider } from "./src/js/imgSlider.js";
// import { scrollToTop } from "./src/js/scrollToTop.js";
// import { initializeSearchModal } from "./src/js/searchModal.js";
// import { loadDynamicNav } from "./src/js/categories.js";
// import { loadProducts } from "./src/js/loadProducts.js";
// import { initProductSlider } from "./src/js/slider.js";
// import { fetchCategories } from "./src/js/category.js";
// import { loadHeader } from "./src/js/header.js";
// import { loadFooter } from "./src/js/footer.js";

// document.addEventListener("DOMContentLoaded", () => {
//   loadHeader();
//   loadFooter();

//   fetchCategories();
//   loadDynamicNav();
//   loadProducts();

//   setupTabs();
//   initializeSearchModal();

//   closeModalWindow("loginModal");

//   openMenu();
//   closeMenu();
//   makeSticky(".sub-header");
//   makeSticky(".navigation");

//   initSlider();
//   imgSlider();
//   scrollToTop();
//   initProductSlider();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .querySelector(".header__user--cart")
//     ?.addEventListener("click", () => {
//       toggleModal("cartModal");
//     });

//   document
//     .querySelector(".header__user--login")
//     ?.addEventListener("click", () => {
//       toggleModal("loginModal");
//     });
// });


import { toggleModal, closeModalWindow } from "./src/js/toggle.js";
import { setupTabs } from "./src/js/tabs";
import { openMenu, closeMenu } from "./src/js/menu";
import { makeSticky } from "./src/js/stickyNavigation";
import { initSlider } from "./src/js/heroSlider.js";
import { imgSlider } from "./src/js/imgSlider.js";
import { scrollToTop } from "./src/js/scrollToTop.js";
import { initializeSearchModal } from "./src/js/searchModal.js";
import { loadDynamicNav } from "./src/js/categories.js";
import { loadProducts } from "./src/js/loadProducts.js";
import { initProductSlider } from "./src/js/slider.js";
import { fetchCategories } from "./src/js/category.js";
import { loadHeader } from "./src/js/header.js";
import { loadFooter } from "./src/js/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  // Load static elements
  loadHeader();
  loadFooter();

  // Fetch dynamic data
  fetchCategories();
  loadDynamicNav();
  loadProducts();

  // Setup UI components
  setupTabs();
  initializeSearchModal();

  // Modal handling
  closeModalWindow("loginModal");

  // Menu and sticky elements
  openMenu();
  closeMenu();
  makeSticky(".sub-header");
  makeSticky(".navigation");

  // Initialize sliders and other features
  initSlider();
  imgSlider();
  scrollToTop();
  initProductSlider();

  // Event listeners for modal toggle on cart and login icons
  document.querySelector(".header__user--cart")?.addEventListener("click", () => {
    toggleModal("cartModal");
  });

  document.querySelector(".header__user--login")?.addEventListener("click", () => {
    toggleModal("loginModal");
  });
});
