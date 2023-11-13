let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");
let resetBtn = document.querySelector(".btn-reset");
let input = document.querySelector('input')
console.log(input.value);

let counter = document.querySelector(".counter");

let totalSeconds = parseInt(input.value)
let intervalId;
let isTimer = false;
//3 4 11
function pad(num) {
    if (num < 10) {
        return "0" + num

    }
    else {
        return num;
    }
}



function updateCounter() {
    totalSeconds--;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let formatTiming = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);

    counter.textContent = formatTiming;
}


input.addEventListener('input', function () {
    totalSeconds = parseInt(input.value);
    counter.textContent = pad(Math.floor(totalSeconds / 3600)) + ":"
        + pad(Math.floor((totalSeconds % 3600) / 60)) + ":" +
        pad(Math.floor(totalSeconds % 60));
});


startBtn.addEventListener("click", function () {
    if (isTimer) {
        return;
    }

    intervalId = setInterval(updateCounter, 100);
    isTimer = true;
})
resetBtn.addEventListener("click", function () {
    totalSeconds = 0;
    counter.textContent = "00:00:00";
    clearInterval(intervalId);
    isTimer = false;
})

stopBtn.addEventListener("click", function () {

    clearInterval(intervalId);
    isTimer = false;
})




