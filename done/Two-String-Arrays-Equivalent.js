const arrayStringsAreEqual = (word1, word2) =>
  word1.reduce((acc, cur) => acc + cur, "") ===
  word2.reduce((acc, cur) => acc + cur, "");

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
