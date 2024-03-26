// 子集合问题

/**
 * 无重复元素的情况
 * 给定一个正整数数组 nums 和一个目标正整数 target ，请找出所有可能的组合，使得组合中的元素和等于 target 。给定数组无重复元素，每个元素可以被选取多次。请以列表形式返回这些组合，列表中不应包含重复组合。
 */

const nums = [3, 4, 5, 7, 2]
const target = 9

const backtrack = (choices, state, target, start, res) => {
  // 回溯结束条件
  if (target === 0) {
    res.push([...state])
    return
  }
  // 剪枝二：从start开始遍历，避免生成重复子集
  for (let i = start; i < choices.length; i++) {
    // 剪枝一：子集和小于target才需要继续
    if (target - choices[i] >= 0) {
      state.push(choices[i])
      target -= choices[i]
      backtrack(choices, state, target, i, res)
      target += choices[i]
      state.pop()
    }
  }
}

const subsetSum = (nums, target) => {
  const res = []
  const state = []
  nums.sort((a, b) => a - b)
  backtrack(nums, state, target, 0, res)
  return res
}

console.log(subsetSum(nums, target))
