const form = document.querySelector("form");
form.noValidate = true;

const fnerror = document.querySelector("#fnerror");
const fn = document.querySelector("#firstname");

function showFNError() {
    if (!fn.checkValidity()) {
        fnerror.innerHTML = "Invalid first name";
    } else {
        fnerror.innerHTML = "";
    }
}

fn.addEventListener("focusout", showFNError);

const lnerror = document.querySelector("#lnerror");
const ln = document.querySelector("#lastname");

function showLNError() {
    if (!ln.checkValidity()) {
        lnerror.innerHTML = "Invalid last name";
    } else {
        lnerror.innerHTML = "";
    }
}

ln.addEventListener("focusout", showLNError);

const emailerror = document.querySelector("#emailerror");
const email = document.querySelector("#email");

function showEmailError() {
    if (!email.checkValidity()) {
        emailerror.innerHTML = "Invalid email";
    } else {
        emailerror.innerHTML = "";
    }
}

email.addEventListener("focusout", showEmailError);

const numbererror = document.querySelector("#numbererror");
const number = document.querySelector("#number");

function showNumberError() {
    if (!number.checkValidity()) {
        numbererror.innerHTML = "Your phone number must be in 123-456-7890 format";
    } else {
        numbererror.innerHTML = "";
    }
}

number.addEventListener("focusout", showNumberError);

const passworderror = document.querySelector("#pwerror");
const password = document.querySelector("#password");

function showPWError() {
    if (!password.checkValidity()) {
        passworderror.innerHTML = "Your password must include an uppercase, a lowercase, a number or special character and minimum 8 characters";
    } else {
        fnerror.innerHTML = "";
    }
}

password.addEventListener("focusout", () => {
    showPWError();
});

const repwerror = document.querySelector("#repwerror");
const repassword = document.querySelector("#repassword");

function showREPWError() {
    if (password.value != repassword.value) {
        repwerror.innerHTML = "Passwords do not match";
    } else {
        repwerror.innerHTML = "";
    }
}

repassword.addEventListener("focusout", showREPWError);

const signupbtn = document.querySelector("button");
const errors = document.querySelectorAll(".error");

signupbtn.addEventListener("click", (e) => {
    showAllErrors();
    errors.forEach(err => {
        if (err.innerHTML != "") {
            e.preventDefault();
        };
    });
});

fn.addEventListener("keypress", (e) => {
    if (e.key.toLowerCase() == e.key.toUpperCase()) {
        e.preventDefault();
    }
});

number.addEventListener("keypress", (e) => {
    if (!(e.key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])) {
        if (e.key != "-") {
            e.preventDefault();
        }
    }
});

function showAllErrors() {
    showEmailError();
    showFNError();
    showLNError();
    showNumberError();
    showPWError();
    showREPWError();
}