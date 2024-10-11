export function openMenu() {
  document.querySelector(".burger-btn").addEventListener("click", function () {
    document.querySelector(".side__menu").classList.add("active");
  });
}

export function closeMenu() {
  document
    .querySelector(".side__menu-close")
    .addEventListener("click", function () {
      document.querySelector(".side__menu").classList.remove("active");
    });
}
