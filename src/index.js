// Getting Button elements start,stop,rest
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

// Getting the timer element hr,min,sec
var hrText = document.getElementById("hr");
var minText = document.getElementById("min");
var secText = document.getElementById("sec");

// Initializing the timer to ZERO
var hr = 0;
var min = 0;
var sec = 0;

var interval;

// When the start button is clicked
startBtn.addEventListener("click", function () {
  // Once the start button is clicked, we won't be able to click it again until the timer stops or resets
  startBtn.setAttribute("disabled", "");
  
  // Start timer, it will change the timer value after every one second
  interval = setInterval(function () {
    // If sec = 60, then min will be incresed by 1
    // If min = 60, then hr will be incresed by 1
    if (sec < 9) {
      sec += 1;
      secText.innerText = "0" + sec;
    } else if (sec < 59) {
      sec += 1;
      secText.innerText = sec;
    } else {
      sec = 0;
      secText.innerText = "0" + sec;
      if (min < 9) {
        min += 1;
        minText.innerText = "0" + min;
      } else if (min < 59) {
        min += 1;
        minText.innerText = min;
      } else {
        min = 0;
        minText.innerText = "0" + min;
        if (hr < 9) {
          hr += 1;
          hrText.innerText = "0" + hr;
        } else {
          hr += 1;
          hrText.innerText = hr;
        }
      }
    }
  }, 1000);
});

// When the stop button is clicked
stopBtn.addEventListener("click", function () {
  // Stop timer
  clearInterval(interval);
  // Make the start button clickable
  startBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", function () {
  // Stop timer
  clearInterval(interval);
  // Reinitialize the timer to ZERO
  hr = 0;
  min = 0;
  sec = 0;
  hrText.innerText = "00";
  minText.innerText = "00";
  secText.innerText = "00";
  // Make the start button clickable
  startBtn.removeAttribute("disabled");
});