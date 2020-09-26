particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const navContactLinks = document.getElementById("nav-contact-links");

window.addEventListener("scroll", (ev) => {
  if (window.scrollY > 5) {
    if (navContactLinks.classList.contains("transparent")) {
      navContactLinks.classList.remove("transparent");
    } else return;
  } else {
    if (!navContactLinks.classList.contains("transparent")) {
      navContactLinks.classList.add("transparent");
    } else return;
  }
});

const contactform = document.querySelector(".contact-form");

contactform.addEventListener("submit", (ev) => {
  contactform.reset();
});
