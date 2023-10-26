const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updateDisplay() {
    const display = document.querySelector('.calc-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const inputs = document.querySelector('.buttons');
inputs.addEventListener('click', (event) => {
    const { target } = event;
    if(!target.matches('button')) {
        return;
    }
    if(target.classList.contains('oppBtn')) {
        console.log('oppBtn', target.value);
        return;
    }

})