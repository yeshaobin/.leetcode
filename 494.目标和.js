/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a,b)=>a+b);
    target = Math.abs(target)
    const N = (sum+target)/2;
    if(N%1!=0||sum<target){
        return 0
    }
    const dp = Array(nums.length+1).fill(null).map(()=>Array(N+1).fill(0))
    for(let i=0;i<=nums.length;i++){
        dp[i][0]=1;
    }
    for(let i=1;i<=nums.length;i++){
        const num = nums[i-1];
        for(let j=0;j<=N;j++){  
            dp[i][j] = dp[i - 1][j];
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num];
            }
        }
    }
    return dp[nums.length][N];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findTargetSumWays;
// @after-stub-for-debug-end