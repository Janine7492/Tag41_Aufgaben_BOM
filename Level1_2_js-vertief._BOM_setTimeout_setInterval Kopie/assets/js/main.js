let timerRunning = 0;

function countDownToZero() {

    let i = 100;
    let countdownInterval;

    if (timerRunning === 0) {
        let countDownTimer = () => {
            if (i > 0) {
                document.querySelector(".zeit").innerHTML = (i + "%");
                console.log(i);
                i -= 1;
                timerRunning = 1;
            } else if (i === 0) {
                document.querySelector(".zeit").innerHTML = (i + "%");
                console.log(i);
                clearInterval(countdownInterval);
                document.getElementById("errorMessage").innerHTML = " ";
                timerRunning = 0;
            }
        };

        countdownInterval = setInterval(function () {
            if (i >= 0) {
                countDownTimer();
            }
        }, 1000);
    } else {
        document.getElementById("errorMessage").innerHTML = "Countdown läuft bereits";
    }





}