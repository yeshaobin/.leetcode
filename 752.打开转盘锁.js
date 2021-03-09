/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function addOne(str, index) {
  const str1 = str.substring().split('');
  str1[index] = str[index] === '9' ? '0' : +str[index] + 1 + ''
  return str1.join('')
}

function decOne(str, index) {
  const str1 = str.substring().split('');
  str1[index] = str[index] === '0' ? '9' : +str[index] - 1 + ''
  return str1.join('')
}
var openLock = function (deadends, target) {
  if(deadends.includes('0000'))return -1;
  let q = ['0000'];
  let step = 0;
  const visited = {};
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let n = q.shift();
      if(deadends.includes(n))continue;
      if(n===target)
        return step;
      for (let j = 0; j < n.length; j++) {
        const up = addOne(n, j);
        if(!visited[up]){
          q.push(up);
          visited[up]=1;
        }
        const down = decOne(n,j);
        if(!visited[down]){
          q.push(down);
          visited[down]=1;
        }
      }
    }
    step++;
  }
  return -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = openLock;
// @after-stub-for-debug-end