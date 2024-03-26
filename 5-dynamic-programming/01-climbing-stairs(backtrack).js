// 给定一个共有 n阶的楼梯，你每步可以上 1阶或者 2阶，请问有多少种方案可以爬到楼顶？

// 回溯解法
function backtrack(choices, n, state, res) {
  // 结束做选择
  if(state.reduce((a, b) => a + b, 0) === n) {
    res.push(state.slice());
    return;
  }

  for(let i = 0; i < choices.length; i++) {
    if(state.reduce((a, b) => a + b, 0) + choices[i] > n) {
      continue;
    }
    // 做选择
    state.push(choices[i]);
    // 递归
    backtrack(choices, n, state, res);
    // 撤销选择
    state.pop();
  }

}

function climbingStairsBacktrack(n) {
  const choices = [1, 2];
  const res = [];
  const state = [];
  backtrack(choices, n, state, res);

  return res
}

console.log(climbingStairsBacktrack(3));