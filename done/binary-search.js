const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    if (arr[guess] === target) return guess;
    else if (arr[guess] < target) min = guess + 1;
    else max = guess - 1;
  }

  return -1;
};

console.log(
  binarySearch(
    [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
    ],
    83
  )
);
