/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p&&!q){return true;}
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)

    // if(!p&&!q){return true;}
    // let stack1=[],stack2=[];
    // while((stack1.length||p)||(stack2.length||q)){
    //     if(p||q){
    //         if(!p||!q||p.val!=q.val){
    //             return false;
    //         }
    //         stack1.push(p);
    //         stack2.push(q);
    //         p=p.left;
    //         q=q.left;
    //     }else{
    //         p=stack1.pop()
    //         q=stack2.pop()
    //         p=p.right
    //         q=q.right
    //     }
    // }
    // return true

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSameTree;
// @after-stub-for-debug-end