const myAtoi = (s) => {
  const INT_MIN = Math.pow(-2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  let finalNum = "";
  let numberEncountered = false;
  s = s.trimStart();

  if (/[a-z]/i.test(s[0])) return 0;

  const inputTooBig = (num) => {
    if (Number(num) > INT_MAX || Number(num) < INT_MIN)
      return Number(num) > 0 ? INT_MAX : INT_MIN;
  };

  for (let i = 0; i < s.length; i++) {
    if (inputTooBig(finalNum)) return inputTooBig(finalNum);

    if (
      Number(s[i]) ||
      (Number(s[i]) === 0 && typeof Number(s[i]) === "number")
    )
      numberEncountered = true;

    if (!/[0-9-+]/.test(s[i])) return !Number(finalNum) ? 0 : Number(finalNum);

    if (numberEncountered && /[-+]/.test(s[i]))
      return !Number(finalNum) ? 0 : Number(finalNum);

    finalNum += s[i];
  }

  if (inputTooBig(finalNum)) return inputTooBig(finalNum);

  return !Number(finalNum) || !finalNum ? 0 : Number(finalNum);
};

// console.log(myAtoi("-1-"));
// console.log(myAtoi("   -42 "));
// console.log(myAtoi("+1"));
// console.log(myAtoi("000000-42a1234"));
console.log(myAtoi("21474836460"));

// if (
//   /[-+]/.test(s[i]) &&
//   typeof Number(s[i - 1]) &&
//   typeof Number(s[i - 1]) === "number"
// )
//   return !Number(finalNum) ? 0 : Number(finalNum);
