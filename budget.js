function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value);
  const expenses = parseFloat(document.getElementById("expenses").value);
  const result = document.getElementById("result");

  if (!income || !expenses) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const savings = income - expenses;
  result.textContent =
    savings >= 0
      ? `You can save: $${savings.toFixed(2)} per month`
      : `You are overspending by: $${Math.abs(savings).toFixed(2)}`;
}
