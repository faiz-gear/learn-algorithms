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
  if (!head) return head
  let temp = new ListNode()
  // 双指针法
  let l1 = head
  let l2 = head.next
  let prev = null

  while (l2) {
    // 记录旧的l2
    temp.val = l2.val
    temp.next = l2.next

    l2.next = l1
    l1.next = prev
    // 后移
    prev = l1
    l1 = l2
    l2 = temp.next
  }

  return l1
}
// @lc code=end
