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

 for (let i = 5; i>0; i--){
    console.log(play(window.prompt("enter 0 1 2")))
}



