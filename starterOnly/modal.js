function editNav() {
  const myTopNav = document.getElementById("myTopnav")
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive"
  } else {
    myTopNav.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const close = document.querySelector('.close')
// const firstLastName = document.querySelector('.textControlName')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

close.addEventListener('click', () => {
  modalbg.style.display = "none"
});

// Je déclare mes variables
const reservationForm = document.querySelector('.reservation-form')

const firstNameInput = document.querySelector('#first')
const firstNameErrorMessage = document.querySelector('.first-name-error-message')

const lastNameInput = document.querySelector('#last')
const lastNameErrorMessage = document.querySelector('.last-name-error-message')

const emailInput = document.querySelector('#email')
const emailInputErrorMessage = document.querySelector('.email-error-message')

const tournamentNumberInput = document.querySelector('#quantity')
const tournamentNumberErrorMessage = document.querySelector('.number-error-message')

const citiesLocation = document.querySelectorAll('.citiesLocation input')
const citiesLocationErrorMessage = document.querySelector('citiesLocation-error-message')


// Je déclre mes fonctions
function checkFirstName() {
  const isFirstNameValid = firstNameInput.value.length > 2

  if (isFirstNameValid) {
    firstNameErrorMessage.classList.add('hidden')
  } else {
    firstNameErrorMessage.classList.remove('hidden')
  }
  return isFirstNameValid
}


function checkLastName () {
  const isLastNameValid = lastNameInput.value.length > 2
  
  if (isLastNameValid) {
    lastNameErrorMessage.classList.add('hidden')
  } else {
    lastNameErrorMessage.classList.remove('hidden')
  }
  return isLastNameValid
}


function checkEmailInput() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = re.test(String(emailInput.value).toLowerCase())

  if (isEmailValid) {
    emailInputErrorMessage.classList.add('hidden')
  } else {
    emailInputErrorMessage.classList.remove('hidden')
  }
  return isEmailValid
}


function checkCityLocation() {
  let isCityLocationValid = false

  for (let i = 0; i < citiesLocation.length; i++) {
    if (citiesLocation[i].checked) {
      isCityLocationValid = true
      citiesLocationErrorMessage.classList.add('hidden')
    } else {
      citiesLocationErrorMessage.classList.remove('hidden')
    }
  }
  return isCityLocationValid
}


function checkNumberInput(){
  const isNumberValid = parseInt(tournamentNumberInput)
  
if(isNaN(isNumberValid)){
  isNumberValid = false
    tournamentNumberErrorMessage.classList.remove('hidden')
  } else {
    tournamentNumberErrorMessage.classList.add('hidden')
  }
  return isNumberValid
}


// J'écoute l'évenement submit pour valider mon formulaire
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (checkFirstName() && checkLastName() && checkEmailInput() && checkCityLocation() && checkNumberInput){
    console.log("Tout est ok")
  } else {
    console.log("Il y a un problème")
  }
})


