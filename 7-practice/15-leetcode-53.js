/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let sum = nums[0]

  // 动态规划
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i])
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum
}
// @lc code=end
