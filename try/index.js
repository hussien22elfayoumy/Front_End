/* let nam = 'hussien';
console.log(`my name is;  ${nam}.`);

let coffee = 5;
let bagels = 3;
let soup = 9;

let cost = coffee + (2*bagels) + soup;
console.log(`Cost of food is: $${cost}.`);

const tax = cost * 0.1;

console.log(`Tax(10%): $${tax}.`);

let costAfterTax = cost + tax;

console.log(`Cost + Tax: $${costAfterTax}.`);

*/

/* let hour = 15;
let nam = 'hussien'

if (hour >= 6 && hour <= 12)
    console.log('Good morning ' + nam);
  else if (hour >= 13 && hour <= 17)
    console.log('Good afternoon ' + nam);
  else
    console.log('Good night ' + nam);


let age = 5;
const isHoliday = true;
if ((age <= 6 || age >= 65) && !isHoliday)
    console.log('Discount');
  else
    console.log('NO discount'); */

/* let randomNum = Math.random();
let result = "";

if (randomNum < 0.5) {
  result = "head";
  console.log("head");
} else {
  result = "tails";
  console.log("tails");
}

let guess = "head";

guess === result ? console.log("you win") : console.log("you lose"); */

/* function greet(fName) {
  if (!fName) {
    console.log(`hello there!`);
  } else {
    console.log(`hello, ${fName}`);
  }
}

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemp(degree, unit) {
  if (unit === "C") {
    const result = convertToFahrenheit(degree);
    return `${result}F`;
  } else if (unit === "F") {
    convertToCelsius(degree);
    const result = convertToCelsius(degree);
    return `${result}C`;
  }
}

console.log(convertTemp(25, "C"));
console.log(convertTemp(86, "F")); */

/* --------- Cart -------
let cartQuantatity = 0;

function updateCartQuantity(num) {
  cartQuantatity += num;
  if (num < 0) {
    console.log(
      `Removed ${-num} product your cart now is [${cartQuantatity}] products`
    );
  } else {
    console.log(
      `Added ${num} product yout Cart now is [${cartQuantatity}] products.`
    );
  }
} */

/* ------ Calculation -----
let calc = "";
function updadeCalc(num) {
  calc += num;
  console.log(calc);
} */

// --------- Funny Game --------
