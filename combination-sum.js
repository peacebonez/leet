const combinationSum = (candidates, target) => {
  let output = [];
  for (let i = 0; i < candidates.length; i++) {
    if (target % candidates[i] === 0) output.push([candidates[i]]);

    

  }
  console.log("output:", output);
};

console.log(combinationSum([2, 3], 8));
