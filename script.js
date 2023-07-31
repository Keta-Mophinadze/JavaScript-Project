"use strict";

// HEADER - BURGER BAR
const ulNavigation = document.getElementById("ul-nav");
const burgerToggle = document.getElementById("burgerBar");
burgerToggle.addEventListener("click", function () {
  ulNavigation.classList.toggle("toggleNav");
  burgerToggle.classList.toggle("activeBurger");
});

const formElement = document.getElementById("registration");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const errors = {};
  // USERNAME
  const userFirstName = document.getElementById("myname").value;
  if (userFirstName === "") {
    errors.myname = "Please complete this field";
  }
  // LASTNAME
  const lastName = document.getElementById("mylastname").value;
  if (lastName === "") {
    errors.mylastname = "Please complete this field";
  }

  // EMAIL
  const emailValue = document.getElementById("myemail").value;
  if (emailValue === "") {
    errors.myemail = "Please complete this field";
  }

  //PASSWORD
  const passwordValue = document.getElementById("mypassword").value;
  const passwordValue2 = document.getElementById("mypassword2").value;
  if (passwordValue === "") {
    errors.mypassword = "Please complete this field";
  }
  if (passwordValue != passwordValue2) {
    errors.mypassword2 = "Passwords do not match";
  }
  // CHECKBOX
  const checkBox = document.getElementById("checkBox").checked;
  if (!checkBox) {
    errors.check = "Please agree to our Terms and Conditions";
  }
  console.log(errors);

  document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = " ";
  }); // <-- Add closing parenthesis here

  for (let keyObject in errors) {
    console.log(keyObject);
    const pError = document.getElementById("error-" + keyObject);
    if (pError) {
      pError.textContent = errors[keyObject];
    }
  }

  if (Object.keys(errors).length === 0) {
    formElement.submit();
  }
});

// // SHOW HIDDEN PASSWORD - ფუნქცია უნდა აღვწეროთ საბმით ფუნქციის გარეთ, რადგან დასაბმითების გარეშე გვინდა შესრულდეს მოქმედება

// let passwordShow = document.getElementById("passwordfield");
// let icon = document.querySelector(".showIcon"); // Use querySelector to select the element by the showIcon class
// icon.addEventListener("click", function () {
//   if (passwordShow.type === "password") {
//     passwordShow.setAttribute("type", "text");
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//   } else {
//     passwordShow.setAttribute("type", "password");
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-eye");
//   }
// });
// // EMAIL VALIDATION - REGEX - საბმით ივენთის გარეთ!

// let emailField = document.getElementById("emailfield");
// emailField.addEventListener("keyup", function () {
//   const emailError = document.getElementById("emailError");
//   let emailValue = document.getElementById("emailfield").value; // VALUE - გვაინტერესებს ის, რასაც მომხმარებელი ჩაწერს
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (emailValue.match(emailPattern)) {
//     emailError.textContent = "Email is valid";
//     emailError.style.color = "green";
//   } else {
//     emailError.textContent = "Email is invalid";
//     emailError.style.color = "red";
//   }
//   if (emailValue == "") {
//     // ბრჭყალები აუცილებლად ერთად
//     emailError.textContent = " "; // აქ ცალ-ცალკე
//   }
// });
