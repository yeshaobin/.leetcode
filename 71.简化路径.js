/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  path = path.split('/');
  for(let i=0;i<path.length;i++){
    if(path[i]==''||path[i]=='.')continue;
    else if(path[i]=='..'){
      stack.pop()
    }else {
      stack.push(path[i])
    }
  }
  return '/'+stack.join('/') 
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = simplifyPath;
// @after-stub-for-debug-end