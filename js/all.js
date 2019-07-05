//SIDEMENU
var toggleMenu = document.querySelector(".toggle-menu");
var sidenav = document.querySelector(".side-nav");
var close = document.querySelector(".close");
var main = document.querySelector("main");
//Modal
var loginModal = document.querySelector("#login-modal");
var closeLogin = document.querySelector("#close-login");
var openLogin = document.querySelector("#open-login");

//FUNCTION

toggleMenu.addEventListener("click", function() {
  main.classList.add("move-right");
  sidenav.classList.add("open");
});

close.addEventListener("click", function() {
  main.classList.remove("move-right");
  sidenav.classList.remove("open");
});

eventListener();
function eventListener() {
  closeLogin.addEventListener("click", closeModal);
  openLogin.addEventListener("click", openModal);
  window.addEventListener("click", outsideClickModal);
}

function openModal() {
  loginModal.style.display = "block";
}

function closeModal() {
  loginModal.style.display = "none";
}

function outsideClickModal(e) {
  if (e.target == loginModal) {
    loginModal.style.display = "";
  }
}
