/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0,
    current = 0,
    stack = [];
  while (current < height.length) {
    while (stack.length && height[current] > height[stack[0]]) {
      let top = stack.shift();
      if (!stack.length) {
        break;
      }
      let distance = current - stack[0] - 1;
      let bounded_height = Math.min(height[current], height[stack[0]]) - height[top];
      ans += distance * bounded_height;
    }
    stack.unshift(current++);
  }
  return ans;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end