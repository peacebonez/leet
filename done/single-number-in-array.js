const singleNumber = function (nums) {
  const bucket = {};

  for (let i = 0; i < nums.length; i++) {
    if (!bucket[nums[i]]) {
      bucket[nums[i]] = 1;
    } else {
      bucket[nums[i]]++;
    }
  }
  return Object.keys(bucket).find((key) => bucket[key] === 1);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
