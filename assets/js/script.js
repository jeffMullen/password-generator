// Click button to generate password ---> presented with a series of prompts for password criteria

// When prompted for criteria ---> Can select which criteria to include

// When prompted for length --> Choose a length between 8 and 128 characters

// When prompted for character types --> can choose lowercase, uppercase, numeric, and/or special characters

// When each prompt is answered --> input should be validated and at least one character type should be selected

// When all prompts are answered --> A password is generated that matches the selected criteria

// When generated --> password is either displayed in an alert OR written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt String Variables
var lowercase = "Would you like to use lowercase letters?";
var uppercase = "Would you like to use uppercase letters?";
var specialQuestion = "Would you like to use special characters?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create array of letters that logs a random letter
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = alpha.split("");

var randomLetter = alphaArray[Math.floor(Math.random() * alphaArray.length)];

console.log(randomLetter);

// Random Uppercase letter generator
var alphaUppercase = alpha.toUpperCase();
var alphaArrayUppercase = alphaUppercase.split("");

console.log(alphaArrayUppercase);

var randomUpperCase = randomLetter.toUpperCase();
console.log(randomUpperCase);

// Random number generator
var num = "0123456789";
var numArray = num.split("");

var randomNum = numArray[Math.floor(Math.random() * numArray.length)];

console.log(randomNum);

// Random Special Character Generator
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";
var specialArray = special.split("");

var randomSpecial = specialArray[Math.floor(Math.random() * specialArray.length)];

console.log(randomSpecial);

// Object to store validation data
var passwordCredentials = {};

// Validate Lowercase letters and send array to passwordCredentials
var lowercaseAnswer = confirm(lowercase);

if (lowercaseAnswer === true) {
  passwordCredentials.lowercase = alphaArray;
}

console.log(lowercaseAnswer);

//Validate UPPERCASE letters and send array to passwordCredentials
var uppercaseAnswer = confirm(uppercase);

if (uppercaseAnswer === true) {
  passwordCredentials.uppercase = alphaArrayUppercase;
}

console.log(passwordCredentials);
