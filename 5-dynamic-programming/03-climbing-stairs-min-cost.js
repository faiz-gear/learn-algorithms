/**
 * 给定一个楼梯，你每步可以上 1 阶或者 2 阶，每一阶楼梯上都贴有一个非负整数，表示你在该台阶所需要付出的代价。
 * 给定一个非负整数数组 cost，其中 cost[i]表示在第i 个台阶需要付出的代价，cost[0]为地面（起始点）。
 * 请计算最少需要付出多少代价才能到达顶部？
 */

// 动态规划 - 最小代价
const cost = [0, 1, 10, 1, 4, 12]

function minCostClimbingStairs(cost) {
  const n = cost.length - 1
  if(n === 1 || n === 2) return cost[n]

  let prev = cost[1]
  let cur = cost[2]

  for(let i = 3; i <= n; i++) {
    let temp = cur
    cur = Math.min(prev, cur) + cost[i]
    prev = temp
  }

  return cur
}

console.log(minCostClimbingStairs(cost)) // 2