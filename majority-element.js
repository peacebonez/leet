const majorityElement = (nums) => {
  let max = 0,
    majEl;
  const numCounter = {};

  //creating a count for each value in nums
  for (let num of nums) {
    if (numCounter[num]) {
      numCounter[num]++;
    } else numCounter[num] = 1;

    if (numCounter[num] > max) {
      max = numCounter[num];
      majEl = num;
    }
  }

  return majEl;
};

console.log(majorityElement([3, 3, 1, 3, 1, 2, 2]));
console.log(majorityElement([1, 1, 2, 2, 3, 3, 3]));
