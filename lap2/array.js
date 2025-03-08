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
//     + Function có thể xem và gán như một thuộc tính trong object


const object = {
  name: "default function",
  func: () => { console.log("Hello world") }
}

object.func();

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
//     + length -> lấy ra số phần tử có trong mảng
console.log(newArray.length);
//     + push -> thêm phần tử vào cuối mảng
newArray.push(6);
console.log(newArray);
//     + pop -> xóa phần tử cuối mảng
newArray.pop();
console.log(newArray);
//     + unshift -> thêm phần tử vào đầu mảng
newArray.unshift(0);
console.log(newArray);
//     + shift -> xóa phần tử đầu mảng
newArray.shift();
console.log(newArray);
//     + filter -> lọc các phần tử theo điều kiện và return mảng mới
newArray.filter((item, index) => item % 2 === 0 && index % 2 == 1).forEach((item) => console.log(item));
//     + reduce -> tính toán dựa trên các phần tử trong mảng
console.log(newArray.reduce((acc, cur) => acc + cur, 0));
//     + forEach -> duyệt qua các phần tử trong mảng
//     + findIndex -> tìm kiếm index của phần tử trong mảng
console.log(newArray.findIndex((item) => item === 3));
//     + find -> tìm kiếm phần tử trong mảng
console.log(newArray.find((item) => item === 3));
//     + at -> lấy ra phần tử tại vị trí index
console.log(newArray.at(1));
//     + indexOf -> vị trí của phần tử
console.log(newArray.indexOf(3));
//     + some -> kiểm tra xem có phần tử nào thỏa mã
console.log(newArray.some((item) => item === 3));
//     + every -> kiểm tra xem tất cả phần tử thỏa mã
//     + sort -> sắp xếp mảng
console.log(newArray.sort((a, b) => a - b));
//     + includes -> kiểm tra xem phần tử có trong mảng không
console.log(newArray.includes(3));
//     + slice -> căt mảng từ vị trí bắt đầu đến vị trí kết thúc (end - 1)
const sliceArray = newArray.slice(1, 6);
console.log(sliceArray)
//     + concat -> nối mảng
//     + join -> chuyển mảng thành chuỗi
//     + reverse -> đảo ngược mảngm và trả về một mảng mới
//     + fill -> điền giá trị vào mảng: Array.fill(value, start, end)
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

