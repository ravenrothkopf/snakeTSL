//synthesized system from TSL spec
function updatePos() {
    if (currentState === 0) {
      if (!pressL(e) && !pressR(e) && !pressUp(e)) {
        snakeX = snakeX
        snakeY = snakeY + box
        currentState = 0
      }
      else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY - box
        currentState = 1
      }
      else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeY = snakeY
        snakeX = snakeX + box
        currentState = 2
      }
    //   else if (pressL(e) && pressR(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressUp(e) && pressDown(e)) {
    //     currentState = 3
    //   }
      else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeX = snakeX - box
        snakeY = snakeY
        currentState = 3
      }
    }
    else if (currentState === 1) {
      if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY + box
        currentState = 0
      }
      else if (!pressL(e) && !pressR(e) && !pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY - box
        currentState = 1
      }
      else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeY = snakeY
        snakeX = snakeX + box
        currentState = 2
      }
    //   else if (pressL(e) && pressR(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressUp(e) && pressDown(e)) {
    //     currentState = 3
    //   }
      else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeX = snakeX - box
        snakeY = snakeY
        currentState = 3
      }
    }
    else if (currentState === 2) {
      if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY + box
        currentState = 0
      }
      else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY - box
        currentState = 1
      }
      else if (!pressL(e) && !pressUp(e) && !pressDown(e)) {
        snakeY = snakeY
        snakeX = snakeX + box
        currentState = 2
      }
    //   else if (pressL(e) && pressR(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressUp(e) && pressDown(e)) {
    //     currentState = 3
    //   }
      else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeX = snakeX - box
        snakeY = snakeY
        currentState = 3
      }
    }
    else if (currentState === 3) {
      if (!pressL(e) && !pressR(e) && !pressUp(e) && pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY + box
        currentState = 0
      }
      else if (!pressL(e) && !pressR(e) && pressUp(e) && !pressDown(e)) {
        snakeX = snakeX
        snakeY = snakeY - box
        currentState = 1
      }
      else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeY = snakeY
        snakeX = snakeX + box
        currentState = 2
      }
    //   else if (pressL(e) && pressR(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressL(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressUp(e)) {
    //     currentState = 3
    //   }
    //   else if (pressR(e) && pressDown(e)) {
    //     currentState = 3
    //   }
    //   else if (pressUp(e) && pressDown(e)) {
    //     currentState = 3
    //   }
      else if (!pressR(e) && !pressUp(e) && !pressDown(e)) {
        snakeX = snakeX - box
        snakeY = snakeY
        currentState = 3
      }
    }
  }