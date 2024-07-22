// 1. findMaxNumber
function findMaxNumber(arr) {
    let maxNumber = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            let currentNumber = subArray[j];
            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
    }

    return maxNumber;
}

// console.log(
//     findMaxNumber([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ])
// );
// Expected output: 9

// 2. countCharacters ????????
function countCharacters(arr) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let countD = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            let element = subArray[j];
            if (element === "a") {
                countA++;
            } else if (element === "b") {
                countB++;
            } else if (element === "c") {
                countC++;
            } else if (element === "d") {
                countD++;
            }
        }
    }
    return { a: countA, b: countB, c: countC, d: countD };
}

// console.log(
//     countCharacters([
//         ["a", "b", "a"],
//         ["c", "a", "d"]
//     ])
// );
// Expected output: { a: 3, b: 1, c: 1, d: 1 }
// 3. filterDivisibleByThree

function filterDivisibleByThree(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            let currentNumber = subArray[j];
            if (currentNumber % 3 === 0 && currentNumber % 5 !== 0) {
                result.push(currentNumber);
            }
        }
    }
    return result;
}

// console.log(
//     filterDivisibleByThree([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ])
// );
// Expected output: [3, 6, 9]

// 4.findLongestString
function findLongestString(arr) {
    let longestStr = "";
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            let currentStr = subArray[j];
            if (currentStr.length > longestStr.length) {
                longestStr = currentStr;
            }
        }
    }
    return longestStr;
}

// console.log(
//     findLongestString([
//         ["apple", "banana"],
//         ["carrot", "date", "eggplant"],
//         ["fig"]
//     ])
// );
// // Expected output: 'eggplant'

// 5. sumArray ?????
// function sumArray(arr) {}

// sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]]);
// Expected output: 45
//  ????????????????????
function capitalizeStrings(arrays) {
    let result = [];

    for (let i = 0; i < arrays.length; i++) {
        let subArray = arrays[i];
        let capitalizedSubArray = [];

        for (let j = 0; j < subArray.length; j++) {
            let capitalizedString = subArray[j].toUpperCase();
            capitalizedSubArray.push(capitalizedString);
        }

        result.push(capitalizedSubArray);
    }

    return result;
}

// console.log(
//     capitalizeStrings([["apple", "banana"], ["carrot", "date"], ["eggplant"]])
// );
// Expected output: [['APPLE', 'BANANA'], ['CARROT', 'DATE'], ['EGGPLANT']]

// 6.findMinMaxArrays
function findMinMaxArrays(arr) {
    let minNum = 0;
    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; i++) {
            let strs = arr[i][j];
            console.log(strs);
        }
    }

    // return { min: [minNum], max: [maxNum] };
}

console.log(
    findMinMaxArrays([
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ])
);
// Expected output: { min: [4, 5], max: [6, 7, 8, 9] }

// 7. mergeNestedArrays
function mergeNestedArrays(arr) {
    let mergedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            let element = subArray[j];
            mergedArr.push(element);
        }
    }
    return mergedArr;
}

// console.log(
//     mergeNestedArrays([
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ])
// );
// Expected output: [1, 2, 3, 4, 5, 6]
