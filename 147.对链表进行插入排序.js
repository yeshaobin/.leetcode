/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  // 边界条件
  // const ListNode = head.constructor
  // if (!head||!head.next) return head;
  // let dummy = new ListNode(-1);
  // dummy.next = head;
  // let cur = head;
  // let pre = dummy;
  // while (true) {
  //   while (true) {
  //     //找到比cur小的放在cur节点的后面
  //     let b = cur
  //     while (b.next && b.next.val >= cur.val) {
  //       b = b.next
  //     }
  //     if (b.next == null) break;
  //     //b.next>cur.val
  //     let c = b.next
  //     b.next = b.next.next
  //     c.next = cur
  //     pre.next = c
  //     cur = c;
  //   }
  //   pre = cur;
  //   cur = cur.next;
  //   if(cur.next==null)break;
  // }
  // return dummy.next

  let newHead = new ListNode(0)
  while(head){
      const t = head
      head = head.next
      let cur = newHead
      while(cur){
          if(!cur.next || t.val <= cur.next.val){
              [cur.next, t.next] = [t, cur.next]
              break
          }
          cur = cur.next
      }
  }
  return newHead.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = insertionSortList;
// @after-stub-for-debug-end