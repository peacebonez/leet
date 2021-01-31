var relativeSortArray = function (arr1, arr2) {
  const output = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) output.push(arr2[i]);
    }
  }

  const outliers = arr1
    .filter((val) => {
      return !arr2.includes(val);
    })
    .sort((a, b) => a - b);

  return [...output, ...outliers];
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
