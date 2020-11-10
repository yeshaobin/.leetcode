/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let profit = 0;
  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     profit += prices[i] - prices[i - 1];
  //   }
  // }
  // return profit
  var min = Number.MAX_SAFE_INTEGER; 
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end