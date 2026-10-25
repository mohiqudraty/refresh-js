(() => {
    const form = document.querySelector("#contact-form");
    const nameInput = document.querySelector("#contact-name");
    const emailInput = document.querySelector("#contact-email");
    const messageInput = document.querySelector("#contact-message");
    const feedback = document.querySelector("#form-feedback");

    if (!form || !nameInput || !emailInput || !messageInput || !feedback) {
        throw new Error("The form example requires all form demo elements in index.html.");
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        feedback.textContent = `Thanks, ${name}! Your message from ${email} has been received (${message.length} characters).`;
    });

    form.addEventListener("reset", () => {
        feedback.textContent = "";
    });
})();
