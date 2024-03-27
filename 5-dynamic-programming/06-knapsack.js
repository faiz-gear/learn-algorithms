// 背包问题
/**
 * 给定 n个物品，第 i个 物品的重量为 weg[i - 1]、价值为val[i - 1]，和一个容量为 cap 的背包。
每个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
 */

const cap = 50
const weg = [10, 20, 30, 40, 50]
const val = [50, 120, 150, 210, 240]

const knapsackDP = (weg, val, cap) => {
  const n = weg.length
  // 构建dp, dp[i][c]代表前i个物品在剩余容量为n的背包中的最大价值，最终需要求dp[n][cap], 因此dp的尺寸需要是(n+1) * (cap+1)
  const dp = Array.from({ length: n + 1 }, () => new Array(cap + 1).fill(0))

  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      if (weg[i - 1] > c) {
        // 如果第i个物品的重量大于当前剩余容量c，则第dp[i][c] = dp[i - 1][c]
        dp[i][c] = dp[i - 1][c]
      } else {
        // dp[i][c]的最优子结构： 不选i的最大价值dp[i - 1][c] - 选i的最大价值dp[i - 1][c - weg[i - 1]] + val[i - 1] 两者之间的最大值
        dp[i][c] = Math.max(dp[i - 1][c], dp[i - 1][c - weg[i - 1]] + val[i - 1])
      }
    }
  }

  return dp[n][cap]
}

console.log(knapsackDP(weg, val, cap))

/* 0-1 背包：状态压缩后的动态规划 */
function knapsackDPComp(wgt, val, cap) {
  const n = wgt.length
  // 初始化 dp 表
  const dp = Array(cap + 1).fill(0)
  let prev = dp
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      if (weg[i - 1] > c) {
        // 如果第i个物品的重量大于当前剩余容量c，则第dp[c] = dp[c - 1]
        dp[c] = prev[c]
      } else {
        // dp[c]的最优子结构： 不选i的最大价值prev[c - 1] - 选i的最大价值prev[c - weg[i - 1] + val[i - 1] 两者之间的最大值
        dp[c] = Math.max(prev[c], prev[c - weg[i - 1]] + val[i - 1])
      }
    }
    prev = dp.slice()
  }
  return dp[cap]
}

console.log(knapsackDPComp(weg, val, cap))
