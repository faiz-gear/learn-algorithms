const nums = [1, 2, 3]

// 全排列（无重复元素）
// const backtrack = (choices, state, selected, res) => {
//   // 回溯结束条件
//   if (choices.length === state.length) {
//     res.push([...state])
//     return
//   }
//   for (let i = 0; i < choices.length; i++) {
//     if (!selected[i]) {
//       state.push(choices[i])
//       selected[i] = true
//       backtrack(choices, state, selected, res)
//       selected[i] = false
//       state.pop()
//     }
//   }
// }

const nums1 = [1, 1, 2]
// 全排列（有重复元素）
const backtrack = (
  choices,
  state,
  selected, // 避免元素在下一轮重复选择
  res
) => {
  // 回溯结束条件
  if (choices.length === state.length) {
    res.push([...state])
    return
  }
  // 用于剪枝本轮选择中相等的元素
  const duplicated = new Set()
  for (let i = 0; i < choices.length; i++) {
    // 选择列表中的元素没有被选择过，且没有重复
    if (!selected[i] && !duplicated.has(choices[i])) {
      state.push(choices[i])
      duplicated.add(choices[i])
      selected[i] = true
      backtrack(choices, state, selected, res)
      selected[i] = false
      state.pop()
    }
  }
}

const permute = (nums) => {
  const res = []
  const state = []
  backtrack(nums, state, Array(nums.length).fill(false), res)
  return res
}

// console.log(permute(nums))
console.log(permute(nums1))
