const missingNumber = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  if (sorted[sorted.length - 1] !== sorted.length) return nums.length;
  if (sorted[0] !== 0) return 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1;
  }
};

console.log(missingNumber([1, 2]));
