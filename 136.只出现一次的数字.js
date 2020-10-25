/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map()
  for(let i=0;i<nums.length;i++){
    if(!map.get(nums[i])){
      map.set(nums[i],0)
    }
    map.set(nums[i],map.get(nums[i])+1)
  }
  for (const [key,val] of map) {
    if(val==1){
      return key
    }
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end