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
  // const dp = Array(amount+1).fill(Infinity);
  // dp[0]=0;
  // for(let i=1;i<amount+1;i++){
  //   coins.forEach((coin)=>{
  //     if(i-coin<0)return ;
  //     dp[i] = Math.min(dp[i],dp[i-coin]+1) 
  //   })
  // }
  // return dp[amount]==Infinity?-1:dp[amount]
  const m = coins.length;
  const dp = Array(m+1).fill(null).map(()=>Array(amount+1).fill(Infinity))
  for(let i=0;i<=amount;i++){
    dp[0][i] = Infinity;
  }
  for(let i=0;i<=m;i++){
    dp[i][0] = 0;
  }
  for(let i=1;i<=m;i++){
    const coin = coins[i-1]
    for(let j=1;j<=amount;j++){
      if(j-coin>0){
        dp[i][j] = Math.min(dp[i][j-coin]+1,dp[i-1][j])
      }else if(j-coin==0){
        dp[i][j]=1
      }else if(j-coin<0){
        dp[i][j]=dp[i-1][j]
      }
    }
  }
  return dp[m][amount]==Infinity?-1:dp[m][amount]


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = coinChange;
// @after-stub-for-debug-end