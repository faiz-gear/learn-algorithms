/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果root是p或q，那么root肯定是最近公共祖先; root是null则代表没有找到
  if (root === p || root === q || root === null) return root

  // 否则就去递归查找左右子树是否有p和q
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 如果left和right都找到了，当前root肯定是最近公共祖先
  if (left && right) return root

  // 如果只有一个找到了，说明left或者right可就是最近公共祖先
  return left || right
}
// @lc code=end
