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
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  pop() {
    if (this.size() === 1) {
      return this.heap.pop()
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
// var mergeKLists = function (lists) {
//   if(lists.length===0){
//     let node = new ListNode()
//     return node.next
//   }
//   function mergeSort(lists) {
//     if (lists.length < 2) return lists;
//     let length = lists.length;
//     let left = lists.slice(0, Math.floor(length / 2))
//     let right = lists.slice(Math.floor(length / 2))
//     let a = mergeSort(left)
//     let b = mergeSort(right)
//     return merge(a, b)
//   }

//   function merge(a, b) {
//     /**
//      * * @param {ListNode[]} a
//      * * @param {ListNode[]} b
//      *   @return {ListNode} c
//      */
//     a = a[0]
//     b = b[0]
//     let dummy = new ListNode(0)
//     let node = dummy
//     while (a && b) {
//       if (a.val < b.val) {
//         node.next = new ListNode()
//         node.next.val = a.val
//         node = node.next
//         a = a.next
//       } else {
//         node.next = new ListNode()
//         node.next.val = b.val
//         node = node.next
//         b = b.next
//       }
//     }
//     while (a) {
//       node.next = new ListNode()
//       node.next.val = a.val
//       node = node.next
//       a = a.next
//     }
//     while (b) {
//       node.next = new ListNode()
//       node.next.val = b.val
//       node = node.next
//       b = b.next
//     }
//     return [dummy.next]
//   }
//   let result =  mergeSort(lists)
//   return result[0] 
// };
var mergeKLists = function (lists) {
  let h = new MinHeap();
  const res = new ListNode(-1);
  let p = res;
  lists.forEach(l => {
    if (l) {
      h.insert(l)
    }
  })
  while (h.size()) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if (n.next) {
      h.insert(n.next);
    }
  }
  return res.next
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end