/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  let backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path)
      return;
    }
    for(let i=start;i<nums.length;i++){
      backtrack(path.concat(nums[i]),l,i+1);
    }
  }
  for(let i=0;i<=nums.length;i++){
    backtrack([],i,0);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end