/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  /**
   * 1. 记录元素出现的个数
   * 2. 遍历遇到重复的个数判断是否将要删除,如果删除记录表中相应元素个数-1.
   * 判断条件是栈顶的元素如果更大,就可以删除,如果更小就不要删除,确保在栈顶的元素是比较小的
   * 3. 把不用被删除的元素放进栈中
   */
  let stack = [],
    isInStack  = {},
    remainCount = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!remainCount[char]) {
      remainCount[char] = 0;
    }
    remainCount[char]++;
    isInStack [char] = false;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let peek = stack[stack.length - 1];
    remainCount[char]--;
    if (isInStack [char]) {
      continue;
    }
    while (char < peek && stack.length && remainCount[peek] > 0) {
      isInStack[stack.pop()] = false;
      peek = stack[stack.length - 1];
    }
    isInStack [char] = true;
    stack.push(char)
  }
  return stack.join('')


}



// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicateLetters;
// @after-stub-for-debug-end