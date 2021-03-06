/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(node, p, q) {
  let res;

  function dfs(node, p, q) {
    if (!node) return false;
    let b = dfs(node.left, p, q);
    let a = dfs(node.right, p, q);
    if (a && b) {
      res = res || node
    }
    
    if (node.val == p.val || node.val == q.val) {
      if (a || b) {
        res = res || node
      }
      return true
    }
    return a||b
  }
  dfs(node, p, q)
  return res
};
// @lc code=end

