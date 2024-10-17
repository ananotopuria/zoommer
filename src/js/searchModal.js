export function initializeSearchModal() {
    const searchButton = document.getElementById("searchButton");
    const modal = document.getElementById("popularSearchesModal");
    const closeBtn = document.querySelector(".close");
  
    if (searchButton && modal && closeBtn) {
      searchButton.addEventListener("click", function () {
        modal.style.display = "block";
      });
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }
  