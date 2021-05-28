// const containsDuplicate = function (nums) {
//   let storage = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (storage[nums[i]]) return true
//     storage[nums[i]] = true
//   }
//   return false
// }

const containsDuplicate = (nums) => nums.length !== [...new Set(nums)].length

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
// console.log(containsDuplicate([1, 2, 3, 4]))
