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
  if(!s.length)return 0;
  let res=1;
  for(let i=0;i<s.length;i++){
    if(i<s.length&&s[i]==s[i+1]){
      continue;
    }   
    let j=i+1;
    let map = new Map()
    map.set(s[i],i);
    while(!map.has(s[j])&&j<s.length){
      map.set(s[j],j);
      res=Math.max(res,j-i+1);
      j++;
    } 
    i = map.get(s[j]);
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end