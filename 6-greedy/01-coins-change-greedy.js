/**
 * 给定 n 种硬币，第 i 种硬币的面值为 coins[i - 1]，目标金额为 amt，每种硬币可以重复选取，问能够凑出目标金额的最少硬币数量。如果无法凑出目标金额，则返回 -1
 */

// 贪心
const coins = [1, 20, 50]
const amt = 60

const coinChangeGreedy = (coins, amt) => {
  let count = 0
  let i = coins.length - 1

  while (amt > 0) {
    // 找到小于amt且最接近amt的硬币
    while (i > 0 && coins[i] > amt) {
      i--
    }
    amt -= coins[i]
    count++
  }

  return count
}

console.log(coinChangeGreedy(coins, amt))
