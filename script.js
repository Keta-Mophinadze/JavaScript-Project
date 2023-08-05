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

// // SLIDER
// const sliderPicture = [
//   {
//     id: 1,
//     imageUrlSlide: "images/book1.jpg",
//   },
//   {
//     id: 2,
//     imageUrlSlide: "images/book2.jpeg",
//   },
//   {
//     id: 3,
//     imageUrlSlide: "images/book3.jpeg",
//   },
//   {
//     id: 4,
//     imageUrlSlide: "images/book4.jpeg",
//   },
// ];

// const sliderContent = document.getElementById("slider-content");
// const arrowLeft = document.getElementById("arrow-left");
// const arrowRight = document.getElementById("arrow-right");
// let sliderIndex = 0;

// function createDivTag() {
//   const div = document.createElement("div");

//   return div;
// }

// function createImgTag(item) {
//   const tagImage = document.createElement("div");
//   tagImage.style.backgroundImage = `url(${item.imageUrlSlide})`;
//   tagImage.classList.add("bg-image");

//   return tagImage;
// }

// function createTitle(item) {
//   const titleTag = document.createElement("h2");
//   return titleTag;
// }

// function createDots() {
//   const dotsWraper = document.createElement("div");
//   dotsWraper.classList.add("dots-Wraper");

//   sliderPicture.forEach((element) => {
//     const dotItem = document.createElement("div");
//     dotItem.classList.add("dot-item");
//     dotItem.setAttribute("data-id", element.id - 1);

//     dotItem.addEventListener("click", function (event) {
//       let id = event.target.getAttribute("data-id");
//       console.log(id);
//       sliderIndex = id;
//       slide();
//     });
//     dotsWraper.appendChild(dotItem);
//   });

//   return dotsWraper;
// }

// function slide() {
//   sliderContent.innerHTML = " ";
//   const sliderItem = createDivTag();
//   const sliderImg = createImgTag(sliderPicture[sliderIndex]);
//   const h2Tag = createTitle(sliderPicture[sliderIndex]);
//   const dotsContainer = createDots();

//   sliderItem.appendChild(sliderImg);
//   sliderItem.appendChild(h2Tag);
//   sliderContent.appendChild(sliderItem);
//   sliderContent.appendChild(dotsContainer);
// }

// slide();

// // -------------------

const cardContainer = document.getElementById("card-container");
const loadMoreButton = document.getElementById("load-more");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");

const cardLimit = 45;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

const getRandomColor = () => {
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
  "images/17.jpg",
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
  card.style.backgroundColor = getRandomColor();
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

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};

// window.onload = function () {
//   addCards(currentPage);
//   loadMoreButton.addEventListener("click", () => {
//     addCards(currentPage + 1);
//   });
// };

window.onload = function () {
  loadMoreButton.addEventListener("click", () => {
    addCards(currentPage + 1);
  });

  addCards(currentPage); 
};

