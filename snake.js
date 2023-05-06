const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");
let snakeX;
let snakeY;
let newHead = {
  x : 0,
  y : 0
};

const die = "die";
const idle = "idle";
const eat = "eat";

let currentState = 0;
// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load audio files

let dead = new Audio();
let eatfood = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eatfood.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake
let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var
let score = 0;
let command = "";

// cheack collision function
function collision(head, array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas
function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    snakeX = snake[0].x;
    snakeY = snake[0].y;

    let newHead = {
      x : 0,
      y : 0
    }


    // //synthesized system goes here
    // updatePos(newHead);
    // updateCollision(newHead);
    updateBoth();
    newHead.x = snakeX
    newHead.y = snakeY

    if (command == "eat"){
      // eatfood.play();
      console.log("eat");
      food.x = Math.floor(Math.random()*17+1) * box,
      food.y = Math.floor(Math.random()*15+3) * box
    }
    else if (command == "idle"){
      snake.pop();
    }
    else if (command == "die"){
      clearInterval(game);
      console.log("die");
      // dead.play();
    }
    
    // // if the snake eats the food
    // if(snakeX == food.x && snakeY == food.y){
    //     score++;
    //     eat.play();
    //     food.x = Math.floor(Math.random()*17+1) * box,
    //     food.y = Math.floor(Math.random()*15+3) * box
    //     // we don't remove the tail
    // }else{
    //     // remove the tail
    //     snake.pop();
    // }
    
    // //add new Head
    // newHead = {
    //   x : snakeX,
    //   y : snakeY
    // }
    
    // //game over
    // if(isWall() || collision(newHead,snake)){
    //     clearInterval(game);
    //     dead.play();
    // }
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
    console.log("end loop")
}

// call draw function every 100 ms
let game = setInterval(draw,100);
