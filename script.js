/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});



/* =========================================================
   PROFILE BUTTON
========================================================= */

const profileButton = document.querySelector(".profile-btn");

profileButton.addEventListener("click", () => {

    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });

});



/* =========================================================
   HIRE ME BUTTONS
========================================================= */

const hireButtons = document.querySelectorAll(
    ".hire-btn, .hero-btn"
);

hireButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


document.getElementById("examples-button")?.addEventListener("click", () => {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth"
  });
});