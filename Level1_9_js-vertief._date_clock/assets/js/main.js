let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];



function startTime() {
    let date = new Date();

    document.getElementById("date").innerHTML = date.toLocaleDateString();
    document.getElementById("dayOfWeek").innerHTML = wochenTag[date.getDay()].slice(0, 3);
    document.getElementById("hours").innerHTML = date.getHours();
    document.getElementById("minutes").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
    document.getElementById("periodOfDay").innerHTML = date.toLocaleString("en-US").slice(-2);

    setInterval(startTime, 1000);
}


