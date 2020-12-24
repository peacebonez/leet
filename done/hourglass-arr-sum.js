const data = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const neg = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

const hourGlassSum = (arr) => {
  let max = -1000;

  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      let curSum =
        arr[x][y] +
        arr[x][y + 1] +
        arr[x][y + 2] +
        arr[x + 1][y + 1] +
        arr[x + 2][y] +
        arr[x + 2][y + 1] +
        arr[x + 2][y + 2];
      if (curSum > max) max = curSum;
    }
  }
  return max;
};
console.log(hourGlassSum(neg));

arr.filter((i) => i && i);
