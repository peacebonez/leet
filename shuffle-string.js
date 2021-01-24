const restoreString = (s, indices) => {
  const outputArr = [];

  for (let i = 0; i < s.length; i++) {
    outputArr[indices[i]] = s[i];
  }
  return outputArr.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
