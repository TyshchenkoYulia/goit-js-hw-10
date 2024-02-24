
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// ==================================================================

const formElements = document.querySelector('.form');

// ====================================================================
formElements.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const delayValue = formElements.elements.delay.value;
    const radioValue = formElements.elements.state.value;


    const makePromise = (time, value) => {
        
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (value === 'fulfilled') {
                    res(time)
                } else {
                    rej(time)
                }
            }, delayValue);

            formElements.reset();
        })
    };

    makePromise(delayValue, radioValue)
            .then(value => {
                iziToast.show({
                    title: 'Ok',
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: `✅ Fulfilled promise in ${delayValue}ms`,
                    messageColor: '#fff',
                    messageSize: '16px',
                    position: 'topRight',
                    backgroundColor: '#59A10D',
                    close: false,
                })
            })   
            .catch (error => {
                iziToast.show({
                    title: 'Error',
                    titleColor: '#fff',
                    titleSize: '16px',
                    message: `❌ Rejected promise in ${delayValue}ms`,
                    messageColor: '#fff',
                    messageSize: '16px',
                   position: 'topRight',
                    backgroundColor: '#ef4040',
                    close: false,
                })
            });
    
}


