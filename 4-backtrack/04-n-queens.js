/* 回溯算法：n 皇后 */
function backtrack(row, n, state, res, cols, diags1, diags2) {
  // 当放置完所有行时，记录解
  if (row === n) {
      res.push(state.map((row) => row.slice()));
      return;
  }
  // 遍历所有列
  for (let col = 0; col < n; col++) {
      // 计算该格子对应的主对角线和次对角线
      const diag1 = row - col + n - 1; // row-col的范围是[-n+1, n-1], 所以需要加上n-1来保证是正数
      const diag2 = row + col; // row+col的范围是[0, 2n-2]
      // 剪枝：不允许该格子所在列、主对角线、次对角线上存在皇后
      if (!cols[col] && !diags1[diag1] && !diags2[diag2]) {
          // 尝试：将皇后放置在该格子
          state[row][col] = 'Q';
          cols[col] = diags1[diag1] = diags2[diag2] = true;
          // 放置下一行
          backtrack(row + 1, n, state, res, cols, diags1, diags2);
          // 回退：将该格子恢复为空位
          state[row][col] = '#';
          cols[col] = diags1[diag1] = diags2[diag2] = false;
      }
  }
}

/* 求解 n 皇后 */
function nQueens(n) {
  // 初始化 n*n 大小的棋盘，其中 'Q' 代表皇后，'#' 代表空位
  const state = Array.from({ length: n }, () => Array(n).fill('#'));
  const cols = Array(n).fill(false); // 记录列是否有皇后
  // n维方阵中row-col(相同，则代表在同一主对角线上)的范围是[-n+1, n-1], row+col(相同，则代表在同一次对角线上)的范围是[0, 2n-2], 所以需要2*n-1个长度的数组来记录
  const diags1 = Array(2 * n - 1).fill(false); // 记录主对角线上是否有皇后
  const diags2 = Array(2 * n - 1).fill(false); // 记录次对角线上是否有皇后
  const res = [];

  backtrack(0, n, state, res, cols, diags1, diags2);
  return res;
}

nQueens(4)