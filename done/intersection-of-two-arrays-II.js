const intersect = function (nums1, nums2) {
  const matchArr = [];
  if (nums1.length !== nums2.length) {
    const longerArr = nums1.length > nums2.length ? nums1 : nums2;
    const shorterArr = nums1.length < nums2.length ? nums1 : nums2;

    function looper(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        const matchIndex = arr2.indexOf(arr1[i]);
        if (matchIndex > -1) {
          matchArr.push(shorterArr[i]);
          longerArr.splice(matchIndex, 1);
        }
      }
    }

    for (let i = 0; i < shorterArr.length; i++) {
      const matchIndex = longerArr.indexOf(shorterArr[i]);
      if (matchIndex > -1) {
        matchArr.push(shorterArr[i]);
        longerArr.splice(matchIndex, 1);
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      const matchIndex = nums2.indexOf(nums1[i]);
      if (matchIndex > -1) {
        matchArr.push(nums1[i]);
        nums2.splice(matchIndex, 1);
      }
    }
  }

  return matchArr;
};

console.log(intersect([1, 2], [1, 1]));
