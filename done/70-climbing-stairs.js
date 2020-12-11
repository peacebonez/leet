// https://www.youtube.com/watch?v=UyDyc6yV1iQ&feature=youtu.be

const climbStairs = function (n) {
  const counter = (stairsLeft, memo) => {
    if (stairsLeft < 0) return 0;
    if (stairsLeft === 0) return 1;
    if (memo[stairsLeft]) return memo[stairsLeft];

    memo[stairsLeft] =
      counter(stairsLeft - 1, memo) + counter(stairsLeft - 2, memo);

    return memo[stairsLeft];
  };

  return counter(n, {});
};

console.log(climbStairs(3));
