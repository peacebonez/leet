const isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  s = splitSortAndJoin(s)
  t = splitSortAndJoin(t)
  const sBucket = {}
  const tBucket = {}

  for (let char = 0; char < s.length; char++) {
    if (!sBucket[s[char]]) {
      sBucket[s[char]] = 1
    }
    if (!tBucket[t[char]]) {
      tBucket[t[char]] = 1
    }

    if (sBucket[s[char]]) sBucket[s[char]]++
    if (tBucket[t[char]]) tBucket[t[char]]++
  }

  return JSON.stringify(sBucket) === JSON.stringify(tBucket)
}

function splitSortAndJoin(str) {
  return str.split("").sort().join("")
}

console.log(isAnagram("anagram", "nagaram"))
