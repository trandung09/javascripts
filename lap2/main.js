// Bài 1
function findNearestPrimeNumber(arr, X) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = "Not found";

  arr.forEach((e) => {
    if (isPrime(e)) {
      let diff = Math.abs(e - X);
      if (diff < minDiff) {
        minDiff = diff;
        result = e;
      }
    }
  });

  return result;
}

// Bài 2
const left1 = 1e4;
const right1 = 1e7;

function checkCondition1(n) {
  let m = 0;
  let k = n;

  while (k > 0) {
    let r = k % 10;
    if (r == 4) {
      return false;
    }

    m = m * 10 + r;
    k = Math.floor(k / 10);
  }

  return m === n;
}

function findNumberWithMultiCondition1() {
  let arrResult = [];
  for (let i = left1; i <= right1; i++) {
    if (isPrime(i) && checkCondition1(i)) {
      arrResult.push(i);
    }
  }
  return arrResult;
}

console.log(findNumberWithMultiCondition1());

// Bài 3
const left2 = 1e6;
const right2 = 1e8;

function checkCondition2(n) {
  let m = 0;
  let k = n;

  while (k > 0) {
    let r = k % 10;
    if (!isPrime(r)) {
      return false;
    }

    m = m * 10 + r;
    k = Math.floor(k / 10);
  }

  return isPrime(m);
}

function findNumberWithMultiCondition2() {
  let arrResult = [];
  for (let i = left1; i <= right1; i++) {
    if (isPrime(i) && checkCondition2(i)) {
      arrResult.push(i);
    }
  }
  return arrResult;
}

console.log(findNumberWithMultiCondition2());

// Bài 4
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return {
      value: null,
      index: -1,
    };
  }

  let max = Number.MIN_VALUE,
    secondMax = Number.MIN_VALUE,
    index = -1;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  if (secondMax === Number.MIN_VALUE) {
    return {
      value: null,
      index: -1,
    };
  }

  index = arr.indexOf(secondMax);
  return { value: secondMax, index };
}

console.log(findSecondLargest([1, 3, 4, 5, 5, 2]));

// Bài 5
function findListSquareNumbers(m, n) {
  if (m >= n) {
    return;
  }

  let count = 0;
  let result = [];
  let start = Math.ceil(Math.sqrt(m));
  let end = Math.floor(Math.sqrt(n));

  for (let i = start; i <= end; i++) {
    let square = i * i;
    if (square >= m && square <= n) {
      result.push(square);
      count++;
    }
  }

  return result;
}

console.log(findListSquareNumbers(1, 100));

// Bài 6
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function isCoPrimeNumber(m, n) {
  return gcd(m, n) === 1;
}

console.log(isCoPrimeNumber(12, 25)); // true
console.log(isCoPrimeNumber(14, 28)); // false

// Bài 7
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
