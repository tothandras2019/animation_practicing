`use strict`;

const form = document.querySelector(`form`);
const inputNameListener = form.querySelector(`#name-input`);
const inputAgeListener = form.querySelector(`#age-input`);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputName = event.target.querySelector(`#name-input`);
  const inputAge = event.target.querySelector(`#age-input`);
  console.log(event.target);
  console.log(inputName.value, inputAge.value);
});

inputNameListener.addEventListener(`mouseenter`, (event) => {
  event.target.closest(`.name--span`).classList.add(`moveUp`);
  // console.log(event.target);
});

inputAgeListener.addEventListener(`mouseenter`, (event) => {
  event.target.closest(`.age--span`).classList.add(`moveUp`);
  // console.log(event.target);
});

inputNameListener.addEventListener(`mouseleave`, (event) => {
  console.log(inputNameListener.value);
  if (inputNameListener.value === ``) {
    event.target.closest(`.name--span`).classList.remove(`moveUp`);
  }
});

inputAgeListener.addEventListener(`mouseleave`, (event) => {
  if (inputAgeListener.value === ``) {
    event.target.closest(`.age--span`).classList.remove(`moveUp`);
  }
});
