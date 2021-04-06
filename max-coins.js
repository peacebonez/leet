/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let myTotal = 0
  const sortedPiles = piles.sort((a, b) => a - b)
  console.log("sortedPiles:", sortedPiles)

  for (let i = sortedPiles.length - 2, j = 0; i > j; i -= 2, j++) {
    myTotal += piles[i]
  }
  console.log("myTotal:", myTotal)
  return myTotal
}

maxCoins([9, 5, 6, 8, 10, 1, 4, 10, 7])
// maxCoins([2, 4, 1, 2, 7, 8])
// val: 2, 5, 8
// index: 1, 4, 7,
