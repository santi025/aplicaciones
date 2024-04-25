document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    const status = document.getElementById('status');

    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function handleCellClick(index) {
        if (gameActive && board[index] === '') {
            board[index] = currentPlayer;
            cells[index].textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                status.textContent = `¡${board[a]} ha ganado!`;
                gameActive = false;
                return;
            }
        }

        if (!board.includes('')) {
            status.textContent = '¡Empate!';
            gameActive = false;
        }
    }

    function handleReset() {
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => cell.textContent = '');
        status.textContent = '';
        gameActive = true;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });

    resetButton.addEventListener('click', handleReset);
});
