/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if(!matrix||!matrix[0])return [];
  const m = matrix.length;
  const n = matrix[0].length;
  const flow1 = Array.from({length:m},()=>new Array(n).fill(false))
  const flow2 = Array.from({length:m},()=>new Array(n).fill(false))
  const dfs = (r,c,flow)=>{
    flow[r][c] = true;
    [[r-1,c],[r+1,c],[r,c-1],[r,c+1]].forEach(([nextr,nextc])=>{
      if(
        //保证在矩阵中
        nextr>=0&&nextr<m&&
        nextc>=0&&nextc<n&&
        //保证节点没有被访问，访问的都为true了
        !flow[nextr][nextc]&&
        //逆流而上
        matrix[nextr][nextc]>=matrix[r][c]
      ){
        dfs(nextr,nextc,flow)
      }
    })
  }
  for (let r = 0; r < m; r++) {
    dfs(r,0,flow1)
    dfs(r,n-1,flow2)
  }
  for (let c = 0; c < n; c++) {
    dfs(0,c,flow1)
    dfs(m-1,c,flow2)
  }
  const res = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if(flow1[r][c]&&flow2[r][c]){
        res.push([r,c])
      }
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = pacificAtlantic;
// @after-stub-for-debug-end