/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let queue = [
    [root, 1]
  ]
  while (queue.length) {
    let [n, l] = queue.shift()
    if (!n.left && !n.right) return l;
    if (n.left) {
      queue.push([n.left, l + 1])
    }
    if (n.right) {
      queue.push([n.right, l + 1])
    }
  }

};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = minDepth;
// @after-stub-for-debug-end