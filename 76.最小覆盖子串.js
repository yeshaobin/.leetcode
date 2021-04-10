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
  let l=0;
  const map = new Map();
  t.split('').forEach(item=>{
    map.set(item,map.has(item)?map.get(item)+1:1)
  })
  let needType = map.size;
  let res = '';
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    if(map.has(c)){
      map.set(c,map.get(c)-1);
      if(map.get(c)===0){
        needType-=1;
      }
    }
    while(needType===0){
      // console.log(s.substring(l,r+1))
      const goodString = s.substring(l,r+1);
      if(res!==''){
        res = goodString.length<res.length?goodString:res;
      }else{
        res=goodString;
      }
      if(map.has(s[l])){
        map.set(s[l],map.get(s[l])+1) 
        if(map.get(s[l])===1){
          needType+=1
        }
      }
      l++;
    }
  }
  return res;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end