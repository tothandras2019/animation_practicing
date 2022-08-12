`use strict`;

console.log(`done`);

const root = document.getElementById(`root`);

const buttonAll = root.querySelectorAll(`.start`);

buttonAll.forEach((button) => {
  button.addEventListener("mousedown", function (event) {
    this.classList.add(`pressed`);
  });

  button.addEventListener("mouseup", function (event) {
    this.classList.remove(`pressed`);
  });
});
