const btn = document.getElementById("themeBtn");

btn.onclick = function () {
    document.body.classList.toggle("light");
};

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Sahifa ochilganda birinchi bo'lim ko'rinsin
sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        section.classList.add("show");
    }
});
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});