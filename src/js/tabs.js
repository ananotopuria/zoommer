// export function setupTabs() {
//   const tabs = document.querySelectorAll(`.login__tab`);
//   const tabsContainer = document.querySelector(`.login__tab-container`);
//   const tabsContent = document.querySelectorAll(`.login__content`);

//   tabsContainer.addEventListener(`click`, function (e) {
//     const clicked = e.target.closest(`.login__tab`);

//     if (!clicked) return;
//     tabs.forEach((t) => t.classList.remove(`login__tab--active`));
//     tabsContent.forEach((c) => c.classList.remove(`login__content--active`));

//     clicked.classList.add(`login__tab--active`);

//     document
//       .querySelector(`.login__content--${clicked.dataset.tab}`)
//       .classList.add(`login__content--active`);
//   });
// }

// export function setupTabs(
//   tabsSelector,
//   tabsContainerSelector,
//   tabsContentSelector,
//   activeTabClass,
//   activeContentClass
// ) {
//   const tabs = document.querySelectorAll(tabsSelector);
//   const tabsContainer = document.querySelector(tabsContainerSelector);
//   const tabsContent = document.querySelectorAll(tabsContentSelector);
//   tabsContainer.addEventListener("click", function (e) {
//     const clicked = e.target.closest(tabsSelector);
//     if (!clicked) return;
//     tabs.forEach((t) => t.classList.remove(activeTabClass));
//     tabsContent.forEach((c) => c.classList.remove(activeContentClass));
//     clicked.classList.add(activeTabClass);
//     const tabNumber = clicked.dataset.tab;
//     document
//       .querySelector(`${tabsContentSelector}[data-tab="${tabNumber}"]`)
//       .classList.add(activeContentClass);
//   });
// }

export function setupTabs(
  tabsSelector,
  tabsContainerSelector,
  tabsContentSelector,
  activeTabClass,
  activeContentClass
) {
  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContainer = document.querySelector(tabsContainerSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);

  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(tabsSelector);

    if (!clicked) return;
    const clickedIndex = Array.from(tabs).indexOf(clicked);

    tabs.forEach((tab) => tab.classList.remove(activeTabClass));
    tabsContent.forEach((content) =>
      content.classList.remove(activeContentClass)
    );

    clicked.classList.add(activeTabClass);
    tabsContent[clickedIndex].classList.add(activeContentClass);
  });
}
