/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n<2){return 1}
  let dp0=1,dp1=1;
  for(let i=2;i<=n;i++){
    const temp = dp0;
    dp0 = dp1;
    dp1 = dp1+temp;
  }
  return dp1;
};
// @lc code=end

