"use strict";

// Burger Bar
import { setupBurgerBar } from "./script.js";
setupBurgerBar();

// Scroll To Top
import { setupScrollToTop } from "./script.js";
setupScrollToTop();

// Books
const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");

const cardLimit = 45;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

const itemFunsction = () => {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}deg, 90%, 85%)`;
};

const cardImages = [
  "images/1.jpeg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpeg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpeg",
  "images/18.jpeg",
  "images/19.jpeg",
  "images/20.jpeg",
  "images/21.jpeg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
  "images/30.webp",
  "images/31.jpg",
  "images/32.jpg",
  "images/33.jpg",
  "images/34.jpg",
  "images/35.jpg",
  "images/36.jpg",
  "images/37.jpg",
  "images/38.jpeg",
  "images/39.jpg",
  "images/40.jpeg",
  "images/41.jpg",
  "images/42.jpeg",
  "images/43.jpeg",
  "images/44.jpg",
  "images/45.jpg",
];

const handleButtonStatus = () => {
  if (pageCount === currentPage) {
    loadMoreButton.classList.add("disabled");
    loadMoreButton.setAttribute("disabled", true);
  }
};

const createCard = (index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url('${cardImages[index - 1]}')`; // Set the background image URL for the card
  cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
  currentPage = pageIndex;

  handleButtonStatus();

  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange =
    pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;

  cardCountElem.innerHTML = endRange;
  cardTotalElem.innerHTML = cardLimit;

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};

window.onload = function () {
  loadMoreButton.addEventListener("click", () => {
    addCards(currentPage + 1);
  });

  addCards(currentPage);
};
