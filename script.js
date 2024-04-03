let formEl = document.querySelector(".form");
let btnEl = document.querySelector(".btn");

let percentage = Math.floor(Math.random() * 100 + 1);

let textB = `<h2>${percentage}% Its better to Stay away!</h2>`;
let textG = `<h2>${percentage}% Its Ok not a bad relationship!</h2>`;
let textO = `<h2>${percentage}% Oh, You have a strong relationship!</h2>`;
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
