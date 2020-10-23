/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let a = new ListNode()
  a.next = head;
  let b = head;
  let c = copyList = new ListNode();
  while (b) {
      copyList.next = new ListNode(b.val)
      copyList = copyList.next
      b = b.next
  }
  copyList = c.next
  console.log(copyList)
  let r = head;
  let l = null;
  while (r) {
      let temp = r.next;
      r.next = l;
      l = r;
      r = temp;
  }
  // console.log(l)
  while (l && copyList) {
      if (l.val != copyList.val) {
          return false
      }
      l = l.next
      copyList = copyList.next
  }
  return true
};
// @lc code=end