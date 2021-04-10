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
  if (!s.length) return 0;
  let result = 1;
  const m = {};
  let memoLeft = 0;
  s.split("").forEach((char, index) => {
    /*
      最近一次当前字符出现的位置如果大于左边界 左边界就要右移到最近一次当前字符出现的位置+1
      比如
      abcb 碰到第二个b的时候应该移到上一次记录的b的右边一位
    */
    
    memoLeft = m[char]>=memoLeft?m[char]+1:memoLeft;
    m[char]=index;
    result = Math.max(result,index-memoLeft+1)
  });
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end
