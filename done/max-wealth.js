const maximumWealth = function (accounts) {
  return accounts
    .map((account) => {
      return account.reduce((acc, cur) => acc + cur);
    })
    .sort((a, b) => b - a)[0];
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
