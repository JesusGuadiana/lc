//https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minimumArea(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const columns = grid[0].length;

    let minRows = rows;
    let maxRows = -1;
    let minCols = columns;
    let maxCols = -1;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(grid[i][j] === 1){
                minRows = Math.min(minRows, i);
                maxRows = Math.max(maxRows, i);
                minCols = Math.min(minCols, j);
                maxCols = Math.max(maxCols, j);
            }
        }
    }


    const rowWidt = maxRows - minRows + 1;
    const colwidt = maxCols - minCols + 1;

    return rowWidt * colwidt;
}