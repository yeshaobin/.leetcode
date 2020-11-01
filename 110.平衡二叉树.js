/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
 function dfs(root){
   if(!root)return 0;
   let left = dfs(root.left) +1;
   let right = dfs(root.right)+1;
   if(Math.abs(left-right) >1)return Infinity;
   return Math.max(left,right)
 }
 return dfs(root)==Infinity?false:true
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = isBalanced;
// @after-stub-for-debug-end