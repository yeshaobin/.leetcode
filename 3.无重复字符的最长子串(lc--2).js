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
  //es6集合保存不重复的内容
  const occ = new Set()
  // 获取当前字符串的长度
  const n = s.length
  //设置指针
  let rk = -1
  //设置最大的字符串的长度
  let ans = 0;
  for(let i=0;i<n;i++){
    if(i>0){
      occ.delete(s.charAt(i-1))
    }
    while(rk+1<n&&!occ.has(s.charAt(rk+1))){
      occ.add(s.charAt(rk+1))
      rk++
    }
    //判断当前是否是最大长度
    ans = Math.max(ans,rk-i+1)
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end