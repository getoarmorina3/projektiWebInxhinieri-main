const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ // Close Hamburger Menu
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });

    }
    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});

function validimiKontakt(){
    const emailValidator = () => {
        const email = document.getElementById("email");
        const emailIsValid = /^[^@]+@[^@.]+.[a-z]+$/i.test(email.value);
        emailIsValid? console.log("Email eshte mire") : console.log("Email eshte gabim");
        return emailIsValid
    }
    const message = document.getElementById("message").value;
    if(!emailValidator()){
        alert("Formati i email nuk eshte i sakte");
    }

    if(message === ""){
        alert("Mesazhi nuk mund te jete i zbrazet");
    }
}

// function validimiRegister(){
//     var email = document.getElementById('email').value;
//     var psw = document.getElementById('psw').value;
//     var pswRepeat = document.getElementById('psw-repeat').value;
//     if(email == ""){
//         alert("Email nuk mund te jete i zbrazet")
//     } else if (psw == ""){
//         alert("Password nuk mund te jete i zbrazet")
//     } else if (psw !== pswRepeat){
//         alert("Password duhet te perputhet")
//     }
// }

// function validimiLogin(){
//     var email = document.getElementById('email').value;
//     var psw = document.getElementById('psw').value;
//     if(email == ""){
//         alert("Email nuk mund te jete i zbrazet")
//     } else if (psw == ""){
//         alert("Password nuk mund te jete i zbrazet")
//     }
// }

    