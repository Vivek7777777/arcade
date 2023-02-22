// alert("hi")
const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 10;

let tilesize = 20;
let tilecountx = canvas.width / tilesize;
let tilecounty = canvas.height / tilesize;
let headX = 15, headY = 15;
let xvelocity = 0, yvelocity = 0;
const snakePart = [];
let taillength = 1;

let applex = 30, appley = 15;

let score = 0;
// console.log("hi");
// console.log(canvas.width);

//game loop
function drawGame() {
    changeSnakePosition();
    if(gameOver())
        return;
    clearScreen();
    checkCollision();
    drawApple();
    drawSnake();
    drawScore();
    setTimeout(drawGame, 1000/speed);
}

function changeSnakePosition() {
    headX += xvelocity;
    headY += yvelocity;
}

function gameOver(){
    let over = false;
//starting
    if(yvelocity === 0 && xvelocity === 0)
        return over;
//walls
    if(headX < 0){
        over = true;
    }
    else if(headX >= tilecountx){
        over = true;
    }
    else if(headY >= tilecounty){
        over = true;
    }
    else if(headY < 0){
        over = true;
    }
//bite itself
    for (let i = 0; i < snakePart.length; i++) {
        let part = snakePart[i];
        if(headX == part.x && headY == part.y){
            over = true;
            break;
        }
    }
//print game over
    if(over){    
        ctx.fillStyle = 'white';
        ctx.font = '100px Verdana';
        //gradient 39:15
        ctx.fillText("Game Over", canvas.width/6 , canvas.height/2);   
    }
    return over;
}

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function checkCollision() {
    if (applex === headX && appley === headY) {
        applex = Math.floor(Math.random() * tilecountx);
        appley = Math.floor(Math.random() * tilecounty);
        taillength++;
        score++;
    }
}

function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(applex * tilesize, appley * tilesize, tilesize, tilesize);
}

function drawSnake() {
    //tail
    ctx.fillStyle = 'green';
    for (let i = 0; i < snakePart.length; i++) {
        let part = snakePart[i];
        ctx.fillRect(part.x * tilesize, part.y * tilesize, tilesize, tilesize);
        // ctx.fillRect(part.x * tilesize, part.y * tilesize, tilesize, tilesize);
    }
    snakePart.push(new SnakePart(headX, headY)); //put an item at the end of thelĺst next to the head
    while (snakePart.length > taillength) {
        snakePart.shift(); //remove the furthers item from the snake parts if have more than our tail size 
    }
    //head
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tilesize, headY * tilesize, tilesize, tilesize);
}

function drawScore(){
    ctx.fillStyle = 'white';
    ctx.font = '15px Verdana';
    ctx.fillText("Score " + score , canvas.width-80 , 20);
}



//snake motion


document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    //up arrow
    if (event.keyCode == 38) {
        if (yvelocity === 1)
            return;
        yvelocity = -1;
        xvelocity = 0;
    }
    //down arrow
    if (event.keyCode == 40) {
        if (yvelocity === -1)
            return;
        yvelocity = 1;
        xvelocity = 0;
    }
    // left arrow
    if (event.keyCode == 37) {
        if (xvelocity === 1)
            return;
        yvelocity = 0;
        xvelocity = -1;
    }
    if (event.keyCode == 39) {
        if (xvelocity === -1)
            return;
        yvelocity = 0;
        xvelocity = 1;
    }

}


drawGame();

