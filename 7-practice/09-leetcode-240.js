/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const n = matrix.length
  const m = matrix[0].length
  // 从右上角看，是一棵二叉搜索树
  let i = n - 1
  let j = 0
  while (i >= 0 && j < m) {
    if (matrix[i][j] > target) {
      i--
    } else if (matrix[i][j] < target) {
      j++
    } else {
      return true
    }
  }

  return false
}
// @lc code=end
