/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  let res = false;
  function dfs(n, s) {
    if(!n.left&&!n.right&&s==sum){
      res = true;
    }
    if(n.left){dfs(n.left,s+n.left.val)}
    if(n.right){dfs(n.right,s+n.right.val)}
  }
  dfs(root,root.val)
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end