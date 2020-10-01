/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let reg = new RegExp(p,'g')
  let res = reg.exec(s)
  return Boolean(res)&&res[0]===s
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isMatch;
// @after-stub-for-debug-end