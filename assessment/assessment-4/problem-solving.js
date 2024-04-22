// 1. Challenge
var singleWord = "heaven";
var index1 = Math.floor(Math.random() * singleWord.length);
var index2 = Math.floor(Math.random() * singleWord.length);
var char1 = singleWord[index1].toUpperCase();
var char2 = singleWord[index2].toUpperCase();

if (char1 === char2) {
    console.log(true);
} else {
    console.log(false);
}
console.log(char1 + char2);

// 2. Challenge
var randomNumber1 = Math.ceil(Math.random() * 1000);
console.log(randomNumber1);
var oddNum = randomNumber1 % 2 !== 0;
var evenNum = randomNumber1 % 2 === 0;
console.log(oddNum);
console.log(evenNum);

// 3. Challenge
var numerator = Math.floor(Math.random() * (-100 + 1) - 1);
var denominator = Math.floor(Math.random() * 4) + 5;
var result = numerator / denominator;
console.log("Original result: " + result);
console.log("Rounded result: " + Math.round(result));

// 4. Challenge
var randomNumber = Math.floor(Math.random() * 2500) - 25;
var testDivisible3 = randomNumber % 3 === 0 && randomNumber % 5 !== 0;
console.log(randomNumber);
console.log(testDivisible3);

// 5.  Challenge
var divTest = Math.floor(Math.random() * 101) + 100;
var testDivisible5 = divTest % 5 === 0 && divTest % 3 !== 0;
console.log(divTest);
console.log(testDivisible5);

// 6. Challenge
var creativeString =
    "Exploring the vast universe of code can lead to unexpected discoveries.";
var randomIndex = Math.floor(Math.random() * creativeString.length);
var slicedText = creativeString.slice(randomIndex + 1);
console.log("Text after index " + randomIndex + ": " + slicedText);
