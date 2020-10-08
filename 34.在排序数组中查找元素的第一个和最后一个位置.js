/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binSearch(nums, target) {
    let l = 0,
      r = nums.length - 1;
    let mid;
    while (l <= r) {
      mid = parseInt((l + r) / 2);
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] > target) {
        r = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
  let mid = binSearch(nums, target);
  if (mid === -1) {
    return [-1, -1];
  }
  let l = mid,
    r = mid,
    arr = [];
  while (nums[l] === nums[mid]) {
    arr.push(l--)
  }
  while (nums[r] === nums[mid]) {
    arr.push(r++)
  }
  
  return [l+1,r-1]
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = searchRange;
// @after-stub-for-debug-end