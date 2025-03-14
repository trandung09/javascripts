document.addEventListener("DOMContentLoaded", function () {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const boxesContainer = document.querySelector(".boxes");
  const btn = document.getElementById("btn");
  const points = document.querySelector(".points");

  let totalBoxes = 0;

  function updateTotalBox() {
    points.textContent = totalBoxes;
  }

  function createBox(color) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;

    box.addEventListener("click", function () {
      box.remove();
      totalBoxes--;
      updateTotalBox();
    });

    return box;
  }

  function addBoxes() {
    colors.forEach((color) => {
      const box = createBox(color);
      boxesContainer.appendChild(box);
    });
    totalBoxes += colors.length;
    updateTotalBox();
  }

  btn.addEventListener("click", addBoxes);

  // Khởi tạo 5 box ban đầu
  addBoxes();
});
