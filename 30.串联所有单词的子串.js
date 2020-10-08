/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordsNum = words.length;
  let res = []
  if (wordsNum === 0) {
    return res
  }
  let singleWordLength = words[0].length
  let hashMap1 = {}
  for (const word of words) {
    hashMap1[word] || (hashMap1[word] = 1)
    hashMap1[word] += 1
  }
  for (let i = 0; i < s.length - wordsNum * singleWordLength + 1; i++) {
    let num = 0;
    let hashMap2 = {};
    while (num < wordsNum) {
      let word = s.substring(
        i + num * singleWordLength, 
        i + (num + 1) * singleWordLength
        )
      if (hashMap1[word]) {
        hashMap2[word] || (hashMap2[word] = 1)
        hashMap2[word] += 1;
        if (hashMap2[word] > hashMap1[word]) {
          break
        }
      } else {
        break
      }
      num++;
    }
    if(num===wordsNum){
      res.push(i)
    }
  }
  return res
};
// @lc code=end