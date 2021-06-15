/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    //when amount = 0 methods = 1
    // when coins = []  cannot find a way to solve, return 0
    const m = coins.length;
    const n =amount;
    const dp = Array.from({length:m+1},()=>null).map(()=>Array(n+1).fill(0))
    for(let i=0;i<=m;i++){
        dp[i][0] = 1;
    }
    for(let j=0;j<=n;j++){
        dp[0][j] = 0;
    }
    for(let i=1;i<=m;i++){
        const coin = coins[i-1];
        for(let j=1;j<=n;j++){
            if(j-coin>=0){
                dp[i][j] = dp[i][j-coin] + dp[i-1][j]
            }else{
                dp[i][j] =dp[i-1][j]
            }
        }
    }
    return dp[m][n]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = change;
// @after-stub-for-debug-end