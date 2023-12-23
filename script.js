"use strict";

// Burger Bar
export function setupBurgerBar() {
  const ulNavigation = document.getElementById("ul-nav");
  const burgerToggle = document.getElementById("burgerBar");
  burgerToggle.addEventListener("click", function () {
    ulNavigation.classList.toggle("toggleNav");
    burgerToggle.classList.toggle("activeBurger");
  });
}

// scroll.js
export function setupScrollToTop() {
  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
      toTop.classList.add("activeTop");
    } else {
      toTop.classList.remove("activeTop");
    }
  });
}
