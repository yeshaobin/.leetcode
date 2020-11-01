/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (!edges || n < 2) return [0];
  const adjacency = new Array(n).fill(0).map(()=>[]);
  edges.forEach(item=>{
    adjacency[item[0]].push(item[1])
    adjacency[item[1]].push(item[0])
  })
  let leaves = []
  adjacency.forEach((item,index)=>{
    if(item.length==1){
      leaves.push(index)
    }
  })
  while(n>2){
    n-=leaves.length;
    let nextLeaves = [];
    for (const leave of leaves) {
      //adjacency[leave]的length为1，pop就没了，弹出另外一边
      const another = adjacency[leave].pop()
      const anotherEdges= adjacency[another]
      anotherEdges.splice(anotherEdges.indexOf(leave),1)
      if(anotherEdges.length==1){nextLeaves.push(another)}
    }
    leaves = nextLeaves
  }
  return leaves
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMinHeightTrees;
// @after-stub-for-debug-end