/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let lenArr = strs.map((item)=>item.length)
  let minLen=lenArr[0];
  for(let i=0;i<lenArr.length;i++){
    if(lenArr[i]<minLen){
      minLen=lenArr[i]
    }
  }
  function findIndex(strs){
    let index=0;
    while(index<minLen){
      let example = strs[0][index];
      for(let i=1;i<strs.length;i++){
        if(example!=strs[i][index]){
         return index
        }
      }
      index++;
    }
    return index
  }
  let index= findIndex(strs)
  if(index<=0){
    return ''
  }else{
    return strs[0].substring(0,index)
  }
  
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end