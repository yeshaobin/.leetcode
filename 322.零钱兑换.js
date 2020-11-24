/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount+1).fill(Infinity);
  dp[0]=0;
  for(let i=1;i<amount+1;i++){
    coins.forEach((coin)=>{
      if(i-coin<0)return ;
      dp[i] = Math.min(dp[i],dp[i-coin]+1) 
    })
  }
  return dp[amount]==Infinity?-1:dp[amount]

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end