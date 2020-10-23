/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m == n) {
    return head;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let temp = dummy;
  //走到m-1的位置上去
  for (let i = 0; i < m - 1; i++) {
    temp = temp.next
  }
  //为了防止m=1就把now的上一个位置为null
  let last = null;
  let now = temp.next;
  for (let i = 0; i <= n - m; i++) {
    let next = now.next;
    now.next = last;
    last = now;
    now = next;
  }
  //现在的now到了第n个节点,last-1为n-1个节点，last:2<--3<--4
  // console.log(temp.val,last,now.val)
  temp.next.next = now //找到第m个节点链接到链表的n
  temp.next = last
  return dummy.next
};
// @lc code=end