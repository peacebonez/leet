const sumZero = function (n) {
  if (n.length === 1) return [0]
  const output = []
  let int = 1

  for (let i = 0; i < n - 1; i += 2) {
    output.push(int, int * -1)
    int++
  }

  if (n % 2 !== 0) output.push(0)

  return output
}

console.log(sumZero(4))
console.log(sumZero(5))
console.log(sumZero(6))
console.log(sumZero(7))
