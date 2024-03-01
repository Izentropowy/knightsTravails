const Field = (x, y) => {
  // current position + all 8 possible knight eachIterationOptions
  return {
    currentPos: [x, y],
    move1: null,
    move2: null,
    move3: null,
    move4: null,
    move5: null,
    move6: null,
    move7: null,
    move8: null,
  };
};

const Board = () => {
  // BOARD CREATING
  let board = null;

  function populateField(field) {
    let x = field.currentPos[0];
    let y = field.currentPos[1];

    field.move1 =
      x + 1 < 0 || y + 2 < 0 || x + 1 > 7 || y + 2 > 7
        ? null
        : board[x + 1][y + 2];
    field.move2 =
      x + 2 < 0 || y + 1 < 0 || x + 2 > 7 || y + 1 > 7
        ? null
        : board[x + 2][y + 1];
    field.move3 =
      x + 2 < 0 || y - 1 < 0 || x + 2 > 7 || y - 1 > 7
        ? null
        : board[x + 2][y - 1];
    field.move4 =
      x + 1 < 0 || y - 2 < 0 || x + 1 > 7 || y - 2 > 7
        ? null
        : board[x + 1][y - 2];
    field.move5 =
      x - 1 < 0 || y - 2 < 0 || x - 1 > 7 || y - 2 > 7
        ? null
        : board[x - 1][y - 2];
    field.move6 =
      x - 2 < 0 || y - 1 < 0 || x - 2 > 7 || y - 1 > 7
        ? null
        : board[x - 2][y - 1];
    field.move7 =
      x - 2 < 0 || y + 1 < 0 || x - 2 > 7 || y + 1 > 7
        ? null
        : board[x - 2][y + 1];
    field.move8 =
      x - 1 < 0 || y + 2 < 0 || x - 1 > 7 || y + 2 > 7
        ? null
        : board[x - 1][y + 2];
  }

  function createBoard() {
    // Create board with default fields
    board = new Array(8);
    for (let i = 0; i < 8; i++) {
      board[i] = new Array(8);
      for (let j = 0; j < 8; j++) {
        board[i][j] = Field(i, j);
      }
    }

    // populate fields with possible eachIterationOptions (other fields)
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        populateField(board[i][j]);
      }
    }
  }

  createBoard();

  //   BOARD METHODS
  function findPossibleMoves(field) {
    let possibleMoves = [];
    for (const move in field) {
      if (field[move] && move !== "currentPos") {
        possibleMoves.push(field[move].currentPos);
      }
    }
    return possibleMoves;
  }

  function findChain(moves, finalPos) {
    let chain = [finalPos];
    let currentField = board[finalPos[0]][finalPos[1]];

    for (let i = 0; i < moves.length; i++) {
      let currentFieldPossibleMoves = findPossibleMoves(currentField);
      let currentMove = moves[i];
      for (let field of currentMove) {
        if (
          currentFieldPossibleMoves.some(
            (element) => element.toString() === field.currentPos.toString()
          )
        ) {
          chain.unshift(field.currentPos);
          currentField = field;
          break;
        }
      }
    }
    return chain;
  }

  function knightMoves(currentPos, finalPos) {
    let field = board[currentPos[0]][currentPos[1]];
    let possibleMoves = findPossibleMoves(field);
    let eachIterationOptions = [];

    while (true) {
      let fields = [];
      let movesCounter = possibleMoves.length;
      let x = 0;
      for (let move of possibleMoves) {
        x++;
        field = board[move[0]][move[1]];
        fields.push(field);
        if (move.toString() === finalPos.toString()) {
          let result = findChain(eachIterationOptions, finalPos);
          console.log(`You made it in ${result.length} moves`);
          console.log(result);
          return;
        }

        let newM = findPossibleMoves(field);
        possibleMoves = possibleMoves.concat(newM);
      }
      for (let i = 0; i < movesCounter; i++) {
        possibleMoves.shift();
      }
      eachIterationOptions.unshift(fields);
    }
  }

  return {
    board,
    knightMoves,
  };
};

const newBoard = Board();
newBoard.knightMoves([0, 0], [3, 3]);
