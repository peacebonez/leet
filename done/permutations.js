// https://javascript.plainenglish.io/how-to-solve-permutations-in-javascript-502cc4522482
const permute = (nums) => {
  const permutations = []

  const backtracker = (arr, temp) => {
    if (temp.length === arr.length) {
      console.log("Pushing to output")
      permutations.push([...temp])
      return
    }

    for (const num of arr) {
      if (!temp.includes(num)) {
        console.log("pretemp:", temp)
        temp.push(num)
        console.log("post push temp:", temp)
        backtracker(arr, temp)
        temp.pop()
        console.log("post pop temp:", temp)
      }
    }
  }

  backtracker(nums, [])
  return permutations
}

console.log(permute([1, 2, 3]))
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// var permute = function (nums) {
//   const permutations = []

//   const swapInPlace = (arr, indexA, indexB) => {
//     let temp = arr[indexA]
//     arr[indexA] = arr[indexB]
//     arr[indexB] = temp
//   }

//   const generate = (n, heapArr) => {
//     if (n === 1) {
//       permutations.push([...heapArr])
//       return
//     }

//     generate(n - 1, heapArr)

//     for (let i = 0; i < n - 1; i++) {
//       if (n % 2 === 0) {
//         swapInPlace(heapArr, i, n - 1)
//       } else {
//         swapInPlace(heapArr, 0, n - 1)
//       }
//       generate(n - 1, heapArr)
//     }
//   }

//   generate(nums.length, [...nums])
//   return permutations
// }
