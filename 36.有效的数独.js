/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = new Array(9),
    cols = new Array(9),
    boxs = new Array(3);
    for(let i=0;i<9;i++){
      rows[i]={}
      cols[i]={}
    }
    for(let i=0;i<9;i++){
      boxs[parseInt(i/3)]=Array.from({length:3},(v,k)=>{return new Array(3)})
      for(let j=0;j<9;j++){
        boxs[parseInt(i/3)][parseInt(j/3)]={}
      }
    }
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
      if(col==='.'){
        continue;
      }
      if (!cols[j][col]) {
        cols[j][col] = 1;
      } else {
        return false;
      }
      if (!rows[i][col]) {
        rows[i][col] = 1;
      } else {
        return false;
      }
      if(!boxs[parseInt(i/3)][parseInt(j/3)][col]){
        boxs[parseInt(i/3)][parseInt(j/3)][col] = 1;
      }else{
        return false;
      }
    }
  }
  return  true;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = isValidSudoku;
// @after-stub-for-debug-end