function editNav() {
  var myTopNav = document.getElementById("myTopnav");
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

// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

close.addEventListener('click', () => {
  modalbg.style.display = "none";
});


