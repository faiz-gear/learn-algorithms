/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let root = new ListNode() // 结果的根节点
  let rootCache = new ListNode()
  let cache = rootCache // 缓存临时的大于或等于x的节点
  let temp = root //
  let cur = head
  while (cur) {
    let val = cur.val
    if (val < x) {
      temp.next = new ListNode(val)
      temp = temp.next
    } else {
      cache.next = new ListNode(val)
      cache = cache.next
    }
    cur = cur.next
  }

  temp.next = rootCache.next
  return root.next
}
// @lc code=end
