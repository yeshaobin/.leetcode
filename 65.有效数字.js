/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const graph={
    0:{'blank':0,'sign':1,'.':2,'digit':6},
    1:{'digit':6,'.':2},
    2:{'digit':3},
    3:{'digit':3,'e':4},
    4:{'sign':7,'digit':5},
    5:{'digit':5},
    6:{'digit':6,'.':3,'e':4},
    7:{'digit':5}
  }
  let state = 0;
  for (let c of s.trim()) {
    if(c>='0'&&c<='9'){
      c='digit';
    }else if(c===' '){
      c = 'blank';
    }else if(c==='+'||c==='-'){
      c='sign';
    }
    state = graph[state][c];
    if(!state)return false;
  }
  if(state==3||state==5||state==6){
    return true
  }
  return false
};
// @lc code=end

