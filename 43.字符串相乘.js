/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let m = num1.length,
    n = num2.length;
  let res = Array(m + n).fill(0);
  for (let i = m-1; i >=0; i--) {
    for (let j = n-1; j >=0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + (+num1[i]) * (+num2[j])
      res[p1] += parseInt(sum / 10);
      res[p2] = sum % 10;
    }
  }
  if (res[0] === 0) res.shift()
  return res.join('')
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = multiply;
// @after-stub-for-debug-end