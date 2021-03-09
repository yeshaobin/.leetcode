/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    getParentIndex(i) {
      return (i - 1) >>> 1;
    }
    shiftUp(index) {
      if (index == 0) {
        return;
      }
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
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
      if (this.heap[leftIndex] < this.heap[index]) {
        this.swap(leftIndex, index);
        this.shiftDown(leftIndex)
      }
      if (this.heap[rightIndex] < this.heap[index]) {
        this.swap(rightIndex, index);
        this.shiftDown(rightIndex)
      }
    }
    pop() {
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
    }
    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
  }
  const h = new MinHeap()
  nums.forEach(n => {
    h.insert(n)
    if (h.size() > k) {
      h.pop()
    }
  })
  return h.peek()
};

findKthLargest = function (nums, k) {
  let lo = 0,
    hi = nums.length-1;
    k = nums.length - k;
  while (lo <= hi) {
    const p = quick(nums,lo,hi);
    if (p < k) {
      // 第 k 大的元素在 nums[p+1..hi] 中
      lo = p + 1;
    } else if (p > k) {
      // 第 k 大的元素在 nums[lo..p-1] 中
      hi = p - 1;
    } else {
      // 找到第 k 大元素
      return nums[p];
    }
  }
  return -1;
  function quick(arr, low = 0, high = arr.length - 1) {
    if (low == high) return low;
    else if(low>high)return;
    let i = low,
      j = high;
    let pivot = arr[high];
    while (i < j) {
      while (arr[i] < pivot && i < j) {
        i++
      }
      if (i < j) {
        arr[j--] = arr[i]
      }
      while (arr[j] > pivot && i < j) {
        j--
      }
      if (i < j) {
        arr[i++] = arr[j]
      }
    }

    //i==j
    arr[i] = pivot;
    return i
  }


  
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end