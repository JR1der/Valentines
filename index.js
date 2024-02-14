document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("Open");
    const closeBtn = document.getElementById("Close");
    const modal = document.querySelector(".modal");
  
    openBtn.addEventListener("click", function () {
      modal.style.display = "flex";
      modal.classList.add("fadeIn");
    });
  
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("fadeIn");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300); // Change 300 to match the duration of your animation
    });
  });
  