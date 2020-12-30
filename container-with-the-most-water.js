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

//multiply lower wall value by difference in indexes between 2 walls

//for each index
//take value of current index
//compare current value to each forward index and calculate area
// currentArea = current value * forward index

// const maxArea = (height) => {
//   let curArea = 0,
//     max = 0,
//     lowerWall,
//     spread,
//     startWall,
//     endWall;

//   for (
//     let start = 0, end = height.length - 1;
//     start < height.length / 2;
//     start++, end--
//   ) {
//     console.log("height[start]:", height[start]);
//     console.log("height[end]:", height[end]);
//     if (height.length === 2) {
//       return Math.min(height[start], height[end]) * 1;
//     }
//     if (start + 1 === end - 1) {
//       return Math.min(height[start], height[end]) * Math.abs(start - end);
//     }
//     if (height[start + 1] < height[start]) startWall = height[start];
//     if (height[end - 1] < height[end]) endWall = height[end];

//     if (startWall && endWall) {
//       console.log("startWall:", startWall);
//       console.log("endWall:", endWall);
//       lowerWall = Math.min(startWall, endWall);

//       spread = Math.abs(
//         height.indexOf(startWall) - height.lastIndexOf(endWall)
//       );

//       curArea = lowerWall * spread;

//       if (curArea > max) max = curArea;
//       return max;
//     }
//     console.log(height);
//   }
//   return max;
// };
// const maxArea = (height) => {
//     let curArea = 0,
//       max = 0,
//       lowerWall,
//       spread;

//     for (let i = 0; i < height.length; i++) {
//       for (let j = i + 1; j < height.length; j++) {
//         //   console.log("j:", j);
//         //   console.log("height[j]:", height[j]);
//         lowerWall = Math.min(height[i], height[j]);
//         //   let higherWall = Math.max(height[i], height[j])
//         spread = Math.abs(i - j);

//         //   console.log("spread:", spread);
//         curArea = lowerWall * spread;
//         //   console.log("curArea:", curArea);
//         if (curArea > max) max = curArea;
//       }
//     }
//     return max;
//   };
