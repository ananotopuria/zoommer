export function setupTabs() {
  const tabs = document.querySelectorAll(`.login__tab`);
  const tabsContainer = document.querySelector(`.login__tab-container`);
  const tabsContent = document.querySelectorAll(`.login__content`);

  tabsContainer.addEventListener(`click`, function (e) {
    const clicked = e.target.closest(`.login__tab`);

    if (!clicked) return;
    tabs.forEach((t) => t.classList.remove(`login__tab--active`));
    tabsContent.forEach((c) => c.classList.remove(`login__content--active`));

    clicked.classList.add(`login__tab--active`);

    document
      .querySelector(`.login__content--${clicked.dataset.tab}`)
      .classList.add(`login__content--active`);
  });
}
