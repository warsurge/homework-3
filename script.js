// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var character = ["!","@","#","$","%","^","&","*"]



var useLetters= confirm("Do you want to use letters in your password?")
var useCapitals= confirm("Do you want to use capital letters?")
var useNumbers = confirm("Do you want to use numbers in your password?")
var useCharacters= confirm("Do you want to use charaters in your password?")
prompt("How long do you want your password to be? *Must be between 8-128*")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (useLetters == true && useCapitals==true && useNumbers==true&& useCharacters==true){
    // code using all.
  }
  else if (useLetters == true && useCapitals== true && useNumbers ==true){
    // code using only letters numbers and capital letters
  }
  else if (useLetters == true && useCapitals== true){
    // code using only lower case and capital letters
  }
  else if (useLetters== true){
    // only using lower case letters
  }
  else if(useCapitals==true){
    // code using only capital letters
  }
  else if(useNumbers==true){
    // code using only numbers
  }
  else if(useCharacters== true){
    // code using only characters
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page