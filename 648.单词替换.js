/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function TrieNode() {
  this.next = Object.create(null);
  this.isEnd = false;
}

function Trie() {
  this.root = new TrieNode()
}
Trie.prototype.insert = function (word) {
  if (!word) return false;
  let node = this.root;
  for (const iterator of word) {
    if (node.isEnd) {
      return;
    }
    if (!node.next[iterator]) {
      node.next[iterator] = new TrieNode();
    }
    node = node.next[iterator];
  }
  node.isEnd=true;
  return true;
}
Trie.prototype.simply = function (word) {
  let res = '';
  let node = this.root;
  let p1 = 0,p2 = node;
  while(word[p1] in p2.next&&!p2.isEnd){
    p2=p2.next[word[p1]];
    p1++;
  }
  if(p2.isEnd){
    p2 = node;
    p1 = 0;
    while(word[p1] in p2.next &&!p2.isEnd){
      res+=word[p1]
      p2=p2.next[word[p1]];
      p1++;
    }
    return res;
  }else{
    return word;
  }
}
var replaceWords = function (dictionary, sentence) {
  let trie = new Trie();
  dictionary.forEach(item => {
    trie.insert(item)
  })
  const strArr = String.prototype.split.call(sentence, ' ')
  strArr.map((item, index) => {
    strArr[index] = trie.simply(item);
  })
  return strArr.join(' ')
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = replaceWords;
// @after-stub-for-debug-end