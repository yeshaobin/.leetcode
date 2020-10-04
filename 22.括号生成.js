/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [],str='';
  function dfs(str,left,right,res){
    if(left>right){
      return
    }
    if(left===0&&right===0){
      res.push(str)
      return
    }
    if(left>0){
      dfs(str+'(',left-1,right,res)
    }
    if(right>0&&left<right){
      dfs(str+')',left,right-1,res)
    }
  }
  dfs(str,n,n,res)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateParenthesis;
// @after-stub-for-debug-end