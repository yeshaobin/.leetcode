/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.95%)
 * Likes:    2739
 * Dislikes: 0
 * Total Accepted:    388K
 * Total Submissions: 1.2M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(!s||s.length===0)return '';
  let res = s[0]
  const dp = []
  for(let i=s.length-1;i>=0;i--){
    dp[i]=[]
    for(let j=i;j<s.length;j++){
      if(j-i===0){
        dp[i][j]=true
      }else if(j-i===1&&s[i]===s[j]){
        dp[i][j]=true
      }else if(s[i]===s[j]&&dp[i+1][j-1]){
        /**
         * 在循环中i向左走 j向右走
         * i j 是两个指针,i向右走,j向左走,如果此时还能相等就是回文
         */
        dp[i][j]=true
      }
      if(dp[i][j]&&j-i+1>res.length){
        res = s.slice(i,j+1)
      }
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end