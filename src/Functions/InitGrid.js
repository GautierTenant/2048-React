import { GRID_LENGTH } from "../constant"
import AddRandom from "./AddRandom"

const InitGrid = () => {
    // create an empty matrix
    let grid = Array(GRID_LENGTH).fill(null).map(()=>Array(GRID_LENGTH).fill(null))
    // add two random numbers ([2,4])
    grid = AddRandom(grid)
    grid = AddRandom(grid)
    return grid
}

export default InitGrid