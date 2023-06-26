// Search Bar
const search = document.querySelector(".search-box");
const searchIcon = document.querySelector("#search-icon");
// const searchClasses = search.classList;

searchIcon.addEventListener("click", () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
});

// Cart Box
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener("click", () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
});

// User Box
const user = document.querySelector(".user");
const userIcon = document.querySelector("#user-icon");
userIcon.addEventListener("click", () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
});

// Navigation
const navbar = document.querySelector(".navbar");
const navIcon = document.querySelector("#menu-icon");
navIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
});

window.onscroll = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

// Initialize Swiper
const swiper = new Swiper(".new-arrival", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
