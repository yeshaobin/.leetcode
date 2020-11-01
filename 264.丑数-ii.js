/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) { 
  let p2 = (p3 = p5 = 1);
  const dp = Array(n + 1); // 下标0的选项不用
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    // PS: 三个if是并列关系，不是互斥关系，在于会有重合的情况，如丑数6 = 丑数2*3，也 = 丑数3*2
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }
  return dp[n]

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nthUglyNumber;
// @after-stub-for-debug-end