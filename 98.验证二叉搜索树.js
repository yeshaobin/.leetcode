/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  let pre = -Infinity;
  let res = true;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (root.val <= pre) {
      res = false
    }
    pre = root.val;
    dfs(root.right);
  }

  dfs(root);

  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end