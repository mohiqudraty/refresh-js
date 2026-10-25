(() => {
    const countButton = document.querySelector("#count-button");
    const countOutput = document.querySelector("#count-output");
    const nameInput = document.querySelector("#name-input");
    const nameFeedback = document.querySelector("#name-feedback");
    const greetingForm = document.querySelector("#greeting-form");
    const greetingOutput = document.querySelector("#greeting-output");

    if (
        !countButton ||
        !countOutput ||
        !nameInput ||
        !nameFeedback ||
        !greetingForm ||
        !greetingOutput
    ) {
        throw new Error("The event example requires all event demo elements in index.html.");
    }

    let clickCount = 0;

    countButton.addEventListener("click", () => {
        clickCount += 1;
        countOutput.textContent = `Button clicked ${clickCount} ${
            clickCount === 1 ? "time" : "times"
        }.`;
    });

    nameInput.addEventListener("input", () => {
        nameFeedback.textContent = `You have typed ${nameInput.value.length} characters.`;
    });

    greetingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        greetingOutput.textContent = `Hello, ${name || "there"}!`;
    });
})();
