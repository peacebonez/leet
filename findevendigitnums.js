// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums
    .map((num) => num.toString().split("").length)
    .filter((digitLength) => digitLength % 2 === 0).length
}

const nums = [12, 345, 2, 6, 7896]

console.log(findNumbers(nums))
