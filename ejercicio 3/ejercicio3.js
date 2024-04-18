// Sudoku board represented as a 2D array
let board = [];

// Function to generate a new Sudoku board
function generateBoard() {
    // Clear previous board
    board = [];
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';

    // Generate a solved Sudoku board
    generateSudoku();

    // Remove some numbers to create a puzzle
    removeNumbers();

    // Render the board
    renderBoard();
}

// Function to generate a solved Sudoku board
function generateSudoku() {
    const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            const num = numbers[(i * 3 + Math.floor(i / 3) + j) % 9];
            row.push(num);
        }
        board.push(row);
    }
}


function removeNumbers() {
    const emptyCells = 45; 
    let removed = 0;

    while (removed < emptyCells) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col] !== 0) {
            board[row][col] = 0;
            removed++;
        }
    }
}


function renderBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = '';

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.textContent = board[i][j] === 0 ? '' : board[i][j];
            boardDiv.appendChild(cellDiv);
        }
    }
}

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check if the current board is a valid solution
function checkSolution() {
    // Check rows
    for (let i = 0; i < 9; i++) {
        const row = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== 0 && row.has(board[i][j])) {
                alert('Solución inválida');
                return;
            }
            row.add(board[i][j]);
        }
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        const col = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== 0 && col.has(board[i][j])) {
                alert('Solución inválida');
                return;
            }
            col.add(board[i][j]);
        }
    }

    // Check regions
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const region = new Set();
            for (let m = i; m < i + 3; m++) {
                for (let n = j; n < j + 3; n++) {
                    if (board[m][n] !== 0 && region.has(board[m][n])) {
                        alert('Solución inválida');
                        return;
                    }
                    region.add(board[m][n]);
                }
            }
        }
    }

    alert('¡Solución válida!');
}
