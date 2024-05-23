/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) {
    n = -n
    x = 1 / x
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2)
  } else {
    return x * myPow(x * x, Math.floor(n / 2))
  }
}
// @lc code=end
