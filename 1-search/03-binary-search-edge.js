/**
 * 给定一个长度为 
 的有序数组 nums ，其中可能包含重复元素。请返回数组中最左一个元素 target 的索引。若数组中不包含该元素，则返回 -1
 */
const nums1 = [1, 3, 6, 6, 6, 8, 12, 15, 23, 26, 31, 35]

const binarySearchInsertion = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      // 首个小于target的元素在[i, mid - 1]区间内
      right = mid - 1
    }
  }

  return left
}

// 查找左边界
const binarySearchLeft = (nums, target) => {
  const index = binarySearchInsertion(nums, target)
  return nums[index] === target ? index : -1
}

console.log(binarySearchLeft(nums1, 6)) // 2

// 查找右边界
const binarySearchRight = (nums, target) => {
  // 查找target + 1的插入位置, 右边界就是插入位置减1
  const index = binarySearchInsertion(nums, target + 1) - 1
  return nums[index] === target ? index : -1
}

console.log(binarySearchRight(nums1, 6)) // 4;
