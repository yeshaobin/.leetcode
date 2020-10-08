/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  // let ListNode = head.constructor
  let dummy = new ListNode(-1);
  const result = dummy;
  dummy.next = head;
  if(head===null){return result.next}
  let first = head,second = head.next;
  while(first&&second){
    dummy.next = second;
    first.next = second.next;
    second.next = first;

    dummy=first
    first = first&&first.next
    second=first&&first.next
  }
  return result.next
};
// @lc code=end

