/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const root = new TreeNode()
  const buildNode = (preorder, inorder, parent) => {
    parent.val = preorder[0] // 根节点
    const i = inorder.findIndex((item) => item === parent.val)
    const left = inorder.slice(0, i) // 左子树
    const right = inorder.slice(i + 1) // 右子树
    if (left.length) {
      parent.left = new TreeNode()
      // 递归构建左子树
      buildNode(preorder.slice(1, left.length + 1), left, parent.left)
    }
    if (right.length) {
      parent.right = new TreeNode()
      // 递归构建右子树
      buildNode(preorder.slice(left.length + 1), right, parent.right)
    }
  }
  buildNode(preorder, inorder, root)

  return root
}
// @lc code=end
