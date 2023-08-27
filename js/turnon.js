const navbarNav = document.querySelectorAll(".nav-link");
const pathname = window.location.pathname;
const url = pathname.slice(-10)
navbarNav.forEach(nav => {
    let link = nav.href;
    if(link.slice(-10) == url ) {
        nav.classList.add("turn-on")
    }
})