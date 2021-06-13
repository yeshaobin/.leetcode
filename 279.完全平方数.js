/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    function getSquareList(){
        return Array.from({length:Math.floor(Math.pow(n,0.5))},(v,i)=>(i+1)*(i+1));
    }
    const squareList = getSquareList();
    const dp = Array.from({length:n+1}).fill(Infinity)
    dp[0]=0,dp[1]=1,dp[2]=2,dp[3]=3,dp[4]=1
    for(let i=5;i<=n;i++){
        for(let j=0;j<squareList.length;j++){
            const square = squareList[j]
            if(dp[i-square]!=null){
                dp[i] = Math.min(dp[i-square]+1,dp[i])
            }
        }
    }
    return dp[n]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numSquares;
// @after-stub-for-debug-end