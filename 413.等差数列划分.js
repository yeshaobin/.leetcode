/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const dp = Array(nums.length).fill(0);
    for(let i=2;i<nums.length;i++){
        if(nums[i]-nums[i-1]==nums[i-1]-nums[i-2]){
            dp[i] = dp[i-1]+1
        }
    }
    return dp.reduce((a,b)=>a+b)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numberOfArithmeticSlices;
// @after-stub-for-debug-end