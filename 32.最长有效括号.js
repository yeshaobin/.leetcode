/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if(!s)return 0;
  let dp = new Array(s.length).fill(0);
  let res = 0;
  for(let i=0;i<s.length;i++){
    if(i>0&&s[i]==')'){
      if(s[i-1]=='('){
        dp[i] = (i-2>=0?dp[i-2]+2:2)
      }else if(s[i-1]===')'&& i - dp[i - 1] - 1 >= 0 && s.charAt(i - dp[i - 1] - 1) == '('){
        dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestValidParentheses;
// @after-stub-for-debug-end