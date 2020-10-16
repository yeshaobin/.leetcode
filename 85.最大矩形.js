/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalRectangle = function (matrix) {
  if (!matrix.length) {
    return 0;
  }
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0) {
        matrix[i][j] = +matrix[i][j];
      } else {
        matrix[i][j] =
          matrix[i][j] == 1 ? +matrix[i][j] + +matrix[i - 1][j] : 0;
      }
    }
  }
  return matrix.reduce(
    (area, cur) => Math.max(area, largestRectangleArea(cur)),
    0
  );
};
// 来源于 84. 柱状图中最大的矩形  的答案
var largestRectangleArea = function (heights) {
  const stack = [];
  let area = 0;
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = i - stack[stack.length - 1] - 1;
      area = Math.max(area, w * h);
    }
    stack.push(i);
  }
  return area;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = maximalRectangle;
// @after-stub-for-debug-end