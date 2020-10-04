/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let keys = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  let values = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let map = {}
  values.forEach((item,index)=>{
    map[item] = keys[index]
  })
  let ans = 0,i=0;
  while(i<s.length){
    if(i+1<s.length&&map[s.substring(i,i+2)]){
      ans += map[s.substring(i,i+2)]
      i+=2
    }else{
      ans +=map[s.substring(i,i+1)]
      i++
    }
  }
  return ans
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end