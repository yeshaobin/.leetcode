/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length-1;
  let max = 0;
  while(left<=right){
    const area = (right-left)*Math.min(height[left],height[right])
    max = Math.max(area,max)
    if(height[left]<height[right]){
      const lastLeft = height[left]
      left++;
      while(height[left]<=lastLeft&&left<right){
        left++
      }
    }else{
      const lastRight = height[right];
      right--;
      while(lastRight>=height[right]&&left<right){
        right--
      }
    }
  }
  return max
};
// @lc code=end

