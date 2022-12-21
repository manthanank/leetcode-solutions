/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let col = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let box = new Array(9).fill(0).map(() => new Array(9).fill(0));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let num = parseInt(board[i][j]);
                let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
                if (row[i][num - 1] || col[j][num - 1] || box[boxIndex][num - 1]) {
                    return false;
                } else {
                    row[i][num - 1] = 1;
                    col[j][num - 1] = 1;
                    box[boxIndex][num - 1] = 1;
                }
            }
        }
    }
    return true;
};