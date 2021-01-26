const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPass = document.querySelector('#confirmPassword')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

// Checking Inputs

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    // Username Check

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if (usernameValue.length < 6) {
        setErrorFor(username, 'Username must be longer than 6 characters');
    } else if (usernameValue.length > 20) {
        setErrorFor(username, 'Username must be shorter than 20 characters');
    } else {
        setSuccess(username);
    }

    // Email Check

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!emailFormat(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccess(email);
    }

    // Password Check

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be longer than 6 characters');
    } else {
        setSuccess(password);
    }

    // Confirm Password Check

    if (confirmPassValue === '') {
        setErrorFor(confirmPass, 'Password cannot be blank');
    } else if (passwordValue !== confirmPassValue){
        setErrorFor(confirmPass, 'Password does not match');
    } else {
        setSuccess(confirmPass);
    }
}

// Email Format Characters

function emailFormat(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Check Inputs Functions - Success & Error

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}