/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head||!head.next)return head;
    let a=head;
    let arr = [];
    while(a){
      arr.push(a)
      a=a.next
    }
    let i=0;
    while(i<Math.floor(arr.length/2)&&(arr.length-1-i)>i+1){
      arr[i].next = arr[arr.length-1-i]
      arr[arr.length-1-i].next = arr[i+1]
      i++;
    }
    if(arr.length%2==0){
      arr[i+1].next=null
    }else{
      arr[i].next=null
    }
    return arr[0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end