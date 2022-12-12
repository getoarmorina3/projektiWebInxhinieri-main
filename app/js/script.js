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
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if(email == ""){
        alert("Email nuk mund te jete i zbrazet")
    } else if (message == ""){
        alert("Mesazhi nuk mund te jete i zbrazet")
    }
}

    