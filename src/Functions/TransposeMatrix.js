const TransposeMatrix = (matrix) => {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

export default TransposeMatrix