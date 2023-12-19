// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password length
  
function getPassLength() {
  let passLenght = parseInt(prompt("Enter the lenght for the password (between 8 and 128 characters)"))
  if (passLenght < 8 || passLenght > 128) {
    alert ("Please enter a number between 8 and 128")
    getPassLength();
  }
  return passLenght;
}
getPassLength();

// Function to prompt user for password options

function getPasswordOptions() {
  let hasSpecialChar = confirm("OK if you'd like to include special characters?")
  let hasNumericChar = confirm("OK if you'd like to include Numeric characters?")
  let hasUpperCaseChar = confirm("OK if you'd like to include Uppercase characters?")
  let hasLowerCasedChar = confirm("OK if you'd like to include lowecase characters?")

  if (!hasSpecialChar && !hasNumericChar && !hasUpperCaseChar && !hasLowerCasedChar ) {
    alert ("Please select at least one character type")
    getPasswordOptions();
  }

  return {
    selectSpecialChar: hasSpecialChar,
    selectNumericChar: hasNumericChar,
    selectUpperCaseChar: hasUpperCaseChar, 
    selectLowerCasedChar: hasLowerCasedChar
  };
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);