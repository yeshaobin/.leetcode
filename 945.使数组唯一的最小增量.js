/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  if(!A.length)return 0;
  A.sort((a,b) => a-b);
    let moves = 0;
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] >= A[i]) {
            let increment = A[i-1] - A[i] + 1;
            A[i] += increment;
            moves += increment;
        }
    }
    return moves;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minIncrementForUnique;
// @after-stub-for-debug-end