const txt = document.getElementById("text");

let a = 7;
let b = 3;
if (a > 5 && b > 5) {
  console.log("large nbrs");
} else if (a > 5 || b > 5) {
  console.log("mixed nbrs");
} else {
  console.log("small nbrs");
}

const hours = 10;
let msg;
msg = hours < 12 ? "Good morning!" : "Welcome";
console.log(msg);

const dt = new Date();
const month = 2;
switch (month) {
  case 0:
    msg = "January 4 is National Spaghetti Day!";
    break;
  case 1:
    msg = "February 9 is National Pizza Day!";
    break;
  case 2:
    msg = "March 26 is National Spinach Day!";
    break;
  case 3:
    msg = "April 26 is National Pretzel Day!";
    break;
  default:
    msg = "No holidays this month.";
}
console.log(msg);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };
for (let prop in house) {
  houseDetails = prop + " : " + house[prop];
  console.log(houseDetails);
}

const pets = ["cat", "dog", "chicken"];
for (let pet of pets) {
  console.log(pet);
}

let text = "spell me.";
for (let character of text) {
  console.log(character);
}

let guessNumber = 0;
let numberToGuess = 7;
let guess;
while (guess != numberToGuess) {
  guess = Math.floor(Math.random() * 10);
  guessNumber++;
}
console.log(guessNumber);

txt.textContent = "Hi, there!";
