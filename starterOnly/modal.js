function editNav() {
  const myTopNav = document.getElementById("myTopnav");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close');
// const firstLastName = document.querySelector('.textControlName');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

close.addEventListener('click', () => {
  modalbg.style.display = "none";
});


const reservationForm = document.querySelector('.reservation-form');

const firstNameInput = document.querySelector('#first');
const firstNameErrorMessage = document.querySelector('.first-name-error-message');

const lastNameInput = document.querySelector('#last');
const lastNameErrorMessage = document.querySelector('.last-name-error-message');

const emailInput = document.querySelector('#email');
const emailInputErrorMessage = document.querySelector('.email-error-message');

const tournamentNumberInput = document.querySelector('#quantity').value = "1";
const tournamentNumberInputErrorMessage = document.querySelector('.number-error-message');

const checkBoxChecked = document.querySelector('#location1').checked=true;

const checkboxCondition = document.querySelector('#checkbox1').checked=true;


function checkFirstName() {
  const isFirstNameValid = firstNameInput.value.length > 2

  if (isFirstNameValid) {
    firstNameErrorMessage.classList.add('hidden')
  } else {
    firstNameErrorMessage.classList.remove('hidden')
  }

  return isFirstNameValid
}


const checkLastName = () => {
  const isLastNameValid = lastNameInput.value.length > 2
  
  if (isLastNameValid) {
    lastNameErrorMessage.classList.add('hidden')
  } else {
    lastNameErrorMessage.classList.remove('hidden')
  }

  return isLastNameValid
}

function checkEmailInput(emailInput){
  const email = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (emailInput.value.match(email)){
    return true;
  } else {
    return false;
  }
}



reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (checkFirstName() && checkLastName() && checkEmailInput){
    // console.log("Tout est ok")
    return send
  } else {
    console.log("Il y a un problème")
  }

})


