const fib = (n) => {
  if (n === 0 || n === 1) return n
  return fib(n - 1) + fib(n - 2)
}

const fibSequence = (n) => {
  const sequence = [0, 1]

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence
}

// console.log(fib(2))
console.log(fibSequence(10))
