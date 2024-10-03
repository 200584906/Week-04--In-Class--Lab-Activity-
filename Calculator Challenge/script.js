/**
 * Calculates the result of a mathematical operation based on the given numbers and operator.
 * 
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @param {string} operator The mathematical operator (+, -, *, /).
 * @returns {number|string} The result of the calculation or an error message.
 */
function calculator(num1, num2, operator) {
    // Use a switch statement to determine the operation based on the operator
    switch (operator) {
        case '+':
            // If the operator is '+', return the sum of num1 and num2
            return num1 + num2;
        case '-':
            // If the operator is '-', return the difference of num1 and num2
            return num1 - num2;
        case '*':
            // If the operator is '*', return the product of num1 and num2
            return num1 * num2;
        case '/':
            // If the operator is '/', check if num2 is not zero to avoid division by zero
            if (num2 !== 0) {
                // If num2 is not zero, return the quotient of num1 and num2
                return num1 / num2;
            } else {
                // If num2 is zero, return an error message
                return 'Error: Division by zero is not allowed';
            }
        default:
            // If the operator is not one of the above, return an error message
            return 'Error: Invalid operator';
    }
}

/**
 * Performs a calculation based on user input and displays the result.
 */
function performCalculation() {
    // Get the values of the two numbers and the operator from the input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Call the calculator function with the input values and store the result
    const result = calculator(num1, num2, operator);

    // Display the result in the result field
    document.getElementById('result').textContent = result;
}