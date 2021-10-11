import { GRID_LENGTH } from "../constant"
import AddRandom from "./AddRandom"
import MatrixEquals from "./MatrixEquals"
import TransposeMatrix from "./TransposeMatrix"
import UpdateRow from "./UpdateRow"

const Move = (matrix, transpose=false, reverse=false) => {
    // deepcopy
    let copyMatrix = JSON.parse(JSON.stringify(matrix));
    let newMatrix = []
    let score = 0
    // transpose if vertical move
    if (transpose) copyMatrix = TransposeMatrix(copyMatrix)
    for (let row of copyMatrix) {
        // reverse cause we read left to right
        const result = UpdateRow((reverse) ? row.reverse() : row)
        const newRow = result.row
        score += result.score
        newMatrix.push((newRow.filter(cell => cell !== null) === GRID_LENGTH) ? newRow : (reverse) ? newRow.reverse() : newRow)
    }
    if (transpose) newMatrix = TransposeMatrix(newMatrix)
    // avoid to go infite in a direction
    if (!MatrixEquals(matrix, newMatrix)) newMatrix = AddRandom(newMatrix)
    return {matrix: newMatrix, score}
}

export default Move