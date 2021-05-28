// https://www.youtube.com/watch?v=UyDyc6yV1iQ&feature=youtu.be

// const climbStairs = function (n) {
//   const counter = (stairsLeft, memo) => {
//     if (stairsLeft < 0) return 0
//     if (stairsLeft === 0) return 1
//     if (memo[stairsLeft]) return memo[stairsLeft]

//     // answer is the number of ways - 1 step + number of ways - 2 steps
//     memo[stairsLeft] =
//       counter(stairsLeft - 1, memo) + counter(stairsLeft - 2, memo)

//     return memo[stairsLeft]
//   }

//   return counter(n, {})
// }

// const climbStairs = (n) => {
//   if (n === 1 || n === 0) return 1

//   let first = 1
//   let second = 2

//   for (let i = 3; i <= n; i++) {
//     let third = first + second // 3
//     first = second // 2
//     second = third // 3
//   }

//   // 5
//   // 3
//   // 5
//   return second
// }

const climbStairs = (n) => {
  if (n <= 1) return 1

  // the index represents n, the value represents the number of ways
  const ways = [1, 1]

  // start at 2 because we already know 0 and 1 return 1
  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2] // 1 + 1  = 2 ways
  }

  return ways[n]
}

console.log(climbStairs(4))
console.log(climbStairs(10))
