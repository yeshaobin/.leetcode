/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function dfs(candidates,begin,length, target,path,res){
    if(target<0){
      return ;
    }
    if(target===0){
      res.push(path)
    }
    for(let i=begin;i<length;i++){
      let candidate = candidates[i];
      dfs(candidates,i,length,target-candidate,path.concat(candidate),res)
    }
}
var combinationSum = function (candidates, target) {
  let res = [];
  if(candidates.length==0){
    return [];
  }
  let path = [];
  dfs(candidates,0,candidates.length,target,path,res)
  return res
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end