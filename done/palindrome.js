const isPalindrome = (s) => {
  const alphaNumeric = s
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char));
  for (
    let i = 0, j = alphaNumeric.length - 1;
    i < alphaNumeric.length / 2;
    i++, j--
  ) {
    let front = alphaNumeric[i];
    let back = alphaNumeric[j];
    if (front !== back) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
