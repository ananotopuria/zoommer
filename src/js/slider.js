export function initProductSlider() {
  const productSections = [...document.querySelectorAll('.product-section')];
  const preBtns = [...document.querySelectorAll('.pre-btn')];
  const nxtBtns = [...document.querySelectorAll('.nxt-btn')];

  productSections.forEach((section, i) => {
    let sectionWidth = section.getBoundingClientRect().width;

    if (nxtBtns[i] && preBtns[i]) {  
      nxtBtns[i].addEventListener('click', () => {
        section.scrollLeft += sectionWidth;
      });

      preBtns[i].addEventListener('click', () => {
        section.scrollLeft -= sectionWidth;
      });
    }
  });
}

