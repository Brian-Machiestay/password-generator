// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  var selectedOptions = [];
  var container = document.getElementById('options-container')
  container.style.display = 'block';
  var ok = document.querySelector('input[name="opts"]')
  ok.addEventListener("click", function () {
    selectedOptions = [];
    var allInputs = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < allInputs.length; i++) {
       selectedOptions.push(allInputs[i].value);
    }
    console.log(selectedOptions);
    if (selectedOptions.length !== 0) { 
      container.style.display = 'none';
    }
    else {
      var errorP = document.createElement('p');
      errorP.setAttribute('class', 'error');
      errorP.innerHTML = "At least one character type should be selected";
      var passLenObj = document.querySelector('#passwd');
      if (document.querySelector(".error") == null) {
        document.querySelector("#options").style.height = '280px';
        passLenObj.append(errorP);
      }
    }
  });
  console.log(selectedOptions);
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);