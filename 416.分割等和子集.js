/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b)=>a+b);
    if(sum%2!=0)return false;
    const W = sum/2;
    const dp = Array(nums.length+1).fill(false).map(()=>Array(W+1).fill(false));
    
    //背包问题，不限制物品数量只限制了价值
    for(let i=0;i<nums.length;i++){
        dp[i][0] = true;
    }
    for(let i=1;i<=nums.length;i++){
        for(let j=1;j<=W;j++){
            if(j-nums[i-1]<0){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j]||dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[nums.length][W]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canPartition;
// @after-stub-for-debug-end