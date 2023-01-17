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
  var container = document.getElementById('options-container');
  container.style.display = 'block';
  var ok = document.querySelector('input[name="opts"]');
  var passLenObj = document.querySelector('#passwd');
  ok.addEventListener("click", function () {
    selectedOptions = [];
    var allInputs = document.querySelectorAll("input[type='checkbox']:checked");
    var errorP = document.createElement('p');
    errorP.setAttribute('class', 'error');
    errorP.innerHTML = "At least one character type should be selected";
    for (let i = 0; i < allInputs.length; i++) {
       selectedOptions.push(allInputs[i].value);
    }
    if (selectedOptions.length !== 0) {
      var len = document.querySelector('input[name="pass"]').value;
      console.log(len);
      
      if (len !== 'between 10 and 64' && (parseInt(len) < 10 || parseInt(len) > 64)) {
        errorP.innerHTML = "length should between 10 and 64";
        passLenObj.append(errorP)
      }
      else {
        selectedOptions.push(len);
        container.style.display = 'none';
      }
    }
    else {
      if (document.querySelector(".error") == null) {
        document.querySelector("#options").style.height = '280px';
        passLenObj.append(errorP);
      }
    }
    return(selectedOptions);
  });
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  for (let i in options) {

  }

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