/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prevNums = new Map();
    for (let index = 0; index < nums.length; index++) {
      const curNum = nums[index];
      if(!prevNums.has(target-curNum)){
        prevNums.set(curNum,index);
      }else{
        return [prevNums.get(target-curNum),index];
      }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end