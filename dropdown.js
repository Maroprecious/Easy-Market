let navDrop = document.querySelector(".nav-drop");
let titleDrop = document.querySelector(".title-drop");
let first = document.querySelector(".first");
let news = document.querySelector("#news");

titleDrop.addEventListener('click', () =>{
    navDrop.classList.toggle("show");
    first.classList.toggle("rotate");

});


