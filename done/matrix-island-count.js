const numIslands = (grid) => {
  if (grid.length === 0 || !grid) return 0;

  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        dfs(grid, i, j);
      }
    }
  }
  return islandCount;
};

const dfs = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
    return 0;
  }

  if (grid[i][j] === "1") {
    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
};

console.log(
  numIslands([
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "1"],
  ])
);
