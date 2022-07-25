`use strict`;

const dotCircle = document.querySelector(`.dot__circle`);
const dotInner = dotCircle.querySelector(`.dot__inner`);

dotCircle.addEventListener(`mousemove`, OnMouseMove.bind(dotCircle));
dotCircle.addEventListener(`mouseleave`, OnMouseLeave);

function OnMouseMove(event) {
  let actualWidth = window.getComputedStyle(this).width.slice(0, -2);
  let actualHeight = window.getComputedStyle(this).height.slice(0, -2);

  let moveToX = event.clientX * 0.2;
  let moveToY = event.clientY * 0.2;

  dotInner.style.setProperty(`--top-width`, `${moveToX}%`);
  dotInner.style.setProperty(`--top-height`, `${moveToY}%`);

  console.log(`X: `, event.clientX / actualWidth);
  console.log(`Y`, event.clientY / actualHeight);
}

function OnMouseLeave(event) {
  dotInner.style.setProperty(`--top-width`, `50%`);
  dotInner.style.setProperty(`--top-height`, `50%`);
}
