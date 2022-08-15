`use strict`;
console.log(`done`);

const counter = document.querySelector(`.counter`);
const mim = counter.querySelector(`.min`);
const sec = counter.querySelector(`.sec`);
const milSec = counter.querySelector(`.mil-sec`);
const btnReset = document.querySelector(`.btn-reset`);

let minutes = 2;
let secundum = 59;
let milliSec = 1000;
let milSID = null;

StartCounters();
function StartCounters() {
  let valMin = minutes;
  let valM = milliSec;
  let valS = secundum;

  milSID = setInterval(() => {
    milSec.textContent = valM;
    valM--;
    if (valM <= 0) {
      valM = milliSec;
      sec.textContent = valS;
      valS--;

      if (valS <= 0) {
        minutes.textContent = valMin;
        valMin--;
        if (valMin <= 0) clearInterval(milSID);
      }
    }
  }, 1);
}

btnReset.addEventListener(`click`, reset);

function reset(event) {
  if (!this.classList.contains("reset")) {
    StartCounters();
    this.classList.add("reset");
    this.textContent = "reset";
    return;
  }

  if (!milSID) return;
  clearInterval(milSID);

  minutes.textContent = minutes;
  sec.textContent = 59;
  milSec.textContent = 1000;

  this.textContent = "start";
  this.classList.remove("reset");
}
