function calculateGrade() {
  // Get the input value from the score input field
  let score = document.getElementById("scoreInput").value;
  
  // Convert the input value to an integer
  score = parseInt(score);
  
  // Variable to hold the grade
  let result = "";
  
  // Check if the score is within the valid range (0-100)
  if (score < 0 || score > 100) {
    result = 'Invalid score'; // Set result to "Invalid score" if score is out of range
  } else {
    // Calculate the grade based on the score
    if (score >= 80 && score <= 100) {
      result = 'Grade: A'; // Score 80-100: Grade A
    } else if (score >= 70 && score <= 79) {
      result = 'Grade: B'; // Score 70-79: Grade B
    } else if (score >= 60 && score <= 69) {
      result = 'Grade: C'; // Score 60-69: Grade C
    } else if (score >= 50 && score <= 59) {
      result = 'Grade: D'; // Score 50-59: Grade D
    } else if (score >= 0 && score <= 49) {
      result = 'Grade: Fail'; // Score 0-49: Grade Fail
    }
  }
  
  // Display the result in the #result paragraph
  document.getElementById("result").innerHTML = result;
}