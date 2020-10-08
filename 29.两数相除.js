/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let res = 0;
  let char = (dividend ^ divisor) >=0 ? '+' : '-';
  
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let temp = divisor
  while(true){
    temp=divisor
    let c= 1
    while(dividend>(temp<<1)&&(temp<<1)>0){
      temp =temp<<1
      c=c<<1
    }
    if(dividend-temp>=0){
      dividend-=temp
      res+=c
    }else{
      break
    }
  }
  res = +(char+res)
  if(res>2**31 -1||res<-(2**31)){
    res=res>0?2**31 -1:-(2**31)
  }
  return res

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = divide;
// @after-stub-for-debug-end