// const passwordEl = document.getElementById("password");
// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numbersEl = document.getElementById("numbers");
// const symbolsEl = document.getElementById("symbols");
// const generateEl = document.getElementById("generate");

function getRandomUpper() {
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppercase [Math.floor(Math.random() * uppercase.length)];
}

function getRandomLower() {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function getRandomNumber() {
	const numbers = '!@#$%^&*(){}[]=<>/,.';
  return numbers [Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomUpper());
// console.log(getRandomLower());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
