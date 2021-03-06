/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(!intervals.length)return [];
  intervals.sort((a,b)=>a[0]-b[0]);
  let prev = intervals[0];
  let res=[prev]
  for(let i=0;i<intervals.length;i++){
    let curr = intervals[i];
    if(curr[0]<=prev[1]){
      prev[1]=Math.max(prev[1],curr[1]);
    }else{
      res.push(curr);
      prev=curr;
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end