/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 二分查找找到两个升序数组的分割点,找分割点索引
   * 在两个数组里面用二分查找就可以了
   */
  function binSearch(nums,target,l,r){
    
    while(l<=r){
      mid = parseInt((r-l)/2)
      if(nums[l+mid]>target){
        r=l+mid-1
      }else if(nums[l+mid]<target){
        l = l+mid+1;
      }else{
        return l+mid
      }
    }
    return -1;
  }
  if(nums.length<3){
    for(let i=0;i<3;i++){
      if(target===nums[i]){
        return i
      }
    }
    return -1;
  }
  function findSeperate(arr, start, end) {
    let i=1;
    let l = start,
      r = start + i;
    if (arr[l + 1] < arr[l]) {
      return l;
    }
    while (arr[l] < arr[r]) {
      l = r;
      i*=2;
      r = Math.min(r +i, end);
      if(l===end)return null;
    }
    
    return findSeperate(arr,l,r)
  }
  let seperate = findSeperate(nums,0,nums.length-1);
  if(seperate==null){
    return binSearch(nums,target,0,nums.length-1)
  }else{
    if(target>=nums[0]){
      return binSearch(nums,target,0,seperate)
    }else{
      return binSearch(nums,target,seperate+1,nums.length-1)
    }
  }
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end