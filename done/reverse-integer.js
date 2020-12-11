var reverse = function (x) {
  if (x < 10 && x > -1) return x;

  const reverseNums = (x + "").split("").reverse();

  if (reverseNums[reverseNums.length - 1] === "-") {
    reverseNums.pop();
    reverseNums.unshift("-");
  }

  if (reverseNums[0] === "0") {
    reverseNums.shift();
  }

  const answer = Number(reverseNums.join(""));
  const MAX = Math.pow(2, 31);

  return answer > MAX - 1 || answer < MAX * -1 ? 0 : answer;
};

console.log(reverse(-123));
