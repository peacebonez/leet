var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      continue
    }
  }
  return nums.length
}

removeElement([1, 2, 3, 4, 5, 7, 8, 3, 10, 1], 1)
