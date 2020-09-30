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
    let prevNums = {}
    for(let i=0;i<nums.length;i++){
      const curNum = nums[i];
      const targetNum = target - curNum;
      //从prevNums中看是否能够获取到targetNum的索引值
      const targetNumIndex = prevNums[targetNum]
      if(targetNumIndex===undefined){
        prevNums[curNum] = i;//如果判断当前没有目标值对应数的索引
      }else{
        return [targetNumIndex,i]
      }
    }
};
// @lc code=end

