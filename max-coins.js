/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  let myTotal = 0
  const sortedPiles = piles.sort((a, b) => a - b)

  for (let i = sortedPiles.length - 2, j = 0; i > j; i -= 2, j++) {
    myTotal += piles[i]
  }

  return myTotal
}
maxCoins([9, 5, 6, 8, 10, 1, 4, 10, 7])
