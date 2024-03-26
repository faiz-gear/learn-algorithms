// 桶排序：采用了一种映射函数，将要排序的数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。
// 时间复杂度：O(n+k) 空间复杂度：O(n+k) 稳定性：稳定

const nums = [3, 5, 1, 7, 9, 6, 8, 2, 4, 0]

function bucketSort(nums, bucketSize) {
  if (nums.length === 0) {
    return nums
  }

  // 求最大值和最小值
  const minValue = Math.min(...nums)
  const maxValue = Math.max(...nums)

  // 桶的初始化
  const DEFAULT_BUCKET_SIZE = 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = new Array(bucketCount)

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < nums.length; i++) {
    const index = Math.floor((nums[i] - minValue) / bucketSize)
    buckets[index].push(nums[i])
  }

  // 对每个桶进行排
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b)
  }

  // 合并所有的桶
  let index = 0
  for (const bucket of buckets) {
    for (const num of bucket) {
      nums[index++] = num
    }
  }

  return nums
}

console.log(bucketSort(nums, 5)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
