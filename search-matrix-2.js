const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] > target) break;
    if (matrix[i].includes(target)) return true;
  }
  return false;
};
