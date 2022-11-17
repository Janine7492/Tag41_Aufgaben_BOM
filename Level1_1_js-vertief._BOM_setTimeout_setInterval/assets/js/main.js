// ===============================================================
//         Erste Teilaufgabe
// ===============================================================

function textAfter3Sec() {
    setTimeout(textOutput, 3000);
    console.log("Start Warten für 3 Sekunden...");
}

function textOutput() {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet!");
}

textAfter3Sec();

// ===============================================================
//         Zweite Teilaufgabe
// ===============================================================
// function myTimer() {
//     const date = new Date();
//     console.log(date.toLocaleTimeString("de-DE"));
// }

// const timerId = setInterval(myTimer, 1000);

// myTimer();

// ===============================================================
//         Dritte Teilaufgabe
// ===============================================================

function countDownToFeierabend() {
    let i = 10;
    let countDownTimer = () => {
        if (i > 0) {
            console.log(i);
            i -= 1;
        } else if (i === 0) {
            console.log("Endlich Feierabend!");
            clearInterval(countdownInterval);
        }
    };

    const countdownInterval = setInterval(function () {
        if (i >= 0) {
            countDownTimer();
        }
    }, 1000);


}

countDownToFeierabend();