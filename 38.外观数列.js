/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let time = 1;
  let ans = '1';
  let str = '',
    count = 1,
    i = 0;
  if (n == 1) {
    return ans;
  }
  while (i < ans.length) {
    while (ans[i] == ans[i + 1] && i + 1 < ans.length) {
      count++;
      i++;
    }
    //找出count加上去
    str = str+count + ans[i] ;
    count=1;
    //如果指针到了最后一个字符,time++再重新来一次计算
    if (i == ans.length - 1) {     
      ans = str;
      str = '';
      count = 1;
      i = -1;
      time++;
      if(time===n){
        return ans
      }
    }
    i++;
  }

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countAndSay;
// @after-stub-for-debug-end