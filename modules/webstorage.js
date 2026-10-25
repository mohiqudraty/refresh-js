(() => {
    const colorSelect = document.querySelector("#favorite-color");
    const saveButton = document.querySelector("#storage-save");
    const loadButton = document.querySelector("#storage-load");
    const clearButton = document.querySelector("#storage-clear");
    const status = document.querySelector("#storage-status");

    if (!colorSelect || !saveButton || !loadButton || !clearButton || !status) {
        throw new Error("The web storage example requires all storage controls in index.html.");
    }

    const storageKey = "refresh-js.favorite-color";

    const showStorageError = (error) => {
        const detail = error instanceof Error ? ` ${error.message}` : "";
        status.textContent = `Browser storage is unavailable.${detail}`;
    };

    saveButton.addEventListener("click", () => {
        try {
            localStorage.setItem(storageKey, colorSelect.value);
            status.textContent = `Saved favorite color: ${colorSelect.value}.`;
        } catch (error) {
            showStorageError(error);
        }
    });

    loadButton.addEventListener("click", () => {
        try {
            const savedColor = localStorage.getItem(storageKey);

            if (savedColor === null) {
                status.textContent = "No saved color preference.";
                return;
            }

            const isKnownColor = Array.from(colorSelect.options).some(
                (option) => option.value === savedColor
            );

            if (!isKnownColor) {
                status.textContent = "The saved color is not one of the available options.";
                return;
            }

            colorSelect.value = savedColor;
            status.textContent = `Loaded favorite color: ${savedColor}.`;
        } catch (error) {
            showStorageError(error);
        }
    });

    clearButton.addEventListener("click", () => {
        try {
            localStorage.removeItem(storageKey);
            status.textContent = "Removed the saved color preference.";
        } catch (error) {
            showStorageError(error);
        }
    });
})();
