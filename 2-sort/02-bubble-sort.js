// 冒泡排序: 两两比较相邻记录的关键字，如果反序则交换，直到没有反序的记录为止
// 时间复杂度O(n^2)，空间复杂度O(1)
const nums = [4, 1, 3, 1, 2, 5]

const bubbleSort = (nums) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }

  return nums
}

console.log(bubbleSort(nums)) // [1, 1, 2, 3, 4, 5];
