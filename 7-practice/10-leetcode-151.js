/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // let arr = s.split(' ')
  // let res = []
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (arr[i] !== '') {
  //     res.push(arr[i])
  //   }
  // }
  // return res.join(' ')

  let arr = s.split(' ')
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
  return arr.filter((item) => item !== '').join(' ')
}
// @lc code=end
