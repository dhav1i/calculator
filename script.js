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

let result;
let operator = "";
let firstInt = "";
let secondInt = "";

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function divide(a,b) {
    if(Number(b) === 0) {
        return "Cannot divide by 0" 
    } 
    return Number(a) / Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function operate(num1,op,num2) {
    if(op == "+") {
        result = add(num1,num2);
      return firstInt = result;
    } else if(op == "-") {
        result = subtract(num1,num2);
        return firstInt = result;
    } else if(op == "*") {
        result = multiply(num1,num2);
        return firstInt = result;
    } else if(op == "/") {
        result = divide(num1,num2)
        if(result === "Cannot divide by 0") {
            operationInput.placeholder = result;
            firstInt = ""
            return;
        }
        return firstInt = result;
    } 
}

digitBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(operator === "" && firstInt == result) {
            firstInt = ""
            firstInt += btn.textContent
            valueInput.value = firstInt
        }
        else if(operator !== "") {
            valueInput.value = ""
            secondInt += btn.textContent
            valueInput.value = secondInt
            operationInput.value = `${firstInt} ${operator}`
        } else if(operator == "") { 
            firstInt += btn.textContent
            valueInput.value = firstInt
        }
    })
});



plusBtn.addEventListener('click', () => {
    if(firstInt !== "") {
        operator = "+"
        operator == "+" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
        operationInput.value = `${firstInt} ${operator}`
        valueInput.value = ""
        secondInt = ""
        }
});

minusBtn.addEventListener('click', () => {
    if(firstInt !== "") {
    operator = "-"
    operator == "-" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    valueInput.value = ""
    secondInt = ""
}
});

mutliplyBtn.addEventListener('click', () => {
    if(firstInt !== "") {
    operator = "*"
    operator == "*" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    valueInput.value = ""
    secondInt = ""
    }
});

divideBtn.addEventListener('click', () => {
    if(firstInt !== "") {
    operator = "/"
    operator == "/" && !secondInt == "" ? operate(firstInt, operator, secondInt) : false;
    operationInput.value = `${firstInt} ${operator}`
    secondInt = ""
    valueInput.value = ""
     }
});

equalBtn.addEventListener('click', () => {
    if(firstInt !== "" && secondInt !== "") {
    operate(firstInt, operator, secondInt);
    operationInput.value = `${firstInt}`;
    valueInput.value = "";
    secondInt = "";
    operator = "";
    }
});

clearBtn.addEventListener('click', () => {
    operator = "";
    firstInt = "";
    secondInt = "";
    valueInput.value = ""
    operationInput.value = `0`
})


deleteBtn.addEventListener('click', () => {
    if(!operator){
        firstInt = firstInt.slice(0,[firstInt.length -1])
        valueInput.value = firstInt
    } else {
        secondInt = secondInt.slice(0,[secondInt.length -1])
        valueInput.value = secondInt
    }
})