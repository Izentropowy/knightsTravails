const Field = (x, y) => {
  // current position + all 8 possible knight moves
  return {
    currentPos: [x, y],
    pos1: null,
    pos2: null,
    pos3: null,
    pos4: null,
    pos5: null,
    pos6: null,
    pos7: null,
    pos8: null,
  };
};

const Board = () => {
  // BOARD CREATING
  let board = null;

  function populateField(field) {
    let x = field.currentPos[0];
    let y = field.currentPos[1];

    field.pos1 =
      x + 1 < 0 || y + 2 < 0 || x + 1 > 7 || y + 2 > 7
        ? null
        : board[x + 1][y + 2];
    field.pos2 =
      x + 2 < 0 || y + 1 < 0 || x + 2 > 7 || y + 1 > 7
        ? null
        : board[x + 2][y + 1];
    field.pos3 =
      x + 2 < 0 || y - 1 < 0 || x + 2 > 7 || y - 1 > 7
        ? null
        : board[x + 2][y - 1];
    field.pos4 =
      x + 1 < 0 || y - 2 < 0 || x + 1 > 7 || y - 2 > 7
        ? null
        : board[x + 1][y - 2];
    field.pos5 =
      x - 1 < 0 || y - 2 < 0 || x - 1 > 7 || y - 2 > 7
        ? null
        : board[x - 1][y - 2];
    field.pos6 =
      x - 2 < 0 || y - 1 < 0 || x - 2 > 7 || y - 1 > 7
        ? null
        : board[x - 2][y - 1];
    field.pos7 =
      x - 2 < 0 || y + 1 < 0 || x - 2 > 7 || y + 1 > 7
        ? null
        : board[x - 2][y + 1];
    field.pos8 =
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

    // populate fields with possible moves (other fields)
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        populateField(board[i][j]);
      }
    }
  }

  createBoard();

  //   BOARD METHODS
  function findPath(currentPos, finalPos) {}

  return {
    board,
  };
};

const newBoard = Board();
console.log(newBoard.board[3][3]);
