function factorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed.")
  else if (n === 0) return 1
  let total = n
  while (n > 1) {
    n--
    total *= n
  }
  return total
}
function recursiveFactorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed.")
  else if (n === 0) return 1
  return n * recursiveFactorial(n - 1)
}

console.log(factorial(4))
console.log(recursiveFactorial(4))
