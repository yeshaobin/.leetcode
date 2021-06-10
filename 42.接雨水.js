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
// var trap = function (height) {
//   let ans = 0,
//     current = 0,
//     stack = [];
//   while (current < height.length) {
//     while (stack.length && height[current] > height[stack[0]]) {
//       let top = stack.shift();
//       if (!stack.length) {
//         break;
//       }
//       let distance = current - stack[0] - 1;
//       let bounded_height = Math.min(height[current], height[stack[0]]) - height[top];
//       ans += distance * bounded_height;
//     }
//     stack.unshift(current++);
//   }
//   return ans;
// };
var trap = function (height) {
  let ans = 0,stack = [];
  for(let i = 0;i<height.length;i++){
    while(stack.length&&height[i]>height[stack[stack.length-1]]){
      const midIndex = stack.pop();
      if(!stack.length)break;
      const midHeight = height[midIndex];
      const width = i - stack[stack.length-1] - 1;
      ans+= (Math.min(height[stack[stack.length-1]],height[i])-midHeight)*width;
    }
    stack.push(i)
  }
  return ans
} 
// @lc code=end
// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end