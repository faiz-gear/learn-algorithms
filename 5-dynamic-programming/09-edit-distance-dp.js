// 编辑距离问题

/**
 * 输入两个字符串s和t，计算将s转换为t的最少操作次数。
 * 你可以对一个字符串进行如下三种操作：
 * 1. 插入一个字符
 * 2. 删除一个字符
 * 3. 替换一个字符
 */

const s = 'kitten'
const t = 'sitting'

const editDistanceDp = (s, t) => {
  const n = s.length
  const m = t.length
  // 构建dp数组
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

  // 找出最优子结构 -> 状态转移方程
  // dp[i][j] 表示 s 的前 i 个字符转换为 t 的前 j 个字符所需要的最少操作次数
  // 如果 s[i] === t[j]，则 dp[i][j] = dp[i - 1][j - 1]
  // 如果 需要添加在s[i]后面 dp[i][j] = dp[i][j - 1] + 1
  // 如果 需要删除s[i] dp[i][j] = dp[i - 1][j] + 1
  // 如果 需要替换s[i] dp[i][j] = dp[i - 1][j - 1] + 1

  // 首先初始化边界条件
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j
  }

  // 状态转移方程
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  return dp[n][m]
}

console.log(editDistanceDp(s, t)) // 3

// 编辑距离问题的状态压缩
// 由于 dp[i][j] 只依赖于 dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]，因此可以使用滚动数组进行状态压缩
// 时间复杂度：O(n * m) 空间复杂度：O(min(n, m))
const editDistanceDpComp = (s, t) => {
  const n = s.length
  const m = t.length

  const dp = new Array(m + 1).fill(0)
  let prev = dp.slice()

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[j] = prev[j - 1]
      } else {
        dp[j] = Math.min(prev[j - 1], prev[j], dp[j - 1]) + 1
      }
    }
    prev = dp.slice()
  }

  return dp[m]
}

console.log(editDistanceDpComp(s, t)) // 3
