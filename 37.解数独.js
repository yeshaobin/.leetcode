/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
  let rowsUsed = Array.from({
    length: 9
  }, () => Array.from({
    length: 10
  }, () => false))
  let colsUsed = Array.from({
    length: 9
  }, () => Array.from({
    length: 10
  }, () => false))
  let boxesUsed = Array.from({
    length: 3
  }, () => {
    return Array.from({
      length: 3
    }, () => new Array(10).fill(false))
  })
  /**
   * 初始化
   */
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j]
      if (col == '.') {
        continue
      } else {
        rowsUsed[i][col] = true;
        colsUsed[j][col] = true;
        boxesUsed[parseInt(i / 3)][parseInt(j / 3)][col] = true
      }
    }
  }
  //递归填充
  // 递归尝试填充数组 
  recusiveArr(board, rowsUsed, colsUsed, boxesUsed, 0, 0);

  function recusiveArr(board, rowsUsed, colsUsed, boxesUsed, i, j) {
    //边界校验
    if (j === board[0].length) {
      j = 0;
      i++;
      if (i === board.length) {
        return true
      }
    }
    if (board[i][j] == '.') {
      for (let num = 1; num <= 9; num++) {
        let canUsed = !(rowsUsed[i][num] || colsUsed[j][num] || boxesUsed[parseInt(i / 3)][parseInt(j / 3)][num])
        if (canUsed) {
          board[i][j] = '' + num;
          rowsUsed[i][num] = true;
          colsUsed[j][num] = true;
          boxesUsed[parseInt(i / 3)][parseInt(j / 3)][num] = true;
          if (recusiveArr(board, rowsUsed, colsUsed, boxesUsed, i, j + 1)) {
            return true
          }
          board[i][j] = '.';
          rowsUsed[i][num] = false;
          colsUsed[j][num] = false;
          boxesUsed[parseInt(i / 3)][parseInt(j / 3)][num] = false;

        }
      }
    } else {
      return recusiveArr(board, rowsUsed, colsUsed, boxesUsed, i, j + 1)
    }
    return false;
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solveSudoku;
// @after-stub-for-debug-end