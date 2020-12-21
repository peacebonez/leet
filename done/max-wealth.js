const maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((account) => {
      return account.reduce((acc, cur) => acc + cur);
    })
  );
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
