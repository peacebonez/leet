/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] <= nums2[j] && nums1[i + 1] >= nums2[j]) {
        nums1.splice(i + 1, 0, nums2[j])
        i++
      }
    }
  }
  nums1.length = m + n
  console.log("nums1!:", nums1)
}

const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6]

// console.log(merge([2, 0], 1, [1], 1))
console.log(merge(nums1, 3, nums2, 3))
