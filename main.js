// import { toggleModal } from "./src/js/toggle";
// import { closeModalWindow } from "./src/js/toggle";
// import { setupTabs } from "./src/js/tabs";
// import { openMenu, closeMenu } from "./src/js/menu";
// import { makeSticky } from "./src/js/stickyNavigation";
// import { initSlider } from "./src/js/heroSlider.js";
// import { imgSlider } from "./src/js/imgSlider.js";
// import { scrollToTop } from "./src/js/scrollToTop.js";

// sayHello();

// // setupTabs();

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

// closeModalWindow("loginModal");

// openMenu();
// closeMenu();

// makeSticky(".sub-header");
// makeSticky(".navigation");

// document.querySelector(".header__user--cart").addEventListener("click", () => {
//   toggleModal("cartModal");
// });

// document.querySelector(".header__user--login").addEventListener("click", () => {
//   toggleModal("loginModal");
// });

// window.addEventListener("DOMContentLoaded", () => {
//   initSlider();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   imgSlider();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   scrollToTop();
// });

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const brandContainers = [...document.querySelectorAll(".brand-container")];
const brandnxtBtn = [...document.querySelectorAll(".nxt-brand-btn")];
const brandpreBtn = [...document.querySelectorAll(".pre-brand-btn")];

brandContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  brandnxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  brandpreBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
