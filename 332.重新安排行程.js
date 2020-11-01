/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const adjacency = {};
  tickets.forEach(item=>{
    adjacency[item[0]]=adjacency[item[0]]||[]
    adjacency[item[0]].push(item[1])
  })
  // console.log(adjacency)
  const res = [];
  for (const key in adjacency) {
    adjacency[key].sort((a,b)=>a.localeCompare(b))
  }
  let start = 'JFK';
  function dfs(n){
    if(!n)return;  
    while(adjacency[n]&&adjacency[n].length){
      let to = adjacency[n].shift();
      dfs(to)
    }
    res.push(n)
   
  }
  dfs(start);
  return res.reverse()
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findItinerary;
// @after-stub-for-debug-end