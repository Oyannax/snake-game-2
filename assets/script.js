const playBoard = document.querySelector(".play-board");

let foodX, foodY;

// Passing a random 0 - 30 value as food position
const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
initGame();