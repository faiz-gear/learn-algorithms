/**
 * 回溯算法: 在二叉树中搜索所有值为7的节点，请返回根节点到这些节点的路径，并要求路径中不包含值为 3的节点。
 */

class TreeNode {
  val
  left = null
  right = null
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }

  _preOrder(root, list) {
    if (root === null) return
    list.push(root)
    this._preOrder(root.left, list)
    this._preOrder(root.right, list)
  }

  preOrder(root) {
    const list = []
    this._preOrder(root, list)
    return list
  }
}
const values = [1, 7, 3, 4, 5, 6, 7] // 完美二叉树数组表示
// 生成完美二叉树
function generateTree(arr, index) {
  if (index >= arr.length) return null
  const left = generateTree(arr, 2 * index + 1)
  const right = generateTree(arr, 2 * index + 2)
  return new TreeNode(arr[index], left, right)
}
const root = generateTree(values, 0)

const choices = root.preOrder(root)
// console.log('🚀 ~ file: 01-backtrack.js ~ line 39 ~ choices', choices)

// 判断是否是有效的选择
function isSolution(state) {
  return state[state.length - 1]?.val === 7
}

// 记录解
function recordSolution(state, res) {
  res.push([...state])
}

// 剪枝： 判断在当前状态下，该选择是否是有效的
function isValid(state, choice) {
  return choice !== null && choice.val !== 3
}

// 更新选择
function makeChoice(state, choice) {
  state.push(choice)
}

// 撤销选择
function undoChoice(state) {
  state.pop()
}

/**
 * @description:  回溯
 * @param {*} state 查询路径
 * @param {*} choices 选择列表
 * @param {*} res 结果
 * @return {*}
 */
function backTrack(choices, state = [], res = []) {
  // 判断是否是解
  if (isSolution(state)) {
    recordSolution(state, res)
    // 不再继续搜索
    return
  }

  // 遍历选择列表
  for (let choice of choices) {
    if (isValid(state, choice)) {
      // 尝试： 做出选择， 更新状态
      makeChoice(state, choice)
      // 进行下一轮选择
      backTrack([choice.left, choice.right], state, res)
      // 撤销选择
      undoChoice(state)
    }
  }
}

const res = []
backTrack([root], [], res)
console.log('🚀 ~ file: 01-backtrack.js ~ line 77 ~ res', res)
