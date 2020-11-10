/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
function TireNode(){
  this.next = Object.create(null);
  this.isEnd=false;
}
function Trie(){
  this.root = new TireNode()
}
Trie.prototype.insert=function(word){
  if(!word)return false;
  let node = this.root;
  for (const iterator of word) {
    if(!node.next[iterator]){
      node = node.next[iterator]
    }
    node = node.next[iterator]
  }
  node.isEnd=true;
  return true;
}
Trie.prototype.startsWith=function (word) {  
  for (const char of word) {
    if(node.next[char]){
      node=node.next[char]
    }else{
      return false;
    }
  }
  return true;
}
var palindromePairs = function(words) {
  var i, j, wordLength, prefix, suffix, reversedPrefix, reversedSuffix;
  var dict = {};
  var result = [];
  var length = words.length;

  if (!words || length === 0) {
    return [];
  }

  for (i = 0; i < length; i += 1) {
    dict[words[i]] = i;
  }

  for (i = 0; i < length; i += 1) {
    wordLength = words[i].length;

    prefix = '';
    suffix = words[i];
    reversedPrefix = '';
    reversedSuffix = suffix.split('').reverse().join('');

    for (j = 0; j < wordLength + 1; j += 1) {
      if (j !== 0) {
        prefix += words[i][j - 1];
        suffix = suffix.slice(1);
        reversedPrefix = words[i][j - 1] + reversedPrefix;
        reversedSuffix = reversedSuffix.slice(0, reversedSuffix.length - 1);
      }

      if (j !== 0 && prefix === reversedPrefix && reversedSuffix in dict && dict[reversedSuffix] !== i) {
        result.push([dict[reversedSuffix], i]);
      }

      if (suffix === reversedSuffix && reversedPrefix in dict && dict[reversedPrefix] !== i) {
        result.push([i, dict[reversedPrefix]]);
      }
    }
  }
  return result;
 
};
// @lc code=end

