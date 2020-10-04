/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if(lists.length===0){
    let node = new ListNode()
    return node.next
  }
  function mergeSort(lists) {
    if (lists.length < 2) return lists;
    let length = lists.length;
    let left = lists.slice(0, Math.floor(length / 2))
    let right = lists.slice(Math.floor(length / 2))
    let a = mergeSort(left)
    let b = mergeSort(right)
    return merge(a, b)
  }

  function merge(a, b) {
    /**
     * * @param {ListNode[]} a
     * * @param {ListNode[]} b
     *   @return {ListNode} c
     */
    a = a[0]
    b = b[0]
    let dummy = new ListNode(0)
    let node = dummy
    while (a && b) {
      if (a.val < b.val) {
        node.next = new ListNode()
        node.next.val = a.val
        node = node.next
        a = a.next
      } else {
        node.next = new ListNode()
        node.next.val = b.val
        node = node.next
        b = b.next
      }
    }
    while (a) {
      node.next = new ListNode()
      node.next.val = a.val
      node = node.next
      a = a.next
    }
    while (b) {
      node.next = new ListNode()
      node.next.val = b.val
      node = node.next
      b = b.next
    }
    return [dummy.next]
  }
  let result =  mergeSort(lists)
  return result[0] 
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end