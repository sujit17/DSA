// Count number of factor

const countFactor = (num) => {
  let count = 0;
  for (let i = 0; i <= num / i; i++) {
    if (num % i === 0) {
      console.log(i);
      if (i === num / i) {
        count++;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
};
console.log(countFactor(100));


