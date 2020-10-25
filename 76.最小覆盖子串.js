/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = r = 0;
  let need = new Map()
  let res=''
  for (const iterator of t) {
    need.set(iterator, need.has(iterator) ? (need.get(iterator) + 1) : 1)
  }
  let needType = need.size
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c,need.get(c) - 1)
      if(need.get(c)===0){
        needType--;
      }
    };
    
    while(needType==0){
      const newRes = s.substring(l,r+1)
      if(!res||newRes.length<res.length){
        res = newRes
      }
      const c2 = s[l];
      if(need.has(c2)){
        need.set(c2,need.get(c2)+1)
        if(need.get(c2)==1){
          needType++
        }
      }
      l++;
    }
    r++;
  }
  return res
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end