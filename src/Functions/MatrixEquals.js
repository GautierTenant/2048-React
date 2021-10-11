const MatrixEquals = (A, B) => {
    for (let [indexRow, row] of A.entries()) {
        for (let [indexCell, cell] of row.entries()) {
            if (cell !== B[indexRow][indexCell]) return false
        }
    }
    return true
}

export default MatrixEquals