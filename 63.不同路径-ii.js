/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(!obstacleGrid.length||!obstacleGrid[0].length)return 0;
  const m = obstacleGrid.length,n=obstacleGrid[0].length;
  const dp = new Array(obstacleGrid.length).fill(null).map(()=>[]);
  for(let i=0;i<obstacleGrid.length;i++){
    dp[i][0]=obstacleGrid[i][0]?0:1;
    if(i>=1){
      dp[i][0]=dp[i-1][0]&&(obstacleGrid[i][0]?0:1)
    }
  }
  for(let j=0;j<obstacleGrid[0].length;j++){
    dp[0][j]=obstacleGrid[0][j]?0:1;
    if(j>=1){
      dp[0][j]=dp[0][j-1]&&(obstacleGrid[0][j]?0:1);
    }
  }
  console.log(dp)
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      if(obstacleGrid[i][j]!==1){
        dp[i][j]=(dp[i-1][j]||0)+(dp[i][j-1]||0)
      }else{
        dp[i][j]=0
      }
    }
  }
  return dp[m-1][n-1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePathsWithObstacles;
// @after-stub-for-debug-end