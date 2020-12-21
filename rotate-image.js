const rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let curVal = matrix[i][j];
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
//first column reversed, middle column reversed, last column reversed = answer
//just reverse all columns in order

const answer = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

// If able to create new array just make a new array of columns and reverse each nested array

const reversedRow = [
  [3, 2, 1],
  [6, 5, 4],
  [9, 8, 7],
];

const columns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

//last column reversed, middle column reversed, 1st column reversed = answer
