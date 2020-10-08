/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }


  //从后向前找
  let i = nums.length - 1;
  while (i > 0) {
    if (nums[i] <= nums[i - 1]) {
      i--;
    } else {
      break
    }
  }
  if (i === 0) {
    let p = 0,
      q = nums.length - 1;

    //如果i指向了第一个元素，则证明此时是字典排序的最后一个，也证明此时数组是降序排列，应该输出整体升序排列
    //快速reverse
    while (p <= q) {
      swap(nums, p++, q--)
    }
    return;
  }

  //从前向后找
  let j = i;
  let SELECT = nums[i - 1];
  //找到比nums[i-1]大的，最小的值并跟nums[i-1]进行交换
  while (nums[j] >= SELECT) {
    j++;
    if (j === nums.length) break;
  }
  while (nums[j - 1] === SELECT) j--;
  swap(nums, i - 1, j - 1)
  let p = i,
    q = nums.length - 1;
  while (p < q) {
    swap(nums, p++, q--)
  }
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = nextPermutation;
// @after-stub-for-debug-end