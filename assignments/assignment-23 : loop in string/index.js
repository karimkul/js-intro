// 1. stringToArray
function stringToArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
}

// console.log(stringToArray("Hello, World!")); // Returns: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
// console.log(stringToArray("JavaScript")); // Returns: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// 2. areVowelsMore
function areVowelsMore(str) {
    let volwels = 0;
    let consonants = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            volwels++;
        } else {
            consonants++;
        }
    }
    return volwels > consonants;
}

console.log(areVowelsMore("Hello")); // Returns: false (2 vowels, 3 consonants)
console.log(areVowelsMore("Eerie")); // Returns: true (4 vowels, 1 consonant)

// 3. sumOfLetterPositions
function sumOfLetterPositions(str) {
    let sum = 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        let position = alphabet.indexOf(char);
        if (position !== -1) {
            sum += position + 1;
        }
    }

    return sum;
}

console.log(sumOfLetterPositions("abc")); // Returns: 6 (1 + 2 + 3)
console.log(sumOfLetterPositions("Hello")); // Returns: 52 (8 + 5 + 12 + 12 + 15)

// 4. countMatchingChars
function countMatchingChars(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("String length is not equal!!!");
    }
    let result = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            result++;
        }
    }
    return result;
}

// console.log(countMatchingChars("hello", "hxllo")); // Returns: 4 (h, l, l, o match)
// console.log(countMatchingChars("abc", "def")); // Returns: 0 (no matching characters)

// 5. convertToAlphabetPositions
// function convertToAlphabetPositions(str) {}

// convertToAlphabetPositions("abc"); // Returns: "1 2 3"
// convertToAlphabetPositions("Hello World!"); // Returns: "8 5 12 12 15 23 15 18 12 4"

// 6. extractConsonants
function extractConsonants(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !== "a" &&
            str[i] !== "e" &&
            str[i] !== "i" &&
            str[i] !== "o" &&
            str[i] !== "u"
        ) {
            arr.push(str[i]);
        }
    }
    return arr;
}

// console.log(extractConsonants("Hello, World!")); // Returns: ["H", "l", "l", "W", "r", "l", "d"]
// console.log(extractConsonants("JavaScript")); // Returns: ["J", "v", "S", "c", "r", "p", "t"]

// 7. countUppercaseLetters
function countUppercaseLetters(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
            count++;
        }
    }
    return count;
}
console.log(countUppercaseLetters("Hello, World!")); // Returns: 2
console.log(countUppercaseLetters("JavaScript")); // Returns: 2

// 8. hasConsecutiveSameLetters
function hasConsecutiveSameLetters(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return true;
        }
    }
    return false;
}

hasConsecutiveSameLetters("hello"); // Returns: true (because of "ll")
hasConsecutiveSameLetters("world"); // Returns: false
// 10. countQueryCharacters

function countQueryCharacters(str) {
    let questionMarkCount = 0;
    let ampersandCount = 0;
    let equalCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "?") {
            questionMarkCount++;
        } else if (str[i] === "&") {
            ampersandCount++;
        } else if (str[i] === "=") {
            equalCount++;
        }
    }
    return [questionMarkCount, ampersandCount, equalCount];
}
// console.log(
//     countQueryCharacters("https://example.com?page=1&sort=desc&order=asc")
// ); // Returns: [1, 3, 2]
// console.log(
//     countQueryCharacters(
//         "https://example.com?search=test&filter=active&limit=10"
//     )
// ); // Returns: [1, 3, 2]
