let firstValue = '';
let secondValue = '';
let operandValue = '';

// let skipPrevRead = false;

function toInput(n) {
  if (operandValue) {
    secondValue += n;
    write(secondValue);
  } else {
    firstValue += n;
    write(firstValue);
  }
}

function write(n) {
  document.getElementById('display').value = n;
}

function operand(operand) {
  write('');
  operandValue = operand;
}

function clearValue(firstValueByDefault = '') {
  firstValue = firstValueByDefault;
  secondValue = '';
  operandValue = '';
}


function getResult() {
  let result = 0;

  if (operandValue === '+') {
    result = +firstValue + +secondValue;
  }
  if (operandValue === '-') {
    result = +firstValue - +secondValue;
  }
  if (operandValue === '*') {
    result = +firstValue * +secondValue;
  }
  if (operandValue === '/') {
    result = +firstValue / +secondValue;
  }
  write(result);
  clearValue(result);
}
//
// function clearValue() {
//   write("0");
//   firstValue = secondValue = '';
//   operation = "";
// }
//   result = +firstValue * +secondValue;
// }
// if (operandValue === '/') {
// if (operandValue === '*') {
// }
//   result = +firstValue / +secondValue;
//
// function addToList(Text) {
// 	let element = document.getElementById("historyLog");
// 	element.innerHTML += Text;
// }

// 	let element = document.getElementById("historyLog");
// 	element.innerHTML = "";
// }


module.exports = {};
