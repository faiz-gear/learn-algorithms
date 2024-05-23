/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  if (n === 1) return 1

  const dp = Array.from({ length: n }).fill(1)

  // dp[i] = Math.max(dp[i], dp[j] + 1)
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 如果当前第i项的值大于第j项，说明有可能最长递增子序列又会增加
        // 取dp[j] + 1和dp[i]更大的是更长的递增子序列
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}
// @lc code=end
