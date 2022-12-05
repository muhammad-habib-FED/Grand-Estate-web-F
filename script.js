// Hamburger

const hamburger = document.querySelector(".hamburger");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerNavbar.classList.toggle("active");
});

// secondry hamburger

const hamburgerSec = document.querySelector(".hamburger-sec");
const hamburgerSecNavbar = document.querySelector(".hamburger-sec-navbar");

hamburgerSec.addEventListener("click", () => {
  hamburgerSec.classList.toggle("active");
  hamburgerSecNavbar.classList.toggle("active");
});

// Hero Section Plus Name Id Section

const swiper = new Swiper(".mySwiper", {
  // spaceBetween: 0,
  // loop: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// Range Section

// const rangeInput = docoment.querySelectorAll(".range-input input");
// progress = docoment.querySelector(".range-slider .progress");

// rangeInput.forEach("input", () => {
//   Input.addEventListener("input", () => {
//     let minVal = parseInt(rangeInput[0].value),
//       maxVal = parseInt(rangeInput[1].value);

//     progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//     progress.style.right = (maxVal / rangeInput[1].max) * 100 + "%";
//   });
// });

// =========================================
//        Name Id Section
// =========================================

// var swiper = new swiper(".mySwipers", {
//   slidesPerView: 4,
//   spaceBetween: 0,
//   slidesPerGroup: 4,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const swiper2 = new Swiper(".mySwiper1", {
  // spaceBetween: 0,
  // loop: true,

  navigation: {
    nextEl: ".swiper-button-next-02",
    prevEl: ".swiper-button-prev-02",
  },
});
