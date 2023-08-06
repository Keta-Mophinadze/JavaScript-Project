"use strict";

// Header - Burger Bar
const ulNavigation = document.getElementById("ul-nav");
const burgerToggle = document.getElementById("burgerBar");
burgerToggle.addEventListener("click", function () {
  ulNavigation.classList.toggle("toggleNav");
  burgerToggle.classList.toggle("activeBurger");
});

// // Validation
// const formElement = document.getElementById("registration");
// formElement.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const errors = {};
//   // Username
//   const userFirstName = document.getElementById("myname").value;
//   if (userFirstName === "") {
//     errors.myname = "Please complete this field";
//   }

//   // Email
//   const emailValue = document.getElementById("myemail").value;
//   if (emailValue === "") {
//     errors.myemail = "Please complete this field";
//   }
//   // Password
//   const passwordValue = document.getElementById("mypassword").value;
//   const passwordValue2 = document.getElementById("mypassword2").value;
//   if (passwordValue === "") {
//     errors.mypassword = "Please complete this field";
//   }
//   if (passwordValue != passwordValue2) {
//     errors.mypassword2 = "Passwords do not match";
//   }
//   // Checkbox
//   const checkBox = document.getElementById("checkBox").checked;
//   if (!checkBox) {
//     errors.check = "Please agree to our Terms and Conditions";
//   }
//   console.log(errors);

//   document.querySelectorAll(".error-text").forEach((element) => {
//     element.textContent = " ";
//   });

//   for (let keyObject in errors) {
//     console.log(keyObject);
//     const pError = document.getElementById("error-" + keyObject);
//     if (pError) {
//       pError.textContent = errors[keyObject];
//     }
//   }

//   if (Object.keys(errors).length === 0) {
//     formElement.submit();
//   }
// });

// // Hidden Password
// const showPassword = document.getElementById("mypassword");
// const icon = document.getElementById("passwordIcon");
// icon.addEventListener("click", function () {
//   if (showPassword.type === "password") {
//     showPassword.setAttribute("type", "text");
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//   } else {
//     showPassword.setAttribute("type", "password");
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-eye");
//   }
// });
// // Regex - Email
// const emailField = document.getElementById("myemail");
// emailField.addEventListener("keyup", function () {
//   const emailError = document.getElementById("emailError");
//   const emailValue = document.getElementById("myemail").value;
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (emailValue.match(emailPattern)) {
//     emailError.textContent = "Email is valid";
//     emailError.style.color = "rgb(18, 117, 18)";
//   } else {
//     emailError.textContent = "Email is not valid";
//     emailError.style.color = "rgb(207, 19, 19)";
//   }
//   if (emailValue == "") {
//     emailError.innerHTML = " ";
//   }
// });
// // Regex - Username
// const userNameField = document.getElementById("myname");
// userNameField.addEventListener("keyup", function () {
//   const userNameError = document.getElementById("userNameError");
//   const userNameValue = document.getElementById("myname").value;
//   const userNamePattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
//   if (userNameValue.match(userNamePattern)) {
//     userNameError.textContent = "Username is valid";
//     userNameError.style.color = "rgb(18, 117, 18)";
//   } else {
//     userNameError.textContent = "Username is not valid";
//     userNameError.style.color = "rgb(207, 19, 19)";
//   }
//   if (userNameValue == "") {
//     userNameError.innerHTML = " ";
//   }
// });


// // // -------------------

// const cardContainer = document.getElementById("card-container");
// const loadMoreButton = document.getElementById("load-more");
// const cardCountElem = document.getElementById("card-count");
// const cardTotalElem = document.getElementById("card-total");

// const cardLimit = 45;
// const cardIncrease = 9;
// const pageCount = Math.ceil(cardLimit / cardIncrease);
// let currentPage = 1;

//   const itemFunsction = () => {
//   const h = Math.floor(Math.random() * 360);
//   return `hsl(${h}deg, 90%, 85%)`;
// };

// const cardImages = [
//   "images/1.jpeg",
//   "images/2.jpg",
//   "images/3.jpg",
//   "images/4.jpg",
//   "images/5.jpg",
//   "images/6.jpg",
//   "images/7.jpg",
//   "images/8.jpeg",
//   "images/9.jpg",
//   "images/10.jpg",
//   "images/11.jpg",
//   "images/12.jpg",
//   "images/13.jpg",
//   "images/14.jpg",
//   "images/15.jpg",
//   "images/16.jpg",
//   "images/17.jpg",
//   "images/18.jpeg",
//   "images/19.jpeg",
//   "images/20.jpeg",
//   "images/21.jpeg",
//   "images/22.jpg",
//   "images/23.jpg",
//   "images/24.jpg",
//   "images/25.jpg",
//   "images/26.jpg",
//   "images/27.jpg",
//   "images/28.jpg",
//   "images/29.jpg",
//   "images/30.webp",
//   "images/31.jpg",
//   "images/32.jpg",
//   "images/33.jpg",
//   "images/34.jpg",
//   "images/35.jpg",
//   "images/36.jpg",
//   "images/37.jpg",
//   "images/38.jpeg",
//   "images/39.jpg",
//   "images/40.jpeg",
//   "images/41.jpg",
//   "images/42.jpeg",
//   "images/43.jpeg",
//   "images/44.jpg",
//   "images/45.jpg",
// ];

// const handleButtonStatus = () => {
//   if (pageCount === currentPage) {
//     loadMoreButton.classList.add("disabled");
//     loadMoreButton.setAttribute("disabled", true);
//   }
// };

// const createCard = (index) => {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.style.backgroundImage = `url('${cardImages[index - 1]}')`; // Set the background image URL for the card
//   cardContainer.appendChild(card);
// };

// const addCards = (pageIndex) => {
//   currentPage = pageIndex;

//   handleButtonStatus();

//   const startRange = (pageIndex - 1) * cardIncrease;
//   const endRange =
//     pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;

//   cardCountElem.innerHTML = endRange;

//   for (let i = startRange + 1; i <= endRange; i++) {
//     createCard(i);
//   }
// };

// window.onload = function () {
//   loadMoreButton.addEventListener("click", () => {
//     addCards(currentPage + 1);
//   });

//   addCards(currentPage); 
// };





// Slider 
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHiddenIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}


arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    let firstImgWidth = firstImg.clientWidth + 14; 
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHiddenIcons(), 60);
  })
});

const autoSlide = () => {
  if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14; 
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
  carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

}

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;

}
const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHiddenIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);







