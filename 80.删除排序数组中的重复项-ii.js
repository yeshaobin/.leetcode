/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i=0;
  while(i+1<nums.length){
    let len=1;
    while(nums[i]===nums[i+1]){
      len++;
      i++;
    }
    if(len>2){
      nums.splice(i-len+1,len-2);
      i-=len-2;
    }
    i++;
  }
  return nums.length
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end