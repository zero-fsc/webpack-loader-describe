// 定义一个元素的最大值和最小值，拿每一个元素进行比较，取大值放最右边，层层比较
export function sortValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[max]) {
        max = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[max]
    arr[max] = temp
  }
  return arr
}