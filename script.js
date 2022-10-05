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

//function Design

function addElement(parentQueryPara, childElementPara, classPara, content) {
  const parent = document.querySelector(parentQueryPara);
  const child = document.createElement(childElementPara);
  parent.appendChild(child);
  child.classList.add(classPara);
  child.textContent = content;
}

function addNode(parentNode, childNode, idPara, classPara) {
  const parent = document.querySelector(parentNode);
  const child = document.createElement(childNode);
  parent.appendChild(child);
  child.id = idPara;
  child.classList.add(classPara);
}

// // Timer
let counter = 0;
function createTimerElement(content) {
  addElement("#preview", "p", "message", content);
  counter++;
  return counter;
}

function timeNamer(i, content, time) {
  window[`time` + i] = setTimeout(() => {
    createTimerElement(content);
  }, time);
}
//

function initialMessagePreview(timeInterval) {
  addNode("main", "section", "preview", "preview");
  let totalTime = 0;
  const contentList = [
    "Hurry",
    "7-leg-Aliens have invaded, and they left us with a challenge!",
    "A game they call it ... which is apparently Rock-Paper-Scissors and they play it till point 7.",
    "Our planet fates is in your hands champion!",
    "Do what you must...",
  ];
  contentList.forEach((item, index, array) => {
    timeNamer(counter, item, totalTime);
    totalTime += timeInterval;
  });
}

function initialGame() {
  addNode("main", "section", "game", "game");
  ["rock", "paper", "scissor"].forEach((item) => {
    addElement("section#game", "button", `${item}-selector`, item);
    addElement(`button.${item}-selector`, "img", "`${item}-img", item);
  });
}

function winPreview() {
  addNode("main", "section", "winPreview", "winPreview");
  addElement(
    "#winPreview",
    "p",
    ".win",
    "You have succeeded champion! We have won back our planet!!!"
  );
}

function loosePreview() {
  addNode("main", "section", "loosePreview", "loosePreview");
  addElement(
    "#loosePreview",
    "p",
    ".loose",
    "we've lost champion. We must not loose hope and find another way"
  );
}

// Function Run

initialGame();
