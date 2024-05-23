/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  let prev = null
  let cur = head
  let next = head.next

  while (cur) {
    // 反转指针
    cur.next = prev
    // 右移指针
    prev = cur
    cur = next
    next = next ? next.next : null
  }

  return prev
}
// @lc code=end
