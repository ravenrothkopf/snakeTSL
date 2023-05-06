//synthesized system from TSL spec
function updatePos(newHead) {
  if (currentState === 0) {
    if (!pressL(e) && !pressR(e) && !pressUp(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 0
    }
    else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 1
    }
    else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeY = snakeY
      snakeX = snakeX + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 2
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 3
    }
  }
  else if (currentState === 1) {
    if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 0
    }
    else if (!pressL(e) && !pressR(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 1
    }
    else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeY = snakeY
      snakeX = snakeX + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 2
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 3
    }
  }
  else if (currentState === 2) {
    if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 0
    }
    else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 1
    }
    else if (!pressL(e) && !pressUp(e) && !pressDown(e)) {
      snakeY = snakeY
      snakeX = snakeX + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 2
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 3
    }
  }
  else if (currentState === 3) {
    if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 0
    }
    else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 1
    }
    else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeY = snakeY
      snakeX = snakeX + box
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 2
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (!pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      newHead.x = snakeX
      newHead.y = snakeY
      currentState = 3
    }
  }
}

function updateCollision(head){
    if (currentState === 0) {
        if (eatFood() && isWall()) {
          currentState = 0
        }
        else if (eatFood() && collision(head, snake)) {
          currentState = 0
        }
        else if (!eatFood() && isWall()) {
          console.log("hit wall")
          command = die
          score = score
          currentState = 0
        }
        else if (!eatFood() && collision(head, snake)) {
          command = die
          console.log("hit self")
          score = score
          currentState = 0
        }
        else if (eatFood() && !isWall() && !collision(head, snake)) {
          command = eat
          score = score + 1
          currentState = 0
        }
        else if (!eatFood() && !isWall() && !collision(head, snake)) {
          command = idle
          score = score
          currentState = 0
        }
      }
}

function updateBoth(){
  if (currentState === 0) {
    if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && !pressUp(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = eat
      score = score + 1
      currentState = 0
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = idle
      score = score
      currentState = 0
    }
    else if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = eat
      score = score + 1
      currentState = 1
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = idle
      score = score
      currentState = 1
    }
    else if (!eatFood() && isWall() && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 2
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 2
    }
    else if (eatFood() && isWall()) {
      currentState = 3
    }
    else if (eatFood() && collision(newHead, snake)) {
      currentState = 3
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (!eatFood() && isWall() && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (!eatFood() && collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 3
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 3
    }
  }
  else if (currentState === 1) {
    if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = eat
      score = score + 1
      currentState = 0
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = idle
      score = score
      currentState = 0
    }
    else if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = eat
      score = score + 1
      currentState = 1
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = idle
      score = score
      currentState = 1
    }
    else if (!eatFood() && isWall() && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 2
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 2
    }
    else if (eatFood() && isWall()) {
      currentState = 3
    }
    else if (eatFood() && collision(newHead, snake)) {
      currentState = 3
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (!eatFood() && isWall() && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (!eatFood() && collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 3
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 3
    }
  }
  else if (currentState === 2) {
    if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = eat
      score = score + 1
      currentState = 0
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = idle
      score = score
      currentState = 0
    }
    else if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = eat
      score = score + 1
      currentState = 1
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = idle
      score = score
      currentState = 1
    }
    else if (!eatFood() && isWall() && !pressL(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 2
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 2
    }
    else if (eatFood() && isWall()) {
      currentState = 3
    }
    else if (eatFood() && collision(newHead, snake)) {
      currentState = 3
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (!eatFood() && isWall() && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (!eatFood() && collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 3
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 3
    }
  }
  else if (currentState === 3) {
    if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = die
      score = score
      currentState = 0
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = eat
      score = score + 1
      currentState = 0
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY + box
      command = idle
      score = score
      currentState = 0
    }
    else if (!eatFood() && isWall() && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = die
      score = score
      currentState = 1
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = eat
      score = score + 1
      currentState = 1
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
      snakeX = snakeX
      snakeY = snakeY - box
      command = idle
      score = score
      currentState = 1
    }
    else if (!eatFood() && isWall() && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (!eatFood() && collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = die
      score = score
      currentState = 2
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 2
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX + box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 2
    }
    else if (eatFood() && isWall()) {
      currentState = 3
    }
    else if (eatFood() && collision(newHead, snake)) {
      currentState = 3
    }
    else if (pressL(e) && pressR(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressL(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressUp(e)) {
      currentState = 3
    }
    else if (pressR(e) && pressDown(e)) {
      currentState = 3
    }
    else if (pressUp(e) && pressDown(e)) {
      currentState = 3
    }
    else if (!eatFood() && isWall() && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (!eatFood() && collision(newHead, snake) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = die
      score = score
      currentState = 3
    }
    else if (eatFood() && !isWall() && !collision(newHead, snake) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = eat
      score = score + 1
      currentState = 3
    }
    else if (!eatFood() && !isWall() && !collision(newHead, snake) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
      snakeX = snakeX - box
      snakeY = snakeY
      command = idle
      score = score
      currentState = 3
    }
  }
}