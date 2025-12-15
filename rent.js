function splitRent() {
  const rent = parseFloat(document.getElementById("rent").value);
  const people = parseInt(document.getElementById("people").value);
  const result = document.getElementById("result");

  if (!rent || !people || people <= 0) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const perPerson = rent / people;
  result.textContent = `Each person pays: $${perPerson.toFixed(2)} per month`;
}
