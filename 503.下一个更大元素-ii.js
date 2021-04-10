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
    const s = [],res=[];
    const n = nums.length
    for(let i=2*n-1;i>=0;i--){
        let top = s.length-1
        while(s.length&&s[top]<=nums[i]){
            s.pop()
            top = s.length-1
        }
        res[i%n] = s.length?s[s.length-1]:-1
        s.push(nums[i%n])
    }
    return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElements;
// @after-stub-for-debug-end