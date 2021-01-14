const longestCommonPrefix = (strs) => {
  const tree = { "": {} };

  let longestPrefix = "";

  for (let str of strs) {
    console.log("tree:", tree);

    let root = tree[""]; //setting root to current tree empty string value
    let curPrefix = "";
    for (let char of str) {
      console.log("longestPrefix:", longestPrefix);
      if (root[char]) {
        //if root contains current char
        root = root[char];
        curPrefix += char;
      }
      //not a common prefix
      else {
        if (curPrefix.length > longestPrefix.length) {
          longestPrefix = curPrefix;
        }
        root[char] = {};
        root = root[char];
      }
    }
  }
  return longestPrefix;
};

// console.log(longestCommonPrefix(["ab", "a"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));

// const longestCommonPrefix = (strs) => {
//     if (strs.length === 1) return strs[0][0];
//     strs = strs.sort((a, b) => a.length - b.length);
//     if (!strs[0]) return "";
//     if (strs[0].length === 1) return strs[0][0];

//     console.log("str s:", strs);
//     let output = "";
//     let ref = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//       for (let j = 0; j < strs[i].length; j++) {
//         console.log("j:", j);
//         if (ref.startsWith(strs[i][j])) output += ref[i];
//       }
//     }
//     console.log("output:", output);
//     return output;
//   };

// const longestCommonPrefix = (strs) => {
//     if (strs.length === 1) return strs[0][0];
//     strs = strs.sort((a, b) => a.length - b.length);
//     if (!strs[0]) return "";
//     if (strs[0].length === 1) return strs[0][0];

//     console.log("str s:", strs);
//     let output = "";

//     for (let i = 0, j = 0; j < strs[0].length; i++) {
//       if (strs[i][j] && strs[i][j] === strs[i + 1][j]) {

//       }
//       console.log("i:", i);
//       console.log("j:", j);
//       console.log("strs[i]:", strs[i]);
//       if (i === strs.length - 1) {
//         console.log("I TOO BIG");
//         i = -1;
//         j++;
//       }
//       console.log("output:", output);
//     }

//     return output;
//   };
