const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
const subBreedsDiv = document.querySelector(".sub-breed-result h1");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
  // Gọi API để lấy danh sách giống loài
  let res = await axios.get(`https://dog.ceo/api/breeds/list/all`);

  renderBreed(res.data.message);
}

function renderBreed(breeds) {
  Object.keys(breeds).forEach((breed) => {
    let option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  });
}

async function getSubBreedsList(subBreed) {
  // https://dog.ceo/api/breed/hound/list
  //   let res = await axios.get(`https://dog.ceo/api/breed/${subBreed}/list`);
  let res = await axios.get(`https://dog.ceo/api/breed/hound/list`);
  renderSubBreedsList(res.data.message);
}

function renderSubBreedsList(subBreedsList) {
  const ul = document.createElement("ul");

  subBreedsList.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });

    subBreedsDiv.insertAdjacentElement("afterend", ul);
}

getBreedList();

btn.addEventListener("click", getSubBreedsList(select.value));
