/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0

  let substring = ''
  let left = 0
  for (let right = left; right < s.length; right++) {
    if (substring.includes(s[right])) {
      left = s.indexOf(s[right], left) + 1
      substring = s.slice(left, right + 1)
    } else {
      substring = s.slice(left, right + 1)
      max = Math.max(max, substring.length)
    }
  }
  return max
}

// @lc code=end
