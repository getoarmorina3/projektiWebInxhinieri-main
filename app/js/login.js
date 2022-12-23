const emailRegex = /^[^@]+@[^@.]+.[a-z]+$/i;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/;;
const email = document.getElementById("email");
const password = document.getElementById("psw");

const emailValidator = () => {
    const emailIsValid = emailRegex.test(email.value);
    emailIsValid? console.log("Email eshte mire") : console.log("Email eshte gabim");
    return emailIsValid
}
const passwordValidator = () => {
    const passwordIsValid = passwordRegex.test(password.value);
    passwordIsValid ? console.log("Password eshte mire") : console.log("Password eshte gabim");
    return passwordIsValid
}

document.querySelector("form").addEventListener("submit", e => {
    if(!emailValidator()){
        e.preventDefault();
    }
    if(!passwordValidator()){
        e.preventDefault();
    }
})