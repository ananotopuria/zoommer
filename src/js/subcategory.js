export function displaySubcategories(subcategories) {
  const subcategoryWrapper = document.getElementById("subcategoryWrapper");
  subcategoryWrapper.innerHTML = "";

  if (!subcategories || subcategories.length === 0) {
    subcategoryWrapper.textContent = "No subcategories available.";
    return;
  }
  const subcategoryList = document.createElement("ul");
  subcategoryList.classList.add("navigation__card-container");
  subcategories.forEach((subcategory) => {
    const subcategoryItem = document.createElement("li");
    subcategoryItem.classList.add("navigation__card");
    const title = document.createElement("p");
    title.classList.add("navigation__card-title");
    title.textContent = subcategory.name;
    const img = document.createElement("img");
    img.classList.add("navigation__card-img");
    img.src = subcategory.imageUrl || "default-subcategory.png";

    subcategoryItem.appendChild(title);
    subcategoryItem.appendChild(img);
    subcategoryList.appendChild(subcategoryItem);
  });
  subcategoryWrapper.appendChild(subcategoryList);
}
