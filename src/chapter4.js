const txt = document.getElementById("text");

console.log(3 == "3");
console.log(3 === "3");

const userPreference = { language: "Dutch" };
let language = userPreference.language || "English";
console.log(language);

const userPreference2 = {};
let language2 = userPreference2.language || "English";
console.log(language2);

let loggedIn = false;
let logInScreen = !loggedIn && showLogInScreen();

function showLogInScreen() {
  console.log("Login please");
}

txt.textContent = "Hi, there!";
