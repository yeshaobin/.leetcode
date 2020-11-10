/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length){return [];}
  let res = [];
  let m = matrix.length,n=matrix[0].length;
  let state = 1;
  let i=j=0;
  let count = 0;
  while(count<(Math.round(m/2))&&count<(Math.round(n/2))){
    if(res.length==n*m){return res}
    switch (state) {
      case 1:
        while(j<n-count){
          res.push(matrix[i][j])
          j++;
        }
        i=count+1;
        j=n-count-1;
        state++;
        break;
      case 2:
        while(i<m-count){
          res.push(matrix[i][j])
          i++;
        }
        i=m-count-1;
        j=n-2-count;
        state++;
        break;
      case 3:
        while(j>=count){
          res.push(matrix[i][j])
          j--;
        }
        j=count
        i=m-2-count
        state++;
        break;
      case 4:
        while(i>=count+1){
          res.push(matrix[i][j])
          i--;
        }
        state=1;
        count++;
        i=count;
        j=count;
        break;  
      default:
        break;
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end