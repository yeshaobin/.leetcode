/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *  
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let strArr = s.split('')
  let i = 0,
    len = 0,
    maxLen = 0,
    memoj = 0;
    while (i < strArr.length) {
    let flag = true
    let char = strArr[i]
    for (let j = memoj; j <= i-1; j++) {
      if (char == strArr[j]) {
        len = 0;
        memoj = j+1;
        i = j;
        flag = false
        break;
      }
    }
    if (flag) {
      len++
      if (len > maxLen) {
        maxLen = len
      }
    }
    i++;
  }
  return maxLen
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end