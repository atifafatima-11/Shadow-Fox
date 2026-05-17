document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. FORM SUBMISSION ALERT
    // =========================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector("input[type='text']").value;

            alert("Thank you " + name + "! Your message has been received.");

            form.reset();
        });
    }

    // =========================
    // 2. DARK MODE (auto key press)
    // press "D" to toggle
    // =========================
    document.addEventListener("keydown", function (e) {
        if (e.key.toLowerCase() === "d") {
            document.body.classList.toggle("dark-mode");
        }
    });

    // =========================
    // 3. TYPING EFFECT
    // =========================
    const heading = document.getElementById("heading");

    if (heading) {
        const text = "RESUME";
        let index = 0;
        heading.textContent = "";

        function typeEffect() {
            if (index < text.length) {
                heading.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }

        typeEffect();
    }

    // =========================
    // 4. SKILL HOVER EFFECT
    // =========================
    const skills = document.querySelectorAll("li ul");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.color = "crimson";
            skill.style.transform = "scale(1.05)";
        });

        skill.addEventListener("mouseout", () => {
            skill.style.color = "black";
            skill.style.transform = "scale(1)";
        });
    });

});
