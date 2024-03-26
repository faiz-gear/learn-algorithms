// 堆排序： 采用二叉堆的数据结构，将数组构建成一个大顶堆，然后将堆顶元素与堆尾元素交换，然后重新调整堆，直到堆的大小为1
// 时间复杂度：O(nlogn) 空间复杂度：O(1) 稳定性：不稳定
const nums = [4, 1, 3, 1, 2, 5]

const heapify = (nums, i, len) => {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i

  if (left < len && nums[left] > nums[largest]) {
    // 如果左节点大于父节点，记录左节点的索引为最大值
    largest = left
  }

  if (right < len && nums[right] > nums[largest]) {
    // 如果右节点大于父节点，记录右节点的索引为最大值
    largest = right
  }

  if (largest !== i) {
    // 如果最大值不是父节点，交换父节点和最大值节点的值
    ;[nums[i], nums[largest]] = [nums[largest], nums[i]]
    // 递归调整其他不满足大顶堆的子节点
    heapify(nums, largest, len)
  }
}

const heapSort = (nums) => {
  let len = nums.length
  // 构建大顶堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(nums, i, len)
  }
  // 交换堆顶元素与堆尾元素，然后重新调整堆
  for (let i = len - 1; i > 0; i--) {
    ;[nums[0], nums[i]] = [nums[i], nums[0]]
    heapify(nums, 0, i)
  }
  return nums
}

console.log(heapSort(nums))
