/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    function inOrder(myRoot) {
        if(!myRoot) return [];
        return [...inOrder(myRoot.left), myRoot.val, ...inOrder(myRoot.right)]
    }
    const sortedArr = inOrder(root)
    
    function constructTree(arr) {
        if(!arr.length) return null;
        
        const mid = Math.floor(arr.length / 2);
        const node = new TreeNode(arr[mid])
        node.left = constructTree(arr.slice(0, mid));
        node.right = constructTree(arr.slice(mid+1));
        
        return node;
    }
    return constructTree(sortedArr);
};
// @lc code=end

