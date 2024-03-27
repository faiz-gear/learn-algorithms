/**
给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表，用字母 A 到 Z 表示，以及一个冷却时间 n。每个周期或时间间隔允许完成一项任务。任务可以按任何顺序完成，但有一个限制：两个 相同种类 的任务之间必须有长度为 n 的冷却时间。
返回完成所有任务所需要的 最短时间间隔 。
https://leetcode.cn/problems/task-scheduler/description/
 */
var leastInterval = function (tasks, n) {
  let wordCounter = new Array(26).fill(0)
  let max = 0 // 最多任务A的次数
  let total = 0 // 有多少个出现过max次的任务
  for (let c of tasks) wordCounter[c.charCodeAt(0) - 'A'.charCodeAt(0)]++
  for (let i = 0; i < 26; i++) max = Math.max(max, wordCounter[i])
  for (let i = 0; i < 26; i++) total += wordCounter[i] === max ? 1 : 0

  console.log(total, max)
  return Math.max((n + 1) * (max - 1) + total, tasks.length)
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)) // 8
