const btn = document.getElementById("btn");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

function isMobileView() {
    return window.innerWidth <= 850;
}

function initializeMobileMenu() {
    if (isMobileView()) {
        navList.style.display = "none"; 
        btn.style.display = "block"; 
    } else {
        navList.style.display = "flex"; 
        btn.style.display = "none";
        navList.classList.remove("show");
    }
}

function toggleMenu() {
    if (navList.style.display === "none" || !navList.classList.contains("show")) {
        navList.style.display = "flex";
        setTimeout(() => {
            navList.classList.add("show");
        }, 10);
    } else {
        navList.classList.remove("show");
        setTimeout(() => {
            if (!navList.classList.contains("show")) {
                navList.style.display = "none";
            }
        }, 300); 
    }
}


btn.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (isMobileView()) {
            toggleMenu();
        }
    });
});

window.addEventListener("resize", initializeMobileMenu);

document.addEventListener("click", (e) => {
    if (isMobileView() && 
        !navList.contains(e.target) && 
        !btn.contains(e.target) && 
        navList.classList.contains("show")) {
        toggleMenu();
    }
});

document.addEventListener("DOMContentLoaded", initializeMobileMenu);