//  1. extractFirstAndLast
function extractFirstAndLast(arr) {
    var array = [];
    array.unshift(arr[0]);
    array.push(arr[arr.length - 1]);
    return array;
}
console.log(extractFirstAndLast([1, 2, 3, 4])); // Returns: [1, 4]
console.log(extractFirstAndLast([10, 20])); // Returns: [10, 20]

//  2. extractOddSpecialElements
function extractOddSpecialElements(arr) {
    var array = [];
    if (arr.length <= 1) {
        arr;
    }
    if (arr.length > 1) {
        array.push(arr[0]);
    }
    if (arr.length % 2 !== 0) {
        var middleChar = Math.floor(arr.length / 2);
        array.push(arr[middleChar]);
    }
    if (arr.length > 1) {
        array.push(arr[arr.length - 1]);
    }
    return array;
}

console.log(extractOddSpecialElements([1, 2, 3, 4, 5])); // Returns: [1, 3, 5]
console.log(extractOddSpecialElements([10, 20, 30, 40, 50, 60, 70])); // Returns: [10, 40, 70]
console.log(extractOddSpecialElements([15])); // Returns: [15]

//  3. sumStringNumbers  ??????

function sumStringNumbers(arr) {
    if (arr.length <= 1) {
        return parseInt(arr);
    }
    var sum = 0;
    if (arr.length <= 2) {
        sum = parseInt(arr[0]) + parseInt(arr[1]);
        return sum;
    }
    if (arr.length === 3) {
        sum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[3]);
        return sum;
    }
}

console.log(sumStringNumbers(["1", "2", "3"])); // Returns: 6
console.log(sumStringNumbers(["10", "20"])); // Returns: 30
console.log(sumStringNumbers(["5"])); // Returns: 5

// 4. findLongestOfFour

function findLongestOfFour(arr) {
    // var result = [];
    if (
        arr[0].length > arr[1].length &&
        arr[0].length > arr[2].length &&
        arr[0].length > arr[3].length
    ) {
        return arr[0];
    } else if (
        arr[1].length > arr[0].length &&
        arr[1].length > arr[2].length &&
        arr[1].length > arr[3].length
    ) {
        return arr[1];
    } else if (
        arr[2].length > arr[0].length &&
        arr[2].length > arr[1].length &&
        arr[2].length > arr[3].length
    ) {
        return arr[2];
    } else if (
        arr[3].length > arr[0].length &&
        arr[3].length > arr[1].length &&
        arr[3].length > arr[2].length
    ) {
        return arr[3];
    }
    // return result;
}

console.log(findLongestOfFour(["apple", "banana", "cherry", "date"])); // Returns: "banana" ??????
console.log(findLongestOfFour(["dog", "cats", "elephant", "bee"])); // Returns: "elephant"
console.log(findLongestOfFour(["dog", "cats", "elephant", "bee"])); // Returns: "elephant"

// 5. sumSelectedWordLengths
function sumSelectedWordLengths(arr) {
    var sum = 0;
    if (arr.length % 2 === 0) {
        var evenNum1 = arr[0].length;
        var evenNum2 = arr[arr.length - 1].length;
        sum = evenNum1 + evenNum2;
    } else if (arr.length % 2 !== 0) {
        var midChar = Math.floor(arr.length / 2);
        var oddNum1 = arr[0].length;
        var oddNum2 = arr[midChar].length;
        var oddNum3 = arr[arr.length - 1].length;
        sum = oddNum1 + oddNum2 + oddNum3;
    }

    return sum;
}

console.log(sumSelectedWordLengths(["hello", "world", "again"])); // Returns: 15 (5 + 5 + 5)
console.log(sumSelectedWordLengths(["quick", "brown", "fox", "jumps"])); // Returns: 10 (5 + 5)
console.log(sumSelectedWordLengths(["one", "two", "three", "four", "five"])); // Returns: 12 (3 + 5 + 4)
