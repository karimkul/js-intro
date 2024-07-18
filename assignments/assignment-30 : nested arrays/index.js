// 1. findMaxNumber
function findMaxNumber(arr) {
    let maxNumber = arrays[0][0];

    for (let i = 0; i < arrays.length; i++) {
        let subArray = arrays[i];
        for (let j = 0; j < subArray.length; j++) {
            let currentNumber = subArray[j];

            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
    }

    return maxNumber;
}
findMaxNumber([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
// Expected output: 9
