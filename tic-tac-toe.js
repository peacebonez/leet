const tictactoe = (moves) => {
  if (moves.length < 5) return "Pending";
  const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let playerAMoves = [];
  let playerBMoves = [];

  //Separate moves into player A moves and player B moves
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];

    if (i % 2 === 0) {
      playerAMoves.push(x.toString() + y.toString());
    } else playerBMoves.push(x.toString() + y.toString());
  }

  let playerAString = sortReducer(playerAMoves);
  console.log("playerAString:", playerAString);
  let playerBString = sortReducer(playerBMoves);

  for (let str of winners) {
    if (str === playerAString) return "A";
    if (str === playerBString) return "B";
  }

  return moves.length === 9 ? "Draw" : "Pending";
};

//Helper function to sort moves and reduce them into a string
const sortReducer = (arr) => {
  return arr.sort((a, b) => a - b).reduce((acc, cur) => acc + cur);
};

//B
console.log(
  tictactoe([
    [1, 2],
    [2, 1],
    [1, 0],
    [0, 0],
    [0, 1],
    [2, 0],
    [1, 1],
  ])
);

//A
// console.log(
//   tictactoe([
//     [0, 0],
//     [2, 0],
//     [1, 1],
//     [2, 1],
//     [2, 2],
//   ])
// );

//B
// console.log(
//   tictactoe([
//     [0, 0],
//     [1, 1],
//     [0, 1],
//     [0, 2],
//     [1, 0],
//     [2, 0],
//   ])
// );

//Draw
// console.log(
//   tictactoe([
//     [0, 0],
//     [1, 1],
//     [2, 0],
//     [1, 0],
//     [1, 2],
//     [2, 1],
//     [0, 1],
//     [0, 2],
//     [2, 2],
//   ])
// );
