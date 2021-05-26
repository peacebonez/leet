/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true
  let min = 1
  let max = Math.floor(num / 2)

  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    const square = middle * middle

    if (square === num) return true

    if (square < num) {
      min = middle + 1
    } else if (square > num) {
      max = middle - 1
    }
  }
  return false
}
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(25))
