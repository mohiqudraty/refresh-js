(() => {
    const description = document.querySelector("#description");

    if (!description) {
        throw new Error('The DOM example requires an element with id="description".');
    }

    const originalText = description.textContent ?? "";
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Change description";
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
        const isUpdated = button.getAttribute("aria-pressed") === "true";

        description.textContent = isUpdated
            ? originalText
            : "The description was updated with JavaScript.";
        button.setAttribute("aria-pressed", String(!isUpdated));
    });

    document.body.append(button);
})();
