/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(nums.length===0)return 0;
  let i=0
  for(let j=0;j<nums.length;j++){
    if(nums[j]!==val){
      nums[i]=nums[j]
      i++;
    }
  }
  return i
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end