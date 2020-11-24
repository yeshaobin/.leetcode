/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if(!intervals.length)return [newInterval];
  intervals.push(newInterval)
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

