/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // const ListNode = (l1&&l1.constructor)||(l2&&l2.constructor)
  let list = new ListNode(0)
  let head = list
  while (l1||l2) {
    list.next = new ListNode()
    list = list.next
    if(l1&&!l2){
      list.val=l1.val
      l1=l1.next
      continue
    }
    if(l2&&!l1){
      list.val=l2.val
      l2=l2.next
      continue
    }
    if(l1.val<l2.val){
      list.val=l1.val
      l1=l1.next
    }else{
      list.val=l2.val
      l2=l2.next
    }
  }
  return head.next
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end