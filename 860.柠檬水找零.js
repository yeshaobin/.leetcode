/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let remain = {5:0,10:0,20:0};
  while(bills.length){
    let money = bills.shift()
    if(money=='5'){
      remain[5]++;
    }else if(money=='10'){
      remain[10]++;
      if(remain[5]>=1){
        remain[5]--;
      }else{return false;}
    }else if (money=='20'){
      remain[20]++;
      if(remain[5]>=1&&remain[10]>=1){
        remain[5]--;
        remain[10]--;
      }else if(remain[5]>=3){
        remain[5]-=3
      }else {
        return false;
      }
    }
  }
  return true
};
// @lc code=end

