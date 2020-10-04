/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  let i = 0;
  let l = i + 1,
    r = nums.length - 1;
  while (i <= nums.length - 3 && nums[i] <= 0) {
    l = i + 1, r = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue
    };
    while (l < r) {
      let temp = nums[i] + nums[l] + nums[r]
      if (temp == 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] == nums[l + 1]) l++;
        while (l < r && nums[r] == nums[r - 1]) r--;
        l++;
        r--;
      } else {
        temp > 0 ? r-- : l++
      }
    }
    i++;
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end