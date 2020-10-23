/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if(!headA||!headB)return null;
  let len1=0, len2=0;
  let a = headA;
  let b = headB
  while (headA) {
    len1++;
    headA = headA.next
  }
  while (headB) {
    len2++;
    headB = headB.next
  }
  let different = len1 - len2;
  if (different >= 0) {
    console.log('a大于b')
    while (different) {
      different--;
      a = a.next
    }
  } else {
    different = Math.abs(different)
    while (different) {
      different--;
      b = b.next;
    }
  }
  while (a && b) {
    if (a == b) {
      return a
    } else {
      a = a.next;
      b = b.next;
    }
  }
  return null

};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end