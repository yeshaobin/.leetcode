/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let hashSet = new Map()
  while(head){
    if(hashSet.has(head)){
      return head
    }else{
      hashSet.set(head,head)
    }
    head = head.next
  }
  return null
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = detectCycle;
// @after-stub-for-debug-end