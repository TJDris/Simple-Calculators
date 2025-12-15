function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  let output;

  switch (operator) {
    case "+":
      output = num1 + num2;
      break;
    case "-":
      output = num1 - num2;
      break;
    case "*":
      output = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      output = num1 / num2;
      break;
  }

  result.textContent = `Result: ${output}`;
}
