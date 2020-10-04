/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let keys = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  let values = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let res = ''
  for(let i=0;i<keys.length;i++){
    while(num/keys[i]>=1){
      let divide = parseInt(num/keys[i])
      num%=keys[i]
      while(divide--){
        res+=values[i]
      }
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intToRoman;
// @after-stub-for-debug-end