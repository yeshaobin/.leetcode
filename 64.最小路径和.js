/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(!grid||!grid[0]){return 0}
  const dp = [];
  
  for(let i=0;i<grid.length;i++){
    if(dp[i]===undefined){
      dp[i]=[];
    }
    dp[0][0]=grid[0][0]
    for(let j=0;j<grid[0].length;j++){
      if(i===0&&j!=0){
        dp[0][j]=grid[0][j]+dp[0][j-1];
      }
      if(j===0&&i!=0){
        dp[i][0]=grid[i][0]+dp[i-1][0];
      }
    }
  }
 
  for(let i=1;i<grid.length;i++){
    for(let j=1;j<grid[0].length;j++){
      dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
    }
  }
  return dp[grid.length-1][grid[0].length-1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minPathSum;
// @after-stub-for-debug-end