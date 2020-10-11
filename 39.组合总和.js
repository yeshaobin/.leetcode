/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function sum(arr) {
  let res = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    res += element
  }
  return res
}

function clearArr(arr) {
  arr = arr.map(item => item.sort())
  for (let i = 0; i < arr.length - 1; i++) {
    let arr1 = arr[i]
    for (let j = i + 1;j<arr.length; j++) {
      let arr2 = arr[j]
      if (arr2.join('') == arr1.join('')) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
var combinationSum = function (candidates, target) {
  let ans = [];

  function recusive(candidates, target, arr) {
    for (let i = 0; i < candidates.length; i++) {
      let copyarr=[...arr]
      if (candidates[i] + sum(copyarr) <= target) {
        copyarr.push(candidates[i])
        if (sum(copyarr) === target) {
          ans.push(copyarr)
        } else {
          recusive(candidates, target, [...copyarr])
        }
      } else {
        continue;
      }
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    let candidate = candidates[i];
    let arr = [];
    if (candidate <= target) {
      arr.push(candidate)
      if (sum(arr) === target) {
        ans.push(arr)
      }
      recusive(candidates, target, arr)
    }
  }
  ans = clearArr(ans)
  return ans;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end