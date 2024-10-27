import { toggleModal } from "./src/js/toggle";
import { closeModalWindow } from "./src/js/toggle";
import { setupTabs } from "./src/js/tabs";
import { openMenu, closeMenu } from "./src/js/menu";
import { makeSticky } from "./src/js/stickyNavigation";
import { initSlider } from "./src/js/heroSlider.js";
import { imgSlider } from "./src/js/imgSlider.js";
import { scrollToTop } from "./src/js/scrollToTop.js";
import { initializeSearchModal } from "./src/js/searchModal.js";
import { loadDynamicNav } from "./src/js/categories.js";
import { loadProducts } from './src/js/loadProducts.js';
import { initProductSlider } from "./src/js/slider.js";
import { fetchCategories } from './src/js/category.js';
import { loadHeader } from './src/js/header.js';
import { loadFooter } from './src/js/footer.js';


document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("/path/to/header.html")
//     .then((response) => response.text())
//     .then((html) => {
//       document.querySelector("header").innerHTML = html;
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
    setupTabs();
    
    closeModalWindow("loginModal");
    
    openMenu();
    closeMenu();
    
    makeSticky(".sub-header");
    makeSticky(".navigation");
});

loadDynamicNav();

loadProducts();


document.addEventListener("DOMContentLoaded", function() {
  initializeSearchModal();
});

document.querySelector(".header__user--cart").addEventListener("click", () => {
  toggleModal("cartModal");
});

document.querySelector(".header__user--login").addEventListener("click", () => {
  toggleModal("loginModal");
});

window.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

// document.addEventListener("DOMContentLoaded", () => {
//   imgSlider();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   scrollToTop();
// });

// document.addEventListener('DOMContentLoaded', () => {
//   initProductSlider();
//   initBrandSlider();
// });

document.addEventListener("DOMContentLoaded", () => {
  imgSlider();
  scrollToTop();
  // loadDynamicNav();
  // loadProducts();
  initProductSlider();
  // initBrandSlider();
});