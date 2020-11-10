/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array.from({length:m+1},()=>Array(n+1).map(()=>[]))
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      if(i==1||j==1){
        dp[i][j]=1;
      }else{
        dp[i][j]=0;
      }
    }
  }
  for(let i=2;i<=m;i++){
    for(let j=2;j<=n;j++){
      dp[i][j]=dp[i-1][j]+dp[i][j-1];
    }
  }
  return dp[m][n];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePaths;
// @after-stub-for-debug-end