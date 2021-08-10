

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

// SCROLL REVEAL

window.sr = ScrollReveal();


    sr.reveal('#main__nav', {

        duration:2000,
        origin:'bottom',
        distance: '-100px'

    });

    sr.reveal('.about__right__cards', {

        duration:2000,
        origin:'bottom',
        distance: '-100px'

    });

    sr.reveal('#about__left', {

        duration:2000,
        origin:'right',
        distance: '-100px'

    });home__left

    sr.reveal('#home__left', {

        duration:2000,
        origin:'right',
        distance: '-100px'

    })

    sr.reveal('#home__right', {

        duration:2000,
        origin:'left',
        distance: '-100px'

    });

    sr.reveal('#main__projects', {

        duration:2000,
        origin:'bottom',
        distance: '-100px'

    });

    sr.reveal('#main__contact', {

        duration:2500,
        origin:'right',
        distance: '-100px'

    });

    sr.reveal('#wsp-btn', {

        duration:2500,
        origin:'left',
        distance: '-100px'

    });