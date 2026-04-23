(function() {
    const BOARD_ID = 'tui-tic-tac-toe-board';
    let board = document.getElementById(BOARD_ID);

    const closeBoard = () => {
        const boardToClose = document.getElementById(BOARD_ID);
        if (boardToClose) {
            boardToClose.classList.remove('show');
            setTimeout(() => boardToClose.remove(), 300);
            document.removeEventListener('click', handleOutsideClick);
        }
    };

    const handleOutsideClick = (event) => {
        const b = document.getElementById(BOARD_ID);
        if (b && !b.contains(event.target)) {
            closeBoard();
        }
    };

    if (board) {
        closeBoard();
        return;
    }

    board = document.createElement('div');
    board.id = BOARD_ID;
    board.className = 'tui-board-container';
    
    board.innerHTML = `
        <div class="tui-scanline"></div>
        <div class="tui-header">
            <span>TIC-TAC-TOE v1.0</span>
            <span>_ X</span>
        </div>
        <div class="tui-grid">
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
            <div class="tui-cell"></div>
        </div>
    `;

    document.body.appendChild(board);

    // Fade in
    requestAnimationFrame(() => {
        board.classList.add('show');
    });

    // Add the listener with a slight delay so the current event (if any) doesn't trigger it
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
    }, 100);
})();
