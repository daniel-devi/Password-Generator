

// Get the elements from the DOM
const lengthInput = document.getElementById('plength');
const uppercaseCheckbox = document.getElementById('upper');
const lowercaseCheckbox = document.getElementById('lower');
const numbersCheckbox = document.getElementById('numb');
const symbolsCheckbox = document.getElementById('symbol');
const generateButton = document.getElementById('generate');
const passwordOutput = document.getElementById('password');

// Generate a random password
function generatePassword() {
  const length = parseInt(lengthInput.value);
  const uppercase = uppercaseCheckbox.checked;
  const lowercase = lowercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const symbols = symbolsCheckbox.checked;

  let characters = '';
  let password = '';

  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (numbers) {
    characters += '0123456789';
  }
  if (symbols) {
    characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}


// Clipboard Function

var clipboard = document.getElementById("i")
clipboard.addEventListener("click",()  =>{
    var copyText = generatePassword();
    navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
    });
});

// Generate and display the password when the button is clicked
generateButton.addEventListener('click', () => {
  const password = generatePassword()
  passwordOutput.textContent = password;
  return password;

});

console.log(generatePassword())