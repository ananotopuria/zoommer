const selectedItems = document.querySelectorAll(".selected-item");
const dropdownItems = document.querySelectorAll(".dropdown-items-box");
const arrowIcon = document.querySelectorAll(".arrow-icon");

// ყოველი selected-item ელემენტზე ივენთის დამატება
selectedItems.forEach((selectedItem) => {
  selectedItem.addEventListener("click", function () {
    // document.getElementById("arrow-icon").classList.toggle("rotate");
    arrowIcon.forEach((arrowIcon) => {
      arrowIcon.classList.toggle("rotate");
    });

    // ყველა dropdownItems ელემენტზე კლასი visible-ის toggle
    dropdownItems.forEach((dropdown) => {
      dropdown.classList.toggle("visible");
    });
  });

  // კლიკზე დაპატარავება
  selectedItem.addEventListener("mousedown", function () {
    this.style.width = `${this.offsetWidth - 4}px`;
    this.style.height = `${this.offsetHeight - 4}px`;
  });

  // კლიკის დასრულებისას ზომის აღდგენა
  selectedItem.addEventListener("mouseup", function () {
    this.style.width = "";
    this.style.height = "";
  });
});


// ყველა grid-item ელემენტზე addEventListener-ის დამატება
document.querySelectorAll(".branches__grid--item").forEach((item) => {
  item.addEventListener("click", function () {
    // წინა active ელემენტზე კლასის მოხსნა
    document
      .querySelectorAll(".branches__grid--item.active")
      .forEach((activeItem) => {
        activeItem.classList.remove("active");
      });

    // ამ ელემენტზე active კლასის დამატება
    this.classList.add("active");
  });
});
