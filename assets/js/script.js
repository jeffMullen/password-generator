// Click button to generate password ---> presented with a series of prompts for password criteria

// When prompted for criteria ---> Can select which criteria to include

// When prompted for length --> Choose a length between 8 and 128 characters

// When prompted for character types --> can choose lowercase, uppercase, numeric, and/or special characters

// When each prompt is answered --> input should be validated and at least one character type should be selected

// When all prompts are answered --> A password is generated that matches the selected criteria

// When generated --> password is either displayed in an alert OR written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordCredentials.length = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Prompt String Variables
var lowercase = "Would you like to use lowercase letters?";
var uppercase = "Would you like to use uppercase letters?";
var numQuestion = "Would you like to use numbers?"
var specialQuestion = "Would you like to use special characters?";

// Arrays for each character type
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = alpha.split("");

var alphaUppercase = alpha.toUpperCase();
var alphaArrayUppercase = alphaUppercase.split("");

var num = "0123456789";
var numArray = num.split("");

var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";
var specialArray = special.split("");

// Array to store validation data
var passwordCredentials = [];

// Ask User for Criteria
function generatePassword() {
  var numCharacters = window.prompt("Choose a password length between 8 and 128 characters.");

  // Check that its a number
  while (isNaN(numCharacters)) {
    alert("Entry must be a number");
    numCharacters = window.prompt("Choose a password length between 8 and 128 characters.");
  }

  // Check that number > 8 | < 128
  while ((numCharacters < 8 || numCharacters > 128)) {
    alert("Invalid Entry" + "\nPassword must be at least 8 characters, and no more than 128 characters.");
    numCharacters = window.prompt("Choose a password length between 8 and 128 characters.");
  }

  // CHARACTER TYPE yes or no
  var lowercaseValid = confirm(lowercase);

  var uppercaseValid = confirm(uppercase);

  var numValid = confirm(numQuestion);

  var specialValid = confirm(specialQuestion);

  // Requires user to choose at least one character type
  if ((lowercaseValid || uppercaseValid || numValid || specialValid) === false) {
    alert("Must choose at least one character type.");
    var lowercaseValid = confirm(lowercase);
    var uppercaseValid = confirm(uppercase);
    var numValid = confirm(numQuestion);
    var specialValid = confirm(specialQuestion);
  }

  // Character types added to passwordCredentials array
  if (lowercaseValid) {
    passwordCredentials = passwordCredentials.concat(alphaArray);
  }

  if (uppercaseValid) {
    passwordCredentials = passwordCredentials.concat(alphaArrayUppercase);
  }

  if (numValid) {
    passwordCredentials = passwordCredentials.concat(numArray);
  }

  if (specialValid) {
    passwordCredentials = passwordCredentials.concat(specialArray);
  }

  // COMBINATIONS OF 2 CHARACTER TYPES **********************
  // Representation of lowercase and uppercase characters
  if (lowercaseValid && uppercaseValid && !numValid && !specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of lower and number characters
  if (lowercaseValid && !uppercaseValid && numValid && !specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + numArray[Math.floor(Math.random() * numArray.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of lowercase and special characters
  if (lowercaseValid && !uppercaseValid && !numValid && specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of uppercase and number characters
  if (!lowercaseValid && uppercaseValid && numValid && !specialValid) {
    var password = alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + numArray[Math.floor(Math.random() * numArray.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of uppercase and special characters
  if (!lowercaseValid && uppercaseValid && !numValid && specialValid) {
    var password = alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of number and special characters
  if (!lowercaseValid && !uppercaseValid && numValid && specialValid) {
    var password = numArray[Math.floor(Math.random() * numArray.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 2); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // COMBINATIONS OF 3 CHARACTER TYPES **********************
  // Representation of lower, upper, and number characters
  if (lowercaseValid && uppercaseValid && numValid && !specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + numArray[Math.floor(Math.random() * numArray.length)];

    for (let i = 0; i < (numCharacters - 3); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of lower, upper, and special characters
  if (lowercaseValid && uppercaseValid && !numValid && specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 3); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of lower, number, and special characters
  if (lowercaseValid && !uppercaseValid && numValid && specialValid) {
    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + numArray[Math.floor(Math.random() * numArray.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 3); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // Representation of upper, number, and special characters
  if (!lowercaseValid && uppercaseValid && numValid && specialValid) {
    var password = alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + numArray[Math.floor(Math.random() * numArray.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 3); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // COMBINATION OF ALL 4 CHARACTER TYPES **********************
  // Makes sure all characters are represented in password when ALL options are true
  if (lowercaseValid && uppercaseValid && numValid && specialValid) {

    var password = alphaArray[Math.floor(Math.random() * alphaArray.length)] + alphaArrayUppercase[Math.floor(Math.random() * alphaArrayUppercase.length)] + numArray[Math.floor(Math.random() * numArray.length)] + specialArray[Math.floor(Math.random() * specialArray.length)];

    for (let i = 0; i < (numCharacters - 4); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      password = password + randomSelection;
    }

    return password;
  }

  // If only one character type is selected
  else {
    var password = "";

    for (let i = 0; i < (numCharacters); i++) {
      var randomSelection = passwordCredentials[Math.floor(Math.random() * passwordCredentials.length)];
      var password = password + randomSelection;
    }

    return password;
  }
}
