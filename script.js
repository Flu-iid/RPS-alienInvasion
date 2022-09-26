console.log("lets start");

function play(championMove) {
  const computerMove = Math.floor(Math.random() * 3);
  const moves = ["rock", "paper", "scissor"];
  console.log(`Alien did : ${moves[computerMove]}`);
  switch (championMove) {
    case moves[0]:
      switch (computerMove) {
        case 0:
          return 0;
        case 1:
          return -1;
        case 2:
          return +1;
      }
      break;
    case moves[1]:
      switch (computerMove) {
        case 0:
          return +1;
        case 1:
          return 0;
        case 2:
          return -1;
      }
      break;
    case moves[2]:
      switch (computerMove) {
        case 0:
          return -1;
        case 1:
          return +1;
        case 2:
          return 0;
      }
      break;
    default:
      break;
  }
}

function play2(championMove) {
  const computerMove = Math.floor(Math.random() * 3);
  const moves = [[0, -1, +1], [+1, 0, -1], [-1, +1, 0]];
  const moveNames = ["rock", "paper", "scissor"];
  console.log(`Alien did : ${moveNames[computerMove]}`);
}

for (let i = 5; i > 0; i--) {
  play2(1)
}
