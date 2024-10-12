export function initSlider() {
  let currentSlide = 0;
  const sliderWrapper = document.querySelector(".hero__slider-wrapper");
  const totalSlides = sliderWrapper.children.length;

  function updateSliderPosition() {
    const slideWidth = document.querySelector(
      ".hero__slider-container"
    ).clientWidth;
    sliderWrapper.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSliderPosition();
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSliderPosition();
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  window.addEventListener("resize", updateSliderPosition);
  updateSliderPosition();
}
