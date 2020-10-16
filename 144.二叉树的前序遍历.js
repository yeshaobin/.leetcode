/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [],
    stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      res.push(root.val)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return res
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = preorderTraversal;
// @after-stub-for-debug-end