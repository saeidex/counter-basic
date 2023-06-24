import "./tailwind.css";

let countDisplay = document.getElementById("count-display");
let btnReset = document.getElementById("btn-reset");
let btnIncrement = document.getElementById("btn-increment");

let count = 0;
function increment() {
  count++;
  countDisplay.innerText = count;
}
function reset() {
  count = 0;
  countDisplay.innerText = count;
}

btnIncrement.addEventListener("click", increment);
btnReset.addEventListener("click", reset);
