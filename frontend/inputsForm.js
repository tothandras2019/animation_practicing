`use strict`;

console.log(`done here`);

const form = document.querySelector(`form`);
const inputNameListener = form.querySelector(`#name-input`);
const inputAgeListener = form.querySelector(`#age-input`);

const nameSpan = form.querySelector(`.name--span`);
const ageSpan = form.querySelector(`.age--span`);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputName = event.target.querySelector(`#name-input`);
  const inputAge = event.target.querySelector(`#age-input`);
  console.log(inputName.value, inputAge.value);
  inputName.value = "";
  inputAge.value = "";
});

let isFocusName = true;
let isFocusAge = true;

inputNameListener.addEventListener(`mouseenter`, (event) => {
  nameSpan.classList.add(`moveUp`);
});
inputNameListener.addEventListener(`blur`, (event) => {
  if (inputNameListener.value === `` && inputAgeListener.value === ``) {
    nameSpan.classList.remove(`moveUp`);
  }
});

inputAgeListener.addEventListener(`mouseenter`, (event) => {
  ageSpan.classList.add(`moveUp`);
});

inputAgeListener.addEventListener(`blur`, (event) => {
  if (inputNameListener.value === `` && inputAgeListener.value === ``) {
    ageSpan.classList.remove(`moveUp`);
  }
});
