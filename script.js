// Core Game

function alienPlay() {
  const computerMove = Math.floor(Math.random() * 3);
  console.log(`Alien did : ${moveName(computerMove)}`);
  return computerMove;
}

function championPlay(championMove) {}

function moveName(move) {
  const moveNames = ["rock", "paper", "scissor"];
  return moveNames[move];
}

function movePoint(move1, move2) {
  const moves = [
    [0, -1, +1],
    [+1, 0, -1],
    [-1, +1, 0],
  ];
  if (move1 > -1 && move1 < 3) {
    console.log(move1, move2);
    return moves[move1][move2];
  } else {
    console.log("bad input");
  }
}

function result(point) {
  switch (point) {
    case -1:
      console.log("lost");
      break;
    case 0:
      console.log("draw");
      break;
    case +1:
      console.log("win");
      break;

    default:
      break;
  }
}

// Design
let counter = 0;
function createElement(content) {
  const parent = document.querySelector(`.preview`);
  const child = document.createElement("p");
  parent.appendChild(child);
  child.classList.add("message");
  child.textContent = content;
  counter++;
  return counter;
}

function timeNamer(i, content, time) {
  window[`time` + i] = setTimeout(() => {
    createElement(content);
  }, time);
}
//function Run
const contentList = [
  "Hurry",
  "7-leg-Aliens have invaded, and they left us with a challenge!",
  "A game they call it ... which is apparently Rock-Paper-Scissors and they play it till point 7.",
  "Our planet fates is in your hands champion!",
  "Do what you must...",
];

function messagePreview(list, timeInterval) {
  let totalTime = 0;
  list.forEach((item, index, array) => {
    timeNamer(counter, item, totalTime);
    totalTime += timeInterval;
  });
}

messagePreview(contentList, 1000);
result(movePoint(1, alienPlay()));
