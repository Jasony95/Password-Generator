// Assignment Code
var generateBtn = document.querySelector("#generate");

var numChar = 0;
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = '0123456789';
var specialChar = "!@#$%^&*()_+{}[]|\";:'/.,?><";



function convertToArray(arr) {
  arr = arr.split("");
  return arr;
}

function askLength() {
  numChar = prompt(`How many characters do you want from 8 to 128?`);

  while (numChar > 128 || numChar < 8) {
    numChar = prompt(`The number ${numChar} you choose doesn't meet the requirement. Please choose a number from 8 to 128.`);
  };

  return numChar;

}

function askBoolLow() {
  var useLowerCaseChar = confirm(`Do you want to use lowercase characters?`);
  alert("Use Lower Case Char: " + useLowerCaseChar);
  return useLowerCaseChar;
}

function askBoolUp() {
  var useUpperCaseChar = confirm(`Do you want to use uppercase characters?`);
  alert("Use Upper Case Char: " + useUpperCaseChar);
  return useUpperCaseChar;
}

function askBoolNum() {
  var useNum = confirm(`Do you want to use Number characters?`);
  alert("Use Number Case Char: " + useNum);
  return useNum;
}

function askBoolSpec() {
  var useSpecChar = confirm(`Do you want to use Special characters?`);
  alert("Use Special Case Char: " + useSpecChar);
  return useSpecChar;
}

function determineUse(genPassword, numChar, arrChar) {

  for (var i = 0; i < numChar; i++) {

    genPassword = genPassword.toString();
    char = chooseChar(arrChar);
    genPassword += char;

  }

  return genPassword;

}

function chooseChar(arr) {
  var chosenChar = arr[(Math.floor(Math.random() * arr.length))];
  console.log(chosenChar);
  return chosenChar;
}

function createCharArr(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, arrLow, arrUp, arrNum, arrSpec) {
  var charArr = [];

  if (useLowerCaseChar) {
    charArr = [...charArr, ...arrLow];
  }

  if (useUpperCaseChar) {
    charArr = [...charArr, ...arrUp];
  }

  if (useNum) {
    charArr = [...charArr, ...arrNum];
  }

  if (useSpecialChar) {
    charArr = [...charArr, ...arrSpec];
  }

  console.log(charArr);

  return charArr;

}

function generatePassword() {
  arrLow = convertToArray(lowerCaseChar);
  arrUp = convertToArray(upperCaseChar);
  arrNum = convertToArray(numChar);
  arrSpec = convertToArray(specialChar);
  var useLowerCaseChar = false;
  var useUpperCaseChar = false;
  var useNum = false;
  var useSpecialChar = false;
  var genPassword = [];
  var numLength;
  var arrChar;

  numLength = askLength();
  console.log(`useLowerCase: ${useLowerCaseChar}`);
  console.log(`chooseChar: ${chooseChar(arrLow)}`);
  useLowerCaseChar = askBoolLow();
  useUpperCaseChar = askBoolUp();
  useNum = askBoolNum();
  useSpecialChar = askBoolSpec();
  console.log(`useLowerCase: ${useLowerCaseChar}`);
  console.log(`useUpperCaseChar: ${useUpperCaseChar}`);
  console.log(`useNum: ${useNum}`);
  console.log(`useSpecialChar: ${useSpecialChar}`);
  
  arrChar = createCharArr(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, arrLow, arrUp, arrNum, arrSpec);

  genPassword = determineUse(genPassword, numLength, arrChar);

  console.log(genPassword);

  return genPassword;

}

writePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
