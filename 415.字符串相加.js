/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  num2 = num2.padStart(num1.length,'0')
  let sum = "",
    temp = 0,
    add = 0;
  for (let index = num1.length - 1; index >= 0; index--) {
    temp = parseInt(num1[index]) + (parseInt(num2[index]) || 0) + add;
    sum = (temp % 10) + sum;
    add = temp >= 10 ? 1 : 0;
  }
  if (add) {
    sum = add + sum;
  }
  return sum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end
