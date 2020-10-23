/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // const ListNode = head.constructor;
  let dummy = new ListNode();
  dummy.next = head;
  let len = 0;
  while(head){
    head=head.next
    len++
  }
  for(let size=1;size<len;size<<=1){
    let cur = dummy.next;
    let tail = dummy;
    while(cur){
      let left = cur;
      let right = cut(left,size)
      cur = cut(right,size)
      tail.next = merge(left,right)
      while(tail.next){
        tail=tail.next
      }
    }
  }
  return dummy.next;
  function cut(start,size){
    let node = start;
    while(--size&&node){
      node=node.next
    }
    if(!node){return null}
    let res = node.next
    node.next = null;
    return res
  }
  function merge(left,right){
    let head = new ListNode()
    let dummy = head
    while(left&&right){
      if(left.val<right.val){
        head.next = new ListNode(left.val)
        head = head.next
        left = left.next
      }else{
        head.next = new ListNode(right.val)
        head = head.next
        right = right.next
      }
    }
    while(left){
      head.next = new ListNode(left.val)
      head = head.next
      left = left.next
    }
    while(right){
      head.next = new ListNode(right.val)
      head = head.next
      right = right.next
    }
    return dummy.next
  }

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end