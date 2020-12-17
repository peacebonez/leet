const intersect = function (nums1, nums2) {
  function looper(arr1, arr2) {
    const matchArr = [];
    for (let i = 0; i < arr1.length; i++) {
      const matchIndex = arr2.indexOf(arr1[i]);
      if (matchIndex > -1) {
        matchArr.push(arr1[i]);
        arr2.splice(matchIndex, 1);
      }
    }
    return matchArr;
  }
  if (nums1.length !== nums2.length) {
    const longerArr = nums1.length > nums2.length ? nums1 : nums2;
    const shorterArr = nums1.length < nums2.length ? nums1 : nums2;
    return looper(shorterArr, longerArr);
  } else {
    return looper(nums1, nums2);
  }
};

console.log(intersect([1, 2], [1, 1]));
