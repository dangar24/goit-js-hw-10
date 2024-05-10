import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button");
startBtn.disabled = true;
let userSelectedDate = null;
let stopTime = null;
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0]
    stopTime = userSelectedDate.getTime();
    const nowDate = Date.now();
    if (stopTime <= nowDate) { 
        startBtn.disabled = true;
        iziToast.show({
              message: "❌ Please choose a date in the future",
              position: "topRight",
              backgroundColor: "#fa0000",
              progressBar: false,
              transitionIn: "fadeIn",
              close: false,
            });
      } else {
      startBtn.disabled = false;
      };
    },
};

const dateInp = document.querySelector('#datetime-picker');
const fp = flatpickr(dateInp, options);

const timer = {
  start() {
    startBtn.disabled = true;
    dateInp.disabled = true;
    const intervalId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = userSelectedDate.getTime() - startTime;
      if (deltaTime > 1000) {
        const calculater = convertMs(deltaTime);
        days.innerHTML = calculater.days;
        hours.innerHTML = calculater.hours;
        minutes.innerHTML = calculater.minutes;
        seconds.innerHTML = calculater.seconds;
      } else {
        clearInterval(intervalId);
        days.innerHTML = "00";
        hours.innerHTML = "00"
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        dateInp.disabled = false;
        return;
      };
    }, 1000);
  },

};

startBtn.addEventListener("click", timer.start);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
};

function pad(value) {
  return String(value).padStart(2, '0');
};