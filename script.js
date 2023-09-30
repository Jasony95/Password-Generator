// Assignment Code
var generateBtn = document.querySelector("#generate");

var numCharLength = 0;
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = '0123456789';
var specialChar = "!@#$%^&*()_+{}[]|\";:'/.,?><";
var useLowerCaseChar = false;
var useUpperCaseChar = false;
var useNum = false;
var useSpecialChar = false;
var genPassword = [];
var numLength;
var arrChar;



function convertToArray(arr) {
  arr = arr.split("");
  return arr;
}

function convertToStrNoCom(newPassString) {
  arr = newPassString.join("");
  return arr;
}

function askLength() {
  numChar = prompt(`How many characters do you want from 8 to 128?`);

  while (numChar > 128 || numChar < 8 || numChar === null || numChar === undefined || isNaN(numChar)) {

      numChar = prompt(`Please choose a number from 8 to 128.`);

  };

  return numChar;

}

function askBoolLow() {
  var useLowerCaseChar = confirm(`Do you want to use lowercase characters?`);
  return useLowerCaseChar;
}

function askBoolUp() {
  var useUpperCaseChar = confirm(`Do you want to use uppercase characters?`);
  return useUpperCaseChar;
}

function askBoolNum() {
  var useNum = confirm(`Do you want to use Number characters?`);
  return useNum;
}

function askBoolSpec() {
  var useSpecChar = confirm(`Do you want to use Special characters?`);
  return useSpecChar;
}

function determineUse(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, genPassword, arrChar, numLength, numCharLength) {
  var newPassString;
  var numCharLength = 0;

  genPassword = addOneChar(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, arrLow, arrUp, arrNum, arrSpec, genPassword, numCharLength);

  newPassString = genPassword;

  for (var i = 0; i < numLength - numCharLength; i++) {

    char = chooseChar(arrChar);
    newPassString = newPassString.concat(char);

  }

  newPassString = convertToArray(newPassString);

  newPassString = sortRandomPosition(newPassString);

  newPassString = newPassString.join("");

  return newPassString;

}

function addOneChar(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, arrLow, arrUp, arrNum, arrSpec, genPassword, numCharLength) {
  genPassword = genPassword.toString();

  if (useLowerCaseChar) {
    char = chooseChar(arrLow);
    genPassword = genPassword.concat(char);
    numCharLength++;
  }

  if (useUpperCaseChar) {
    char = chooseChar(arrUp);
    genPassword = genPassword.concat(char);
    numCharLength++;
  }

  if (useNum) {
    char = chooseChar(arrNum);
    genPassword = genPassword.concat(char);
    numCharLength++;
  }

  if (useSpecialChar) {
    char = chooseChar(arrSpec);
    genPassword = genPassword.concat(char);
    numCharLength++;
  }

  return genPassword;
}

function countBool() {
  if (useLowerCaseChar) {
    numCharLength++;
  }

  if (useUpperCaseChar) {
    numCharLength++;
  }

  if (useNum) {
    numCharLength++;
  }

  if (useSpecialChar) {
    numCharLength++;
  }

  return numCharLength;
}

function sortRandomPosition(generatePassword) { //Used Fisher-Yates Algorithm for this function; Credits and Source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  for (let i = generatePassword.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = generatePassword[i];
    generatePassword[i] = generatePassword[j];
    generatePassword[j] = temp;
  }

  return generatePassword;
}

function chooseChar(arr) {
  var chosenChar = arr[(Math.floor(Math.random() * arr.length))];
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

  return charArr;

}

function generatePassword() {
  genPassword = [];
  arrLow = convertToArray(lowerCaseChar);
  arrUp = convertToArray(upperCaseChar);
  arrNum = convertToArray(numChar);
  arrSpec = convertToArray(specialChar);
  

  var numLength = askLength();

  useLowerCaseChar = askBoolLow();
  useUpperCaseChar = askBoolUp();
  useNum = askBoolNum();
  useSpecialChar = askBoolSpec();

  while (!useLowerCaseChar == true && !useUpperCaseChar == true && !useNum == true && !useSpecialChar == true) {

    alert("Please click Okay to one of the group of character.");
    useLowerCaseChar = askBoolLow();
    useUpperCaseChar = askBoolUp();
    useNum = askBoolNum();
    useSpecialChar = askBoolSpec();

  }

  arrChar = createCharArr(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, arrLow, arrUp, arrNum, arrSpec);

  genPassword = determineUse(useLowerCaseChar, useUpperCaseChar, useNum, useSpecialChar, genPassword, arrChar, numLength, numCharLength);

  numLength = 0;
  numCharLength = 0;

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
