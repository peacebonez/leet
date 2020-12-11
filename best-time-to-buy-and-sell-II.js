const maxProfit = function (prices) {
  console.log("prices:", prices);
  if (prices.length === 1) return 0;
  if (Math.max(...prices) === prices[0]) return 0;
  let isHolding = false;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
