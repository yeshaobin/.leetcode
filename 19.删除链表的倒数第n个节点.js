/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // let i=0;
  // let node = head
  // while(node){
  //   i++;
  //   node = node.next
  // }
  // //此时i=length
  // node = head;
  // let j=0,previous;
  // while(node){
  //   if(i===n){
  //     head = head.next;
  //     break;
  //   }
  //   j++;
  //   previous = node
  //   node = node.next
  //   if(j==i-n){
  //     previous.next = node.next
  //   }  
  // }
  // return head
  /**
   * 双指针方法
   * 边界是删除头节点
   */
  
  let dummy = new head.constructor(0)
  dummy.next = head
  let first =dummy,second = dummy;
  for(let i=1;i<=n+1;i++){ //之所以要n+1是因为要删除n节点需要倒数n+1的节点的next 等于倒数n-1位置的地方
    first = first.next
  }
  while(first!=null){
    first=first.next
    second=second.next
  }
  second.next = second.next.next
  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end