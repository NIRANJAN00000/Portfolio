const nav = document.querySelector('nav');

// Smooth scrolling
document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// navbar scroll effect 
window.addEventListener('scroll', () => {
  nav.classList.toggle(
    'window-scroll',
    window.scrollY > 0
  );
});