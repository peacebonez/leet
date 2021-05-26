/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let total = 0

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) total += i
  }

  return total === num
}

console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(38))
console.log(checkPerfectNumber(8128))
