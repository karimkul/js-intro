// 01. arrayToObj
const arrayToObject = function (arr) {
    return {
        country: arr[0],
        population: arr[1],
        language: arr[2],
        gdp: arr[3]
    };
};

// console.log(arrayToObject(["USA", 331000000, "English", 21433226]));

// 02. createBookObject

function createBookObject(name, author, numberOfPages, genre) {
    const book = {
        name: name,
        author: author,
        numberOfPages: numberOfPages,
        genre: genre
    };
    return book;
}

// console.log(createBookObject("1984", "George Orwell", 328, "Dystopian"));
// Outputs: {name: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian"}
// console.log(
//     createBookObject("The Great Gatsby", "F. Scott Fitzgerald", 218, "Novel")
// );
// Outputs: {name: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 218, genre: "Novel"}

// 03. findMaxNumber
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let maxNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

// console.log(findMaxNumber([1, 3, 2, 5, 4])); // Outputs: 5
// console.log(findMaxNumber([])); // Outputs: undefined
// console.log(findMaxNumber([7, 22, 15])); // Outputs: 22

// 04. findMinNumber
function findMinNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}

// console.log(findMinNumber([5, 2, 9, 3])); // Returns: 2
// console.log(findMinNumber([])); // Returns: undefined
// console.log(findMinNumber([45, -10, 0, 30])); // Returns: -10

// 05. findMinMax
function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: undefined, max: undefined };
    }
    let minNum = arr[0];
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return { min: minNum, maxNum: maxNum };
}

// console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6])); // Returns: { min: 1, max: 9 }
// console.log(findMinMax([])); // Returns: { min: undefined, max: undefined }
// console.log(findMinMax([7])); // Returns: { min: 7, max: 7 }

// 06. findLongestShortestString
function findLongestShortestString(str) {
    if (str.length === 0) {
        return { longest: undefined, shortes: undefined };
    }
    let shortes = str[0];
    let longest = str[0];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i];
        }
        if (str[i].length < shortes.length) {
            shortes = str[i];
        }
    }
    return { longest: longest, shortes: shortes };
}

console.log(findLongestShortestString(["apple", "banana", "grape", "kiwi"])); // Returns: { longest: "banana", shortest: "kiwi" }
console.log(findLongestShortestString([])); // Returns: { longest: undefined, shortest: undefined }
console.log(findLongestShortestString(["circle", "point"])); // Returns: { longest: "circle", shortest: "point" }

// 07. countCharactersIgnoreSpaces
function countCharactersIgnoreSpaces(str) {}

countCharactersIgnoreSpaces("hello world"); // Returns: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
countCharactersIgnoreSpaces("banana"); // Returns: { b: 1, a: 3, n: 2 }
countCharactersIgnoreSpaces("!! wow !!"); // Returns: { '!': 4, w: 2, o: 1 }
