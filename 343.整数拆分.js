/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp= Array(n+1).fill(0);
    dp[0]=0;
    dp[1]=1;
    for(let i=2;i<=n;i++){
        for(let j=1;j<i;j++){
            dp[i] = Math.max(dp[i],j*(i-j),dp[i-j]*j)
        }
    }
    return dp[n]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = integerBreak;
// @after-stub-for-debug-end