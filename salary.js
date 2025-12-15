function calculateHourly() {
  const salary = parseFloat(document.getElementById("salary").value);
  const hours = parseFloat(document.getElementById("hours").value);
  const weeks = parseFloat(document.getElementById("weeks").value);
  const tax = parseFloat(document.getElementById("tax").value) / 100;
  const pto = parseFloat(document.getElementById("pto").value);

  const result = document.getElementById("result");

  if (!salary || !hours || !weeks) {
    result.textContent = "Please enter all required values.";
    return;
  }

  const afterTaxIncome = salary * (1 - tax);
  const workingWeeks = weeks - pto;
  const hourly = afterTaxIncome / (hours * workingWeeks);

  result.textContent = `Real Hourly Rate (after tax): $${hourly.toFixed(2)}`;
}
