import { GRID_LENGTH, INIT_NUMBERS } from "../constant"
import GetRandomInt from "./GetRandomInt"

const AddRandom = (matrix) => {
    // check if we can add a random number
    if (matrix.every(row => row.every(cell => cell !== null) === true)) return matrix
    let status = true
    while (status) {
        const row = GetRandomInt(GRID_LENGTH) 
        const col = GetRandomInt(GRID_LENGTH)
        if (matrix[row][col] === null) {
            matrix[row][col] = INIT_NUMBERS[GetRandomInt(INIT_NUMBERS.length)]
            status = false
        }
    }
    return matrix
}

export default AddRandom