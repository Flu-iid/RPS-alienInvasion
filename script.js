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
result(movePoint(1, alienPlay()));

// Design
function createElement() {
  if (element.className === "show") {
    element.className = "hide";
  } else if (element.className === "hide") {
    element.className = "show";
  } else {
    console.error("classSelectionError");
  }
}

const paraList = [...document.querySelectorAll(`p.hide`)];
let time = setInterval(() => {
  const itemShow = paraList.shift();
  const itemHide =
  if (itemShow) {
    toggleElement(itemShow);
  } else {
    clearInterval(time);
  }
}, 1000);
