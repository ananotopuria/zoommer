import "./src/assets/css/style.css";
import { sayHello } from "./src/js/data";
import { toggleModal } from "./src/js/toggle";
import { closeModalWindow } from "./src/js/toggle";
import { setupTabs } from "./src/js/tabs";

sayHello();

setupTabs();

closeModalWindow('loginModal');

document.querySelector(".header__user--cart").addEventListener("click", () => {
  toggleModal("cartModal");
});

document.querySelector(".header__user--login").addEventListener("click", () => {
  toggleModal("loginModal");
});

