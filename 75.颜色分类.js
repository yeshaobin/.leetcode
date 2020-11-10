/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function quick(arr,start,end){
   if(end-start<=0)return;
    let pivot = arr[end];
    let l=start,r=end;
    while(l<r){
      while(l<r&&arr[l]<pivot){l++}
      l<r&&(arr[r--]=arr[l])
      while(l<r&&arr[r]>pivot){r--}
      l<r&&(arr[l++]=arr[r])
    }
    arr[l]=pivot;
    quick(arr,start,r-1);
    quick(arr,r+1,end);
  }
  quick(nums,0,nums.length-1);
  return nums;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end