/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid[0].length
  const m = grid.length
  const dp = new Array(n).fill(0)

  // 首行
  dp[0] = grid[0][0]
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + grid[0][i]
  }

  // 剩余行
  for (let i = 1; i < m; i++) {
    dp[0] = dp[0] + grid[i][0]
    // 状态转移
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
    }
  }

  return dp[n - 1]
}
// @lc code=end
