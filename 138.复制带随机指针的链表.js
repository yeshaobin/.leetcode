/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  function deepCopy(head){
    if (head == null) return null;
    let node = new Node(head.val)
    map.set(head, node)
    node.next = deepCopy(head.next)
    if(head.random!=null){
      node.random = map.get(head.random)
    }
    return node
  }
  return deepCopy(head)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = copyRandomList;
// @after-stub-for-debug-end