/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let ans = 0,stack=[];
  heights.push(0);
  heights.unshift(0);
  for(let i=0;i<heights.length;i++){
    let rightBound = heights[i];
    while(stack.length&&heights[stack[0]]>rightBound){
      let midHeight = heights[stack.shift()]
      let width = i- stack[0] -1;
      ans = Math.max(ans,width*midHeight)
    }
    stack.unshift(i)
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = largestRectangleArea;
// @after-stub-for-debug-end