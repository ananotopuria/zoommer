export function displaySubcategories(subcategories) {
  const subcategoryWrapper = document.getElementById("subcategoryWrapper");
  subcategoryWrapper.innerHTML = "";

  if (!subcategories || subcategories.length === 0) {
    subcategoryWrapper.textContent = "No subcategories available.";
    return;
  }

  const subcategoryList = document.createElement("ul");
  subcategoryList.classList.add("navigation__card-container");
  function renderCategory(category) {
    const categoryItem = document.createElement("li");
    const isHeader = category.childItems && category.childItems.length > 0;
    categoryItem.classList.add(isHeader ? "navigation__header" : "navigation__card");
    const title = document.createElement("p");
    title.classList.add(isHeader ? "navigation__header-title" : "navigation__card-title");
    title.textContent = category.name;
    categoryItem.appendChild(title);
    if (!isHeader) {
      const img = document.createElement("img");
      img.classList.add("navigation__card-img");
      img.src = category.imageUrl || "default-subcategory.png";
      categoryItem.appendChild(img);
    }

    const currentList = document.createElement("ul");
    currentList.classList.add("navigation__card-container");
    currentList.appendChild(categoryItem);

    if (isHeader) {
      category.childItems.forEach((child) => {
        currentList.appendChild(renderCategory(child));
      });
    }

    return currentList;
  }

  subcategories.forEach((subcategory) => {
    subcategoryList.appendChild(renderCategory(subcategory));
  });

  subcategoryWrapper.appendChild(subcategoryList);
}
