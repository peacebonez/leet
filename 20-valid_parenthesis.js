//leetcode.com/problems/valid-parentheses/

https: const parentheses = [
  ["{", "}"],
  ["[", "]"],
  ["(", ")"],
];

// const parentheses = "()[]{}";

var isValid = function (s) {
  if (!s) return true;
  //length must be even for every parenthesis to be a pair
  s = s.split("");
  if (s.length % 2 !== 0) return false;

  //in between parenthesis must be an even number of indexes?
  //open immediately is followed by a closer that's not a match, fail

  //parenthesis 1st item must always have a lower index than 2nd item
  let left = s.length / 2 - 1;
  let right = s.length / 2;

  console.log("left:", left);
  console.log("right:", right);

  // if brackets match
  if (true) {
    console.log("match!");
    s.splice(left, 1);
    s.splice(right - 1, 1);
  }

  console.log("s:", s);
  s = s.join();
  return isValid(s);
};

const pass = "()[]{}";
const pass2 = "([]{})";
const pass3 = "()[{}]";
const pass4 = "[{()}]";
const pass5 = "(){}";
const fail = "(][)";
const fail2 = "(])";
const fail3 = "([)]";

console.log(isValid(pass5));
