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
const firstNameErrorMessage = document.querySelector('.first-name-error-message')

const lastNameInput = document.querySelector('#last');
const lastNameErrorMessage = document.querySelector('.last-name-error-message')


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


reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (checkFirstName() && checkLastName()) {
    console.log("Tout est ok")
  } else {
    console.log("Il y a un problème")
  }

})


