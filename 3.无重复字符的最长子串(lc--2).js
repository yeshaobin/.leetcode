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
  let l=0;
  const map = new Map()
  let res=0;
  for(let r=0;r<s.length;r++){
    if(map.has(s[r])&&map.get(s[r])>=l){
      l = map.get(s[r])+1;
    }
    res = Math.max(res,r-l+1)
    map.set(s[r],r)
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end