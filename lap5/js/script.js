// Event
// + Event là các hành động xảy ra khi người dùng tương tác với trang web
// + Ex:
//     . Khi người dùng click vào một phần tử
//     . Khi nhập dữ liệu vào ô input

// + Bao gồm sự kiện: chuột, bàn phím, submit form

// DOM event

// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//   const p = document.getElementsByTagName("p")[0];
//   p.style.display = "block";
//   alert("Bạn vừa bấm nút phải không");
// });

// // Sử dụng thuộc tính của DOM để add sự kiện
// button.onclick = function clicklMe() {
//   const p = document.getElementsByTagName("p")[0];
//   p.style.display = "block";
//   alert("Bạn vừa bấm nút phải không");
// };

// // Tạo function và thêm vào thộc tính trogn html
// function clickMe2() {
//   const p = document.getElementsByTagName("p")[0];
//   p.style.background = "red";
// }

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const text = document.getElementById("text");

btn1.addEventListener("click", () => {
  text.innerText = "Hello world";
});

btn2.addEventListener("click", () => {
  text.style.color = randomColor();
});

btn3.addEventListener("click", () => {
  text.style.backgroundColor = randomColor();
});

const arr = ["A", "B", "C", "D", "E", "F"];
function randomColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 17).toString();
    if (num < 10) {
      hex += num.toString();
    } else {
      hex += arr[num - 10];
    }
  }
  return hex;
}

console.log(randomColor());
