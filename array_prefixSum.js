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

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
