const lengthOfLastWord = (s) => {
  if (!s.length) return 0;
  let sArray = s.trim().split(" ");
  return sArray[sArray.length - 1].length;
};

// console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
