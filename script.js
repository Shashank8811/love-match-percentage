let formEl = document.querySelector(".form");
let btnEl = document.querySelector(".btn");

let percentage = Math.floor(Math.random() * 100 + 1);

let textB = `<h1>${percentage}% Its better to Stay away!</h1>`;
let textG = `<h1>${percentage}% Its Ok not a bad relationship!</h1>`;
let textO = `<h1>${percentage}% Oh, You have a strong relationship!</h1>`;
function getPercentage() {
  if (percentage <= 50) {
    formEl.innerHTML = textB;
  } else if (percentage > 51 && percentage <= 75) {
    formEl.innerHTML = textG;
  } else {
    formEl.innerHTML = textO;
  }
}

btnEl.addEventListener("click", getPercentage);
