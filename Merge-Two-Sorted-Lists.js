/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  console.log("l1:", l1)
  console.log("l2:", l2)
  if (l1.length === 0 && l2.length === 0) return []
  if (l1.length === 0) return l2
  if (l2.length === 0) return l1
  console.log(
    "[...l1, ...l2].sort((a, b => a - b)):",
    [...l1, ...l2].sort((a, b) => a - b)
  )
  return [...l1, ...l2].sort((a, b) => a - b)
}

mergeTwoLists([1, 2, 4], [1, 3, 4])
