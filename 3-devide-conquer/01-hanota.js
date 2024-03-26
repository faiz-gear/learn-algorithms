// 汉诺塔问题
/**
 * 给定三根柱子，记为 A、B 和 C 。起始状态下，柱子 A 上套着 
 个圆盘，它们从上到下按照从小到大的顺序排列。我们的任务是要把这 
 个圆盘移到柱子 C 上，并保持它们的原有顺序不变（如图 12-10 所示）。在移动圆盘的过程中，需要遵守以下规则。

圆盘只能从一根柱子顶部拿出，从另一根柱子顶部放入。
每次只能移动一个圆盘。
小圆盘必须时刻位于大圆盘之上。
 */

function dfs(n, source, buffer, target) {
  if (n === 1) {
    target.push(source.pop())
    return
  }
  // 将f(n-1)移到buffer
  dfs(n - 1, source, target, buffer)
  // 将底部的圆盘移到target
  target.push(source.pop())
  // 将buffer的圆盘移到target
  dfs(n - 1, buffer, source, target)
}

/* 求解汉诺塔问题 */
function solveHanota(A, B, C) {
  const n = A.length
  // 将 A 顶部 n 个圆盘借助 B 移到 C
  dfs(n, A, B, C)
}

const A = [3, 2, 1]
const B = []
const C = []
solveHanota(A, B, C)
console.log(C) // [3, 2, 1]
console.log(A) // []
