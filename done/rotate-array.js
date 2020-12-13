const arr = [1, 2, 3, 4, 5, 6, 7];

const rotate = (nums, k) => {
  if (k === 0 || nums.length === 1) return nums;

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }
  return nums;
};

//SLOWER YET MORE ELEGANT SOLUTION FOUND ONLINE

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

console.log(rotate(arr, 3));

db.listingsAndReviews.find({
  $and: [{ accommodates: { $gt: 6 } }, { amenities: { $size: 50 } }],
});
