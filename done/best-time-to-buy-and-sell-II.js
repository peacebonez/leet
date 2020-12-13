const maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let curStock,
    profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (typeof curStock === "number") {
      if (prices[i] > curStock) {
        profit += prices[i] - curStock;
        curStock = null;
      }
    }
    if (prices[i] < prices[i + 1] && !curStock) {
      curStock = prices[i];
    }
  }
  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 5, 4, 3, 1]));
// console.log(maxProfit([2, 1, 2, 0, 1]));

db.companies.find({
  $and: [
    { $or: [{ founded_year: 2004 }, { founded_month: 10 }] },
    { $or: [{ category_code: "social" }, { category_code: "web" }] },
  ],
});
