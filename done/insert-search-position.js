const searchInsert = (nums, target) => {
  if (nums.indexOf(target) > -1) return nums.indexOf(target);

  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0]) return 0;
  }
};

console.log(searchInsert([1, 2, 3], 4));
// console.log(searchInsert([1, 2, 7, 8, 10], 0));
// console.log(searchInsert([1, 2, 7, 8, 10], 9));
// console.log(searchInsert([1, 2, 7, 8, 10], 9));
