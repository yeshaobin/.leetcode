/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  let dummy = new ListNode('a')
  dummy.next = head;
  let node = dummy,prev = dummy;
  while(node&&node.next){
   
    let flag = false;
    if(node.val!==node.next.val){
      prev = node
    }
    while(node.next&&(node.val == node.next.val)){
      flag = true
      node.next = node.next.next
    }
    if(flag){
      prev.next = node.next
    }
    node = prev.next
  }
  return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end