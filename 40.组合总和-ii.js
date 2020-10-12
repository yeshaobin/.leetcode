/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function dfs(candidates,begin,target,path,res){
  if(target<0){return}
  if(target===0){res.push(path)}
  for(let i=begin;i<candidates.length;i++){
    let candidate = candidates[i];
    dfs(candidates,i+1,target-candidate,path.concat(candidate),res)
    while(candidate===candidates[i+1]){
      i++;
    }
    // console.log(path,res)
  }
}
var combinationSum2 = function(candidates, target) {
  let res = [];
  let path = [];
  if(candidates.length==0){
    return res
  }
  candidates=candidates.sort()
  dfs(candidates,0,target,path,res)
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combinationSum2;
// @after-stub-for-debug-end