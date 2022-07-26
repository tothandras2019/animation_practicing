`use strict`;

const dotCircle = document.querySelector(`.dot__circle`);
const dotInner = dotCircle.querySelector(`.dot__inner`);

dotCircle.addEventListener(`mouseenter`, OnMouseMove.bind(dotInner));
dotCircle.addEventListener(`mousemove`, OnMouseMove.bind(dotInner));
dotCircle.addEventListener(`mouseleave`, OnMouseLeave);

function OnMouseMove(event) {
  console.log(event);
  let moveToX = event.offsetX;
  let moveToY = event.offsetY;

  dotInner.style.setProperty(`top`, `${moveToY}%`);
  dotInner.style.setProperty(`left`, `${moveToX}%`);
  dotInner.style.setProperty(
    `transform`,
    `translate(-${moveToX}%, -${moveToY}%)`,
  );
}

function OnMouseLeave(event) {
  dotInner.style.setProperty(`top`, `50%`);
  dotInner.style.setProperty(`left`, `50%`);
  dotInner.style.setProperty(`transform`, `translate(-50%, -50%)`);
}
