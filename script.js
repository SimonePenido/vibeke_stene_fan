/* ======================================================
AWWWARDS STYLE EFFECTS — VIBEKE STENE LANDING PAGE
====================================================== */

/* =========================
CURSOR GLOW PERSONALIZADO
========================= */

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

const cursorFollower = document.createElement("div");
cursorFollower.classList.add("cursor-follower");
document.body.appendChild(cursorFollower);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
    }, 80);

});


/* =========================
REVEAL ELEMENTS ON SCROLL
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about img, .about-text, .content, .gallery img, .quote"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add("active-reveal");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();





/* =========================
SMOOTH SCROLL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
GALLERY HOVER 3D EFFECT
========================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {

    img.addEventListener("mousemove", (e) => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        img.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    });

});


/* =========================
FLOATING PARTICLES
========================= */

const particleContainer = document.createElement("div");
particleContainer.classList.add("particles");
document.body.appendChild(particleContainer);

for (let i = 0; i < 40; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (Math.random() * 10 + 10) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.width =
        particle.style.height =
        (Math.random() * 4 + 2) + "px";

    particleContainer.appendChild(particle);

}


/* =========================
AUDIO REACTIVE FEELING
(visual pulse fake)
========================= */

setInterval(() => {

    document.body.classList.toggle("pulse");

}, 3000);


/* =========================
CINEMATIC FADE-IN HERO
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ======================================================
   LIGHTBOX GALERIA
====================================================== */

const gallery = document.querySelectorAll(".gallery img");

// Cria o overlay
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span class="close-lightbox">&times;</span>
    <img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");


/* ======================================================
   GALERIA AMPLIADA
====================================================== */

// Abrir imagem
gallery.forEach(img => {

    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {

        if (window.innerWidth <= 768) return;

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});

// Fechar clicando no fundo
lightbox.addEventListener("click", (e) => {

    if (
        e.target === lightbox ||
        e.target.classList.contains("close-lightbox")
    ) {

        lightbox.classList.remove("active");
        document.body.style.overflow = "";

    }

});

// Fechar com ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");
        document.body.style.overflow = "";

    }

});