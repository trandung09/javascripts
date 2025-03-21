const postsBtn = document.getElementById("posts");
const photosBtn = document.getElementById("photos");
const albumsBtn = document.getElementById("albums");

postsBtn.addEventListener("click", function () {
  changeActiveButtonAndType(postsBtn);
  fetchAndDisplayData("https://jsonplaceholder.typicode.com/posts");
});

photosBtn.addEventListener("click", function () {
  changeActiveButtonAndType(photosBtn);
  fetchAndDisplayData("https://jsonplaceholder.typicode.com/photos");
});

albumsBtn.addEventListener("click", function () {
  changeActiveButtonAndType(albumsBtn);
  fetchAndDisplayData("https://jsonplaceholder.typicode.com/albums");
});

function changeActiveButtonAndType(button) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-danger");
  });
  button.classList.add("btn-danger");

  const typeLabel = document.querySelector(".type h2 span");
  typeLabel.innerText = button.innerText;
}

async function fetchAndDisplayData(url) {
  try {
    const dataResponse = await fetch(url);
    if (!dataResponse.ok) {
      throw new Error("Error fetching data");
    }

    const dataResponseJson = await dataResponse.json();

    const ul = document.querySelector(".list-item ul");
    ul.innerHTML = "";
    dataResponseJson.forEach((e) => {
      const li = document.createElement("li");
      li.innerText = e.title;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log("Error fetching: ", error);
  }
}

fetchAndDisplayData("https://jsonplaceholder.typicode.com/posts");
