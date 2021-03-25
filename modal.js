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


const firstNameInput = document.querySelector('#first')
const firstNameErrorMessage = document.querySelector('.first-name-error-message')

const lastNameInput = document.querySelector('#last')
const lastNameErrorMessage = document.querySelector('.last-name-error-message')

const emailInput = document.querySelector('#email')
const emailInputErrorMessage = document.querySelector('.email-error-message')

const tournamentNumberInput = document.querySelector('#quantity')
const tournamentNumberErrorMessage = document.querySelector('.number-error-message')

const calendarInput = document.querySelector('#birthdate')
const calendarErrorMessage = document.querySelector('.error-message-birthdate')

const citiesLocation = document.querySelectorAll('.citiesLocation input')
const citiesLocationErrorMessage = document.querySelector('.citiesLocation-error-message')

const requiredCheckbox = document.querySelector('#checkbox1')
const requiredCheckboxErrorMessage = document.querySelector('.error-message-conditions')

const reservationForm = document.querySelector('.reservation-form')
const successForm = document.querySelector('.success-form')
const closeButton = document.querySelector('.btn-close')


// Je déclre mes fonctions

// Fonction validation prénom
function checkFirstName() {
  const isFirstNameValid = firstNameInput.value.length > 2

  if (isFirstNameValid) {
    firstNameErrorMessage.classList.add('hidden')
  } else {
    firstNameErrorMessage.classList.remove('hidden')
  }
  return isFirstNameValid
}

// Fonction validation nom
function checkLastName () {
  const isLastNameValid = lastNameInput.value.length > 2
  
  if (isLastNameValid) {
    lastNameErrorMessage.classList.add('hidden')
  } else {
    lastNameErrorMessage.classList.remove('hidden')
  }
  return isLastNameValid
}

// Fonction validation adresse email
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

// Fonction validation date de calendrier
function checkCalendarInput(){
  const isCalendarValid = calendarInput.value;

  if (isCalendarValid){
    calendarErrorMessage.classList.add('hidden')
  } else {
    calendarErrorMessage.classList.remove('hidden')
  }
  return isCalendarValid
}


// Fonction validation nombre de tournois
function checkTournamentNumberInput(){
  const isNumberValid = !isNaN(parseInt(tournamentNumberInput.value)) && tournamentNumberInput.value < 99

  if(isNumberValid) {
    tournamentNumberErrorMessage.classList.add('hidden')
  } else {
    tournamentNumberErrorMessage.classList.remove('hidden')
  }
  
  return isNumberValid
}

// Fonction radio input
function checkCityLocation() {
  let isCityLocationValid = false

  for (let i = 0; i < citiesLocation.length; i++) {
    if (citiesLocation[i].checked) {
      isCityLocationValid = true
      citiesLocationErrorMessage.classList.remove('hidden')
    } else {
      citiesLocationErrorMessage.classList.add('hidden')
    }
  }
  return isCityLocationValid
}

// Fonction conditions de vente 
function checkconditionsInput(){
  let isConditionsValid = false
 
  if(requiredCheckbox.checked){
    isConditionsValid = true
    requiredCheckboxErrorMessage.classList.add('hidden')
  } else {
    requiredCheckboxErrorMessage.classList.remove('hidden')
}
return isConditionsValid
}


// J'écoute l'évenement submit pour valider mon formulaire
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (checkFirstName() && checkLastName() && checkEmailInput() && checkCityLocation() && checkTournamentNumberInput() && checkconditionsInput() && checkCalendarInput()){
    console.log("Tout est ok")
    reservationForm.style.display = "none"
    successForm.style.display = "flex"


  } else {
    console.log("Il y a un problème")
  }

})

closeButton.addEventListener('click', () => {

modalbg.style.display = 'none'
  
})


