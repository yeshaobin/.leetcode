/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  //debug
  let ListNode = head.constructor
  let dummy = new ListNode();
  dummy.next = head;
  const result = dummy
  let remainLength=0;
  while (head) {
    //遍历长度,顺便添加双向
    remainLength++;
    head = head.next;
  }
  
  let pre = result;
  while (remainLength >= k) {
    //reverse操作
    pre = reverseK(pre,k);
    remainLength-=k;
  }
  if(remainLength>0&&remainLength<k){
    //剩下的小于k的数不用reverse
  }
  function reverseK(pre,k){
    let stack = []
    let end = pre.next //
    let start = pre
    for(let i=0;i<k;i++){
      stack.unshift(end)
      end=end.next
    }
    let peek = stack[0].next
    while(stack.length){
      start.next = stack.shift()
      start = start.next
    }
    start.next = peek //将start.next 指向end.next
    return start
  }
  return result.next
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = reverseKGroup;
// @after-stub-for-debug-end