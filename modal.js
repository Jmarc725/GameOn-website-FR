// ---------------------------------------------------- Variables


const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")

const close = document.querySelector('.close') 

const firstNameInput = document.querySelector('#first')
const firstNameErrorMessage = document.querySelector('.first-name-error-message')

const lastNameInput = document.querySelector('#last')
const lastNameErrorMessage = document.querySelector('.last-name-error-message')

const emailInput = document.querySelector('#email')
const emailInputErrorMessage = document.querySelector('.email-error-message')

const calendarInput = document.querySelector('#birthdate')
const calendarErrorMessage = document.querySelector('.error-message-birthdate')

const tournamentNumberInput = document.querySelector('#quantity')
const tournamentNumberErrorMessage = document.querySelector('.number-error-message')

const citiesLocation = document.querySelectorAll('.citiesLocation input')
const citiesLocationErrorMessage = document.querySelector('.citiesLocation-error-message')

const requiredCheckbox = document.querySelector('#checkbox1')
const requiredCheckboxErrorMessage = document.querySelector('.error-message-conditions')

const reservationForm = document.querySelector('.reservation-form')
const successMessage = document.querySelector('.success-message')
const closeButton = document.querySelector('.btn-close')


// ----------------------------------------------------- Fonctions


// Navigation responsive
function editNav() {
  const myTopNav = document.getElementById("myTopnav")
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive"
  } else {
    myTopNav.className = "topnav"
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block"   // J'affiche  le formulaire
  reservationForm.style.display = "block"   // Je réactive le formulaire après sa fermeture dès que je relance la modal
  successMessage.style.display = "none"   // Je masque le message de validation
}

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
  const isCalendarValid = calendarInput.value.length > 0

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
      citiesLocationErrorMessage.classList.add('hidden')
      return isCityLocationValid
    } else {
      citiesLocationErrorMessage.classList.remove('hidden')
    }
  }
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

// Reset form
function cleanForm() {
  firstNameInput.value = ""
  lastNameInput.value = ""
  emailInput.value = ""
  calendarInput.value = ""
  tournamentNumberInput.value = ""
  for (let i = 0; i < citiesLocation.length; i++) {
    citiesLocation[i].checked = false
  }
  requiredCheckbox.checked = false
}

// ---------------------------------------------- Event Listener


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))


// J'écoute l'événement click pour fermer la modal
close.addEventListener('click',function() {
  modalbg.style.display = "none"
})

// J'écoute l'évenement submit pour valider mon formulaire
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (checkFirstName() && checkLastName() && checkEmailInput() && checkCalendarInput()  
  && checkTournamentNumberInput() && checkCityLocation() && checkconditionsInput()){
    console.log("Tout est ok") // Je vérifie dans ma console
    reservationForm.style.display = "none"  // Je masque le formulaire
    successMessage.style.display = "flex"  // J'affiche le message de validation
      
    // reset
    cleanForm()
     
  } else {
    console.log("Il y a un problème") // Je vérifie dans ma console
  }
})

// J'écoute l'évenement click pour fermer la modal
closeButton.addEventListener('click', function() {
  modalbg.style.display = 'none'
})



