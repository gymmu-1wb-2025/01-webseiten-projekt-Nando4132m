/* Counter auf der Startseite im header, mit button: onclick*/
let counter = 0;
function createNewElement() {
  let newElement = document.querySelector("h1");

  counter = counter + 1;
  newElement.textContent = counter;
  let titleElement = document.querySelector("header");
  titleElement.textContent = count;
}

/* Taschenrechner mit der Hilfe vom Javascript gemacht. Benutztung von zweit leisten(operand 1 und operand 2). Dann parseFloat, damit man mit dezimalzahlen rechnen kann. Unten dann auswälen zwischen *,+,- und /. Dann definition, wie man resultat berechnet.*/
function calculate() {
  var operand1 = parseFloat(document.getElementById("operand1").value);
  var operand2 = parseFloat(document.getElementById("operand2").value);
  var result = 0;
  switch (document.getElementById("operator").value) {
    case "plus":
      result = operand1 + operand2;
      break;
    case "minus":
      result = operand1 - operand2;
      break;
    case "divide":
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
