/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length==0){
    return 0;
  }
  let previous1 = 0,previous2 = 0,ans=0;
  for(let i=0;i<nums.length;i++){
    ans = Math.max(ans,previous2+nums[i]);
    previous2 = previous1
    previous1 = ans
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rob;
// @after-stub-for-debug-end