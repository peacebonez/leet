/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) =>
  nums.map((num) => num * num).sort((a, b) => a - b)

const nums = [-4, -1, 0, 3, 10]

console.log(sortedSquares(nums))
