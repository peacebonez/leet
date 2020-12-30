const thirdMax = (nums) => {
  let mySet = [...new Set(nums)];
  if (nums.length < 3 || mySet.length < 3) return Math.max(...mySet);

  for (let i = 0; i < 2; i++) {
    mySet.splice(mySet.indexOf(Math.max(...mySet)), 1);
  }

  return Math.max(...mySet);
};

console.log(thirdMax([1, 1, 2]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([2, 2, 3, 1]));
