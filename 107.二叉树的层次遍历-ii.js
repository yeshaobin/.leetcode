/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root)return [];
  const q = [root];
  let res = []
  while(q.length){
    let len = q.length;
    res.push([])
    while(len--){
      let n= q.shift();
      res[res.length-1].push(n.val);
      if(n.left){q.push(n.left)}
      if(n.right){q.push(n.right)}
    }
  }
  return res.reverse()
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrderBottom;
// @after-stub-for-debug-end