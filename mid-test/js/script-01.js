// Bài 1: Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.
// Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function maxMaxLongestStrings(arr) {
  let maxLength = 0;
  arr.forEach((str) => {
    if (str.length > maxLength) {
      maxLength = str.length;
    }
  });
  return maxLength;
}

function getStringsHasMaxLength(arr) {
  if (arr == null || arr.length === 0) {
    return [];
  }

  const maxLength = maxMaxLongestStrings(arr);
  return arr.filter((str) => str.length === maxLength);
}

const input = ["aba", "aa", "ad", "c", "vcd"];
console.log(getStringsHasMaxLength(input));

// Bài 2:
const users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

const ageCondition = 25;
const statusCondition = true;

function findAllUserByAgeAndStatus(users) {
  return users.filter(
    (user) => user.age > ageCondition && user.isStatus === statusCondition
  );
}

console.log(findAllUserByAgeAndStatus(users, 25, true));

function sorUserArrByAgeAsc(users) {
  return users.sort((a, b) => a.age - b.age);
}

console.log(sorUserArrByAgeAsc(users));

// Bài 3: Viết function truyền vào 1 mảng các chuỗi.
// Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
    let objectResult = {};
    arr.forEach((e) => {
        if (objectResult[e]) {
            objectResult[e]++;
        } else {
            objectResult[e] = 1;
        }
    });
    return objectResult;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));