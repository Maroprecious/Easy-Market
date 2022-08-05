const drop = document.querySelector("#dropdown-menu");
const bar = document.querySelector("#bar");
let showDropDown = false;

bar.addEventListener('click', () => {
    if(showDropDown == false) {
        drop.style.display = "block";
        showDropDown = true;
    }else{
        drop.style.display = "none";
        showDropDown = false;

    }
});



