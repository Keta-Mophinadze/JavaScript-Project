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

// // Slider
// const carousel = document.querySelector(".carousel"),
//   firstImg = carousel.querySelectorAll("img")[0];
// const arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false,
//   isDragging = false,
//   prevPageX,
//   prevScrollLeft,
//   positionDiff;

// const showHiddenIcons = () => {
//   let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//   arrowIcons[1].style.display =
//     carousel.scrollLeft == scrollWidth ? "none" : "block";
// };

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth + 14;
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     setTimeout(() => showHiddenIcons(), 60);
//   });
// });

// const autoSlide = () => {
//   if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
//     return;

//   positionDiff = Math.abs(positionDiff);
//   let firstImgWidth = firstImg.clientWidth + 14;
//   let valDifference = firstImgWidth - positionDiff;
//   if (carousel.scrollLeft > prevScrollLeft) {
//     return (carousel.scrollLeft +=
//       positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
//   }
//   carousel.scrollLeft -=
//     positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// };

// const dragStart = (e) => {
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   prevScrollLeft = carousel.scrollLeft;
// };
// const dragging = (e) => {
//   if (!isDragStart) return;
//   e.preventDefault();
//   isDragging = true;
//   carousel.classList.add("dragging");
//   positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
//   showHiddenIcons();
// };

// const dragStop = () => {
//   isDragStart = false;
//   carousel.classList.remove("dragging");
//   if (!isDragging) return;
//   isDragging = false;
//   autoSlide();
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);
// carousel.addEventListener("touchend", dragStop);

// // SCROLL TO TOP

// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 150) {
//     toTop.classList.add("activeTop");
//   } else {
//     toTop.classList.remove("activeTop");
//   }
// });

// // ACCORDION
// const faqs = document.querySelectorAll(".faq");
// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("activeAccordion");
//   });
// });

// Cookies pop up
// const modalBox = document.getElementById('modalBox');
// function showModal () {
//   setTimeout(() => {
//     modalBox.style.display = 'block';
//   }, 800);
// }
// function closeModal() {
//   modalBox.style.display = 'none';
// }

// const modalBox = document.getElementById('modalBox');

// const showModal = async () => {
//   await new Promise(resolve => setTimeout(resolve, 800));
//   modalBox.style.display = 'block';
// };

// const closeModal = () => {
//   modalBox.style.display = 'none';
// };

// // Cookies
// const modalBox = document.getElementById('modalBox');
// const overlay = document.getElementById('overlay');

// const showModal = async () => {
//   await new Promise(resolve => setTimeout(resolve, 800));
//   modalBox.style.display = 'block';
//   overlay.style.display = 'block';
// };

// const closeModal = () => {
//   modalBox.style.display = 'none';
//   overlay.style.display = 'none';
// };

// // FETCH
// const userListDiv = document.getElementById("user-list");

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((userData) => {
//     userData.forEach((user) => {
//       const userDiv = createUserDiv(user);
//       userListDiv.appendChild(userDiv);
//     });
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// function generateRandomComment() {
//   const comments = [
//     "A must visit for every book lover! Amazing collection of books in English, both for kids and adults. They also have music and stationary and it was so hard not buying the all store ",
//     "One of the best bookstores in Berlin, you could spend hours here… So many English books and the cutest children’s book section with multiple languages! I am mostly happy with the outstanding service.",
//     "Very cool store, great collection of vinyl records as well as merchandise and books, of course. Extensive section for English books and even a cafe inside the bookstore. The books are well organized and reasonably priced. Overall a great experience.",
//     "This website has become my go-to place for buying books online.",
//     "The user experience is top-notch and the customer support is always helpful.",
//     "Heaven on earth for book lovers.",
//     "Amazing bookshop in Berlin. Paradise for the book lovers and fans of paper supplies. It is a mandatory stop every time we go to Berlin.",
//     "Huge space with great selection of books, music, media, stationery and small gifts. One my favourite places in Berlin.",
//     "Brilliant! I love this place. This place atmosphere makes me feel like i am in a whole another world.",
//     "A great and wholesome experience, 4 of the biggest floors filled with books, vinyls, cd's and souvenirs. it's a magical place!",
//   ];
//   const randomIndex = Math.floor(Math.random() * comments.length);
//   return comments[randomIndex];
// }
// function createUserDiv(user) {
//   const userDiv = document.createElement("div");
//   userDiv.classList.add("user");

//   const userName = document.createElement("h2");
//   userName.classList.add("user-name");
//   userName.textContent = user.name;

//   const userUsername = document.createElement("p");
//   userUsername.classList.add("user-info");
//   userUsername.textContent = `${user.username}`;

//   const userEmail = document.createElement("p");
//   userEmail.classList.add("user-info");
//   userEmail.textContent = `${user.email}`;

//   const userReview = document.createElement("p");
//   userReview.classList.add("review");
//   userReview.textContent = `Review: ${generateRandomComment()}`;

//   userDiv.appendChild(userName);
//   userDiv.appendChild(userUsername);
//   userDiv.appendChild(userEmail);
//   userDiv.appendChild(userReview);

//   return userDiv;
// }

// JS FILTER
// function filterFunction() {
//   let filterValue, input, ul, li, i;
//   input = document.getElementById('search');
//   filterValue = input.value.toUpperCase();
//   ul = document.getElementById('menu');
//   li = ul.getElementsByTagName('li');

//   for (let I = 0; I < li.length; I++) {
//    let a  = li[I].getElementsByTagName('a')[0];
//    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
//     li[I].style.display = ""; 
//    } else {
//     li[I].style.display = "none"; 
//    }
    
//   }

// }

const searchInput = document.getElementById('search');
const menuItems = document.querySelectorAll('#menu li');

searchInput.addEventListener('input', filterFunction);

function filterFunction() {
  const filterValue = searchInput.value.toUpperCase();

  menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}


