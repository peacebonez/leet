function findTriplets(array) {
  if (array.length < 3) return false

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) return true
      }
    }
  }
  return false
}

console.log(findTriplets([0, 1, 2, -10, 5]))

console.log(findTriplets([0, 1, 2, -1, 5]))

console.log(findTriplets([0, 1]))
