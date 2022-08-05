let accountMenu = document.querySelector(".navbar");
let accountSection = document.querySelector(".account-section");
let ham = document.querySelector(".ham");

ham.addEventListener('click', () =>{
    accountMenu.classList.toggle("showdown");
    accountSection.classList.toggle("shown");
});