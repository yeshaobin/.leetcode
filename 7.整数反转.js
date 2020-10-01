/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.67%)
 * Likes:    2223
 * Dislikes: 0
 * Total Accepted:    477.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let char  = x>0?'+':'-'
  x = Math.abs(x)
  x = x.toString().split('').reverse().join('')
  if(x>2**31-1||x<-(2**31)) return 0
  return +(char + x)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end