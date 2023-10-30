const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

let calculation = []
let accumulativeCalculation


function calculate(button){
    const value = button.textContent
    if(value == 'AC'){
        calculation = []
        display.textContent = '0'
    }else if(value === '=') {
        display.textContent = eval(accumulativeCalculation)
    }else {
        calculation.push(value)
        accumulativeCalculation = calculation.join(' ')
        display.textContent = calculation
    }
}

btns.forEach(button => button.addEventListener('click', () => calculate(button)))