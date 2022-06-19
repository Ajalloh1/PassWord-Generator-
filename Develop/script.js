// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //Create variables to decide outcome of password
  var passwordLength = prompt("How many characters would you like?");
  var passwordUpperCase = confirm("Would you like to use Upper Case Letters?");
  var passwordLowerCase = confirm("Would you like to use Lower Case Letters?");
  var passwordNumbers = confirm("Would you like to use Numbers?");
  var passwordSpecialCharacter = confirm("Would you like to use Special Characters?");
  //


// var specialCharArr= ['*', '!', '?', '/', '$', '#', '@', '&', '~', '`', '^', '<', '>', ',', ';', ']', '[', '}', '{',];
// var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
