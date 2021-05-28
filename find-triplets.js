function findTriplets(array) {
  if (array.length < 3) return false

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j === i) continue
      for (let k = 0; k < array.length; k++) {
        if (k === i || k === j) continue
        const sum = array[i] + array[j] + array[k]

        if (sum === 0) return true
      }
    }
  }
  return false
}

console.log(findTriplets([0, 1, 2, -10, 5]))

console.log(findTriplets([0, 1, 2, -1, 5]))

console.log(findTriplets([0, 1]))
