let counter = 0;
function createNewElement() {
  let newElement = document.querySelector("h1");

  counter = counter + 1;
  newElement.textContent = counter;
  let titleElement = document.querySelector("header");
  titleElement.textContent = count;
}

function calculate() {
  var operand1 = parseInt(document.getElementById("operand1").value);
  var operand2 = parseInt(document.getElementById("operand2").value);
  var result = 0;
  switch (document.getElementById("operator").value) {
    case "plus":
      result = operand1 + operand2;
      break;
    case "minus":
      result = operand1 - operand2;
      break;
    case "devide":
      result = operand1 / operand2;
      break;
    case "multiply":
      result = operand1 * operand2;
      break;
    default:
      result = operand1 + operand2;
      break;
  }
  document.getElementById("result").textContent = result;
}
