/**
 * 给定一个 n*m的二维网格 grid ，网格中的每个单元格包含一个非负整数，表示该单元格的代价。机器人以左上角单元格为起始点，每次只能向下或者向右移动一步，直至到达右下角单元格。请返回从左上角到右下角的最小路径和。
 */

const grid = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

const minPathSumDP = (grid) => {
  // 定义状态，得到dp表；dp[i][j]表示从左上角到网格(i, j)的最小路径和,
  const n = grid.length
  const m = grid[0].length

  // 初始化dp表 和grid一样的二维矩阵
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))

  // 处理边界， 状态转移到第一列和第一行
  dp[0][0] = grid[0][0]
  // 计算第一列的代价,
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  // 计算第一行的代价
  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }

  // 找出最优子结构，推导状态转移方程
  // 状态转移到剩余列和剩余行
  for (let i = 1; i < n; i++) {
    // 遍历剩余行
    for (let j = 1; j < m; j++) {
      // 遍历剩余列
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[n - 1][m - 1]
}

console.log(minPathSumDP(grid))

// 空间优化
const minPathSumDPOptimize = (grid) => {
  const n = grid.length
  const m = grid[0].length

  const dp = new Array(m).fill(0)

  dp[0] = grid[0][0]
  // 状态转移， 首行
  for (let i = 1; i < m; i++) {
    dp[i] = dp[i - 1] + grid[0][i]
  }

  // 状态转移，剩余行
  for (let i = 1; i < n; i++) {
    // 状态转移，首列
    dp[0] = dp[0] + grid[i][0]
    for (let j = 1; j < m; j++) {
      // dp[i-1]是左边一格的状态， dp[i]是上一格的状态
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
    }
  }

  return dp[m - 1]
}

console.log(minPathSumDPOptimize(grid))
