/**
 * 最大容量问题
 * 输入一个数组 ht，其中的每个元素代表一个垂直隔板的高度。数组中的任意两个隔板，以及它们之间的空间可以组成一个容器。
容器的容量等于高度和宽度的乘积（面积），其中高度由较短的隔板决定，宽度是两个隔板的数组索引之差。
请在数组中选择两个隔板，使得组成的容器的容量最大，返回最大容量。
 */

const ht = [3, 8, 5, 2, 7, 7, 3, 4]

// 贪心策略：采用双指针法，因为移动较高隔板的指针，不可能使容器的容量增大（因为高度是由短板决定的），所以移动较矮隔板的指针
const maxCapacity = (ht) => {
  let max = 0
  let i = 0
  let j = ht.length - 1
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(ht[i], ht[j]))
    if (ht[i] < ht[j]) {
      i++
    } else {
      j--
    }
  }
  return max
}

console.log(maxCapacity(ht)) // 28
