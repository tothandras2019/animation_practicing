`use strict`;

const root = document.getElementById(`root`);

const target = root.querySelector(`.target`);
let buble = root.querySelector(`.buble`);

//lekérni a target vectort
let rec = target.getBoundingClientRect();
let { x, y, width, height } = rec;
let targetXY = [{ cx: x + width / 2 }, { cy: y + height / 2 }];

window.addEventListener(`load`, (event) => {
  //lekérni a mozgatandó vektorát
  let bublePos = buble.getBoundingClientRect();

  //meghatározni az irányvektorát
  let targetDirVectorX = targetXY[0].cx - bublePos.x - bublePos.width; // bublePos.width: a css-n a transform: translate(-50%, -50%) miatt kell elvenni belőle!
  let targetDirVectorY = targetXY[1].cy - bublePos.y - bublePos.height; // bublePos.height: a css-n a transform: translate(-50%, -50%) miatt kell elvenni belőle!

  //az irányvektort hozzáadni a mozgatandóhoz.
  buble.style.transform = `translate(${targetDirVectorX}px, ${targetDirVectorY}px)`;
});

buble.addEventListener(`transitionend`, (event) => {
  bublePos = buble.getBoundingClientRect();
  console.log(bublePos);
});
