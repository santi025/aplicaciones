const board = document.getElementById("board");

// Sudoku board representation
const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];


function renderBoard() {
    for (let i = 0; i < sudokuBoard.length; i++) {
        for (let j = 0; j < sudokuBoard[i].length; j++) {
            const cell = document.createElement("input");
            cell.classList.add("cell");
            cell.setAttribute("type", "text");
            cell.setAttribute("maxlength", "1");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.value = sudokuBoard[i][j] === 0 ? "" : sudokuBoard[i][j];
            cell.addEventListener("input", validateInput);
            board.appendChild(cell);
        }
    }
}


function validateInput(event) {
    const inputValue = event.target.value;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

  
    if (inputValue !== "" && (isNaN(inputValue) || inputValue < 1 || inputValue > 9 || !isValidMove(row, col, parseInt(inputValue)))) {
        event.target.value = "";
    } else {
        sudokuBoard[row][col] = inputValue === "" ? 0 : parseInt(inputValue);
    }
}


function isValidMove(row, col, value) {
    
    for (let i = 0; i < 9; i++) {
        if (sudokuBoard[row][i] === value && i !== col) {
            return false;
        }
    }

   
    for (let i = 0; i < 9; i++) {
        if (sudokuBoard[i][col] === value && i !== row) {
            return false;
        }
    }


    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (sudokuBoard[i][j] === value && (i !== row || j !== col)) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku() {
    
    
}


renderBoard();
