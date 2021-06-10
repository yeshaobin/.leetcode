/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 2) {
        return nums[0] || 0;
    }
    function robline(nums,start,end){
        let prev1=0,prev2=0,ans=0;
        for(let i=start;i<=end;i++){
            ans = Math.max(ans,nums[i]+prev2)
            prev2 = prev1;
            prev1 = ans;
        }
        return ans
    }
    return Math.max(robline(nums,0,nums.length-2),robline(nums,1,nums.length-1))
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rob;
// @after-stub-for-debug-end