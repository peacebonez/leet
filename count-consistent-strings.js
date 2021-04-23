/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!allowed.includes(word[i])) break
      if (i === word.length - 1) count++
    }
  }
  return count
}


console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))
