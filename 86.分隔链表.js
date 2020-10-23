/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if(!head)return head;
  let node = head;
  let leftDummy=new ListNode();
  let rightDummy=new ListNode();
  let left = leftDummy;
  let right = rightDummy;
  while(node){
    if(node.val<x){
      left.next = node;
      left = left.next;
    }else{
      right.next = node;
      right = right.next;
    }
    node = node.next;
  }
  left.next = rightDummy.next;
  right.next = null;
  return leftDummy.next
};
// @lc code=end