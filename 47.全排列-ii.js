/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let path=[],res=[],length = nums.length
  nums = nums.sort()
  function dfs(arr,path,res){
    if(path.length==length){
      res.push([...path])
      return
    }
    for(let i=0;i<arr.length;i++){
      while(arr[i]==arr[i+1]&&i+1<arr.length){
        i++;
      }   
      let a = arr.splice(i,1)
      path=path.concat(a)
      dfs(arr,path,res)
      path.pop()
      arr.splice(i,0,a[0])
    }
  }
  dfs(nums,path,res)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permuteUnique;
// @after-stub-for-debug-end