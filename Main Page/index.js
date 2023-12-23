// Burger Bar
import { setupBurgerBar } from "../script.js";
setupBurgerBar();

// Scroll To Top
import { setupScrollToTop } from "../script.js";
setupScrollToTop();

//  Cookies
const modalBox = document.getElementById("modalBox");
const overlay = document.getElementById("overlay");
const acceptButton = document.getElementById("acceptButton");
const closeIcon = document.getElementById("closeIcon");

const showModal = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  modalBox.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  modalBox.style.display = "none";
  overlay.style.display = "none";
};

window.onload = showModal;

acceptButton.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);

// Slider
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHiddenIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHiddenIcons(), 40);
  });
});

const autoSlide = () => {
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHiddenIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

// FETCH
const userListDiv = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        "Unable to retrieve data: Server response indicates an issue."
      );
    }
    return response.json();
  })
  .then((userData) => {
    userData.forEach((user) => {
      const userDiv = createUserDiv(user);
      userListDiv.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("Error occurred while fetching data:", error);
  });

function generateRandomComment() {
  const comments = [
    "A must visit for every book lover! Amazing collection of books in English, both for kids and adults. They also have music and stationary and it was so hard not buying the all store ",
    "One of the best bookstores in Berlin, you could spend hours here… So many English books and the cutest children’s book section with multiple languages! I am mostly happy with the outstanding service.",
    "Very cool store, great collection of vinyl records as well as merchandise and books, of course. Extensive section for English books and even a cafe inside the bookstore. The books are well organized and reasonably priced. Overall a great experience.",
    "This website has become my go-to place for buying books online.",
    "The user experience is top-notch and the customer support is always helpful.",
    "Heaven on earth for book lovers.",
    "Amazing bookshop in Berlin. Paradise for the book lovers and fans of paper supplies. It is a mandatory stop every time we go to Berlin.",
    "Huge space with great selection of books, music, media, stationery and small gifts. One my favourite places in Berlin.",
    "Brilliant! I love this place. This place atmosphere makes me feel like i am in a whole another world.",
    "A great and wholesome experience, 4 of the biggest floors filled with books, vinyls, cd's and souvenirs. it's a magical place!",
  ];
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}
function createUserDiv(user) {
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const userName = document.createElement("h2");
  userName.classList.add("user-name");
  userName.textContent = user.name;

  const userUsername = document.createElement("p");
  userUsername.classList.add("user-info");
  userUsername.textContent = `${user.username}`;

  const userEmail = document.createElement("p");
  userEmail.classList.add("user-info");
  userEmail.textContent = `${user.email}`;

  const userReview = document.createElement("p");
  userReview.classList.add("review");
  userReview.textContent = `Review: ${generateRandomComment()}`;

  userDiv.appendChild(userName);
  userDiv.appendChild(userUsername);
  userDiv.appendChild(userEmail);
  userDiv.appendChild(userReview);

  return userDiv;
}
