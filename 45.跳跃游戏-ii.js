/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = Array.from({length:nums.length},()=>Infinity);
    dp[0]=0;
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<=nums[i]&&(i+j<=nums.length-1);j++){
            dp[i+j] = Math.min(dp[i+j],dp[i]+1)
        }
    }
    return dp[nums.length-1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = jump;
// @after-stub-for-debug-end