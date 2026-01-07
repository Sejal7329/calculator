let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
    display.innerText += number;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
document.getElementById('equal').onclick = calculate;
document.getElementById('clear').onclick = clearDisplay;
document.getElementById('delete').onclick = deleteLast;
document.getElementById('divide').onclick = () => appendNumber('÷');
document.getElementById('multiply').onclick = () => appendNumber('×'); 
document.getElementById('decimal').onclick = () => appendNumber('.');
document.getElementById('nine').onclick = () => appendNumber('9');
document.getElementById('eight').onclick = () => appendNumber('8');
document.getElementById('seven').onclick = () => appendNumber('7');
document.getElementById('six').onclick = () => appendNumber('6');
document.getElementById('five').onclick = () => appendNumber('5');
document.getElementById('four').onclick = () => appendNumber('4');
document.getElementById('three').onclick = () => appendNumber('3');
document.getElementById('two').onclick = () => appendNumber('2');
document.getElementById('one').onclick = () => appendNumber('1');
document.getElementById('zero').onclick = () => appendNumber('0');
document.getElementById('add').onclick = () => appendNumber('+');
document.getElementById('substrac').onclick = () => appendNumber('-');


