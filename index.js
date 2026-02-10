const board = document.querySelector('.board');
const startButton = document.querySelector('.btn-start');
const modal = document.querySelector(".modal")

const startGameModal = document.querySelector(".start-game")
const gameOverModal = document.querySelector(".game-over")
const restartButton = document.querySelector(".btn-restart")

const HighScoreElement = document.querySelector("#high-score")
const scoreElement = document.querySelector("#score")
const timeElement = document.querySelector("#time")


const blockHeight = 50;
const blockWidth = 50;

let HighScore = 0
let score = 0;
let time = `00-00`

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
// create random food
let food =
    { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

const blocks = []
let snake = [
    {
        x: 1, y: 3
    }
]
let direction = 'down'

// for( let i =0 ; i<rows*cols; i++){
//     const block = document.createElement('div');
//     block.classList.add("block")
//     board.appendChild(block);
// }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block")
        board.appendChild(block);
        block.innerText = `${row}-${col}`;
        blocks[`${row}-${col}`] = block
    }

}

// How Snake move
function render() {

    let head = null;

    blocks[`${food.x}-${food.y}`].classList.add("food");


    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        clearInterval(intervalId);

        modal.style.display = "flex";
        startGameModal.style.display = "none";
        gameOverModal.style.display = "flex"
        return;



    }


    // how snake consume  food
    if (head.x == food.x && head.y == food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("food")
        food = {
            x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
        }
        blocks[`${food.x}-${food.y}`].classList.add("food");

        snake.unshift(head);  //reason behind snake increse size 
        score += 10;
        scoreElement.innerText = score
    }
    snake.forEach((segment) => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })

}
// how snake move  ? snake speed is 300ms

intervalId = setInterval(() => {

    render()
}, 300);


// start button

startButton.addEventListener("click", () => {
    modal.style.display = "none"
    intervalId = setInterval(() => { render() }, 300)
})

restartButton.addEventListener("click", restartGame)

// function restartGame(){
//     modal.style.display="none"
//     snake = [{ x:1, y:3}]
//     food = {
//       x: Math.floor(Math.random() * rows),
//       y: Math.floor(Math.random() * cols),
//     };
//     intervalId = setInterval(() => {
//       render();
//     }, 300);

// }

function restartGame() {
    clearInterval(intervalId);

    snake.forEach((segment) => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    blocks[`${food.x}-${food.y}`].classList.remove("food");

    snake = [{ x: 1, y: 3 }];
    direction = "down";

    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
    };

    modal.style.display = "none";

    intervalId = setInterval(render, 300);
}

// arrowkeys working?

addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    } else if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
});









// 1.5