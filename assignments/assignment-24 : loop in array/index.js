// 1. stringIndexMultiplier

function stringIndexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length * i;
    }
    return sum;
}

// console.log(stringIndexMultiplier(["Hello", "world", "!"])); // Output is 7

// 2. divisibilityFilter

function divisibilityFilter(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
            newArr.push(arr[i]);
        } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(divisibilityFilter([3, 5, 15, 18, 20, 30])); // Outputs [3, 5, 18, 20]

// 3. singleDigitSum
function singleDigitSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) < 10) {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(singleDigitSum([-10, 1, -2, 30, 6, -7])); // Outputs -2

// 4. binaryCounter  ?????
function binaryCounter(arr) {
    let numberOfZeroes = 0;
    let numberOfOnes = 0;
    // let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            numberOfZeroes++;
        } else if (arr[i] === 1) {
            numberOfOnes++;
        }
    }
    return [numberOfZeroes, numberOfOnes];
}

// console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1])); // Outputs [4, 4]

// 5. uniqueStringFilter ????
function uniqueStringFilter(arr) {}

uniqueStringFilter([
    "Hello",
    "hello",
    "World",
    "world",
    "WORLD",
    "hello",
    "HELLO",
    "Test"
]); // Outputs ["Hello", "World", "Test"]

// 6. oddNumberSum
function oddNumberSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Outputs 25

// 7. reverseString
function reverseString(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr.length > 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(reverseString(["H", "e", "l", "l", "o"])); // Outputs [ 'o', 'l', 'l', 'e', 'H' ]
// console.log(reverseString([])); // Outputs []
// console.log(reverseString(["a"])); // Outputs [];
// console.log(reverseString(["a", "b"])); // Outputs ["b","a"];

// 8. arrayElementMultiplier
function arrayElementMultiplier(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// console.log(arrayElementMultiplier([1, 2, 3, 4, 5])); // Outputs [2, 4, 6, 8, 10]
// console.log(arrayElementMultiplier([])); // Outputs []

// 9. evenIndexSum  ???????????
function evenIndexSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}

console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Outputs 30
console.log(evenIndexSum([10, 20, 30, 40, 50])); // Outputs 90
console.log(evenIndexSum([])); // Outputs 0
console.log(evenIndexSum([100])); // Outputs 100
