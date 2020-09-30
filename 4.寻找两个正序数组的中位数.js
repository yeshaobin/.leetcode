/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (38.78%)
 * Likes:    3240
 * Dislikes: 0
 * Total Accepted:    264.2K
 * Total Submissions: 681.2K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  function mergeSort(arr){
    let len = arr.length;
    if(len<2){
      return arr;
    }
    let middle = Math.floor(len/2);
    let left = arr.slice(0,middle)
    let right =arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
  }
  function merge(left,right){
    let result = []
    while(left.length&&right.length){
      if(left[0]<right[0]){
        result.push(left.shift())
      }else{
        result.push(right.shift())
      }
    }
    while(left.length){
      result.push(left.shift())
    }
    while(right.length){
      result.push(right.shift())
    }
    return result
  }
  let output = mergeSort([...nums1,...nums2])  
  console.log(output)
  let len = output.length,result;
  if(len%2===0){
    result = (output[len/2]+output[len/2-1])/2
  }else{
    result = output[Math.floor(len/2)]
  }
  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end