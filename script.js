"use strict";

// Header - Burger Bar
const ulNavigation = document.getElementById("ul-nav");
const burgerToggle = document.getElementById("burgerBar");
burgerToggle.addEventListener("click", function () {
  ulNavigation.classList.toggle("toggleNav");
  burgerToggle.classList.toggle("activeBurger");
});

// Validation
const formElement = document.getElementById("registration");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const errors = {};
  // Username
  const userFirstName = document.getElementById("myname").value;
  if (userFirstName === "") {
    errors.myname = "Please complete this field";
  }

  // Email
  const emailValue = document.getElementById("myemail").value;
  if (emailValue === "") {
    errors.myemail = "Please complete this field";
  }
  // Password
  const passwordValue = document.getElementById("mypassword").value;
  const passwordValue2 = document.getElementById("mypassword2").value;
  if (passwordValue === "") {
    errors.mypassword = "Please complete this field";
  }
  if (passwordValue != passwordValue2) {
    errors.mypassword2 = "Passwords do not match";
  }
  // Checkbox
  const checkBox = document.getElementById("checkBox").checked;
  if (!checkBox) {
    errors.check = "Please agree to our Terms and Conditions";
  }
  console.log(errors);

  document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = " ";
  });

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

// Hidden Password
const showPassword = document.getElementById("mypassword");
const icon = document.getElementById("passwordIcon");
icon.addEventListener("click", function () {
  if (showPassword.type === "password") {
    showPassword.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    showPassword.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});
// Regex - Email
const emailField = document.getElementById("myemail");
emailField.addEventListener("keyup", function () {
  const emailError = document.getElementById("emailError");
  const emailValue = document.getElementById("myemail").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailValue.match(emailPattern)) {
    emailError.textContent = "Email is valid";
    emailError.style.color = "rgb(18, 117, 18)";
  } else {
    emailError.textContent = "Email is not valid";
    emailError.style.color = "rgb(207, 19, 19)";
  }
  if (emailValue == "") {
    emailError.innerHTML = " ";
  }
});
// Regex - Username
const userNameField = document.getElementById("myname");
userNameField.addEventListener("keyup", function () {
  const userNameError = document.getElementById("userNameError");
  const userNameValue = document.getElementById("myname").value;
  const userNamePattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  if (userNameValue.match(userNamePattern)) {
    userNameError.textContent = "Username is valid";
    userNameError.style.color = "rgb(18, 117, 18)";
  } else {
    userNameError.textContent = "Username is not valid";
    userNameError.style.color = "rgb(207, 19, 19)";
  }
  if (userNameValue == "") {
    userNameError.innerHTML = " ";
  }
});
