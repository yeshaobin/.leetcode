/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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


// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// let tree = new TreeNode(3)
// tree.left = new TreeNode(1)
// tree.right = new TreeNode(4)
// tree.left.right = new TreeNode(2)
var lowestCommonAncestor = function (node, p, q) {
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
// lowestCommonAncestor(tree, new TreeNode(2), new TreeNode(3))
// @lc code=end
// @after-stub-for-debug-begin
module.exports = lowestCommonAncestor;
// @after-stub-for-debug-end