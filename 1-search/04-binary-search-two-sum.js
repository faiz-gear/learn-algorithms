/**
 * 给定一个整数数组 nums 和一个目标元素 target ，请在数组中搜索“和”为 target 的两个元素，并返回它们的数组索引。返回任意一个解即可。
 */
const nums = [2, 7, 11, 15]
const target = 13

// hash： 时间复杂度O(n), 空间复杂度O(n)， 空间换时间
const binarySearchTwoSum = (nums, target) => {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (hash[diff] !== undefined) {
      return [hash[diff], i]
    } else {
      hash[nums[i]] = i
    }
  }

  return []
}

console.log(binarySearchTwoSum(nums, target)) // [0, 2]
