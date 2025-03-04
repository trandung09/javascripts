// Bài 1
function calculateFactorial(num) {
  if (num == null) {
    console.log("Num phaỉ là một số nguyên");
    return;
  }
  if (num == NaN) return NaN;
  if (num < 1) {
    console.log("Num phaỉ là một số nguyên lớn hơn 0");
    return;
  }

  if (num == 1) return 1;

  return num * calculateFactorial(num - 1);
}

console.log(calculateFactorial(5));

// Bài 2
function reverseString(str) {
  if (str == null) {
    console.log("Str phải là một chuỗi");
    return;
  }

  str = str + ""; // Trường hợp str là một số

  if (str.length == 1) return str;

  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("Hello"));

// Bài 3: sử dụng Map thay vì switch case
const mapCountryCode = new Map();
mapCountryCode.set("VN", "Xin chào");
mapCountryCode.set("US", "Hello");
mapCountryCode.set("FR", "Bonjour");
mapCountryCode.set("JP", "こんにちは");
mapCountryCode.set("CN", "你好");
mapCountryCode.set("GM", "Hallo");

function messageOfCoutryCode(code) {
  if (code == null) {
    console.log("Code phải là một chuỗi");
    return;
  }

  if (mapCountryCode.has(code)) return mapCountryCode.get(code);

  console.log("Không tìm thấy mã quốc gia");
}

console.log(messageOfCoutryCode("VN"));

// Bài 4
function subString(str) {
  if (str == null) {
    console.log("Str phải là một chuỗi");
    return;
  }

  if (str.length < 15) {
    console.log("Str phải có độ dài lớn hơn hoặc bằng 15");
    return;
  }

  let sbStr = "";
  for (let i = 0; i < 10; i++) {
    sbStr += str[i];
  }

  return sbStr + "...";
}

console.log(subString("xinchaocacbandenvoiTechmaster"));
