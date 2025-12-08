let counter = 0;
function createNewElement() {
  let newElement = document.querySelector("h1");

  counter = counter + 1;
  newElement.textContent = "Element" + counter;
  let titleElement = document.querySelector("header");
  titleElement.textContent = count;
}
