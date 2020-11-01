/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  const adjacency =  Array.from({length:numCourses},()=>[]);
  for (let i = 0; i < prerequisites.length; i++) {
    const element = prerequisites[i];
    adjacency[element[1]].push(element[0]);
    indegrees[element[0]]++;
  }
  const q = [];
  for(let i=0;i<numCourses;i++){
    if(indegrees[i]===0){q.push(i)}
  }
  while(q.length){
    const n = q.shift();
    numCourses--;
    adjacency[n].forEach((item,index)=>{
      const c = adjacency[n][index];
      if(--indegrees[c]==0){q.push(c)}
    })
  }
  return numCourses===0;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = canFinish;
// @after-stub-for-debug-end