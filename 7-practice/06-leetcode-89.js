/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const res = [0]
  const length = 1 << n
  for (let i = 1; i < length; i++) {
    res.push(i ^ (i >> 1))
  }
  return res
}
// @lc code=end
