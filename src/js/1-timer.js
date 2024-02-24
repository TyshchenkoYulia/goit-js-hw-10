
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import errorIcon from "../img/error-icon.svg";

// ================================================================

const calendar = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

// =============================================================

let userSelectedDate;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            iziToast.show({
                title: 'Error',
                titleColor: '#fff',
                titleSize: '16px',
                message: 'Please choose a date in the future',
                messageColor: '#fff',
                messageSize: '16px',
                iconUrl: errorIcon,
                position: 'topRight',
                backgroundColor: '#ef4040',
                close: false,
            });

            startButton.setAttribute('disabled', '');

        } else {
            startButton.removeAttribute('disabled');
        }

        userSelectedDate = selectedDates[0].getTime();
    }
}

flatpickr("#datetime-picker", options);

// ===============================================================

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   ===========================================================

buttonDisable();

function buttonDisable() {
    startButton.setAttribute('disabled', '');
}

function inputDisable() {
    calendar.setAttribute('disabled', '');
}

function updateTime(value) {
    if (value < 10) {
        return String(value).padStart(2, '0');
    } else {
      return value;
    }
}

function addTimerValue() {
    const countdownTime = userSelectedDate - Date.now();

    if (countdownTime <= 0) {
            return
    } else {            
        buttonDisable();
        inputDisable(); 
    }

    const { days, hours, minutes, seconds } = convertMs(countdownTime);

    daysValue.textContent = updateTime(days);
    hoursValue.textContent = updateTime(hours);
    minutesValue.textContent = updateTime(minutes);
    secondsValue.textContent = updateTime(seconds);
}

startButton.addEventListener('click', onCountdownTime);

function onCountdownTime() {
    addTimerValue();

    setInterval(addTimerValue, 1000);
}



