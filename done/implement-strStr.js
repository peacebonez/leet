/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};

console.log(strStr("hello", "ll"));
