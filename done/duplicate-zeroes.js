function duplicateZeros(arr) {
  const FIXED_LENGTH = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0)
      arr.length = FIXED_LENGTH
      i++
    }
  }
}

// function duplicateZeros(arr) {
//   const FIXED_LENGTH = arr.length
//   for (let i = 0; i < arr.length; i++) {
//     // if encounter a zero, nudge every number back one
//     // always set arr.length back to FIXED_LENGTH
//     if (arr[i] === 0) {
//       for (let j = i + 1; j < arr.length; j++) {
//         arr[j + 1] = arr[j]
//         console.log(arr)
//         arr.length = FIXED_LENGTH
//       }
//       arr[i + 1] = 0
//     }
//   }
// }

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
