/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const hash = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++
    } else {
      hash[s[i]] = 1
    }
  }

  for (let j = 0; j < t.length; j++) {
    hash[t[j]]--
  }

  return !Object.values(hash).some(Boolean)
}
// @lc code=end
