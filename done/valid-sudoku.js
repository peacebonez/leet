const isValidSudoku = function (board) {
  let rows = {};
  let columns = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let curSquare = board[i][j];
      if (curSquare === ".") continue;
      if (!columns[j]) columns[j] = [];

      if (rows.hasOwnProperty(curSquare) || columns[j].includes(curSquare)) {
        return false;
      } else {
        rows[curSquare] = j;
        columns[j].push(curSquare);
      }
    }
    rows = {};
  }

  const dotStripper = (obj) => {
    return Object.values(obj)
      .filter((current) => current !== ".")
      .sort((a, b) => a - b);
  };

  for (let i = 0; i <= 6; i += 3) {
    threeByThreeLeft = {
      0: board[i][0],
      1: board[i][1],
      2: board[i][2],
      3: board[i + 1][0],
      4: board[i + 1][1],
      5: board[i + 1][2],
      6: board[i + 2][0],
      7: board[i + 2][1],
      8: board[i + 2][2],
    };
    threeByThreeMid = {
      0: board[i][3],
      1: board[i][4],
      2: board[i][5],
      3: board[i + 1][3],
      4: board[i + 1][4],
      5: board[i + 1][5],
      6: board[i + 2][3],
      7: board[i + 2][4],
      8: board[i + 2][5],
    };
    threeByThreeRight = {
      0: board[i][6],
      1: board[i][7],
      2: board[i][8],
      3: board[i + 1][6],
      4: board[i + 1][7],
      5: board[i + 1][8],
      6: board[i + 2][6],
      7: board[i + 2][7],
      8: board[i + 2][8],
    };

    const onlyNumbersLeft = dotStripper(threeByThreeLeft);
    const onlyNumbersMid = dotStripper(threeByThreeMid);
    const onlyNumbersRight = dotStripper(threeByThreeRight);

    const isValidSquare = (squareArr) => {
      for (let i = 0; i < squareArr.length - 1; i++) {
        if (squareArr[i] === squareArr[i + 1]) return false;
      }
      return true;
    };

    const isLeftValid = isValidSquare(onlyNumbersLeft);
    const isMidValid = isValidSquare(onlyNumbersMid);
    const isRightValid = isValidSquare(onlyNumbersRight);

    if (!isLeftValid || !isMidValid || !isRightValid) return false;
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
// true

// console.log(
//   isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     [".", ".", ".", "1", "9", "5", ".", ".", "8"],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["5", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", "1", "7", "9"],
//   ])
// );
//false
