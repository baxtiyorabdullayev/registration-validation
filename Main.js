"use strict";
let users = [],
  body = document.querySelector("body"),
  indexBox = document.querySelector(".index-box");

// log in page
let logInName = document.querySelector(".log-in_name"),
  logInUsername = document.querySelector(".log-in_username"),
  logInEmail = document.querySelector(".log-in_email"),
  logInPhone = document.querySelector(".log-in_phone"),
  logInDate = document.querySelector(".log-in_date"),
  logInPassword = document.querySelector(".log-in_password"),
  logInRepassword = document.querySelector(".log-in_repassword"),
  logInButton = document.querySelector(".log-in_button"),
  eyeButton1 = document.querySelector(".eye1"),
  eyeButton2 = document.querySelector(".eye2"),
  ol = document.createElement("ol"),
  usersList = document.querySelector(".index-box"),
  alerText = document.querySelector(".subtitle");

// Show Password
function openEye1(e) {
  e.preventDefault();
  if (logInPassword.type === "password") {
    logInPassword.type = "text";
  } else {
    logInPassword.type = "password";
  }
}
eyeButton1.addEventListener("click", openEye1);

// Show Repassword
function openEye2(e) {
  e.preventDefault();
  if (logInRepassword.type === "password") {
    logInRepassword.type = "text";
  } else {
    logInRepassword.type = "password";
  }
}
eyeButton2.addEventListener("click", openEye2);

// Entering informations to array
function enterInfoToArray(e) {
  e.preventDefault();
  if (
    !logInName.value ||
    !logInUsername.value ||
    !logInEmail.value ||
    !logInPhone.value ||
    !logInDate.value ||
    !logInPassword.value ||
    !logInRepassword.value
  ) {
    alerText.innerHTML = "Please fill all inputs!";
  } else if (logInPassword.value !== logInRepassword.value) {
    alerText.innerHTML = "Passwords don't match! Please enter password again";
  } else {
    let user = {
      name: logInName.value,
      username: logInUsername.value,
      email: logInEmail.value,
      phone: logInPhone.value,
      birth: logInDate.value,
      password: logInPassword.value,
      repassword: logInRepassword.value,
    };
    let checkingUsername = users.some(
      (user) => user.username === logInUsername.value
    );
    if (checkingUsername) {
      alerText.innerHTML = `This @${logInUsername.value} username is already taken, please choose another username`;
      return;
    } else {
      alerText.innerHTML = `Dear: ${logInName.value}! congratulations you registered successfully!`;
    }

    let checkingEmail = users.some((user) => user.email === logInEmail.value);
    if (checkingEmail) {
      alerText.innerHTML = `This ${logInEmail.value} email is already taken, please choose another email`;
      return;
    } else {
      alerText.innerHTML = `Dear: ${logInName.value}! congratulations you registered successfully!`;
    }

    if (logInPassword.value.length < 8) {
      alerText.innerHTML = `Dear: ${logInName.value}! enter more than 8 letters or numbers`;
      return;
    }

    users.push(user);
    console.log(users);
    logInName.value = "";
    logInUsername.value = "";
    logInEmail.value = "";
    logInPhone.value = "";
    logInDate.value = "";
    logInPassword.value = "";
    logInRepassword.value = "";

    ol.classList.add("users-ol");
    let li;
    users.map((element) => {
      li = document.createElement("li");
      li.textContent = `Name: ${element.name}, Username: ${element.username}, Email: ${element.email}, Phone number: ${element.phone}, Birth day: ${element.birth}, Password: ${element.password}`;
    });
    ol.appendChild(li);
    usersList.appendChild(ol);
    body.appendChild(usersList);
  }
}
logInButton.addEventListener("click", enterInfoToArray);

// sigh in page
let sighInEmail = document.querySelector(".sigh-in_email"),
  sighInPassword = document.querySelector(".sigh-in_password"),
  sighInButton = document.querySelector(".sigh-in_button");

function checkSighIn(e) {
  e.preventDefault();
  let checkUser = users.some(
    (item) =>
      item.email === sighInEmail.value && item.password === sighInPassword.value
  );
  if (checkUser) {
    alert("Congratulations you sigh in successfully!");
  } else {
    alert(
      "Awfully sorry we can't find your email or password from our database, please try again"
    );
  }
}
sighInButton.addEventListener("click", checkSighIn);

// Search pege
let searchInput = document.querySelector(".search-input"),
  searchButton = document.querySelector(".search-button"),
  searchedBox = document.querySelector(".searched-box");
let searchedUser = document.createElement("h1");
searchedUser.textContent = "";

function searchUser(e) {
  e.preventDefault();
  let checkUsername = users.some((user) => user.username === searchInput.value);
  let findUsername = users.find((user) => user.username === searchInput.value),
    find = [findUsername];
  console.log(findUsername);
  if (checkUsername) {
    find.map((element) => {
      searchedUser.textContent = `Name: ${element.name}, Username: ${element.username}, Email: ${element.email}, Phone number: ${element.phone}, Birth day: ${element.birth}`;
    });
    searchedBox.appendChild(searchedUser);
  } else alert(`@${searchInput.value} bunday usernameda foydalanuvchi yo'q!`);
}

searchButton.addEventListener("click", searchUser);
