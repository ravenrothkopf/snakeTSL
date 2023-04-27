//key functions
var e;
document.onkeydown = function (event) {
    e =  event || window.event; 
};

function pressL(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowLeft";
    }
}
function pressR(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowRight";
    }
}
function pressUp(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowUp";
    }
}
function pressDown(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowDown";
    }
}

//other collision functions
function isWall(){ return (snakeX < box || 
    snakeX > 17 * box || snakeY > 17*box || snakeY < 3*box)}

function eatFood(){ snakeX == food.x && snakeY == food.y }