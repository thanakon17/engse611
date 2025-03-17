document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const restart = document.getElementById("restart");
    const scoreText = document.getElementById("score");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;
    let scoreX = 0;
    let scoreO = 0;

    const winning = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function handleCellClick(event) {
        const index = event.target.dataset.index;

        if (board[index] !== "" || !gameActive) return;

        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        event.target.classList.add(currentPlayer.toLowerCase());

        checkWinner();

        if(gameActive) {
            currentPlayer = "O";
            setTimeout(RandomMove, 200);
        }
    }

    function RandomMove() {
        let availableCells = board.map((cell, index) => (cell === "" ? index : null)).filter(index => index !== null);

        if (availableCells.length === 0 || !gameActive) return;

        let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        board[randomIndex] = "O";
        cells[randomIndex].textContent = "O";
        cells[randomIndex].classList.add("o");

        checkWinner();

        if(gameActive) {
            currentPlayer = "X";
            statusText.textContent = "Turn (X)";
        }
    }

    function checkWinner() {
        for (let condition of winning) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                statusText.textContent = `${currentPlayer} Win`;
                gameActive = false;
                updateScore(currentPlayer);
                disableCells();
                return;
            }
        }

        if (!board.includes("")) {
            statusText.textContent = "Draw";
            gameActive = false;
            return;
        }
    }

    function updateScore(winner) {
        if (winner === "X") {
            scoreX++;
        } else if (winner === "O") {
            scoreO++;
        }
        // Update the status text with current score
        scoreText.textContent = `X: ${scoreX} - O: ${scoreO}`;
    }

    function restartGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        statusText.textContent = "Restart Game!";
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("disabled");
            cell.classList.remove("x", "o");
        });
    }

    function disableCells() {
        cells.forEach(cell => cell.classList.add("disabled"));
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restart.addEventListener("click", restartGame);
});
