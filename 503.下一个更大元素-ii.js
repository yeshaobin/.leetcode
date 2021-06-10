/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const res = {},stack = [];
    for(let i=0;i<2*nums.length;i++){
        while(stack.length&&nums[i%nums.length]>nums[stack[stack.length-1]]){
            const index = stack.pop();
            res[index] = nums[i%nums.length];
        }
        stack.push(i%nums.length)
    }
    stack.forEach(item=>{
        res[item]=res[item]==undefined?-1:res[item];
    })
    return nums.map((item,index)=>res[index]) ;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElements;
// @after-stub-for-debug-end