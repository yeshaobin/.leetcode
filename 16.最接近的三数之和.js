/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a,b)=>a-b)
  let ans,temp2=Infinity;
  for(let i=0;i<nums.length;i++){
    let l=i+1,r=nums.length-1;
    while(l<r){
      let temp = nums[i]+nums[l]+nums[r]
      if(Math.abs(temp-target)<temp2){
        temp2 = Math.abs(temp-target)
        ans = temp
      }
      temp-target>0?r--:l++
    }
  }
  return ans
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = threeSumClosest;
// @after-stub-for-debug-end