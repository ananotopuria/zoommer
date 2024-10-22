async function loadDynamicNav() {
  try {
    const response = await fetch("./public/api/productCategory.json");
    const categories = await response.json();

    const navElement = document.querySelector(".hero__nav");
    let navHTML = "";

    categories.forEach((category) => {
      let subNavHTML = "";

      if (category.childItems && category.childItems.length > 0) {
        subNavHTML = category.childItems
          .map((subCategory) => {
            return `
              <li class="sub__nav-content-list">
                <h5 class="sub__nav-content-title">${subCategory.name}</h5>
                <ul class="sub__nav-content-li">
                  ${
                    subCategory.childItems
                      ? subCategory.childItems
                          .map(
                            (item) =>
                              `<li><a href="${item.url}">${item.name}</a></li>`
                          )
                          .join("")
                      : '<li><a href="#">No items available</a></li>'
                  }
                </ul>
              </li>
            `;
          })
          .join("");
      }

      navHTML += `
          <li class="hero__nav-li">
            <button class="hero__nav-btn nav__border">
              <img class="hero__nav-icon nav__border" src="${category.iconUrl}" />
              <span class="hero__nav-title">${category.name}</span>
            </button>
            <div class="sub-nav">
              <ul class="sub__nav-content">
                ${subNavHTML}
              </ul>
            </div>
          </li>
        `;
    });

    navElement.innerHTML = navHTML;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

export { loadDynamicNav };
