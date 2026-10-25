(() => {
    const durationInput = document.querySelector("#timer-duration");
    const display = document.querySelector("#timer-display");
    const startButton = document.querySelector("#timer-start");
    const pauseButton = document.querySelector("#timer-pause");
    const resetButton = document.querySelector("#timer-reset");
    const status = document.querySelector("#timer-status");

    if (
        !durationInput ||
        !display ||
        !startButton ||
        !pauseButton ||
        !resetButton ||
        !status
    ) {
        throw new Error("The timer example requires all timer controls in index.html.");
    }

    let remainingMilliseconds = Number(durationInput.value) * 1000;
    let deadline = 0;
    let intervalId = null;

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.ceil(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const updateDisplay = () => {
        display.textContent = formatTime(remainingMilliseconds);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
        startButton.disabled = false;
        pauseButton.disabled = true;
    };

    const tick = () => {
        remainingMilliseconds = Math.max(0, deadline - Date.now());
        updateDisplay();

        if (remainingMilliseconds === 0) {
            stopTimer();
            status.textContent = "Time is up!";
        }
    };

    startButton.addEventListener("click", () => {
        if (intervalId !== null) {
            return;
        }

        if (remainingMilliseconds <= 0) {
            const duration = Number(durationInput.value);

            if (!Number.isInteger(duration) || duration < 1 || duration > 3600) {
                status.textContent = "Enter a whole number from 1 to 3600 seconds.";
                return;
            }

            remainingMilliseconds = duration * 1000;
        }

        deadline = Date.now() + remainingMilliseconds;
        intervalId = setInterval(tick, 200);
        startButton.disabled = true;
        pauseButton.disabled = false;
        status.textContent = "Timer running.";
    });

    pauseButton.addEventListener("click", () => {
        if (intervalId === null) {
            return;
        }

        remainingMilliseconds = Math.max(0, deadline - Date.now());
        stopTimer();
        updateDisplay();
        status.textContent = "Timer paused.";
    });

    resetButton.addEventListener("click", () => {
        stopTimer();
        const duration = Number(durationInput.value);

        if (!Number.isInteger(duration) || duration < 1 || duration > 3600) {
            remainingMilliseconds = 0;
            display.textContent = "--:--";
            status.textContent = "Enter a whole number from 1 to 3600 seconds.";
            return;
        }

        remainingMilliseconds = duration * 1000;
        updateDisplay();
        status.textContent = "Ready.";
    });

    durationInput.addEventListener("input", () => {
        if (intervalId !== null) {
            return;
        }

        const duration = Number(durationInput.value);

        if (!Number.isInteger(duration) || duration < 1 || duration > 3600) {
            remainingMilliseconds = 0;
            display.textContent = "--:--";
            status.textContent = "Enter a whole number from 1 to 3600 seconds.";
            return;
        }

        remainingMilliseconds = duration * 1000;
        updateDisplay();
        status.textContent = "Ready.";
    });

    updateDisplay();
})();
