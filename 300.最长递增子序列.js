/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length;
    const dp = Array(n).fill(1);
    dp[0]=1
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLIS;
// @after-stub-for-debug-end