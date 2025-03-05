// # Mảng trong javascript
//     + Tương tự như java mảng là một cấu trúc dữ liệu cho phép
//     lưu trữ tập hợp nhiều phần tử nhưng có thể không cùng kiểu dữ liệu

// # Khai báo mảng trong javascript:
//     + Cú pháp: let arr = [e1, e1, e3, ...]

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr = ["Peter", "John", "Mary"];
console.log(arr);

// # Truy cập các phần tử mảng:
//     + Sử dụng [index] tương tự java: arr[0]...
//     + arr[0] = 'Peter'

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// # Value type và reference type trong javascript
//     + Javascript cung cấp hai kiểu dữ liệu là: prmitives và reference
//     + Primitives: number, string, boolean, symbol, null, undefined
//     + Reference: object, array, function

// # Primitives:
const number = 10;
const bool = true;
const str = "Hello";
const sym = Symbol("symbol");
const n = null;
const u = undefined;

// # Reference:
const obj = {
  name: "Peter",
  age: 28,
};

const newArray = [1, 2, 3, 4, 5];

function increment(x, bool) {
  return bool ? x++ : ++x;
}

let x = 100;

console.log(increment(x, true));
console.log(increment(x, false));

// # Duyệt mảng trong javascript
//     + Sử dụng vòng lặp for, for...of, forEach

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

for (let item of newArray) {
  console.log(item);
}

for (let i in newArray) {
  // Thường dùng cho object
  console.log(newArray[i]);
}

newArray.forEach((item) => {
  console.log(item);
});

// # First class function trong javascript:
//     + Function có thể gán cho biến
//     + Function có thể trả về function khác
//     + Function có thể nhận function khác làm tham số
//     + Function có thể được lưu trữ trong một cấu trúc dữ liệu

const plusFunction = (a, b) => a + b;
const minusFunction = (a, b) => a - b;

const caculateFunction = (a, b, func) => {
  return func(a, b);
};

console.log(caculateFunction(10, 10, plusFunction));
console.log(caculateFunction(10, 10, minusFunction));

// # Các hàm, phương thức xử lý mảng trong javascript
//     + map
newArray.map((item) => "Item: " + item).forEach((item) => console.log(item));

//     + filter
//     + reduce
//     + find
//     + some
//     + every
//     + sort
//     + includes
//     + indexOf
//     + lastIndexOf
//     + slice
//     + splice
//     + concat
//     + join
//     + reverse
//     + fill
//     + copyWithin
//     + entries
//     + keys
//     + values

const intArray = [9, 12, 31, 4, 1, 6, 24, 8, 9, 10];

function findMinValueOfArray(arr) {
  let minValOfArr = Number.MAX_SAFE_INTEGER;
  arr.forEach((val) => {
    minValOfArr = val < minValOfArr ? val : minValOfArr;
  });
  return minValOfArr;
}

console.log(findMinValueOfArray(intArray));

function smallestNumber(num) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (num > 0) {
    count[num % 10]++;
    num = Math.floor(num / 10);
  }

  let result = 0;

  for (let i = 1; i < 10; i++) {
    if (count[i] > 0) {
      result = i;
      count[i]--;
      break;
    }
  }

  for (let i = 0; i < 10; i++) {
    while (count[i] > 0) {
      result = result * 10 + i;
      count[i]--;
    }
  }

  return result;
}

console.log(smallestNumber(87633901));

function isSymmetricString(str) {
  str = str.toLowerCase();
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && str[leftIndex] === " ") {
      leftIndex++;
    }

    while (leftIndex < rightIndex && str[rightIndex] === " ") {
      rightIndex--;
    }

    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isSymmetricString("hello world"));
console.log(isSymmetricString("Race car"));
