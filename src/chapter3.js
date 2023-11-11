const nbr = document.getElementById("number");

let number = 5.2;
let name = "Sven";
const MR = "Mitster";

let str = `My name is ${MR} ${name} and my number is ${number}`;

console.log(str);
console.log(name + number + MR);

//let n1 = prompt("number 1 ?");
//let n2 = prompt("number 2 ?");
let n1 = "5";
let n2 = "6";
console.log("n1 " + typeof n1);
console.log("n2 " + typeof n2);

sum = parseInt(n1) + parseInt(n2);
console.log("sum " + typeof sum);

console.log(str.charAt(5));
console.log(str.indexOf("s"));
let parts = str.split("is");
console.log(parts);
console.log(str.slice(4, 12));

console.log(3 < 6);
console.log(5 == 5);
console.log(!!5);
console.log(!!0);

let n;
console.log(n);
if (!n) {
  console.log("empty var");
}

console.log(Math.sqrt(-1));

const customer = {
  name: "Laura Wigfall",
  address: "3427 Crummit Lane",
  city: "Providence",
  state: "RI",
  zipcode: "02905",
  customerId: 4,
  isInLoyaltyClub: true,
};

console.log(customer);
console.log(customer.city);

const favoriteCities = ["Rome", "Berlin", "New York", "Paris", "Astoria"];

console.log(favoriteCities);
console.log(favoriteCities[2]);

nbr.textContent = sum;
