import { GRID_LENGTH } from "../constant"
import AddOccurences from "./AddOcurences"

const UpdateRow = (row) => {
    let newRow = Array(GRID_LENGTH).fill(null)
    const rowWithtoutNull = row.filter(cell => cell !== null)
    const result = AddOccurences(rowWithtoutNull)
    const newRowWithoutNull = result.array
    const score = result.score
    for (let [index, cell] of newRowWithoutNull.entries()) {
        newRow[index] = cell
    }
    return {row: newRow, score}
}

export default UpdateRow