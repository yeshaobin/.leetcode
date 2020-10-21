/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let copyStrs = [...strs],hashSet={};
  for(let i=0;i<copyStrs.length;i++){
    copyStrs[i] = copyStrs[i].split('').sort().join('');
    if(!hashSet[copyStrs[i]]){
      hashSet[copyStrs[i]]=[];
    }
    hashSet[copyStrs[i]].push(strs[i]);
  }
  let res = []
  for (const key in hashSet) {
    if (hashSet.hasOwnProperty(key)) {
      let arr = hashSet[key];
      res.push(arr)
    }
  }
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end