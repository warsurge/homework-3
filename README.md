# homework-3
# 03 JavaScript: Password Generator
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

# User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

# What I Did
* First thing I did was to start out making an array for all the values needed for the program.
* I then started putting if/else statements for the answer to the prompts introduced to the users.
* I made the prompts confirms for the choices, with the length being an user input box to determine the length.
* I then made the for loop for the generate password function. It should incorparte the length necessary for the password.
* I was running into issues of getting all the arrays to combine so I had to make a new global array to concat to.
* To solve the issue of the length being accepted regardless of the paramaters, I had to use a do/while loop to force the user answer correctly.
* I also had to add another so the non numbers were not clearing the prompts.
* The whole program should be responsive to the user letting them chose from all of the different choices and generate a password 8-128 characaters.