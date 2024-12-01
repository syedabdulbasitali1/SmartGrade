console.log("hello");
function calculatePercentage() {
    // Get values from input fields
    const obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
    const totalMarks = parseFloat(document.getElementById("totalMarks").value);
    const resultElement = document.getElementById("result");

    // Check if inputs are valid
    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks <= 0  || obtainedMarks > totalMarks) {
      resultElement.innerText = "Please enter valid marks!";
      return;
    }

    // Calculate percentage
    const percentage = (obtainedMarks / totalMarks) * 100;

    // Use switch case to display results
    switch (true) {
      case percentage >= 90:
        resultElement.innerText = `Excellent! Your percentage is ${percentage.toFixed(2)}%.`;
        break;
      case percentage >= 75:
        resultElement.innerText = `Very Good! Your percentage is ${percentage.toFixed(2)}%.`;
        break;
      case percentage >= 50:
        resultElement.innerText = `Good Job! Your percentage is ${percentage.toFixed(2)}%.`;
        break;
      case percentage >= 35:
        resultElement.innerText = `You Passed! Your percentage is ${percentage.toFixed(2)}%.`;
        break;
      default:
        resultElement.innerText = `You Failed. Your percentage is ${percentage.toFixed(2)}%.`;
        resultElement.style.color = `red`;
        resultElement.style.margin = `12px`;
    }
  }
