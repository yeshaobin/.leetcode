/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	let down = 1,
		up = 1;
	if (nums.length <= 1) return nums.length;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			up = down + 1;
		} else if (nums[i] < nums[i - 1]) {
			down = up + 1;
		}
	}
    return Math.max(up,down)
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = wiggleMaxLength;
// @after-stub-for-debug-end
