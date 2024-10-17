export function initProductSlider() {
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
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
}

export function initBrandSlider() {
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
}
