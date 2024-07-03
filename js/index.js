const add      = (a, b) => { return a + b };
const subtract = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const divide   = (a, b) => { return a / b };


function calculator() {
    let firstNumber = parseInt(prompt("Enter first real number"));
    let secondNumber = parseInt(prompt("Enter second real number"));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Error: You have not selected valid numbers");
        return;
    }

    let result = null;
    let mathOperator = prompt("Choose operator +, -, *, /");

    switch (mathOperator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
        default:
            alert("Error: You have not selected valid operator");
            return;
    }

    if (result != null) {
        alert(`The result of ${firstNumber} ${mathOperator} ${secondNumber} is ${result}`);
        return;
    }
    alert("Something went wrong");
}

function welcomeMessage() {
    alert("Welcome to the calculator!");
}

function goodbyeMessage() {
    alert("Goodbye!");
}

welcomeMessage();
calculator();
goodbyeMessage();
