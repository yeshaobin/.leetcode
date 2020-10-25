/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // if(!root)return [];
  // const queue = [[root,0]];
  // const arr = [];
  // while(queue.length){
  //   const [n,l] = queue.shift();
  //   if(!arr[l]){arr[l]=[];}
  //   arr[l].push(n.val)
  //   if(n.left){queue.push([n.left,l+1]);}
  //   if(n.right){queue.push([n.right,l+1]);}
  // }
  // return arr
  if(!root)return [];
  const res = [];
  const queue = [root]
  while(queue.length){
    let len = queue.length;
    res.push([]);
    while(len--){
      const n = queue.shift();
      res[res.length-1].push(n.val);
      if(n.left){queue.push(n.left);}
      if(n.right){queue.push(n.right);}
    }
  }
  return res
};
// @lc code=end

