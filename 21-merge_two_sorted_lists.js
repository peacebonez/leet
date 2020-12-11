//leetcode.com/problems/merge-two-sorted-lists/

let l1 = [1, 2, 4],
  l2 = [1, 3, 4];

var mergeTwoLists = function (l1, l2) {
  if (l1.length === 0 && l2.length === 0) return [];
  if (l1.length === 0) return l2;
  if (l2.length === 0) return l1;
  return [...l1, ...l2].sort();
};

console.log(mergeTwoLists(l1, l2));
// console.log(mergeTwoLists([], []));
