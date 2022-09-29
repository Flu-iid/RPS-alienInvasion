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
timeFlag = false;
function fadeElement() {
  const elementShow = document.querySelector(".show");
  const elementHide = document.querySelector(".hide");
  if (elementShow) {
    elementShow.className = "hide"
    elementHide.className = "show"
  } else {
    elementHide.className = "show"
  }
}

function fadeTimer(count ,timeout) {
  for (let i=count; i>0; i--) {
    let myTime = setInterval(fadeElement(myTime), timeout)
  }
}

fadeTimer(5, 2000)