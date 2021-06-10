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
  const stack = [-1];
  let ans = 0;
  for(let i=0;i<s.length;i++){
    if(s[i]=='('){
      stack.push(i)
    }else if(stack.length===1){
      stack[0]=i;
    }else{
      stack.pop()
      ans = Math.max(ans,i-stack[stack.length-1])
    }
  }
  return ans
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestValidParentheses;
// @after-stub-for-debug-end