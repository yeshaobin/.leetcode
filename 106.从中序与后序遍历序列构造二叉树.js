/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(inorder, postorder) {
  const map = new Map();
  for(let i=0;i<inorder.length;i++){
    map.set(inorder[i],i)
  }
  function newTree(inStart,inEnd,postStart,postEnd){
    if(inStart>inEnd){return null;}
    const mid = map.get(postorder[postEnd]);
    const root = new TreeNode(postorder[postEnd]);
    const leftTreeLength= mid - inStart;
    root.left = newTree(inStart,mid-1,postStart,postStart+leftTreeLength-1);
    root.right = newTree(mid+1,inEnd,postStart+leftTreeLength,postEnd-1)
    return root
  }
  return newTree(0,inorder.length-1,0,postorder.length-1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end