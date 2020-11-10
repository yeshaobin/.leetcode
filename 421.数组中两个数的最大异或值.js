/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = -Infinity;
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
      max =Math.max(max,nums[i]^nums[j])
    }
  }
  return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMaximumXOR;
// @after-stub-for-debug-end