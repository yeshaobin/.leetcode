/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [],temp=sum,path=[]
  function dfs(root,temp,path,res){
    if(!root)return;
    if(root.val==temp&&!root.left&&!root.right){
      res.push(path.concat(root.val))
    }
    dfs(root.left,temp-root.val,path.concat(root.val),res)
    dfs(root.right,temp-root.val,path.concat(root.val),res)
  }
  dfs(root,temp,path,res)
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = pathSum;
// @after-stub-for-debug-end