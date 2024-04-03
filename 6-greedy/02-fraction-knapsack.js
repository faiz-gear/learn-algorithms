// 分数背包问题
/**
 * 给定 n个物品，第 i个 物品的重量为 weg[i - 1]、价值为val[i - 1]，和一个容量为 cap 的背包。
每个物品只能选择一次，但可以选择物品的一部分，价值根据选择的重量比例计算, 问在限定背包容量下能放入物品的最大价值。
 */

const cap = 50
const weg = [10, 20, 30, 40, 50]
const val = [50, 120, 150, 210, 240]

class Item {
  constructor(w, v) {
    this.w = w
    this.v = v
  }
}

const fractionKnapsack = (weg, val, cap) => {
  let max = 0
  const items = weg.map((w, i) => new Item(w, val[i]))
  items.sort((a, b) => b.v / b.w - a.v / a.w)

  for (const item of items) {
    if (cap >= item.w) {
      // 重量充足, 将当前物品直接放进背包
      cap -= item.w
      max += item.v
    } else {
      // 重量不足， 选择当前物品的一部分
      max += (cap / item.w) * item.v
      break
    }
  }

  return max
}

console.log(fractionKnapsack(weg, val, cap))
