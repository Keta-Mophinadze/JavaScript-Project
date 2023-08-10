"use strict";

// Burger Bar
import { setupBurgerBar } from "./script.js";
setupBurgerBar();

// Scroll To Top
import { setupScrollToTop } from "./script.js";
setupScrollToTop();

// Accordion
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("activeAccordion");
  });
});
