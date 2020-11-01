/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  function newTree(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd) {
      return null;
    }
    let root = new TreeNode(preorder[preStart]);
    const mid = map.get(preorder[preStart])
    const leftTreeLength = mid - inStart;
    const rightTreeLength = inEnd - mid;
    root.left = newTree(preStart+1,preStart+leftTreeLength,inStart,mid-1);
    root.right = newTree(preStart+leftTreeLength+1,
      preStart+leftTreeLength+rightTreeLength,
      mid+1,
      inEnd
      )
    return root
  }
  return newTree(0,preorder.length-1,0,inorder.length-1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end