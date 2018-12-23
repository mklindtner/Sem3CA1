

let pressEquals = document.getElementById('calculate');
let displayIcon = document.getElementById('display');
let divButtons = document.getElementById('buttons');
let totalValue;

divButtons.addEventListener('click', (event) => {
    let value = event.target.innerHTML;
    if (value === pressEquals.innerHTML) {
        event.stopPropagation();
    } else {
        displayIcon.innerHTML += value;
        totalValue = displayIcon.innerHTML;
    }
});

pressEquals.addEventListener('click', () => {
    displayIcon.innerHTML = numberForCalc(totalValue);
});


let numberForCalc = function numberToString(value) {
    return eval(value);
}





