/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle==='')return 0;
  for(let i=0;i<haystack.length;i++){
    if(haystack[i]===needle[0]){
      let j=i,k=0;
      while(k<needle.length){
        if(needle[k]===haystack[j]){
          k++,j++;
        }else{
          break
        }
      }
      if(k===needle.length){
        return i
      }else{
        continue
      }
    }
  }
  return -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = strStr;
// @after-stub-for-debug-end