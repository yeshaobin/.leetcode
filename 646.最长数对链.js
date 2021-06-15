/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[0]-b[0]);
    const dp = Array(pairs.length).fill(1)
    for(let i=0;i<pairs.length;i++){
        for(let j=0;j<i;j++){
            if(pairs[i][0]>pairs[j][1]){
                dp[i] = Math.max(dp[j]+1,dp[i]);
            }
        }
    }
    return Math.max(...dp)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findLongestChain;
// @after-stub-for-debug-end