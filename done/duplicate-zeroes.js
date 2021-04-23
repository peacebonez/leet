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

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
