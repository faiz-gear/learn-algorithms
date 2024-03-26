// 归并排序： 采用分治的思想，将数组分成两部分，直道每个数组只有一个元素，然后将两个数组分别排序，最后合并两个数组
// 时间复杂度：O(nlogn) 空间复杂度：O(n) 稳定性：稳定

const nums = [4, 1, 3, 1, 2, 5, 6, 7, 8, 9, 10, 11, 3, 4, 1, 4, 56, 11, 43, 12, 43, 4, 68, 33]

const merge = (left, right) => {
  const result = []
  let l = 0
  let r = 0
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  // 处理左区间剩余的元素
  while (l < left.length) {
    result.push(left[l++])
  }

  // 处理右区间剩余的元素
  while (r < right.length) {
    result.push(right[r++])
  }

  return result
}

const mergeSort = (nums) => {
  // 递归结束条件
  if (nums.length <= 1) return nums
  // 分成两部分
  const mid = Math.floor(nums.length / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  // 递归
  left = mergeSort(left)
  right = mergeSort(right)
  // 合并
  return merge(left, right)
}

console.log(mergeSort(nums)) // [1, 1, 2, 3, 4, 5];
