const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
  // Gọi API để lấy danh sách giống loài
  let res = await axios.get(`https://dog.ceo/api/breeds/list/all`);

  // Sau khi có data thì hiển thị kết quả trên giao diện
  renderBreed(res.data.message);
}

function renderBreed(breeds) {
  // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
  // Cách 1: Sử dụng for ... in
  // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng

  Object.keys(breeds).forEach((breed) => {
    let option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  });
}

getBreedList();

btn.addEventListener("click", function () {
  getRandomImage();
});

// Gọi API để lấy dữ liệu và hiển thị
async function getRandomImage() {
  try {
    // Gọi API lấy ảnh random của dog
    let res = await axios.get(
      `https://dog.ceo/api/breeds/${select.value.toLowerCase()}/image/random`
    );

    // Gán URL cho thẻ image
    image.src = res.data.message;
  } catch (error) {
    console.log(error);
  }
}
