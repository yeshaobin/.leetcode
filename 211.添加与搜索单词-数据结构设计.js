/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function TrieNode(word) {
  this.next = Object.create(null);
  this.isEnd = false;
}
var WordDictionary = function () {
  this.root = new TrieNode()
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const iterator of word) {
    if (!node.next[iterator]) {
      node.next[iterator] = new TrieNode();
    }
    node = node.next[iterator];
  }
  node.isEnd = true
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, root = null) {
  let node;
  if (root === null) {
    node = this.root;
  } else {
    node = root;
  }
  for (let i = 0; i < word.length; i++) {
    const iterator = word[i];
    if (node.next[iterator]) {
      node = node.next[iterator]
    } else if (iterator === '.') {
      let res = false;
      for (const key in node.next) {
        const root = node.next[key];
        res = res || this.search(word.slice(i + 1), root)
      }
      return res;
    } else {
      return false
    }
  }
  return node.isEnd;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
// @after-stub-for-debug-begin
module.exports = WordDictionary;
// @after-stub-for-debug-end