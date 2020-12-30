const missingNumber = (nums) => {
  if (nums.length === 1 && nums[0] === 1) return 0;
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1;
  }

  if (sorted.includes(0)) return sorted[sorted.length - 1] + 1;
  else return 0;
};

console.log(missingNumber([1, 2]));
// console.log(missingNumber([3, 0, 1]));
