const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle =  document.getElementById("seconds");

// im using 0th month = january and 3rd month = april 
const birthday = new Date();
birthday.setMonth(3); 
birthday.setDate(14);
birthday.setHours(0, 0, 0, 0);

// code for if april 14 passes and this checks for next year
if (birthday < new Date()) {
    birthday.setFullYear(birthday.getFullYear() + 1);
}

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.querySelector(".timer").innerHTML = "<h2>Happy Birthday! 🌸🎉</h2>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEle.textContent = String(days).padStart(2, "0");
    hoursEle.textContent = String(hours).padStart(2, "0");
    minutesEle.textContent = String(minutes).padStart(2, "0");
    secondsEle.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
