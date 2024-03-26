// 计数排序：计数排序是一个非基于比较的排序算法，它的优势在于在对一定范围内的整数排序时，它的复杂度为O(n+k)，其中k是整数的范围，这是它的优势所在。
// 时间复杂度：O(n+k) 空间复杂度：O(n+k) 稳定性：稳定

const nums = [3, 5, 1, 7, 9, 6, 8, 2, 4, 0]

// 简单实现 计数排序， 适用于整数排序
// function countingSort(nums) {
//   // 1. 找出最大值
//   const max = Math.max(...nums)
//   // 2. 创建计数数组
//   const counter = new Array(max + 1).fill(0)
//   for(let i = 0; i < nums.length; i++) {
//     counter[nums[i]]++
//   }
//   // 3.排序
//   let index = 0
//   for(let i = 0; i < max + 1; i++) {
//     for(let j = 0; j < counter[i]; j++) {
//       nums[index++] = i
//     }
//   }
//   return nums
// }

// 完整实现，使用前缀和记录元素在结果数组中的位置，可以排序复杂的数据类型
function countingSort(nums) {
  // 1. 找出最大值
  const max = Math.max(...nums)
  // 2. 创建计数数组
  const counter = new Array(max + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]]++
  }

  // 3. 计算前缀和(存的就是元素在结果数组中的位置)
  for (let i = 1; i < counter.length; i++) {
    counter[i] += counter[i - 1]
  }

  // 4.倒序遍历原数组，将元素放到结果数组中的位置（为了稳定排序）
  const res = new Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    res[counter[num] - 1] = num
    counter[num]--
  }

  // 5.将res拷贝到nums
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i]
  }
}

countingSort(nums)
console.log(nums) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
