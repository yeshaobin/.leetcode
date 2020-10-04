/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let ans = []
  nums= nums.sort((a,b)=>a-b);
  for (let i = 0; i <= nums.length - 4; i++) {
    if(i>0&&nums[i]===nums[i-1]){
      continue;
    }
    for (let j = i + 1; j <= nums.length - 3; j++) {
      let l = j + 1,
        r = nums.length - 1;
      while (l < r) {
        let temp = nums[i] + nums[j] + nums[l] + nums[r] - target;
        if (temp === 0) {
          ans.push([nums[i], nums[j], nums[l], nums[r]]);
          while(j <= nums.length - 3&&nums[j]===nums[j+1]){
            j++;
          }
          while(l<r&&nums[l]===nums[l+1]){
            l++;
          }
          while(r<r&&nums[r]===nums[r-1]){
            r--;
          }
          l++;
          r--;
        }else{
          temp>0?r--:l++;
        }

      }
    }
  }
  return ans
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = fourSum;
// @after-stub-for-debug-end