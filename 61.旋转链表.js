/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head
  }
  let node = head,len=0,prev = null;
  while(node){
    len++;
    prev = node
    node= node.next;
  }
  prev.next = head;
  node = prev;//让node在链表的末尾，移动len-k（k<len）位
  let a = len-(k%len);
  console.log(a)
  while(a--){
    node = node.next;
  }
  let ans = node.next;
  node.next = null;
  return ans

};
// @lc code=end