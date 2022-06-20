// accessing the pass word generator id/.
var generateBtn = document.querySelector("#generate");

// codes for generatingPassword based on prompts 

function writePassword() {
  var passwordLength = prompt("How many characters do you want your password  to be?");
  //character length validation.//
  if(passwordLength < 8){
    alert("password Lenght Must be atleast 8 characters long");
    return null; 
  }
  else if(passwordLength > 128){
    alert("Pass word legth can NOT be more than 128 characters")

    return null;
  }

  // codes for password characteristics prompt quesitons

  var passwordUpperCase = confirm("Would you like Upper Case Letters?");
  var passwordLowerCase = confirm("Would you like Lower Case Letters?");
  var passwordNumbers = confirm("Would you like to Numbers?");
  var passwordSpecialCharacter = confirm("Would you like to Special Characters?");
  console.log(passwordLength);
  var password = generatePassword(passwordLength,
    passwordUpperCase,
    passwordLowerCase,
    passwordNumbers,
    passwordSpecialCharacter); 
    var passwordText = document.querySelector("#password"); passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// fucntion for generating password based on allowed characters and types.//

function generatePassword(passwordLength,
  passwordUpperCase,
  passwordLowerCase,
  passwordNumbers,
  passwordSpecialCharacter) {
  var allowedCharacters = "";
  if (passwordUpperCase) {
    allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } if (passwordLowerCase) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
  } if (passwordNumbers) {

    allowedCharacters += "1234567890";
  } if (passwordSpecialCharacter) {
    allowedCharacters += "<>?:{}[';/.,^]!@#$%^&*()";
  } var passwordCharacters = allowedCharacters.split("");
  var finalPassword = ""; for (let x = 0; x < passwordLength; x++) {
   //return randome chracters.//
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    var randomCharacter = passwordCharacters[randomNumber];
    finalPassword += randomCharacter;
  }
  return finalPassword;
}