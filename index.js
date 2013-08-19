var check = require('check-types');
var path = require('path');
var fs = require('fs');
var trie = require('trie');

function initDictionary(filename) {
  check.verifyString(filename, 'missing filename');
  var txt = fs.readFileSync(filename, 'utf-8');
  var words = txt.split(/\s/);
  console.log('have', words.length, 'words');
  console.log(words[0], words[1]);

  var d = trie.createTrieFromArray(words);
  return d;
}

var start = new Date();
var dictionary = initDictionary(path.join(__dirname, 'boggleDictionary.txt'));
var finish = new Date();
console.log('dictionary init took', finish - start, 'ms');
console.log(dictionary)

module.exports = {
  isWord: function (word) {
    return dictionary.lookup(word);
  },
  isWordPrefix: function (str) {
    return dictionary.isValidPrefix(word);
  }
};