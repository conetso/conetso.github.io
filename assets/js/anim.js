

// MENU MOVIL

var nav_btn = document.getElementById("nav__button");
var nav_menu = document.getElementById("nav__items");

var nav_menu_styles = window.getComputedStyle(nav_menu);

nav_btn.addEventListener("click", (e)=>{
    if (nav_menu_styles.getPropertyValue("display") == "none"){
        nav_menu.style = "display: flex";
        console.log("done");
    } else {
        nav_menu.style = "display: none";
    }
});


// CERAR NAVBAR AL CLICK

var nav_btn_styles = window.getComputedStyle(nav_btn);

nav_menu.addEventListener("click", (e)=>{
    if (nav_btn_styles.getPropertyValue("display") != "none"){
        nav_menu.style = "display:none";
    } else {
        
    }
});

// SESGADO ADECUADO

var sesg = document.getElementById("sesg");
var about = document.getElementById("main__about");
sesg.style = "top: calc(" + about.offsetTop +"px - " + sesg.offsetHeight + "px)";
window.onresize = (e)=>{
    sesg.style = "top: calc(" + about.offsetTop +"px - " + sesg.offsetHeight + "px)";
    if (nav_menu_styles.getPropertyValue("display") == "flex" || nav_menu_styles.getPropertyValue("display") == "none"){
        nav_menu.removeAttribute("style");
    }
}


// CAMBIO DE NAVBAR

var navbar = document.getElementById("main__nav");
var section = document.getElementsByClassName("main__container");

window.onscroll = (e) => {

    if (window.pageYOffset > section[3].offsetTop-navbar.offsetHeight-1){
        navbar.style = "background: #fff; color: var(--main-color);";
    }
    else if (window.pageYOffset > section[2].offsetTop-navbar.offsetHeight-1){
        navbar.style = "background: var(--main-color); color: #fff;";
    }
    else if (window.pageYOffset > section[1].offsetTop-navbar.offsetHeight-1){
        navbar.style = "background: #fff; color: var(--main-color);";
    }
    else {
        navbar.style = "background: var(--main-color); color: #fff;";
    }

}

