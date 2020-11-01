/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
  if(!root)return true;
   function isSameTree(left,right){
     if(!left&&!right)return true;
     if(!left||!right||left.val!=right.val)return false;
     return isSameTree(left.right,right.left)&&isSameTree(left.left,right.right)     
   }
  return isSameTree(root.left,root.right);
};
// @lc code=end

