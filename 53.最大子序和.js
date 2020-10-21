/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);//局部最大
    max = Math.max(max, prev); //全局最大
  }
  return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end