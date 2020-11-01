/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  const adjacency = Array.from({length:numCourses},()=>[]);
  prerequisites.forEach(item=>{
    indegrees[item[0]]++;
    adjacency[item[1]].push(item[0]);
  })
  const q = [];
  let stack =[];
  for(let i=0;i<numCourses;i++){
    if(indegrees[i]==0){q.push(i);stack.push(i)}
  }
  while(q.length){
    const n = q.shift();
    numCourses--;
    adjacency[n].forEach((item,index)=>{
      if(--indegrees[item] ==0){
        q.push(item)
        stack.push(item);
      }
    })
  }
  if(numCourses==0){
    return stack
  }else{
    return []
  }
};
// @lc code=end

