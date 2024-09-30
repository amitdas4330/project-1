 // Toggle between Login and Signup forms
 function showSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

// Basic Form Validation
function validateLoginForm() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let emailError = document.getElementById("loginEmailError");
    let passwordError = document.getElementById("loginPasswordError");

    emailError.innerText = passwordError.innerText = "";

    if (!validateEmail(email)) {
        emailError.innerText = "Please enter a valid email.";
    }
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
    }
}

function validateSignupForm() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let nameError = document.getElementById("signupNameError");
    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");

    nameError.innerText = emailError.innerText = passwordError.innerText = "";

    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
    }
    if (!validateEmail(email)) {
        emailError.innerText = "Please enter a valid email.";
    }
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
    }
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}