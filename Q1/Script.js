// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

// Prompt the user to enter a number
let inputNumber = prompt("Enter a number:");

// Convert the user's input to an integer using parseInt()
inputNumber = parseInt(inputNumber);

// Check if the input number is a multiple of 5
if (inputNumber % 5 === 0) {
  // If the number is a multiple of 5, log a message to the console
  console.log(`${inputNumber} is a multiple of 5.`);
} else {
  // If the number is not a multiple of 5, log a different message to the console
  console.log(`${inputNumber} is not a multiple of 5.`);
}

