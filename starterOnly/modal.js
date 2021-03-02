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

// 1. Je sélectionne mon noeud qui correspond au formulaire HTML
const reservationForm = document.querySelector('.reservation-form');
const firstNameInput = document.querySelector('#first');



// 2. J'écoute l'évevenement submit de mon formulaire
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log("=====")
  console.log(firstNameInput.value)
  console.log("=====")
})

