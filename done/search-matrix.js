const searchMatrix = (matrix, target) =>
  matrix.some((arr) => arr.indexOf(target) > -1) ? true : false;
