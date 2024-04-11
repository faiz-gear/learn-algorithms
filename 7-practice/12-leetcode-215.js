/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  // 存储min-max之间的数的个数
  let counter = new Array(max - min + 1).fill(0)

  // 计数
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i] - min]++
  }

  let index = 0
  for (let i = 0; i <= max - min; i++) {
    for (let j = 0; j < counter[i]; j++) {
      // 从min开始，加上i就是当前的数
      nums[index++] = i + min
    }
  }

  return nums[nums.length - k]
}
// @lc code=end
