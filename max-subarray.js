/**
 * @param {number[]} nums
 * @return {number}
 */

// PASSES EXCEPT FOR GIGANTIC ARRAYS

var maxSubArray = function (nums) {
  const storage = []
  let prevSum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let curSum = (prevSum = nums[i])
    for (let j = i + 1; j < nums.length; j++) {
      curSum += nums[j]
      if (curSum > prevSum) storage.push(curSum)
    }
  }
  console.log("Math.max(...storage, ...nums):", Math.max(...storage, ...nums))
  return Math.max(...storage, ...nums)
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// maxSubArray([5, 4, -1, 7, 8])
// maxSubArray([-2, 1])
