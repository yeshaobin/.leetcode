/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [],path = [],length=nums.length;
  function dfs(arr,path,res){
    if(path.length===length){
      res.push([...path]);
      return 
    }
    for(let i=0;i<arr.length;i++){
      let a = arr.splice(i,1)
      path = path.concat(a)
      dfs(arr,path,res)
      path.pop()
      arr.splice(i,0,a[0])
    }
  }
  dfs(nums,path,res)
  // console.log(res)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end