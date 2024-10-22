import { toggleModal } from "./src/js/toggle";
import { closeModalWindow } from "./src/js/toggle";
import { setupTabs } from "./src/js/tabs";
import { openMenu, closeMenu } from "./src/js/menu";
import { makeSticky } from "./src/js/stickyNavigation";
import { initSlider } from "./src/js/heroSlider.js";
import { imgSlider } from "./src/js/imgSlider.js";
import { scrollToTop } from "./src/js/scrollToTop.js";
import { initProductSlider, initBrandSlider } from './src/js/slider.js';
import { initializeSearchModal } from "./src/js/searchModal.js";
import { loadDynamicNav } from "./src/js/categories.js";
// setupTabs(
//   ".login__tab",
//   ".login__tab-container",
//   ".login__content",
//   "login__tab--active",
//   "login__content--active"
// );

// setupTabs(
//   ".side__navigation-li",
//   ".side__navigation-list",
//   ".navigation__tab-content",
//   "side__navigation--active",
//   "navigation__tab--active"
// );


setupTabs();

closeModalWindow("loginModal");

openMenu();
closeMenu();

makeSticky(".sub-header");
makeSticky(".navigation");

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

document.addEventListener("DOMContentLoaded", () => {
  imgSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  scrollToTop();
});


initProductSlider();
initBrandSlider();

loadDynamicNav();

document.addEventListener("DOMContentLoaded", () => {
  
  loadDynamicNav();
});