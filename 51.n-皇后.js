/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [],path = [];
  function dfs(path,n,r=0,res){
    if(path.length===n){
      res.push([...path].map(({x,y},index)=>{
        let s = '.'.repeat(y)+'Q'+'.'.repeat(n-y-1)
        return s 
      }))
      return;
    }
    for(let i=0;i<n;i++){ //每列
      let condition = !path.some(({x,y})=>( r==x||i==y||i+r==x+y||i-r==y-x))
      if(condition){
        path.push({x:r,y:i})
        dfs(path,n,r+1,res)
        path.pop()
      }
    }

  }
  dfs(path,n,0,res)
  return res
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end