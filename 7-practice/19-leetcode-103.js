/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []

  const res = [[]]
  const queue = [root]
  let level = 1

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (level % 2 === 0) {
        res[level - 1].unshift(node.val)
      } else {
        res[level - 1].push(node.val)
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    if (queue.length) {
      res.push([])
    }
    level++
  }

  return res
}
// @lc code=end
