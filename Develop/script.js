const scrollRange = document.getElementById("lengthRange");
const scrollNum = document.getElementById("lengthNum");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const form = document.getElementById("generatorForm");
const passwordDisplay = document.getElementById("passwordDisplay");

const UPPERCASE_CHAR_CODE = array(65, 90);
const LOWERCASE_CHAR_CODE = array(97, 122);
const NUMBER_CHAR_CODE = array(48, 57);
const SYMBOL_CHAR_CODE = array(33, 47);

scrollNum.addEventListener("input", syncCharacterAmount);
scrollRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const length = scrollNum.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  const password = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
  passwordDisplay.innerText = password;
});

function generatePassword(
  length,
  hasLower,
  hasUpper,
  hasNumber,
  hasSymbol
) {
  console.log(UPPERCASE_CHAR_CODE)
}

function array(low, high) {
  const array = []
  for (let i = low; i < high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  scrollNum.value = value;
  scrollRange.value = value;
}