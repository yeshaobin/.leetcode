/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root)return [];
  const res = [];
  function dfs(root,path,res){
    if(!root){return}
    if(!root.left&&!root.right){
      res.push(path.concat(root.val))
    }
    dfs(root.left,path.concat(root.val),res)
    dfs(root.right,path.concat(root.val),res)
  }
  dfs(root,[],res)
  return res.map(item=>item.join('->'))
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end