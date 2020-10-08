/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function binSearch(nums, target) {
    let l = 0,
      r = nums.length - 1;
    let mid = 0;
    while (l <= r) {
      mid = parseInt((l + r) / 2);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else {
        return [mid, null];
      }
    }
    return [mid, -1];
  }
  let [index, result] = binSearch(nums, target);
  if (result === null) {
    return index
  } else if (result === -1) {
    if(nums[index]>=target){
      while(nums[index]>target&&index>0){
        index--;
      }
      if(index===0&&nums[index]>target){
        return 0;
      }
      return index+1;
    }
    if(nums[index]<=target){
      while(nums[index]<target&&index<nums.length){
        index++;
      }
      if(index===nums.length-1&&nums[index]<target){
        return nums.length
      }
      return index
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end