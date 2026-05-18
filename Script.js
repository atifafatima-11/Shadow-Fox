document.addEventListener("DOMContentLoaded", () => {

    // FORM SUBMIT
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("input").value;

        alert(`Thank you ${name}! Your message has been sent successfully.`);

        form.reset();
    });

    // DARK MODE (Press D)
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "d") {
            document.body.classList.toggle("dark-mode");
        }
    });

    // TYPING EFFECT
    const heading = document.getElementById("heading");

    const text = "ATIFA FATIMA";

    let i = 0;

    heading.textContent = "";

    function typing() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 150);
        }
    }

    typing();
});
