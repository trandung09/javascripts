const circle = document.getElementById("circle");
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
const step = 20;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            posY -= step;
            break;
        case "ArrowDown":
            posY += step;
            break;
        case "ArrowLeft":
            posX -= step;
            break;
        case "ArrowRight":
            posX += step;
            break;
    }
    circle.style.top = `${posY}px`;
    circle.style.left = `${posX}px`;
});