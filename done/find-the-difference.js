const findTheDifference = (s, t) => {
  const bucketS = {};

  for (let i = 0; i < s.length; i++) {
    if (bucketS[s[i]]) {
      bucketS[s[i]]++;
    } else {
      bucketS[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!bucketS.hasOwnProperty(t[i])) return t[i];
    else bucketS[t[i]]--;
  }

  for (const key in bucketS) {
    if (bucketS[key] === -1) return key;
  }
};

console.log(charFinder("", "t"));
// console.log(charFinder("aabcd", "aaabcd"));
