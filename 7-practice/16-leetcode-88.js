/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return
  if (m === 0) nums1[0] = nums2[0]
  let i = m - 1
  let j = n - 1
  let total = m + n - 1
  while (i >= 0 && j >= 0) {
    nums1[total--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
  }

  while (j >= 0) {
    nums1[j] = nums2[j--]
  }
}
// @lc code=end

console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))
