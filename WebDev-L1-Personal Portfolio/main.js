
const typed = new Typed(".text", {

    strings: [
        "Frontend Developer",
        "Web Developer"
    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1000,

    loop: true

});



/* =========================================
   NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   MOBILE MENU
========================================= */

const menuIcon =
    document.getElementById("menu-icon");

const navbar =
    document.querySelector(".navbar");


menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-x");

});



/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");

    });

});