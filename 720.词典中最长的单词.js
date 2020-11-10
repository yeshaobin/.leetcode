/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
function TrieNode(){
  this.next=Object.create(null);
  this.isEnd = false;
}
function Trie(){
  this.root = new TrieNode()
};
Trie.prototype.insert=function(word){
  if(!word)return false;
  let node = this.root;
  for (const iterator of word) {
    if(!node.next[iterator]){
      node.next[iterator]=new TrieNode();
    }
    node=node.next[iterator];
  }
  node.isEnd=true;
};
Trie.prototype.search=function(word){
  if(!word)return false;
  let node = this.root;
  for (const iterator of word) {
    if(node.next[iterator].isEnd){
      node=node.next[iterator]
    }else{
      return false;
    }
  }
  return node.isEnd;
}
var longestWord = function(words) {
  let trie = new Trie()
  for (const word of words) {
    trie.insert(word);
  }
  let length=0,res='';
  for (const word of words) {
    if(trie.search(word)){
      if(word.length>length){
        length=word.length;
        res=word;
      }else if(word.length===length){
        res = res<word?res:word;
      }
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestWord;
// @after-stub-for-debug-end