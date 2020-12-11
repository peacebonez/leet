// const numSubarraysWithSum = (A, S) => {
//   let count = 0;
//   let holder = [];
//   let holderEqualToS = false;

//   const analyze = () => {
//     let sum = holder.reduce((acc, cur) => acc + cur);
//     if (sum === S) {
//       count++;
//       holderEqualToS = true;
//     } else holderEqualToS = false;
//   };
//   for (let i = 0; i <= A.length; i++) {
//     console.log("A[i]:", A[i]);
//     console.log("holder:", holder);
//     console.log("count:", count);

//     //if i is greater than s and holder is empty skip it.
//     if (A[i] > S && holder.length === 0) continue;

//     //if i is greater than S check to see if holder values summed === S
//     if (A[i] > S) analyze();

//     if (holderEqualToS && A[i] > 0) {
//       holder.shift();
//       break;
//     }

//     holder.push(A[i]);

//     analyze();

//     console.log("-------------------");
//   }

//   return count;
// };

// const numSubarraysWithSum = (A, S) => {
//   let count = 0;
//   let holder = [];
//   let curArr = [];
//   let holderEqualToS = false;
//   let sum;

//   for (let i = 0; i < A.length; i++) {
//     console.log("A[i]:", A[i]);

//     holder.push(A[i]);

//     console.log("holder:", holder);

//     console.log("count:", count);

//     if (holder.length > 1) {
//       sum = holder.reduce((acc, cur) => acc + cur);

//       if (sum === S) {
//         count++;
//         holderEqualToS = true;
//         holder.shift();
//       }
//       if (sum < S || !sum) {
//         holderEqualToS = false;
//         continue;
//       }
//     }

//     console.log("-------------------");
//   }

//   return count;
// };

// numSubarraysWithSum([1, 0, 1, 0, 1], 2); //4

// const numSubarraysWithSum = (A, S) => {
//   let counterArr = [];
//   let curArr = [];
//   let sum;

//   for (let i = 0; i < A.length; i++) {
//     const num = A[i];
//     console.log("num:", num);
//     console.log("counterArr:", counterArr);
//     console.log("counterArr length:", counterArr.length);
//     console.log("curArr:", curArr);

//     if (num > S) continue;

//     curArr = [...curArr, num];

//     if (curArr.length > 1) {
//       sum = curArr.reduce((acc, cur) => acc + cur);

//       if (sum === S) {
//         counterArr = [...counterArr, curArr];
//       }
//     }

//     console.log("-------------------");
//   }

//   return counterArr.length;
// };

const atMost = (A, S) => {
  //0 instances of sub-arrays that add up to S
  if (S < 0) return 0;

  let result = 0,
    startIndex = 0,
    Alength = A.length,
    curSumOfSubarray = 0;

  for (let endIndex = 0; endIndex < Alength; endIndex++) {
    //current sum = current sum + number at index
    curSumOfSubarray += A[endIndex];

    //if current sum is greater than S
    //current sum = current sum minus index at start index
    while (curSumOfSubarray > S) curSumOfSubarray -= A[startIndex++];

    //result is previous result + endIndex minus startIndex + 1 (increment startIndex)
    result += endIndex - startIndex + 1;
  }

  return result;
};

const numSubarraysWithSum = (A, S) => {
  return atMost(A, S) - atMost(A, S - 1);
};

numSubarraysWithSum([1, 0, 1, 0, 1], 2); //4
