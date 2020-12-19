const moveZeroes = (nums) => {
  let pointer = null;
  let zeroEncountered = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroEncountered = true;
      if (pointer === null) pointer = i;
    }
    if (nums[i] !== 0 && zeroEncountered) {
      nums[pointer] = nums[i];
      nums[i] = 0;
      pointer++;
    }
  }
  return nums;
};
