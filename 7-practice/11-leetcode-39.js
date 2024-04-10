/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 强行动态规划（感觉不合适, 空间o(n * target)）
  // const n = candidates.length
  // const dp = new Array(target + 1).fill(0).map(() => [])
  // for (let i = 1; i <= target; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     const candidate = candidates[j - 1]
  //     if (candidate === i) {
  //       dp[i].push([candidate])
  //     } else if (candidate < i) {
  //       dp[i - candidate].forEach((item) => {
  //         if (item[item.length - 1] <= candidate) {
  //           dp[i].push([...item, candidate])
  //         }
  //       })
  //     }
  //   }
  // }
  // return dp[target]
  // 回溯
  const state = []
  const res = []
  const backtrack = (state, choices, res, start, target) => {
    // 结束条件
    if (target === 0) {
      res.push([...state])
      return
    }

    for (let i = start; i < choices.length; i++) {
      const choice = choices[i]
      // 剪枝1
      if (choice <= target) {
        // 尝试做出选择
        state.push(choice)
        // 做下一轮选择
        backtrack(state, choices, res, i, target - choice)
        // 撤销选择
        state.pop()
      }
    }
  }

  backtrack(state, candidates, res, 0, target)

  return res
}
// @lc code=end

console.log(combinationSum([2, 3, 6, 7], 7))
