/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
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
      if(index==0){return;}
      const parentIndex = this.getParentIndex(index);
      if(this.heap[parentIndex].value>this.heap[index].value){
        this.swap(parentIndex,index)
        this.shiftUp(parentIndex)
      }
    }
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
    getLeftIndex(i){
      return i*2+1;
    }
    getRightIndex(i){
      return i*2+2;
    }
    shiftDown(index){
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if(this.heap[leftIndex]&&this.heap[leftIndex].value<this.heap[index].value){
        this.swap(leftIndex,index);
        this.shiftDown(leftIndex);
      }
      if(this.heap[rightIndex]&&this.heap[rightIndex].value<this.heap[index].value){
        this.swap(rightIndex,index);
        this.shiftDown(rightIndex);
      }
    }
    pop(){
      this.heap[0]=this.heap.pop();
      this.shiftDown(0);
    }
    peek(){
      return this.heap[0];
    }
    size(){
      return this.heap.length;
    }
  }
  const map = new Map();
  nums.forEach(n=>{
    map.set(n,map.get(n)?map.get(n)+1:1);
  })
  const h= new MinHeap();
  map.forEach((value,key)=>{
    h.insert({value,key});
    if(h.size()>k){
      h.pop();
    }
  })
  return h.heap.map(n=>n.key)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end