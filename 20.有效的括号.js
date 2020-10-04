/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length%2===1|s.length===0){
    return false
  }
  let stack = []
  for(let i=0;i<s.length;i++){
    if(s[i]==='('||s[i]==='['||s[i]==='{'){
      stack.push(s[i])
    }else{
      let a = stack.pop();
      if(!(a+s[i]==='()'||a+s[i]==='[]'||a+s[i]==='{}')){
        return false 
      }
    }
  }
  if(stack.length)return false;
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end