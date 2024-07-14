const generatePasswordButton = document.getElementById('generate-password');
const passwordOutput = document.getElementById('password-output');
const passwordLengthInput = document.getElementById('password-length');
const includeUppercaseInput = document.getElementById('include-uppercase');
const includeNumbersInput = document.getElementById('include-numbers');
const includeSymbolsInput = document.getElementById('include-symbols');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

generatePasswordButton.addEventListener('click', () => {
    const length = +passwordLengthInput.value;
    const includeUppercase = includeUppercaseInput.checked;
    const includeNumbers = includeNumbersInput.checked;
    const includeSymbols = includeSymbolsInput.checked;

    passwordOutput.value = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
});

function generatePassword(length, uppercase, numbers, symbols) {
    let password = '';
    let charset = lowercaseLetters;

    if (uppercase) {
        charset += uppercaseLetters;
    }
    if (numbers) {
        charset += numbers;
    }
    if (symbols) {
        charset += symbols;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
