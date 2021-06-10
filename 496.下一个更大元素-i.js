/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const res = {},stack = [];
    for(let i=0;i<nums2.length;i++){
        while(stack.length&&nums2[i]>stack[stack.length-1]){
            const value = stack.pop();
            res[value] = nums2[i];
            if(!stack.length){break;}
        }
        stack.push(nums2[i])
    }
    stack.forEach(item=>{
        res[item]=-1;
    })
    return nums1.map(item=>res[item]) ;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElement;
// @after-stub-for-debug-end