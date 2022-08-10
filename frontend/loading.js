`use strict`;

LoadingProgressBar();
function LoadingProgressBar() {
  const circle = document.querySelector(`.circle`);
  let text = document.querySelector(`.text`);

  let dashOffset = circle.attributes[8];
  let dashArray = circle.attributes[7];

  let maxValue = parseInt(dashArray.value);

  let val = 0;
  startLoadin();

  function startLoadin() {
    let id = setInterval(() => {
      if (val >= maxValue) clearInterval(id);
      LoadingProgress(val);
      val++;
    }, 10);
  }

  function LoadingProgress(val) {
    dashOffset.value = val.toString();

    let percent = Math.floor((val / maxValue) * 100);
    text.textContent = `${percent}%`;
  }
}
