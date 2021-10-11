const AddOccurences = (array) => {
    let newArray = []
    let score = 0
    for (let i = 0; i<array.length; i++) {
        if (array[i] === array[i+1]) {
            score += array[i] * 2
            newArray.push(array[i] * 2)
            i++
        } else {
            newArray.push(array[i])
        }
    }
    return {array: newArray, score}
}

export default AddOccurences