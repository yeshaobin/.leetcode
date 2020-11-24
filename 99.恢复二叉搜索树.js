/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let prev = new TreeNode(-Infinity),node1,node2;
    function traverse(node){
      if(!node){return null;}
      traverse(node.left);
      if(prev.val>node.val){
        node2 = node;
        if(!node1)node1=prev;
      }
      prev = node;
      console.log(node.val);
      traverse(node.right);
    }
    traverse(root);
    [node1.val,node2.val]=[node2.val,node1.val]
};
// @lc code=end

