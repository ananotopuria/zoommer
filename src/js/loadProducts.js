let currentIndex = 0;
const itemsPerPage = 5;
let totalProducts = 0;

export function loadProducts() {
  document.addEventListener("DOMContentLoaded", function () {
    fetch("/public/api/products.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        totalProducts = products.length;
        const productContainer = document.getElementById("product-container");
        productContainer.innerHTML = "";

        products.forEach((product) => {
          const productCard = `
            <div class="product-card">
              <div class="product-image">
                <img src="${product.imageUrl}" class="product-thumb" alt="${product.name}" />
              </div>
              <div class="product-info">
                <p><span class="price">${product.price} ₾</span></p>
                <p class="product-short-description">
                  თვეში <span class="monthly-price">103</span> ლარიდან
                </p>
                <p class="product-description">${product.name}</p>
                <div class="product-bottom">
                  <img class="compare-card-image" src="./src/images/compare-card.svg" />
                  <div class="product-cart-button">
                    <img class="product-cart-item" src="./src/images/cart-button.svg" />
                    <p class="product-cart-item product-cart-text">დამატება</p>
                  </div>
                </div>
              </div>
            </div>
          `;

          productContainer.innerHTML += productCard;
        });

        initSlider();
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  });
}

function initSlider() {
  const productContainer = document.getElementById("product-container");
  const productCards = productContainer.children;

  function updateDisplay() {
    for (let i = 0; i < productCards.length; i++) {
      productCards[i].style.display =
        i >= currentIndex * itemsPerPage &&
        i < (currentIndex + 1) * itemsPerPage
          ? "block"
          : "none";
    }

    document.querySelector(".prev-product").style.display =
      currentIndex === 0 ? "none" : "block";
    document.querySelector(".next-product").style.display =
      (currentIndex + 1) * itemsPerPage >= totalProducts ? "none" : "block";
  }

  window.prevSlideProduct = function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  };

  window.nextSlideProduct = function () {
    if ((currentIndex + 1) * itemsPerPage < totalProducts) {
      currentIndex++;
      updateDisplay();
    }
  };

  // Initial display update
  updateDisplay();
}
