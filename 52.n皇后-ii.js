/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = [],path = [];
  function dfs(path,n,r=0,res){
    if(path.length===n){
      res.push([...path])
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
  return res.length
};
// @lc code=end

