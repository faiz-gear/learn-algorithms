// 插入排序：将数组分为两部分，已排序和未排序，每次从未排序中取出一个元素插入到已排序中
// 时间复杂度：O(n^2) 空间复杂度：O(1)
const nums = [4, 1, 3, 1, 2, 5]

const insertionSort = (nums) => {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    // 未排序区间的第一个元素base
    let base = nums[i]
    let j = i - 1
    // 从已排序区间的末尾开始，找到第一个小于base的元素
    while (j >= 0 && nums[j] > base) {
      // 将元素后移
      nums[j + 1] = nums[j]
      j--
    }
    // 插入base
    nums[j + 1] = base
  }

  return nums
}

console.log(insertionSort(nums)) // [1, 1, 2, 3, 4, 5];
