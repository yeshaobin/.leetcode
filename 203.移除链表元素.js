/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode()
  dummy.next = head;
  let a = dummy;
  while(a&&a.next){
    if(a.next.val==val){
      a.next = a.next.next
    }else{
      a=a.next;
    }
  }
  
  return dummy.next;
};
// @lc code=end

