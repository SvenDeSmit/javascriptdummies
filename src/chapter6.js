const txt = document.getElementById("text");

const colors = ["red", "green", "blue"];
console.log(colors);

const myArray = new Array("January", "February", "March");
console.log(myArray);

let customerData = "Barb Seibert,3739 Sheila Lane,Goldfield,NV,89013";
const customerDataArray = customerData.split(",");
console.log(customerDataArray);

myArray.length = 2;
console.log(myArray);

let ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];
console.log(ingredients);

console.log(ingredients.pop());
console.log(ingredients.shift());

console.log(ingredients);

console.log(ingredients.push("end"));
console.log(ingredients.unshift("start"));

console.log(ingredients);

ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];
console.log(ingredients);

console.log(ingredients.slice(2, 5));
console.log(ingredients);

console.log(ingredients.splice(2, 3));
console.log(ingredients);

txt.textContent = "Hi, there!";
