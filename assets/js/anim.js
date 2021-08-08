
var nav = document.getElementById("navbar");
var nav_height = nav.offsetHeight;
var containers = document.getElementsByClassName("container");
window.addEventListener("scroll", (e)=>{
    if (window.pageYOffset == 0){
        nav.removeAttribute("class");
        nav.classList.add("nav-transparent");
    }
    else if (window.pageYOffset > containers[3].offsetTop-nav_height-1){
        nav.removeAttribute("class");
        nav.classList.add("nav-light");
    }    
    else if (window.pageYOffset > containers[2].offsetTop-nav_height-1){
        nav.removeAttribute("class");
        nav.classList.add("nav-dark");
    }
    else if (window.pageYOffset > containers[1].offsetTop-nav_height-1){
        nav.removeAttribute("class");
        nav.classList.add("nav-light");
    }
    else if (window.pageYOffset > containers[0].offsetTop-nav.offsetHeight && window.pageYOffset > 0){
        nav.removeAttribute("class");
        nav.classList.add("nav-dark");
    }

    if (nav_menu.style.display == "block" ){
        nav.removeAttribute("class");
        nav.classList.add("nav-dark");
    }
})


var nav_btn = document.getElementById("navbar-button");
var nav_menu = document.getElementById("navbar-items");

var compStyles = window.getComputedStyle(nav_menu);

nav_btn.addEventListener("click", (e)=>{

    if (compStyles.getPropertyValue("display") == "none" ){
        nav_menu.style = "display: block";
        nav.removeAttribute("class");
        nav.classList.add("nav-dark");
    }
    else{
        nav_menu.style = "display: none";
    }
})