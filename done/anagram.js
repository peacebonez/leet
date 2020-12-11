// var isAnagram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   const sBucket = {};
//   const tBucket = {};

//   for (const char of s) {
//     if (!sBucket[char]) {
//       sBucket[char] = 1;
//     } else {
//       sBucket[char]++;
//     }
//   }
//   for (const char of t) {
//     if (!tBucket[char]) {
//       tBucket[char] = 1;
//     } else {
//       tBucket[char]++;
//     }
//   }

//   return JSON.stringify(sBucket) === JSON.stringify(tBucket);
// };

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  const sBucket = {};
  const tBucket = {};

  for (let char = 0; char < s.length; char++) {
    if (!sBucket[s[char]]) {
      sBucket[s[char]] = 1;
    }
    if (!tBucket[t[char]]) {
      tBucket[t[char]] = 1;
    }

    if (sBucket[s[char]]) sBucket[s[char]]++;
    if (tBucket[t[char]]) tBucket[t[char]]++;
  }

  return JSON.stringify(sBucket) === JSON.stringify(tBucket);
};

console.log(isAnagram("anagram", "nagaram"));
