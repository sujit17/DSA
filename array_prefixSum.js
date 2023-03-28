// Given N array elements & Q queries on same array.
// For each query calculate sum of all elements in given range - [L, R]
// Note: L & R are indices such that L <= R
const ranges = [
  [4, 8],
  [3, 7],
  [1, 3],
  [0, 4],
  [6, 9],
];
const arrayOne = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];

const constructPrefixSumArray = (arr) => {
  const n = arr.length;
  let prefixArr = [];
  prefixArr[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }
  return prefixArr;
};

const sumOfRangeInArray = (arr, rangeArr) => {
  const prefixSumArray = constructPrefixSumArray(arr);
  for (let i = 0; i < rangeArr.length; i++) {
    const range = rangeArr[i];
    const start = range[0],
      end = range[1];
    if (start === 0) {
      console.log(`sum of ${range} range is = `, prefixSumArray[end]);
    } else {
      console.log(
        `sum of ${range} range is = `,
        prefixSumArray[end] - prefixSumArray[start - 1]
      );
    }
  }
};
sumOfRangeInArray(arrayOne, ranges); // TC ---> O(N), SC---> O(N)

// -------------------------------------- Equilibrium Index ------------------------------------------------

// Given N array elements, count no of equilibrium index.
// An index i is said to be equilibrium index if:
// Sum of all elements left of (i)th index === Sum of all elements right of (i)th index
// Sum[0, i-1] === Sum[i+1, N-1]

const arrayTwo = [-7, 1, 5, 2, -4, 3, 0];
const countEquilibrium = (arr) => {
  const prefixSum = constructPrefixSumArray(arr);
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let leftSum, rightSum;
    if (i == 0) {
      leftSum = 0;
    } else {
      leftSum = prefixSum[i - 1];
    }
    rightSum = prefixSum[n - 1] - prefixSum[i];
    if (leftSum === rightSum) count++;
  }
  return count;
};
console.log(countEquilibrium(arrayTwo));

// Find prefix even sum array
const generateEvenPrefixSumArr = (arr) => {
  const n = arr.length;
  let evenPreSum = [];
  evenPreSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      evenPreSum[i] = evenPreSum[i - 1] + arr[i];
    } else {
      evenPreSum[i] = evenPreSum[i - 1];
    }
  }
  return evenPreSum;
};
console.log(generateEvenPrefixSumArr(arrayTwo));

// Find prefix odd sum array
const generateOddPrefixSumArr = (arr) => {
  const n = arr.length;
  let oddPreSum = [];
  oddPreSum[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 == 1) {
      oddPreSum[i] = oddPreSum[i - 1] + arr[i];
    } else {
      oddPreSum[i] = oddPreSum[i - 1];
    }
  }
  return oddPreSum;
};
console.log(generateOddPrefixSumArr(arrayTwo));

///////////////////////////////////////////////////////////////////////////////

// Given an array A of N elements and an integer B such that B <= N.
// You have to pick B elements in total. Some (possibly 0)
// elements from left end of array A and some (possibly 0)
// from the right end of array A to get the maximum sum.
// Find and return this maximum possible sum.
// NOTE: Suppose B = 4, and array A contains 10 elements,
// then, you can pick the first four elements or can pick the
// last four elements, or can pick 1 from front and 3 from
// the back, etc. You need to return the maximum possible
// sum of elements you can pick.

// ==========  TO_DO ==========

// Given an array, arr[] of size N, the task is to find the count of array indices such that
// removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

const specialIndex = (arr) => {
  const n = arr.length;
  const evenIndexSum = generateEvenPrefixSumArr(arr);
  const oddIndexSum = generateOddPrefixSumArr(arr);
  let count = 0;

  for (const i in arr) {
    if (i == 0) {
      const evenSum = evenIndexSum[n - 1] - evenIndexSum[i];
      const oddSum = oddIndexSum[n - 1] - oddIndexSum[i];
      if (evenSum === oddSum) count++;
    } else {
      const leftEvenSum = evenIndexSum[i - 1];
      const rightEvenSum = oddIndexSum[n - 1] - oddIndexSum[i];
      const totalEvenSum = leftEvenSum + rightEvenSum;

      const leftOddSum = oddIndexSum[i - 1];
      const rightOddSum = evenIndexSum[n - 1] - evenIndexSum[i];
      const totalOddSum = leftOddSum + rightOddSum;

      if (totalEvenSum === totalOddSum) count++;
    }
  }
  return count;
};

console.log("specialIndex ===> ", specialIndex([1, 1, 1]));

//////////////////////////////////////////////////////////////////////////////////

// Given an integer array A of size N. In one second, you can increase the value of one element by 1.
// Find the minimum time in seconds to make all elements of the array equal.

const findMaxEle = (arr) => {
  let maxEle = arr[0];
  for (const ele of arr) maxEle = Math.max(ele, maxEle);
  return maxEle;
};
const timeToEquality = (arr) => {
  const maxEle = findMaxEle(arr);
  let count = 0;
  for (const ele of arr) count += maxEle - ele;
  return count;
};

console.log(timeToEquality([2, 4, 1, 3, 2]));

///////////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers A, find and return the product array of the same size where the ith element of
// the product array will be equal to the product of all the elements divided by the ith element of the array.

// NOTE: It is always possible to form the product array with integer (32 bit) values.
// Solve it without using the division operator.

const productArrayPuzzle = (arr) => {
  let productOfEle = 1;
  for (const ele of arr) productOfEle *= ele;
  console.log("sumOfEle ", productOfEle);
  return arr.reduce((acc, curr) => {
    acc.push(productOfEle / curr);
    return acc;
  }, []);
};
console.log("productArrayPuzzle ===> ", productArrayPuzzle([1, 2, 3, 4, 5]));
