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
  let ans=0,stack = [];heights=[0,...heights,0]
  for(let i=0;i<heights.length;i++){
    while(stack.length&&heights[i]<heights[stack[stack.length-1]]){
      const left = heights[stack.pop()];
      const width = i - stack[stack.length-1] -1;
      ans = Math.max(ans,width*left)
    }
    stack.push(i)
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = largestRectangleArea;
// @after-stub-for-debug-end