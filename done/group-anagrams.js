const groupAnagrams = function (strs) {
  const output = [];
  const sortedChars = [];

  for (let word of strs) {
    const sortedWord = word.split("").sort().join(""); //tea = aet
    sortedChars.push(sortedWord);
  }

  const referenceChars = [...new Set(sortedChars)];

  for (chars of referenceChars) {
    let wordsHolder = [];
    for (let i = 0; i < sortedChars.length; i++) {
      if (chars === sortedChars[i]) {
        wordsHolder.push(strs[i]);
      }
    }
    output.push(wordsHolder);
  }

  return output;
};

console.log(groupAnagrams(["tea", "eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
