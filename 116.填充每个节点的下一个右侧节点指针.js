/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if(!root)return root;
  let q = [root]
  while (q.length) {
    let len = q.length;
    while (len--) {
      let n = q.shift()
      if(len==0){
        n.next = null
      }else{
        n.next = q[0]
      }
      if (n.left) {
        q.push(n.left)
      }
      if (n.right) {
        q.push(n.right)
      }
    }
  }
  return root
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = connect;
// @after-stub-for-debug-end