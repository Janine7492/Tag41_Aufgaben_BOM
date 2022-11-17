// ==============================
//         Variablen
// ==============================

const timeOutput = document.querySelector("#time");

// const timeInput = document.getElementById("minutes").value;
// console.log(timeInput);

const timeInputText = document.getElementById("minutes");

let currentCount; // = timeInput * 60;
let minutes;
let seconds;
let timerRunning = 0;
let timerRunningInterval;


// ==============================
//    Countdown-Funktion
// ==============================
let countdownInterval = () => {
    if (currentCount >= 0) {
        timeOutput.innerHTML = `${minutes} : ${seconds}`;

        currentCount -= 1;
        minutes = (currentCount - (currentCount % 60)) / 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds = (currentCount % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

    } else {
        clearInterval(timerRunningInterval);
        timerRunning = 0;
    }

};

// ==============================
//         Start-Funktion
// ==============================

function startMinCountdown() {

    const timeInput = document.getElementById("minutes").value;
    console.log(timeInput);

    if (timerRunning === 0) {
        currentCount = timeInput * 60;
    }

    minutes = (currentCount - (currentCount % 60)) / 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = (currentCount % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerRunningInterval = setInterval(countdownInterval, 1000);

    timerRunning = 1;

    console.log(currentCount);
    console.log(minutes);
    console.log(seconds);

}

// ==============================
//         Pause-Funktion
// ==============================

function pauseMinCountdown() {
    clearInterval(timerRunningInterval);
}

// ==============================
//     Fortsetzen-Funktion
// ==============================

function restartMinCountdown() {
    timerRunningInterval = setInterval(countdownInterval, 1000);
}

// ==============================
//     Zurücksetzen-Funktion
// ==============================

function resetMinCountdown() {
    clearInterval(timerRunningInterval);
    timeOutput.innerHTML = `00 : 00`;
    currentCount = 0;
    timerRunning = 0;
    timeInputText.value = "";
}