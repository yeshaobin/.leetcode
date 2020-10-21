/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let degree = 1;
  for (const iterator of preorder.split(',')) {
    if(degree==0){
      return false
    }
    if(iterator=='#'){
      degree--
    }else{
      degree++
    }
  }
  return degree===0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidSerialization;
// @after-stub-for-debug-end