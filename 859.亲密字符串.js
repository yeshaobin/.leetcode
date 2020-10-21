/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length != B.length) {
    return false;
  }
  if (A == B) {
    let s = new Set();
    for (let i = 0; i < A.length; i++) {
      s.add(A.charAt(i));
    }
    return s.size < A.length;
  }
  let diff = [];
  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) != B.charAt(i)) {
      diff.push(i);
    }
  }
  return diff.length == 2 && A.charAt(diff[0]) == B.charAt(diff[1]) && A.charAt(diff[1]) == B.charAt(diff[0]);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buddyStrings;
// @after-stub-for-debug-end