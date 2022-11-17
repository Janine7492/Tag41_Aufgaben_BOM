let i = 10;
let countdownInterval;
let hide = () => {
    document.querySelector(".message").style.opacity = 0;

    if (document.querySelector(".message").style.opacity === 0) {
        document.querySelector(".message").style.display = "none";
    }
}

function countdown() {
    if (i > 0) {
        document.getElementById("count").innerHTML = i;
        console.log("before: " + i);
        i -= 1;
        console.log("after: " + i);
    } else if (i === 0) {
        document.getElementById("count").innerHTML = i;
        console.log("done: " + i);
        clearInterval(countdownInterval);

        setTimeout(hide, 1000);
    }
}

countdownInterval = setInterval(function () {
    if (i >= 0) {
        countdown();
    }
}, 1000);