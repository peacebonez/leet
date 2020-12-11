const firstUniqChar = function (s) {
  if (!s) return -1;

  const scoreboard = {};
  for (const char of s) {
    if (!scoreboard[char]) {
      scoreboard[char] = 1;
    } else {
      scoreboard[char]++;
    }
  }

  return s.indexOf(
    Object.keys(scoreboard).find((key) => scoreboard[key] === 1)
  );
};

// console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("dddccdbba"));
