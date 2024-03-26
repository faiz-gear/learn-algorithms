/**
 * 给定一个共有 n阶的楼梯，你每步可以上 1阶或者2 阶，但不能连续两轮跳1阶，
 * 请问有多少种方案可以爬到楼顶？
 */

// 动态规划 - 不满足无后效性
// dp[i][1] = dp[i-1][2] 在第i阶的时候，上一步是1阶；则上一步必须是2阶
// dp[i][2] = dp[i-1][1] + dp[i-1][2] 在第i阶的时候，上一步是2阶；则上一步可以是1阶或者2阶
 const climbingStairsConstraint = (n) => {
  if(n === 1 || n === 2) return n
  let dp = Array.from({length: n + 1}, () => Array(3).fill(0))

  dp[1][1] = 1
  dp[1][2] = 0
  dp[2][1] = 0
  dp[2][2] = 1

  for(let i = 3; i <= n; i++) {
    dp[i][1] = dp[i - 1][2]
    dp[i][2] = dp[i - 1][1] + dp[i - 1][2]
  }

  return dp[n][1] + dp[n][2]
 }

  console.log(climbingStairsConstraint(3)) // 2