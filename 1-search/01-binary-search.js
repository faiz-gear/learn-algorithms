/**
 * 给定一个长度为 
 的数组 nums ，元素按从小到大的顺序排列且不重复。请查找并返回元素 target 在该数组中的索引。若数组不包含该元素，则返回 
 */

//  左闭右闭
// const binarySearch = (nums, target) => {
//   let left = 0
//   let right = nums.length - 1

//   //  left > right 退出循环
//   while (left <= right) {
//     const mid = left + ((right - left) >> 1)
//     if (nums[mid] < target) {
//       left = mid + 1
//     } else if (nums[mid] > target) {
//       right = mid - 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// }

// 左闭右开
const binarySearch = (nums, target) => {
  let left = 0
  let right = nums.length

  // left = right 退出循环
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid
    } else {
      return mid
    }
  }

  return -1
}

const nums = [2, 5, 7, 11, 24, 44, 56, 78, 99]
const target = 2
console.log(binarySearch(nums, target)) // 5
