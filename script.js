const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById("viewInfo").addEventListener("click", () => {
    document.getElementById("info").scrollIntoView({
        behavior: "smooth"
    });
});





const bar = document.querySelector(".bar");
const x = document.querySelector(".x");
const overlay = document.querySelector(".overlay");

bar.addEventListener("click", () => {
    header.classList.toggle("open");
    overlay.classList.toggle("show");
});

x.addEventListener("click", () => {
    header.classList.remove("open");
    overlay.classList.remove("show");
});