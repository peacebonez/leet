const maxArea = (height) => {
  let left = 0,
    right = height.length - 1,
    max = 0;

  while (left < right) {
    let lower = Math.min(height[left], height[right]);
    let curArea = lower * Math.abs(right - left);
    if (curArea > max) max = curArea;

    if (height[left] < height[right]) {
      left++;
    } else right--;
  }
  return max;
};

// console.log(maxArea([1, 2, 4, 3]));
// console.log(maxArea([1, 2, 1]));
// console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
