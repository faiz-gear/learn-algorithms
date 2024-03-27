// 零钱规划问题
/**
 * 给定 n 种硬币，第 i 种硬币的面值为 coins[i - 1]，目标金额为 amt，每种硬币可以重复选取，问能够凑出目标金额的最少硬币数量。如果无法凑出目标金额，则返回 -1
 */

const coins = [1, 2, 5]
const amt = 11

const coinChangeDP = (coins, amt) => {
  const n = coins.length
  const max = amt + 1
  // 初始化 dp 表，dp[i] 表示凑出 i 金额所需的最少硬币数量
  const dp = new Array(amt + 1).fill(max)
  // let prev = dp.slice()

  // 状态转移
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amt; j++) {
      // if (coins[i - 1] > j) {
      //   dp[j] = prev[j]
      // } else {
      //   dp[j] = Math.min(prev[j], dp[j - coins[i - 1]] + 1)
      // }
      if (coins[i - 1] <= j) {
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1)
      }
    }
    // prev = dp.slice()
  }

  return dp[amt] === max ? -1 : dp[amt]
}

console.log(coinChangeDP(coins, amt))

// 求凑出目标金额的方案数
const coinChangeDP2 = (coins, amt) => {
  const n = coins.length
  // 初始化 dp 表，dp[i] 表示凑出 i 金额的方案数
  const dp = new Array(amt + 1).fill(0)
  dp[0] = 1

  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amt; j++) {
      if (coins[i - 1] <= j) {
        // 不选和选硬币 i 这两种方案之和
        dp[j] += dp[j - coins[i - 1]]
      }
    }
  }

  console.log(dp)
  return dp[amt]
}

console.log(coinChangeDP2(coins, amt))
