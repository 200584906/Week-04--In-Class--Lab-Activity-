// Define a function called fizzBuzz
function fizzBuzz() {
    // Create an empty array to hold the results
    const results = []; 

    // Loop through numbers 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Initialize an empty string to hold the result for the current number
        let result = '';

        // If the current number is divisible by 3, add 'Fizz' to the result
        if (i % 3 === 0) result += 'Fizz';

        // If the current number is divisible by 5, add 'Buzz' to the result
        if (i % 5 === 0) result += 'Buzz';

        // Push the result to the results array, or the number itself if the result is empty
        results.push(result || i); 
    }

    // Get the HTML element with the id 'output' and set its innerHTML to the results joined with line breaks
    document.getElementById('output').innerHTML = results.join('<br>'); 
}

// Call the fizzBuzz function
fizzBuzz();