/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const reg = /\b\w+\b$/;
  const res =s.trim().match(reg);
  return (res&&res[0].length)||0;
};
// @lc code=end

