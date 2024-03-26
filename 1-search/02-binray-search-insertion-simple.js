/** 给定一个长度为 
 的有序数组 nums 和一个元素 target ，数组不存在重复元素。现将 target 插入数组 nums 中，并保持其有序性。若数组中已存在元素 target ，则插入到其左方。请返回插入后 target 在数组中的索引 */

const nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35]

const binarySearchInsertionSimple = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      // 插入到其左方
      return mid
    }
  }

  // 二分查找结束后，left（是首个大于target的元素） 指向的位置就是插入位置。right（是最后一个小于target的元素
  return left
}

// console.log(binarySearchInsertionSimple(nums, 9))

/** 存在重复元素的情况 */
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

console.log(binarySearchInsertion(nums, 6))
