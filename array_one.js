// Given N array elements , count no. of elements having atleast 1 element greater than itself.
const arr_one = [2, 3, 10, 7, 3, 2, 10, 8];

const findMax = (arr) => {
  let maxEle = arr[0];
  for (const ele of arr) {
    maxEle = Math.max(maxEle, ele);
  }
  return maxEle;
};

const atleastOneMaxEle = (arr) => {
  const maxEle = findMax(arr);
  let count = 0;
  for (const ele of arr) {
    if (maxEle !== ele) count++;
  }
  return count;
};
console.log(atleastOneMaxEle(arr_one)); // Time Complexity -----> O(N)

// Given N array elements, check if there exists a pair (i, j) such that
// Note : i & j are index values , k
const arr_two = [3, 2, 1, 4, 3, 6, 8];
const pairExist = (arr, k) => {
  const N = arr.length;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < i; j++) if (arr[i] + arr[j] === k) return true;
  return false;
};
console.log(pairExist(arr_two, 10));

// Given an array , reverse the entire array
// Note : Array itself should change --------->  Expected SC: O(1)
const reverseArray = (arr) => {
  const N = arr.length;
  let i = 0,
    j = N - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  //   for (let i = 0, j = N - 1; i <= N / 2; i++, j--) {
  //     const temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  return arr;
};
console.log(reverseArray([5, 4, 3, 2, 1]));

// Given an array , and [S & E],
// reverse the array from [S E], where S and E are indices.
// Note : S <= E
const reverseArrayInRange = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
console.log(reverseArrayInRange([5, 4, 3, 2, 1], 1, 3));

// Given an array of size N, rotate the
// array from last to first by k times. -----------> Expected SC: O(1)
const rotateArrayTimes = (arr, numOfRotate) => {
  const N = arr.length;
  numOfRotate = numOfRotate % N;
  reverseArrayInRange(arr, 0, N - 1);
  reverseArrayInRange(arr, 0, numOfRotate - 1);
  reverseArrayInRange(arr, numOfRotate, N - 1);
  return arr;
};
console.log(rotateArrayTimes([5, 4, 3, 2, 1], 3));
