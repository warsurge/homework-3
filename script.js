// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var character = ["!", "@", "#", "$", "%", "^", "&", "*"]

var chosenThings = [];
var length;




// Write password to the #password input
function writePassword() {
  do {
    var useLetters = confirm("Do you want to use letters in your password?")
    var useCapitals = confirm("Do you want to use capital letters?")
    var useNumbers = confirm("Do you want to use numbers in your password?")
    var useCharacters = confirm("Do you want to use charaters in your password?")

    if (useLetters == false && useCapitals == false && useNumbers == false && useCharacters == false) {
      alert("You can't do that! Try again!")

    }
  }
  while (useLetters == false && useCapitals == false && useNumbers == false && useCharacters == false)

  do {
    length = prompt("How long do you want your password to be? *Must be between 8-128*")
  }
  while (length < 8 || length > 128 || isNaN(length));



  if (useLetters == true) {

    chosenThings = chosenThings.concat(letters);
  } else (useLetters == false);

  if (useCapitals == true) {

    chosenThings = chosenThings.concat(upperCase);
  } else (useCapitals == false);

  if (useNumbers == true) {

    chosenThings = chosenThings.concat(numbers);
  } else (useNumbers == false);

  if (useCharacters == true) {

    chosenThings = chosenThings.concat(character);
  } else (useCharacters == false);



  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // alert ("generate password")
  var password = "";
  for (var index = 0; index < parseInt(length); index++) {

    var character = Math.floor(Math.random() * chosenThings.length);
    password += chosenThings[character];

  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






