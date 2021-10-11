import MatrixEquals from "./MatrixEquals";
import Move from "./Move";

const ChangeGrid = (matrix, mode) => {
    let newMatrix = undefined
    let result = undefined
    let score = undefined
    switch (mode) {
        case 'right':
            result = Move(matrix, false, true)
            newMatrix = result.matrix
            score = result.score
            break;
        case 'left':
            result = Move(matrix)
            newMatrix = result.matrix
            score = result.score
            break;
        case 'up':
            result = Move(matrix, true, false)
            newMatrix = result.matrix
            score = result.score
            break;
        case 'down':
            result = Move(matrix, true, true)
            newMatrix = result.matrix
            score = result.score
            break;
        default:
            break;
    }
    if (MatrixEquals(newMatrix, Move(newMatrix, false, true).matrix) && MatrixEquals(newMatrix, Move(newMatrix).matrix) && MatrixEquals(newMatrix, Move(newMatrix, true, false).matrix) && MatrixEquals(newMatrix, Move(newMatrix, true, true).matrix)) {
        return {matrix: newMatrix, status: false, score: 0}
    }
    return {matrix: newMatrix, status: true, score};
}

export default ChangeGrid