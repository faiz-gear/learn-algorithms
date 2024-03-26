// 给定一个共有 n阶的楼梯，你每步可以上 1阶或者 2阶，请问有多少种方案可以爬到楼顶？

// 暴力搜索
function dfs(n) {
 if(n === 1 || n === 2) return n;
//  从第n阶楼梯可以爬到第n-1阶楼梯，也可以爬到第n-2阶楼梯， 所有爬到第n阶楼梯的方法等于爬到第n-1阶楼梯的方法加上爬到第n-2阶楼梯的方法
  return dfs(n - 1) + dfs(n - 2);
}
console.log(dfs(3)) // 3;

// 记忆化搜索: 从顶向下， 将问题分解为子问题，然后将子问题的解缓存起来，避免重复计算；之后通过回溯，将子问题的解组合成原问题的解
function dfs(n, memo) {
  memo = Array(n + 1).fill(-1)
  if(n === 1 || n === 2) return n;
  if(memo[n] !== -1) return memo[n];
  memo[n] = dfs(n - 1, memo) + dfs(n - 2, memo);
  return memo[n];
}

console.log(dfs(3)) // 3;

// 动态规划： 从低至顶，从最小问题的解开始，迭代构建更大问题的解，直到构建出原问题的解
function climbingStairs(n) {
  if(n === 1 || n === 2) return n;
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(climbingStairs(6));

// 动态规划-空间优化： 由于dp[i]只与dp[i-1]和dp[i-2]有关，所以可以只用两个变量来存储dp[i-1]和dp[i-2]， 从o(n)的空间复杂度优化到o(1)
function climbingStairs(n) {
  if(n === 1 || n === 2) return n
  let prev = 1
  let cur = 2

  for(let i = 3; i <= n; i++) {
    let temp = prev + cur
    prev = cur
    cur = temp
  }

  return cur
}
console.log(climbingStairs(6));
