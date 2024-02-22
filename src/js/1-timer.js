
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

buttonDisable();

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
            });

            startButton.setAttribute('disabled', '');

        } else {
            startButton.removeAttribute('disabled');
        }

        userSelectedDate = selectedDates[0].getTime();
// console.log(userSelectedDate);
    }

        
    //   console.log(selectedDates[0]);
}
  



flatpickr("#datetime-picker", options);

function buttonDisable() {
    startButton.setAttribute('disabled', '');
}

function inputDisable() {
    calendar.setAttribute('disabled', '');
}

function setTimer({ days, hours, minutes, seconds }) {
    daysValue.innerHTML = days
    hoursValue.innerHTML = hours
    minutesValue.innerHTML = minutes
    secondsValue.innerHTML = seconds

}

function onCountdownTime() {
    buttonDisable();
    inputDisable();

    let countdownTime = userSelectedDate - Date.now();

    setTimer(convertMs(countdownTime));
    // console.log(countdownTime);
}



startButton.addEventListener('click', onCountdownTime);

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

