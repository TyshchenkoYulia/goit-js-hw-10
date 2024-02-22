
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
                id: null, 
            
                titleSize: '',
                titleLineHeight: '',
                message: 'Please choose a date in the future',
                messageColor: 'white',
                theme: 'light', // dark
                color: 'red', // blue, red, green, yellow
                icon: '',
                iconText: 'Error',
                iconColor: '',
                iconUrl: null,
                image: '',
                imageWidth: 50,
                maxWidth: null,
                zindex: null,
                layout: 1,
                balloon: false,
                close: true,
                closeOnEscape: false,
                closeOnClick: false,
                displayMode: 0, // once, replace
                position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                target: '',
                targetFirst: true,
                timeout: 5000,
                rtl: false,
                animateInside: true,
                drag: true,
                pauseOnHover: true,
                resetOnHover: false,
                progressBar: true,
                progressBarColor: '',
                progressBarEasing: 'linear',
                overlay: false,
                overlayClose: false,
                overlayColor: 'rgba(0, 0, 0, 0.6)',
                transitionIn: 'fadeInUp',
                transitionOut: 'fadeOut',
                transitionInMobile: 'fadeInUp',
                transitionOutMobile: 'fadeOutDown',
                buttons: {},
                inputs: {},
                onOpening: function () {},
                onOpened: function () {},
                onClosing: function () {},
                onClosed: function () {}
            });
        } 


      console.log(selectedDates[0]);
    },
  };

const calendarFlatpickr = flatpickr("#datetime-picker", options);
















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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  
//   ===========================================================

startButton.addEventListener('click', event => {

})