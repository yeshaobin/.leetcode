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
  // if (!root) return true;
  // let pre = -Infinity;
  // let res = true;
  // const dfs = (root) => {
  //   if (!root||!res) return;
  //   dfs(root.left);
  //   if (root.val <= pre) {
  //     res = false
  //   }
  //   pre = root.val;
  //   dfs(root.right);
  // }

  // dfs(root);

  // return res
  if (!root) return true;
  const stack = [];
  let pre = -Infinity;
  while(stack.length||root){
    if(root){
      stack.push(root)
      root = root.left;
    }else{
      root = stack.pop();
      if(root.val<=pre){
        return false;
      }
      pre = root.val;
      root = root.right;
    }
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end