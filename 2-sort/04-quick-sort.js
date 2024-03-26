// 快速排序：选定一个基准值，将数组分为两部分，左边的值都小于基准值，右边的值都大于基准值，然后递归的对左右两部分进行排序
// 时间复杂度：O(nlogn) 空间复杂度：O(n) 稳定性：不稳定
const nums = [4, 1, 3, 1, 2, 5]

const quickSort = (nums) => {
  if (nums.length <= 1) return nums
  const pivotIndex = Math.floor(nums.length / 2)
  const pivot = nums[pivotIndex]
  const left = []
  const right = []
  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) continue
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(nums)) // [1, 1, 2, 3, 4, 5];
