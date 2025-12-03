const buyButtons = document.querySelectorAll(".buy-button");
const menuDetails = document.querySelectorAll(".menu-details");
const iconBack = document.querySelectorAll(".icon-arrow");
const body = document.body;
const overlay = document.getElementById("overlay");
const navbarNav = document.getElementById("navbar-nav");
const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

buyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    menuDetails[index].classList.add("muncul");
    body.style.overflow = "hidden";
    overlay.classList.add("active");
  });
});

iconBack.forEach((iconBack, index) => {
  iconBack.addEventListener("click", () => {
    body.style.overflow = "auto";
    menuDetails[index].classList.remove("muncul");
    overlay.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen quantity pada setiap produk
  document.querySelectorAll(".quantity").forEach(function (quantityContainer) {
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const countSpan = quantityContainer.querySelector(".count");
    const buyBtn = quantityContainer.closest(".product").querySelector(".buy");

    let count = 0;

    // Event listener untuk tombol minus
    minusBtn.addEventListener("click", function () {
      if (count > 0) {
        count--;
        countSpan.textContent = count;
      }
    });

    // Event listener untuk tombol plus
    plusBtn.addEventListener("click", function () {
      count++;
      countSpan.textContent = count;
    });

    // Event listener untuk tombol beli
    buyBtn.addEventListener("click", function () {
      if (count > 0) {
        alert(`Anda membeli ${count} item dari produk ini!`);
      } else {
        alert("Silakan pilih jumlah produk terlebih dahulu!");
      }
    });
  });
});
