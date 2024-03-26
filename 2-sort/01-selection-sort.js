// 选择排序：每次找到最小值，放到未排序区间的起始位置
// 时间复杂度O(n^2)，空间复杂度O(1)
const nums = [4, 1, 3, 1, 2, 5]

const selectionSort = (nums) => {
  const len = nums.length
  // 最后一个数不需要排序
  for (let i = 0; i < len - 1; i++) {
    // 外层循环未排序区间
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      // 内层循环找到最小值
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    // 交换位置
    ;[nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }

  return nums
}

console.log(selectionSort(nums)) // [1, 1, 2, 3, 4, 5];
