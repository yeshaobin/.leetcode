/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let len = digits.length;
  let arr = [];
  const table = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  for (let i = 0; i < len; i++) {
    let num = digits[i]
    if(arr.length===0){
      arr=arr.concat(table[num])
    }else{
      arr.forEach((item1,index1)=>{
        arr[index1]=table[num].map(item2=>{
          return item1+item2
        })
      })
      arr = arr.reduce((last,now,index)=>{
        if(now instanceof Array){
          last = last.concat(now)
        }else{
          last.push(now)
        }
        return last
      },[])    
    }
    
  }
 
  return arr
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end