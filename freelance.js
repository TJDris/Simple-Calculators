function calculateFreelanceRate() {
  const income = parseFloat(document.getElementById("income").value);
  const hours = parseFloat(document.getElementById("hours").value);
  const weeks = parseFloat(document.getElementById("weeks").value);
  const result = document.getElementById("result");

  if (!income || !hours || !weeks) {
    result.textContent = "Please enter all values.";
    return;
  }

  const hourlyRate = income / (hours * weeks);
  result.textContent = `You should charge: $${hourlyRate.toFixed(2)} / hour`;
}
