const clearBtn = document.querySelector('#clear-all');
const deleteBtn = document.querySelector('#delete');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const mutliplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');
const valueInput = document.querySelector('#input');
const operationInput = document.querySelector('#operation');
const digitBtns = document.querySelectorAll('.digit')
const dotBtn = document.querySelector('.dot-operator')

let sum = 0;
let operator = "";
let firstInt = "";
let secondInt = "";

function add(num1,num2) {
    sum = Number(num1) + Number(num2);
    return sum
}

function subtract(num1,num2) {
    sum = Number(num1) - Number(num2);
    return sum
}

function divide(num1,num2) {
    sum = Number(num1) / Number(num2);
    return sum
}

function multiply(num1,num2) {
    sum = Number(num1) * Number(num2);
    return sum
}

function operate(num1,op,num2) {
    if(op == "+") {
      return firstInt = add(num1,num2)
    } else if(op == "-") {
        return firstInt = subtract(num1,num2)
    } else if(op == "*") {
        return firstInt = multiply(num1,num2)
    } else if(op == "/") {
        return firstInt = divide(num1,num2)
    } 
}

digitBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(operator === "" && firstInt == sum) {
            firstInt = ""
            firstInt += btn.textContent
            valueInput.value = firstInt
        }
        else if(operator !== "") {
            valueInput.value = ""
            secondInt += btn.textContent
            valueInput.value = secondInt
            operationInput.value = `${firstInt} ${operator}`
            console.log(secondInt)
        } else if(operator == "") { 
            firstInt += btn.textContent
            valueInput.value = firstInt
        }
    })
});



plusBtn.addEventListener('click', () => {
    if(!firstInt == "") {
        operator = "+"
        operator == "+" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
        operationInput.value = `${firstInt} ${operator}`
        valueInput.value = ""
        secondInt = ""
        }
});

minusBtn.addEventListener('click', () => {
    if(!firstInt == "") {
    operator = "-"
    operator == "-" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    valueInput.value = ""
    secondInt = ""
}
});

mutliplyBtn.addEventListener('click', () => {
    if(!firstInt == "") {
    operator = "*"
    operator == "*" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    valueInput.value = ""
    secondInt = ""
    }
});

divideBtn.addEventListener('click', () => {
    if(!firstInt == "") {
    operator = "/"
    operator == "/" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    secondInt = ""
    valueInput.value = ""
     }
});

equalBtn.addEventListener('click', () => {
    if(!firstInt == "" && !secondInt == "") {
    operate(firstInt, operator, secondInt);
    operationInput.value = `${sum}`;
    valueInput.value = "";
    secondInt = "";
    operator = "";
    }
});

clearBtn.addEventListener('click', () => {
    operator = "";
    firstInt = "";
    secondInt = "";
    sum = 0;
    valueInput.value = ""
    operationInput.value = `0`
})


let num = 1.5 % 1
console.log(num)