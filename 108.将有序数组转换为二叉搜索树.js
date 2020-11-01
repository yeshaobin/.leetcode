/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
   }
var sortedArrayToBST = function(nums) {
  function dfs(left,right){
    if(left>right)return null;
    let mid = (left+right)>>>1;
    let root = new TreeNode(nums[mid]);
    root.left = dfs(left,mid-1)
    root.right = dfs(mid+1,right)
    return root
  }
  return dfs(0,nums.length-1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortedArrayToBST;
// @after-stub-for-debug-end