// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================
// EXERCISE FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const exerciseCards = document.querySelectorAll(".exercise-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        exerciseCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// =========================
// BMI CALCULATOR
// =========================

const bmiBtn = document.getElementById("bmiBtn");

bmiBtn.addEventListener("click", () => {

    const height = parseFloat(
        document.getElementById("height").value
    );

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const result = document.getElementById("bmiResult");


    if (!height || !weight || height <= 0 || weight <= 0) {

        result.textContent = "Please enter valid height and weight.";

        return;
    }


    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let status;


    if (bmi < 18.5) {

        status = "Underweight";

    } else if (bmi < 25) {

        status = "Normal Weight";

    } else if (bmi < 30) {

        status = "Overweight";

    } else {

        status = "Obesity";

    }


    result.innerHTML = `
        Your BMI: <strong>${bmi.toFixed(1)}</strong>
        <br>
        Status: <strong>${status}</strong>
    `;

});


// =========================
// CALORIE CALCULATOR
// =========================

const calorieBtn = document.getElementById("calorieBtn");

calorieBtn.addEventListener("click", () => {

    const age = parseFloat(
        document.getElementById("age").value
    );

    const gender = document.getElementById("gender").value;

    const height = parseFloat(
        document.getElementById("calHeight").value
    );

    const weight = parseFloat(
        document.getElementById("calWeight").value
    );

    const activity = parseFloat(
        document.getElementById("activity").value
    );

    const result = document.getElementById("calorieResult");


    if (
        !age ||
        !height ||
        !weight ||
        age <= 0 ||
        height <= 0 ||
        weight <= 0
    ) {

        result.textContent = "Please fill in all fields correctly.";

        return;
    }


    let bmr;


    if (gender === "male") {

        bmr =
            10 * weight +
            6.25 * height -
            5 * age +
            5;

    } else {

        bmr =
            10 * weight +
            6.25 * height -
            5 * age -
            161;

    }


    const calories = bmr * activity;


    result.innerHTML = `
        Estimated Daily Calories:
        <strong>${Math.round(calories)} kcal</strong>
    `;

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "#ff5555";

        return;

    }


    formMessage.textContent =
        `Thanks ${name}! Your message has been received.`;

    formMessage.style.color = "#c8ff00";


    contactForm.reset();

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});