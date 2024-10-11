import { sayHello } from "./src/js/data";
import { toggleModal } from "./src/js/toggle";
import { closeModalWindow } from "./src/js/toggle";
import { setupTabs } from "./src/js/tabs";
import { openMenu, closeMenu } from "./src/js/menu";
import { makeSticky } from "./src/js/stickyNavigation";

sayHello();

setupTabs();

closeModalWindow('loginModal');

openMenu();
closeMenu();

makeSticky('.sub-header');
makeSticky('.navigation');


document.querySelector(".header__user--cart").addEventListener("click", () => {
  toggleModal("cartModal");
});

document.querySelector(".header__user--login").addEventListener("click", () => {
  toggleModal("loginModal");
});

