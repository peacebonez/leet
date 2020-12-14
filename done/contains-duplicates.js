const containsDuplicate = function (nums) {
  let bucket = {};

  for (let i = 0; i < nums.length; i++) {
    if (bucket[nums[i]]) {
      return true;
    }
    bucket[nums[i]] = true;
  }
  return false;
};

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
