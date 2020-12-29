const maxArea = (height) => {
  let curArea = 0,
    max = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {}
  }
};

// console.log(maxArea([1, 2, 1]));
// console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 7, 6, 2, 5, 4, 8, 3, 8]));
// console.log(maxArea([1, 1]));

//multiply lower wall value by difference in indexes between 2 walls

//for each index
//take value of current index
//compare current value to each forward index and calculate area
// currentArea = current value * forward index

// const maxArea = (height) => {
//     let max = 0,
//       leftWall = null;

//     for (let i = 0; i < height.length; i++) {
//       // console.log("leftWall:", leftWall);
//       console.log("height[i]:", height[i]);
//       let currentArea = 0;
//       let lowerWall = Math.min(leftWall, height[i]);
//       let tallerWall = Math.max(leftWall, height[i]);
//       // console.log("tallerWall:", tallerWall);

//       //find the left wall
//       if (i < height.length / 2 && height[i] > leftWall) leftWall = height[i];

//       //find the right wall
//       if (i >= height.length / 2) {
//         let spread = Math.abs(
//           height.indexOf(lowerWall) - height.indexOf(tallerWall)
//         );
//         //   console.log("height.indexOf(tallerWall):", height.indexOf(tallerWall));
//         currentArea = lowerWall * spread;
//         if (currentArea > max) max = currentArea;
//       }
//       // console.log("currentArea:", currentArea);
//     }

//     console.log("max:", max);
//     return max;
//   };
